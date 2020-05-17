<template>
  <Layout>
    <div class="home-grid">
      <div class="article-link">
        <h2>Welcome to SembaSource</h2>
        <p>Where you can find amazing articles and projects about software engineering.</p>
      </div>
      <div class="article-link">
        <h2>Vue Forms</h2>
        <p>A Vue.js component library to help you create forms easily and dynamically.</p>
        <v-btn class="cta" color="accent" large tile>Visit</v-btn>
      </div>
      <div class="article-link">
        <h2>Facial keypoint detection</h2>
        <p>
          In this project you will learn how to make a convolutional neural network
          that can get the keypoints on a face detected in an image.
          We will be using Tensorflow and OpenCV
        </p>
        <v-btn class="cta" color="accent" large tile>Visit</v-btn>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Hello, world!"
  }
};
</script>

<style>
.home-grid {
  display: grid;
  grid-template-columns: 5fr 4fr;
  grid-template-rows: 1fr 1fr;
  gap: 10px;
  width: 100%;
}
.article-link {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;
  padding: 10px 20px;
  min-height: 300px;
  color: white;
  background-image: url("/main.jpg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}
.article-link > h2 {
  font-size: 2rem;
  font-family: sans-serif;
  font-weight: lighter;
  margin-bottom: 30px;
}
.article-link > p {
  font-weight: 300;
  font-size: 1.1rem;
}
.article-link:nth-of-type(1) {
  grid-column: 1 / 2;
  grid-row: 1 / 2;
}
.article-link:nth-of-type(2) {
  grid-column: 2 / 3;
  grid-row: 1 / 3;
}
.article-link:nth-of-type(3) {
  grid-column: 1 / 2;
  grid-row: 2 / 3;
}
.article-link > div {
  display: flex;
}
.cta {
  margin-top: 20px;
  width: 100%;
}
@media screen and (max-width: 400px) {
  .home-grid {
    grid-template-rows: 1fr 1fr 1fr;
  }
  .article-link {
    padding: 10px;
  }
  .article-link:nth-of-type(1) {
    grid-column: 1 / 3;
    grid-row: 1 / 2;
  }
  .article-link:nth-of-type(3) {
    grid-column: 1 / 3;
    grid-row: 2 / 3;
  }
  .article-link:nth-of-type(2) {
    grid-column: 1 / 3;
    grid-row: 3 / 4;
  }
  .home-grid {
    gap: 5px;
  }
}
</style>
