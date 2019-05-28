<template>
  <v-layout fill-height class="layout-container">
    <NavigationBar />
    <v-content>
      <v-container class="content-container">
        <router-view/>
      </v-container>
    </v-content>
    <LogoutButton />
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

  .content-container {
    padding 20px 30px;
  }
</style>
