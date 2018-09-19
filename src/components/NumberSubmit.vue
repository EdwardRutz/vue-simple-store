<template>
    <div>
        <input v-model="newNumber" type="number"/>
        <button @click="pushNewNumber(newNumber)">Add New Number</button>
    </div>
</template>

<script>
  import {store} from '../store/store.js';

  export default {
    name: "app-number-submit",
    data() {
      return {
        newNumber: 0
      }
    },
    methods: {
      pushNewNumber(newNumber) {
        store.pushNewNumber(newNumber);
      }
    }
  }
</script>

<style scoped>

</style>