<script setup lang="ts">
    // Nuxt 3 page: /small-business-call-center-software
    // Place this file at: pages/small-business-call-center-software.vue
    
    const runtimeConfig = useRuntimeConfig();
    const url = computed(() => {
      const siteUrl = (runtimeConfig.public?.siteUrl as string) || 'https://www.simplecallcenter.com';
      const baseUrl = siteUrl.endsWith('/') ? siteUrl.slice(0, -1) : siteUrl;
      return baseUrl + '/small-business-call-center-software/';
    });
    
    const title =
      'Small Business Call Center Software (Usage-Based, No Per-Seat Fees) | SimpleCallCenter';
    const description =
      'Small business call center software with inbound routing, IVR, recording, voicemail, and optional AI summaries — priced by usage, not per agent. Start with $1 credit.';
    
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
    
    const primaryCtaHref = '/signup'; // <-- change to your real signup / try-live URL
    const secondaryCtaHref = '/pricing/';
    </script>
    
    <template>
      <main>
        <!-- HERO -->
        <section class="w-full bg-cover bg-center relative overflow-hidden py-16 lg:py-24" aria-labelledby="page-title">
          <div class="absolute inset-0 bg-gradient-to-b from-white/80 to-white/60 dark:from-gray-900/80 dark:to-gray-900/60"></div>
          <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="max-w-4xl mx-auto">
              <p class="text-sm uppercase tracking-wider text-gray-600 dark:text-gray-400 mb-4">Small Business Call Center Software</p>
      
              <h1 id="page-title" class="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                Small Business Call Center Software — Simple, Usage-Based, No Per-Seat Fees
              </h1>
      
              <p class="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl">
                SimpleCallCenter helps small teams handle inbound calls professionally — with IVR, routing,
                recordings, and optional AI features — without per-agent pricing or long-term contracts.
              </p>
      
              <div class="flex flex-col sm:flex-row gap-4 mb-8">
                <NuxtLink 
                  class="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-800 hover:from-purple-500 hover:via-purple-600 hover:to-indigo-700 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/50 text-lg"
                  :to="primaryCtaHref"
                >
                  Try It Live — $1 Credit
                </NuxtLink>
                <NuxtLink 
                  class="inline-flex items-center justify-center px-8 py-4 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white font-bold rounded-full transition-all duration-300 hover:border-purple-500 dark:hover:border-purple-400 text-lg"
                  :to="secondaryCtaHref"
                >
                  View Pricing
                </NuxtLink>
              </div>
      
              <ul class="flex flex-wrap gap-3">
                <li class="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm font-medium">
                  Unlimited agents (no seat fees)
                </li>
                <li class="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm font-medium">
                  Pay only for minutes + optional features
                </li>
                <li class="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm font-medium">
                  Built for inbound support & service teams
                </li>
              </ul>
            </div>
          </div>
        </section>
    
        <!-- PROBLEM -->
        <section class="w-full bg-white dark:bg-gray-900 py-16 lg:py-24" aria-labelledby="why-traditional">
          <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-4xl mx-auto">
              <h2 id="why-traditional" class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-8">
                Why traditional call center tools don't work for small businesses
              </h2>
              <ul class="space-y-4 mb-6">
                <li class="flex items-start gap-3 text-lg text-gray-700 dark:text-gray-300">
                  <span class="text-purple-600 dark:text-purple-400 font-bold mt-1">•</span>
                  <span><strong>Per-agent pricing</strong> grows faster than your revenue.</span>
                </li>
                <li class="flex items-start gap-3 text-lg text-gray-700 dark:text-gray-300">
                  <span class="text-purple-600 dark:text-purple-400 font-bold mt-1">•</span>
                  <span><strong>Enterprise complexity</strong> slows down setup and adoption.</span>
                </li>
                <li class="flex items-start gap-3 text-lg text-gray-700 dark:text-gray-300">
                  <span class="text-purple-600 dark:text-purple-400 font-bold mt-1">•</span>
                  <span><strong>Monthly minimums</strong> punish you during slow seasons.</span>
                </li>
                <li class="flex items-start gap-3 text-lg text-gray-700 dark:text-gray-300">
                  <span class="text-purple-600 dark:text-purple-400 font-bold mt-1">•</span>
                  <span><strong>Contracts</strong> lock you in before you're sure it fits.</span>
                </li>
              </ul>
              <p class="text-lg text-gray-600 dark:text-gray-400 italic">
                Small teams need flexibility, clear billing, and fast setup — not a platform built for 1,000 seats.
              </p>
            </div>
          </div>
        </section>
    
        <!-- SOLUTION -->
        <section class="w-full bg-gray-50 dark:bg-gray-800 py-16 lg:py-24" aria-labelledby="built-for-small">
          <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-6xl mx-auto">
              <h2 id="built-for-small" class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-12 text-center">
                Built specifically for small teams
              </h2>
    
              <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
                  <h3 class="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">Scale by call volume, not headcount</h3>
                  <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Add agents as you grow without getting punished. Billing is based on usage — minutes,
                    recordings, and optional AI features.
                  </p>
                </div>
    
                <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
                  <h3 class="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">Set up quickly</h3>
                  <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Get a professional inbound flow with routing, IVR, voicemail, and reporting — without
                    complicated enterprise deployments.
                  </p>
                </div>
              </div>
    
              <div class="flex flex-wrap gap-6 justify-center">
                <NuxtLink class="text-purple-600 dark:text-purple-400 font-bold hover:text-purple-700 dark:hover:text-purple-300 transition-colors flex items-center gap-2" to="/features/">
                  Explore features
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </NuxtLink>
                <NuxtLink class="text-purple-600 dark:text-purple-400 font-bold hover:text-purple-700 dark:hover:text-purple-300 transition-colors flex items-center gap-2" to="/how-it-works/">
                  See how it works
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </NuxtLink>
              </div>
            </div>
          </div>
        </section>
    
        <!-- KEY FEATURES -->
        <section class="w-full bg-white dark:bg-gray-900 py-16 lg:py-24" aria-labelledby="features">
          <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-6xl mx-auto">
              <h2 id="features" class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-12 text-center">
                Everything a small business call center actually needs
              </h2>
    
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 lg:p-8">
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">Inbound routing & IVR</h3>
                  <p class="text-gray-700 dark:text-gray-300 mb-4">Route calls by business hours, team, language, or rules — with speech and keypad options.</p>
                  <NuxtLink class="text-purple-600 dark:text-purple-400 font-bold hover:text-purple-700 dark:hover:text-purple-300 transition-colors flex items-center gap-2" to="/features/multilingual-ivr/">
                    IVR with speech recognition
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </NuxtLink>
                </div>
    
                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 lg:p-8">
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">Call recording & voicemail</h3>
                  <p class="text-gray-700 dark:text-gray-300">Keep records for training, compliance, and customer follow-up — without extra tools.</p>
                </div>
    
                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 lg:p-8">
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">Transcription & AI summaries (optional)</h3>
                  <p class="text-gray-700 dark:text-gray-300 mb-4">Turn conversations into searchable notes and call summaries when you enable AI features.</p>
                  <NuxtLink class="text-purple-600 dark:text-purple-400 font-bold hover:text-purple-700 dark:hover:text-purple-300 transition-colors flex items-center gap-2" to="/pricing/">
                    See AI pricing
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </NuxtLink>
                </div>
    
                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 lg:p-8">
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">Live dashboards & reports</h3>
                  <p class="text-gray-700 dark:text-gray-300">Track answered calls, missed calls, wait times, agent activity, and trends.</p>
                </div>
    
                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 lg:p-8">
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">Multilingual support</h3>
                  <p class="text-gray-700 dark:text-gray-300">Support callers in multiple languages with language-aware routing and menus.</p>
                </div>
    
                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 lg:p-8">
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">CRM integrations</h3>
                  <p class="text-gray-700 dark:text-gray-300 mb-4">Connect call records, recordings, and notes to your CRM workflows.</p>
                  <div class="flex flex-wrap gap-4">
                    <NuxtLink class="text-purple-600 dark:text-purple-400 font-bold hover:text-purple-700 dark:hover:text-purple-300 transition-colors flex items-center gap-2" to="/how-it-works/hubspot-integration/">
                      HubSpot
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </NuxtLink>
                    <NuxtLink class="text-purple-600 dark:text-purple-400 font-bold hover:text-purple-700 dark:hover:text-purple-300 transition-colors flex items-center gap-2" to="/how-it-works/zoho-integration/">
                      Zoho
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    
        <!-- PRICING REASSURANCE -->
        <section class="w-full bg-gray-50 dark:bg-gray-800 py-16 lg:py-24" aria-labelledby="pricing">
          <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-4xl mx-auto text-center">
              <h2 id="pricing" class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Transparent pricing that works for small budgets
              </h2>
    
              <p class="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                No per-seat fees. No forced bundles. No contracts. Start small and scale naturally as call volume grows.
              </p>
    
              <ul class="space-y-4 mb-10 text-left max-w-2xl mx-auto">
                <li class="flex items-start gap-3 text-lg text-gray-700 dark:text-gray-300">
                  <svg class="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Usage-based billing (minutes + optional add-ons)</span>
                </li>
                <li class="flex items-start gap-3 text-lg text-gray-700 dark:text-gray-300">
                  <svg class="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Unlimited agents included</span>
                </li>
                <li class="flex items-start gap-3 text-lg text-gray-700 dark:text-gray-300">
                  <svg class="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Start with $1 credit</span>
                </li>
                <li class="flex items-start gap-3 text-lg text-gray-700 dark:text-gray-300">
                  <svg class="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Cancel anytime</span>
                </li>
              </ul>
    
              <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <NuxtLink 
                  class="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-800 hover:from-purple-500 hover:via-purple-600 hover:to-indigo-700 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/50 text-lg"
                  :to="primaryCtaHref"
                >
                  Start with $1 Credit
                </NuxtLink>
                <NuxtLink 
                  class="inline-flex items-center justify-center px-8 py-4 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white font-bold rounded-full transition-all duration-300 hover:border-purple-500 dark:hover:border-purple-400 text-lg"
                  :to="secondaryCtaHref"
                >
                  View Pricing
                </NuxtLink>
              </div>
            </div>
          </div>
        </section>
    
        <!-- FIT / NOT FIT -->
        <section class="w-full bg-white dark:bg-gray-900 py-16 lg:py-24" aria-labelledby="fit">
          <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-6xl mx-auto">
              <h2 id="fit" class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-12 text-center">
                Is SimpleCallCenter right for your business?
              </h2>
    
              <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl shadow-lg border border-green-200 dark:border-gray-600 p-8">
                  <h3 class="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6">Great fit if you:</h3>
                  <ul class="space-y-3">
                    <li class="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                      <svg class="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Have 2–30 agents handling inbound calls</span>
                    </li>
                    <li class="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                      <svg class="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Need IVR, routing, recording, and reporting</span>
                    </li>
                    <li class="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                      <svg class="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Want a predictable, transparent billing model</span>
                    </li>
                    <li class="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                      <svg class="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Need HubSpot/Zoho workflows (or plan to)</span>
                    </li>
                  </ul>
                </div>
    
                <div class="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl shadow-lg border border-orange-200 dark:border-gray-600 p-8">
                  <h3 class="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6">Not ideal if you:</h3>
                  <ul class="space-y-3">
                    <li class="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                      <svg class="w-6 h-6 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span>Need outbound-heavy predictive dialing at scale</span>
                    </li>
                    <li class="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                      <svg class="w-6 h-6 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span>Prefer long-term contracts and seat-based bundles</span>
                    </li>
                    <li class="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                      <svg class="w-6 h-6 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span>Want a "chatbot-first" support model</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
    
        <!-- FINAL CTA -->
        <section class="w-full bg-gradient-to-br from-purple-600 via-indigo-700 to-purple-800 py-16 lg:py-24" aria-labelledby="start">
          <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-4xl mx-auto text-center">
              <h2 id="start" class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Start your small business call center in minutes
              </h2>
              <p class="text-lg sm:text-xl text-purple-100 mb-10 max-w-2xl mx-auto">
                No contracts. No agent limits. Just clean inbound call handling with optional AI support.
              </p>
    
              <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <NuxtLink 
                  class="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-700 font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl text-lg"
                  :to="primaryCtaHref"
                >
                  Try It Live — $1 Credit
                </NuxtLink>
                <NuxtLink 
                  class="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full transition-all duration-300 hover:bg-white/10 text-lg"
                  to="/faq/"
                >
                  Read FAQ
                </NuxtLink>
              </div>
            </div>
          </div>
        </section>
      </main>
    </template>
    