<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useHead } from '#imports'
import image from '../../assets/images/bg/bg-startup.png'
import image1 from '../../assets/images/features/ai-control/1-cdr-view.png'
import image2 from '../../assets/images/features/ai-control/2-call-journey.png'
import image3 from '../../assets/images/features/ai-control/3-AI Review.png'
import image4 from '../../assets/images/features/ai-control/4-recording-and-transcript.png'
import image5 from '../../assets/images/features/ai-control/5-ai statusics.png'

useHead({
  title: 'Quality Control With AI | SimpleCallCenter',
  meta: [
    {
      name: 'description',
      content:
        'AI automatically reviews every call and flags only those where the agent sounds rude or service falls below standard — with alerts visible right in the desktop app.',
    },
    {
      name: 'keywords',
      content:
        'call quality control, AI quality assurance, call monitoring, speech-to-text, call transcription, quality control, call center QA, SimpleCallCenter',
    },
    { property: 'og:title', content: 'Quality Control With AI | SimpleCallCenter' },
    {
      property: 'og:description',
      content:
        'AI automatically reviews every call and flags only those where the agent sounds rude or service falls below standard — with alerts visible right in the desktop app.',
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://simplecallcenter.com/quality-assurance-and-quality-control' },
  ],
})

const coreFeatures = ref([
  {
    icon: 'uil uil-brain',
    title: 'Automatic Call Analysis',
    description: 'Every recorded call is automatically transcribed, summarized, and analyzed by AI in the background, so bad experiences don\'t hide in the averages.',
    hint: 'Continuous monitoring'
  },
  {
    icon: 'uil uil-file-alt',
    title: 'Full Transcript & Summary',
    description: 'After a call ends, the system generates a complete transcript and short call summary, providing full visibility into what happened during the conversation.',
    hint: 'Complete visibility'
  },
  {
    icon: 'uil uil-exclamation-triangle',
    title: 'Intelligent Flagging',
    description: 'AI flags only risky calls where agents sound rude, dismissive, or when customers don\'t get clear answers or solutions.',
    hint: 'Smart detection'
  },
  {
    icon: 'uil uil-desktop',
    title: 'Desktop App Integration',
    description: 'Flagged calls and quality indicators are visible directly in the desktop app, making it easy for supervisors to spot issues immediately.',
    hint: 'Real-time alerts'
  },
  {
    icon: 'uil uil-filter',
    title: 'Advanced Filtering',
    description: 'Supervisors can filter CDRs by "flagged by AI", open transcripts, and listen to recordings to make informed quality judgments.',
    hint: 'Easy review'
  },
  {
    icon: 'uil uil-chart-bar',
    title: 'Pattern Analysis',
    description: 'Track patterns by agent, queue, and time period to identify who gets more flagged calls and which lines cause trouble over time.',
    hint: 'Trend insights'
  }
])

const flaggingCriteria = ref([
  {
    icon: 'uil uil-frown',
    title: 'Agent Behavior Issues',
    description: 'The agent sounds rude, dismissive, or impatient during the conversation.'
  },
  {
    icon: 'uil uil-redo',
    title: 'Unresolved Repetition',
    description: 'The customer keeps repeating the same problem without getting a clear answer.'
  },
  {
    icon: 'uil uil-times-circle',
    title: 'No Solution Provided',
    description: 'The agent never actually provides a solution or next step to resolve the issue.'
  },
  {
    icon: 'uil uil-question-circle',
    title: 'Unconfirmed Resolution',
    description: 'The call ends without confirming whether the issue was actually resolved.'
  }
])

const featureImages = ref([
  {
    src: image1,
    title: 'CDR View',
    description: 'View call detail records with AI flags and quality indicators',
    alt: 'CDR view showing AI quality control'
  },
  {
    src: image2,
    title: 'Call Journey',
    description: 'Track the complete call journey and interaction flow',
    alt: 'Call journey visualization'
  },
  {
    src: image3,
    title: 'AI Review',
    description: 'AI automatically reviews and flags calls that need attention',
    alt: 'AI review interface'
  },
  {
    src: image4,
    title: 'Recording & Transcript',
    description: 'Access full recordings and transcripts for flagged calls',
    alt: 'Recording and transcript view'
  },
  {
    src: image5,
    title: 'AI Statistics',
    description: 'Comprehensive statistics and analytics on call quality',
    alt: 'AI statistics dashboard'
  }
])

interface FeatureImage {
  src: string
  title: string
  description: string
  alt: string
}

const selectedImage = ref<FeatureImage | null>(null)
const isModalOpen = ref(false)

const openModal = (img: FeatureImage) => {
  selectedImage.value = img
  isModalOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  isModalOpen.value = false
  selectedImage.value = null
  document.body.style.overflow = ''
}

// Close modal on ESC key
const handleEscape = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && isModalOpen.value) {
    closeModal()
  }
}

// Add event listener on mount
onMounted(() => {
  document.addEventListener('keydown', handleEscape)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleEscape)
  document.body.style.overflow = ''
})
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
          Quality Control <span class="text-purple-800 dark:text-purple-300">With AI</span>
        </h1>
        <p class="text-lg sm:text-xl lg:text-2xl text-gray-700 dark:text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
          SimpleCallCenter automatically checks call quality in the background — every recorded call is transcribed, summarized, and analyzed by AI, so bad experiences don't hide in the averages.
        </p>
      </div>

      <!-- Core Features -->
      <div class="max-w-7xl mx-auto mb-20">
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 lg:p-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            AI-Powered Quality Control
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 mb-10 text-center max-w-3xl mx-auto">
            Continuous quality monitoring without hiring a separate QA department
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

      <!-- Flagging Criteria -->
      <div class="max-w-7xl mx-auto mb-20">
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 lg:p-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            What Gets Flagged?
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 mb-10 text-center max-w-3xl mx-auto">
            The AI doesn't flag every call — it flags the ones that look risky
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <div
              v-for="(criterion, index) in flaggingCriteria"
              :key="index"
              class="group relative bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-700 dark:to-gray-800 rounded-xl p-6 lg:p-8 border border-purple-100 dark:border-gray-600 hover:shadow-lg hover:border-purple-300 dark:hover:border-purple-500 transition-all duration-300"
            >
              <div class="flex items-start gap-4">
                <div class="flex-shrink-0">
                  <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500 text-white shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <i :class="`${criterion.icon} text-xl`"></i>
                  </div>
                </div>
                <div class="flex-1">
                  <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-3">
                    {{ criterion.title }}
                  </h3>
                  <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {{ criterion.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Image Gallery -->
      <div class="max-w-7xl mx-auto mb-20">
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 lg:p-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            See It In Action
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 mb-10 text-center max-w-3xl mx-auto">
            Explore the AI quality control features in the desktop app
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <div
              v-for="(img, index) in featureImages"
              :key="index"
              @click="openModal(img)"
              class="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-2xl hover:border-purple-300 dark:hover:border-purple-600 transition-all duration-300 cursor-pointer"
            >
              <div class="aspect-video bg-gray-100 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                <img
                  :src="img.src"
                  :alt="img.alt"
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

      <!-- Review Process -->
      <div class="max-w-7xl mx-auto">
        <div class="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl shadow-lg border border-purple-100 dark:border-gray-600 p-8 lg:p-10">
          <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            How It Works
          </h2>
          <div class="max-w-4xl mx-auto space-y-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              When a call is flagged as "Needs review", the flag, summary, transcript, and recording link are saved together with the CDR. Supervisors can filter CDRs by "flagged by AI", open the transcript, and listen to the recording.
            </p>
            <p>
              This gives you continuous quality control without hiring a separate QA department to listen to random samples all day — <strong class="text-purple-800 dark:text-purple-300">AI surfaces the suspicious calls, humans make the final judgment.</strong>
            </p>
          </div>
        </div>
      </div>
    </div>

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
        <div class="p-6" v-if="selectedImage">
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2 text-center">
            {{ selectedImage.title }}
          </h3>
          <p class="text-gray-600 dark:text-gray-400 mb-4 text-center">
            {{ selectedImage.description }}
          </p>
          <div class="bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden flex items-center justify-center max-h-[70vh]">
            <img
              :src="selectedImage.src"
              :alt="selectedImage.alt"
              class="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* All styling handled via Tailwind */
</style>
