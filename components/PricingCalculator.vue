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
          <div 
            class="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-200 dark:border-gray-700"
            :class="{ 'opacity-50': !recordingEnabled }"
          >
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-3">
                <i class="uil uil-file-alt text-purple-600 dark:text-purple-400 text-2xl"></i>
                <div>
                  <span class="font-semibold text-gray-900 dark:text-white text-base block">Transcription</span>
                  <span class="text-xs text-gray-500 dark:text-gray-400">+$0.012/min</span>
                  <span v-if="!recordingEnabled" class="text-xs text-orange-500 dark:text-orange-400 block mt-1">Requires recording</span>
                </div>
              </div>
              <button
                @click="toggleTranscription"
                :disabled="!recordingEnabled"
                :class="[
                  'relative inline-flex h-7 w-14 items-center rounded-full transition-colors',
                  transcriptionEnabled ? 'bg-purple-600' : 'bg-gray-300 dark:bg-gray-600',
                  !recordingEnabled && 'cursor-not-allowed'
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
          <div 
            class="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-200 dark:border-gray-700"
            :class="{ 'opacity-50': !transcriptionEnabled }"
          >
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-3">
                <i class="uil uil-brain text-purple-600 dark:text-purple-400 text-2xl"></i>
                <div>
                  <span class="font-semibold text-gray-900 dark:text-white text-base block">AI Features</span>
                  <span class="text-xs text-gray-500 dark:text-gray-400">$0.02/call</span>
                  <span v-if="!transcriptionEnabled" class="text-xs text-orange-500 dark:text-orange-400 block mt-1">Requires transcription</span>
                </div>
              </div>
              <button
                @click="toggleAI"
                :disabled="!transcriptionEnabled"
                :class="[
                  'relative inline-flex h-7 w-14 items-center rounded-full transition-colors',
                  aiEnabled ? 'bg-purple-600' : 'bg-gray-300 dark:bg-gray-600',
                  !transcriptionEnabled && 'cursor-not-allowed'
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
          
          <!-- Main Minutes Display -->
          <div class="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-gray-700 dark:to-gray-800 rounded-xl p-6 mb-6">
            <div class="text-center">
              <div class="text-5xl sm:text-6xl font-extrabold text-purple-600 dark:text-purple-400 mb-2">
                {{ affordableMinutes.toLocaleString() }}
              </div>
              <div class="text-lg sm:text-xl text-gray-700 dark:text-gray-300 font-semibold">
                minutes (~{{ affordableHours }} hours)
              </div>
              <div class="text-sm text-gray-600 dark:text-gray-400 mt-2">
                of {{ callType }} calling
              </div>
            </div>
          </div>

          <!-- Call Breakdown -->
          <div class="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 mb-4">
            <div class="flex items-start gap-3">
              <i class="uil uil-phone-alt text-blue-600 dark:text-blue-400 text-xl mt-0.5"></i>
              <div class="flex-1">
                <p class="text-sm font-semibold text-gray-900 dark:text-white mb-1">Estimated Call Volume:</p>
                <p class="text-sm text-gray-700 dark:text-gray-300">
                  You can handle approximately <strong>{{ affordableCalls }}</strong> calls of {{ avgCallDuration }} minutes each
                  <span v-if="aiEnabled" class="block mt-1 text-xs text-gray-600 dark:text-gray-400">(including AI summaries & evaluation at $0.02/call)</span>
                </p>
              </div>
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
  if (!recordingEnabled.value) return // Can't enable if recording is off
  transcriptionEnabled.value = !transcriptionEnabled.value
  // If turning off transcription, also turn off AI
  if (!transcriptionEnabled.value) {
    aiEnabled.value = false
  }
}

const toggleAI = () => {
  if (!transcriptionEnabled.value) return // Can't enable if transcription is off
  aiEnabled.value = !aiEnabled.value
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

