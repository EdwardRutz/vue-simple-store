<disable-eslint/>
<template>
  <div id="app">
    <h1>Simple Store</h1>

    <app-number-submit></app-number-submit>


    <app-number-display></app-number-display>


  </div>
</template>

<script>
import NumberDisplay from './components/NumberDispay.vue'
import NumberSubmit from './components/NumberSubmit.vue'

export default {
  name: 'app',
  components: {
    'app-number-display': NumberDisplay,
    'app-number-submit': NumberSubmit
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
