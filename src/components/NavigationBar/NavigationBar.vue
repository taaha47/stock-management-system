<template>
  <v-toolbar dark flat height="80">
    <span>Stock management System</span>
    <v-spacer></v-spacer>
    <v-btn flat to="/dashboard">Home</v-btn>
    <v-btn flat to="/about">menu1</v-btn>
    <v-btn flat to="/about">menu2</v-btn>
    <v-btn flat to="/about">About</v-btn>
  </v-toolbar>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class NavigationBar extends Vue {}
</script>

<style scoped>

</style>
