<script setup lang="ts">
import { ref } from 'vue'
import { useHead } from '#imports'
import image from '../../assets/images/bg/bg-startup.webp'

useHead({
  title: 'Inbound Fax Service | SimpleCallCenter',
  meta: [
    {
      name: 'description',
      content:
        'SimpleCallCenter includes a built-in inbound fax service for teams that still need real fax. Receive faxes, convert to PDF, extract text with OCR, and get AI summaries — all integrated with your call center.',
    },
    {
      name: 'keywords',
      content:
        'inbound fax service, fax to PDF, fax OCR, fax text extraction, AI fax summaries, fax number management, call center fax, SimpleCallCenter',
    },
    { property: 'og:title', content: 'Inbound Fax Service | SimpleCallCenter' },
    {
      property: 'og:description',
      content:
        'Built-in inbound fax service with PDF conversion, OCR text extraction, and AI summarization. Manage fax numbers alongside voice DIDs in one unified platform.',
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://simplecallcenter.com/inbound-fax-service' },
  ],
})

const coreFeatures = ref([
  {
    icon: 'uil uil-fax',
    title: 'Dedicated Fax Lines',
    description: 'Assign dedicated phone numbers as fax lines. Only these numbers are treated as fax lines — regular voice numbers do not listen for fax tones and are not affected.',
    hint: 'Separate fax lines'
  },
  {
    icon: 'uil uil-file-pdf',
    title: 'Automatic PDF Conversion',
    description: 'When a fax arrives on a fax number, the platform receives the fax and converts it to a PDF automatically, ready for storage and distribution.',
    hint: 'Instant conversion'
  },
  {
    icon: 'uil uil-database',
    title: 'Complete Metadata Tracking',
    description: 'Fax metadata is stored (caller ID, fax number, time, account/call center), so every fax is traceable and reportable in your system.',
    hint: 'Full traceability'
  }
])

const processingFeatures = ref([
  {
    icon: 'uil uil-file-alt',
    title: 'OCR Text Extraction',
    description: 'Each fax is processed with OCR to extract the text, making the content searchable and accessible without opening the PDF.',
    hint: 'Searchable content'
  },
  {
    icon: 'uil uil-brain',
    title: 'AI Summarization',
    description: 'The extracted text is then AI-summarized to identify what it\'s about and key details, providing quick insights at a glance.',
    hint: 'Smart summaries'
  }
])

const deliveryFeatures = ref([
  {
    icon: 'uil uil-envelope',
    title: 'Email Delivery',
    description: 'Recipients get an email with the PDF attached and the OCR text + short AI summary in the email body, so faxes are easy to find later by searching in Gmail/Outlook.',
    hint: 'Email notifications'
  },
  {
    icon: 'uil uil-desktop',
    title: 'Portal & Desktop App',
    description: 'Faxes appear in the portal and desktop app, where the team can see new faxes in a list, open or download the PDF, and review the OCR text and summary.',
    hint: 'Centralized access'
  }
])

const managementFeatures = ref([
  {
    icon: 'uil uil-phone',
    title: 'Unified Number Management',
    description: 'Manage fax numbers along with voice DIDs in the same account, providing a single interface for all your communication channels.',
    hint: 'One platform'
  },
  {
    icon: 'uil uil-users-alt',
    title: 'Team Access Control',
    description: 'Control which teams/call centers can see which fax lines, ensuring proper access management and organization.',
    hint: 'Access control'
  },
  {
    icon: 'uil uil-chart-line',
    title: 'Integrated Billing & Reporting',
    description: 'Usage per page is tracked in the same billing and reporting as calls, giving you complete visibility into all communication costs.',
    hint: 'Unified reporting'
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
          Inbound <span class="text-purple-800 dark:text-purple-300">Fax Service</span>
        </h1>
        <p class="text-lg sm:text-xl lg:text-2xl text-gray-700 dark:text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
          SimpleCallCenter includes a built-in inbound fax service for teams that still need real fax — especially clinics, law firms, and offices dealing with paperwork.
        </p>
      </div>

      <!-- Core Features -->
      <div class="max-w-7xl mx-auto mb-20">
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 lg:p-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Built-In Fax Reception
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 mb-10 text-center max-w-3xl mx-auto">
            Receive and process faxes seamlessly within your call center platform
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

      <!-- AI Processing Features -->
      <div class="max-w-7xl mx-auto mb-20">
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 lg:p-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            AI-Powered Processing
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 mb-10 text-center max-w-3xl mx-auto">
            Transform faxes into searchable, summarized content automatically
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <div
              v-for="(feature, index) in processingFeatures"
              :key="index"
              class="group relative bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-700 dark:to-gray-800 rounded-xl p-8 lg:p-10 border border-purple-100 dark:border-gray-600 hover:shadow-lg hover:border-purple-300 dark:hover:border-purple-500 transition-all duration-300"
            >
              <div class="flex items-start gap-6">
                <div class="flex-shrink-0">
                  <div class="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500 text-white shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <i :class="`${feature.icon} text-2xl`"></i>
                  </div>
                </div>
                <div class="flex-1">
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {{ feature.title }}
                  </h3>
                  <p class="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                    {{ feature.description }}
                  </p>
                  <div class="flex items-center text-purple-600 dark:text-purple-400">
                    <i class="uil uil-check-circle text-lg mr-2"></i>
                    <span class="text-sm font-semibold">{{ feature.hint }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Delivery Features -->
      <div class="max-w-7xl mx-auto mb-20">
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 lg:p-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Multiple Delivery Options
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 mb-10 text-center max-w-3xl mx-auto">
            Access your faxes through email or the desktop application
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <div
              v-for="(feature, index) in deliveryFeatures"
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

      <!-- Management Features -->
      <div class="max-w-7xl mx-auto mb-20">
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 lg:p-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Unified Management
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 mb-10 text-center max-w-3xl mx-auto">
            Manage fax numbers alongside voice DIDs in one integrated platform
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <div
              v-for="(feature, index) in managementFeatures"
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
            Integrated Fax Management
          </h2>
          <div class="max-w-4xl mx-auto space-y-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              Because fax is just another service in the same account, you manage fax numbers along with voice DIDs, control which teams/call centers can see which fax lines, and track usage per page in the same billing and reporting as calls.
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
