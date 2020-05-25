<template>
  <Layout :article="true">
    <v-container class="background">
      <div class="md-container" v-html="$page.article.content"></div>
    </v-container>
  </Layout>
</template>

<page-query>
query ($id: ID!){
	article(id: $id){
    content,
    id,
    title,
    type,
    description,
    image,
    url
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.article.title,
      meta: [
        { property: "og:type", content: this.$page.article["type"] },
        { property: "og:title", content: this.$page.article["title"] },
        { property: "og:image", content: this.$page.article["image"] },
        {
          property: "og:description",
          content: this.$page.article["description"]
        },
        { property: "og:url", content: this.$page.article["url"] }
      ]
    };
  }
};
</script>

<style>
hr {
  color: transparent;
  border-radius: 50%;
  margin-bottom: 35px;
}
code::before,
code::after {
  content: "" !important;
}
pre {
  background: #222 !important;
  border-radius: 10px;
  box-shadow: -3px 3px 4px 1px #0002;
}
pre > code {
  width: 100%;
  padding: 10px;
  box-shadow: none !important;
}
code {
  padding: 1px 10px;
  background-color: #222 !important;
  color: #ddd !important;
  text-shadow: none !important;
}
.mdlink {
  color: var(--v-text-base) !important;
}
.md-container {
  padding: 5px 30px;
}
.md-container > h1,
.md-container > h2,
.md-container > h3,
.md-container > h4,
.md-container > h5,
.md-container > h6,
.md-container > p,
.md-container > ul {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  margin-bottom: 10px;
}
.md-container > p {
  font-weight: 300;
}
.md-container table,
.md-container table th,
.md-container table td {
  border: 1px solid var(--v-text-base);
  padding: 5px;
}
.md-container table {
  border-collapse: collapse;
}
.token.operator {
  background-color: transparent !important;
}
</style>