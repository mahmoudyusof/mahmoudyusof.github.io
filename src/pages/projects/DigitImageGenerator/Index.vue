<template>
  <Layout article>
    <v-container>
      <v-row>
        <v-col sm="3" lg="3" md="3">
          <v-btn color="text--text" class="primary" :disabled="loading" :loading="loading" @click="generate">Generate</v-btn>
        </v-col>
        <v-col>
          <v-slider :disabled="loading" max="9" min="0" :label="`Select Number (${cls})`" v-model="cls"></v-slider>
        </v-col>
      </v-row>
      <v-row v-for="row in 2" :key="row">
        <v-col class="center" v-for="col in 4" :key="col">
          <canvas ref="imgs"></canvas>
        </v-col>
      </v-row>
    </v-container>
  </Layout>
</template>
<script>
import * as tf from "@tensorflow/tfjs";

export default {
  mounted() {
    if (this.model) model.dispose();
    tf.loadGraphModel("localstorage://generator_model")
      .then((model) => {
        this.model = model;
        this.loading = false;
        console.log("loaded from localstorage");
        this.generate();
      })
      .catch((e) => {
        console.log("didn't load from localstorage");
        console.log(e);
        tf.loadGraphModel("/gen_web/model.json")
          .then((model) => {
            this.model = model;
            model.save("localstorage://generator_model");
            this.loading = false;
            console.log("loaded from server");
            this.generate();
          })
          .catch((e) => {
            console.log("didn't load");
            console.log(e);
            this.loading = false;
          });
      });
  },
  beforeDestroy() {
    if (this.model) {
      this.model.dispose();
    }
  },
  data() {
    return {
      model: null,
      loading: true,
      cls: 7
    };
  },
  methods: {
    generate() {
      this.loading = true;
      const n = 8;
      tf.tidy(() => {
        const z = tf.randomNormal([n, 100]);
        const labels = tf.randomUniform([n, 1], this.cls, this.cls + 1, "int32").cast("float32");
        let outs = this.model.execute([z, labels]);
        outs = tf.add(tf.stack([outs, outs, outs], 3), tf.scalar(1.0));
        outs = tf.div(outs, tf.max(outs));
        let arr = [];
        for (let i = 0; i < n; i++) {
          let img = outs.slice(i, 1).squeeze();
          img = tf.image.resizeNearestNeighbor(img, [200, 200]);
          arr.push(tf.browser.toPixels(img, this.$refs.imgs[i]));
        }
        Promise.all(arr).then(res => {
          this.loading = false;
        })
      });
    },
  },
};
</script>
<style scoped>
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>