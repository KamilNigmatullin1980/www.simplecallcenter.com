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

        <!-- Built by real people Section -->
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 lg:p-12 mb-8">
          <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Built by real people — for real support teams.
          </h2>
          <div class="prose prose-lg dark:prose-invert max-w-none">
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              SimpleCallCenter is a product of <strong>Simple Communications, LLC</strong>, a California-based company founded in August 2023. We launched the platform in 2024 and continue to ship improvements every month — including a major release in November 2025.
            </p>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
              Our team is small, focused, and obsessed with removing the friction from inbound phone support. No bloated tools. No confusing pricing. Just a clean, modern platform that works.
            </p>
          </div>
        </div>

        <!-- Why We Exist Section -->
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 lg:p-12 mb-8">
          <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Why We Exist
          </h2>
          <div class="prose prose-lg dark:prose-invert max-w-none">
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 font-semibold text-lg">
              We believe customer conversations still matter.
            </p>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              That's why we don't replace your team with chatbots in headsets pretending to be people. Businesses that care about their customers don't hand over support to soulless AI agents — and neither do we.
            </p>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              SimpleCallCenter is built for real humans, doing real work — with AI supporting them quietly in the background. It flags quality issues, summarizes calls, and helps your team improve without drama or extra tools.
            </p>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
              And because small businesses deserve tools that aren't priced like luxury software, we ditched the per-seat pricing and built a system where you only pay for what you use — with no surprise fees, ever.
            </p>
          </div>
        </div>

        <!-- Our Promise Section -->
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 lg:p-12 mb-8">
          <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Our Promise
          </h2>
          <div class="space-y-6">
            <div class="flex items-start gap-4">
              <span class="text-3xl">🧠</span>
              <div>
                <p class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Real AI, when you want it.</p>
                <p class="text-gray-700 dark:text-gray-300">Call summaries, scoring, and quality checks — turned on only when you need them.</p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <span class="text-3xl">👥</span>
              <div>
                <p class="text-lg font-semibold text-gray-900 dark:text-white mb-2">No per-agent pricing.</p>
                <p class="text-gray-700 dark:text-gray-300">Add as many team members as you like. No hidden costs.</p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <span class="text-3xl">📞</span>
              <div>
                <p class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Test it before you commit.</p>
                <p class="text-gray-700 dark:text-gray-300">Create a real call center in minutes. No credit card needed.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- CTA Section -->
        <div class="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-2xl shadow-xl border-2 border-purple-200 dark:border-purple-800 p-8 lg:p-12 text-center">
          <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Want to try it?
          </h2>
          <p class="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Get a shared number + PIN in minutes.<br>
            Run a full inbound test flow before you spend a dime.
          </p>
          <button 
            @click="authModal.open()"
            class="px-8 py-4 bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-800 hover:from-purple-500 hover:via-purple-600 hover:to-indigo-700 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg"
          >
            🚀 Launch Free Test →
          </button>
        </div>
      </div>
    </div>
  </section>

  <!-- Auth Modal -->
  <AuthModal :is-open="authModal.isOpen.value" @close="authModal.close()" />
</template>

<script setup lang="ts">
import { useHead } from '#imports'
import image from '@/assets/images/bg/bg-startup.webp'

const authModal = useAuthModal()

useHead({
  title: 'About Us | SimpleCallCenter',
  meta: [
    { 
      name: 'description', 
      content: 'SimpleCallCenter is built by real people for real support teams. Learn about our mission, values, and commitment to transparent pricing and customer-first design.' 
    },
    {
      name: 'keywords',
      content:
        'about SimpleCallCenter, Simple Communications LLC, call center platform mission, customer-first design, transparent pricing, no per-seat fees, SimpleCallCenter',
    },
    { property: 'og:title', content: 'About Us | SimpleCallCenter' },
    { 
      property: 'og:description', 
      content: 'Built by Simple Communications, LLC. We believe customer conversations matter. No per-seat pricing. Test before you commit.' 
    },
    { property: 'og:type', content: 'website' },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'About Us | SimpleCallCenter',
        description: 'SimpleCallCenter is built by real people for real support teams. Learn about our mission, values, and commitment to transparent pricing and customer-first design.',
        url: 'https://www.simplecallcenter.com/about',
        publisher: {
          '@type': 'Organization',
          name: 'Simple Communications, LLC',
          alternateName: 'SimpleCallCenter',
          url: 'https://www.simplecallcenter.com',
        },
      }),
    },
  ],
})
</script>





