<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-4">
    <div class="max-w-2xl w-full text-center">
      <!-- 404 Number -->
      <div class="mb-8">
        <h1 class="text-9xl font-bold bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-800 bg-clip-text text-transparent animate-pulse">
          404
        </h1>
      </div>

      <!-- Error Message -->
      <div class="mb-8">
        <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Page Not Found
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-300 mb-2">
          Oops! The page you're looking for doesn't exist.
        </p>
        <p class="text-base text-gray-500 dark:text-gray-400">
          It might have been moved, deleted, or the URL might be incorrect.
        </p>
      </div>

      <!-- Action Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <NuxtLink
          to="/"
          class="group relative px-8 py-4 bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-800 hover:from-purple-500 hover:via-purple-600 hover:to-indigo-700 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 active:scale-100 shadow-lg hover:shadow-purple-500/50 flex items-center justify-center gap-2 min-w-[200px]"
        >
          <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          Go to Homepage
        </NuxtLink>

        <button
          @click="goBack"
          class="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-full border-2 border-gray-300 dark:border-gray-600 hover:border-purple-500 dark:hover:border-purple-500 transition-all duration-300 transform hover:scale-105 active:scale-100 shadow-md hover:shadow-lg flex items-center justify-center gap-2 min-w-[200px]"
        >
          <svg class="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Go Back
        </button>
      </div>

      <!-- Quick Links -->
      <div class="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
        <p class="text-sm text-gray-500 dark:text-gray-400 mb-4">Popular Pages:</p>
        <div class="flex flex-wrap justify-center gap-4">
          <NuxtLink
            to="/features"
            class="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 hover:underline transition-colors"
          >
            Features
          </NuxtLink>
          <NuxtLink
            to="/pricing"
            class="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 hover:underline transition-colors"
          >
            Pricing
          </NuxtLink>
          <NuxtLink
            to="/about"
            class="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 hover:underline transition-colors"
          >
            About
          </NuxtLink>
          <NuxtLink
            to="/faq"
            class="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 hover:underline transition-colors"
          >
            FAQ
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  error: {
    type: Object,
    default: null
  }
})

const goBack = () => {
  if (process.client) {
    window.history.length > 1 ? window.history.back() : navigateTo('/')
  }
}

useHead({
  title: '404 - Page Not Found | SimpleCallCenter',
  meta: [
    {
      name: 'description',
      content: 'The page you are looking for could not be found. Return to SimpleCallCenter homepage or browse our features and pricing.'
    },
    {
      name: 'robots',
      content: 'noindex, nofollow'
    }
  ]
})
</script>

<style scoped>
/* Additional animations if needed */
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}
</style>






