<template>
  <section
    class="about-page py-10 px-4 md:px-20 text-gray-800 max-w-7xl mx-auto"
  >
    <!-- Page Title -->
    <div class="text-center mb-20">
      <h1 class="text-4xl font-bold mb-4">About Smart Study</h1>
      <p class="text-gray-600 max-w-2xl mx-auto">
        Your all-in-one study companion for organizing tasks, creating custom
        flashcards, and tracking progress to help you reach your academic goals
        effectively.
      </p>
    </div>

    <!-- Our Mission Section -->
    <div
      class="mission-section bg-gray-50 border-l-4 border-blue-500 shadow-md rounded-lg p-8 mb-20"
    >
      <h2 class="text-3xl font-semibold mb-4 text-blue-500">Our Mission</h2>
      <p class="text-gray-700">
        At Smart Study, our mission is to empower students to excel in their
        studies by providing tools that make learning efficient and enjoyable.
        We believe that effective study habits are key to academic success, and
        we're here to help you build those habits.
      </p>
    </div>

    <!-- Our Vision Section -->
    <div
      class="mission-section bg-gray-50 border-l-4 border-blue-500 shadow-md rounded-lg p-8 mb-20"
    >
      <h2 class="text-3xl font-semibold mb-4 text-blue-500">Our Vision</h2>
      <p class="text-gray-700">
        We envision a future where students around the world have access to
        tools that make learning personalized, accessible, and effective,
        enabling them to reach their full potential and thrive academically.
      </p>
    </div>

    <!-- Our Team Section -->
    <div class="team-section bg-white shadow-md rounded-lg p-6 mb-12">
      <h2 class="text-3xl font-semibold text-center mb-8">Meet Our Team</h2>
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <!-- Team Member Card -->
        <div class="team-member text-center">
          <img
            src="/ephrem.jpeg"
            alt="Team Member"
            class="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h3 class="text-xl font-semibold">Ephrem Mamo</h3>
          <p class="text-gray-500">Founder & CEO</p>
        </div>
        <div class="team-member text-center">
          <img
            src="/beka.jpeg"
            alt="Team Member"
            class="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h3 class="text-xl font-semibold">Beka Birhanu</h3>
          <p class="text-gray-500">Head of Product</p>
        </div>
        <div class="team-member text-center">
          <img
            src="https://via.placeholder.com/150"
            alt="Team Member"
            class="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h3 class="text-xl font-semibold">Biruk Tesfaye</h3>
          <p class="text-gray-500">Lead Developer</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About',
};
</script>

<style scoped>
.about-page {
  font-family: 'Inter', sans-serif;
}

.mission-section {
  transition: all 0.3s ease;
}

.mission-section:hover {
  background-color: #ebf8ff;
  border-color: #3182ce;
}
</style>
