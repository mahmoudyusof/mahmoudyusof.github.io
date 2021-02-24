<template>
  <Layout>
    <section class="home-grid" id="projects">
      <div
        :class="{'article-link': true, 'dark-bg': $vuetify.theme.dark, 'light-bg': !$vuetify.theme.dark}"
      >
        <div class="shade">
          <h2>Hi, My name is Mahmoud Youssef</h2>
          <p>
            Welcome to my website Where you can find amazing articles and projects about software engineering.
            I would recommend visiting my repositories and reading the source code since most of it is well documented and could be very helpful to you.
            I hope you find some of my projects and articles useful, Have a great life :)
          </p>
          <v-btn
            class="cta primary text--text"
            href="https://github.com/mahmoudyusof"
            target="_blank"
            tile
            large
          >
            Browse My work
            <v-icon right>fab fa-github</v-icon>
          </v-btn>
        </div>
      </div>
      <div
        :class="{'article-link': true, 'dark-bg': $vuetify.theme.dark, 'light-bg': !$vuetify.theme.dark}"
      >
        <div class="shade">
          <h2>Sorting Algorithms Visualizer</h2>
          <p>I really love Vue.js and I also love algorithms visualization, In this project I get to use Vue.js to show you four of the most popular sorting algorithms in action.</p>
          <v-row style="width: 100%; margin: 0 auto;" dense>
            <v-col>
              <v-btn
                class="cta primary text--text"
                large
                tile
                href="https://github.com/mahmoudyusof/sorting-visualization-vue"
                target="_blank"
              >
                Visit Repo
                <v-icon right>fab fa-github</v-icon>
              </v-btn>
            </v-col>
            <v-col>
              <v-btn
                class="cta primary text--text"
                large
                tile
                href="https://mahmoudyusof.github.io/sorting-visualization-vue"
              >Play around</v-btn>
            </v-col>
          </v-row>
        </div>
      </div>
      <div
        :class="{'article-link': true, 'dark-bg': $vuetify.theme.dark, 'light-bg': !$vuetify.theme.dark}"
      >
        <div class="shade">
          <h2>Neural Style Transfer</h2>
          <p>Using a pretrained CNN to repaint an image in the style of a different image. Want to see how you'd look as a Van Gogh painting? check out this project.</p>
          <v-btn
            class="cta primary text--text"
            large
            tile
            href="https://github.com/mahmoudyusof/neural-style-transfer"
            target="_blank"
          >
            Visit Repo
            <v-icon right>fab fa-github</v-icon>
          </v-btn>
        </div>
      </div>
      <div
        :class="{'article-link': true, 'dark-bg': $vuetify.theme.dark, 'light-bg': !$vuetify.theme.dark}"
      >
        <div class="shade">
          <h2>Facial keypoint detection</h2>
          <p>
            In this project you will learn how to make a convolutional neural network
            that can get the keypoints on a face detected in an image.
            We will be using Tensorflow and OpenCV
          </p>
          <v-row style="width: 100%; margin: 0 auto;" dense>
            <v-col>
              <v-btn
                class="cta primary text--text"
                large
                tile
                href="https://github.com/mahmoudyusof/facial_keypoint_detection"
                target="_blank"
              >
                Visit Repo
                <v-icon right>fab fa-github</v-icon>
              </v-btn>
            </v-col>
            <v-col>
              <v-btn
                class="cta primary text--text"
                large
                tile
                to="/facial-keypoint-detection/data-generator"
              >Read Article</v-btn>
            </v-col>
          </v-row>
        </div>
      </div>
    </section>

    <section id="articles">
      <h2>Articles</h2>
      <v-card
        class="primary"
        color="text--text"
        tile
        elevation="0"
      >
        <v-list color="text--text" class="primary" dense>
          <v-list-item-group>
            <v-list-item
              v-for="(edge, i) in $page.allArticle.edges"
              :key="i"
              link
              :to="edge.node.path"
            >
              <v-list-item-icon>
                <v-icon>far fa-file-alt</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="edge.node.title"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
    </section>

    <section id="about">
      <v-row>
        <v-col class="avatar-col" cols="12" md="3" lg="3" sm="12" xs="12">
          <g-image class="avatar" src="../assets/avatar.jpg"></g-image>
        </v-col>
        <v-col class="about" xl="9" md="9" lg="9" sm="12" cols="12">
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
        </v-col>
      </v-row>
    </section>

    <section id="skills">
      <h2>My Skills</h2>
      <v-row>
        <!--  -->
        <v-col>
          <div class="skill">
            <span>JavaScript</span>
            <v-rating
              full-icon="star"
              empty-icon="star_outline"
              background-color="accent"
              dense
              readonly
              color="accent lighten-3"
              :value="5"
            ></v-rating>
          </div>
          <div class="skill">
            <span>VueJS</span>
            <v-rating
              full-icon="star"
              empty-icon="star_outline"
              background-color="accent"
              dense
              readonly
              color="accent lighten-3"
              :value="5"
            ></v-rating>
          </div>
          <div class="skill">
            <span>ExpressJS</span>
            <v-rating
              full-icon="star"
              empty-icon="star_outline"
              background-color="accent"
              dense
              readonly
              color="accent lighten-3"
              :value="3"
            ></v-rating>
          </div>
          <div class="skill">
            <span>CSS</span>
            <v-rating
              full-icon="star"
              empty-icon="star_outline"
              background-color="accent"
              dense
              readonly
              color="accent lighten-3"
              :value="4"
            ></v-rating>
          </div>
          <div class="skill">
            <span>Testing (jest)</span>
            <v-rating
              full-icon="star"
              empty-icon="star_outline"
              background-color="accent"
              dense
              readonly
              color="accent lighten-3"
              :value="3"
            ></v-rating>
          </div>
        </v-col>
        <!--  -->
        <v-col>
          <div class="skill">
            <span>Python</span>
            <v-rating
              full-icon="star"
              empty-icon="star_outline"
              background-color="accent"
              dense
              readonly
              color="accent lighten-3"
              :value="4"
            ></v-rating>
          </div>
          <div class="skill">
            <span>Scikit learn</span>
            <v-rating
              full-icon="star"
              empty-icon="star_outline"
              background-color="accent"
              dense
              readonly
              color="accent lighten-3"
              :value="3"
            ></v-rating>
          </div>
          <div class="skill">
            <span>Pandas</span>
            <v-rating
              full-icon="star"
              empty-icon="star_outline"
              background-color="accent"
              dense
              readonly
              color="accent lighten-3"
              :value="3"
            ></v-rating>
          </div>
          <div class="skill">
            <span>Tensorflow (Keras)</span>
            <v-rating
              full-icon="star"
              empty-icon="star_outline"
              background-color="accent"
              dense
              readonly
              color="accent lighten-3"
              :value="3"
            ></v-rating>
          </div>
          <div class="skill">
            <span>Numpy</span>
            <v-rating
              full-icon="star"
              empty-icon="star_outline"
              background-color="accent"
              dense
              readonly
              color="accent lighten-3"
              :value="3"
            ></v-rating>
          </div>
        </v-col>
        <!--  -->
        <v-col>
          <div class="skill">
            <span>Git</span>
            <v-rating
              full-icon="star"
              empty-icon="star_outline"
              background-color="accent"
              dense
              readonly
              color="accent lighten-3"
              :value="3"
            ></v-rating>
          </div>
          <div class="skill">
            <span>Linux Terminal</span>
            <v-rating
              full-icon="star"
              empty-icon="star_outline"
              background-color="accent"
              dense
              readonly
              color="accent lighten-3"
              :value="3"
            ></v-rating>
          </div>
          <div class="skill">
            <span>Firebase</span>
            <v-rating
              full-icon="star"
              empty-icon="star_outline"
              background-color="accent"
              dense
              readonly
              color="accent lighten-3"
              :value="2"
            ></v-rating>
          </div>
          <div class="skill">
            <span>MongoDB</span>
            <v-rating
              full-icon="star"
              empty-icon="star_outline"
              background-color="accent"
              dense
              readonly
              color="accent lighten-3"
              :value="3"
            ></v-rating>
          </div>
          <div class="skill">
            <span>Laravel</span>
            <v-rating
              full-icon="star"
              empty-icon="star_outline"
              background-color="accent"
              dense
              readonly
              color="accent lighten-3"
              :value="2"
            ></v-rating>
          </div>
        </v-col>
        <!--  -->
      </v-row>
    </section>

    <section id="contact">
      <h2>Contact me</h2>
      <v-form @submit.prevent="submit" ref="form" v-model="valid" :lazy-validation="false">
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="name"
              :rules="nameRules"
              filled
              dense
              label="Name"
              hint="John Doe"
              required
              color="light"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              color="light"
              v-model="email"
              :rules="emailRules"
              filled
              dense
              label="E-mail"
              required
              hint="john@gmail.com"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-textarea
              v-model="message"
              label="Message"
              required
              :rules="messageRules"
              filled
              dense
              color="light"
              auto-grow
            ></v-textarea>
          </v-col>
        </v-row>

        <v-btn @click="submit" :loading="loading" color="text--text" class="mr-4 primary">
          <span v-if="!(success || fail)">Submit</span>
          <v-icon v-if="success">done</v-icon>
          <v-icon v-if="fail">clear</v-icon>
        </v-btn>
      </v-form>
    </section>
  </Layout>
</template>

<page-query>
query{
  allArticle(sortBy: "id", order:DESC){
    edges{
      node{
        path,
        slug,
        title
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: "Home",
    meta: [
      { name: "google-site-verification", content: "bbqKmT64zDimsKRiscHf_q-HmPAOJ6XpCynYCsB-uRE"},
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Mahmoud Youssef's portfolio" },
      {
        property: "og:image",
        content: "https://mahmoudyusof.github.io/seo_images/avatar.jpg"
      },
      {
        property: "og:description",
        content:
          "Here I share projects and articles related to deep learning, computer vision and THE AWESOME VUE.JS, follow me on linkedin, twitter or github to get the latest updates"
      },
      { property: "og:url", content: "https://mahmoudyusof.github.io" }
    ]
  },
  data: () => ({
    success: false,
    fail: false,
    valid: true,
    loading: false,
    name: "",
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 10) || "Name must be less than 10 characters"
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    message: "",
    messageRules: [v => !!v || "Message is required"]
  }),
  methods: {
    validate() {
      this.$refs.form.validate();
    },
    submit() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        this.$db
          .collection("messages")
          .add({
            name: this.name,
            email: this.email,
            message: this.message
          })
          .then(() => {
            this.$refs.form.reset();
            this.success = true;
            setTimeout(() => {
              this.success = false;
            }, 1000);
          })
          .catch(e => {
            this.fail = true;
            setTimeout(() => {
              this.fail = false;
            }, 1000);
          })
          .finally(() => {
            this.loading = false;
          });
      }
    }
  }
};
</script>

<style>
.home-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 1fr 1fr;
  gap: 10px;
  width: 100%;
}
.article-link {
  min-height: 300px;
  color: var(--v-text-base);
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}
.dark-bg {
  background-image: url("../assets/main.jpg");
}
.dark-bg .shade {
  background-color: #7b8d9633;
}
.dark-bg .shade::before {
  background-image: linear-gradient(to top, #263238aa 20%, #26323800 80%);
}
.light-bg .shade::before {
  background-image: linear-gradient(to top, #fffa 20%, #fff0 80%);
}
.light-bg .shade {
  background-color: transparent;
}
.light-bg {
  background-image: url("../assets/white.jpg");
}
/* .shade {
  position: relative;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;
  padding: 10px 20px;
  width: 100%;
  height: 100%;
} */
.shade {
  position: relative;
  min-height: 300px;
  padding: 10px 20px;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: repeat(3, auto);
  align-content: space-between;
}
.shade::before {
  content: "";
  position: absolute;
  display: block;
  top: 100%;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0;
  z-index: 0;
  transition: all ease-in-out 0.3s;
}
.shade:hover::before {
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
  grid-column: 1 / 8;
  grid-row: 1 / 2;
}
.article-link:nth-of-type(2) {
  grid-column: 8 / 13;
  grid-row: 1 / 2;
}
.article-link:nth-of-type(3) {
  grid-column: 1 / 6;
  grid-row: 2 / 3;
}
.article-link:nth-of-type(4) {
  grid-column: 6 / 13;
  grid-row: 2 / 3;
}
.shade > div {
  display: flex;
}
.cta {
  margin-top: 20px;
  width: 100%;
}
#about,
#articles,
#skills,
#contact {
  background-color: var(--v-background-base);
  margin: 10px 0;
  padding: 30px;
}
.skill {
  display: flex;
  height: 30px;
  justify-content: flex-start;
  align-items: center;
}
.skill span {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 1.2rem;
  min-width: 165px;
}
.j-title {
  font-weight: 500;
  font-family: "Roboto", sans-serif;
  border-bottom: 1px solid var(--v-accent-base);
}
#about h2,
#skills > h2,
#articles > h2 {
  font-family: "Roboto", sans-serif;
  font-weight: 600;
}
#skills > h2,
#articles > h2,
#contact > h2 {
  border-bottom: 1px solid var(--v-accent-base);
}
.avatar-col {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
}
.avatar {
  max-width: 300px;
  width: 100%;
  border-radius: 50% 50% 0 50%;
}
.about {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.off {
  opacity: 0;
  transform: translateX(30px);
}
@media screen and (max-width: 600px) {
  .home-grid {
    grid-template-rows: repeat(4, 1fr);
  }
  .shade {
    padding: 15px;
  }
  .article-link:nth-of-type(1) {
    grid-column: 1 / 13;
    grid-row: 1 / 2;
  }
  .article-link:nth-of-type(4) {
    grid-column: 1 / 13;
    grid-row: 2 / 3;
  }
  .article-link:nth-of-type(3) {
    grid-column: 1 / 13;
    grid-row: 3 / 4;
  }
  .article-link:nth-of-type(2) {
    grid-column: 1 / 13;
    grid-row: 4 / 5;
  }
  .home-grid {
    gap: 5px;
  }
  #about,
  #skills {
    padding: 30px 15px;
  }
  .skill {
    justify-content: space-between;
  }
}
</style>
