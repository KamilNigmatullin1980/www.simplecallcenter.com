<template>
  <div>
    <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">
      AI Summaries
    </h2>
    
    <div class="prose prose-lg dark:prose-invert max-w-none">
      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
        When enabled, SimpleCallCenter automatically generates an AI summary after each call and attaches it to the call record.
      </p>

      <div class="mb-8">
        <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
          What the summary can include:
        </h3>
        
        <ul class="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300 ml-6">
          <li>
            <strong>A clear call recap</strong> (what the caller wanted, what the agent did, outcome / next steps)
          </li>
          <li>
            <strong>Extracted contact details</strong> mentioned in the call, such as:
            <ul class="list-disc list-inside space-y-2 ml-6 mt-2">
              <li>email</li>
              <li>name</li>
              <li>address</li>
              <li>company</li>
            </ul>
          </li>
          <li>
            <strong>Automatic flags for review</strong> if agent tone or behavior looks suspicious (for example aggressive, inappropriate, or unusual patterns)
          </li>
        </ul>
        
        <p class="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
          These summaries help supervisors and agents understand calls fast without replaying audio.
        </p>
      </div>
    </div>

    <!-- Proof Block: Screenshot Thumbnails -->
    <section class="w-full bg-white dark:bg-gray-900 py-12 lg:py-16 border-b border-gray-200 dark:border-gray-800 -mx-6 lg:-mx-8 px-6 lg:px-8 mt-12">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-7xl mx-auto relative">
          <!-- Left Arrow -->
          <button
            @click="scrollProofLeft"
            class="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white transition-all duration-200 flex items-center justify-center hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-500"
            aria-label="Scroll left"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <!-- Right Arrow -->
          <button
            @click="scrollProofRight"
            class="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white transition-all duration-200 flex items-center justify-center hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-500"
            aria-label="Scroll right"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <!-- Scrollable Container -->
          <div
            ref="proofScrollContainer"
            class="flex gap-6 lg:gap-8 overflow-x-auto scrollbar-hide scroll-smooth px-12"
            style="scrollbar-width: none; -ms-overflow-style: none;"
          >
            <div
              v-for="(img, index) in proofImages"
              :key="index"
              @click="openModal(img)"
              class="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-2xl hover:border-purple-300 dark:hover:border-purple-600 transition-all duration-300 cursor-pointer flex-shrink-0 w-80"
            >
              <div class="aspect-video bg-gray-100 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                <img
                  :src="img.src"
                  :alt="img.alt"
                  loading="lazy"
                  class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div class="p-4">
                <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                  {{ img.title }}
                </h3>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  {{ img.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Image Modal -->
    <div
      v-if="isModalOpen && selectedImage"
      @click.self="closeModal"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75 backdrop-blur-sm transition-opacity duration-300"
    >
      <div class="relative max-w-6xl w-full max-h-[90vh] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
        <!-- Close Button -->
        <button
          @click="closeModal"
          class="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-purple-500"
          aria-label="Close modal"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <!-- Image Container -->
        <div class="p-6">
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2 text-center">
            {{ selectedImage.title }}
          </h3>
          <p class="text-gray-600 dark:text-gray-400 mb-4 text-center">
            {{ selectedImage.description }}
          </p>
          <div class="bg-gray-100 dark:bg-gray-700 rounded-lg overflow-y-auto max-h-[70vh]">
            <div class="flex items-center justify-center p-4">
              <img
                :src="selectedImage.src"
                :alt="selectedImage.alt"
                class="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import dashboardImage from '@/assets/images/front/dashboard.webp'
import inboundFlowImage from '@/assets/images/front/inbound-flow.webp'
import agentEvaluationImage from '@/assets/images/front/agent-login-history.webp'
import cdrViewImage from '@/assets/images/features/ai-control/1-cdr-view.webp'
import callJourneyImage from '@/assets/images/features/ai-control/2-call-journey.webp'
import aiReviewImage from '@/assets/images/features/ai-control/3-AI Review.webp'
import recordingTranscriptImage from '@/assets/images/features/ai-control/4-recording-and-transcript.webp'
import aiStatisticsImage from '@/assets/images/features/ai-control/5-ai statusics.webp'

// Modal state for proof block images
const proofImages = ref([
  {
    src: dashboardImage,
    title: 'Live Dashboard',
    description: 'Real-time call activity, agent status, and queue metrics',
    alt: 'Live Dashboard showing real-time call center metrics'
  },
  {
    src: inboundFlowImage,
    title: 'Inbound Flow',
    description: 'Visual call flow builder for routing and IVR configuration',
    alt: 'Visual call flow builder for inbound routing'
  },
  {
    src: agentEvaluationImage,
    title: 'Agent Evaluation',
    description: 'Agent login history and performance tracking',
    alt: 'Agent evaluation and login history tracking'
  },
  {
    src: cdrViewImage,
    title: 'CDR View',
    description: 'View call detail records with AI flags and quality indicators',
    alt: 'CDR view showing AI quality control'
  },
  {
    src: callJourneyImage,
    title: 'Call Journey',
    description: 'Track the complete call journey and interaction flow',
    alt: 'Call journey visualization'
  },
  {
    src: aiReviewImage,
    title: 'AI Review',
    description: 'AI automatically reviews and flags calls that need attention',
    alt: 'AI review interface'
  },
  {
    src: recordingTranscriptImage,
    title: 'Recording & Transcript',
    description: 'Access full recordings and transcripts for flagged calls',
    alt: 'Recording and transcript view'
  },
  {
    src: aiStatisticsImage,
    title: 'AI Statistics',
    description: 'Comprehensive statistics and analytics on call quality',
    alt: 'AI statistics dashboard'
  }
])

const selectedImage = ref(null)
const isModalOpen = ref(false)
const proofScrollContainer = ref(null)

const openModal = (img) => {
  selectedImage.value = img
  isModalOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  isModalOpen.value = false
  selectedImage.value = null
  document.body.style.overflow = ''
}

const scrollProofLeft = () => {
  if (proofScrollContainer.value) {
    proofScrollContainer.value.scrollBy({
      left: -400,
      behavior: 'smooth'
    })
  }
}

const scrollProofRight = () => {
  if (proofScrollContainer.value) {
    proofScrollContainer.value.scrollBy({
      left: 400,
      behavior: 'smooth'
    })
  }
}

// Close modal on ESC key
const handleEscape = (e) => {
  if (e.key === 'Escape' && isModalOpen.value) {
    closeModal()
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleEscape)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleEscape)
  document.body.style.overflow = ''
})
</script>








