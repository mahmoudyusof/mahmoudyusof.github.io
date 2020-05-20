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
    defaultAssets: {
      font: true,
      icons: "md",
    },
    icons: {
      iconfont: "md",
    },
    theme: {
      options: {
        customProperties: true,
      },
      themes: {
        dark: {
          primary: "#263238",
          accent: "#57676f",
          secondary: "#37474f",
          light: "#ffffff",
        },
        light: {
          primary: "white",
          secondary: "#eee",
          accent: "#87979f",
          light: "black",
        },
      },
      dark: true,
    },
  });
  Vue.component("Layout", DefaultLayout);
  head.link.push(
    {
      rel: "stylesheet",
      href:
        "https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400&display=swap",
    },
    {
      rel: "stylesheet",
      href:
        "https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap",
    },
    {
      rel: "stylesheet",
      href:
        "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons",
    }
  );
}
