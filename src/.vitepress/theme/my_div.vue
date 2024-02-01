<template>
    <button @click="increment">
      You have clicked me {{ count }} times.
    </button>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    name: 'Test',
    setup() {
      const count = ref(0);
  
      const increment = () => {
        count.value++;
      };
  
      return {
        count,
        increment,
      };
    },
  };
  </script>
  
  <style scoped>
  button {
    padding: 10px 20px;
    border: none;
    background-color: #42b983;
    color: white;
    font-size: 16px;
    cursor: pointer;
  }
  button:hover {
    background-color: #2c8c3e;
  }
  </style>