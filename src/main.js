// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";

export default function(Vue, { router, head, isClient, appOptions }) {
  // Set default layout as a global component
  Vue.use(Vuetify);
  appOptions.vuetify = new Vuetify({
    iconfont: "md",
    theme: {
      themes: {
        dark: {
          primary: "#222",
          accent: "#263238",
          light: "#ffffff",
        },
      },
      dark: true,
    },
  });
  Vue.component("Layout", DefaultLayout);
  head.link.push({
    rel: "stylesheet",
    href:
      "https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400&display=swap",
  });
}
