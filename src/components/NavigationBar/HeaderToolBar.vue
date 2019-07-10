<template>
  <v-toolbar height="80" color="whiteSmoke" flat class="mb-3 navbar-container" >
    <span>Stock management System</span>
    <v-spacer></v-spacer>
    <v-btn flat to="/dashboard">Tableau de bord</v-btn>
    <v-btn flat to="/">About</v-btn>
    <v-btn flat to="/about">Logout</v-btn>
  </v-toolbar>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class HeaderToolBar extends Vue {
  }
</script>

<style lang="stylus">
  .navbar-container
    border-bottom 1px lightgray solid;
</style>