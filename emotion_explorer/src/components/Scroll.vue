<script setup>
import { onMounted, ref } from 'vue';
const isVisible = ref(false);

const handleScroll = () => {
  if (window.scrollY > 0) {
    isVisible.value = false;
  } else {
    isVisible.value = window.innerWidth > 780 && window.innerWidth > 400;
  }
};

onMounted(() => {
  isVisible.value = window.innerWidth > 780 && window.innerWidth > 400;
  window.addEventListener('scroll', handleScroll);
});
</script>

<template>
  <div
    :class="`w-full flex flex-col items-center absolute bottom-2 ${
      !isVisible ? 'hidden' : ''
    }`"
  >
    <img src="/mouse.png" alt="scroll icon" width="40" />
    <h3 class="font-semibold">Scroll down</h3>
  </div>
</template>
