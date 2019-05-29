<template>
  <div>
    <p class="heading">{{title}}</p>
    <div class="indicators-container">
      <div class="indicator">
        <div class="indicator-title mb-2">{{valA.indicator}}</div>
        <div class="indicator-val">{{valA.value}}</div>
      </div>
      <v-spacer></v-spacer>
      <v-divider
        class="mx-4"
        vertical
      ></v-divider>
      <div class="indicator">
        <div class="indicator-title mb-2">{{valB.indicator}}</div>
        <div class="indicator-val">{{valB.value}}</div>
      </div>
      <v-spacer></v-spacer>
      <v-divider
        class="mx-4"
        vertical
      ></v-divider>
      <div class="indicator">
        <div class="indicator-title mb-2">{{valC.indicator}}</div>
        <div class="indicator-val">{{valC.value}}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator';

  type indicatorPropType = {
    indicator: string,
    value: number
  }

  @Component
  export default class Indicators extends Vue{
    @Prop(String) readonly title: string;
    @Prop(Object) readonly valA: indicatorPropType;
    @Prop(Object) readonly valB: indicatorPropType;
    @Prop(Object) readonly valC: indicatorPropType;
  }
</script>

<style scoped lang="stylus">
.heading
  text-align left;
  color darkslategrey;
  font-size 30px;
.indicators-container
  padding 15px 15px;
  display flex;
  justify-content baseline;
  flex-direction row;
  background whitesmoke;
  border 1px solid lightgray;
  border-radius 3px;
  .indicator
    text-align left;
    font-family "Lato Light";
    .indicator-title
      color: darkslategrey;
      font-weight lighter
      font-size 20px;
    .indicator-val
      font-size: 40px;
      color: darkslategrey;
</style>
