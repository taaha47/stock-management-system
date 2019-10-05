<template>
  <v-dialog v-model="dialog" max-width="600px">
    <template v-slot:activator="{ on }">
      <v-btn
        icon
        v-on="on"
      >
        <v-icon color="primary" large>add</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">Ajouter un nouveau fournisseur</span>
      </v-card-title>
      <v-form
        v-model="valid"
        @submit.prevent="() => {handleSubmit()}"
      >
        <v-card-text>
          <v-container grid-list-md>
            <v-flex xs12 sm6 md6>
              <v-text-field
                label="raison sociale du fournisseur"
                hint="entrer la raison sociale du fournisseur"
                required
                v-model="supplierCompanyName"
                id="supplierCompanyName"
                name="supplierCompanyName"
                :rules="rules"
              ></v-text-field>
              <v-spacer></v-spacer>
            </v-flex>
            <v-flex xs12 sm6 md6>
              <v-text-field
                label="Numéro du téléphone du fournisseur"
                hint="Entrez un numéro de téléphone valide"
                required
                v-model="supplierTel"
                id="supplierTel"
                name="supplierTel"
                :rules="rules"
              ></v-text-field>
              <v-spacer></v-spacer>
            </v-flex>
            <v-flex xs12 sm6 md6>
              <v-text-field
                label="Adresse email du fournisseur"
                hint="Entrez une adresse email valide"
                required
                v-model="supplierEmail"
                id="supplierEmail"
                name="supplierEmail"
                :rules="rules"
              ></v-text-field>
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
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import Section from "../Section/Section.vue";

  @Component({components: {Section}})
  export default class AddSupplierForm extends Vue{
    @Prop() readonly addElement: Function;

    supplierCompanyName: string = "";
    supplierTel: string = "";
    supplierEmail: string = "";
    rules: any[] = [(v: boolean) => !!v || "Ce champ est obligatoire"];
    valid: boolean = false;
    dialog: boolean = false;

    handleSubmit() {
      this.addElement({
        "supplier_company_name": this.supplierCompanyName,
        "supplier_tel": this.supplierTel,
        "supplier_email": this.supplierEmail
      });
      this.dialog = false;
    }
  }
</script>