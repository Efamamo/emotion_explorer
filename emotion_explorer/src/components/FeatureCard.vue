<script setup>
import { ref } from 'vue';

defineProps({
  title: {
    type: String,
    default: 'Title',
  },
  description: {
    type: String,
    default: 'Description',
  },
});
</script>
<template>
  <div class="max-w-xl flex items-start gap-4 pl-4">
    <img src="/radio.png" class="max-w-4 pt-1.5 items-center" alt="" />

    <div>
      <h3 class="text-xl font-semibold">{{ title }}</h3>
      <p>{{ description }}</p>
    </div>
  </div>
</template>
