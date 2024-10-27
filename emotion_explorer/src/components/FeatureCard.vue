<script setup>
import { ref, defineProps } from 'vue';

defineProps({
  title: {
    type: String,
    default: 'Title',
  },
  image: {
    type: String,
    default: '/study_mode.png',
  },
  description: {
    type: String,
    default: 'Description',
  },
});
</script>
<template>
  <div
    class="rounded-lg border border-gray-200 flex gap-4 max-w-3xl p-8 items-center flex-wrap"
  >
    <img :src="image" alt="feature img" class="max-w-xs rounded-lg" />
    <div class="text-center max-w-xs">
      <h3 class="text-center mb-4 text-xl font-semibold">{{ title }}</h3>
      <p>{{ description }}</p>
    </div>
  </div>
</template>
