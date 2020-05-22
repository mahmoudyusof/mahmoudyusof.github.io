<template>
  <v-container>
    <vue-simple-markdown :source="md"></vue-simple-markdown>

    <a
      href="https://stanford.edu/~shervine/blog/keras-how-to-generate-data-on-the-fly)"
    >Reference Article</a>
    <br />
    <a href="https://github.com/mahmoudyusof/facial_keypoint_detection">My Notebooks</a>
  </v-container>
</template>

<script>
import article from "../../article_mds/datagenerator.json";
export default {
  created() {
    this.md = article.md.join("\n");
  },
  data() {
    return {
      md: ""
    };
  }
};
</script>

<style>
</style>