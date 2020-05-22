<template>
  <Layout :article="true">
    <v-container>
      <v-skeleton-loader loading class="primary" v-if="loading" type="article"></v-skeleton-loader>
      <br />
      <v-skeleton-loader loading class="primary" v-if="loading" type="article"></v-skeleton-loader>
      <div v-html="md"></div>
    </v-container>
  </Layout>
</template>

<script>
import marked from "marked";
import highlight from "highlight.js";
import "highlight.js/styles/github.css";
import axios from "axios";
export default {
  metaInfo: {
    script: {
      src:
        "https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js?lang=python&amp;skin=sunburst"
    },
    title: "Data Generators",
    meta: [
      { property: "og:type", content: "article" },
      { property: "og:title", content: "Data Generators in tensorflow" },
      {
        property: "og:description",
        content:
          "explaining how to load batches of data into memory instead of the entire dataset for more effeciency"
      }
    ]
  },
  created() {
    axios("/articles/facial_keypoint_detection/datagenerator.md")
      .then(({ data }) => {
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
pre > code {
  width: 100%;
}
code {
  padding: 3px 10px;
}
.mdlink {
  color: var(--v-text-base) !important;
}
</style>