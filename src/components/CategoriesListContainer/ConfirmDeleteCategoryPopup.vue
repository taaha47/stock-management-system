<template>
  <v-dialog
    v-model="dialog"
    max-width="400"
  >
    <template v-slot:activator="{on}">
      <v-btn
        v-on="on"
        icon
      >
        <v-icon color="grey">delete</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title class="headline">Confirmer la suppression</v-card-title>
      <v-card-text>Etes-vous sur de vouloir supprimer cet element ?</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="green darken-1"
          flat
          @click="() => {deleteElement(element); dialog=false;}"
        >
          Continuer
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  @Component
  export default class ConfirmDeleteCategoryPopup extends Vue{
    @Prop() readonly deleteElement: Function;
    @Prop() readonly element: any;

    dialog: boolean = false;
  }
</script>