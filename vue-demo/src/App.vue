<template>
  <div id="app">
    <Navigation />



  </div>
</template>

<script>
import Register from './components/Register.vue';
import Home from "./components/Home.vue";
import Navigation from "./components/Navigation.vue";

export default {
  name: 'App',
  components: {
    Navigation,
    Home,
    Register
  }
};
</script>

<style>

</style>
