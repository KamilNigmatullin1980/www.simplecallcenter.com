<script setup lang="ts">
import { ref } from 'vue'
import { useHead } from '#imports'
import image from '../../assets/images/bg/bg-startup.png'

useHead({
  title: 'All-in-One Desktop App | SimpleCallCenter',
  meta: [
    {
      name: 'description',
      content:
        'One desktop app for everyone: a softphone for users, a full call center workstation for agents, and a real-time monitoring console for supervisors — with multi-account support, visual CDRs, recordings, transcripts, and AI quality flags built in.',
    },
    {
      name: 'keywords',
      content:
        'desktop app, softphone, call center workstation, supervisor console, multi-account support, visual CDR, call recording, transcript, AI quality, SimpleCallCenter',
    },
    { property: 'og:title', content: 'All-in-One Desktop App | SimpleCallCenter' },
    {
      property: 'og:description',
      content:
        'One desktop app for everyone: softphone for users, call center workstation for agents, and monitoring console for supervisors — all with multi-account support and integrated CDRs, recordings, transcripts, and AI quality flags.',
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://simplecallcenter.com/desktop-softphone' },
  ],
})

const userFeatures = ref([
  {
    icon: 'uil uil-phone',
    title: 'Make & Receive Calls',
    description: 'Make and receive calls using your extension, direct number, or call center numbers. Full softphone functionality in one application.',
    hint: 'Full calling'
  },
  {
    icon: 'uil uil-exchange',
    title: 'Free Internal Calls',
    description: 'Free internal calls between extensions, attended transfers to any colleague, and outbound calls with the right caller ID selected.',
    hint: 'Team communication'
  },
  {
    icon: 'uil uil-id-card',
    title: 'Caller ID Control',
    description: 'Choose the outbound identity when placing calls — use call center numbers or your personal direct number as needed.',
    hint: 'Flexible identity'
  }
])

const agentFeatures = ref([
  {
    icon: 'uil uil-sign-in-alt',
    title: 'Multi-Call Center Login',
    description: 'Log in to one or multiple call centers and queues. Set status (available, break, wrap-up) and see your current queue workload.',
    hint: 'Multi-role support'
  },
  {
    icon: 'uil uil-phone',
    title: 'Inbound Call Handling',
    description: 'Receive inbound calls routed by ACD. During a call: hold, mute, attended transfer, hang up, and then finish notes during wrap-up.',
    hint: 'Complete control'
  },
  {
    icon: 'uil uil-file-alt',
    title: 'Integrated Call Records',
    description: 'Access Call Detail Records with visual call flow, recording, transcript, AI summary, and quality flags all in one place.',
    hint: 'All-in-one view'
  }
])

const supervisorFeatures = ref([
  {
    icon: 'uil uil-eye',
    title: 'Real-Time Agent Presence',
    description: 'See real-time agent presence: who is online, on a call, in wrap-up, or offline per queue and per call center.',
    hint: 'Live monitoring'
  },
  {
    icon: 'uil uil-chart-line',
    title: 'Queue Monitoring',
    description: 'Watch queue load and spot problems like "open hours but no agents logged in" with real-time alerts and visibility.',
    hint: 'Proactive alerts'
  },
  {
    icon: 'uil uil-list-ul',
    title: 'Complete Call Review',
    description: 'Open any call to see the full visual call flow, listen to the recording, read the transcript, and check AI flags.',
    hint: 'Full context'
  },
  {
    icon: 'uil uil-headphones',
    title: 'Live Call Controls',
    description: 'Use live controls (silent monitor / whisper / barge) where enabled, and work through the shared Missed & Voicemail workspace.',
    hint: 'Active supervision'
  }
])

const multiAccountFeatures = ref([
  {
    icon: 'uil uil-users-alt',
    title: 'Multiple Accounts',
    description: 'Users who work for several projects or brands can log into more than one account from the same application.',
    hint: 'Multi-brand support'
  },
  {
    icon: 'uil uil-exchange',
    title: 'Account Switching',
    description: 'Agents choose which call center they are acting on behalf of when placing outbound calls. Supervisors can switch between workspaces.',
    hint: 'Easy switching'
  },
  {
    icon: 'uil uil-desktop',
    title: 'Unified Interface',
    description: 'Monitor different call centers from the same application, with all features available across all accounts.',
    hint: 'One app, many accounts'
  }
])

const integratedFeatures = ref([
  {
    icon: 'uil uil-list-ul',
    title: 'Visual CDRs',
    description: 'Visual call flow timelines showing every step of the call journey, with complete call detail records built into the app.',
    hint: 'Visual records'
  },
  {
    icon: 'uil uil-play-circle',
    title: 'Call Recordings',
    description: 'Access and play call recordings directly from the desktop app, with integrated playback controls.',
    hint: 'Audio playback'
  },
  {
    icon: 'uil uil-file-alt',
    title: 'Transcripts',
    description: 'Read full call transcripts generated automatically, making it easy to review conversations without listening.',
    hint: 'Text review'
  },
  {
    icon: 'uil uil-brain',
    title: 'AI Quality Flags',
    description: 'See AI-powered quality flags, scores, and comments for each call, providing instant insights into call quality.',
    hint: 'AI insights'
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
          All-in-One <span class="text-purple-800 dark:text-purple-300">Desktop App</span>
        </h1>
        <p class="text-lg sm:text-xl lg:text-2xl text-gray-700 dark:text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
          One desktop app for everyone: a softphone for users, a full call center workstation for agents, and a real-time monitoring console for supervisors.
        </p>
      </div>

      <!-- User Features -->
      <div class="max-w-7xl mx-auto mb-20">
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 lg:p-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Softphone for Any User
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 mb-10 text-center max-w-3xl mx-auto">
            Full calling functionality for all users, not just agents
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <div
              v-for="(feature, index) in userFeatures"
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

      <!-- Agent Features -->
      <div class="max-w-7xl mx-auto mb-20">
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 lg:p-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Full Call Center Workstation for Agents
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 mb-10 text-center max-w-3xl mx-auto">
            Complete agent functionality with integrated call handling and records
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <div
              v-for="(feature, index) in agentFeatures"
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

      <!-- Supervisor Features -->
      <div class="max-w-7xl mx-auto mb-20">
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 lg:p-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Real-Time Monitoring Console for Supervisors
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 mb-10 text-center max-w-3xl mx-auto">
            Complete visibility and control over your call center operations
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div
              v-for="(feature, index) in supervisorFeatures"
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

      <!-- Multi-Account Features -->
      <div class="max-w-7xl mx-auto mb-20">
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 lg:p-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Multiple Accounts in One App
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 mb-10 text-center max-w-3xl mx-auto">
            Support for multiple accounts and call centers in a single application
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <div
              v-for="(feature, index) in multiAccountFeatures"
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
            Built-In Features
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 mb-10 text-center max-w-3xl mx-auto">
            Visual CDRs, recordings, transcripts, and AI quality flags all integrated into the app
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
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

      <!-- How It Works -->
      <div class="max-w-7xl mx-auto">
        <div class="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl shadow-lg border border-purple-100 dark:border-gray-600 p-8 lg:p-10">
          <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Your Single Place for Everything
          </h2>
          <div class="max-w-4xl mx-auto space-y-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              In practice, the desktop app is your single place for calling (internal + external), handling queue calls, reviewing CDRs, recordings, transcripts, and AI QA, and supervising agents and monitoring queues.
            </p>
            <p>
              SimpleCallCenter comes with a full desktop application that everyone uses — not just agents. It works as a softphone for any user, a workstation for agents, and a monitoring and control center for supervisors, all with multi-account support built in.
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
