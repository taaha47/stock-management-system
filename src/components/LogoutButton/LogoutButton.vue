<template>
  <v-fab-transition hide-on-leave>
    <v-btn
      @click="logout"
      fab
      flat
      color="grey"
      fixed
      bottom
      right
      :loading="loading"
    >
      <v-icon>logout</v-icon>
    </v-btn>
  </v-fab-transition>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class LogoutButton extends Vue{
    loading: boolean = false;

    logout(e: Event) {
      this.loading = true;
      this.$store.dispatch("logout");
    }
  }
</script>

<style scoped>

</style>
