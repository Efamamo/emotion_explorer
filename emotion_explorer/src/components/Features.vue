<script setup>
import FeatureCard from '../components/FeatureCard.vue';
</script>

<template>
  <div class="pb-40 px-5 md:px-0">
    <div class="flex items-center justify-center flex-wrap gap-32">
      <div class="max-w-xl">
        <img src="/features.png" alt="smart hero" width="100%" />
      </div>

      <div class="max-w-xl">
        <h2 class="text-3xl font-bold mb-4">Key Features</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sed velit
          dicta quo soluta dignissimos suscipit quia fugiat eum nemo.
        </p>
        <ul class="mt-16 flex flex-col gap-8">
          <FeatureCard
            title="Create Custom Flashcards"
            description="Effortlessly create your own flashcards with questions and answers to suit any subject or study goal."
          />

          <FeatureCard
            title="Organize by Subjects or Tags"
            description="Keep your flashcards neatly organized with subjects and tags, making it easy to find exactly what you need for each study session."
          />

          <FeatureCard
            title="Progress Tracking"
            description="Monitor your study performance with progress tracking features."
          />
        </ul>
      </div>
    </div>
  </div>
</template>
