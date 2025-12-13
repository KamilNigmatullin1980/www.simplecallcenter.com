<script setup lang="ts">
import { ref } from 'vue'
import { useHead } from '#imports'
import image from '../../assets/images/bg/bg-startup.png'

useHead({
  title: 'Supervisor Assistance | SimpleCallCenter',
  meta: [
    {
      name: 'description',
      content:
        'Supervisors can discreetly join live calls to provide tips and guidance directly from the user interface. Monitor, whisper, or barge into calls in real-time.',
    },
    {
      name: 'keywords',
      content:
        'supervisor assistance, call monitoring, whisper mode, barge in, live call support, call center supervision, real-time coaching, SimpleCallCenter',
    },
    { property: 'og:title', content: 'Supervisor Assistance | SimpleCallCenter' },
    {
      property: 'og:description',
      content:
        'Supervisors can discreetly join live calls to provide tips and guidance directly from the user interface. Monitor, whisper, or barge into calls in real-time.',
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://simplecallcenter.com/supervisor-assistance' },
  ],
})

const assistanceTypes = ref([
  {
    icon: 'uil uil-headphones',
    title: 'Silent Monitoring',
    description: 'Listen to a live call without interrupting either side, perfect for coaching new agents or checking how a script works in real life.',
    hint: 'Non-intrusive'
  },
  {
    icon: 'uil uil-comment-alt',
    title: 'Whisper to Agent',
    description: 'Talk to the agent while the customer hears nothing, so you can quietly suggest what to say, how to calm an upset caller, or how to resolve a tricky case.',
    hint: 'Private coaching'
  },
  {
    icon: 'uil uil-users-alt',
    title: 'Barge In / Join Call',
    description: 'Enter the conversation as a third party when escalation is needed, introduce yourself, and help close the case without transferring the customer through more menus.',
    hint: 'Direct intervention'
  }
])

const coreFeatures = ref([
  {
    icon: 'uil uil-eye',
    title: 'Real-Time Visibility',
    description: 'See who is on a call, who is waiting in queues, and which conversations look risky (for example, those flagged by AI as potentially rude or low-quality).',
    hint: 'Live monitoring'
  },
  {
    icon: 'uil uil-mouse',
    title: 'One-Click Actions',
    description: 'All assistance options are available with one-click actions from the desktop app, making it quick and easy to step in when needed.',
    hint: 'Instant access'
  },
  {
    icon: 'uil uil-file-alt',
    title: 'Integrated CDR & Quality Data',
    description: 'All actions are tied to the same CDR and quality data. Supervisors can open a call from the list, see its summary, transcript, AI flags, and immediately assist.',
    hint: 'Complete context'
  },
  {
    icon: 'uil uil-clock',
    title: 'Live Support When Needed',
    description: 'Supervision is not just after-the-fact QA, but live support for agents when they need it most — right during the call.',
    hint: 'Real-time help'
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
          <span class="text-purple-800 dark:text-purple-300">Supervisor</span> Assistance
        </h1>
        <p class="text-lg sm:text-xl lg:text-2xl text-gray-700 dark:text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
          Supervisors don't just stare at reports — in SimpleCallCenter they can step into live calls and help agents in real time.
        </p>
      </div>

      <!-- Assistance Types -->
      <div class="max-w-7xl mx-auto mb-20">
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 lg:p-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Real-Time Assistance Options
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 mb-10 text-center max-w-3xl mx-auto">
            When something needs attention, supervisors have several one-click options
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <div
              v-for="(type, index) in assistanceTypes"
              :key="index"
              class="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-2xl hover:border-purple-300 dark:hover:border-purple-600 hover:-translate-y-1 transition-all duration-300"
            >
              <div class="flex-shrink-0 mb-6">
                <div class="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500 text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <i :class="`${type.icon} text-2xl`"></i>
                </div>
              </div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                {{ type.title }}
              </h3>
              <p class="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {{ type.description }}
              </p>
              <div class="flex items-center text-purple-600 dark:text-purple-400">
                <i class="uil uil-info-circle text-lg mr-2"></i>
                <span class="text-sm font-semibold">{{ type.hint }}</span>
              </div>
              
              <!-- Decorative gradient overlay on hover -->
              <div class="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-50/0 to-purple-50/0 dark:from-purple-900/0 dark:to-purple-900/0 group-hover:from-purple-50/50 group-hover:to-transparent dark:group-hover:from-purple-900/20 dark:group-hover:to-transparent transition-all duration-300 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Core Features -->
      <div class="max-w-7xl mx-auto mb-20">
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 lg:p-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Powerful Supervision Tools
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 mb-10 text-center max-w-3xl mx-auto">
            Everything you need to support your agents effectively
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div
              v-for="(feature, index) in coreFeatures"
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

      <!-- How It Works -->
      <div class="max-w-7xl mx-auto">
        <div class="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl shadow-lg border border-purple-100 dark:border-gray-600 p-8 lg:p-10">
          <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Complete Call Context
          </h2>
          <div class="max-w-4xl mx-auto space-y-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              From the desktop app, supervisors can open a call from the list, see its summary, transcript, AI flags, and — if the call is still in progress — immediately monitor or assist the agent.
            </p>
            <p>
              All of this is tied to the same CDR and quality data, ensuring supervisors have complete context before stepping in. <strong class="text-purple-800 dark:text-purple-300">This way, "supervision" is not just after-the-fact QA, but live support for agents when they need it most.</strong>
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
