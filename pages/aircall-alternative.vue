<script setup lang="ts">
    const runtimeConfig = useRuntimeConfig();
    const siteUrl =
      (runtimeConfig.public?.siteUrl as string) || 'https://www.simplecallcenter.com';
    const url = `${siteUrl.replace(/\/$/, '')}/aircall-alternative/`;
    
    const title = 'Aircall Alternative (Usage-Based Pricing, No Per-Seat Fees) | SimpleCallCenter';
    const description =
      'Looking for an Aircall alternative? SimpleCallCenter offers usage-based pricing (no per-seat fees), inbound routing, IVR, queues, voicemail, reporting, optional recording and AI summaries — built for small teams that want transparent costs.';
    
    useSeoMeta({
      title,
      description,
      ogTitle: title,
      ogDescription: description,
      ogType: 'website',
      ogUrl: url,
      twitterCard: 'summary_large_image',
    });
    
    useHead({
      link: [{ rel: 'canonical', href: url }],
    });
    
    const primaryCtaHref = 'https://my.simplecallcenter.com/signup';
    const pricingHref = '/pricing/';
    const usagePricingHref = '/usage-based-call-center-pricing/';
    const featuresHref = '/features/';
    const inboundHref = '/inbound-call-center-software/';
    </script>
    
    <template>
      <main>
        <!-- HERO -->
        <section class="w-full bg-cover bg-center relative overflow-hidden py-16 lg:py-24" aria-labelledby="page-title">
          <div class="absolute inset-0 bg-gradient-to-b from-white/80 to-white/60 dark:from-gray-900/80 dark:to-gray-900/60"></div>
          <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="max-w-4xl mx-auto">
              <p class="text-sm uppercase tracking-wider text-gray-600 dark:text-gray-400 mb-4">Comparison</p>
    
              <h1 id="page-title" class="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                An Aircall Alternative for Teams Who Hate Per-Seat Pricing
              </h1>
    
              <p class="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl">
                Aircall is a popular cloud phone system — but many small teams outgrow (or get priced out of) per-agent subscriptions.
                SimpleCallCenter is built for inbound teams with usage-based pricing: you pay for minutes and optional add-ons, not headcount.
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
                  :to="pricingHref"
                >
                  View Pricing
                </NuxtLink>
              </div>
    
              <ul class="flex flex-wrap gap-3">
                <li class="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm font-medium">
                  Usage-based pricing
                </li>
                <li class="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm font-medium">
                  Unlimited agents
                </li>
                <li class="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm font-medium">
                  Inbound-first call center
                </li>
              </ul>
            </div>
          </div>
        </section>
    
        <!-- THE SHORT VERSION -->
        <section class="w-full bg-white dark:bg-gray-900 py-16 lg:py-24" aria-labelledby="summary">
          <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-4xl mx-auto">
              <h2 id="summary" class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-8">
                The short version
              </h2>
    
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 shadow-lg">
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">When Aircall makes sense</h3>
                  <ul class="space-y-2 text-gray-700 dark:text-gray-300">
                    <li class="flex gap-2"><span class="text-purple-600 dark:text-purple-400 mt-1">•</span><span>You want a seat-based bundle</span></li>
                    <li class="flex gap-2"><span class="text-purple-600 dark:text-purple-400 mt-1">•</span><span>Your team size is stable</span></li>
                    <li class="flex gap-2"><span class="text-purple-600 dark:text-purple-400 mt-1">•</span><span>You don’t mind paying per agent</span></li>
                  </ul>
                </div>
    
                <div class="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 shadow-lg">
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">When SimpleCallCenter fits better</h3>
                  <ul class="space-y-2 text-gray-700 dark:text-gray-300">
                    <li class="flex gap-2"><span class="text-purple-600 dark:text-purple-400 mt-1">•</span><span>You want costs tied to call volume</span></li>
                    <li class="flex gap-2"><span class="text-purple-600 dark:text-purple-400 mt-1">•</span><span>You have seasonal / part-time agents</span></li>
                    <li class="flex gap-2"><span class="text-purple-600 dark:text-purple-400 mt-1">•</span><span>You want to enable AI only where it helps</span></li>
                  </ul>
                </div>
              </div>
    
              <div class="text-center mt-10">
                <NuxtLink
                  class="text-purple-600 dark:text-purple-400 font-bold hover:text-purple-700 dark:hover:text-purple-300 transition-colors inline-flex items-center gap-2"
                  :to="usagePricingHref"
                >
                  How usage-based pricing works
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </NuxtLink>
              </div>
            </div>
          </div>
        </section>
    
        <!-- COMPARISON TABLE -->
        <section class="w-full bg-gray-50 dark:bg-gray-800 py-16 lg:py-24" aria-labelledby="comparison">
          <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-6xl mx-auto">
              <h2 id="comparison" class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                Aircall vs SimpleCallCenter (at a glance)
              </h2>
              <p class="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-12 text-center max-w-3xl mx-auto">
                This is not a “feature bingo” table. It focuses on what impacts small-team cost and workflow.
              </p>
    
              <div class="overflow-x-auto">
                <table class="w-full border-collapse bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg">
                  <thead>
                    <tr class="bg-gray-100 dark:bg-gray-800">
                      <th class="text-left p-4 text-gray-900 dark:text-white font-bold">Category</th>
                      <th class="text-left p-4 text-gray-900 dark:text-white font-bold">Aircall (typical model)</th>
                      <th class="text-left p-4 text-gray-900 dark:text-white font-bold">SimpleCallCenter</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="border-t border-gray-200 dark:border-gray-700">
                      <td class="p-4 text-gray-700 dark:text-gray-300 font-semibold">Pricing</td>
                      <td class="p-4 text-gray-700 dark:text-gray-300">Per-seat subscriptions</td>
                      <td class="p-4 text-gray-700 dark:text-gray-300">Usage-based (minutes + optional add-ons)</td>
                    </tr>
                    <tr class="border-t border-gray-200 dark:border-gray-700">
                      <td class="p-4 text-gray-700 dark:text-gray-300 font-semibold">Agents</td>
                      <td class="p-4 text-gray-700 dark:text-gray-300">Cost scales with headcount</td>
                      <td class="p-4 text-gray-700 dark:text-gray-300">Unlimited agents (no seat fees)</td>
                    </tr>
                    <tr class="border-t border-gray-200 dark:border-gray-700">
                      <td class="p-4 text-gray-700 dark:text-gray-300 font-semibold">Inbound routing</td>
                      <td class="p-4 text-gray-700 dark:text-gray-300">Supported</td>
                      <td class="p-4 text-gray-700 dark:text-gray-300">Inbound-first (IVR, queues, voicemail)</td>
                    </tr>
                    <tr class="border-t border-gray-200 dark:border-gray-700">
                      <td class="p-4 text-gray-700 dark:text-gray-300 font-semibold">Recording / AI</td>
                      <td class="p-4 text-gray-700 dark:text-gray-300">Often tiered / bundled</td>
                      <td class="p-4 text-gray-700 dark:text-gray-300">Optional, enable only when needed</td>
                    </tr>
                    <tr class="border-t border-gray-200 dark:border-gray-700">
                      <td class="p-4 text-gray-700 dark:text-gray-300 font-semibold">Best for</td>
                      <td class="p-4 text-gray-700 dark:text-gray-300">Teams who like seat bundles</td>
                      <td class="p-4 text-gray-700 dark:text-gray-300">Teams who want costs tied to usage</td>
                    </tr>
                  </tbody>
                </table>
              </div>
    
              <p class="text-sm text-gray-600 dark:text-gray-400 mt-6 text-center">
                Note: Pricing and packaging can change over time. This comparison reflects the underlying pricing model and workflow fit.
              </p>
            </div>
          </div>
        </section>
    
        <!-- WHY USAGE-BASED WINS -->
        <section class="w-full bg-white dark:bg-gray-900 py-16 lg:py-24" aria-labelledby="why-usage">
          <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-4xl mx-auto">
              <h2 id="why-usage" class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-8">
                Why usage-based pricing is often better for small teams
              </h2>
    
              <ul class="space-y-4 mb-6">
                <li class="flex items-start gap-3 text-lg text-gray-700 dark:text-gray-300">
                  <span class="text-purple-600 dark:text-purple-400 font-bold mt-1">•</span>
                  <span><strong>Seasonal staffing</strong> doesn’t blow up your monthly bill.</span>
                </li>
                <li class="flex items-start gap-3 text-lg text-gray-700 dark:text-gray-300">
                  <span class="text-purple-600 dark:text-purple-400 font-bold mt-1">•</span>
                  <span><strong>Growth isn’t punished</strong> if call volume stays stable.</span>
                </li>
                <li class="flex items-start gap-3 text-lg text-gray-700 dark:text-gray-300">
                  <span class="text-purple-600 dark:text-purple-400 font-bold mt-1">•</span>
                  <span><strong>AI and recording</strong> can be enabled selectively instead of bundled for everyone.</span>
                </li>
              </ul>
    
              <NuxtLink
                class="text-purple-600 dark:text-purple-400 font-bold hover:text-purple-700 dark:hover:text-purple-300 transition-colors inline-flex items-center gap-2"
                :to="inboundHref"
              >
                Inbound call center software
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </NuxtLink>
            </div>
          </div>
        </section>
    
        <!-- FINAL CTA -->
        <section class="w-full bg-gradient-to-br from-purple-600 via-indigo-700 to-purple-800 py-16 lg:py-24" aria-labelledby="start">
          <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-4xl mx-auto text-center">
              <h2 id="start" class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Try a simpler Aircall alternative
              </h2>
              <p class="text-lg sm:text-xl text-purple-100 mb-10 max-w-2xl mx-auto">
                Usage-based pricing, inbound routing, optional AI — and no seat fees.
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
                  :to="pricingHref"
                >
                  View Pricing
                </NuxtLink>
              </div>
    
              <div class="mt-8">
                <NuxtLink
                  class="text-white/90 font-bold hover:text-white transition-colors underline underline-offset-4"
                  :to="featuresHref"
                >
                  See all features
                </NuxtLink>
              </div>
            </div>
          </div>
        </section>
      </main>
    </template>
    