<template>
  <v-layout fill-height class="layout-container">
    <NavigationBar />
    <v-content>
      <router-view/>
      <LogoutButton />
    </v-content>
  </v-layout>
</template>

<script lang="ts">
  import NavigationBar from "../NavigationBar/NavigationBar.vue";
  import LogoutButton from "../LogoutButton/LogoutButton.vue";
  import { Component, Vue } from 'vue-property-decorator';

    @Component({
        components: {
            NavigationBar,
            LogoutButton
        }
    })
    export default class DashboardLayout extends Vue{}
</script>

<style scoped lang="stylus">
  .layout-container {
    display flex;
    flex-direction row;
    justify-content space-between;
  }
</style>
