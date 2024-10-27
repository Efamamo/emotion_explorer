<template>
  <div class="bg-blue-600 py-16 mt-10 text-center text-white px-5 md:px-0">
    <h2 class="text-2xl md:text-4xl font-bold mb-6">
      Ready to Empower Your Brain?
    </h2>
    <p class="text-base md:text-lg mb-8">
      Take the next step and join Smart Study to Change Your Life.
    </p>
    <div class="flex justify-center gap-4">
      <RouterLink
        to="/sign-up"
        class="bg-white text-black px-4 py-1 md:px-8 md:py-3 rounded-full text-base md:text-lg font-semibold hover:bg-gray-100"
      >
        Get Started
      </RouterLink>
      <RouterLink
        to="/download"
        class="bg-transparent border-2 border-white px-4 py-1 md:px-8 md:py-3 rounded-full text-base md:text-lg font-semibold hover:bg-white hover:text-black"
      >
        Join Now
      </RouterLink>
    </div>
  </div>
</template>
