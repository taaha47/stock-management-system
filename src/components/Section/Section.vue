<template>
  <v-container fluid>
    <div class="section text-lg-left">
      <span :class="[{'section__hover': clickable}]">
        {{sectionTitle}}
      </span>
    </div>
  </v-container>
</template>

<script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator';

  @Component
  export default class Section extends Vue{
    @Prop({type: String, default: ""}) readonly sectionTitle: string;
    @Prop() readonly clickable: boolean;
  }
</script>

<style scoped lang="stylus">
.section
  position relative
  border-bottom 1px solid lightgray;
  color: darkslategrey;
  font-weight lighter
  font-size 25px;
  font-family "Lato Light";
  &__hover
    &:hover
      cursor pointer;
      color: black;
</style>
