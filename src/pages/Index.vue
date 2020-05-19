<template>
  <Layout>
    <section class="home-grid" id="projects">
      <div class="article-link">
        <div class="shade">
          <h2>Welcome to SembaSource</h2>
          <p>Where you can find amazing articles and projects about software engineering.</p>
          <v-btn
            class="cta"
            color="primary"
            href="https://github.com/mahmoudyusof"
            target="_blank"
          >Browse My work</v-btn>
        </div>
      </div>
      <div class="article-link">
        <div class="shade">
          <h2>Vue Dynamic Forms</h2>
          <p>A Vue.js component library to help you create forms easily and dynamically.</p>
          <v-btn class="cta" color="primary" large tile>Visit Repo</v-btn>
        </div>
      </div>
      <div class="article-link">
        <div class="shade">
          <h2>Facial keypoint detection</h2>
          <p>
            In this project you will learn how to make a convolutional neural network
            that can get the keypoints on a face detected in an image.
            We will be using Tensorflow and OpenCV
          </p>
          <v-btn class="cta" color="primary" large tile>Visit Repo</v-btn>
        </div>
      </div>
    </section>

    <section id="about">
      <h2>Mahmoud Youssef</h2>
      <p class="j-title">Software Engineering Student</p>
      <p>
        Got a challange for me?
        <br />If it's in
        <strong>Machine learning</strong>,
        <strong>DataScience</strong>,
        <strong>FrontEnd Development</strong> or
        <strong>BackEnd Development</strong>,
        check my skills and WHEN you see that I am the one for it, my contact form is right bellow them ,
        so just email me.
      </p>
      <p>
        Also if you like some of my projects and you have any questions I'd be glad to answer them,
        so don't think twice, just contact me.
      </p>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Home"
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
  min-height: 300px;
  color: white;
  background-image: url("/main.jpg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}
.shade {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;
  padding: 10px 20px;
  width: 100%;
  height: 100%;
}
.shade::before {
  content: "";
  position: absolute;
  top: 100%;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0;
  background-image: linear-gradient(to top, #263238aa 20%, #26323833 80%);
  z-index: 0;
  transition: all ease-in-out 0.3s;
}
.shade:hover:before {
  top: 0;
  opacity: 1;
}
.shade > h2 {
  font-size: 2rem;
  font-family: "Roboto", sans-serif;
  font-weight: lighter;
  margin-bottom: 30px;
  font-weight: 300;
  z-index: 1;
}
.shade > p {
  font-weight: 300;
  font-size: 1.1rem;
  z-index: 1;
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
.shade > div {
  display: flex;
}
.cta {
  margin-top: 20px;
  width: 100%;
}
#about {
  background-color: var(--v-primary-base);
  margin: 10px 0;
  padding: 30px;
}
.j-title {
  font-weight: 500;
  font-family: "Roboto", sans-serif;
  border-bottom: 1px solid var(--v-accent-base);
}
#about > h2 {
  font-family: "Roboto", sans-serif;
  font-weight: 600;
}
@media screen and (max-width: 550px) {
  .home-grid {
    grid-template-rows: 1fr 1fr 1fr;
  }
  .shade {
    padding: 15px;
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
  #about {
    padding: 30px 15px;
  }
}
</style>
