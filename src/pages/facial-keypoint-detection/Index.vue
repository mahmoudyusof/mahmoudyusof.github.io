<template>
  <Layout :article="true">
    <v-container>
      <v-skeleton-loader loading color="primary" v-if="loading" type="article"></v-skeleton-loader>
      <br />
      <v-skeleton-loader loading color="primary" v-if="loading" type="article"></v-skeleton-loader>
      <div v-html="md"></div>
    </v-container>
  </Layout>
</template>

<script>
import marked from "marked";
import highlight from "highlight.js";
import "highlight.js/styles/vs.css";
export default {
  metaInfo: {
    script: {
      src:
        "https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js?lang=python&amp;skin=sunburst"
    }
  },
  created() {
    fetch("/articles/facial_keypoint_detection/datagenerator.md")
      .then(res => {
        return res.text();
      })
      .then(data => {
        this.md = marked(data, {
          highlight: function(md) {
            return highlight.highlightAuto(md).value;
          }
        });
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        this.loading = false;
      });
  },
  data() {
    return {
      loading: true,
      md: ""
    };
  }
};
</script>

<style>
hr {
  color: transparent;
  border-radius: 50%;
  margin-bottom: 10px;
}
code {
  padding: 3px 10px;
}
.mdlink {
  color: var(--v-text-base) !important;
}
</style>