<template>
  <v-layout fill-height class="layout-container">
    <NavigationBar />
    <v-content>
      <HeaderToolBar />
      <v-container class="content-container">
        <GlobalLoader
          visible="true"
          message="Merci de patienter"
        />
        <router-view/>
      </v-container>
    </v-content>
    <LogoutButton />
  </v-layout>
</template>

<script lang="ts">
  import NavigationBar from "../NavigationBar/NavigationBar.vue";
  import HeaderToolBar from "../NavigationBar/HeaderToolBar.vue";
  import LogoutButton from "../LogoutButton/LogoutButton.vue";
  import GlobalLoader from "../GlobalLoader/GlobalLoader.vue";
  import { Component, Vue } from 'vue-property-decorator';

    @Component({
        components: {
            NavigationBar,
            LogoutButton,
            HeaderToolBar,
            GlobalLoader
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

  .content-container {
    padding 20px 30px;
  }
</style>
