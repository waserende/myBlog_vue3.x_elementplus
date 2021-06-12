<template>
  <Navbar></Navbar>
  <!-- <Register></Register> -->
  <router-view />
  <div></div>
</template>

<script>
import Navbar from './Navbar.vue';
// import Register from './Register.vue';

export default {
  components: { Navbar },
  // components: { Register },
};
</script>

<style>
</style>
