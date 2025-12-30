<script setup lang="ts">
import { ref } from 'vue'
import { useHead } from '#imports'
import image from '../../assets/images/bg/bg-startup.webp'

useHead({
  title: 'Security & Reliability | SimpleCallCenter',
  meta: [
    {
      name: 'description',
      content:
        'SimpleCallCenter is built to survive failures and protect conversations. Multi-region redundancy, encrypted by default, and privacy controls for recordings ensure your calls are secure and reliable.',
    },
    {
      name: 'keywords',
      content:
        'call center security, reliability, multi-region redundancy, disaster recovery, encryption, TLS, recording privacy controls, SimpleCallCenter',
    },
    { property: 'og:title', content: 'Security & Reliability | SimpleCallCenter' },
    {
      property: 'og:description',
      content:
        'Built to survive failures and protect conversations. Multi-region redundancy, encrypted by default, and privacy controls ensure your calls are secure and reliable.',
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://simplecallcenter.com/security-and-reliability' },
  ],
})

const coreFeatures = ref([
  {
    icon: 'uil uil-shield-check',
    title: 'Built for Reliability',
    description: 'SimpleCallCenter is built to survive failures and protect conversations, not just to work "when everything is fine".',
    hint: 'Failure-resistant'
  },
  {
    icon: 'uil uil-server',
    title: 'No Single Point of Failure',
    description: 'There is no single PBX box that everything depends on — routing and call control are designed to keep working even if a whole site disappears.',
    hint: 'Distributed architecture'
  },
  {
    icon: 'uil uil-lock',
    title: 'Privacy & Security First',
    description: 'Security isn\'t only about transport — it\'s also about who can see what, with granular privacy controls for different types of calls.',
    hint: 'Complete protection'
  }
])

const redundancyFeatures = ref([
  {
    icon: 'uil uil-globe',
    title: 'Multi-Region Deployment',
    description: 'The platform runs in two independent regions: New York and San Francisco, ensuring geographic redundancy and disaster recovery.',
    hint: 'NY + SF regions'
  },
  {
    icon: 'uil uil-server',
    title: 'Critical Services Redundancy',
    description: 'All critical services (call routing, ACD, signaling, APIs) are deployed in both regions, so if one region goes down, the other takes over.',
    hint: 'Full redundancy'
  },
  {
    icon: 'uil uil-sync',
    title: 'Automatic Failover',
    description: 'If one region goes completely down, the other region takes over new calls. Phones re-register and new calls flow through the healthy region.',
    hint: 'Seamless failover'
  },
  {
    icon: 'uil uil-phone',
    title: 'Continued Operations',
    description: 'Outbound calls from the desktop app and SIP devices also go out via the healthy side, ensuring business continuity.',
    hint: 'Business continuity'
  }
])

const encryptionFeatures = ref([
  {
    icon: 'uil uil-lock',
    title: 'TLS by Default',
    description: 'For anything under our control, we use TLS by default. Web portal & desktop backend: all traffic goes over HTTPS/TLS.',
    hint: 'Encrypted web'
  },
  {
    icon: 'uil uil-shield',
    title: 'Protected APIs',
    description: 'Internal APIs and control channels are protected with TLS and authentication, ensuring secure communication throughout the platform.',
    hint: 'Secure APIs'
  },
  {
    icon: 'uil uil-phone',
    title: 'Encrypted SIP Signaling',
    description: 'SIP signaling is encrypted when we control both sides (our SBCs, softphones, WebRTC, etc.), protecting call setup and control.',
    hint: 'Secure signaling'
  },
  {
    icon: 'uil uil-shield-check',
    title: 'Carrier Protection',
    description: 'Traffic between our edge and carriers / internal services remains protected, even when third-party devices use unencrypted SIP.',
    hint: 'End-to-end security'
  }
])

const privacyFeatures = ref([
  {
    icon: 'uil uil-building',
    title: 'Call Center Numbers',
    description: 'Recordings, transcripts, summaries, and AI quality flags are visible to supervisors for QA and coaching on call center numbers.',
    hint: 'Supervisor access'
  },
  {
    icon: 'uil uil-user',
    title: 'Personal Direct Numbers',
    description: 'Recording is optional and controlled by the user. If enabled, these recordings are visible only to that user, not to admins or supervisors.',
    hint: 'User control'
  },
  {
    icon: 'uil uil-ban',
    title: 'Separate from QA',
    description: 'Personal calls are not pulled into call center QA or scorecards, keeping private conversations separate from business oversight.',
    hint: 'Privacy respected'
  },
  {
    icon: 'uil uil-shield-check',
    title: 'Dual Use Support',
    description: 'This makes it possible to use SimpleCallCenter as both a business call center and an office phone system without turning every private call into something management can inspect.',
    hint: 'Flexible usage'
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
          Security & <span class="text-purple-800 dark:text-purple-300">Reliability</span>
        </h1>
        <p class="text-lg sm:text-xl lg:text-2xl text-gray-700 dark:text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
          SimpleCallCenter is built to survive failures and protect conversations, not just to work "when everything is fine".
        </p>
      </div>

      <!-- Core Features -->
      <div class="max-w-7xl mx-auto mb-20">
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 lg:p-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Built for Reliability & Security
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 mb-10 text-center max-w-3xl mx-auto">
            Enterprise-grade infrastructure designed to keep your calls secure and available
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

      <!-- Multi-Region Redundancy -->
      <div class="max-w-7xl mx-auto mb-20">
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 lg:p-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Multi-Region Redundancy (NY + SF)
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 mb-10 text-center max-w-3xl mx-auto">
            Geographic redundancy ensures your calls keep flowing even if an entire region fails
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div
              v-for="(feature, index) in redundancyFeatures"
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

      <!-- Encryption Features -->
      <div class="max-w-7xl mx-auto mb-20">
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 lg:p-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Encrypted by Default
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 mb-10 text-center max-w-3xl mx-auto">
            For anything under our control, we use TLS by default to protect your communications
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div
              v-for="(feature, index) in encryptionFeatures"
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

      <!-- Privacy Controls -->
      <div class="max-w-7xl mx-auto mb-20">
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 lg:p-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Privacy Controls for Recordings
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 mb-10 text-center max-w-3xl mx-auto">
            Security isn't only about transport — it's also about who can see what
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

      <!-- How It Works -->
      <div class="max-w-7xl mx-auto">
        <div class="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl shadow-lg border border-purple-100 dark:border-gray-600 p-8 lg:p-10">
          <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Complete Protection
          </h2>
          <div class="max-w-4xl mx-auto space-y-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              SimpleCallCenter provides complete protection at every level: multi-region redundancy ensures availability even if an entire data center fails, TLS encryption protects all communications by default, and granular privacy controls ensure that personal calls remain private while business calls can be monitored for quality.
            </p>
            <p>
              The only exception to encrypted SIP is third-party SIP phones that don't support secure signaling or are deployed in environments where TLS can't be enabled. In those cases, we still recommend TLS where possible, and unencrypted SIP is limited to the customer's side of the connection while traffic between our edge and carriers remains protected.
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





