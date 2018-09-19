<template>
  <div class="">
    <h2>{{ storeState.numbers }}</h2>
  </div>
</template>

<script>
    import { store } from './store.js';

export default {
  name: 'app-number-display',
  data ()  {
    return {
      storeState: store.state
    }
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
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
