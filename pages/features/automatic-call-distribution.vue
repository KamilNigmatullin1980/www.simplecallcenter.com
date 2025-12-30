<script setup lang="ts">
import { ref } from 'vue'
import { useHead } from '#imports'
import image from '../../assets/images/bg/bg-startup.webp'

useHead({
  title: 'Automatic Call Distribution System | SimpleCallCenter',
  meta: [
    {
      name: 'description',
      content:
        'Utilize our Advanced Call Distribution (ACD) system for position announcement, SLAs and Timers, integrated voicemail, and efficient call handling.',
    },
    {
      name: 'keywords',
      content:
        'automatic call distribution system, ACD, inbound call routing, call queue, position announcements, SLA timers, voicemail routing, SimpleCallCenter',
    },
    { property: 'og:title', content: 'Automatic Call Distribution System | SimpleCallCenter' },
    {
      property: 'og:description',
      content:
        'Utilize our Advanced Call Distribution system for position announcement, SLAs and Timers, integrated voicemail, and efficient call handling.',
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://simplecallcenter.com/automatic-call-distribution' },
  ],
})

const coreFeatures = ref([
  {
    icon: 'uil uil-route',
    title: 'Intelligent Call Routing',
    description: 'Takes every inbound call, parks it in the right queue, and connects it to the best available agent with fair distribution across all queues.',
    hint: 'Smart routing'
  },
  {
    icon: 'uil uil-volume',
    title: 'Position Announcements',
    description: 'Callers hear periodic queue announcements including their position in line, estimated waiting time, and your custom messages while on hold.',
    hint: 'Real-time updates'
  },
  {
    icon: 'uil uil-clock',
    title: 'SLA & Timers',
    description: 'Control behavior with timers and thresholds: per-agent ring timeout, max no-answer attempts, wrap-up time, and queue timeouts for optimal performance.',
    hint: 'Performance control'
  },
  {
    icon: 'uil uil-voicemail',
    title: 'Integrated Voicemail',
    description: 'If nobody is available or a caller waits too long, calls automatically go to voicemail, an AI agent, or another destination seamlessly.',
    hint: 'Auto-fallback'
  },
  {
    icon: 'uil uil-users-alt',
    title: 'Multi-Queue Support',
    description: 'Agents can belong to several queues at once (e.g., Support + Sales or English + Spanish) with fair routing across all queues.',
    hint: 'Flexible assignment'
  },
  {
    icon: 'uil uil-chart-line',
    title: 'Detailed Statistics & SLA Reports',
    description: 'Track answered vs abandoned calls, wait times, talk times, missed calls, and wrap-up time with per-hour and per-day SLA reports for each queue.',
    hint: 'Full visibility'
  }
])

</script>

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
          Automatic Call Distribution System for <span class="text-purple-800 dark:text-purple-300">Inbound Calls</span>
        </h1>
        <p class="text-lg sm:text-xl lg:text-2xl text-gray-700 dark:text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
          SimpleCallCenter's ACD takes every inbound call, parks it in the right queue, and connects it to the best available agent — with fair distribution, rich announcements, and full SLA reporting.
        </p>
      </div>

      <!-- Core Features -->
      <div class="max-w-7xl mx-auto mb-20">
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 lg:p-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Core ACD Capabilities
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 mb-10 text-center max-w-3xl mx-auto">
            Powerful features for efficient call handling and customer experience
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <div
              v-for="(feature, index) in coreFeatures"
              :key="index"
              class="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-2xl hover:border-purple-300 dark:hover:border-purple-600 hover:-translate-y-1 transition-all duration-300"
            >
              <div class="flex-shrink-0 mb-6">
                <div class="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500 text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <i :class="`${feature.icon} text-2xl`"></i>
                </div>
              </div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                {{ feature.title }}
              </h3>
              <p class="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {{ feature.description }}
              </p>
              <div class="flex items-center text-purple-600 dark:text-purple-400">
                <i class="uil uil-info-circle text-lg mr-2"></i>
                <span class="text-sm font-semibold">{{ feature.hint }}</span>
              </div>
              
              <!-- Decorative gradient overlay on hover -->
              <div class="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-50/0 to-purple-50/0 dark:from-purple-900/0 dark:to-purple-900/0 group-hover:from-purple-50/50 group-hover:to-transparent dark:group-hover:from-purple-900/20 dark:group-hover:to-transparent transition-all duration-300 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* All styling handled via Tailwind */
</style>
