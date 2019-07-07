<template>
  <v-dialog v-model="dialog" max-width="600px">
    <template v-slot:activator="{ on }">
      <v-btn
        icon
        v-on="on"
      >
        <v-icon color="grey">edit</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">Modifier la categorie <span class="green--text"> {{element.category_code}} | {{element.category_name}} </span></span>
      </v-card-title>
      <v-card-text>
        <v-container grid-list-md>
          <v-flex xs12 sm6 md6>
            <v-text-field
              label="Code de la catégorie"
              hint="entrer un code unique pour identifier la catégorie"
              required
              :value="element.category_code"
            ></v-text-field>
            <v-spacer></v-spacer>
          </v-flex>
          <v-flex xs12 sm6 md6>
            <v-text-field
              label="Nom de la catégorie"
              hint="Choisir un nom pour la catégorie"
              required
              :value="element.category_name"
            ></v-text-field>
            <v-spacer></v-spacer>
          </v-flex>
          <v-flex xs12 sm12 md12>
            <v-textarea
              label="description de la catégorie"
              hint="Donner une description pour cette catégorie"
              required
              auto-grow
              rows="1"
              :value="element.category_description"
            ></v-textarea>
          </v-flex>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="green darken-1"
          flat
          @click="() => {editElement(element); dialog=false}"
        >
          Confirmer
        </v-btn>
        <v-btn
          color="red darken-1"
          flat
          @click="dialog=false"
        >
          Annuler
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  @Component
  export default class EditCategoryFormPopup extends Vue{
    @Prop() readonly editElement: Function;
    @Prop() readonly element: any;

    dialog: boolean = false;
  }
</script>