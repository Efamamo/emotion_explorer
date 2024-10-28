<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router';
const route = useRoute();

function isActive(path) {
  if (path === '/') {
    return path === route.path;
  }
  return route.path.includes(path);
}
import { ref } from 'vue';
import Sheet from './Sheet.vue';

const isSheetOpen = ref(false);

function toggleSheet() {
  isSheetOpen.value = !isSheetOpen.value;
}
</script>

<template>
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
            to="/features"
            class="font-semibold text-lg"
            :class="isActive('/features') ? 'border-b text-blue-600' : ''"
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

  <div class="relative md:hidden flex items-center justify-end p-4">
    <RouterLink to="/" class="block flex-1 md:hidden">
      <img src="/studying.png" alt="" class="w-10" />
    </RouterLink>
    <img src="/burger.svg" @click="toggleSheet" class="w-10 block md:hidden" />

    <Sheet :isOpen="isSheetOpen" :onClose="toggleSheet">
      <h2 class="text-2xl font-bold text-center mb-6">Smart Study</h2>
      <div class="flex flex-col gap-10">
        <div class="flex flex-col gap-5 justify-center flex-1">
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
            to="/features"
            class="font-semibold text-lg"
            :class="isActive('/features') ? 'border-b text-blue-600' : ''"
            >Features</RouterLink
          >
        </div>
        <div class="flex gap-4 items-start flex-1 flex-col">
          <RouterLink to="/login" class="font-semibold text-lg">
            Login
          </RouterLink>
          <RouterLink to="/signup" class="font-semibold text-lg">
            Signup
          </RouterLink>
        </div>
      </div>
    </Sheet>
  </div>
</template>
