<template>
  <div id="app">
    <Navvue class="nav1"/>
    <router-view class="mt-4 cuerpo1" />
    <Footvue class="pie1"/>
  </div>
</template>

<script>
import Navvue from "./components/Navvue.vue";
import Footvue from "./components/Footvue.vue";

export default {
  name: "App",
  components: {
     Navvue,
     Footvue
  },
};
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */ 
  /* text-align: center; */
  /* color: #2c3e50; */
  /* margin-top: 60px; */
  max-height: 100%;
  height: 100%;
  width: 100%;
}
/* .nav1{
  height: 10%;
}
.cuerpo1{
  height: 60%;
}
.pie1{
  height: 20%;
}  */

</style>
