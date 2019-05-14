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
      <img
        :src="require('../../assets/logo.png')"
        height="80"
        width="80"
      />
      <v-card
        flat
        color="#fafafb"
        width="40%"
      >
        <v-form
          v-model="valid"
          @submit.prevent="handleSubmit"
        >
          <v-card-text>
              <v-text-field
                v-model="password"
                id="password"
                prepend-icon="lock"
                name="password"
                label="Password"
                type="password"
                :rules="rules"
              ></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-btn
              :disabled="!valid"
              depressed
              color="success"
              type="submit"
              :loading="loading"
            >
              S'authentifier
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn
             depressed
             color="error"
            >
              reset password
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import {ipcRenderer} from "electron";


  @Component
  export default class Login extends Vue {
    password: string = "";
    rules: any[] = [v => !!v || "a password is required"];
    valid: boolean = false;
    loading: boolean = false;

    handleSubmit(e: Event) {
      this.loading = true;
      const auth = ipcRenderer.sendSync("user-service", {
        action: "authenticate",
        payload: {
          password: this.password
        }
      });
      if (auth === "success") {
          console.log(auth);
          this.loading = false;
      }
    }

  }

</script>

<style scoped>

</style>
