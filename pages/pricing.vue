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
          <span class="text-purple-800 dark:text-purple-300">Pricing</span>
        </h1>
        <p class="text-lg sm:text-xl lg:text-2xl text-gray-700 dark:text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
          Simple, usage-based pricing for inbound call centers. No per-seat fees — add as many agents as you want, pay only for actual usage.
        </p>
      </div>

      <!-- Pricing Calculator -->
      <div class="max-w-5xl mx-auto mb-12 lg:mb-20">
        <PricingCalculator />
      </div>

      <!-- Usage Rates Section -->
      <div class="max-w-7xl mx-auto mb-12 lg:mb-20">
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-4 sm:p-6 lg:p-12">
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 text-center">
            Usage Rates
          </h2>
          <p class="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 lg:mb-10 text-center max-w-3xl mx-auto px-2">
            The per-minute and AI rates are the same for all call center plans and direct numbers. We first deduct usage from your included monthly balance. Once it's used up, out-of-subscription rates apply.
          </p>

          <!-- Voice Rates Table -->
          <div class="mb-8 sm:mb-12">
            <div class="flex items-center mb-4 sm:mb-6">
              <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500 text-white shadow-lg flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                <i class="uil uil-phone text-xl sm:text-2xl"></i>
              </div>
              <h3 class="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Voice Rates</h3>
            </div>
            <!-- Mobile Card Layout -->
            <div class="md:hidden space-y-3">
              <div
                v-for="(rate, ridx) in voiceRates"
                :key="ridx"
                class="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 border border-gray-200 dark:border-gray-600"
              >
                <div class="font-semibold text-gray-900 dark:text-white mb-3 text-sm">{{ rate.type }}</div>
                <div class="grid grid-cols-2 gap-3">
                  <div>
                    <div class="text-xs text-gray-500 dark:text-gray-400 mb-1">In Subscription</div>
                    <span class="inline-flex items-center px-2 py-1 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 font-bold text-sm">
                      ${{ rate.inSubscription }}
                    </span>
                  </div>
                  <div>
                    <div class="text-xs text-gray-500 dark:text-gray-400 mb-1">Out of Subscription</div>
                    <span class="inline-flex items-center px-2 py-1 rounded-lg bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 font-bold text-sm">
                      ${{ rate.outOfSubscription }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <!-- Desktop Table Layout -->
            <div class="hidden md:block overflow-x-auto -mx-4 sm:mx-0">
              <div class="inline-block min-w-full align-middle px-4 sm:px-0">
                <table class="w-full">
                  <thead>
                    <tr class="border-b-2 border-gray-200 dark:border-gray-700">
                      <th class="text-left py-3 px-3 sm:py-4 sm:px-6 font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Type</th>
                      <th class="text-center py-3 px-3 sm:py-4 sm:px-6 font-semibold text-gray-900 dark:text-white text-xs sm:text-base">In Subscription</th>
                      <th class="text-center py-3 px-3 sm:py-4 sm:px-6 font-semibold text-gray-900 dark:text-white text-xs sm:text-base">Out of Subscription</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(rate, ridx) in voiceRates"
                      :key="ridx"
                      class="border-b border-gray-100 dark:border-gray-700 hover:bg-purple-50/50 dark:hover:bg-purple-900/20 transition-all duration-200"
                    >
                      <td class="py-3 px-3 sm:py-4 sm:px-6 text-gray-700 dark:text-gray-300 font-medium text-sm sm:text-base">{{ rate.type }}</td>
                      <td class="py-3 px-3 sm:py-4 sm:px-6 text-center">
                        <span class="inline-flex items-center px-2 py-1 sm:px-3 sm:py-1 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 font-bold text-xs sm:text-sm">
                          ${{ rate.inSubscription }}
                        </span>
                      </td>
                      <td class="py-3 px-3 sm:py-4 sm:px-6 text-center">
                        <span class="inline-flex items-center px-2 py-1 sm:px-3 sm:py-1 rounded-lg bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 font-bold text-xs sm:text-sm">
                          ${{ rate.outOfSubscription }}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="mt-4 sm:mt-6 p-3 sm:p-4 rounded-xl bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800">
              <p class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 font-medium">
                <strong class="text-purple-600 dark:text-purple-400">Internal calls between your users are free.</strong> We only bill minutes for calls that touch the phone network (PSTN) or external numbers.
              </p>
            </div>
          </div>

          <!-- Call Recording Table -->
          <div class="mb-8 sm:mb-12">
            <div class="flex items-center mb-4 sm:mb-6">
              <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500 text-white shadow-lg flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                <i class="uil uil-record-video text-xl sm:text-2xl"></i>
              </div>
              <h3 class="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Call Recording</h3>
            </div>
            <!-- Mobile Card Layout -->
            <div class="md:hidden">
              <div class="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 border border-gray-200 dark:border-gray-600">
                <div class="font-semibold text-gray-900 dark:text-white mb-3 text-sm">Call recording / minute</div>
                <div class="grid grid-cols-2 gap-3">
                  <div>
                    <div class="text-xs text-gray-500 dark:text-gray-400 mb-1">In Subscription</div>
                    <span class="inline-flex items-center px-2 py-1 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 font-bold text-sm">
                      ${{ recordingRates.inSubscription }}
                    </span>
                  </div>
                  <div>
                    <div class="text-xs text-gray-500 dark:text-gray-400 mb-1">Out of Subscription</div>
                    <span class="inline-flex items-center px-2 py-1 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 font-bold text-sm">
                      ${{ recordingRates.outOfSubscription }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <!-- Desktop Table Layout -->
            <div class="hidden md:block overflow-x-auto -mx-4 sm:mx-0">
              <div class="inline-block min-w-full align-middle px-4 sm:px-0">
                <table class="w-full">
                  <thead>
                    <tr class="border-b-2 border-gray-200 dark:border-gray-700">
                      <th class="text-left py-3 px-3 sm:py-4 sm:px-6 font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Type</th>
                      <th class="text-center py-3 px-3 sm:py-4 sm:px-6 font-semibold text-gray-900 dark:text-white text-xs sm:text-base">In Subscription</th>
                      <th class="text-center py-3 px-3 sm:py-4 sm:px-6 font-semibold text-gray-900 dark:text-white text-xs sm:text-base">Out of Subscription</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="border-b border-gray-100 dark:border-gray-700 hover:bg-purple-50/50 dark:hover:bg-purple-900/20 transition-all duration-200">
                      <td class="py-3 px-3 sm:py-4 sm:px-6 text-gray-700 dark:text-gray-300 font-medium text-sm sm:text-base">Call recording / minute</td>
                      <td class="py-3 px-3 sm:py-4 sm:px-6 text-center">
                        <span class="inline-flex items-center px-2 py-1 sm:px-3 sm:py-1 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 font-bold text-xs sm:text-sm">
                          ${{ recordingRates.inSubscription }}
                        </span>
                      </td>
                      <td class="py-3 px-3 sm:py-4 sm:px-6 text-center">
                        <span class="inline-flex items-center px-2 py-1 sm:px-3 sm:py-1 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 font-bold text-xs sm:text-sm">
                          ${{ recordingRates.outOfSubscription }}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="mt-4 sm:mt-6 p-3 sm:p-4 rounded-xl bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800">
              <p class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 font-medium">
                <span class="font-bold text-purple-600 dark:text-purple-400">ℹ️</span> Recording can be enabled per queue, per number, or per agent.
              </p>
            </div>
          </div>

          <!-- Transcription & AI Table -->
          <div class="mb-8 sm:mb-12">
            <div class="flex items-center mb-4 sm:mb-6">
              <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500 text-white shadow-lg flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                <i class="uil uil-brain text-xl sm:text-2xl"></i>
              </div>
              <h3 class="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Transcription & AI</h3>
            </div>
            <!-- Mobile Card Layout -->
            <div class="md:hidden space-y-3">
              <div
                v-for="(item, tidx) in transcriptionRates"
                :key="tidx"
                class="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 border border-gray-200 dark:border-gray-600"
              >
                <div class="font-semibold text-gray-900 dark:text-white mb-3 text-sm">
                  {{ item.type }}
                  <span v-if="item.note" class="ml-2 text-xs text-gray-500 dark:text-gray-400">*</span>
                </div>
                <div class="grid grid-cols-2 gap-3">
                  <div>
                    <div class="text-xs text-gray-500 dark:text-gray-400 mb-1">In Subscription</div>
                    <span class="inline-flex items-center px-2 py-1 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 font-bold text-sm">
                      {{ item.inSubscription }}
                    </span>
                  </div>
                  <div>
                    <div class="text-xs text-gray-500 dark:text-gray-400 mb-1">Out of Subscription</div>
                    <span class="inline-flex items-center px-2 py-1 rounded-lg bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 font-bold text-sm">
                      {{ item.outOfSubscription }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <!-- Desktop Table Layout -->
            <div class="hidden md:block overflow-x-auto -mx-4 sm:mx-0">
              <div class="inline-block min-w-full align-middle px-4 sm:px-0">
                <table class="w-full">
                  <thead>
                    <tr class="border-b-2 border-gray-200 dark:border-gray-700">
                      <th class="text-left py-3 px-3 sm:py-4 sm:px-6 font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Type</th>
                      <th class="text-center py-3 px-3 sm:py-4 sm:px-6 font-semibold text-gray-900 dark:text-white text-xs sm:text-base">In Subscription</th>
                      <th class="text-center py-3 px-3 sm:py-4 sm:px-6 font-semibold text-gray-900 dark:text-white text-xs sm:text-base">Out of Subscription</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(item, tidx) in transcriptionRates"
                      :key="tidx"
                      class="border-b border-gray-100 dark:border-gray-700 hover:bg-purple-50/50 dark:hover:bg-purple-900/20 transition-all duration-200"
                    >
                      <td class="py-3 px-3 sm:py-4 sm:px-6 text-gray-700 dark:text-gray-300 font-medium text-sm sm:text-base">
                        {{ item.type }}
                        <span v-if="item.note" class="ml-2 text-xs text-gray-500 dark:text-gray-400">*</span>
                      </td>
                      <td class="py-3 px-3 sm:py-4 sm:px-6 text-center">
                        <span class="inline-flex items-center px-2 py-1 sm:px-3 sm:py-1 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 font-bold text-xs sm:text-sm">
                          {{ item.inSubscription }}
                        </span>
                      </td>
                      <td class="py-3 px-3 sm:py-4 sm:px-6 text-center">
                        <span class="inline-flex items-center px-2 py-1 sm:px-3 sm:py-1 rounded-lg bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 font-bold text-xs sm:text-sm">
                          {{ item.outOfSubscription }}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="mt-4 sm:mt-6 p-3 sm:p-4 rounded-xl bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800">
              <p class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 font-medium">
                <span class="font-bold text-purple-600 dark:text-purple-400">*</span> Actual cost depends on call duration. Short calls usually cost only a few cents, long calls up to 10–15¢.
              </p>
            </div>
          </div>

          <!-- Fax & OCR Table (Merged from Fax tab) -->
          <div>
            <div class="flex items-center mb-4 sm:mb-6">
              <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500 text-white shadow-lg flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                <i class="uil uil-file-alt text-xl sm:text-2xl"></i>
              </div>
              <h3 class="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Fax & OCR</h3>
            </div>
            <!-- Mobile Card Layout -->
            <div class="md:hidden space-y-3">
              <div
                v-for="(item, fidx) in faxOcrRates"
                :key="fidx"
                class="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 border border-gray-200 dark:border-gray-600"
              >
                <div class="font-semibold text-gray-900 dark:text-white mb-3 text-sm">{{ item.type }}</div>
                <div class="grid grid-cols-2 gap-3">
                  <div>
                    <div class="text-xs text-gray-500 dark:text-gray-400 mb-1">In Subscription</div>
                    <span class="inline-flex items-center px-2 py-1 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 font-bold text-sm">
                      ${{ item.inSubscription }}
                    </span>
                  </div>
                  <div>
                    <div class="text-xs text-gray-500 dark:text-gray-400 mb-1">Out of Subscription</div>
                    <span class="inline-flex items-center px-2 py-1 rounded-lg bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 font-bold text-sm">
                      ${{ item.outOfSubscription }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <!-- Desktop Table Layout -->
            <div class="hidden md:block overflow-x-auto -mx-4 sm:mx-0">
              <div class="inline-block min-w-full align-middle px-4 sm:px-0">
                <table class="w-full">
                  <thead>
                    <tr class="border-b-2 border-gray-200 dark:border-gray-700">
                      <th class="text-left py-3 px-3 sm:py-4 sm:px-6 font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Type</th>
                      <th class="text-center py-3 px-3 sm:py-4 sm:px-6 font-semibold text-gray-900 dark:text-white text-xs sm:text-base">In Subscription</th>
                      <th class="text-center py-3 px-3 sm:py-4 sm:px-6 font-semibold text-gray-900 dark:text-white text-xs sm:text-base">Out of Subscription</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(item, fidx) in faxOcrRates"
                      :key="fidx"
                      class="border-b border-gray-100 dark:border-gray-700 hover:bg-purple-50/50 dark:hover:bg-purple-900/20 transition-all duration-200"
                    >
                      <td class="py-3 px-3 sm:py-4 sm:px-6 text-gray-700 dark:text-gray-300 font-medium text-sm sm:text-base">{{ item.type }}</td>
                      <td class="py-3 px-3 sm:py-4 sm:px-6 text-center">
                        <span class="inline-flex items-center px-2 py-1 sm:px-3 sm:py-1 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 font-bold text-xs sm:text-sm">
                          ${{ item.inSubscription }}
                        </span>
                      </td>
                      <td class="py-3 px-3 sm:py-4 sm:px-6 text-center">
                        <span class="inline-flex items-center px-2 py-1 sm:px-3 sm:py-1 rounded-lg bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 font-bold text-xs sm:text-sm">
                          ${{ item.outOfSubscription }}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Call Center Plans Section -->
      <div class="max-w-7xl mx-auto mb-20">
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 lg:p-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Call Center Plans
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 mb-10 text-center max-w-3xl mx-auto">
            Simple, usage-based pricing for inbound call centers. No per-seat fees — add as many agents as you want, pay only for actual usage.
          </p>

          <!-- All Features Included -->
          <div class="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-700 dark:to-gray-800 rounded-2xl p-8 mb-12 border border-purple-100 dark:border-gray-600">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500 text-white shadow-lg flex items-center justify-center mr-4">
                <i class="uil uil-check-circle text-2xl"></i>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white">
                All call center plans include <span class="text-purple-600 dark:text-purple-400">all features</span>:
              </h3>
            </div>
            <div class="grid md:grid-cols-2 gap-4">
              <div
                v-for="(feature, fidx) in allFeatures"
                :key="fidx"
                class="flex items-start group"
              >
                <div class="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center mr-3 mt-0.5 shadow-md group-hover:scale-110 transition-transform">
                  <i class="uil uil-check text-sm text-white"></i>
                </div>
                <span class="text-gray-700 dark:text-gray-200 font-medium group-hover:text-gray-900 dark:group-hover:text-white transition-colors">{{ feature }}</span>
              </div>
            </div>
            <div class="pt-6 mt-6 border-t border-purple-200 dark:border-gray-600">
              <p class="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                The only difference between plans is how much <strong class="text-gray-900 dark:text-white">monthly usage credit</strong> is included. If you go over the included credit, additional usage is billed at standard rates.
              </p>
            </div>
          </div>

          <!-- Plans Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div
              v-for="(plan, idx) in callcenterPlans"
              :key="idx"
              class="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-2xl hover:border-purple-300 dark:hover:border-purple-600 hover:-translate-y-1 transition-all duration-300"
            >
              <div class="flex items-center justify-between mb-6">
                <h4 class="text-2xl font-bold text-gray-900 dark:text-white">{{ plan.name }}</h4>
                <div v-if="plan.name === 'Growth'" class="px-3 py-1 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 text-white text-xs font-semibold uppercase tracking-wide shadow-md">
                  Popular
                </div>
              </div>
              
              <div class="mb-5">
                <div class="flex items-baseline">
                  <span class="text-4xl font-extrabold bg-gradient-to-r from-purple-600 to-purple-600 dark:from-purple-400 dark:to-purple-400 bg-clip-text text-transparent">${{ plan.price }}</span>
                  <span class="text-gray-500 dark:text-gray-400 ml-2 text-sm">/ month per call center</span>
                </div>
              </div>
              
              <div class="mb-6 p-3 rounded-xl bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800">
                <p class="text-gray-700 dark:text-gray-200 text-sm font-medium">
                  Includes <strong class="text-purple-600 dark:text-purple-400">${{ plan.price }}</strong> of usage.
                  <span v-if="plan.price === '20'" class="block mt-1 text-xs text-gray-600 dark:text-gray-300">
                    (About 8,000 minutes of inbound calls)
                  </span>
                  <span v-if="plan.price === '50'" class="block mt-1 text-xs text-gray-600 dark:text-gray-300">
                    (About 20,000 minutes of inbound calls)
                  </span>
                  <span v-if="plan.price === '100'" class="block mt-1 text-xs text-gray-600 dark:text-gray-300">
                    (About 40,000 minutes of inbound calls)
                  </span>
                  <span v-if="plan.price === '200'" class="block mt-1 text-xs text-gray-600 dark:text-gray-300">
                    (About 80,000 minutes of inbound calls)
                  </span>
                </p>
              </div>
              
              <div class="mb-6">
                <p class="font-bold text-gray-900 dark:text-white mb-3 text-base flex items-center">
                  <i class="uil uil-bolt text-purple-600 dark:text-purple-400 mr-2"></i>
                  Best if you:
                </p>
                <ul class="space-y-2">
                  <li
                    v-for="(useCase, uidx) in plan.bestIf"
                    :key="uidx"
                    class="flex items-start text-gray-600 dark:text-gray-300 text-sm group/item"
                  >
                    <span class="flex-shrink-0 w-2 h-2 rounded-full bg-purple-500 mt-2 mr-2 group-hover/item:scale-150 transition-transform"></span>
                    <span class="leading-relaxed">{{ useCase }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- How Billing Works -->
          <div class="mt-16 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-700 dark:to-gray-800 rounded-2xl p-8 lg:p-10 border border-purple-100 dark:border-gray-600">
            <h3 class="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              How Billing Works
            </h3>
            <ol class="space-y-6 max-w-4xl mx-auto">
              <li
                v-for="(step, sidx) in billingSteps"
                :key="sidx"
                class="flex items-start group"
              >
                <div class="flex-shrink-0 relative">
                  <span class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500 text-white rounded-xl flex items-center justify-center font-extrabold text-lg mr-6 shadow-lg group-hover:scale-110 transition-transform">
                    {{ sidx + 1 }}
                  </span>
                  <div v-if="sidx < billingSteps.length - 1" class="absolute left-6 top-12 w-0.5 h-8 bg-gradient-to-b from-purple-300 to-purple-300 dark:from-purple-600 dark:to-purple-600"></div>
                </div>
                <div class="pt-2 flex-1">
                  <span class="text-gray-800 dark:text-gray-100 text-lg leading-relaxed font-medium">{{ step }}</span>
                </div>
              </li>
            </ol>
          </div>

          <!-- Pricing Comparison Summary -->
          <div class="mt-12">
            <section class="sip-burn bg-zinc-50 dark:bg-gray-800 p-6 lg:p-8 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg">
              <h2 class="text-xl lg:text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                Most Platforms Charge More — and Give You Less
              </h2>
              <p class="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                Many voice providers charge more — and deliver less.
              </p>
              <p class="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                For example, a common DIY option like Twilio offers only raw telephony. You'll pay:
              </p>
              <ul class="space-y-3 mb-6 text-gray-700 dark:text-gray-300">
                <li class="flex items-start gap-3">
                  <span class="text-xl">🔶</span>
                  <span>Over 3× more for inbound minutes</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="text-xl">🔶</span>
                  <span>About 2× more for outbound minutes</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="text-xl">❌</span>
                  <span>No built-in dashboards, AI summaries, voicemail handling, or agent tools</span>
                </li>
              </ul>
              <div class="mb-6 p-4 rounded-lg bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800">
                <p class="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <span class="text-xl">💡</span>
                  <span>Why Teams Choose SimpleCallCenter</span>
                </p>
                <ul class="space-y-2 text-gray-700 dark:text-gray-300">
                  <li class="flex items-start gap-2">
                    <span class="text-green-600 dark:text-green-400">✅</span>
                    <span>Lower per-minute rates</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="text-green-600 dark:text-green-400">✅</span>
                    <span>Full platform included (routing, AI, live coaching, recordings, and more)</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="text-green-600 dark:text-green-400">✅</span>
                    <span>No seat fees. No setup fees. No hidden charges.</span>
                  </li>
                </ul>
              </div>
              <p class="mb-2 text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                Everything you need — without the buildout, overhead, or surprises.
              </p>
              <p class="text-sm text-gray-500 dark:text-gray-400">
                Comparisons are based on public SIP trunking rates from Twilio as of Dec 2025. Twilio is a registered trademark of Twilio Inc.
              </p>
            </section>
          </div>
        </div>
      </div>

      <!-- Direct Numbers & Fax Section -->
      <div class="max-w-7xl mx-auto mb-20">
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 lg:p-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Direct Numbers & Fax
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 mb-10 text-center max-w-3xl mx-auto">
            Personal direct numbers for individual users with voice and fax support
          </p>

          <!-- Standard DID Plan -->
          <div class="max-w-3xl mx-auto mb-12">
            <div class="group relative bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-700 dark:to-gray-800 rounded-2xl p-8 border border-purple-100 dark:border-gray-600 hover:shadow-lg hover:border-purple-300 dark:hover:border-purple-500 transition-all duration-300">
              <div class="flex items-center justify-between mb-6">
                <h3 class="text-2xl font-bold text-gray-900 dark:text-white">Standard DID</h3>
              </div>
              
              <div class="mb-5">
                <div class="flex items-baseline">
                  <span class="text-4xl font-extrabold bg-gradient-to-r from-purple-600 to-purple-600 dark:from-purple-400 dark:to-purple-400 bg-clip-text text-transparent">${{ directNumberPlan.price }}</span>
                  <span class="text-gray-500 dark:text-gray-400 ml-2">/ month per number</span>
                </div>
              </div>
              
              <div class="mb-6 p-3 rounded-xl bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800">
                <p class="text-gray-700 dark:text-gray-200 text-sm font-medium">
                  Includes <strong class="text-purple-600 dark:text-purple-400">${{ directNumberPlan.price }}</strong> of usage.
                </p>
              </div>
              
              <ul class="space-y-2">
                <li
                  v-for="(feature, fidx) in directNumberPlan.features"
                  :key="fidx"
                  class="flex items-start group/item"
                >
                  <div class="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center mr-3 mt-0.5 shadow-md group-hover/item:scale-110 transition-transform">
                    <i class="uil uil-check text-sm text-white"></i>
                  </div>
                  <span class="text-gray-700 dark:text-gray-200 font-medium text-sm group-hover/item:text-gray-900 dark:group-hover/item:text-white transition-colors">{{ feature }}</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Note about rates -->
          <div class="mt-8 p-4 rounded-xl bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800">
            <p class="text-sm text-gray-700 dark:text-gray-300 font-medium">
              <strong class="text-purple-600 dark:text-purple-400">ℹ️</strong> Usage rates for direct numbers are the same as call center plans. See the Usage Rates section above for voice, recording, transcription, and AI rates.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import image from '@/assets/images/bg/bg-startup.webp'
import { useHead } from '#imports'
import PricingCalculator from '@/components/PricingCalculator.vue'

useHead({
  title: 'Pricing | SimpleCallCenter',
  meta: [
    {
      name: 'description',
      content:
        'Simple, usage-based pricing for inbound callcenters. Choose from flexible plans with included usage for minutes, recording, transcription & AI.',
    },
    {
      name: 'keywords',
      content:
        'usage-based call center pricing, inbound call center pricing, call center plans, per-minute call rates, call recording pricing, transcription pricing, AI call summary pricing, no per-seat fees, direct number pricing, SimpleCallCenter',
    },
    { property: 'og:title', content: 'Pricing | SimpleCallCenter' },
    {
      property: 'og:description',
      content:
        'Simple, usage-based pricing for inbound callcenters. Choose from flexible plans with included usage for minutes, recording, transcription & AI.',
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://simplecallcenter.com/pricing' },
  ],
})

// All features included in all callcenter plans
const allFeatures = ref([
  'Unlimited agents',
  'Unlimited queues and IVRs',
  'Call routing, ring strategies and schedules',
  'Call recording (configurable per queue/number/agent)',
  'Live monitoring & basic reports',
  'Transcription, AI call summaries and agent evaluation',
])

// Callcenter Plans
const callcenterPlans = ref([
  {
    name: 'Starter',
    price: '20',
    bestIf: [
      'Run a low-volume support or sales line',
      'Are piloting a new call center',
      'Expect only a few hundred short calls per month',
    ],
    cta: 'Choose Starter',
  },
  {
    name: 'Growth',
    price: '50',
    bestIf: [
      'Expect steady, growing inbound traffic',
      'Want room for more daily calls and AI usage',
      "Don't want to think about overage too often",
    ],
    cta: 'Choose Growth',
  },
  {
    name: 'Pro',
    price: '100',
    bestIf: [
      'Handle consistent, heavier daily traffic',
      'Record and transcribe a large share of calls',
      'Use AI summaries and evaluations regularly',
    ],
    cta: 'Choose Pro',
  },
  {
    name: 'Enterprise',
    price: '200',
    bestIf: [
      'Run a high-volume call center or multiple teams',
      'Have a lot of recorded and AI-processed calls',
      'Prefer a larger included buffer before any overage',
    ],
    cta: 'Contact sales',
  },
])

// How billing works steps
const billingSteps = ref([
  'Each call center has a monthly subscription (Starter / Growth / Pro / Enterprise).',
  'This subscription includes a usage credit (for example $20, $50, $100 or $200).',
  'All usage — minutes, recording, transcription and AI — is first deducted from this credit.',
  'After the credit is fully used, additional usage is billed at the out-of-subscription rates.',
  'The number of agents and queues is unlimited and does not affect the price — you only pay for actual usage.',
])

// Voice Rates for Callcenter
const voiceRates = ref([
  {
    type: 'Inbound calls / minute',
    inSubscription: '0.0025',
    outOfSubscription: '0.004',
  },
  {
    type: 'Outbound calls / minute',
    inSubscription: '0.0065',
    outOfSubscription: '0.010',
  },
])

// Call Recording Rates
const recordingRates = ref({
  inSubscription: '0.002',
  outOfSubscription: '0.002',
})

// Transcription & AI Rates
const transcriptionRates = ref([
  {
    type: 'Transcription / minute',
    inSubscription: '$0.012',
    outOfSubscription: '$0.018',
    note: false,
  },
  {
    type: 'AI call summary / call',
    inSubscription: 'from $0.01',
    outOfSubscription: 'from $0.015',
    note: true,
  },
  {
    type: 'Agent evaluation / call',
    inSubscription: 'from $0.01',
    outOfSubscription: 'from $0.015',
    note: true,
  },
])

// Direct Numbers & Fax Plan
const directNumberPlan = ref({
  price: '7',
  features: [
    'Local US & Canada numbers',
    'Voice + Fax on the same number',
    'Optional call recording',
    'Email delivery for faxes',
  ],
})

// Direct Number Voice Rates (same as call center rates)
const directNumberVoiceRates = ref([
  {
    type: 'Inbound calls / minute',
    inSubscription: '0.0025',
    outOfSubscription: '0.004',
  },
  {
    type: 'Outbound calls / minute',
    inSubscription: '0.0065',
    outOfSubscription: '0.010',
  },
  {
    type: 'Call recording / minute',
    inSubscription: '0.002',
    outOfSubscription: '0.002',
  },
])

// AI & Analytics Rates for Direct Numbers (same as call center rates)
const aiAnalyticsRates = ref([
  {
    type: 'Transcription / minute',
    inSubscription: '$0.012',
    outOfSubscription: '$0.018',
    note: false,
  },
  {
    type: 'AI call summary / call',
    inSubscription: 'from $0.01',
    outOfSubscription: 'from $0.015',
    note: true,
  },
  {
    type: 'Agent evaluation / call',
    inSubscription: 'from $0.01',
    outOfSubscription: 'from $0.015',
    note: true,
  },
])

// Fax & OCR Rates (merged into main usage section)
const faxOcrRates = ref([
  {
    type: 'Inbound fax / page',
    inSubscription: '0.02',
    outOfSubscription: '0.03',
  },
  {
    type: 'OCR / page',
    inSubscription: '0.02',
    outOfSubscription: '0.025',
  },
])
</script>

<style scoped>
/* All styling handled via Tailwind */
</style>
