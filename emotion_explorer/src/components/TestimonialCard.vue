<script setup>
import { defineProps } from 'vue';
defineProps({
  image: String,
  testimony: String,
  name: String,
});
</script>

<template>
  <div
    class="max-w-80 p-6 shadow-lg rounded-lg cursor-pointer hover:scale-105 duration-700"
  >
    <img
      :src="image"
      alt="testimonial image"
      class="ml-auto rounded-bl-full w-20 h-20"
    />
    <h3 class="text-base md:text-lg mt-2">
      <i>{{ testimony }}</i>
    </h3>
    <p class="text-xs md:text-sm mt-2 font-semibold">{{ name }}</p>
  </div>
</template>
