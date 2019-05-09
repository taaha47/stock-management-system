<template>
  <div class="HelloWorld">
    <h1>{{msg}}</h1>
    <h2>Hober mallow</h2>
  </div>
</template>

<script>
  export default {
      data() {
          return {
              msg: "Violence is the last refuge of the incompetent."
          }
      }
  }
</script>

<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
