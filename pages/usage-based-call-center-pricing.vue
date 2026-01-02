<script setup lang="ts">
    const runtimeConfig = useRuntimeConfig();
    const url = computed(() => {
      const siteUrl = (runtimeConfig.public?.siteUrl as string) || 'https://www.simplecallcenter.com';
      const baseUrl = siteUrl.endsWith('/') ? siteUrl.slice(0, -1) : siteUrl;
      return baseUrl + '/usage-based-call-center-pricing/';
    });
    
    const title =
      'Usage-Based Call Center Pricing (No Per-Seat Fees) | SimpleCallCenter';
    const description =
      'Usage-based call center pricing: pay for minutes and optional add-ons like recording, transcription, and AI summaries — not per agent. Transparent, scalable, and contract-free.';
    
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
    
    // Calculator is embedded on the pricing page
    const calculatorHref = '/pricing/';
    
    const authModal = useAuthModal();
    </script>
    
    <template>
      <main>
        <!-- HERO -->
        <section class="w-full bg-cover bg-center relative overflow-hidden py-16 lg:py-24" aria-labelledby="page-title">
          <div class="absolute inset-0 bg-gradient-to-b from-white/80 to-white/60 dark:from-gray-900/80 dark:to-gray-900/60"></div>
          <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="max-w-4xl mx-auto">
              <p class="text-sm uppercase tracking-wider text-gray-600 dark:text-gray-400 mb-4">Pricing model</p>
              <h1 id="page-title" class="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                Usage-Based Call Center Pricing — Pay for Calls, Not Seats
              </h1>
              <p class="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl">
                Most call center platforms charge per agent and punish you for growing.
                SimpleCallCenter charges based on usage — minutes and optional features — so small teams can
                start lean and scale naturally.
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
                  See Full Pricing
                </NuxtLink>
              </div>
      
              <ul class="flex flex-wrap gap-3">
                <li class="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm font-medium">
                  No per-seat fees
                </li>
                <li class="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm font-medium">
                  No contracts
                </li>
                <li class="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm font-medium">
                  Pay only for what you use
                </li>
              </ul>
            </div>
          </div>
        </section>
    
        <!-- WHY PER-SEAT FAILS -->
        <section class="w-full bg-white dark:bg-gray-900 py-16 lg:py-24" aria-labelledby="per-seat">
          <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-4xl mx-auto">
              <h2 id="per-seat" class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-8">
                Why per-seat pricing breaks for small teams
              </h2>
              <ul class="space-y-4 mb-6">
                <li class="flex items-start gap-3 text-lg text-gray-700 dark:text-gray-300">
                  <span class="text-purple-600 dark:text-purple-400 font-bold mt-1">•</span>
                  <span><strong>Headcount changes</strong> (seasonal, part-time, contractors) become expensive.</span>
                </li>
                <li class="flex items-start gap-3 text-lg text-gray-700 dark:text-gray-300">
                  <span class="text-purple-600 dark:text-purple-400 font-bold mt-1">•</span>
                  <span><strong>Growth gets penalized</strong> even if call volume stays the same.</span>
                </li>
                <li class="flex items-start gap-3 text-lg text-gray-700 dark:text-gray-300">
                  <span class="text-purple-600 dark:text-purple-400 font-bold mt-1">•</span>
                  <span><strong>Features get gated</strong> behind higher tiers "because they can."</span>
                </li>
                <li class="flex items-start gap-3 text-lg text-gray-700 dark:text-gray-300">
                  <span class="text-purple-600 dark:text-purple-400 font-bold mt-1">•</span>
                  <span><strong>You pay monthly</strong> even when you're quiet.</span>
                </li>
              </ul>
              <p class="text-lg text-gray-600 dark:text-gray-400 italic">
                A call center's real cost driver is <strong class="text-gray-900 dark:text-white">call volume</strong>. That's what your bill should follow.
              </p>
            </div>
          </div>
        </section>
    
        <!-- HOW USAGE PRICING WORKS -->
        <section class="w-full bg-gray-50 dark:bg-gray-800 py-16 lg:py-24" aria-labelledby="how">
          <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-6xl mx-auto">
              <h2 id="how" class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                How usage-based pricing works
              </h2>
              <p class="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-12 text-center max-w-3xl mx-auto">
                You pay for minutes, plus optional add-ons you enable. Core call center functionality is included —
                unlimited agents, routing, reporting, and more.
              </p>
    
              <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
                  <h3 class="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">1) Calls (minutes)</h3>
                  <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Billing is based on call duration, using clear per-minute rates. If your call volume is low,
                    your bill stays low.
                  </p>
                </div>
    
                <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
                  <h3 class="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">2) Optional add-ons</h3>
                  <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Features like recording, transcription, AI summaries, and evaluations are only charged when enabled.
                    Turn them on for specific teams or workflows.
                  </p>
                </div>
              </div>
    
              <div class="flex flex-wrap gap-6 justify-center">
                <NuxtLink class="text-purple-600 dark:text-purple-400 font-bold hover:text-purple-700 dark:hover:text-purple-300 transition-colors flex items-center gap-2" :to="calculatorHref">
                  Estimate your cost
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </NuxtLink>
                <NuxtLink class="text-purple-600 dark:text-purple-400 font-bold hover:text-purple-700 dark:hover:text-purple-300 transition-colors flex items-center gap-2" :to="pricingHref">
                  See detailed rates
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </NuxtLink>
              </div>
            </div>
          </div>
        </section>

        <!-- COMPARISON -->
        <section class="w-full bg-white dark:bg-gray-900 py-16 lg:py-24" aria-labelledby="compare">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-6xl mx-auto">
            <h2 id="compare" class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                How SimpleCallCenter compares (pricing model + setup)
            </h2>
            <p class="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-10 text-center max-w-3xl mx-auto">
                This is a structural comparison — not a price claim. Vendors change rates often, but the pricing model and setup complexity usually don’t.
            </p>

            <div class="overflow-x-auto rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg bg-white dark:bg-gray-800">
                <table class="min-w-[860px] w-full text-left">
                <thead class="bg-gray-50 dark:bg-gray-900/40">
                    <tr>
                    <th class="py-4 px-6 text-sm font-bold text-gray-700 dark:text-gray-300">Category</th>
                    <th class="py-4 px-6 text-sm font-bold text-gray-700 dark:text-gray-300">SimpleCallCenter</th>
                    <th class="py-4 px-6 text-sm font-bold text-gray-700 dark:text-gray-300">Twilio</th>
                    <th class="py-4 px-6 text-sm font-bold text-gray-700 dark:text-gray-300">Amazon Connect</th>
                    </tr>
                </thead>

                <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr>
                    <td class="py-4 px-6 font-semibold text-gray-900 dark:text-white">Pricing model</td>
                    <td class="py-4 px-6 text-gray-700 dark:text-gray-300">Usage-based (calls + optional add-ons)</td>
                    <td class="py-4 px-6 text-gray-700 dark:text-gray-300">Usage-based APIs (you build the app)</td>
                    <td class="py-4 px-6 text-gray-700 dark:text-gray-300">Usage-based (enterprise platform)</td>
                    </tr>

                    <tr>
                    <td class="py-4 px-6 font-semibold text-gray-900 dark:text-white">Per-seat fees</td>
                    <td class="py-4 px-6 text-gray-700 dark:text-gray-300"><span class="font-bold text-green-700 dark:text-green-400">No</span></td>
                    <td class="py-4 px-6 text-gray-700 dark:text-gray-300">Not seats, but engineering time to build/maintain</td>
                    <td class="py-4 px-6 text-gray-700 dark:text-gray-300">Not seat-based, but can add platform complexity</td>
                    </tr>

                    <tr>
                    <td class="py-4 px-6 font-semibold text-gray-900 dark:text-white">Setup</td>
                    <td class="py-4 px-6 text-gray-700 dark:text-gray-300"><span class="font-bold">Fast</span> — ready-to-use call center workflows</td>
                    <td class="py-4 px-6 text-gray-700 dark:text-gray-300"><span class="font-bold">Build-it-yourself</span> (dev work required)</td>
                    <td class="py-4 px-6 text-gray-700 dark:text-gray-300"><span class="font-bold">Powerful</span>, but configuration-heavy</td>
                    </tr>

                    <tr>
                    <td class="py-4 px-6 font-semibold text-gray-900 dark:text-white">Best for</td>
                    <td class="py-4 px-6 text-gray-700 dark:text-gray-300">Small teams that want a call center without per-seat pricing</td>
                    <td class="py-4 px-6 text-gray-700 dark:text-gray-300">Teams building a custom comms product</td>
                    <td class="py-4 px-6 text-gray-700 dark:text-gray-300">Enterprise / complex contact center operations</td>
                    </tr>

                    <tr>
                    <td class="py-4 px-6 font-semibold text-gray-900 dark:text-white">AI features</td>
                    <td class="py-4 px-6 text-gray-700 dark:text-gray-300">Optional add-on usage</td>
                    <td class="py-4 px-6 text-gray-700 dark:text-gray-300">Depends on what you integrate/build</td>
                    <td class="py-4 px-6 text-gray-700 dark:text-gray-300">Available, typically broader ecosystem configuration</td>
                    </tr>

                    <tr>
                    <td class="py-4 px-6 font-semibold text-gray-900 dark:text-white">“Call center app” included</td>
                    <td class="py-4 px-6 text-gray-700 dark:text-gray-300"><span class="font-bold text-green-700 dark:text-green-400">Yes</span></td>
                    <td class="py-4 px-6 text-gray-700 dark:text-gray-300">No (APIs / building blocks)</td>
                    <td class="py-4 px-6 text-gray-700 dark:text-gray-300">Yes (platform)</td>
                    </tr>
                </tbody>
                </table>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                <div class="bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
                <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">Choose SimpleCallCenter if…</h3>
                <p class="text-gray-700 dark:text-gray-300">
                    You want a ready-to-use call center for a small team, with transparent usage-based billing and no seat fees.
                </p>
                </div>

                <div class="bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
                <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">Choose Twilio if…</h3>
                <p class="text-gray-700 dark:text-gray-300">
                    You’re building a custom communications product and have developers to maintain the stack long-term.
                </p>
                </div>

                <div class="bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
                <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">Choose Amazon Connect if…</h3>
                <p class="text-gray-700 dark:text-gray-300">
                    You need an enterprise contact-center platform and can handle deeper configuration and operations.
                </p>
                </div>
            </div>

            <div class="flex flex-col sm:flex-row gap-4 justify-center mt-10">
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
                See Full Pricing
                </NuxtLink>
            </div>
            </div>
        </div>
        </section>

        <!-- PER-SEAT PLATFORMS COMPARISON -->
<section class="w-full bg-gray-50 dark:bg-gray-800 py-16 lg:py-24" aria-labelledby="compare-seats">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-6xl mx-auto">
      <h2 id="compare-seats" class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 text-center">
        Per-seat platforms vs usage-based pricing
      </h2>
      <p class="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-10 text-center max-w-3xl mx-auto">
        Many call center tools price by agent seats. That can work — but it often becomes expensive when headcount changes or you add part-time staff.
        Here’s how the models differ.
      </p>

      <div class="overflow-x-auto rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg bg-white dark:bg-gray-800">
        <table class="min-w-[980px] w-full text-left">
          <thead class="bg-gray-50 dark:bg-gray-900/40">
            <tr>
              <th class="py-4 px-6 text-sm font-bold text-gray-700 dark:text-gray-300">Category</th>
              <th class="py-4 px-6 text-sm font-bold text-gray-700 dark:text-gray-300">SimpleCallCenter</th>
              <th class="py-4 px-6 text-sm font-bold text-gray-700 dark:text-gray-300">Aircall (typical model)</th>
              <th class="py-4 px-6 text-sm font-bold text-gray-700 dark:text-gray-300">Dialpad / RingCentral (typical model)</th>
            </tr>
          </thead>

          <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
            <tr>
              <td class="py-4 px-6 font-semibold text-gray-900 dark:text-white">How you’re billed</td>
              <td class="py-4 px-6 text-gray-700 dark:text-gray-300">Usage-based (calls + optional add-ons)</td>
              <td class="py-4 px-6 text-gray-700 dark:text-gray-300">Per-seat subscriptions (often tiered)</td>
              <td class="py-4 px-6 text-gray-700 dark:text-gray-300">Per-seat subscriptions (often tiered)</td>
            </tr>

            <tr>
              <td class="py-4 px-6 font-semibold text-gray-900 dark:text-white">Cost driver</td>
              <td class="py-4 px-6 text-gray-700 dark:text-gray-300">Call volume</td>
              <td class="py-4 px-6 text-gray-700 dark:text-gray-300">Headcount (seats)</td>
              <td class="py-4 px-6 text-gray-700 dark:text-gray-300">Headcount (seats)</td>
            </tr>

            <tr>
              <td class="py-4 px-6 font-semibold text-gray-900 dark:text-white">Unlimited agents</td>
              <td class="py-4 px-6 text-gray-700 dark:text-gray-300"><span class="font-bold text-green-700 dark:text-green-400">Yes</span></td>
              <td class="py-4 px-6 text-gray-700 dark:text-gray-300">No (each agent is a seat)</td>
              <td class="py-4 px-6 text-gray-700 dark:text-gray-300">No (each agent is a seat)</td>
            </tr>

            <tr>
              <td class="py-4 px-6 font-semibold text-gray-900 dark:text-white">Seasonal/part-time staffing</td>
              <td class="py-4 px-6 text-gray-700 dark:text-gray-300">Add agents without changing plan</td>
              <td class="py-4 px-6 text-gray-700 dark:text-gray-300">Seats can add cost as headcount changes</td>
              <td class="py-4 px-6 text-gray-700 dark:text-gray-300">Seats can add cost as headcount changes</td>
            </tr>

            <tr>
              <td class="py-4 px-6 font-semibold text-gray-900 dark:text-white">Feature gating risk</td>
              <td class="py-4 px-6 text-gray-700 dark:text-gray-300">Core functionality included; add-ons are optional usage</td>
              <td class="py-4 px-6 text-gray-700 dark:text-gray-300">Often tied to tiers / plans</td>
              <td class="py-4 px-6 text-gray-700 dark:text-gray-300">Often tied to tiers / plans</td>
            </tr>

            <tr>
              <td class="py-4 px-6 font-semibold text-gray-900 dark:text-white">Best fit</td>
              <td class="py-4 px-6 text-gray-700 dark:text-gray-300">Small teams who want flexibility and cost control</td>
              <td class="py-4 px-6 text-gray-700 dark:text-gray-300">Teams who want seats + packaged bundles</td>
              <td class="py-4 px-6 text-gray-700 dark:text-gray-300">Teams who want seats + packaged bundles</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        <div class="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
          <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">When per-seat can make sense</h3>
          <p class="text-gray-700 dark:text-gray-300">
            If your headcount is stable and you want an all-in-one package with seats and tiers, per-seat platforms can be fine.
          </p>
        </div>

        <div class="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
          <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">When usage-based is better</h3>
          <p class="text-gray-700 dark:text-gray-300">
            If you have part-time agents, seasonal staffing, or you’re growing gradually, usage-based pricing usually stays closer to real usage.
          </p>
        </div>
      </div>

      <div class="flex flex-col sm:flex-row gap-4 justify-center mt-10">
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
          See Full Pricing
        </NuxtLink>
      </div>

      <p class="text-sm text-gray-500 dark:text-gray-400 text-center mt-6">
        Note: This is a general model comparison. Specific vendor packaging and features vary by plan and can change over time.
      </p>
    </div>
  </div>
</section>

    
        <!-- WHAT'S INCLUDED -->
        <section class="w-full bg-white dark:bg-gray-900 py-16 lg:py-24" aria-labelledby="included">
          <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-6xl mx-auto">
              <h2 id="included" class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-12 text-center">
                What you get without paying per agent
              </h2>
    
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-8">
                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 lg:p-8">
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">Unlimited agents</h3>
                  <p class="text-gray-700 dark:text-gray-300">Add your whole team without worrying about seats.</p>
                </div>
                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 lg:p-8">
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">Inbound routing & IVR</h3>
                  <p class="text-gray-700 dark:text-gray-300">Professional call flows for support, sales, and service teams.</p>
                </div>
                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 lg:p-8">
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">Dashboards & reporting</h3>
                  <p class="text-gray-700 dark:text-gray-300">Track answered calls, missed calls, wait times, and agent activity.</p>
                </div>
                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 lg:p-8">
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">Voicemail & notifications</h3>
                  <p class="text-gray-700 dark:text-gray-300">Capture missed calls and follow up quickly.</p>
                </div>
              </div>
    
              <p class="text-lg text-gray-600 dark:text-gray-400 text-center italic">
                Need more? Add recording, transcription, or AI features only when they're useful.
              </p>
            </div>
          </div>
        </section>
    
        <!-- EXAMPLES -->
        <section class="w-full bg-gray-50 dark:bg-gray-800 py-16 lg:py-24" aria-labelledby="examples">
          <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-6xl mx-auto">
              <h2 id="examples" class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                Example costs (simple scenarios)
              </h2>
              <p class="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-12 text-center max-w-3xl mx-auto">
                The exact total depends on call volume and which add-ons you enable. These examples show how the model behaves:
                bills scale with usage, not headcount.
              </p>
    
              <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">Light usage</h3>
                  <p class="text-gray-600 dark:text-gray-400 mb-4">A small team handling occasional inbound calls</p>
                  <ul class="space-y-2">
                    <li class="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                      <span class="text-purple-600 dark:text-purple-400 mt-1">•</span>
                      <span>Low minutes</span>
                    </li>
                    <li class="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                      <span class="text-purple-600 dark:text-purple-400 mt-1">•</span>
                      <span>No AI features</span>
                    </li>
                    <li class="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                      <span class="text-purple-600 dark:text-purple-400 mt-1">•</span>
                      <span>Small predictable bill</span>
                    </li>
                  </ul>
                </div>
    
                <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">Typical support team</h3>
                  <p class="text-gray-600 dark:text-gray-400 mb-4">Daily calls + recording for QA</p>
                  <ul class="space-y-2">
                    <li class="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                      <span class="text-purple-600 dark:text-purple-400 mt-1">•</span>
                      <span>Moderate minutes</span>
                    </li>
                    <li class="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                      <span class="text-purple-600 dark:text-purple-400 mt-1">•</span>
                      <span>Recording enabled</span>
                    </li>
                    <li class="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                      <span class="text-purple-600 dark:text-purple-400 mt-1">•</span>
                      <span>Cost follows usage</span>
                    </li>
                  </ul>
                </div>
    
                <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">High volume</h3>
                  <p class="text-gray-600 dark:text-gray-400 mb-4">Busy inbound queue with AI summaries for selected calls</p>
                  <ul class="space-y-2">
                    <li class="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                      <span class="text-purple-600 dark:text-purple-400 mt-1">•</span>
                      <span>High minutes</span>
                    </li>
                    <li class="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                      <span class="text-purple-600 dark:text-purple-400 mt-1">•</span>
                      <span>Selective AI usage</span>
                    </li>
                    <li class="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                      <span class="text-purple-600 dark:text-purple-400 mt-1">•</span>
                      <span>Still no seat fees</span>
                    </li>
                  </ul>
                </div>
              </div>
    
              <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <NuxtLink 
                  class="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-800 hover:from-purple-500 hover:via-purple-600 hover:to-indigo-700 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/50 text-lg"
                  :to="calculatorHref"
                >
                  Use the calculator
                </NuxtLink>
                <NuxtLink 
                  class="inline-flex items-center justify-center px-8 py-4 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white font-bold rounded-full transition-all duration-300 hover:border-purple-500 dark:hover:border-purple-400 text-lg"
                  :to="pricingHref"
                >
                  See full pricing
                </NuxtLink>
              </div>
            </div>
          </div>
        </section>
    
        <!-- PRICING FAQ -->
        <section class="w-full bg-white dark:bg-gray-900 py-16 lg:py-24" aria-labelledby="faq">
          <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-4xl mx-auto">
              <h2 id="faq" class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-12 text-center">
                Pricing questions
              </h2>
    
              <div class="space-y-4 mb-8">
                <details class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-lg">
                  <summary class="cursor-pointer font-bold text-lg text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                    Do you charge per agent?
                  </summary>
                  <p class="mt-4 text-gray-700 dark:text-gray-300">No. Agents are unlimited. Charges are based on usage and optional add-ons.</p>
                </details>
    
                <details class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-lg">
                  <summary class="cursor-pointer font-bold text-lg text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                    Can I enable AI only for certain calls or teams?
                  </summary>
                  <p class="mt-4 text-gray-700 dark:text-gray-300">Yes. Optional features are meant to be toggled based on where they provide value.</p>
                </details>
    
                <details class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-lg">
                  <summary class="cursor-pointer font-bold text-lg text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                    Are there contracts or minimums?
                  </summary>
                  <p class="mt-4 text-gray-700 dark:text-gray-300">No contracts. You can start small, test with the $1 credit, and scale as needed.</p>
                </details>
              </div>
    
              <p class="text-lg text-gray-600 dark:text-gray-400 text-center mb-6">
                For exact rates and add-on pricing, see the full pricing page.
              </p>
    
              <div class="text-center">
                <NuxtLink class="text-purple-600 dark:text-purple-400 font-bold hover:text-purple-700 dark:hover:text-purple-300 transition-colors flex items-center gap-2 justify-center" :to="pricingHref">
                  Open pricing
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
                Stop paying for seats you don't need
              </h2>
              <p class="text-lg sm:text-xl text-purple-100 mb-10 max-w-2xl mx-auto">
                Start with usage-based billing and add features only when they make sense for your workflow.
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
                  to="/faq/"
                >
                  Read FAQ
                </NuxtLink>
              </div>
            </div>
          </div>
        </section>
      </main>

      <!-- Auth Modal -->
      <AuthModal :is-open="authModal.isOpen.value" @close="authModal.close()" />
    </template>
    