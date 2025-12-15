<script setup lang="ts">
import { ref } from 'vue'
import { useHead } from '#imports'
import image from '../../assets/images/bg/bg-startup.webp'

useHead({
  title: 'Personal Phone Numbers (Direct Lines) | SimpleCallCenter',
  meta: [
    {
      name: 'description',
      content:
        'Give users their own direct numbers on top of call center queues and extensions. Direct calls ring their desktop app, SIP phone, and mobile app, with optional recordings visible only to that user.',
    },
    {
      name: 'keywords',
      content:
        'personal phone numbers, direct lines, direct DIDs, private phone numbers, personal extensions, call center direct lines, SimpleCallCenter',
    },
    { property: 'og:title', content: 'Personal Phone Numbers (Direct Lines) | SimpleCallCenter' },
    {
      property: 'og:description',
      content:
        'Give users their own direct numbers. Direct calls ring all devices, and optional recordings from personal numbers are visible only to that user, not to supervisors.',
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://simplecallcenter.com/personal-phone-numbers-direct-lines' },
  ],
})

const coreFeatures = ref([
  {
    icon: 'uil uil-phone',
    title: 'Direct Phone Numbers',
    description: 'On top of call centers and internal extensions, SimpleCallCenter lets you give people their own direct phone numbers — perfect for managers, accountants, consultants, or anyone who needs clients to reach them without going through a queue.',
    hint: 'Personal DIDs'
  },
  {
    icon: 'uil uil-route',
    title: 'Direct Routing',
    description: 'A personal number works like a normal DID: customers dial the direct number and reach that person without hitting IVR or queues.',
    hint: 'No queues'
  },
  {
    icon: 'uil uil-users-alt',
    title: 'Perfect for Key Roles',
    description: 'Ideal for managers, accountants, consultants, or anyone who needs clients to reach them directly without going through call center queues.',
    hint: 'Key personnel'
  }
])

const deviceFeatures = ref([
  {
    icon: 'uil uil-desktop',
    title: 'Desktop App',
    description: 'Direct calls ring on the desktop app, ensuring you never miss important calls when working at your computer.',
    hint: 'Desktop ringing'
  },
  {
    icon: 'uil uil-phone',
    title: 'SIP Hard Phone',
    description: 'Use any standards-compliant SIP desk phone with your direct number for a traditional office phone experience.',
    hint: 'Desk phone'
  },
  {
    icon: 'uil uil-laptop',
    title: 'SIP Softphone',
    description: 'Use any SIP softphone on desktop or laptop, giving you flexibility to work from anywhere with your direct number.',
    hint: 'Any SIP client'
  },
  {
    icon: 'uil uil-mobile-android',
    title: 'Mobile App',
    description: 'Mobile app (Acrobits) on iOS/Android with push wake-up, so the app can be closed and still receive direct calls.',
    hint: 'Always available'
  }
])

const coexistenceFeatures = ref([
  {
    icon: 'uil uil-users-alt',
    title: 'Multi-Role Support',
    description: 'The same user can be a call center agent or supervisor and have a personal number. Both roles work simultaneously without conflict.',
    hint: 'Dual roles'
  },
  {
    icon: 'uil uil-shield-check',
    title: 'Queue Protection',
    description: 'Direct calls never "steal" agents from queue logic: if they\'re already handling a queue call, inbound direct calls won\'t pull them out of that conversation.',
    hint: 'Queue priority'
  },
  {
    icon: 'uil uil-phone',
    title: 'Call Waiting',
    description: 'Direct calls will show busy / call waiting depending on configuration, ensuring queue calls are never interrupted by personal calls.',
    hint: 'Smart routing'
  }
])

const privacyFeatures = ref([
  {
    icon: 'uil uil-lock',
    title: 'Optional Recording',
    description: 'Recording for personal numbers is optional and controlled by the user. They can turn it on or off for their direct line as needed.',
    hint: 'User control'
  },
  {
    icon: 'uil uil-user-shield',
    title: 'Private Access Only',
    description: 'If recording is enabled on a personal number, those recordings are only visible to that user and do not appear in supervisor/admin QA views.',
    hint: 'Privacy first'
  },
  {
    icon: 'uil uil-ban',
    title: 'Excluded from QA',
    description: 'Personal number recordings are not used for call center scorecards or coaching, keeping private conversations separate from business oversight.',
    hint: 'Separate workflows'
  },
  {
    icon: 'uil uil-shield-check',
    title: 'Safe Office Phone',
    description: 'People can safely use the platform as their own office phone without giving supervisors access to private conversations, while still letting the business fully monitor call center numbers.',
    hint: 'Privacy respected'
  }
])

const integrationFeatures = ref([
  {
    icon: 'uil uil-id-card',
    title: 'Caller ID for Outbound',
    description: 'Can be used as caller ID for outbound calls when the user calls "as themselves" instead of on behalf of a call center.',
    hint: 'Personal identity'
  },
  {
    icon: 'uil uil-exchange',
    title: 'Warm Transfers',
    description: 'Any inbound call (from a customer or from a queue) can be warm-transferred to a colleague\'s direct number for seamless handoffs.',
    hint: 'Easy transfers'
  },
  {
    icon: 'uil uil-phone',
    title: 'Free Extension Calling',
    description: 'Internal extension calling stays free: colleagues can still reach each other by extension even if they have personal DIDs.',
    hint: 'Internal calls'
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
          Personal Phone Numbers <span class="text-purple-800 dark:text-purple-300">(Direct Lines)</span>
        </h1>
        <p class="text-lg sm:text-xl lg:text-2xl text-gray-700 dark:text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
          Give users their own direct numbers on top of call center queues and extensions. Direct calls ring their desktop app, SIP phone, and mobile app, with optional recordings visible only to that user.
        </p>
      </div>

      <!-- Core Features -->
      <div class="max-w-7xl mx-auto mb-20">
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 lg:p-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Direct Phone Numbers
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 mb-10 text-center max-w-3xl mx-auto">
            Personal DIDs that work alongside call centers and extensions
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

      <!-- Multi-Device Support -->
      <div class="max-w-7xl mx-auto mb-20">
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 lg:p-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Ring on All Devices
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 mb-10 text-center max-w-3xl mx-auto">
            The call rings on all of the user's devices simultaneously
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

      <!-- Coexistence Features -->
      <div class="max-w-7xl mx-auto mb-20">
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 lg:p-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Coexists with Call Center Roles
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 mb-10 text-center max-w-3xl mx-auto">
            Direct lines work seamlessly alongside call center agent and supervisor roles
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <div
              v-for="(feature, index) in coexistenceFeatures"
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

      <!-- Privacy Features -->
      <div class="max-w-7xl mx-auto mb-20">
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 lg:p-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Privacy-First Recording
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 mb-10 text-center max-w-3xl mx-auto">
            Personal numbers also respect privacy with user-controlled recording
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div
              v-for="(feature, index) in privacyFeatures"
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

      <!-- Integration Features -->
      <div class="max-w-7xl mx-auto mb-20">
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 lg:p-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Works With the Rest of the System
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 mb-10 text-center max-w-3xl mx-auto">
            Personal numbers integrate seamlessly with other platform features
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <div
              v-for="(feature, index) in integrationFeatures"
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
            Personal & Professional, All in One
          </h2>
          <div class="max-w-4xl mx-auto space-y-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              So people can safely use the platform as their own office phone without giving supervisors access to private conversations, while still letting the business fully monitor and QA call center numbers.
            </p>
            <p>
              Direct lines coexist with call center roles: the same user can be a call center agent or supervisor and have a personal number. Direct calls never "steal" agents from queue logic, ensuring queue calls are never interrupted by personal calls.
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
