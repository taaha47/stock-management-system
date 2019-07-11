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
          <component
            :is="ConfirmDeletePopup"
            v-if="deleteElement"
            :deleteElement="deleteElement"
            :element="props.item"
            :deleteConfirmationMessage="deleteConfirmationMessage"
          ></component>
          <component
            :is="EditElementFormPopup"
            v-if="editElement"
            :editElement="editElement"
            :element="props.item"
          ></component>
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
      @Prop() readonly ConfirmDeletePopup: any;
      @Prop() readonly editElement: Function;
      @Prop() readonly EditElementFormPopup: any;
      @Prop() readonly deleteConfirmationMessage: string;
    }
</script>
