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
        :data = "productsList"
      >
        <template v-slot:add>
          <AddProductForm
            :addElement="addElement"
            :categoriesCodesList="categoriesCodesList"
          />
        </template>
        <template v-slot:delete="{element}">
          <ConfirmDeleteElementPopup
            deleteConfirmationMessage="Etes-vous sur de vouloir supprimer cet article ?"
            :element="element"
            :deleteElement="deleteElement"
          />
        </template>
        <template v-slot:edit="{element}">
          <EditProductFormPopup
            :element="element"
            :editElement="editElement"
            :categoriesCodesList="categoriesCodesList"
          />
        </template>
      </CustomizedDatatable>
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
  import AddProductForm from "./AddProductForm.vue";


  @Component({
    components: { UserTypeCard, Indicators, CustomizedDatatable, Section, ConfirmDeleteElementPopup, EditProductFormPopup, AddProductForm },
    computed: {
      productsList: function() {
        return store.getters.products;
      },
      productsCount: function() {
        return store.getters.productsCount;
      },
      categoriesCodesList: function() {
        return store.getters.categories.map((cat: any) => ({value: cat.id, text: cat.category_name}));
      }
    }
  })
  export default class ProductsListContainer extends Vue {
    headers: any = mockedDataTable.products_header;
    productsList!: any;
    productsCount!: number;
    categoriesCodesList!: any;

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
      this.$store.dispatch("getCategories");
    }
  }
</script>