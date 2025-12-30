<script setup lang="ts">
import { ref } from 'vue'
import { useHead } from '#imports'
import image from '../../assets/images/bg/bg-startup.webp'

useHead({
  title: 'Outbound Calls | SimpleCallCenter',
  meta: [
    {
      name: 'description',
      content:
        'SimpleCallCenter supports manual outbound calls from the same desktop app agents use for inbound — with proper caller ID control and full QA for business calls.',
    },
    {
      name: 'keywords',
      content:
        'outbound calls, manual outbound dialing, caller ID control, outbound call recording, AI quality assurance, outbound calling from desktop app, SimpleCallCenter',
    },
    { property: 'og:title', content: 'Outbound Calls | SimpleCallCenter' },
    {
      property: 'og:description',
      content:
        'Manual outbound calls with caller ID control and full QA. Full recording and AI quality control for business calls, privacy-respecting behavior for personal direct numbers.',
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://simplecallcenter.com/outbound-calls' },
  ],
})

const coreFeatures = ref([
  {
    icon: 'uil uil-phone',
    title: 'Manual Outbound Calls',
    description: 'Agents can dial out from the same desktop app they use for inbound calls, with full control and visibility over every call placed.',
    hint: 'Same interface'
  },
  {
    icon: 'uil uil-id-card',
    title: 'Flexible Caller ID Control',
    description: 'Dial out on behalf of any call center using that call center\'s main DID, or use a personal direct number if available. Choose the outbound identity before placing the call.',
    hint: 'Full control'
  },
  {
    icon: 'uil uil-users-alt',
    title: 'Multi-Call Center Support',
    description: 'When an agent is assigned to multiple call centers, they simply choose the outbound identity (call center A, call center B, or their direct number) before placing the call.',
    hint: 'Multi-role ready'
  }
])

const qaFeatures = ref([
  {
    icon: 'uil uil-record-video',
    title: 'Automatic Recording',
    description: 'When an agent calls out using a call center number, the call is recorded (if recording is enabled for that call center) for complete visibility.',
    hint: 'Full recording'
  },
  {
    icon: 'uil uil-file-alt',
    title: 'AI Transcription & Summarization',
    description: 'Audio is transcribed and summarized by AI, providing searchable text and quick insights into every conversation.',
    hint: 'Searchable content'
  },
  {
    icon: 'uil uil-shield-check',
    title: 'AI Quality Analysis',
    description: 'The conversation is analyzed for service quality and can be flagged if the agent sounds rude, dismissive, or does not provide proper service.',
    hint: 'Quality control'
  },
  {
    icon: 'uil uil-eye',
    title: 'Supervisor Visibility',
    description: 'Recording, transcript, summary, and AI flags are stored together with the CDR, and are visible to supervisors in the desktop app for the same visibility as inbound calls.',
    hint: 'Complete oversight'
  }
])

const privacyFeatures = ref([
  {
    icon: 'uil uil-lock',
    title: 'Optional Recording',
    description: 'When a user calls out using their own direct number, call recording is optional and controlled by that user — they can turn it on or off for their direct line.',
    hint: 'User control'
  },
  {
    icon: 'uil uil-user-shield',
    title: 'Private Access Only',
    description: 'If recording is enabled on a personal direct number, these recordings are only accessible to that user and do not appear in supervisor/admin QA views.',
    hint: 'Privacy first'
  },
  {
    icon: 'uil uil-ban',
    title: 'Excluded from QA',
    description: 'Personal direct number recordings are not included in call center quality control or coaching flows, keeping private calls separate from business oversight.',
    hint: 'Separate workflows'
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
          Outbound Calls from the <span class="text-purple-800 dark:text-purple-300">Call Center</span>
        </h1>
        <p class="text-lg sm:text-xl lg:text-2xl text-gray-700 dark:text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
          SimpleCallCenter supports manual outbound calls from the same desktop app agents use for inbound — with proper caller ID control and full QA for business calls.
        </p>
      </div>

      <!-- Core Features -->
      <div class="max-w-7xl mx-auto mb-20">
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 lg:p-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Manual Outbound Calling
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 mb-10 text-center max-w-3xl mx-auto">
            Intentional, one-by-one calls placed by humans — no robodialer or predictive dialer
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

      <!-- Full QA Features -->
      <div class="max-w-7xl mx-auto mb-20">
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 lg:p-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Full QA for Business Calls
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 mb-10 text-center max-w-3xl mx-auto">
            When an agent calls out using a call center number, you get the same visibility and quality control as inbound calls
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div
              v-for="(feature, index) in qaFeatures"
              :key="index"
              class="group relative bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-700 dark:to-gray-800 rounded-xl p-6 lg:p-8 border border-purple-100 dark:border-gray-600 hover:shadow-lg hover:border-purple-300 dark:hover:border-purple-500 transition-all duration-300"
            >
              <div class="flex items-start gap-4">
                <div class="flex-shrink-0">
                  <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500 text-white shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <i :class="`${feature.icon} text-xl`"></i>
                  </div>
                </div>
                <div class="flex-1">
                  <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-3">
                    {{ feature.title }}
                  </h3>
                  <p class="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                    {{ feature.description }}
                  </p>
                  <div class="mt-3 flex items-center text-purple-600 dark:text-purple-400">
                    <i class="uil uil-check-circle text-sm mr-2"></i>
                    <span class="text-xs font-semibold">{{ feature.hint }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Privacy Features -->
      <div class="max-w-7xl mx-auto mb-20">
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 lg:p-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Privacy-First for Personal Direct Numbers
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 mb-10 text-center max-w-3xl mx-auto">
            When a user calls out using their own direct number, privacy is respected
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <div
              v-for="(feature, index) in privacyFeatures"
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
            </div>
          </div>
        </div>
      </div>

      <!-- How It Works -->
      <div class="max-w-7xl mx-auto">
        <div class="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl shadow-lg border border-purple-100 dark:border-gray-600 p-8 lg:p-10">
          <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Best of Both Worlds
          </h2>
          <div class="max-w-4xl mx-auto space-y-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              You get full recording and AI QA for business calls made on behalf of the call center, ensuring complete visibility and quality control. At the same time, you get privacy-respecting behavior for calls made from a personal direct number, where only the owner of that number can access their recordings.
            </p>
            <p>
              This lets people use the platform as their personal office phone while keeping private calls and recordings visible only to them, not to management.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* All styling handled via Tailwind */
</style>
