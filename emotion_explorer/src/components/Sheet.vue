<template>
  <div
    v-if="isOpen"
    class="md:hidden fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
  >
    <div
      @click="close"
      class="sheet fixed top-0 right-0 bottom-0 max-w-sm bg-white p-4 w-full shadow-lg transform transition-transform duration-1000 ease-in-out"
      :class="{ 'translate-x-0': isOpen, 'translate-x-full': !isOpen }"
    >
      <!-- Close Button -->
      <button class="absolute top-4 right-4 text-gray-500 hover:text-gray-800">
        ✕
      </button>

      <!-- Slot for Sheet Content -->
      <slot />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Props
const props = defineProps({
  isOpen: Boolean,
  onClose: Function,
});

// Methods
function close() {
  props.onClose();
}
</script>

<style scoped>
.sheet {
  will-change: transform;
  transition: transform 0.5s ease-in-out;
}
</style>
