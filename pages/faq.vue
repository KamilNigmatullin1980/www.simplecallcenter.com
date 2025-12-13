<template>
  <section
    class="w-full bg-cover bg-center relative overflow-hidden py-16 lg:py-24"
    :style="{ backgroundImage: `url(${image})` }"
  >
    <!-- Optional overlay for better text readability -->
    <div class="absolute inset-0 bg-gradient-to-b from-white/80 to-white/60 dark:from-gray-900/80 dark:to-gray-900/60"></div>
    
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Header -->
      <div class="max-w-5xl mx-auto text-center mb-16">
        <h1 class="text-4xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
          You've Got <span class="text-purple-800 dark:text-purple-300">Questions</span>
        </h1>
        <p class="text-lg sm:text-xl lg:text-2xl text-gray-700 dark:text-gray-200 mb-4 max-w-3xl mx-auto leading-relaxed">
          We Actually Answered Them
        </p>
        <p class="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          No sales jargon. No fluff. Just straight answers
        </p>
      </div>

      <!-- FAQ Questions -->
      <div class="max-w-4xl mx-auto mb-20">
        <faqQuestions />
      </div>
    </div>
  </section>
</template>

<script setup>
import { useHead } from '#imports'
import image from '~/assets/images/bg/bg-startup.png'

useHead({
  title: 'FAQ | SimpleCallCenter',
  meta: [
    {
      name: 'description',
      content:
        'Find answers to common questions about SimpleCallCenter. Learn about pricing, setup, features, integrations, and more.',
    },
    {
      name: 'keywords',
      content:
        'FAQ, frequently asked questions, SimpleCallCenter help, call center questions, support, SimpleCallCenter',
    },
    { property: 'og:title', content: 'FAQ | SimpleCallCenter' },
    {
      property: 'og:description',
      content:
        'Find answers to common questions about SimpleCallCenter. No sales jargon. No fluff. Just straight answers.',
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://simplecallcenter.com/faq' },
  ],
})
</script>

<style scoped>
/* All styling handled via Tailwind */
</style>
