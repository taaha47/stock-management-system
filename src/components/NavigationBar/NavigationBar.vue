<template>
  <div>
    <v-toolbar dark flat height="80">
      <span>Stock management System</span>
      <v-spacer></v-spacer>
      <v-btn flat to="/">Home</v-btn>
      <v-btn flat to="/login">Login</v-btn>
      <v-btn flat to="/about">About</v-btn>
    </v-toolbar>
    <main>
      <slot />
    </main>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class NavigationBar extends Vue {}
</script>

<style scoped>

</style>
