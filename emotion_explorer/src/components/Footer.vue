<template>
  <footer class="bg-gray-100 text-black py-10">
    <div class="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
      <!-- Logo and Description -->
      <div class="space-y-4">
        <div class="flex gap-4">
          <img src="/studying.png" alt="" class="w-8" />
          <h2 class="text-2xl font-semibold">Smart Study</h2>
        </div>
        <p>
          Your all-in-one study companion. Organize tasks, create flashcards,
          and track progress with ease.
        </p>
      </div>

      <!-- Navigation Links -->
      <div>
        <h3 class="text-xl font-semibold mb-4">Quick Links</h3>
        <ul class="space-y-2">
          <li>
            <a href="/features" class="hover:underline">Features</a>
          </li>
          <li>
            <a href="/about" class="hover:underline">About Us</a>
          </li>
          <li>
            <a href="/contact" class="hover:underline">Contact</a>
          </li>
          <li><a href="/faq" class="hover:underline">FAQ</a></li>
        </ul>
      </div>

      <!-- Social Media and Contact Info -->
      <div class="space-y-4">
        <h3 class="text-xl font-semibold">Connect with Us</h3>
        <div class="flex space-x-4">
          <a
            href="https://facebook.com"
            class="hover:text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/facebook.svg" class="w-8" alt="" />
          </a>
          <a
            href="https://twitter.com"
            class="hover:text-blue-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/twitter.svg" class="w-8" alt="" />
          </a>
          <a
            href="https://instagram.com"
            class="hover:text-pink-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/instagram.svg" class="w-8" alt="" />
          </a>
          <a
            href="https://linkedin.com"
            class="hover:text-blue-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/linkedin.svg" class="w-8" alt="" />
          </a>
        </div>
        <p>Email: support@smartstudy.com</p>
      </div>
    </div>
    <div class="text-center mt-8">
      &copy; {{ new Date().getFullYear() }} Smart Study. All rights reserved.
    </div>
  </footer>
</template>
