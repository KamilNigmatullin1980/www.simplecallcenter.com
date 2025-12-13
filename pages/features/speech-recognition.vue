<script setup lang="ts">
import { ref } from 'vue'
import { useHead } from '#imports'
import image from '../../assets/images/bg/bg-startup.png'

useHead({
  title: 'Automatic IVR Menu with Advanced Options | SimpleCallCenter',
  meta: [
    {
      name: 'description',
      content:
        'Experience an interactive IVR system with built-in speech recognition and DTMF support in 80+ languages. Create dynamic menus that respond to voice commands and digit inputs, and customize all prompts to match your brand.',
    },
    {
      name: 'keywords',
      content:
        'interactive IVR, speech recognition, DTMF support, dynamic IVR, call center IVR, advanced IVR, multilingual IVR, SimpleCallCenter',
    },
    { property: 'og:title', content: 'Automatic IVR Menu with Advanced Options | SimpleCallCenter' },
    {
      property: 'og:description',
      content:
        'Enhance your call center with an interactive IVR system that features built-in speech recognition and DTMF support in 80+ languages. Customize prompts and menus for a tailored customer experience.',
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://simplecallcenter.com/speech-recognition' },
  ],
})

const features = ref([
  {
    icon: 'uil uil-microphone',
    title: 'Built-in Speech Recognition',
    description: 'Enable hands-free navigation of your IVR menus with advanced speech recognition technology that understands natural language commands.',
    hint: '80+ languages supported'
  },
  {
    icon: 'uil uil-keyboard',
    title: 'DTMF Support',
    description: 'Allow customers to interact using traditional telephone key inputs (DTMF) for reliable, familiar navigation options.',
    hint: 'Traditional keypad support'
  },
  {
    icon: 'uil uil-exchange',
    title: 'Dual Input Methods',
    description: 'Create dynamic menus that respond seamlessly to both voice commands and digit inputs simultaneously, giving customers flexibility.',
    hint: 'Voice + keypad'
  },
  {
    icon: 'uil uil-palette',
    title: 'Fully Customizable Prompts',
    description: 'Customize all IVR prompts and scripts to reflect your brand\'s tone, ensuring a consistent customer experience.',
    hint: 'Brand your voice'
  },
  {
    icon: 'uil uil-route',
    title: 'Intelligent Call Routing',
    description: 'Enhance call routing and customer satisfaction with an interactive, intelligent IVR that understands context and intent.',
    hint: 'Smart routing'
  },
  {
    icon: 'uil uil-globe',
    title: 'Multilingual Support',
    description: 'Support 80+ languages with automatic language detection and appropriate voice prompts for global accessibility.',
    hint: 'Global reach'
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
          Automatic IVR Menu with <span class="text-purple-800 dark:text-purple-300">Advanced Options</span>
        </h1>
        <p class="text-lg sm:text-xl lg:text-2xl text-gray-700 dark:text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
          Benefit from an advanced IVR system with built-in speech recognition and DTMF support in 80+ languages. Create dynamic, customizable menus that respond to both voice commands and digit inputs.
        </p>
      </div>

      <!-- Features Grid -->
      <div class="max-w-7xl mx-auto mb-20">
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 lg:p-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Advanced IVR Capabilities
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 mb-10 text-center max-w-3xl mx-auto">
            Powerful features that make your IVR system intelligent and user-friendly
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <div
              v-for="(feature, index) in features"
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
