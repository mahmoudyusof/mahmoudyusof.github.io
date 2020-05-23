<template>
  <Layout :article="true">
    <v-container class="background">
      <v-skeleton-loader loading class="primary" v-if="loading" type="article"></v-skeleton-loader>
      <br />
      <v-skeleton-loader loading class="primary" v-if="loading" type="article"></v-skeleton-loader>
      <div class="md-container" v-html="md"></div>
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
        property: "og:image",
        content: "../../assets/articles/data-generator.jpg"
      },
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
.md-container > h1,
.md-container > h2,
.md-container > h3,
.md-container > h4,
.md-container > h5,
.md-container > h6,
.md-container > p {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
}
.md-container > p {
  font-weight: 300;
}
</style>