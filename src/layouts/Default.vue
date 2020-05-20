<template>
  <v-app>
    <v-app-bar color="primary" fixed elevate-on-scroll>
      <v-toolbar-title>SembaSource</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        @click="$vuetify.goTo('#projects', {duration: 300, offset: 100})"
        class="nav-link primary"
        elevation="0"
        icon
      >
        <v-icon>home</v-icon>
      </v-btn>
      <v-btn
        @click="$vuetify.goTo('#about', {duration: 300, offset: 100})"
        class="nav-link primary"
        elevation="0"
        icon
      >
        <v-icon>help_outline</v-icon>
      </v-btn>
      <v-btn
        @click="$vuetify.goTo('#contact', {duration: 300, offset: 100})"
        class="nav-link primary"
        elevation="0"
        icon
      >
        <v-icon>mail_outline</v-icon>
      </v-btn>
      <v-btn
        @click="$vuetify.theme.dark = !$vuetify.theme.dark"
        icon
        elevation="0"
        class="nav-link primary"
      >
        <v-icon>invert_colors</v-icon>
      </v-btn>
    </v-app-bar>
    <v-container fluid color="primary" class="dark-container">
      <slot />
    </v-container>
    <v-footer class="primary footer" app padless>
      <v-container>
        <v-row>
          <v-col cols="12" sm="4">
            <v-list class="primary" dense>
              <v-subheader>Social media</v-subheader>
              <v-list-item-group color="primary">
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon>fab fa-facebook</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>FaceBook</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-icon>
                    <v-icon>fab fa-linkedin</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>LinkedIn</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-icon>
                    <v-icon>fab fa-github</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>Github</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-col>
          <v-col cols="12" sm="4">
            <v-list class="primary" dense>
              <v-subheader>Contact Information</v-subheader>
              <v-list-item-group color="primary">
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon>mail_outline</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>mahmoud.yusof27@gmail.com</v-list-item-title>
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

                <v-list-item>
                  <v-list-item-icon>
                    <v-icon>fab fa-twitter</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>@mahmoudyusof</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-col>
          <v-col cols="12" sm="4">
            <v-list class="primary" dense>
              <v-subheader>Credits</v-subheader>
              <v-list-item-group color="primary">
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon>image</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>https://unsplash.com/@brenomachado</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-icon>
                    <v-icon>image</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>https://unsplash.com/@epicantus</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-col>
        </v-row>
        <v-row>
          <p class="copy">Copy rights &copy; 2020, Designed and created by Mahmoud Youssef</p>
        </v-row>
      </v-container>
    </v-footer>
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
.nav-link {
  box-shadow: none !important;
}
.container.dark-container {
  background-color: var(--v-secondary-base);
  padding-top: 70px;
}
.footer {
  position: relative !important;
}
</style>