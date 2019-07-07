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
      <v-form
        v-model="valid"
        @submit.prevent="handleSubmit"
      >
        <v-card-text>
          <v-container grid-list-md>
            <v-flex xs12 sm6 md6>
              <v-text-field
                label="Code de la catégorie"
                hint="entrer un code unique pour identifier la catégorie"
                required
                v-model="categoryCode"
                id="categoryCode"
                name="categoryCode"
                :rules="rules"
              ></v-text-field>
              <v-spacer></v-spacer>
            </v-flex>
            <v-flex xs12 sm6 md6>
              <v-text-field
                label="Nom de la catégorie"
                hint="Choisir un nom pour la catégorie"
                required
                v-model="categoryName"
                id="categoryName"
                name="categoryName"
                :rules="rules"
              ></v-text-field>
              <v-spacer></v-spacer>
            </v-flex>
            <v-flex xs12 sm12 md12>
              <v-textarea
                label="description de la catégorie"
                hint="Donner une description pour cette catégorie"
                auto-grow
                rows="1"
                v-model="categoryDescription"
                id="categoryDescription"
                name="categoryDescription"
              ></v-textarea>
            </v-flex>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            flat
            type="submit"
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
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  @Component
  export default class EditCategoryFormPopup extends Vue{
    @Prop() readonly editElement: Function;
    @Prop() readonly element: any;

    categoryCode: string = this.element.category_code;
    categoryName: string = this.element.category_name;
    categoryDescription: string = this.element.category_description;
    dialog: boolean = false;
    rules: any[] = [(v: boolean) => !!v || "Ce champ est obligatoire"];

    handleSubmit() {
      this.editElement({
        "category_code": this.categoryCode,
        "category_name": this.categoryName,
        "category_description": this.categoryDescription
      });
    }
  }
</script>