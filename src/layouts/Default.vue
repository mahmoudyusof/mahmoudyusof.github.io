<template>
  <v-app>
    <!-- <header class="header">
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/about/">About</g-link>
      </nav>
    </header>-->
    <v-app-bar color="accent" dark fixed elevation="0" :elevate-on-scroll="true">
      <v-toolbar-title>SembaSource</v-toolbar-title>
      <v-spacer></v-spacer>
      <g-link tag="v-btn" class="nav-link accent" dark elevation="0" icon to="/">
        <v-icon>home</v-icon>
      </g-link>
      <g-link tag="v-btn" class="nav-link accent" dark elevation="0" icon to="/about">
        <v-icon>help_outline</v-icon>
      </g-link>
      <g-link tag="v-btn" class="nav-link accent" dark elevation="0" icon to="/contact">
        <v-icon>mail_outline</v-icon>
      </g-link>
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
  background-color: #37474f;
  padding-top: 70px;
}
</style>