<template>
  <div class="user-type-card">
    <img
      :src="require('../../assets/user.png')"
      height="65"
      width="65"
    />
    <div class="text-lg-right">
      <p class="title">{{userType}}</p>
      <p class="count">{{count}}</p>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator';

  @Component
  export default class UserTypeCard extends Vue{
    @Prop(String) readonly userType: string;
    @Prop(Number) readonly count: number;
  }
</script>

<style scoped lang="stylus">
.user-type-card
  border-bottom 2px solid lightgray;
  display flex;
  flex-direction row;
  justify-content space-between;
  width 200px;
  .title
    color: darkslategrey;
    font-weight lighter
    font-size 20px;
    font-family "Lato Light";
  .count
    font-size: 20px;
    color: darkslategrey;
    font-weight bolder;
    font-family "Lato Light";


</style>