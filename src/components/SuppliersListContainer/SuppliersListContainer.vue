<template>
  <div>
    <v-layout row wrap mb-5>
      <UserTypeCard
        userType="Fournisseurs"
        :count="suppliersCount"
        iconType="CATEGORY"
      />
    </v-layout>
    <v-flex lg12 md12>
      <Section sectionTitle="Liste des Fournisseurs"/>
      <CustomizedDatatable
        :headers="headers"
        :data = "suppliersList"
      >
        <template v-slot:add>
          <AddSupplierForm
            :addElement="addElement"
          />
        </template>
        <template v-slot:delete="{element}">
          <ConfirmDeleteElementPopup
            deleteConfirmationMessage="Etes-vous sur de vouloir supprimer ce fournisseur ?"
            :element="element"
            :deleteElement="deleteElement"
          />
        </template>
        <template v-slot:edit="{element}">
          <EditSupplierFormPopup
            :element="element"
            :editElement="editElement"
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
  import EditSupplierFormPopup from "./EditSupplierFormPopup.vue";
  import AddSupplierForm from "./AddSupplierForm.vue";


  @Component({
    components: { UserTypeCard, Indicators, CustomizedDatatable, Section, ConfirmDeleteElementPopup, EditSupplierFormPopup, AddSupplierForm },
    computed: {
      suppliersList: function() {
        return store.getters.suppliers;
      },
      suppliersCount: function() {
        return store.getters.suppliersCount;
      }
    }
  })
  export default class SuppliersListContainer extends Vue {
    headers: any = mockedDataTable.suppliers_header;
    suppliersList!: any;
    suppliersCount!: number;

    deleteElement: Function = (supplier: any) => {
      this.$store.dispatch("deleteSupplier", supplier.id);
    };

    editElement: Function = (supplierId: string, supplier: any) => {
      this.$store.dispatch("editSupplier", {supplierId, supplier});
    };

    addElement: Function = (supplier: any) => {
      this.$store.dispatch("addSupplier", supplier);
    };

    created() {
      this.$store.dispatch("getSuppliers");
    }
  }
</script>