<template>
  <v-container
    fluid
    fill-height
  >
    <v-layout
      align-center
      justify-center
      column
      fill-height
    >
      <v-card
        flat
        color="#fafafb"
        width="40%"
      >
        <v-form
          @submit.prevent="handleSubmit"
        >
          <v-card-text>
            <v-text-field
              v-model="code"
              id="code"
              name="code"
              label="code"
              type="text"
            ></v-text-field>
            <v-text-field
              v-model="name"
              id="name"
              name="name"
              label="name"
              type="text"
            ></v-text-field>
            <v-text-field
              v-model="description"
              id="description"
              name="description"
              label="description"
              type="text"
            ></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-btn
              depressed
              color="success"
              type="submit"
            >
              enregistrer
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card>

      <v-list>
        <v-list-tile
          v-for="item in items"
          :key="item.id"
          avatar
        >
          <v-list-tile-content>
            <v-list-tile-title v-text="item.name"></v-list-tile-title>
          </v-list-tile-content>

        </v-list-tile>
      </v-list>

    </v-layout>
  </v-container>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import {ipcRenderer} from "electron";

  @Component
  export default class demo extends Vue {
    code: string = "";
    name: string = "";
    description: string = "";

    items: any[] = [];

    handleSubmit(e: Event) {
      const addcat = ipcRenderer.sendSync("category-service", {
        action: "add-category",
        payload: {
          code: this.code,
          name: this.name,
          description: this.description
        }
      });
    }
  }
</script>