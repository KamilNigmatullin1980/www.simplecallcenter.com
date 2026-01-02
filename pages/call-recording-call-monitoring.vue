<script setup lang="ts">
    const runtimeConfig = useRuntimeConfig();
    const url = computed(() => {
      const siteUrl = (runtimeConfig.public?.siteUrl as string) || 'https://www.simplecallcenter.com';
      const baseUrl = siteUrl.endsWith('/') ? siteUrl.slice(0, -1) : siteUrl;
      return baseUrl + '/call-recording-call-monitoring/';
    });
    
    const title = 'Call Recording & Call Monitoring Software (QA, Coaching) | SimpleCallCenter';
    const description =
      'Call recording and call monitoring software for support and sales teams: record calls for QA, coaching, and compliance, review performance with reporting, and optionally add transcription and AI summaries. Usage-based pricing, no per-seat fees.';
    
    useSeoMeta({
      title,
      description,
      ogTitle: title,
      ogDescription: description,
      ogType: 'website',
      ogUrl: url.value,
      twitterCard: 'summary_large_image',
    });
    
    useHead({
      link: [{ rel: 'canonical', href: url.value }],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: title,
            description: description,
            url: url.value,
            publisher: {
              '@type': 'Organization',
              name: 'Simple Communications, LLC',
              alternateName: 'SimpleCallCenter',
              url: 'https://www.simplecallcenter.com',
            },
          }),
        },
      ],
    });
    
    const pricingHref = '/pricing/';
    const featuresHref = '/features/';
    const supportHref = '/customer-support-call-center-software/';
    const salesHref = '/sales-call-center-software/';
    
    const authModal = useAuthModal();
    </script>
    
    <template>
      <main>
        <!-- HERO -->
        <section class="w-full bg-cover bg-center relative overflow-hidden py-16 lg:py-24" aria-labelledby="page-title">
          <div class="absolute inset-0 bg-gradient-to-b from-white/80 to-white/60 dark:from-gray-900/80 dark:to-gray-900/60"></div>
          <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="max-w-4xl mx-auto">
              <p class="text-sm uppercase tracking-wider text-gray-600 dark:text-gray-400 mb-4">Call recording & monitoring</p>
    
              <h1 id="page-title" class="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                Call Recording & Call Monitoring Software — QA, Coaching, and Consistency
              </h1>
    
              <p class="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl">
                Record calls for quality assurance, training, and documentation. Monitor performance with reporting, and
                optionally add transcription and AI summaries when you want faster review — with usage-based pricing and no per-seat fees.
              </p>
    
              <div class="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                  @click="authModal.open()"
                  class="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-800 hover:from-purple-500 hover:via-purple-600 hover:to-indigo-700 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/50 text-lg"
                >
                  Try It Live — $1 Credit
                </button>
    
                <NuxtLink
                  class="inline-flex items-center justify-center px-8 py-4 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white font-bold rounded-full transition-all duration-300 hover:border-purple-500 dark:hover:border-purple-400 text-lg"
                  :to="pricingHref"
                >
                  View Pricing
                </NuxtLink>
              </div>
    
              <ul class="flex flex-wrap gap-3">
                <li class="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm font-medium">
                  QA & coaching
                </li>
                <li class="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm font-medium">
                  Optional transcription + AI
                </li>
                <li class="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm font-medium">
                  No seat fees
                </li>
              </ul>
            </div>
          </div>
        </section>
    
        <!-- WHY RECORDING / MONITORING -->
        <section class="w-full bg-white dark:bg-gray-900 py-16 lg:py-24" aria-labelledby="why">
          <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-4xl mx-auto">
              <h2 id="why" class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-8">
                Why call recording and monitoring matters
              </h2>
    
              <ul class="space-y-4 mb-6">
                <li class="flex items-start gap-3 text-lg text-gray-700 dark:text-gray-300">
                  <span class="text-purple-600 dark:text-purple-400 font-bold mt-1">•</span>
                  <span><strong>QA and coaching</strong>: spot issues and improve scripts faster.</span>
                </li>
                <li class="flex items-start gap-3 text-lg text-gray-700 dark:text-gray-300">
                  <span class="text-purple-600 dark:text-purple-400 font-bold mt-1">•</span>
                  <span><strong>Consistency</strong>: make customer experience less dependent on one “star agent.”</span>
                </li>
                <li class="flex items-start gap-3 text-lg text-gray-700 dark:text-gray-300">
                  <span class="text-purple-600 dark:text-purple-400 font-bold mt-1">•</span>
                  <span><strong>Dispute resolution</strong>: reduce “he said/she said” situations.</span>
                </li>
                <li class="flex items-start gap-3 text-lg text-gray-700 dark:text-gray-300">
                  <span class="text-purple-600 dark:text-purple-400 font-bold mt-1">•</span>
                  <span><strong>Process improvement</strong>: find patterns in what customers ask and where calls get stuck.</span>
                </li>
              </ul>
    
              <p class="text-lg text-gray-600 dark:text-gray-400 italic">
                The goal isn’t to “spy” — it’s to create a fast feedback loop and protect your team.
              </p>
            </div>
          </div>
        </section>
    
        <!-- WHAT YOU CAN DO -->
        <section class="w-full bg-gray-50 dark:bg-gray-800 py-16 lg:py-24" aria-labelledby="capabilities">
          <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-6xl mx-auto">
              <h2 id="capabilities" class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                What you can do with recordings (practical uses)
              </h2>
              <p class="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-12 text-center max-w-3xl mx-auto">
                Recording is most valuable when it’s paired with a simple workflow for review and improvement.
              </p>
    
              <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">QA sampling</h3>
                  <p class="text-gray-700 dark:text-gray-300">
                    Record all calls or only specific queues/agents, then review a sample each week for quality.
                  </p>
                </div>
    
                <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">Coaching & training</h3>
                  <p class="text-gray-700 dark:text-gray-300">
                    Use real calls to onboard new agents and improve handling of common scenarios.
                  </p>
                </div>
    
                <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">Documentation</h3>
                  <p class="text-gray-700 dark:text-gray-300">
                    Keep a clear record of what was promised, what was agreed, and what happened.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
    
        <!-- OPTIONAL AI LAYER -->
        <section class="w-full bg-white dark:bg-gray-900 py-16 lg:py-24" aria-labelledby="ai">
          <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-6xl mx-auto">
              <h2 id="ai" class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                Faster review with optional transcription and AI summaries
              </h2>
              <p class="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-12 text-center max-w-3xl mx-auto">
                Recording alone works. Transcription and AI make review faster — especially when you’re sampling many calls.
              </p>
    
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 lg:p-8">
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">Transcription (optional)</h3>
                  <p class="text-gray-700 dark:text-gray-300">
                    Convert audio into searchable text so you can find specific moments and topics quickly.
                  </p>
                </div>
    
                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 lg:p-8">
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">AI summaries & evaluation (optional)</h3>
                  <p class="text-gray-700 dark:text-gray-300">
                    Generate short call summaries and quality signals to speed up QA and coaching.
                  </p>
                </div>
              </div>
    
              <p class="text-lg text-gray-600 dark:text-gray-400 text-center italic mt-10">
                You can enable these features only for selected queues or agents — so costs stay aligned with value.
              </p>
            </div>
          </div>
        </section>
    
        <!-- WHO IT'S FOR -->
        <section class="w-full bg-gray-50 dark:bg-gray-800 py-16 lg:py-24" aria-labelledby="who">
          <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-6xl mx-auto">
              <h2 id="who" class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-12 text-center">
                Who uses call recording and monitoring
              </h2>
    
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                <div class="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 shadow-lg">
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">Support teams</h3>
                  <p class="text-gray-700 dark:text-gray-300 mb-4">
                    Improve consistency, coach faster, and reduce escalations.
                  </p>
                  <NuxtLink class="text-purple-600 dark:text-purple-400 font-bold hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
                    :to="supportHref">
                    Support call center software →
                  </NuxtLink>
                </div>
    
                <div class="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 shadow-lg">
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">Sales teams</h3>
                  <p class="text-gray-700 dark:text-gray-300 mb-4">
                    Improve messaging consistency, identify objections, and train reps faster.
                  </p>
                  <NuxtLink class="text-purple-600 dark:text-purple-400 font-bold hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
                    :to="salesHref">
                    Sales call center software →
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </section>
    
        <!-- FAQ -->
        <section class="w-full bg-white dark:bg-gray-900 py-16 lg:py-24" aria-labelledby="faq">
          <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-4xl mx-auto">
              <h2 id="faq" class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-12 text-center">
                Recording & monitoring questions
              </h2>
    
              <div class="space-y-4">
                <details class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-lg">
                  <summary class="cursor-pointer font-bold text-lg text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                    Do I have to record every call?
                  </summary>
                  <p class="mt-4 text-gray-700 dark:text-gray-300">
                    No. Many teams record all calls at first, then move to sampling or recording only certain queues/agents.
                  </p>
                </details>
    
                <details class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-lg">
                  <summary class="cursor-pointer font-bold text-lg text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                    Is call monitoring the same as “live listening”?
                  </summary>
                  <p class="mt-4 text-gray-700 dark:text-gray-300">
                    “Monitoring” often includes recordings and performance reporting. Live listening depends on the implementation and compliance rules.
                  </p>
                </details>
    
                <details class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-lg">
                  <summary class="cursor-pointer font-bold text-lg text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                    Can I add transcription and AI later?
                  </summary>
                  <p class="mt-4 text-gray-700 dark:text-gray-300">
                    Yes. Many teams start with recording and add transcription/AI when they want faster review.
                  </p>
                </details>
              </div>
    
              <div class="text-center mt-10">
                <NuxtLink
                  class="text-purple-600 dark:text-purple-400 font-bold hover:text-purple-700 dark:hover:text-purple-300 transition-colors inline-flex items-center gap-2"
                  :to="featuresHref"
                >
                  Explore all features
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </NuxtLink>
              </div>
            </div>
          </div>
        </section>
    
        <!-- FINAL CTA -->
        <section class="w-full bg-gradient-to-br from-purple-600 via-indigo-700 to-purple-800 py-16 lg:py-24" aria-labelledby="start">
          <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-4xl mx-auto text-center">
              <h2 id="start" class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Improve call quality without adding overhead
              </h2>
              <p class="text-lg sm:text-xl text-purple-100 mb-10 max-w-2xl mx-auto">
                Record calls for QA and coaching, and add transcription/AI only when it’s worth it.
              </p>
    
              <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  @click="authModal.open()"
                  class="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-700 font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl text-lg"
                >
                  Try It Live — $1 Credit
                </button>
                <NuxtLink
                  class="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full transition-all duration-300 hover:bg-white/10 text-lg"
                  :to="pricingHref"
                >
                  View Pricing
                </NuxtLink>
              </div>
            </div>
          </div>
        </section>
      </main>

      <!-- Auth Modal -->
      <AuthModal :is-open="authModal.isOpen.value" @close="authModal.close()" />
    </template>
    