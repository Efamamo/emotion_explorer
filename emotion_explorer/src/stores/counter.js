import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', () => {
  const features = ref([]);
  function addFeature(name) {
    features.value.push({ name: name });
  }

  return { features, addFeature };
});
