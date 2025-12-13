<script setup lang="ts">
import { ref } from 'vue'
import { useHead } from '#imports'
import image from '../../assets/images/bg/bg-startup.png'

useHead({
  title: 'Real-Time Agent Presence | SimpleCallCenter',
  meta: [
    {
      name: 'description',
      content:
        'SimpleCallCenter keeps a live view of who is actually available to take calls across all your call centers and hotlines. Real-time agent status updates for efficient workforce management.',
    },
    {
      name: 'keywords',
      content:
        'real-time agent presence, agent status monitoring, call center workforce management, agent availability, live agent status, SimpleCallCenter',
    },
    { property: 'og:title', content: 'Real-Time Agent Presence | SimpleCallCenter' },
    {
      property: 'og:description',
      content:
        'Monitor agents\' statuses (busy, in call, etc.) in real time for efficient workforce management. What supervisors see is exactly what the routing engine uses.',
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://simplecallcenter.com/real-time-agent-presence' },
  ],
})

const coreFeatures = ref([
  {
    icon: 'uil uil-sync',
    title: 'Real-Time Status Updates',
    description: 'Agent status is updated in real time whenever they log in or log out, receive or finish a call, or are automatically logged out after too many no-answers.',
    hint: 'Always current'
  },
  {
    icon: 'uil uil-database',
    title: 'Centralized Presence Data',
    description: 'This presence is stored centrally and shared between all ACD nodes and desktop apps, so there is a single source of truth for who is online, on a call, or logged out.',
    hint: 'Single source of truth'
  },
  {
    icon: 'uil uil-route',
    title: 'ACD Engine Integration',
    description: 'The ACD engine uses the same presence data to decide which agents are eligible for the next call, respecting locks and wrap-up timers so agents are never double-picked.',
    hint: 'Smart routing'
  }
])

const statusTypes = ref([
  {
    icon: 'uil uil-check-circle',
    title: 'Online',
    description: 'Agents who are logged in and available to receive calls.',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: 'uil uil-phone',
    title: 'On a Call',
    description: 'Agents currently engaged in an active call with a customer.',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: 'uil uil-sign-out-alt',
    title: 'Logged Out',
    description: 'Agents who have logged out or been automatically logged out after no-answers.',
    color: 'from-gray-500 to-gray-600'
  }
])

const supervisorFeatures = ref([
  {
    icon: 'uil uil-eye',
    title: 'Live Team View',
    description: 'Supervisors see this in the desktop app as a live view of the team, per call center and per hotline, with real-time status updates.',
    hint: 'Real-time visibility'
  },
  {
    icon: 'uil uil-chart-line',
    title: 'Agent Activity Details',
    description: 'Drill into an agent\'s recent activity, including missed calls, answered calls, and performance metrics for complete oversight.',
    hint: 'Complete insights'
  },
  {
    icon: 'uil uil-shield-check',
    title: 'No Stale Status',
    description: 'What supervisors see on the screen is exactly what the routing engine uses — no guessing, no stale status, ensuring accurate decision-making.',
    hint: 'Accurate data'
  },
  {
    icon: 'uil uil-lock',
    title: 'Respect Locks & Timers',
    description: 'The system respects locks and wrap-up timers so that a single agent is never picked by two servers at the same time and doesn\'t get calls back-to-back.',
    hint: 'Fair distribution'
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
          Real-Time <span class="text-purple-800 dark:text-purple-300">Agent Presence</span>
        </h1>
        <p class="text-lg sm:text-xl lg:text-2xl text-gray-700 dark:text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
          SimpleCallCenter keeps a live view of who is actually available to take calls across all your call centers and hotlines.
        </p>
      </div>

      <!-- Core Features -->
      <div class="max-w-7xl mx-auto mb-20">
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 lg:p-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Live Agent Status Monitoring
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 mb-10 text-center max-w-3xl mx-auto">
            Real-time visibility into agent availability and status across your entire organization
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

      <!-- Status Types -->
      <div class="max-w-7xl mx-auto mb-20">
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 lg:p-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Agent Status Types
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 mb-10 text-center max-w-3xl mx-auto">
            Track every agent state with complete clarity
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <div
              v-for="(status, index) in statusTypes"
              :key="index"
              class="group relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-xl p-6 lg:p-8 border border-gray-200 dark:border-gray-600 hover:shadow-lg hover:border-purple-300 dark:hover:border-purple-500 transition-all duration-300"
            >
              <div class="flex flex-col items-center text-center">
                <div class="flex-shrink-0 mb-4">
                  <div :class="`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${status.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`">
                    <i :class="`${status.icon} text-2xl`"></i>
                  </div>
                </div>
                <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-3">
                  {{ status.title }}
                </h3>
                <p class="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                  {{ status.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Supervisor Features -->
      <div class="max-w-7xl mx-auto mb-20">
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 lg:p-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Supervisor Dashboard
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 mb-10 text-center max-w-3xl mx-auto">
            Complete visibility and control over your team's availability
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div
              v-for="(feature, index) in supervisorFeatures"
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
            Accurate, Real-Time, Always Synchronized
          </h2>
          <div class="max-w-4xl mx-auto space-y-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              In practice, it means: what supervisors see on the screen is exactly what the routing engine uses — no guessing, no stale status. The ACD engine uses the same presence data to decide which agents are eligible for the next call, respecting locks and wrap-up timers so that a single agent is never picked by two servers at the same time and doesn't get calls back-to-back without a pause.
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
