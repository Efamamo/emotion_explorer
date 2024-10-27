<script setup>
import TestimonialCard from './TestimonialCard.vue';
</script>

<template>
  <div class="py-28">
    <h2 class="text-3xl text-center font-semibold mb-10">Testimonials</h2>
    <div class="flex gap-20 justify-center flex-wrap">
      <TestimonialCard
        image="/organize.jpg"
        name="Beka Birhanu"
        testimony="This app has completely transformed my study routine! The flashcards are so easy to create and organize by subject, and the interactive study mode keeps me engaged. I love being able to track my progress and see how much I’m improving over time!"
      />
      <TestimonialCard
        image="studying.png"
        name="Nardos Daniel"
        testimony="I've tried a lot of study tools, but this one really stands out. The ability to tag and shuffle flashcards is a game-changer for my memory. Plus, the progress tracking helps me focus on areas where I need more practice. Highly recommend!"
      />

      <TestimonialCard
        image="progress.jpeg"
        name="Yohannes Alemayehu"
        testimony="The custom flashcards and organization features make studying so much easier. I use this app daily for everything from quick reviews to in-depth study sessions. It’s clear, intuitive, and keeps me motivated!”"
      />
    </div>
  </div>
</template>
