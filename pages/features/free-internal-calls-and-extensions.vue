<script setup lang="ts">
import { ref } from 'vue'
import { useHead } from '#imports'
import image from '../../assets/images/bg/bg-startup.png'

useHead({
  title: 'Free Internal Calls & Extensions | SimpleCallCenter',
  meta: [
    {
      name: 'description',
      content:
        'SimpleCallCenter works as your internal phone system with free calls and easy transfers between colleagues. Every user gets a personal extension for internal communication.',
    },
    {
      name: 'keywords',
      content:
        'internal calls, extensions, free internal calls, SIP extensions, call transfers, office phone system, SimpleCallCenter',
    },
    { property: 'og:title', content: 'Free Internal Calls & Extensions | SimpleCallCenter' },
    {
      property: 'og:description',
      content:
        'Free internal calls between users with personal extensions. Use on desktop phones, softphones, or mobile apps — all sharing the same identity.',
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://simplecallcenter.com/free-internal-calls-and-extensions' },
  ],
})

const coreFeatures = ref([
  {
    icon: 'uil uil-phone',
    title: 'Personal Extensions',
    description: 'Every user automatically gets a personal extension. Users can call each other by extension (or by name in the app) with no per-minute cost.',
    hint: 'Free internal calls'
  },
  {
    icon: 'uil uil-money-bill',
    title: 'No External Charges',
    description: 'Internal calls stay inside the platform and don\'t consume external minutes or top-up balance, making team communication completely free.',
    hint: 'Zero cost'
  },
  {
    icon: 'uil uil-exchange',
    title: 'Easy Internal Communication',
    description: 'SimpleCallCenter isn\'t just a call center — it also works as your internal phone system with free calls and easy transfers between colleagues.',
    hint: 'Unified platform'
  }
])

const deviceFeatures = ref([
  {
    icon: 'uil uil-desktop',
    title: 'Desktop Hard Phones',
    description: 'Use your extension on any standards-compliant SIP desk phone for a traditional office phone experience.',
    hint: 'SIP compatible'
  },
  {
    icon: 'uil uil-laptop',
    title: 'SIP Softphones',
    description: 'Use any SIP softphone on desktop or laptop, giving you flexibility to work from anywhere with your extension.',
    hint: 'Any SIP client'
  },
  {
    icon: 'uil uil-mobile-android',
    title: 'Mobile App',
    description: 'Use the mobile app (Acrobits) on iOS/Android with push notification wake-up, so the app can be closed and still receive calls.',
    hint: 'Always available'
  },
  {
    icon: 'uil uil-user',
    title: 'One Identity',
    description: 'All these devices share the same identity: the user\'s extension. One number, multiple devices, seamless experience.',
    hint: 'Unified identity'
  }
])

const transferFeatures = ref([
  {
    icon: 'uil uil-exchange-alt',
    title: 'Attended Transfers',
    description: 'During an inbound call, an agent can perform an attended transfer to any extension. They first speak to the colleague, explain the situation, and only then complete the transfer.',
    hint: 'Warm handoffs'
  },
  {
    icon: 'uil uil-users-alt',
    title: 'Same Call Center',
    description: 'Transfers can go to another agent in the same call center for seamless team collaboration and escalation.',
    hint: 'Team transfers'
  },
  {
    icon: 'uil uil-building',
    title: 'Cross-Call Center',
    description: 'Transfers can go to someone in a different call center on the same platform, enabling organization-wide collaboration.',
    hint: 'Platform-wide'
  },
  {
    icon: 'uil uil-phone',
    title: 'Extension Users',
    description: 'Transfers can go to a user who only uses the system as an office phone with their extension, making escalation feel natural.',
    hint: 'Natural workflow'
  }
])

const upcomingFeatures = ref([
  {
    icon: 'uil uil-voicemail',
    title: 'Personal Voicemail',
    description: 'Coming soon: Each extension will get personal voicemail (not shared with queues) for individual message management.',
    hint: 'Coming soon'
  },
  {
    icon: 'uil uil-bell',
    title: 'Message Waiting Indicators',
    description: 'SIP subscription / MWI support so compatible phones show message waiting indicators when voicemails are received.',
    hint: 'Visual notifications'
  },
  {
    icon: 'uil uil-mobile-android',
    title: 'App Access',
    description: 'Access voicemail from the app/devices, separate from shared call center voicemail, for personal message management.',
    hint: 'Multi-device access'
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
          Free Internal Calls, <span class="text-purple-800 dark:text-purple-300">Extensions & Transfers</span>
        </h1>
        <p class="text-lg sm:text-xl lg:text-2xl text-gray-700 dark:text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
          SimpleCallCenter isn't just a call center — it also works as your internal phone system with free calls and easy transfers between colleagues.
        </p>
      </div>

      <!-- Core Features -->
      <div class="max-w-7xl mx-auto mb-20">
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 lg:p-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Free Internal Communication
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 mb-10 text-center max-w-3xl mx-auto">
            Connect your team with free internal calls and extensions
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

      <!-- Multiple Devices -->
      <div class="max-w-7xl mx-auto mb-20">
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 lg:p-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Multiple Devices, One Identity
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 mb-10 text-center max-w-3xl mx-auto">
            Each user can use their extension on multiple devices, all sharing the same identity
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div
              v-for="(feature, index) in deviceFeatures"
              :key="index"
              class="group relative bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-700 dark:to-gray-800 rounded-xl p-6 lg:p-8 border border-purple-100 dark:border-gray-600 hover:shadow-lg hover:border-purple-300 dark:hover:border-purple-500 transition-all duration-300"
            >
              <div class="flex flex-col items-center text-center">
                <div class="flex-shrink-0 mb-4">
                  <div class="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500 text-white shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <i :class="`${feature.icon} text-2xl`"></i>
                  </div>
                </div>
                <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-3">
                  {{ feature.title }}
                </h3>
                <p class="text-gray-600 dark:text-gray-300 leading-relaxed text-sm mb-3">
                  {{ feature.description }}
                </p>
                <div class="flex items-center text-purple-600 dark:text-purple-400">
                  <i class="uil uil-check-circle text-sm mr-2"></i>
                  <span class="text-xs font-semibold">{{ feature.hint }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Transfer Features -->
      <div class="max-w-7xl mx-auto mb-20">
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 lg:p-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Attended Transfers to Any Extension
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 mb-10 text-center max-w-3xl mx-auto">
            During an inbound call, perform warm handoffs to any extension in the system
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div
              v-for="(feature, index) in transferFeatures"
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

      <!-- Upcoming Features -->
      <div class="max-w-7xl mx-auto mb-20">
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 lg:p-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Personal Voicemail <span class="text-purple-600 dark:text-purple-400">(Coming Soon)</span>
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 mb-10 text-center max-w-3xl mx-auto">
            Individual voicemail for each extension, separate from shared call center voicemail
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <div
              v-for="(feature, index) in upcomingFeatures"
              :key="index"
              class="group relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-xl p-6 lg:p-8 border border-gray-200 dark:border-gray-600 hover:shadow-lg hover:border-purple-300 dark:hover:border-purple-500 transition-all duration-300 opacity-75"
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
                    <i class="uil uil-clock text-sm mr-2"></i>
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
            Natural Escalation Workflow
          </h2>
          <div class="max-w-4xl mx-auto space-y-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              Escalation and warm handoffs feel natural — "Let me bring billing on the line and then I'll transfer you" is a real flow, not a workaround. Transfers can go to another agent in the same call center, someone in a different call center on the same platform, or a user who only uses the system as an office phone with their extension.
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
