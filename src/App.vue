<template>
  <v-app>
    <v-toolbar dark flat height="80">
      <span>Stock management System</span>
      <v-spacer></v-spacer>
      <v-btn flat to="/">Home</v-btn>
      <v-btn flat to="/about">About</v-btn>
    </v-toolbar>
    <router-view/>
  </v-app>
</template>
