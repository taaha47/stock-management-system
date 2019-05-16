<template>
  <v-fab-transition>
    <v-btn
      dark
      fab
      fixed
      bottom
      right
    >
      <v-icon></v-icon>
    </v-btn>
  </v-fab-transition>
</template>

<script>
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class LogoutButton extends Vue{}
</script>

<style scoped>

</style>
