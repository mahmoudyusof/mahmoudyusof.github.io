<template>
  <Layout article>
    <v-container>
      <v-btn @click="generate">Generate</v-btn>
      <v-row v-for="row in 3" :key="row">
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
  created() {
    if(this.model) model.dispose();
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
        tf.loadGraphModel("/web_generator/model.json")
          .then((model) => {
            this.model = model;
            model.save("localstorage://generator_model");
            this.loading = false;
            console.log("loaded from server");
            this.generate();
          })
          .catch((e) => {
            console.log("didn't load")
            console.log(e);
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
      img: null,
      url: null,
      digits: [],
    };
  },
  methods: {
    generate() {
      tf.tidy(() => {
        const z = tf.randomNormal([12, 10]);
        // const z = tf.randomUniform([12, 100], 1, 1)
        let outs = this.model.execute(z);
        outs = tf.stack([outs, outs, outs], 3);

        for (let i = 0; i < 12; i++) {
          let img = outs.slice(i, 1).squeeze();
          img = tf.image.resizeNearestNeighbor(img, [200, 200]);
          tf.browser.toPixels(img, this.$refs.imgs[i]);
        }
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