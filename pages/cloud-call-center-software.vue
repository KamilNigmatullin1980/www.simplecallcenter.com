<script setup lang="ts">
    const runtimeConfig = useRuntimeConfig();
    const url = computed(() => {
      const siteUrl = (runtimeConfig.public?.siteUrl as string) || 'https://www.simplecallcenter.com';
      const baseUrl = siteUrl.endsWith('/') ? siteUrl.slice(0, -1) : siteUrl;
      return baseUrl + '/cloud-call-center-software/';
    });
    
    const title =
      'Cloud Call Center Software (No Hardware, Unlimited Agents) | SimpleCallCenter';
    const description =
      'Cloud call center software for small teams: IVR, routing, queues, voicemail, reporting, call recording, and optional AI summaries. Usage-based pricing with no per-seat fees.';
    
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
    const ivrHref = '/ivr-call-routing/';
    
    const authModal = useAuthModal();
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
                Cloud call center
              </p>
    
              <h1
                id="page-title"
                class="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
              >
                Cloud Call Center Software — Run Your Call Center Without Hardware
              </h1>
    
              <p class="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl">
                SimpleCallCenter is a cloud-based call center platform for inbound teams. Set up routing, IVR,
                queues, voicemail, reporting, and optional AI tools — without desk phones, PBX boxes, or per-seat pricing.
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
                  No PBX hardware
                </li>
                <li class="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm font-medium">
                  Work-from-anywhere teams
                </li>
                <li class="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm font-medium">
                  Usage-based pricing
                </li>
              </ul>
            </div>
          </div>
        </section>
    
        <!-- WHY CLOUD -->
        <section class="w-full bg-white dark:bg-gray-900 py-16 lg:py-24" aria-labelledby="why-cloud">
          <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-4xl mx-auto">
              <h2 id="why-cloud" class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-8">
                Why cloud call centers replaced on-prem systems
              </h2>
    
              <ul class="space-y-4 mb-6">
                <li class="flex items-start gap-3 text-lg text-gray-700 dark:text-gray-300">
                  <span class="text-purple-600 dark:text-purple-400 font-bold mt-1">•</span>
                  <span><strong>No hardware</strong> to buy, configure, or babysit.</span>
                </li>
                <li class="flex items-start gap-3 text-lg text-gray-700 dark:text-gray-300">
                  <span class="text-purple-600 dark:text-purple-400 font-bold mt-1">•</span>
                  <span><strong>Remote-friendly</strong> by default — agents can work anywhere.</span>
                </li>
                <li class="flex items-start gap-3 text-lg text-gray-700 dark:text-gray-300">
                  <span class="text-purple-600 dark:text-purple-400 font-bold mt-1">•</span>
                  <span><strong>Scale on demand</strong> without upgrading appliances.</span>
                </li>
                <li class="flex items-start gap-3 text-lg text-gray-700 dark:text-gray-300">
                  <span class="text-purple-600 dark:text-purple-400 font-bold mt-1">•</span>
                  <span><strong>Faster iteration</strong> — improvements ship without maintenance windows.</span>
                </li>
              </ul>
    
              <p class="text-lg text-gray-600 dark:text-gray-400 italic">
                The best cloud systems feel “invisible”: callers get routed fast, teams stay organized, and managers see what’s happening.
              </p>
            </div>
          </div>
        </section>
    
        <!-- WHAT YOU NEED -->
        <section class="w-full bg-gray-50 dark:bg-gray-800 py-16 lg:py-24" aria-labelledby="need">
          <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-6xl mx-auto">
              <h2 id="need" class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                What a cloud call center should include
              </h2>
              <p class="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-12 text-center max-w-3xl mx-auto">
                Cloud call center software should cover the full inbound workflow — not just “make calls.”
              </p>
    
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 lg:p-8">
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">IVR, routing, and business hours</h3>
                  <p class="text-gray-700 dark:text-gray-300">
                    Route callers based on menus, language, and business hours — with clear fallbacks.
                  </p>
                  <NuxtLink class="mt-4 inline-flex text-purple-600 dark:text-purple-400 font-bold hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
                    :to="ivrHref">
                    IVR & call routing →
                  </NuxtLink>
                </div>
    
                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 lg:p-8">
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">Queues & team distribution</h3>
                  <p class="text-gray-700 dark:text-gray-300">
                    Keep inbound calls organized with queues and team-based routing.
                  </p>
                </div>
    
                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 lg:p-8">
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">Voicemail & missed-call alerts</h3>
                  <p class="text-gray-700 dark:text-gray-300">
                    Capture missed calls and notify the right people so follow-up doesn’t slip.
                  </p>
                </div>
    
                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 lg:p-8">
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">Reporting & optional QA</h3>
                  <p class="text-gray-700 dark:text-gray-300">
                    See answered vs missed calls, queue behavior, and agent activity. Enable recording/AI tools only when needed.
                  </p>
                </div>
              </div>
    
              <div class="flex flex-wrap gap-6 justify-center mt-10">
                <NuxtLink
                  class="text-purple-600 dark:text-purple-400 font-bold hover:text-purple-700 dark:hover:text-purple-300 transition-colors flex items-center gap-2"
                  :to="featuresHref"
                >
                  Explore features
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </NuxtLink>
    
                <NuxtLink
                  class="text-purple-600 dark:text-purple-400 font-bold hover:text-purple-700 dark:hover:text-purple-300 transition-colors flex items-center gap-2"
                  :to="pricingHref"
                >
                  See pricing
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </NuxtLink>
              </div>
            </div>
          </div>
        </section>
    
        <!-- WHO IT'S FOR -->
        <section class="w-full bg-white dark:bg-gray-900 py-16 lg:py-24" aria-labelledby="fit">
          <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-6xl mx-auto">
              <h2 id="fit" class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-12 text-center">
                Who cloud call center software is best for
              </h2>
    
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                <div class="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 shadow-lg">
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">Great fit if you:</h3>
                  <ul class="space-y-2">
                    <li class="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                      <span class="text-purple-600 dark:text-purple-400 mt-1">•</span>
                      <span>Have a remote or hybrid support team</span>
                    </li>
                    <li class="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                      <span class="text-purple-600 dark:text-purple-400 mt-1">•</span>
                      <span>Need professional inbound routing, queues, and reporting</span>
                    </li>
                    <li class="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                      <span class="text-purple-600 dark:text-purple-400 mt-1">•</span>
                      <span>Want predictable costs without per-seat pricing</span>
                    </li>
                  </ul>
                </div>
    
                <div class="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 shadow-lg">
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">Not ideal if you:</h3>
                  <ul class="space-y-2">
                    <li class="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                      <span class="text-purple-600 dark:text-purple-400 mt-1">•</span>
                      <span>Need on-prem hardware-only deployments</span>
                    </li>
                    <li class="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                      <span class="text-purple-600 dark:text-purple-400 mt-1">•</span>
                      <span>Prefer a seat-based enterprise bundle</span>
                    </li>
                  </ul>
                </div>
              </div>
    
              <p class="text-lg text-gray-600 dark:text-gray-400 text-center italic mt-10">
                Cloud isn’t just “hosted.” It’s easier operations, faster setup, and smoother scaling.
              </p>
            </div>
          </div>
        </section>
    
        <!-- FINAL CTA -->
        <section class="w-full bg-gradient-to-br from-purple-600 via-indigo-700 to-purple-800 py-16 lg:py-24" aria-labelledby="start">
          <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-4xl mx-auto text-center">
              <h2 id="start" class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Launch a cloud call center without the bloat
              </h2>
              <p class="text-lg sm:text-xl text-purple-100 mb-10 max-w-2xl mx-auto">
                Keep it simple: inbound routing, queues, voicemail, reporting — and optional AI tools when you want them.
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
    