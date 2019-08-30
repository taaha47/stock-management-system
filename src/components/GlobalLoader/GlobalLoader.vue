<template>
  <v-dialog
    v-model="visible"
    persistent
    hide-overlay
    width="300"
  >
    <v-card
      color="#36454f"
      dark
    >
      <v-card-text>
        {{message}}
        <v-progress-linear
          indeterminate
          color="green"
        ></v-progress-linear>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
    import { Component, Vue, Prop } from 'vue-property-decorator';

    @Component
    export default class GlobalLoader extends Vue{
        @Prop() readonly visible: boolean;
        @Prop() readonly message: string;
    }
</script>
