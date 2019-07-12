<template>
  <div>
    <div v-on:click="showForm = !showForm">
      <Section
        sectionTitle="Ajouter un nouveau article"
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
              label="Code de l'article"
              hint="entrer un code unique pour identifier l'article"
              required
              v-model="productCode"
              id="productCode"
              name="productCode"
              :rules="rules"
            ></v-text-field>
            <v-spacer></v-spacer>
          </v-flex>
          <v-flex xs12 sm6 md6>
            <v-text-field
              label="Nom de l'article"
              hint="Choisir un nom pour l'article"
              required
              v-model="productName"
              id="productName"
              name="productName"
              :rules="rules"
            ></v-text-field>
            <v-spacer></v-spacer>
          </v-flex>
          <v-flex xs12 sm6 md6>
            <v-text-field
              label="package de l'article"
              hint="Définir le packaging de l'article"
              required
              v-model="productPackaging"
              id="productPackaging"
              name="productPackaging"
              :rules="rules"
            ></v-text-field>
            <v-spacer></v-spacer>
          </v-flex>
          <v-flex xs12 sm6 md6>
            <v-select
              :items="getCategoriesCodesList"
              label="Catégorie de l'article"
              hint="Choisir le code de la catégorie pour cet article"
              required
              v-model="productCategoryId"
              id="productCategoryId"
              name="productCategoryId"
              :rules="rules"
            ></v-select>
            <v-spacer></v-spacer>
          </v-flex>
          <v-flex xs12 sm12 md12>
            <v-textarea
              label="description de l'article"
              hint="Donner une description pour cet article"
              auto-grow
              rows="1"
              v-model="productDescription"
              id="productDescription"
              name="productDescription"
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
  import store from "../../store";

  @Component({
    components: {Section},
    computed: {
      getCategoriesCodesList: function() {
        return store.getters.categories.map((cat: any) => ({value: cat.category_id, text: cat.category_name}));
      }
    }
  })
  export default class AddProductForm extends Vue{
    @Prop() readonly addElement: Function;

    productCode: string = "";
    productName: string = "";
    productPackaging: string = "";
    productDescription: string = "";
    productCategoryId: string = "";
    getCategoriesCodesList!: any[];
    rules: any[] = [(v: boolean) => !!v || "Ce champ est obligatoire"];
    valid: boolean = false;
    showForm: boolean = false;

    handleSubmit() {
      this.showForm = false;
      this.addElement({
        "product_code": this.productCode,
        "product_name": this.productName,
        "product_packaging": this.productPackaging,
        "product_description": this.productDescription,
        "category": this.productCategoryId
      });
    }

    created() {
      this.$store.dispatch("getCategories");
    }
  }
</script>