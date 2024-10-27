<script setup>
import Scroll from './Scroll.vue';
</script>

<template>
  <div
    class="flex items-center justify-center gap-32 pb-40 flex-wrap min-h-screen"
  >
    <img src="/unihero.png" alt="" class="max-w-80" />
    <div class="flex flex-col gap-6 items-center max-w-3xl">
      <h1 class="text-5xl font-bold">Smart Study</h1>
      <p>
        Transform your study experience with powerful tools for planning,
        practicing, and tracking progress. From creating flashcards to setting
        goals, stay motivated and make every study session count.
      </p>

      <RouterLink
        to="/signup"
        class="font-semibold text-lg bg-blue-600 hover:bg-blue-800 text-white px-6 py-2 rounded-full"
      >
        Get Started
      </RouterLink>
    </div>
  </div>
  <Scroll />
</template>
