<template>
  <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 lg:p-10">
    <h3 class="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
      💰 Estimate Your Monthly Cost
    </h3>
    <p class="text-base text-gray-600 dark:text-gray-400 mb-8 text-center">
      Simple calculator — see what you'd pay based on your usage
    </p>

    <!-- Input Section -->
    <div class="space-y-6 mb-8">
      <!-- Inbound Minutes -->
      <div>
        <label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
          Inbound call minutes per month
        </label>
        <input
          v-model.number="inboundMinutes"
          type="number"
          min="0"
          step="100"
          class="w-full px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-800 transition-colors"
          placeholder="e.g., 1000"
        />
      </div>

      <!-- AI Features Toggle -->
      <div>
        <label class="flex items-center justify-between cursor-pointer group">
          <span class="text-sm font-semibold text-gray-700 dark:text-gray-300">
            Include AI features (transcription, summaries)
          </span>
          <div class="relative">
            <input
              v-model="includeAI"
              type="checkbox"
              class="sr-only peer"
            />
            <div class="w-14 h-7 bg-gray-300 dark:bg-gray-600 rounded-full peer peer-checked:bg-purple-600 transition-colors"></div>
            <div class="absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform peer-checked:translate-x-7 shadow-md"></div>
          </div>
        </label>
      </div>

      <!-- Recording Toggle -->
      <div>
        <label class="flex items-center justify-between cursor-pointer group">
          <span class="text-sm font-semibold text-gray-700 dark:text-gray-300">
            Record calls
          </span>
          <div class="relative">
            <input
              v-model="includeRecording"
              type="checkbox"
              class="sr-only peer"
            />
            <div class="w-14 h-7 bg-gray-300 dark:bg-gray-600 rounded-full peer peer-checked:bg-purple-600 transition-colors"></div>
            <div class="absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform peer-checked:translate-x-7 shadow-md"></div>
          </div>
        </label>
      </div>
    </div>

    <!-- Results Section -->
    <div class="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6 border-2 border-purple-200 dark:border-purple-800">
      <div class="mb-4">
        <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Estimated monthly cost:</p>
        <div class="flex items-baseline gap-2">
          <span class="text-4xl font-extrabold bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">
            ${{ estimatedCost.toFixed(2) }}
          </span>
          <span class="text-gray-500 dark:text-gray-400 text-sm">/ month</span>
        </div>
      </div>

      <!-- Recommended Plan -->
      <div class="pt-4 border-t border-purple-200 dark:border-purple-800">
        <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Recommended plan:</p>
        <div class="flex items-center justify-between">
          <span class="text-lg font-bold text-gray-900 dark:text-white">
            {{ recommendedPlan }}
          </span>
          <span class="px-3 py-1 rounded-full bg-purple-600 text-white text-xs font-semibold">
            ${{ planPrice }}/mo
          </span>
        </div>
        <p class="text-xs text-gray-600 dark:text-gray-400 mt-2">
          Includes ${{ planPrice }} credit. {{ overageText }}
        </p>
      </div>

      <!-- Breakdown -->
      <div class="mt-4 pt-4 border-t border-purple-200 dark:border-purple-800">
        <button
          @click="showBreakdown = !showBreakdown"
          class="text-sm text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-semibold flex items-center gap-1"
        >
          {{ showBreakdown ? '▼' : '▶' }} View breakdown
        </button>
        <div v-if="showBreakdown" class="mt-3 space-y-2 text-sm">
          <div class="flex justify-between text-gray-700 dark:text-gray-300">
            <span>Inbound minutes ({{ inboundMinutes }})</span>
            <span>${{ callCost.toFixed(2) }}</span>
          </div>
          <div v-if="includeRecording" class="flex justify-between text-gray-700 dark:text-gray-300">
            <span>Recording</span>
            <span>${{ recordingCost.toFixed(2) }}</span>
          </div>
          <div v-if="includeAI" class="flex justify-between text-gray-700 dark:text-gray-300">
            <span>AI features</span>
            <span>${{ aiCost.toFixed(2) }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA -->
    <div class="mt-6 text-center">
      <NuxtLink
        to="/pricing"
        class="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-semibold text-sm group"
      >
        See full pricing details
        <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const inboundMinutes = ref(2000)
const includeAI = ref(true)
const includeRecording = ref(false)
const showBreakdown = ref(false)

// Pricing constants (in-subscription rates)
const INBOUND_RATE = 0.0025
const RECORDING_RATE = 0.002
const TRANSCRIPTION_RATE = 0.012
const AI_SUMMARY_RATE = 0.01

// Calculate costs
const callCost = computed(() => inboundMinutes.value * INBOUND_RATE)
const recordingCost = computed(() => includeRecording.value ? inboundMinutes.value * RECORDING_RATE : 0)
const aiCost = computed(() => {
  if (!includeAI.value) return 0
  // Estimate: transcription + summary per ~10 min call
  const estimatedCalls = Math.ceil(inboundMinutes.value / 10)
  const transcriptionCost = inboundMinutes.value * TRANSCRIPTION_RATE
  const summaryCost = estimatedCalls * AI_SUMMARY_RATE
  return transcriptionCost + summaryCost
})

const estimatedCost = computed(() => {
  const total = callCost.value + recordingCost.value + aiCost.value
  return Math.ceil(total) // Round up to nearest dollar
})

// Recommend plan based on cost
const recommendedPlan = computed(() => {
  const cost = estimatedCost.value
  if (cost <= 20) return 'Starter'
  if (cost <= 50) return 'Growth'
  if (cost <= 100) return 'Pro'
  return 'Enterprise'
})

const planPrice = computed(() => {
  const plan = recommendedPlan.value
  if (plan === 'Starter') return '20'
  if (plan === 'Growth') return '50'
  if (plan === 'Pro') return '100'
  return '200'
})

const overageText = computed(() => {
  const cost = estimatedCost.value
  const price = parseInt(planPrice.value)
  if (cost <= price) {
    return 'No overage expected.'
  }
  const overage = cost - price
  return `~$${overage.toFixed(0)} overage at standard rates.`
})
</script>

<style scoped>
/* Remove spinner from number input */
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}
</style>


