<template>
  <v-card>
    <v-card-title>
      <v-text-field
        v-model="search"
        append-icon="search"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
      <v-spacer></v-spacer>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="data"
      :search="search"
      :rows-per-page-items="[10, 20, 30]"
    >
      <template v-slot:items="props">
        <td
          class="text-xs-left"
          v-for="header in headers"
          v-bind:key="header.value"
        >
          {{props.item[header.value]}}
        </td>
        <td
          v-if="deleteElement || editElement"
          class="text-xs-right"
        >
          <v-dialog
            v-if="deleteElement"
            v-model="dialog"
            max-width="400"
          >
            <template v-slot:activator="{on}">
              <v-btn
                v-if="deleteElement"
                v-on="on"
                icon
              >
                <v-icon color="grey">delete</v-icon>
              </v-btn>
            </template>
            <v-card>
              <v-card-title class="headline">Confirmer la suppression</v-card-title>
              <v-card-text>Etes-vous sur de vouloir supprimer cet element ?</v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="green darken-1"
                  flat
                  @click="() => {deleteElement(props.item); dialog=false;}"
                >
                  Continuer
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>

          <v-btn
            v-if="editElement"
            icon
            @click="() => {editElement(props.item)}"
          >
            <v-icon color="grey">edit</v-icon>
          </v-btn>
        </td>
      </template>
      <template v-slot:no-results>
        <v-alert :value="true" color="error" icon="warning">
          Your search for "{{ search }}" found no results.
        </v-alert>
      </template>
    </v-data-table>
  </v-card>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component
    export default class CustomizedDatatable extends Vue {
      @Prop({type: String, default: ""}) readonly search: string;
      @Prop() readonly headers: any;
      @Prop() readonly data: any;
      @Prop() readonly deleteElement: Function;
      @Prop() readonly editElement: Function;
    }
</script>
