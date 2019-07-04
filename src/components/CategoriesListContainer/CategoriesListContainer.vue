<template>
  <div>
    <v-flex lg12 md12>
      <Section sectionTitle="Liste des Categories"/>
      <CustomizedDatatable
        :headers="headers"
        :data = "data"
      />
    </v-flex>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
  import Indicators from "../Indicators/Indicators.vue";
  import UserTypeCard from "../UserTypeCard/UserTypeCard.vue";
  import {mockedKPIs, mockedDataTable} from "../../helpers/properties";
  import CustomizedDatatable from "../CustomizedDatatable/CustomizedDatatable.vue";
  import Section from "../Section/Section.vue";
  import store from "../../store";

  @Component({
    components: { UserTypeCard, Indicators, CustomizedDatatable, Section }
  })
  export default class CategoriesListContainer extends Vue {
    vals: any = mockedKPIs;
    headers: any = mockedDataTable.categories_header;
    data: any = store.getters.categories;

    created() {
      this.$store.dispatch("getCategories");
      this.data = store.getters.categories;
    }
  }
</script>