<template>
  <v-content>
    <NavigationBar />
    <router-view/>
    <LogoutButton />
  </v-content>
</template>

<script lang="ts">
  import NavigationBar from "../NavigationBar/NavigationBar";
  import LogoutButton from "../LogoutButton/LogoutButton";
  import { Component, Vue } from 'vue-property-decorator';

    @Component({
        components: {
            NavigationBar,
            LogoutButton
        }
    })
    export default class DashboardLayout extends Vue{}
</script>

<style scoped>

</style>
