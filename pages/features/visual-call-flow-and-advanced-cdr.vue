<script setup lang="ts">
import { ref } from 'vue'
import { useHead } from '#imports'
import image from '../../assets/images/bg/bg-startup.webp'

useHead({
  title: 'Visual Call Flow & Advanced CDR | SimpleCallCenter',
  meta: [
    {
      name: 'description',
      content:
        'Every call in SimpleCallCenter gets a rich, visual Call Detail Record. Open any call and see a visual timeline of every step, plus recording, transcript, and AI review all in one screen.',
    },
    {
      name: 'keywords',
      content:
        'visual call flow, advanced CDR, call detail records, call timeline, call analytics, call tracking, SimpleCallCenter',
    },
    { property: 'og:title', content: 'Visual Call Flow & Advanced CDR | SimpleCallCenter' },
    {
      property: 'og:description',
      content:
        'See a visual timeline of every call step: messages played, queues entered, agents tried, ring times, answer, transfer, and hangup — plus recording, transcript, and AI review all in one screen.',
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://simplecallcenter.com/visual-call-flow-and-advanced-cdr' },
  ],
})

const coreFeatures = ref([
  {
    icon: 'uil uil-file-alt',
    title: 'Rich Call Detail Records',
    description: 'Every call in SimpleCallCenter gets a rich, visual Call Detail Record, not just a raw line in a report. See caller number, destination, call center, language, agent, duration, time entered system, cost, and more.',
    hint: 'Complete details'
  },
  {
    icon: 'uil uil-list-ul',
    title: 'Visual Call Flow Timeline',
    description: 'A step-by-step vertical timeline that shows exactly what happened: messages played, queues entered, agents tried, ring times, answer, transfer, and hangup.',
    hint: 'Visual timeline'
  },
  {
    icon: 'uil uil-eye',
    title: 'Every Decision Point',
    description: 'See every attempt and decision point: which agents were tried, how long they rang, who rejected, who answered, which messages the caller heard, and how the call ended.',
    hint: 'Full visibility'
  }
])

const timelineFeatures = ref([
  {
    icon: 'uil uil-sign-in-alt',
    title: 'Call Entry',
    description: 'See when the call entered the call center and the initial routing decision.',
    hint: 'Entry point'
  },
  {
    icon: 'uil uil-volume',
    title: 'Messages Played',
    description: 'Track every message the caller heard: welcome messages, recording announcements, and IVR prompts.',
    hint: 'Message tracking'
  },
  {
    icon: 'uil uil-list-ul',
    title: 'Queue Activity',
    description: 'See when the caller entered queues, how long they waited, and queue routing decisions.',
    hint: 'Queue visibility'
  },
  {
    icon: 'uil uil-users-alt',
    title: 'Agent Attempts',
    description: 'View every agent attempt: which agents were tried, how long they rang, who rejected, who answered, and connection details.',
    hint: 'Agent routing'
  },
  {
    icon: 'uil uil-phone',
    title: 'Call Connection',
    description: 'See connection details: which agent answered, ringing duration, talking time, and call duration.',
    hint: 'Connection info'
  },
  {
    icon: 'uil uil-sign-out-alt',
    title: 'Call Completion',
    description: 'Track how the call ended: caller hangup, transfer, voicemail, or other completion method.',
    hint: 'End status'
  }
])

const integratedFeatures = ref([
  {
    icon: 'uil uil-list-ul',
    title: 'Call Flow Tab',
    description: 'The visual timeline showing every step of the call journey from entry to completion, with timestamps and details for each event.',
    hint: 'Visual timeline'
  },
  {
    icon: 'uil uil-brain',
    title: 'AI Reviews',
    description: 'Quality flags, scores, and comments for that call, providing AI-powered insights into call quality and service delivery.',
    hint: 'AI insights'
  },
  {
    icon: 'uil uil-play-circle',
    title: 'Recording & Transcript',
    description: 'Audio playback, full transcript, and AI summary all in one place, making it easy to review the entire conversation.',
    hint: 'Complete review'
  }
])

const useCases = ref([
  {
    icon: 'uil uil-clock',
    title: 'Why Did They Wait?',
    description: 'Answer questions like "Why did this customer wait so long?" by seeing the exact timeline of queue waits and agent attempts.',
    hint: 'Wait time analysis'
  },
  {
    icon: 'uil uil-route',
    title: 'Queue Verification',
    description: 'Verify "Did they really reach the right queue?" by checking the visual flow of queue entries and routing decisions.',
    hint: 'Routing verification'
  },
  {
    icon: 'uil uil-users-alt',
    title: 'Agent Handling',
    description: 'See "Who actually handled this call, and how many agents were tried before that?" with complete agent attempt history.',
    hint: 'Agent tracking'
  },
  {
    icon: 'uil uil-volume',
    title: 'Message Confirmation',
    description: 'Confirm "Did they hear the recording disclaimer / welcome message?" by viewing the exact messages played during the call.',
    hint: 'Message verification'
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
          Visual Call Flow & <span class="text-purple-800 dark:text-purple-300">Advanced CDR</span>
        </h1>
        <p class="text-lg sm:text-xl lg:text-2xl text-gray-700 dark:text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
          Every call in SimpleCallCenter gets a rich, visual Call Detail Record. Open any call and see a visual timeline of every step, plus recording, transcript, and AI review all in one screen.
        </p>
      </div>

      <!-- Core Features -->
      <div class="max-w-7xl mx-auto mb-20">
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 lg:p-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Rich Call Detail Records
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 mb-10 text-center max-w-3xl mx-auto">
            From the desktop app you can open any call and see complete call information
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

      <!-- Timeline Features -->
      <div class="max-w-7xl mx-auto mb-20">
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 lg:p-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Full Visual Call Flow Timeline
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 mb-10 text-center max-w-3xl mx-auto">
            A step-by-step vertical timeline that shows exactly what happened during the call
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <div
              v-for="(feature, index) in timelineFeatures"
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

      <!-- Integrated Features -->
      <div class="max-w-7xl mx-auto mb-20">
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 lg:p-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Integrated Call View
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 mb-10 text-center max-w-3xl mx-auto">
            The call view ties together all call information in one place
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <div
              v-for="(feature, index) in integratedFeatures"
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

      <!-- Use Cases -->
      <div class="max-w-7xl mx-auto mb-20">
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 lg:p-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Answer Important Questions
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 mb-10 text-center max-w-3xl mx-auto">
            Instead of digging through SIP logs or guessing from raw CDR exports, get a human-readable call story
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div
              v-for="(useCase, index) in useCases"
              :key="index"
              class="group relative bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-700 dark:to-gray-800 rounded-xl p-6 lg:p-8 border border-purple-100 dark:border-gray-600 hover:shadow-lg hover:border-purple-300 dark:hover:border-purple-500 transition-all duration-300"
            >
              <div class="flex flex-col items-center text-center">
                <div class="flex-shrink-0 mb-4">
                  <div class="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500 text-white shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <i :class="`${useCase.icon} text-2xl`"></i>
                  </div>
                </div>
                <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-3">
                  {{ useCase.title }}
                </h3>
                <p class="text-gray-600 dark:text-gray-300 leading-relaxed text-sm mb-3">
                  {{ useCase.description }}
                </p>
                <div class="flex items-center text-purple-600 dark:text-purple-400">
                  <i class="uil uil-check-circle text-sm mr-2"></i>
                  <span class="text-xs font-semibold">{{ useCase.hint }}</span>
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
            Human-Readable Call Stories
          </h2>
          <div class="max-w-4xl mx-auto space-y-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              Instead of digging through SIP logs or guessing from raw CDR exports, supervisors and admins get a human-readable call story for every conversation. You can see every attempt and decision point: which agents were tried, how long they rang, who rejected, who answered, which messages the caller heard, and how the call ended.
            </p>
            <p>
              The visual timeline shows exactly what happened: call entered the call center, welcome message played, "Calls are recorded" announcement played, entered queue, waited in queue, tried agents with ring times, connected to agent, and call completion — all in one clear, visual format.
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
