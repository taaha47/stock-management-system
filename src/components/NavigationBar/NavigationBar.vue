<template>
  <v-layout row wrap>
    <v-btn
      fab
      flat
      color="grey"
      fixed
      bottom
      left
      @click.stop="drawer = !drawer"
    >
      <v-icon>menu</v-icon>
    </v-btn>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="mini"
      absolute
      dark
    >
      <v-list>
        <v-list-tile
          v-if="mini"
          @click.stop="mini = !mini"
        >
          <v-list-tile-action>
            <v-icon>chevron_right</v-icon>
          </v-list-tile-action>
        </v-list-tile>
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <v-icon>home</v-icon>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>Manager</v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-btn
              icon
              @click.stop="mini = !mini"
            >
              <v-icon>chevron_left</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
      <v-divider light></v-divider>
      <v-list dense>
        <v-list-tile
          v-for="item in items"
          :key="item.title"
          @click="() => handleItemClick(item.path)"
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </v-layout>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class NavigationBar extends Vue {
      drawer: boolean = null;
      items: any = [
        { title: 'Acceuil', icon: 'dashboard', path: "/dashboard" },
        { title: 'A propos', icon: 'question_answer', path: "/about" }
      ];
      mini: boolean = true;

      handleItemClick(path: string) {
          this.$router.push(path);
      }
  }
</script>

<style scoped>

</style>
