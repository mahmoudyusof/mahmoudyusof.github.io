<template>
  <v-app>
    <v-app-bar color="primary" dark fixed elevate-on-scroll>
      <v-toolbar-title>SembaSource</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        @click="$vuetify.goTo('#projects', {duration: 300, offset: 100})"
        class="nav-link primary"
        dark
        elevation="0"
        icon
      >
        <v-icon>home</v-icon>
      </v-btn>
      <v-btn
        @click="$vuetify.goTo('#about', {duration: 300, offset: 100})"
        class="nav-link primary"
        dark
        elevation="0"
        icon
      >
        <v-icon>help_outline</v-icon>
      </v-btn>
      <v-btn
        @click="$vuetify.goTo('#contact', {duration: 300, offset: 100})"
        class="nav-link primary"
        dark
        elevation="0"
        icon
      >
        <v-icon>mail_outline</v-icon>
      </v-btn>
    </v-app-bar>
    <v-container fluid color="primary" class="dark-container">
      <slot />
    </v-container>
  </v-app>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
* {
  font-family: "Nunito", sans-serif;
  box-sizing: border-box;
}
.light {
  color: white;
  text-decoration: none;
}
.nav-link {
  box-shadow: none !important;
}
.container.dark-container {
  background-color: var(--v-secondary-base);
  padding-top: 70px;
}
</style>