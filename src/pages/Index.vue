<template>
  <Layout>
    <section class="home-grid" id="projects">
      <div
        :class="{'article-link': true, 'dark-bg': $vuetify.theme.dark, 'light-bg': !$vuetify.theme.dark}"
      >
        <div class="shade">
          <h2>Welcome to SembaSource</h2>
          <p>Where you can find amazing articles and projects about software engineering.</p>
          <v-btn
            class="cta background text--text"
            href="https://github.com/mahmoudyusof"
            target="_blank"
            tile
            large
          >Browse My work</v-btn>
        </div>
      </div>
      <div
        :class="{'article-link': true, 'dark-bg': $vuetify.theme.dark, 'light-bg': !$vuetify.theme.dark}"
      >
        <div class="shade">
          <h2>Vue Dynamic Forms</h2>
          <p>A Vue.js component library to help you create forms easily and dynamically.</p>
          <v-btn
            class="cta background text--text"
            large
            tile
            href="https://github.com/mahmoudyusof/vue-d-form"
            target="_blank"
          >Visit Repo</v-btn>
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
          <v-btn
            class="cta background text--text"
            large
            tile
            href="https://github.com/mahmoudyusof/facial_keypoint_detection"
            target="_blank"
          >Visit Repo</v-btn>
        </div>
      </div>
    </section>

    <section id="about">
      <v-row>
        <v-col class="avatar-col" cols="12" md="3" lg="3" sm="12" xs="12">
          <v-img class="avatar" src="/avatar.jpg"></v-img>
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
            <v-rating background-color="accent" dense readonly color="accent lighten-3" :value="5"></v-rating>
          </div>
          <div class="skill">
            <span>Python</span>
            <v-rating background-color="accent" dense readonly color="accent lighten-3" :value="5"></v-rating>
          </div>
          <div class="skill">
            <span>Vue JS</span>
            <v-rating background-color="accent" dense readonly color="accent lighten-3" :value="5"></v-rating>
          </div>
          <div class="skill">
            <span>CSS</span>
            <v-rating background-color="accent" dense readonly color="accent lighten-3" :value="5"></v-rating>
          </div>
          <div class="skill">
            <span>Scikit learn</span>
            <v-rating background-color="accent" dense readonly color="accent lighten-3" :value="4"></v-rating>
          </div>
        </v-col>
        <!--  -->
        <v-col>
          <div class="skill">
            <span>Express JS</span>
            <v-rating background-color="accent" dense readonly color="accent lighten-3" :value="5"></v-rating>
          </div>
          <div class="skill">
            <span>Linux Terminal</span>
            <v-rating background-color="accent" dense readonly color="accent lighten-3" :value="3"></v-rating>
          </div>
          <div class="skill">
            <span>Git</span>
            <v-rating background-color="accent" dense readonly color="accent lighten-3" :value="3"></v-rating>
          </div>
          <div class="skill">
            <span>Pandas</span>
            <v-rating background-color="accent" dense readonly color="accent lighten-3" :value="4"></v-rating>
          </div>
          <div class="skill">
            <span>Laravel</span>
            <v-rating background-color="accent" dense readonly color="accent lighten-3" :value="3"></v-rating>
          </div>
        </v-col>
        <!--  -->
        <v-col>
          <div class="skill">
            <span>Keras</span>
            <v-rating background-color="accent" dense readonly color="accent lighten-3" :value="3"></v-rating>
          </div>
          <div class="skill">
            <span>Numpy</span>
            <v-rating background-color="accent" dense readonly color="accent lighten-3" :value="3"></v-rating>
          </div>
          <div class="skill">
            <span>Tensorflow</span>
            <v-rating background-color="accent" dense readonly color="accent lighten-3" :value="2"></v-rating>
          </div>
          <div class="skill">
            <span>Testing (jest)</span>
            <v-rating background-color="accent" dense readonly color="accent lighten-3" :value="5"></v-rating>
          </div>
          <div class="skill">
            <span>SQL</span>
            <v-rating background-color="accent" dense readonly color="accent lighten-3" :value="4"></v-rating>
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

<script>
export default {
  metaInfo: {
    title: "Home"
  },
  created() {},
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
  grid-template-columns: 5fr 4fr;
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
  background-image: url("/main.jpg");
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
  background-color: #ddd3;
}
.light-bg {
  background-image: url("/white.jpg");
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
#about,
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
  min-width: 150px;
}
.j-title {
  font-weight: 500;
  font-family: "Roboto", sans-serif;
  border-bottom: 1px solid var(--v-accent-base);
}
#about h2,
#skills > h2 {
  font-family: "Roboto", sans-serif;
  font-weight: 600;
}
#skills > h2,
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
  #about,
  #skills {
    padding: 30px 15px;
  }
  .skill {
    justify-content: space-between;
  }
}
</style>
