<script setup lang="ts">
import { ref } from 'vue'
import { useHead } from '#imports'
import image from '../../assets/images/bg/bg-startup.png'

useHead({
  title: 'Missed Call Processing | SimpleCallCenter',
  meta: [
    {
      name: 'description',
      content:
        'SimpleCallCenter doesn\'t just say "missed call" and move on — it understands how the call was lost and whether the caller had a chance to leave a voicemail. Track and process missed calls with complete visibility.',
    },
    {
      name: 'keywords',
      content:
        'missed call processing, missed call tracking, call center missed calls, callback management, call disposition, SimpleCallCenter',
    },
    { property: 'og:title', content: 'Missed Call Processing | SimpleCallCenter' },
    {
      property: 'og:description',
      content:
        'Track and process missed calls with complete visibility. Every call that wasn\'t answered becomes a visible, assignable missed call with clear status.',
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://simplecallcenter.com/missed-call-processing' },
  ],
})

const coreFeatures = ref([
  {
    icon: 'uil uil-phone-slash',
    title: 'Complete Call Tracking',
    description: 'Every inbound call is tracked from start to finish. A missed call is created when the caller hangs up while ringing an agent or waiting in the queue, and no voicemail was left.',
    hint: 'Full visibility'
  },
  {
    icon: 'uil uil-route',
    title: 'Smart Call Routing',
    description: 'Queue timeouts and closed hours redirect to voicemail. If the caller leaves a voicemail, it becomes a voicemail item. If they hang up without recording, it becomes a missed call.',
    hint: 'Intelligent routing'
  },
  {
    icon: 'uil uil-info-circle',
    title: 'Detailed Call Reasons',
    description: 'Each missed call shows caller, time, hotline/queue, and reason (e.g., "hangup in queue after timeout to voicemail, no message") for complete context.',
    hint: 'Clear context'
  }
])

const workflowFeatures = ref([
  {
    icon: 'uil uil-users-alt',
    title: 'Shared Workspace',
    description: 'All missed calls land in the same shared "Missed & Voicemail" workspace in the desktop app, making it easy for teams to collaborate.',
    hint: 'Team collaboration'
  },
  {
    icon: 'uil uil-user-check',
    title: 'Assignment System',
    description: 'Items start as "Unassigned" — supervisors can assign them to specific agents or themselves for accountability and follow-up.',
    hint: 'Clear ownership'
  },
  {
    icon: 'uil uil-check-circle',
    title: 'Status Tracking',
    description: 'As agents work through callbacks, they move items through statuses: Unassigned → In process → Done, so everyone sees what still needs attention.',
    hint: 'Progress visibility'
  },
  {
    icon: 'uil uil-eye',
    title: 'Never Disappears',
    description: 'Every call that wasn\'t answered and didn\'t result in voicemail becomes a visible, assignable missed call — not something that just disappears into CDR logs.',
    hint: 'Always tracked'
  }
])

const analyticsFeatures = ref([
  {
    icon: 'uil uil-chart-pie',
    title: 'Clear Separation',
    description: 'Queue and agent stats clearly separate: Answered calls, Voicemails left, and Missed calls (no voicemail) for accurate reporting.',
    hint: 'Accurate metrics'
  },
  {
    icon: 'uil uil-clock',
    title: 'Time & Queue Analysis',
    description: 'See not just "we lost X calls", but how many people tried, got to voicemail, and didn\'t bother to leave a message, at what hours and in which queues.',
    hint: 'Pattern insights'
  },
  {
    icon: 'uil uil-users-alt',
    title: 'Agent Correlation',
    description: 'Identify which agents or staffing patterns correlate with more missed calls, helping optimize team performance and scheduling.',
    hint: 'Performance insights'
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
          Missed Call <span class="text-purple-800 dark:text-purple-300">Processing</span>
        </h1>
        <p class="text-lg sm:text-xl lg:text-2xl text-gray-700 dark:text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
          SimpleCallCenter doesn't just say "missed call" and move on — it understands how the call was lost and whether the caller had a chance to leave a voicemail.
        </p>
      </div>

      <!-- Core Features -->
      <div class="max-w-7xl mx-auto mb-20">
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 lg:p-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Intelligent Missed Call Tracking
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 mb-10 text-center max-w-3xl mx-auto">
            Complete visibility into every call that didn't reach an agent
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

      <!-- Workflow Features -->
      <div class="max-w-7xl mx-auto mb-20">
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 lg:p-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Shared Workspace Workflow
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 mb-10 text-center max-w-3xl mx-auto">
            A collaborative workspace where your team processes missed calls effectively
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div
              v-for="(feature, index) in workflowFeatures"
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

      <!-- Analytics Features -->
      <div class="max-w-7xl mx-auto mb-20">
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 lg:p-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Analytics & Insights
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 mb-10 text-center max-w-3xl mx-auto">
            Understand call patterns and optimize your team's performance
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <div
              v-for="(feature, index) in analyticsFeatures"
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
            Simple for Teams, Powerful for Analysis
          </h2>
          <div class="max-w-4xl mx-auto space-y-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              From the team's point of view, it's simple: every call that wasn't answered and didn't result in voicemail becomes a visible, assignable missed call with clear status — not something that just disappears into CDR logs.
            </p>
            <p>
              This lets you see not just "we lost X calls", but how many people tried, got to voicemail, and didn't bother to leave a message, at what hours and in which queues this happens most, and which agents or staffing patterns correlate with more missed calls.
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
