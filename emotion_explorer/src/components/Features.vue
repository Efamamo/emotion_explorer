<script setup>
import FeatureCard from '../components/FeatureCard.vue';
</script>

<template>
  <div class="pb-28">
    <h2 class="text-3xl font-bold text-center">Features</h2>
    <div class="flex gap-20 flex-wrap justify-center mt-10">
      <FeatureCard
        title="Create Custom Flashcards"
        image="/card.jpg"
        description="Effortlessly create your own flashcards with questions and answers to suit any subject or study goal. Add hints, examples, or keywords to make learning tailored and more effective."
      />

      <FeatureCard
        title="Organize by Subjects or Tags"
        image="/organize.jpg"
        description="Keep your flashcards neatly organized with subjects and tags, making it easy to find exactly what you need for each study session. Group by topic or importance to stay focused and structured."
      />

      <FeatureCard
        title="Interactive Study Mode"
        image="/study_mode.png"
        description="Engage with your flashcards through an interactive study mode. Flip each card to reveal the answer, add hints to reinforce learning, and mark correct or incorrect answers to track your progress."
      />

      <FeatureCard
        title="Progress Tracking"
        image="/progress.jpeg"
        description="Monitor your study performance with progress tracking features. Keep an eye on your strengths and areas to improve, so you know exactly where to focus your efforts."
      />

      <FeatureCard
        title="Random Shuffle"
        image="/shuffle.png"
        description="Boost your memory recall by shuffling flashcards in study mode. By breaking the order, you’ll avoid memorizing the sequence and ensure a stronger grasp of each answer."
      />
    </div>
  </div>
</template>
