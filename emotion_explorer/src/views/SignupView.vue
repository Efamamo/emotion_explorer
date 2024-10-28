<template>
  <div class="min-h-screen flex justify-center items-center px-5 md:px-0">
    <div class="p-5 md:p-10 shadow-lg rounded-lg max-w-xl flex-1">
      <h2 class="text-center text-3xl font-semibold mb-10">Sign Up</h2>
      <form action="">
        <div class="flex flex-col my-4">
          <label class="text-lg" for="">Username</label>
          <input
            type="text"
            name=""
            id=""
            placeholder="Username"
            class="mt-1 p-2 border border-gray-400 rounded-lg"
          />
        </div>
        <div class="flex flex-col my-4">
          <label class="text-lg" for="">Email</label>
          <input
            class="mt-1 p-2 border border-gray-400 rounded-lg"
            type="text"
            name=""
            id=""
            placeholder="Email"
          />
        </div>
        <div class="flex flex-col my-4">
          <label class="text-lg" for="">Password</label>
          <input
            type="password"
            name=""
            id=""
            placeholder="Password"
            class="mt-1 p-2 border border-gray-400 rounded-lg"
          />
        </div>

        <div class="flex flex-col my-4">
          <label class="text-lg" for="">Confirm Password</label>
          <input
            type="password"
            name=""
            id=""
            placeholder="Confirm Password"
            class="mt-1 p-2 border border-gray-400 rounded-lg"
          />
        </div>

        <button
          class="bg-blue-500 w-full text-white p-2 mt-6 rounded-full shadow-lg"
        >
          Sign Up
        </button>
      </form>
      <div class="flex gap-1 justify-center mt-2">
        <p>Already have an account?</p>
        <RouterLink to="/login" class="text-blue-600"> Login </RouterLink>
      </div>
    </div>
  </div>
</template>
