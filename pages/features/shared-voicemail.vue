<script setup lang="ts">
import { ref } from 'vue'
import { useHead } from '#imports'
import image from '../../assets/images/bg/bg-startup.webp'

useHead({
  title: 'Shared Voicemail Processing | SimpleCallCenter',
  meta: [
    {
      name: 'description',
      content:
        'Not every call reaches an agent — queues time out, lines close for the day, people call after hours. SimpleCallCenter turns all of that into a shared, trackable voicemail workflow, not a black hole.',
    },
    {
      name: 'keywords',
      content:
        'shared voicemail processing, voicemail workflow, voicemail transcription, AI voicemail summaries, missed calls workspace, voicemail assignment tracking, SimpleCallCenter',
    },
    { property: 'og:title', content: 'Shared Voicemail Processing | SimpleCallCenter' },
    {
      property: 'og:description',
      content:
        'Turn missed calls and after-hours calls into a shared, trackable voicemail workflow with transcription, AI summarization, and assignment tracking.',
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://simplecallcenter.com/shared-voicemail' },
  ],
})

const coreFeatures = ref([
  {
    icon: 'uil uil-voicemail',
    title: 'Automatic Voicemail Routing',
    description: 'Calls that can\'t be answered (closed hours, queue timeout) are routed to a shared voicemail for that hotline or call center instead of just dropping or playing a dead-end message.',
    hint: 'Smart routing'
  },
  {
    icon: 'uil uil-file-alt',
    title: 'Automatic Transcription',
    description: 'Each voicemail is transcribed automatically using speech recognition, so supervisors and agents can read the message without pressing play.',
    hint: 'Readable messages'
  },
  {
    icon: 'uil uil-link',
    title: 'Integrated CDR',
    description: 'Each voicemail is recorded and attached to the same global CDR as the call, together with menu path and ACD attempts for complete context.',
    hint: 'Full context'
  }
])

const workflowFeatures = ref([
  {
    icon: 'uil uil-users-alt',
    title: 'Shared Inbox',
    description: 'All voicemails land in a shared voicemail & missed calls view where the team actually works them, not just listens.',
    hint: 'Team collaboration'
  },
  {
    icon: 'uil uil-user-check',
    title: 'Assignment System',
    description: 'Items start as "Unassigned", and supervisors can assign them to specific agents or themselves for accountability.',
    hint: 'Clear ownership'
  },
  {
    icon: 'uil uil-check-circle',
    title: 'Status Tracking',
    description: 'As agents work on voicemails, they flip status from Unassigned → In process → Done, so the team sees what\'s still waiting for action.',
    hint: 'Progress visibility'
  },
  {
    icon: 'uil uil-info-circle',
    title: 'Complete Information',
    description: 'Each voicemail appears with caller, time, queue/hotline, transcript, and recording link — everything needed to respond effectively.',
    hint: 'All details'
  }
])

const reportingFeatures = ref([
  {
    icon: 'uil uil-chart-bar',
    title: 'Queue Disposition',
    description: 'Queue disposition records how many calls ended in voicemail vs hangup vs AI agent, per queue and per hour — ready for reporting and SLA analysis.',
    hint: 'Detailed metrics'
  },
  {
    icon: 'uil uil-separator',
    title: 'Clear Separation',
    description: 'Timeouts "to voicemail" are clearly separated from simple abandonment, so you see whether people gave up or were intentionally redirected.',
    hint: 'Accurate tracking'
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
          Shared <span class="text-purple-800 dark:text-purple-300">Voicemail</span> Processing
        </h1>
        <p class="text-lg sm:text-xl lg:text-2xl text-gray-700 dark:text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
          Not every call reaches an agent — queues time out, lines close for the day, people call after hours. SimpleCallCenter turns all of that into a shared, trackable voicemail workflow, not a black hole.
        </p>
      </div>

      <!-- Core Features -->
      <div class="max-w-7xl mx-auto mb-20">
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 lg:p-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Intelligent Voicemail Processing
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 mb-10 text-center max-w-3xl mx-auto">
            Transform missed calls into actionable, trackable workflows
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
            Shared Inbox Workflow
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 mb-10 text-center max-w-3xl mx-auto">
            A collaborative workspace where your team actually works voicemails, not just listens
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

      <!-- Reporting Features -->
      <div class="max-w-7xl mx-auto mb-20">
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 lg:p-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Statistics & Reporting
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 mb-10 text-center max-w-3xl mx-auto">
            Complete visibility into voicemail metrics and call disposition
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <div
              v-for="(feature, index) in reportingFeatures"
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
            Simple for Users, Powerful for Teams
          </h2>
          <div class="max-w-4xl mx-auto space-y-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              From the user's point of view, it feels simple: missed calls + voicemails = one shared inbox with ownership, statuses, transcripts, and links to call recordings, all visible in the same desktop app they already use for live calls.
            </p>
            <p>
              Because this is all tied into your stats and queue logic, you get complete visibility into how calls are handled, whether they ended in voicemail, hangup, or AI agent — ready for reporting and SLA analysis.
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
