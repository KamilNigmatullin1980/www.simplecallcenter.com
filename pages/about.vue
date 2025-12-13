<template>
  <section
    class="w-full bg-cover bg-center relative overflow-hidden py-16 lg:py-24"
    :style="{ backgroundImage: `url(${image})` }"
  >
    <div class="absolute inset-0 bg-gradient-to-b from-white/80 to-white/60 dark:from-gray-900/80 dark:to-gray-900/60"></div>
    
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="max-w-4xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-16">
          <h1 class="text-4xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            About <span class="text-purple-800 dark:text-purple-300">Us</span>
          </h1>
        </div>

        <!-- Company Section -->
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 lg:p-12 mb-8">
          <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Company
          </h2>
          <div class="prose prose-lg dark:prose-invert max-w-none">
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              SimpleCallCenter is a product of <strong>Simple Communications, LLC</strong>, a California-based company founded in August 2023. We launched SimpleCallCenter in 2024 and continue to ship frequent improvements — including a major release in November 2025.
            </p>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
              We believe business phone tools should be transparent and fair: all core functionality is included, and pricing is based on usage — not per seat.
            </p>
          </div>
        </div>

        <!-- Footer-style one-liner -->
        <div class="text-center">
          <p class="text-sm text-gray-600 dark:text-gray-400 italic">
            SimpleCallCenter is built by Simple Communications, LLC (California). Founded Aug 2023. Launched 2024. Major upgrade shipped Nov 2025.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useHead } from '#imports'
import image from '@/assets/images/bg/bg-startup.png'

useHead({
  title: 'About Us | SimpleCallCenter',
  meta: [
    { 
      name: 'description', 
      content: 'SimpleCallCenter is a product of Simple Communications, LLC, a California-based company. Founded in August 2023, launched in 2024, with major upgrades shipping regularly.' 
    },
    { property: 'og:title', content: 'About Us | SimpleCallCenter' },
    { 
      property: 'og:description', 
      content: 'SimpleCallCenter is built by Simple Communications, LLC (California). Founded Aug 2023. Launched 2024. Major upgrade shipped Nov 2025.' 
    },
    { property: 'og:type', content: 'website' },
  ],
})
</script>





