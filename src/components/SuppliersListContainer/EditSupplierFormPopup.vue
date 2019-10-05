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
        <span class="headline">Modifier le fournisseur <span class="green--text"> {{element.supplier_company_name}} </span></span>
      </v-card-title>
      <v-form
        v-model="valid"
        @submit.prevent="() => {handleSubmit(element.supplier_id)}"
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
            <v-flex xs12 sm12 md12>
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
  export default class EditSupplierFormPopup extends Vue{
    @Prop() readonly editElement: Function;
    @Prop() readonly element: any;

    supplierCompanyName: string = this.element.supplier_company_name;
    supplierTel: string = this.element.supplier_tel;
    supplierEmail: string = this.element.supplier_email;
    dialog: boolean = false;
    rules: any[] = [(v: boolean) => !!v || "Ce champ est obligatoire"];
    valid: boolean = false;

    handleSubmit(supplierId: string) {
      this.editElement(supplierId, {
        "supplier_company_name": this.supplierCompanyName,
        "supplier_tel": this.supplierTel,
        "supplier_email": this.supplierEmail
      });
      this.dialog = false;
    }
  }
</script>