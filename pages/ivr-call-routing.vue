<script setup lang="ts">
    const runtimeConfig = useRuntimeConfig();
    const siteUrl =
      (runtimeConfig.public?.siteUrl as string) || 'https://www.simplecallcenter.com';
    const url = `${siteUrl.replace(/\/$/, '')}/ivr-call-routing/`;
    
    const title = 'IVR Call Routing Software (Menus, Business Hours, Queues) | SimpleCallCenter';
    const description =
      'IVR call routing software for inbound teams: menus (DTMF + optional speech), business hours, language routing, queues, voicemail, and reporting. Usage-based pricing, no per-seat fees.';
    
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
    const featuresHref = '/features/';
    </script>
    
    <template>
      <main>
        <!-- HERO -->
        <section
          class="w-full bg-cover bg-center relative overflow-hidden py-16 lg:py-24"
          aria-labelledby="page-title"
        >
          <div
            class="absolute inset-0 bg-gradient-to-b from-white/80 to-white/60 dark:from-gray-900/80 dark:to-gray-900/60"
          ></div>
    
          <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="max-w-4xl mx-auto">
              <p class="text-sm uppercase tracking-wider text-gray-600 dark:text-gray-400 mb-4">
                IVR & Call Routing
              </p>
    
              <h1
                id="page-title"
                class="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
              >
                IVR Call Routing Software — Route Callers Fast, Reduce Missed Calls
              </h1>
    
              <p class="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl">
                Build inbound call flows with IVR menus, business hours, language routing, queues, and voicemail.
                SimpleCallCenter keeps it simple for small teams — and pricing stays usage-based with no per-seat fees.
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
                  Business hours routing
                </li>
                <li class="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm font-medium">
                  IVR menus (DTMF + optional speech)
                </li>
                <li class="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm font-medium">
                  Queues + voicemail fallback
                </li>
              </ul>
            </div>
          </div>
        </section>
    
        <!-- WHAT IVR SHOULD DO -->
        <section class="w-full bg-white dark:bg-gray-900 py-16 lg:py-24" aria-labelledby="what">
          <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-4xl mx-auto">
              <h2 id="what" class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-8">
                What IVR call routing should accomplish
              </h2>
    
              <ul class="space-y-4 mb-6">
                <li class="flex items-start gap-3 text-lg text-gray-700 dark:text-gray-300">
                  <span class="text-purple-600 dark:text-purple-400 font-bold mt-1">•</span>
                  <span><strong>Route callers correctly</strong> (support, sales, billing, language, location).</span>
                </li>
                <li class="flex items-start gap-3 text-lg text-gray-700 dark:text-gray-300">
                  <span class="text-purple-600 dark:text-purple-400 font-bold mt-1">•</span>
                  <span><strong>Reduce wait times</strong> with queues and better distribution.</span>
                </li>
                <li class="flex items-start gap-3 text-lg text-gray-700 dark:text-gray-300">
                  <span class="text-purple-600 dark:text-purple-400 font-bold mt-1">•</span>
                  <span><strong>Handle after-hours</strong> with business-hours rules and voicemail fallback.</span>
                </li>
                <li class="flex items-start gap-3 text-lg text-gray-700 dark:text-gray-300">
                  <span class="text-purple-600 dark:text-purple-400 font-bold mt-1">•</span>
                  <span><strong>Create accountability</strong> with call logs, missed-call alerts, and reporting.</span>
                </li>
              </ul>
    
              <p class="text-lg text-gray-600 dark:text-gray-400 italic">
                The goal isn’t “fancy menus.” It’s getting the caller to the right person quickly and reliably.
              </p>
            </div>
          </div>
        </section>
    
        <!-- HOW IT WORKS -->
        <section class="w-full bg-gray-50 dark:bg-gray-800 py-16 lg:py-24" aria-labelledby="flow">
          <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-6xl mx-auto">
              <h2 id="flow" class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                A typical IVR + routing flow
              </h2>
              <p class="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-12 text-center max-w-3xl mx-auto">
                Keep it short, keep it clear, and make sure there’s always a fallback.
              </p>
    
              <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
                  <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">1) Greeting</h3>
                  <p class="text-gray-700 dark:text-gray-300">Play a short greeting and set expectations.</p>
                </div>
                <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
                  <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">2) Menu</h3>
                  <p class="text-gray-700 dark:text-gray-300">DTMF options, and optional speech for faster navigation.</p>
                </div>
                <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
                  <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">3) Routing</h3>
                  <p class="text-gray-700 dark:text-gray-300">Route to the right queue/team based on selection, hours, and rules.</p>
                </div>
                <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
                  <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">4) Fallback</h3>
                  <p class="text-gray-700 dark:text-gray-300">If no answer: voicemail, callback process, or missed-call alerts.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
    
        <!-- FEATURES (IVR-SPECIFIC) -->
        <section class="w-full bg-white dark:bg-gray-900 py-16 lg:py-24" aria-labelledby="capabilities">
          <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-6xl mx-auto">
              <h2 id="capabilities" class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-12 text-center">
                IVR and routing capabilities for real support teams
              </h2>
    
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 lg:p-8">
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">Business hours & after-hours handling</h3>
                  <p class="text-gray-700 dark:text-gray-300">
                    Different behavior during business hours vs after-hours — including voicemail and notifications.
                  </p>
                </div>
    
                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 lg:p-8">
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">Queues and distribution</h3>
                  <p class="text-gray-700 dark:text-gray-300">
                    Route calls into queues so callers don’t bounce between people, and teams can manage workload.
                  </p>
                </div>
    
                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 lg:p-8">
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">Language-aware menus</h3>
                  <p class="text-gray-700 dark:text-gray-300">
                    Offer language selection and route callers to the right agents or queues.
                  </p>
                </div>
    
                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 lg:p-8">
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">DTMF menus + optional speech</h3>
                  <p class="text-gray-700 dark:text-gray-300">
                    Keypad menus are universal. Speech is optional when you want faster navigation.
                  </p>
                </div>
              </div>
    
              <div class="text-center mt-10">
                <NuxtLink
                  class="text-purple-600 dark:text-purple-400 font-bold hover:text-purple-700 dark:hover:text-purple-300 transition-colors inline-flex items-center gap-2"
                  :to="featuresHref"
                >
                  See all features
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </NuxtLink>
              </div>
            </div>
          </div>
        </section>
    
        <!-- BEST PRACTICES -->
        <section class="w-full bg-gray-50 dark:bg-gray-800 py-16 lg:py-24" aria-labelledby="best">
          <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-4xl mx-auto">
              <h2 id="best" class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                IVR best practices (quick and practical)
              </h2>
    
              <div class="space-y-4">
                <div class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-lg">
                  <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">Keep menus short</h3>
                  <p class="text-gray-700 dark:text-gray-300">
                    3–5 options is usually enough. If everything is “Press 7,” callers get frustrated.
                  </p>
                </div>
    
                <div class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-lg">
                  <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">Always offer a fallback</h3>
                  <p class="text-gray-700 dark:text-gray-300">
                    If nobody answers, route to voicemail and notify the right team for follow-up.
                  </p>
                </div>
    
                <div class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-lg">
                  <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">Route by business hours</h3>
                  <p class="text-gray-700 dark:text-gray-300">
                    After-hours should have a different path (voicemail, emergency line, callback workflow).
                  </p>
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
                Build a better inbound call flow
              </h2>
              <p class="text-lg sm:text-xl text-purple-100 mb-10 max-w-2xl mx-auto">
                Set up IVR menus, routing rules, and queues — then improve over time with reporting and optional add-ons.
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
            </div>
          </div>
        </section>
      </main>
    </template>
    