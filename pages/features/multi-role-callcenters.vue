<script setup lang="ts">
import { ref } from 'vue'
import { useHead } from '#imports'
import image from '../../assets/images/bg/bg-startup.png'

useHead({
  title: 'Agent Flexibility | SimpleCallCenter',
  meta: [
    {
      name: 'description',
      content:
        'Agents can participate in multiple hotlines and call centers simultaneously. The same person can work in several hotlines and call centers at once, and even be an agent in one team and a supervisor in another.',
    },
    {
      name: 'keywords',
      content:
        'agent flexibility, multi-role routing, multi-queue support, call center agents, agent management, flexible routing, SimpleCallCenter',
    },
    { property: 'og:title', content: 'Agent Flexibility | SimpleCallCenter' },
    {
      property: 'og:description',
      content:
        'Agents can participate in multiple hotlines and call centers simultaneously. Work across multiple queues and roles with flexible routing.',
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://simplecallcenter.com/multi-role-callcenters' },
  ],
})

const coreFeatures = ref([
  {
    icon: 'uil uil-sync',
    title: 'Multi-Queue Support',
    description: 'An agent can be attached to several queues and hotlines (e.g., Support EN, Support ES, Billing) at the same time, working across different departments seamlessly.',
    hint: 'Multiple queues'
  },
  {
    icon: 'uil uil-building',
    title: 'Multi-Call Center',
    description: 'Agents can work across multiple call centers (different projects or brands) simultaneously, allowing small teams to handle multiple roles efficiently.',
    hint: 'Cross-center'
  },
  {
    icon: 'uil uil-user-md',
    title: 'Flexible Roles',
    description: 'The same person can be an agent in one team and a supervisor in another — the ACD engine and desktop app handle all the complexity for them.',
    hint: 'Role flexibility'
  },
  {
    icon: 'uil uil-route',
    title: 'Fair Routing Logic',
    description: 'When an agent becomes free, the routing logic looks across all queues that agent serves and finds the caller who has been waiting the longest, ensuring fair distribution.',
    hint: 'Smart routing'
  }
])

const behaviorParameters = ref([
  {
    icon: 'uil uil-clock',
    title: 'Wrap-up Time',
    description: 'Configure how long agents stay unavailable after a call to finish notes and CRM updates.',
    hint: 'Post-call time'
  },
  {
    icon: 'uil uil-phone',
    title: 'Call Timeout',
    description: 'Set how long the platform will ring agents before trying the next agent in the queue.',
    hint: 'Ring duration'
  },
  {
    icon: 'uil uil-pause-circle',
    title: 'Busy/Reject/No-Answer Delays',
    description: 'Control how long to pause before sending the next call after agents are busy, reject a call, or don\'t answer.',
    hint: 'Recovery time'
  },
  {
    icon: 'uil uil-times',
    title: 'Max No-Answer Attempts',
    description: 'After a certain number of unanswered calls, the system can auto-log agents out from queues, so one distracted person doesn\'t destroy the SLA for everyone.',
    hint: 'Auto-logout'
  }
])

const additionalFeatures = ref([
  {
    icon: 'uil uil-chart-line',
    title: 'Per-Agent Statistics',
    description: 'Track answered calls, missed calls, rejections, total talk time, wrap-up time, login time, and auto-logout events for each agent.',
    hint: 'Full visibility'
  },
  {
    icon: 'uil uil-eye',
    title: 'Real-Time Presence',
    description: 'Agent presence is live, not static config. Agents log in/out of queues and change status from the desktop app, with updates visible across all nodes.',
    hint: 'Live status'
  },
  {
    icon: 'uil uil-lock',
    title: 'Distributed Locking',
    description: 'Each node keeps its own watchlist of logged-in agents and uses a distributed lock per agent ID, so no two nodes grab the same agent at the same time.',
    hint: 'Conflict-free'
  },
  {
    icon: 'uil uil-phone-alt',
    title: 'Queue & Direct Calls',
    description: 'Agents can handle both call center traffic (queue calls) and direct DID/office extension calls for normal PBX use, with logic that respects their current state.',
    hint: 'Dual mode'
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
          Agent <span class="text-purple-800 dark:text-purple-300">Flexibility</span>
        </h1>
        <p class="text-lg sm:text-xl lg:text-2xl text-gray-700 dark:text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
          In SimpleCallCenter, an "agent" is not locked to one queue, one brand, or one role. The same person can work in several hotlines and call centers at once.
        </p>
      </div>

      <!-- Core Features -->
      <div class="max-w-7xl mx-auto mb-20">
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 lg:p-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Multi-Role & Multi-Queue Support
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 mb-10 text-center max-w-3xl mx-auto">
            Built from day one for agents in multiple queues and call centers
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
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

      <!-- Behavior Profile Parameters -->
      <div class="max-w-7xl mx-auto mb-20">
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 lg:p-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            Fine-Grained Behavior Profile
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 mb-10 text-center max-w-3xl mx-auto">
            Each agent has their own behavior profile with configurable parameters per account/queue
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <div
              v-for="(param, index) in behaviorParameters"
              :key="index"
              class="group relative bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-700 dark:to-gray-800 rounded-xl p-6 lg:p-8 border border-purple-100 dark:border-gray-600 hover:shadow-lg hover:border-purple-300 dark:hover:border-purple-500 transition-all duration-300"
            >
              <div class="flex items-start gap-4">
                <div class="flex-shrink-0">
                  <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500 text-white shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <i :class="`${param.icon} text-xl`"></i>
                  </div>
                </div>
                <div class="flex-1">
                  <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-3">
                    {{ param.title }}
                  </h3>
                  <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {{ param.description }}
                  </p>
                  <div class="mt-3 flex items-center text-purple-600 dark:text-purple-400">
                    <i class="uil uil-check-circle text-sm mr-2"></i>
                    <span class="text-xs font-semibold">{{ param.hint }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Additional Features -->
      <div class="max-w-7xl mx-auto mb-20">
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 lg:p-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Advanced Capabilities
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 mb-10 text-center max-w-3xl mx-auto">
            Powerful features for managing agent efficiency and presence
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div
              v-for="(feature, index) in additionalFeatures"
              :key="index"
              class="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-2xl hover:border-purple-300 dark:hover:border-purple-600 hover:-translate-y-1 transition-all duration-300"
            >
              <div class="flex-shrink-0 mb-4">
                <div class="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500 text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <i :class="`${feature.icon} text-xl`"></i>
                </div>
              </div>
              <h3 class="text-lg font-bold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                {{ feature.title }}
              </h3>
              <p class="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed text-sm">
                {{ feature.description }}
              </p>
              <div class="flex items-center text-purple-600 dark:text-purple-400">
                <i class="uil uil-info-circle text-sm mr-2"></i>
                <span class="text-xs font-semibold">{{ feature.hint }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- How It Works -->
      <div class="max-w-7xl mx-auto">
        <div class="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl shadow-lg border border-purple-100 dark:border-gray-600 p-8 lg:p-10">
          <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Simple for Agents, Powerful Under the Hood
          </h2>
          <div class="max-w-4xl mx-auto space-y-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              From the agent's point of view, it feels simple: they just log in, pick the queues they want to work, and the system handles the rest. Under the hood, you're doing all the multi-queue, multi-role, multi-node juggling for them.
            </p>
            <p>
              The ACD watches only logged-in agents and respects locks, so each agent is picked by at most one node at a time, even in a distributed setup. The lock is released after hangup plus wrap-up time, so agents get breathing room before the next call.
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
