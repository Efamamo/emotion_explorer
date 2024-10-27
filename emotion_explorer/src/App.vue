<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router';
import Footer from './components/Footer.vue';

const route = useRoute();

function isActive(path) {
  if (path === '/') {
    return path === route.path;
  }
  return route.path.includes(path);
}
</script>

<template>
  <div>
    <header class="hidden md:block">
      <div>
        <nav class="flex gap-3 justify-between px-16 items-center mt-8 mb-5">
          <RouterLink to="/" class="flex-1">
            <img src="/studying.png" alt="" class="w-10" />
          </RouterLink>
          <div class="flex gap-5 justify-center flex-1">
            <RouterLink
              to="/"
              class="font-semibold text-lg"
              :class="isActive('/') ? 'border-b text-blue-600' : ''"
              >Home</RouterLink
            >
            <RouterLink
              to="/about"
              class="font-semibold text-lg"
              :class="isActive('/about') ? 'border-b text-blue-600' : ''"
              >About</RouterLink
            >

            <RouterLink
              to="/tasks"
              class="font-semibold text-lg"
              :class="isActive('/tasks') ? 'border-b text-blue-600' : ''"
              >Features</RouterLink
            >
          </div>
          <div class="flex gap-4 items-center flex-1 justify-end">
            <RouterLink to="/login" class="font-semibold text-lg">
              Login
            </RouterLink>
            <RouterLink
              to="/signup"
              class="font-semibold text-lg bg-black text-white px-6 py-2 rounded-full"
            >
              Signup
            </RouterLink>
          </div>
        </nav>
      </div>
    </header>

    <RouterView />
    <Footer />
  </div>
</template>

<style scoped></style>
