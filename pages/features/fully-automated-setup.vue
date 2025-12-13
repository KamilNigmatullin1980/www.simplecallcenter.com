<script setup lang="ts">
import { ref } from 'vue'
import { useHead } from '#imports';
import image from '../../assets/images/bg/bg-startup.png';
import SetupPreview from '~/components/setup-preview.vue';

useHead({
  title: 'Fully Automated Setup | SimpleCallCenter',
  meta: [
    {
      name: 'description',
      content:
        'Learn how to set up your call center effortlessly with our AI-driven, fully automated process. Provide your company name, call center name, office schedule, state holidays, language and voice preferences, and hotline details – and our system configures your voice messages, IVR, voicemail, ACD, and more.',
    },
    {
      name: 'keywords',
      content:
        'AI-driven setup, automated call center, IVR configuration, synthetic voice, multilingual call center, office schedule, state holidays, call center automation',
    },
    { property: 'og:title', content: 'AI-Driven, Fully Automated Setup | SimpleCallCenter' },
    {
      property: 'og:description',
      content:
        'Set up your call center quickly using our automated process. Provide key details and let our AI configure voice messages, IVR, voicemail, and ACD tailored to your business needs.',
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://simplecallcenter.com/automated-setup' },
  ],
});

const onboardingSteps = ref([
  {
    title: 'Company & Call Center Details',
    description: 'Provide your company name and call center name to personalize your system.',
    icon: 'uil uil-building',
    hint: 'Quick personalization'
  },
  {
    title: 'Language & Voice Selection',
    description: 'Choose one or more languages your call center will support and select your preferred dialect voices. You can even listen to sample synthetic voices before making your selection.',
    icon: 'uil uil-globe',
    hint: '80+ languages available'
  },
  {
    title: 'Schedule & Holidays',
    description: 'Select your office schedule and add state holidays from our pre-defined list. This ensures your system adjusts call routing, voicemail, and IVR greetings on non-working days.',
    icon: 'uil uil-calendar-alt',
    hint: 'Automatic adjustments'
  },
  {
    title: 'Hotline Configuration',
    description: 'Create hotline names—at least one is required. These hotlines form the basis for your call center\'s incoming call routing.',
    icon: 'uil uil-phone',
    hint: 'Flexible routing'
  }
])

const autoFeatures = ref([
  {
    icon: 'uil uil-microphone',
    title: 'Professional Voice Messages',
    description: 'Creates tailored voice prompts and greetings using your selected synthetic voices.'
  },
  {
    icon: 'uil uil-sitemap',
    title: 'IVR Structure',
    description: 'Automatically sets up an IVR menu that matches your business requirements.'
  },
  {
    icon: 'uil uil-cog',
    title: 'Voicemail & ACD',
    description: 'Sets up voicemail, advanced call distribution (ACD), and other essential call center features.'
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
          Fully <span class="text-purple-800 dark:text-purple-300">Automated Setup</span>
        </h1>
        <p class="text-lg sm:text-xl lg:text-2xl text-gray-700 dark:text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
          Launch your call center effortlessly with our intelligent, fully automated process. Focus on your business while our system handles the technical complexities.
        </p>
      </div>

      <!-- Streamlined Onboarding Process -->
      <div class="max-w-7xl mx-auto mb-20">
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 lg:p-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Streamlined Onboarding Process
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 mb-10 text-center max-w-3xl mx-auto">
            Get started in minutes with just a few simple steps
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <div
              v-for="(step, index) in onboardingSteps"
              :key="index"
              class="group relative bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-700 dark:to-gray-800 rounded-xl p-6 lg:p-8 border border-purple-100 dark:border-gray-600 hover:shadow-lg hover:border-purple-300 dark:hover:border-purple-500 transition-all duration-300"
            >
              <div class="flex items-start gap-4">
                <div class="flex-shrink-0">
                  <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500 text-white shadow-lg flex items-center justify-center text-xl font-bold group-hover:scale-110 transition-transform duration-300">
                    {{ index + 1 }}
                  </div>
                </div>
                <div class="flex-1">
                  <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-3">
                    {{ step.title }}
                  </h3>
                  <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {{ step.description }}
                  </p>
                </div>
              </div>
              <div class="mt-4 flex items-center text-purple-600 dark:text-purple-400">
                <i :class="`${step.icon} text-xl mr-2`"></i>
                <span class="text-sm font-semibold">{{ step.hint }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Automatic System Configuration -->
      <div class="max-w-7xl mx-auto mb-20">
        <div class="text-center mb-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Automatic System Configuration
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Once you provide the above details, our system automatically:
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <div
            v-for="(feature, index) in autoFeatures"
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
            <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
              {{ feature.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Setup Preview Carousel -->
  <SetupPreview :slider-only="true" />
</template>

<style scoped>
/* All styling handled via Tailwind */
</style>
