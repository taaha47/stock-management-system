<template>
  <v-progress-linear
    v-show="visible"
    indeterminate
    color="green"
    style="top: -17px;"
  ></v-progress-linear>
</template>

<script lang="ts">
    import { Component, Vue, Prop } from 'vue-property-decorator';

    @Component
    export default class GlobalLoader extends Vue{
        @Prop() readonly visible: boolean;
        @Prop() readonly message: string;
    }
</script>
