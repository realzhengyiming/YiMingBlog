<template>
  <div :style="{left: `${x}px`, top: `${y}px`, transition: 'top 0.5s, left 0.5s'}">
    <img :src="face" @click="changeFace" style="cursor: pointer;">
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  setup() {
    const laughFace = '/128x128_indexhead.png';
    const cryFace = '/128x128_laughface.png';

    const face = ref(laughFace);
    // const x = ref(0);
    // const y = ref(0);
    const x = 200;
    const y = 100;
    
    const changeFace = () => {
      face.value = cryFace;
  
      x.value = Math.random() * window.innerWidth - 128 / 2;
      y.value = Math.random() * window.innerHeight - 128 / 2;
  
      setTimeout(() => {
        face.value = laughFace;
      }, 500);
    };
    return { face, changeFace, x, y };
  }
}
</script>

<style scoped>
div {
  position: fixed;
  z-index: 1000; /* Using a very large number for z-index to put the div on top */
}

img {
  animation: float 2s infinite;
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
}
</style>