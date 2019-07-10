<template>
  <div>
    <div v-on:click="showForm = !showForm">
      <Section
        sectionTitle="Ajouter une nouvelle catégorie"
        clickable="true"
      />
    </div>
    <v-form
      v-if="showForm"
      v-model="valid"
      @submit.prevent="() => {handleSubmit()}"
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
          :disabled="!valid"
          color="green darken-1"
          flat
          type="submit"
        >
          Confirmer
        </v-btn>
      </v-card-actions>
    </v-form>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import Section from "../Section/Section.vue";

  @Component({components: {Section}})
  export default class AddCategoryForm extends Vue{
    @Prop() readonly addElement: Function;

    categoryCode: string = "";
    categoryName: string = "";
    categoryDescription: string = "";
    rules: any[] = [(v: boolean) => !!v || "Ce champ est obligatoire"];
    valid: boolean = false;
    showForm: boolean = false;

    handleSubmit() {
      this.showForm = false;
      this.addElement({
        "category_code": this.categoryCode,
        "category_name": this.categoryName,
        "category_description": this.categoryDescription
      });
    }
  }
</script>