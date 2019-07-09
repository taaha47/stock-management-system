<template>
  <div class="user-type-card">
    <img
      v-bind:src="require('../../assets/' + this.computePath(iconType))"
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
    @Prop(String) readonly userType?: string;
    @Prop({default: "PERSON"}) readonly iconType: ("PERSON" | "CATEGORY");
    @Prop(String) readonly count: string;

    computePath = (iconType) => {
      switch (iconType) {
        case "CATEGORY":
          return "2-squares.svg";
        case "PERSON":
        default:
          return "user.png"
      }
    };

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