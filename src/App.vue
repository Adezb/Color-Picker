<template>
  <div id="app">
    <ColourPickerGame />
  </div>
</template>

<script>
import ColourPickerGame from './components/Color-Picker.vue'
export default {
  name: 'App',
  components: {
    ColourPickerGame
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
