<template>
  <section class="w-full py-12 md:py-16 bg-white dark:bg-gray-900">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div :class="sliderOnly ? 'w-full' : 'grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center'">
        <!-- Left side: Text content -->
        <div v-if="!sliderOnly" class="lg:col-span-2 space-y-6">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Set up your own test call center <span class="text-purple-800 dark:text-purple-300">in minutes</span> — no card, no delays, no nonsense.
          </h2>
          
          <p class="text-lg text-gray-700 dark:text-gray-300">
            Get a fully working inbound system in 6 steps — with IVR, agent routing, and your own test number.
          </p>

          <ul class="space-y-4 text-gray-700 dark:text-gray-300">
            <li class="flex items-start">
              <svg class="w-5 h-5 flex-shrink-0 mr-3 mt-0.5 text-blue-800 dark:text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Unlimited users — no per-seat pricing</span>
            </li>
            <li class="flex items-start">
              <svg class="w-5 h-5 flex-shrink-0 mr-3 mt-0.5 text-blue-800 dark:text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Pay only for what you use — calls, AI, and features</span>
            </li>
            <li class="flex items-start">
              <svg class="w-5 h-5 flex-shrink-0 mr-3 mt-0.5 text-blue-800 dark:text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Full platform: inbound routing, internal extensions, fax, AI summaries</span>
            </li>
            <li class="flex items-start">
              <svg class="w-5 h-5 flex-shrink-0 mr-3 mt-0.5 text-blue-800 dark:text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Live test setup in minutes — no card required</span>
            </li>
            <li class="flex items-start">
              <svg class="w-5 h-5 flex-shrink-0 mr-3 mt-0.5 text-blue-800 dark:text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Test the full call flow in under 10 minutes</span>
            </li>
          </ul>

          <p class="text-gray-700 dark:text-gray-300">
            Try before you commit.
          </p>

          <div>
            <button 
              @click="authModal.open()"
              class="px-6 py-3 bg-purple-700 hover:bg-lime-500 text-white font-bold rounded-full transition transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              🚀 Launch Free Test →
            </button>
          </div>
        </div>

        <!-- Right side: Image carousel -->
        <div :class="sliderOnly ? 'w-full relative' : 'lg:col-span-3 relative'">
          <!-- Image display -->
          <div class="relative bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
            <div class="aspect-video flex items-center justify-center p-2">
              <img
                :src="steps[activeStep].image"
                :alt="steps[activeStep].caption"
                class="w-full h-full object-contain rounded"
              />
            </div>
            
            <!-- Caption -->
            <div class="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4">
              <p class="text-sm md:text-base text-center font-medium">
                {{ steps[activeStep].caption }}
              </p>
            </div>

            <!-- Navigation arrows -->
            <button
              @click="previousStep"
              class="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full p-2 transition"
              aria-label="Previous step"
            >
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              @click="nextStep"
              class="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full p-2 transition"
              aria-label="Next step"
            >
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <!-- Step indicators (dots) -->
          <div class="flex justify-center mt-4 space-x-2">
            <button
              v-for="(step, index) in steps"
              :key="index"
              @click="activeStep = index"
              class="w-2 h-2 rounded-full transition"
              :class="activeStep === index
                ? 'bg-blue-800 dark:bg-blue-300 w-8'
                : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'"
              :aria-label="`Go to step ${index + 1}`"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  sliderOnly: {
    type: Boolean,
    default: false
  }
})

const authModal = useAuthModal()
import image1 from '@/assets/images/setup/1.webp'
import image2 from '@/assets/images/setup/2.webp'
import image3 from '@/assets/images/setup/3.webp'
import image4 from '@/assets/images/setup/4.webp'
import image5 from '@/assets/images/setup/5.webp'
import image6 from '@/assets/images/setup/6.webp'

const activeStep = ref(0)

const steps = [
  {
    title: 'Team Name',
    image: image1,
    caption: 'Step 1: Define your team\'s purpose'
  },
  {
    title: 'Schedule',
    image: image2,
    caption: 'Step 2: Set your call center hours'
  },
  {
    title: 'Languages',
    image: image3,
    caption: 'Step 3: Choose supported languages'
  },
  {
    title: 'Call Lines',
    image: image4,
    caption: 'Step 4: Assign call lines and queues'
  },
  {
    title: 'Preferences',
    image: image5,
    caption: 'Step 5: Customize preferences'
  },
  {
    title: 'Review & Launch',
    image: image6,
    caption: 'Step 6: Review & launch your center'
  }
]

let autoRotateTimer = null

function nextStep() {
  activeStep.value = (activeStep.value + 1) % steps.length
  resetAutoRotate()
}

function previousStep() {
  activeStep.value = (activeStep.value - 1 + steps.length) % steps.length
  resetAutoRotate()
}

function resetAutoRotate() {
  clearInterval(autoRotateTimer)
  autoRotateTimer = setInterval(() => {
    nextStep()
  }, 5000) // Auto-rotate every 5 seconds
}

onMounted(() => {
  resetAutoRotate()
})

onUnmounted(() => {
  clearInterval(autoRotateTimer)
})
</script>

