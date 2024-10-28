<script setup>
import { features } from '../constants/features';
</script>

<template>
  <section
    class="features-page py-12 px-4 md:px-20 text-gray-800 max-w-7xl mx-auto mt-10 mb-20"
  >
    <!-- Page Header -->
    <div class="text-center mb-12">
      <h1 class="text-3xl font-bold mb-4">Smart Study Features</h1>
      <p class="text-gray-600 max-w-2xl mx-auto">
        Explore powerful features designed to help you study efficiently and
        achieve your academic goals.
      </p>
    </div>

    <!-- Features Grid -->
    <div class="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="(feature, index) in features"
        :key="index"
        class="feature-card bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center transition transform hover:scale-105"
      >
        <img
          :src="feature.image"
          alt="Feature Image"
          class="w-100 h-100 mb-4 rounded-lg"
        />
        <h3 class="text-2xl font-semibold mb-2">{{ feature.title }}</h3>
        <p class="text-gray-600">{{ feature.description }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.features-page {
  font-family: 'Inter', sans-serif;
}
.feature-card:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}
</style>
