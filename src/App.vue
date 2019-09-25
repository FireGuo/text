<template>
  <div id="app">
<!--    <img src="./assets/logo.png">-->
<!--    <router-view/>-->
    <Home></Home>
  </div>
</template>

<script>

import Home from "./page/home/home";
export default {
  name: 'App',
  components: {Home}
}
</script>

<style>
#app {
  height: 100%;
  /*margin-top: 60px;*/
}
html,body{
  height: 100%;
}
*{
  margin: 0;
  padding: 0;
}
</style>
