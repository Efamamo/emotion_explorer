<script setup>
import Scroll from './Scroll.vue';
</script>

<template>
  <div
    class="flex items-center justify-center gap-32 flex-wrap min-h-screen px-5 md:px-0"
  >
    <img src="/unihero.png" alt="" class="max-w-80 animate-fadeInLeft" />
    <div class="flex flex-col gap-6 items-center max-w-3xl">
      <h1 class="text-3xl md:text-5xl font-bold animate-fadeInUp">
        Smart Study
      </h1>
      <p class="animate-fadeInUp">
        Transform your study experience with powerful tools for planning,
        practicing, and tracking progress. From creating flashcards to setting
        goals, stay motivated and make every study session count.
      </p>

      <RouterLink
        to="/signup"
        class="font-semibold px-4 py-1 bg-blue-600 hover:bg-blue-800 text-white md:px-8 md:py-3 rounded-full text-base md:text-lg animate-fadeInUp"
      >
        Get Started
      </RouterLink>
    </div>
  </div>
  <Scroll />
</template>

<style scoped>
@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translateX(-20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeInLeft {
  animation: fadeInLeft 0.8s ease-out forwards;
}

.animate-fadeInUp {
  animation: fadeInUp 0.8s ease-out forwards;
  animation-delay: 0.3s; /* Add a delay for staggered effect */
}
</style>
