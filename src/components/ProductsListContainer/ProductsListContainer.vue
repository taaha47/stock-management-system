<template>
  <div>
    <v-layout row wrap mb-5>
      <UserTypeCard
        userType="Articles"
        :count="productsCount"
        iconType="CATEGORY"
      />
    </v-layout>
    <v-flex lg12 md12>
      <Section sectionTitle="Liste des Articles"/>
      <CustomizedDatatable
        :headers="headers"
        :deleteElement="deleteElement"
        :ConfirmDeletePopup="$options.components.ConfirmDeleteElementPopup"
        deleteConfirmationMessage="Etes-vous sur de vouloir supprimer cet article ?"
        :editElement="editElement"
        :EditElementFormPopup="$options.components.EditProductFormPopup"
        :data = "productsList"
      ></CustomizedDatatable>
    </v-flex>
    <v-flex lg12 md12>
      <AddCategoryForm
        :addElement="addElement"
      />
    </v-flex>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import Indicators from "../Indicators/Indicators.vue";
  import UserTypeCard from "../UserTypeCard/UserTypeCard.vue";
  import {mockedDataTable} from "../../helpers/properties";
  import CustomizedDatatable from "../CustomizedDatatable/CustomizedDatatable.vue";
  import Section from "../Section/Section.vue";
  import store from "../../store";
  import ConfirmDeleteElementPopup from "../ConfirmDeleteElementPopup/ConfirmDeleteElementPopup.vue";
  import EditProductFormPopup from "./EditProductFormPopup.vue";
  import AddCategoryForm from "../CategoriesListContainer/AddCategoryForm.vue";


  @Component({
    components: { UserTypeCard, Indicators, CustomizedDatatable, Section, ConfirmDeleteElementPopup, EditProductFormPopup, AddCategoryForm },
    computed: {
      productsList: function() {
        return store.getters.products;
      },
      productsCount: function() {
        return store.getters.productsCount;
      }
    }
  })
  export default class ProductsListContainer extends Vue {
    headers: any = mockedDataTable.products_header;
    productsList!: any;
    productsCount!: number;
    showForm: boolean = false;

    deleteElement: Function = (id: any) => {
      this.$store.dispatch("deleteProduct", id.product_code);
    };

    editElement: Function = (productToUpdateCode: string, product: any) => {
      this.$store.dispatch("editProduct", {productToUpdateCode, product});
    };

    addElement: Function = (product: any) => {
      this.$store.dispatch("addProduct", product);
    };

    created() {
      this.$store.dispatch("getProducts");
    }
  }
</script>