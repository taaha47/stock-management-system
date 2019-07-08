<template>
  <div>
    <v-flex lg12 md12>
      <Section sectionTitle="Liste des Categories"/>
      <CustomizedDatatable
        :headers="headers"
        :deleteElement="deleteElement"
        :ConfirmDeletePopup="$options.components.ConfirmDeleteCategoryPopup"
        :editElement="editElement"
        :EditElementFormPopup="$options.components.EditCategoryFormPopup"
        :data = "categoriesList"
      >
      </CustomizedDatatable>
    </v-flex>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import Indicators from "../Indicators/Indicators.vue";
  import UserTypeCard from "../UserTypeCard/UserTypeCard.vue";
  import {mockedKPIs, mockedDataTable} from "../../helpers/properties";
  import CustomizedDatatable from "../CustomizedDatatable/CustomizedDatatable.vue";
  import Section from "../Section/Section.vue";
  import store from "../../store";
  import ConfirmDeleteCategoryPopup from "./ConfirmDeleteCategoryPopup.vue";
  import EditCategoryFormPopup from "./EditCategoryFormPopup.vue";


  @Component({
    components: { UserTypeCard, Indicators, CustomizedDatatable, Section, ConfirmDeleteCategoryPopup, EditCategoryFormPopup },
    computed: {
      categoriesList: function() {
        return store.getters.categories;
      }
    }
  })
  export default class CategoriesListContainer extends Vue {
    vals: any = mockedKPIs;
    headers: any = mockedDataTable.categories_header;
    categoriesList!: any;

    deleteElement: Function = (id: any) => {
      this.$store.dispatch("deleteCategory", id.category_code);
    };

    editElement: Function = (categoryToUpdateCode: string, category: any) => {
      this.$store.dispatch("editCategory", {categoryToUpdateCode, category});
    };

    created() {
      this.$store.dispatch("getCategories");
    }
  }
</script>