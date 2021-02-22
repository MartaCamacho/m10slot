<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <ModalBootstrap />
</template>

<script>
import ModalBootstrap from './components/ModalBootstrap/ModalBootstrap.vue';

export default {
  name: 'App',
  components: {
    ModalBootstrap
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
