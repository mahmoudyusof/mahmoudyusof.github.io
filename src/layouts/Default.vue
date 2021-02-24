<template>
  <v-app>
    <v-app-bar color="primary" fixed elevate-on-scroll>
      <v-btn class="primary" depressed @click="home">
        <img
          :class="{ svg: $vuetify.theme.dark }"
          src="../assets/logo.svg"
          style="width: 70px; height: 30px"
        />
      </v-btn>

      <v-spacer></v-spacer>
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn @click="home" class="primary" depressed icon v-on="on">
            <v-icon>home</v-icon>
          </v-btn>
        </template>
        <span>Home</span>
      </v-tooltip>

      <v-tooltip bottom>
        <template v-slot:activator="tipActivator">
          <v-menu left nudge-bottom="50" v-on="tipActivator.on">
            <template v-slot:activator="menuActivator">
              <v-btn
                class="primary"
                depressed
                icon
                v-bind="menuActivator.attrs"
                v-on="menuActivator.on"
              >
                <v-icon v-on="tipActivator.on">fas fa-newspaper</v-icon>
              </v-btn>
            </template>
            <v-list class="primary" color="text--text">
              <v-list-item
                v-for="(edge, i) in $static.articles.edges"
                :key="i"
                link
                :to="edge.node.path"
                >{{ edge.node.title }}</v-list-item
              >
            </v-list>
          </v-menu>
        </template>
        <span>Articles</span>
      </v-tooltip>

      <v-tooltip bottom>
        <template v-slot:activator="tipActivator">
          <v-menu left nudge-bottom="50" v-on="tipActivator.on">
            <template v-slot:activator="menuActivator">
              <v-btn
                class="primary"
                depressed
                icon
                v-bind="menuActivator.attrs"
                v-on="menuActivator.on"
              >
                <v-icon v-on="tipActivator.on">far fa-lightbulb</v-icon>
              </v-btn>
            </template>
            <v-list class="primary" color="text--text">
              <v-list-item
                v-for="(project, i) in $static.pages"
                :key="i"
                link
                :to="project.path"
                >{{ convertToTitle(project.path) }}</v-list-item
              >
            </v-list>
          </v-menu>
        </template>
        <span>Projects</span>
      </v-tooltip>

      <v-tooltip v-if="!article" bottom>
        <template v-slot:activator="{ on }">
          <v-btn
            @click="$vuetify.goTo('#about', { duration: 300, offset: 100 })"
            class="primary"
            depressed
            icon
            v-on="on"
          >
            <v-icon>help_outline</v-icon>
          </v-btn>
        </template>
        <span>About</span>
      </v-tooltip>

      <v-tooltip v-if="!article" bottom>
        <template v-slot:activator="{ on }">
          <v-btn
            @click="$vuetify.goTo('#contact', { duration: 300, offset: 100 })"
            class="primary"
            depressed
            icon
            v-on="on"
          >
            <v-icon>mail_outline</v-icon>
          </v-btn>
        </template>
        <span>Contact</span>
      </v-tooltip>

      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn
            @click="$vuetify.theme.dark = !$vuetify.theme.dark"
            icon
            depressed
            class="primary"
            v-on="on"
          >
            <v-icon>invert_colors</v-icon>
          </v-btn>
        </template>
        <span v-text="$vuetify.theme.dark ? 'Light' : 'Dark'"></span>
      </v-tooltip>
    </v-app-bar>
    <v-container fluid color="primary" class="dark-container">
      <slot />
    </v-container>
    <v-footer class="primary footer" app padless>
      <v-container>
        <v-row>
          <v-col cols="12" sm="4">
            <v-list flat class="primary" dense>
              <v-subheader>Social media</v-subheader>
              <v-list-item-group color="text">
                <v-list-item
                  href="https://www.linkedin.com/in/mahmoud-yusof-a39ab5151/"
                  target="_blank"
                >
                  <v-list-item-icon>
                    <v-icon>fab fa-linkedin</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>I share achievements</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <v-list-item
                  href="https://twitter.com/mahmoudyusof"
                  target="_blank"
                >
                  <v-list-item-icon>
                    <v-icon>fab fa-twitter</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>I share articles</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <v-list-item
                  href="https://www.facebook.com/mahmoud.youssef27/"
                  target="_blank"
                >
                  <v-list-item-icon>
                    <v-icon>fab fa-facebook</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>I share memes</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-col>
          <v-col cols="12" sm="4">
            <v-list flat class="primary" dense>
              <v-subheader>Contact Information</v-subheader>
              <v-list-item-group color="text">
                <v-list-item href="mailto:mahmoud.yusof27@gmail.com">
                  <v-list-item-icon>
                    <v-icon>mail_outline</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title
                      >mahmoud.yusof27@gmail.com</v-list-item-title
                    >
                  </v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-icon>
                    <v-icon>fas fa-phone</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>+20 111 601 0514</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-col>
          <v-col cols="12" sm="4">
            <v-list flat class="primary" dense>
              <v-subheader>Credits</v-subheader>
              <v-list-item-group color="text">
                <v-list-item
                  href="https://unsplash.com/@brenomachado"
                  target="_blank"
                >
                  <v-list-item-icon>
                    <v-icon>image</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>@brenomachado</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <v-list-item
                  href="https://unsplash.com/@epicantus"
                  target="_blank"
                >
                  <v-list-item-icon>
                    <v-icon>image</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>@epicantus</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-col>
        </v-row>
        <v-row class="px-5">
          <p class="copy">
            Copy rights &copy; 2020, Designed and created by Mahmoud Youssef
          </p>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<static-query>
query {
  meta: metadata {
    siteName
  }
  articles: allArticle{
    edges {
      node{
        title
        path
      }
    }
  }
  pages: allPage(filter: {path: {regex: "^/projects"}}){
    path
  }
}
</static-query>

<script>
export default {
  props: {
    article: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    home() {
      if (this.article) {
        this.$router.push("/");
      } else {
        this.$vuetify.goTo("#projects", { duration: 300, offset: 100 });
      }
    },
    convertToTitle(path) {
      path = path.split("/")[2];
      return path
        .split("-")
        .map((w) => w[0].toUpperCase() + w.substr(1).toLowerCase())
        .join(" ");
    },
  },
};
</script>

<style>
* {
  font-family: "Nunito", sans-serif;
  box-sizing: border-box;
}
.container.dark-container {
  background-color: var(--v-secondary-base);
  padding-top: 70px;
}
.footer {
  position: relative !important;
}
.svg {
  filter: invert(100%) grayscale(100%);
}
</style>