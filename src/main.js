// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "prismjs/themes/prism-tomorrow.css";

import firebase from "firebase/app";
import "firebase/firestore";

export default function(Vue, { router, head, isClient, appOptions }) {
  firebase.initializeApp({
    apiKey: "AIzaSyDDv7kQx0B8WBM6Vxm5imMFHVS3F8T8X0M",
    authDomain: "learning-firevue.firebaseapp.com",
    databaseURL: "https://learning-firevue.firebaseio.com",
    projectId: "learning-firevue",
    storageBucket: "learning-firevue.appspot.com",
    messagingSenderId: "222886162176",
    appId: "1:222886162176:web:fba9d6932bdaa588e98de5",
  });
  Vue.prototype.$db = firebase.firestore();

  // Set default layout as a global component
  Vue.use(Vuetify);

  appOptions.vuetify = new Vuetify({
    defaultAssets: {
      font: true,
      icons: "fa",
    },
    iconfont: "fa",
    theme: {
      options: {
        customProperties: true,
      },
      themes: {
        dark: {
          primary: "#263238",
          accent: "#57676f",
          secondary: "#37474f",
          text: "#ffffff",
          background: "#263238",
        },
        light: {
          primary: "#E8EAF6",
          secondary: "#dddddd",
          accent: "#263238",
          text: "#000000",
          background: "#ffffff",
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
