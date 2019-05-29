<template>
  <div>
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
      permanent
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
      <v-list>
        <v-list-tile
          :key="dashboard.title"
          @click="() => handleItemClick(dashboard.path)"
        >
          <v-list-tile-action>
            <v-icon>{{ dashboard.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ dashboard.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-group
          v-for="item in menu"
          :key="item.title"
          v-model="item.active"
          :prepend-icon="item.icon"
          no-action
          @click="() => handleItemClick(item.path)"
        >
          <template v-slot:activator>
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>

          <v-list-tile
            v-for="subItem in item.items"
            :key="subItem.title"
            @click="() => handleItemClick(subItem.path)"
          >
            <v-list-tile-content>
              <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-icon>{{ subItem.action }}</v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { menu } from "../../helpers/properties";

  @Component
  export default class NavigationBar extends Vue {
      drawer: boolean | null = null;
      mini: boolean = false;
      menu: any[] = menu.slice(1);
      dashboard: any[] = menu[0];

      handleItemClick(path: string) {
          this.$router.push(path);
      }
  }
</script>
