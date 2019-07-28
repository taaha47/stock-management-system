<template>
  <div>

    <v-layout row wrap justify-space-between mb-5>
      <v-flex lg4 md4>
        <Indicators
          title="Commandes fournisseurs"
          :valA="vals.valA"
          :valB="vals.valB"
          :valC="vals.valC"
        />
      </v-flex>
      <v-flex lg4 md4>
        <Indicators
          title="Commandes Clients"
          :valA="vals.valA"
          :valB="vals.valB"
          :valC="vals.valC"
        />
      </v-flex>
    </v-layout>

    <v-layout row wrap justify-space-between mb-5>
      <UserTypeCard userType="Fournisseurs" :count=21 />
      <UserTypeCard userType="clients" :count=21 />
    </v-layout>


    <v-flex lg12 md12>
      <Section sectionTitle="Articles en stock"/>
      <CustomizedDatatable
        :headers="headers"
        :data = "data"
        :deleteElement="deleteElement"
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

    @Component({
        components: { UserTypeCard, Indicators, CustomizedDatatable, Section }
    })
    export default class Dashboard extends Vue {
      vals: any = mockedKPIs;
      headers: any = mockedDataTable.headers;
      data: any = mockedDataTable.desserts;

      deleteElement: Function = (id: any) => {
        alert(id.code);
      }


    }
</script>

<style scoped>

</style>
