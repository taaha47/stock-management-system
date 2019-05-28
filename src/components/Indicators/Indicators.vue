<template>
  <div class="mb-5">
    <p class="heading">{{title}}</p>
    <div class="indicators-container">
      <div class="indicator">
        <p class="title">{{valA.indicator}}</p>
        <p class="val">{{valA.value}}</p>
      </div>
      <v-spacer></v-spacer>
      <v-divider
        class="mx-4"
        vertical
      ></v-divider>
      <div class="indicator">
        <p class="title">{{valB.indicator}}</p>
        <p class="val">{{valB.value}}</p>
      </div>
      <v-spacer></v-spacer>
      <v-divider
        class="mx-4"
        vertical
      ></v-divider>
      <div class="indicator">
        <p class="title">{{valC.indicator}}</p>
        <p class="val">{{valC.value}}</p>
      </div>
      <v-spacer></v-spacer>
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
  export default class Stock extends Vue{
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
  font-size 20px;
.indicators-container
  padding 20px 15px;
  display flex;
  justify-content baseline;
  flex-direction row;
  background whitesmoke;
  border 1px solid lightgray;
  border-radius 3px;
  .indicator
    text-align left;
    width 180px;
    .title
      color: darkslategrey;
      font-weight lighter
      font-size 20px;
      font-family "Lato Light";
    .val
      font-size: 40px;
      color: darkslategrey;
      font-family "Lato Light";
</style>