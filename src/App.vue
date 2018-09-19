<disable-eslint/>
<template>
  <div>

  </div>
</template>

<script>
import NumberDisplay from './components/NumberDispay.vue'

export default {
  name: 'app',
  components: {
    'app-number-display': NumberDisplay
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
