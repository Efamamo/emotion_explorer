<template>
  <div class="pt-28 pb-40">
    <h2 class="text-3xl text-center font-semibold mb-10">Testimonials</h2>
    <div
      class="flex gap-20 justify-center items-stretch flex-wrap testimonials"
    >
      <div class="animate-card">
        <TestimonialCard
          image="/beka.jpeg"
          name="Beka Birhanu"
          testimony="This app has completely transformed my study routine! The flashcards are so easy to create and organize by subject, and the interactive study mode keeps me engaged. I love being able to track my progress and see how much I’m improving over time!"
        />
      </div>
      <div class="animate-card">
        <TestimonialCard
          image="/chachi.jpeg"
          name="Nardos Daniel"
          testimony="I've tried a lot of study tools, but this one really stands out. The ability to tag and shuffle flashcards is a game-changer for my memory. Plus, the progress tracking helps me focus on areas where I need more practice. Highly recommend!"
        />
      </div>
      <div class="animate-card">
        <TestimonialCard
          image="/chawi.jpeg"
          name="Yohannes Alemayehu"
          testimony="The custom flashcards and organization features make studying so much easier. I use this app daily for everything from quick reviews to in-depth study sessions. It’s clear, intuitive, and keeps me motivated!"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import TestimonialCard from './TestimonialCard.vue';
</script>

<style scoped>
@keyframes appear {
  0% {
    transform: translateX(-100vw) scale(0.8);
  }

  60% {
    transform: translateX(-20px) scale(1.05);
  }
  80% {
    transform: translateX(-10px) scale(1);
  }
  100% {
    transform: translateX(0) scale(1);
  }
}

.testimonials {
  animation: appear 1s ease forwards; /* Shortened duration for a quicker reveal */
  animation-timeline: view();
  animation-range: entry 0% cover 60%;
}
</style>
