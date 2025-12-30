<script setup lang="ts">
import { ref } from 'vue'
import { useHead } from '#imports'
import image from '../../assets/images/bg/bg-startup.webp'

useHead({
  title: 'Automatic Schedule Redirect | SimpleCallCenter',
  meta: [
    {
      name: 'description',
      content:
        'SimpleCallCenter automatically respects your business hours and helps prevent "open but nobody\'s there" situations. Redirect calls to voicemail outside hours and get alerts when no agents are online during open hours.',
    },
    {
      name: 'keywords',
      content:
        'business hours call routing, schedule-based call redirect, after-hours voicemail, off-hours routing, supervisor alerts, open hours no agents, SimpleCallCenter',
    },
    { property: 'og:title', content: 'Automatic Schedule Redirect | SimpleCallCenter' },
    {
      property: 'og:description',
      content:
        'Automatically redirect calls based on business hours. Get supervisor alerts when the call center is open but no agents are logged in, preventing silent call loss.',
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://simplecallcenter.com/automatic-schedule-redirect' },
  ],
})

const coreFeatures = ref([
  {
    icon: 'uil uil-calendar-alt',
    title: 'Schedule & Timezone Configuration',
    description: 'Define a schedule and timezone for each call center (workdays, weekends, opening/closing times) to automatically manage call routing based on business hours.',
    hint: 'Flexible scheduling'
  },
  {
    icon: 'uil uil-phone',
    title: 'Normal Flow During Hours',
    description: 'During open hours, calls follow the normal flow: IVR/menu → queues → agents, ensuring customers reach your team when you\'re available.',
    hint: 'Standard routing'
  },
  {
    icon: 'uil uil-voicemail',
    title: 'Automatic Voicemail Redirect',
    description: 'Outside business hours, calls are automatically redirected to voicemail instead of ringing agents, ensuring professional handling even when closed.',
    hint: 'After-hours handling'
  }
])

const voicemailFeatures = ref([
  {
    icon: 'uil uil-file-alt',
    title: 'AI Transcription',
    description: 'Voicemails are transcribed automatically using speech recognition, making messages searchable and easy to review.',
    hint: 'Searchable messages'
  },
  {
    icon: 'uil uil-brain',
    title: 'AI Summarization',
    description: 'Each voicemail is summarized by AI to identify key details and what it\'s about, providing quick insights at a glance.',
    hint: 'Quick insights'
  },
  {
    icon: 'uil uil-tasks',
    title: 'Shared Workspace',
    description: 'Voicemails appear in the shared Missed & Voicemail workspace, where they can be assigned and tracked from Unassigned → In progress → Done.',
    hint: 'Team workflow'
  }
])

const protectionFeatures = ref([
  {
    icon: 'uil uil-exclamation-triangle',
    title: 'Open But Empty Detection',
    description: 'The system watches for a common real-world problem: it\'s within working hours, the line is technically open, but no agents are logged in.',
    hint: 'Smart detection'
  },
  {
    icon: 'uil uil-bell',
    title: 'Supervisor Alerts',
    description: 'When that happens, supervisors see an alert that the call center is open with zero agents online, so they can take immediate action.',
    hint: 'Real-time alerts'
  },
  {
    icon: 'uil uil-users-alt',
    title: 'Bring Agents Online',
    description: 'Supervisors can bring people online quickly when alerted, ensuring calls don\'t get lost during scheduled hours.',
    hint: 'Quick response'
  },
  {
    icon: 'uil uil-cog',
    title: 'Adjust Schedule',
    description: 'Supervisors can intentionally close or adjust the schedule if needed, instead of silently losing calls when reality doesn\'t match configuration.',
    hint: 'Flexible management'
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
          Automatic <span class="text-purple-800 dark:text-purple-300">Schedule Redirect</span>
        </h1>
        <p class="text-lg sm:text-xl lg:text-2xl text-gray-700 dark:text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
          SimpleCallCenter automatically respects your business hours and helps prevent "open but nobody's there" situations.
        </p>
      </div>

      <!-- Core Features -->
      <div class="max-w-7xl mx-auto mb-20">
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 lg:p-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Business Hours Management
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 mb-10 text-center max-w-3xl mx-auto">
            Automatically route calls based on your configured schedule and timezone
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

      <!-- Voicemail Features -->
      <div class="max-w-7xl mx-auto mb-20">
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 lg:p-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            After-Hours Voicemail Processing
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 mb-10 text-center max-w-3xl mx-auto">
            Voicemails are transcribed, summarized, and tracked in your shared workspace
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <div
              v-for="(feature, index) in voicemailFeatures"
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

      <!-- Protection Features -->
      <div class="max-w-7xl mx-auto mb-20">
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 lg:p-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            "Open, but Empty" Protection
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 mb-10 text-center max-w-3xl mx-auto">
            In the supervisor area of the desktop app, the system actively watches for mismatches between configured hours and reality
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div
              v-for="(feature, index) in protectionFeatures"
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
            Active Schedule Management
          </h2>
          <div class="max-w-4xl mx-auto space-y-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              So scheduling isn't just a static calendar — the platform actively warns you when reality (no agents) doesn't match your configured hours. This makes you look responsible, not just "we sent everything to voicemail, good luck."
            </p>
            <p>
              When supervisors see an alert that the call center is open with zero agents online, they can bring people online or intentionally close/adjust the schedule, instead of silently losing calls.
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
