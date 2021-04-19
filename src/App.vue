<template>
  <div id="app">
    <Navvue />
    <router-view class="mt-4" />
    <Footvue />
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
