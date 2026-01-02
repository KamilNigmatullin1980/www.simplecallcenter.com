<template>
  <div class="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl shadow-xl border-2 border-purple-200 dark:border-purple-700 p-6 sm:p-8">
    <div class="flex items-center gap-4 mb-6">
      <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500 text-white shadow-lg flex items-center justify-center text-2xl">
        🧮
      </div>
      <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
        Pricing Calculator
      </h2>
    </div>
    <p class="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-8">
      See how many minutes you can get for your monthly budget
    </p>

    <!-- Two Column Layout -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <!-- Left Column: Controls -->
      <div>
        <!-- Plan Selector -->
        <div class="mb-6">
          <label class="block text-base font-semibold text-gray-900 dark:text-white mb-3">
            Select Your Monthly Plan
          </label>
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <button
              v-for="plan in planOptions"
              :key="plan"
              @click="selectedPlan = plan"
              :class="[
                'px-4 py-3 rounded-lg font-bold text-base transition-all duration-200',
                selectedPlan === plan
                  ? 'bg-purple-600 text-white shadow-lg scale-105'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:border-purple-400 dark:hover:border-purple-500'
              ]"
            >
              ${{ plan }}
            </button>
          </div>
        </div>

        <!-- Feature Toggles -->
        <div class="space-y-4">
          <!-- Call Type -->
          <div class="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-200 dark:border-gray-700">
            <div class="flex items-center gap-3 mb-3">
              <i class="uil uil-phone text-purple-600 dark:text-purple-400 text-2xl"></i>
              <span class="font-semibold text-gray-900 dark:text-white text-base">Call Direction</span>
              <span class="text-xs bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-2 py-1 rounded-full">Required</span>
            </div>
            <div class="grid grid-cols-2 gap-3">
              <button
                @click="callType = 'inbound'"
                :class="[
                  'px-4 py-2 rounded-lg font-medium text-sm transition-all',
                  callType === 'inbound'
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600'
                ]"
              >
                Inbound ($0.0025/min)
              </button>
              <button
                @click="callType = 'outbound'"
                :class="[
                  'px-4 py-2 rounded-lg font-medium text-sm transition-all',
                  callType === 'outbound'
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600'
                ]"
              >
                Outbound ($0.0065/min)
              </button>
            </div>
          </div>

          <!-- Recording -->
          <div class="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-200 dark:border-gray-700">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-3">
                <i class="uil uil-record-video text-purple-600 dark:text-purple-400 text-2xl"></i>
                <div>
                  <span class="font-semibold text-gray-900 dark:text-white text-base block">Call Recording</span>
                  <span class="text-xs text-gray-500 dark:text-gray-400">+$0.002/min</span>
                </div>
              </div>
              <button
                @click="toggleRecording"
                :class="[
                  'relative inline-flex h-7 w-14 items-center rounded-full transition-colors',
                  recordingEnabled ? 'bg-purple-600' : 'bg-gray-300 dark:bg-gray-600'
                ]"
              >
                <span
                  :class="[
                    'inline-block h-5 w-5 transform rounded-full bg-white transition-transform',
                    recordingEnabled ? 'translate-x-8' : 'translate-x-1'
                  ]"
                />
              </button>
            </div>
          </div>

          <!-- Transcription -->
          <div class="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-200 dark:border-gray-700">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-3">
                <i class="uil uil-file-alt text-purple-600 dark:text-purple-400 text-2xl"></i>
                <div>
                  <span class="font-semibold text-gray-900 dark:text-white text-base block">Transcription</span>
                  <span class="text-xs text-gray-500 dark:text-gray-400">+$0.012/min</span>
                  <span class="text-xs text-gray-500 dark:text-gray-400 block mt-1">Auto-enables recording</span>
                </div>
              </div>
              <button
                @click="toggleTranscription"
                :class="[
                  'relative inline-flex h-7 w-14 items-center rounded-full transition-colors',
                  transcriptionEnabled ? 'bg-purple-600' : 'bg-gray-300 dark:bg-gray-600'
                ]"
              >
                <span
                  :class="[
                    'inline-block h-5 w-5 transform rounded-full bg-white transition-transform',
                    transcriptionEnabled ? 'translate-x-8' : 'translate-x-1'
                  ]"
                />
              </button>
            </div>
          </div>

          <!-- AI Features -->
          <div class="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-200 dark:border-gray-700">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-3">
                <i class="uil uil-brain text-purple-600 dark:text-purple-400 text-2xl"></i>
                <div>
                  <span class="font-semibold text-gray-900 dark:text-white text-base block">AI Features</span>
                  <span class="text-xs text-gray-500 dark:text-gray-400">$0.02/call</span>
                  <span class="text-xs text-gray-500 dark:text-gray-400 block mt-1">Auto-enables transcription + recording</span>
                </div>
              </div>
              <button
                @click="toggleAI"
                :class="[
                  'relative inline-flex h-7 w-14 items-center rounded-full transition-colors',
                  aiEnabled ? 'bg-purple-600' : 'bg-gray-300 dark:bg-gray-600'
                ]"
              >
                <span
                  :class="[
                    'inline-block h-5 w-5 transform rounded-full bg-white transition-transform',
                    aiEnabled ? 'translate-x-8' : 'translate-x-1'
                  ]"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Column: Results (sticky) -->
      <div class="lg:sticky lg:top-8 lg:self-start space-y-4">
        <!-- Average Call Duration (for AI calculation) -->
        <div class="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-200 dark:border-gray-700">
          <div class="flex items-center gap-3 mb-3">
            <i class="uil uil-clock text-purple-600 dark:text-purple-400 text-2xl"></i>
            <span class="font-semibold text-gray-900 dark:text-white text-base">Average Call Duration</span>
          </div>
          <div class="grid grid-cols-5 gap-2">
            <button
              v-for="duration in [5, 10, 15, 20, 30]"
              :key="duration"
              @click="avgCallDuration = duration"
              :class="[
                'px-3 py-2 rounded-lg font-medium text-sm transition-all',
                avgCallDuration === duration
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600'
              ]"
            >
              {{ duration }}m
            </button>
          </div>
        </div>

        <div class="bg-white dark:bg-gray-800 rounded-xl border-2 border-purple-300 dark:border-purple-700 p-6">
          <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">What You Get for ${{ selectedPlan }}/month</h3>
          
          <!-- Minutes and Calls Display (stacked on mobile, side by side on desktop) -->
          <div class="flex flex-col sm:flex-row items-center gap-3 mb-6">
            <!-- Minutes Box -->
            <div class="w-full sm:flex-1 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-gray-700 dark:to-gray-800 rounded-xl p-5">
              <div class="text-center">
                <div class="text-4xl sm:text-5xl font-extrabold text-purple-600 dark:text-purple-400 mb-2">
                  {{ affordableMinutes.toLocaleString() }}
                </div>
                <div class="text-base sm:text-lg text-gray-700 dark:text-gray-300 font-semibold">
                  minutes
                </div>
                <div class="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  (~{{ affordableHours }} hours)
                </div>
              </div>
            </div>

            <!-- OR Divider (rotated on mobile, vertical on desktop) -->
            <div class="flex-shrink-0 py-2 sm:py-0 sm:px-2">
              <div class="text-xl font-bold text-gray-400 dark:text-gray-500">OR</div>
            </div>

            <!-- Calls Box -->
            <div class="w-full sm:flex-1 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-800 rounded-xl p-5">
              <div class="text-center">
                <div class="text-4xl sm:text-5xl font-extrabold text-purple-600 dark:text-purple-400 mb-2">
                  {{ affordableCalls }}
                </div>
                <div class="text-base sm:text-lg text-gray-700 dark:text-gray-300 font-semibold">
                  calls
                </div>
                <div class="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  ({{ avgCallDuration }} min each<span v-if="aiEnabled"> + AI</span>)
                </div>
              </div>
            </div>
          </div>

          <!-- Additional Context -->
          <div class="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-4 mb-4">
            <div class="text-center text-sm text-gray-600 dark:text-gray-400">
              <span class="font-medium text-gray-900 dark:text-white">{{ callType === 'inbound' ? 'Inbound' : 'Outbound' }} calling</span>
              <span v-if="aiEnabled" class="block mt-1">(including AI summaries & evaluation at $0.02/call)</span>
            </div>
          </div>

          <!-- Cost Breakdown -->
          <div class="border-t border-gray-200 dark:border-gray-700 pt-4 space-y-2">
            <div class="flex justify-between items-center text-sm">
              <span class="text-gray-600 dark:text-gray-400">
                {{ callType === 'inbound' ? 'Inbound' : 'Outbound' }} voice
              </span>
              <span class="font-mono text-gray-900 dark:text-white">
                ${{ (callType === 'inbound' ? 0.0025 : 0.0065).toFixed(4) }}/min
              </span>
            </div>
            
            <div v-if="recordingEnabled" class="flex justify-between items-center text-sm">
              <span class="text-gray-600 dark:text-gray-400">+ Recording</span>
              <span class="font-mono text-gray-900 dark:text-white">$0.0020/min</span>
            </div>
            
            <div v-if="transcriptionEnabled" class="flex justify-between items-center text-sm">
              <span class="text-gray-600 dark:text-gray-400">+ Transcription</span>
              <span class="font-mono text-gray-900 dark:text-white">$0.0120/min</span>
            </div>
            
            <div class="flex justify-between items-center font-semibold pt-2 border-t border-gray-200 dark:border-gray-700">
              <span class="text-gray-700 dark:text-gray-300">Combined rate per minute:</span>
              <span class="text-purple-600 dark:text-purple-400 font-mono">${{ costPerMinute.toFixed(4) }}/min</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// Pricing Calculator Variables
const planOptions = [20, 50, 100, 200, 500]
const selectedPlan = ref(20)
const callType = ref('inbound')
const recordingEnabled = ref(false)
const transcriptionEnabled = ref(false)
const aiEnabled = ref(false)
const avgCallDuration = ref(5) // Average call duration in minutes for AI calculation

// Toggle functions with cascade logic
const toggleRecording = () => {
  recordingEnabled.value = !recordingEnabled.value
  // If turning off recording, also turn off transcription and AI
  if (!recordingEnabled.value) {
    transcriptionEnabled.value = false
    aiEnabled.value = false
  }
}

const toggleTranscription = () => {
  transcriptionEnabled.value = !transcriptionEnabled.value
  
  if (transcriptionEnabled.value) {
    // If turning on transcription, automatically enable recording
    recordingEnabled.value = true
  } else {
    // If turning off transcription, also turn off AI
    aiEnabled.value = false
  }
}

const toggleAI = () => {
  aiEnabled.value = !aiEnabled.value
  
  if (aiEnabled.value) {
    // If turning on AI, automatically enable transcription and recording
    transcriptionEnabled.value = true
    recordingEnabled.value = true
  }
}

// Computed: Cost per minute based on enabled features
const costPerMinute = computed(() => {
  let cost = callType.value === 'inbound' ? 0.0025 : 0.0065
  if (recordingEnabled.value) cost += 0.002
  if (transcriptionEnabled.value) cost += 0.012
  return cost
})

// Computed: How many minutes can they afford with their plan
const affordableMinutes = computed(() => {
  if (aiEnabled.value) {
    // With AI: need to account for $0.02 per call
    // Cost per call = (costPerMinute * avgCallDuration) + $0.02
    const costPerCall = (costPerMinute.value * avgCallDuration.value) + 0.02
    const numberOfCalls = Math.floor(selectedPlan.value / costPerCall)
    return Math.floor(numberOfCalls * avgCallDuration.value)
  } else {
    // Without AI: simple division
    return Math.floor(selectedPlan.value / costPerMinute.value)
  }
})

// Computed: How many hours they can afford
const affordableHours = computed(() => {
  return Math.floor(affordableMinutes.value / 60)
})

// Computed: How many calls based on average duration
const affordableCalls = computed(() => {
  if (aiEnabled.value) {
    // With AI: account for $0.02 per call
    const costPerCall = (costPerMinute.value * avgCallDuration.value) + 0.02
    return Math.floor(selectedPlan.value / costPerCall)
  } else {
    // Without AI: just divide total minutes by call duration
    return Math.floor(affordableMinutes.value / avgCallDuration.value)
  }
})
</script>

