<script setup lang="ts">
    const runtimeConfig = useRuntimeConfig();
    const url = computed(() => {
      const siteUrl = (runtimeConfig.public?.siteUrl as string) || 'https://www.simplecallcenter.com';
      const baseUrl = siteUrl.endsWith('/') ? siteUrl.slice(0, -1) : siteUrl;
      return baseUrl + '/inbound-call-center-software/';
    });
    
    const title =
      'Inbound Call Center Software (IVR, Routing, Unlimited Agents) | SimpleCallCenter';
    const description =
      'Inbound call center software for small teams: IVR, smart routing, queues, voicemail, reporting, call recording, and optional AI summaries. Usage-based pricing with no per-seat fees.';
    
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
    
    // Optional: update to your actual IVR detail page if different
    const ivrHref = '/ivr-call-routing/';
    
    const authModal = useAuthModal();
    </script>
    
    <template>
      <main>
        <!-- HERO -->
        <section class="w-full bg-cover bg-center relative overflow-hidden py-16 lg:py-24" aria-labelledby="page-title">
          <div class="absolute inset-0 bg-gradient-to-b from-white/80 to-white/60 dark:from-gray-900/80 dark:to-gray-900/60"></div>
          <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="max-w-4xl mx-auto">
              <p class="text-sm uppercase tracking-wider text-gray-600 dark:text-gray-400 mb-4">Inbound call center</p>
    
              <h1 id="page-title" class="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                Inbound Call Center Software for Small Teams — Route Calls, Reduce Missed Calls
              </h1>
    
              <p class="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl">
                SimpleCallCenter helps you answer more calls with IVR, smart routing, queues, voicemail, and live reporting —
                without per-agent pricing. Pay based on usage and enable add-ons only when you need them.
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
                  IVR + business hours
                </li>
                <li class="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm font-medium">
                  Smart routing + queues
                </li>
                <li class="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm font-medium">
                  Reporting + missed calls
                </li>
              </ul>
            </div>
          </div>
        </section>
    
        <!-- PROBLEMS -->
        <section class="w-full bg-white dark:bg-gray-900 py-16 lg:py-24" aria-labelledby="problems">
          <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-4xl mx-auto">
              <h2 id="problems" class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-8">
                What inbound call center software should fix
              </h2>
    
              <div class="space-y-4">
                <div class="flex items-start gap-3 text-lg text-gray-700 dark:text-gray-300">
                  <span class="text-purple-600 dark:text-purple-400 font-bold mt-1">•</span>
                  <span><strong>Missed calls</strong> when nobody knows who should answer.</span>
                </div>
                <div class="flex items-start gap-3 text-lg text-gray-700 dark:text-gray-300">
                  <span class="text-purple-600 dark:text-purple-400 font-bold mt-1">•</span>
                  <span><strong>No clear routing</strong> by team, language, or business hours.</span>
                </div>
                <div class="flex items-start gap-3 text-lg text-gray-700 dark:text-gray-300">
                  <span class="text-purple-600 dark:text-purple-400 font-bold mt-1">•</span>
                  <span><strong>No visibility</strong> into wait times, unanswered calls, or agent activity.</span>
                </div>
                <div class="flex items-start gap-3 text-lg text-gray-700 dark:text-gray-300">
                  <span class="text-purple-600 dark:text-purple-400 font-bold mt-1">•</span>
                  <span><strong>Inconsistent follow-up</strong> without voicemail, notifications, and call logs.</span>
                </div>
              </div>
    
              <p class="text-lg text-gray-600 dark:text-gray-400 italic mt-6">
                Inbound systems win on one thing: <strong class="text-gray-900 dark:text-white">getting the right caller to the right person fast</strong>.
              </p>
            </div>
          </div>
        </section>
    
        <!-- HOW IT WORKS -->
        <section class="w-full bg-gray-50 dark:bg-gray-800 py-16 lg:py-24" aria-labelledby="how">
          <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-6xl mx-auto">
              <h2 id="how" class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                A simple inbound call flow
              </h2>
              <p class="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-12 text-center max-w-3xl mx-auto">
                A typical setup uses IVR + business hours, then routes calls to the right queue, and falls back to voicemail when needed.
              </p>
    
              <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">1) Greet & qualify</h3>
                  <p class="text-gray-700 dark:text-gray-300">IVR menu (speech or keypad), language selection, and business hours handling.</p>
                </div>
                <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">2) Route & queue</h3>
                  <p class="text-gray-700 dark:text-gray-300">Route to the right team/line and queue calls when agents are busy.</p>
                </div>
                <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">3) Capture follow-up</h3>
                  <p class="text-gray-700 dark:text-gray-300">Voicemail, missed-call alerts, call logs, and reporting for accountability.</p>
                </div>
              </div>
    
              <div class="flex flex-wrap gap-6 justify-center mt-10">
                <NuxtLink class="text-purple-600 dark:text-purple-400 font-bold hover:text-purple-700 dark:hover:text-purple-300 transition-colors flex items-center gap-2"
                  :to="ivrHref">
                  IVR options
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </NuxtLink>
                <NuxtLink class="text-purple-600 dark:text-purple-400 font-bold hover:text-purple-700 dark:hover:text-purple-300 transition-colors flex items-center gap-2"
                  :to="featuresHref">
                  Explore features
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </NuxtLink>
              </div>
            </div>
          </div>
        </section>
    
        <!-- KEY CAPABILITIES -->
        <section class="w-full bg-white dark:bg-gray-900 py-16 lg:py-24" aria-labelledby="capabilities">
          <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-6xl mx-auto">
              <h2 id="capabilities" class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-12 text-center">
                Key capabilities for inbound teams
              </h2>
    
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 lg:p-8">
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">IVR & business hours</h3>
                  <p class="text-gray-700 dark:text-gray-300">
                    Guide callers with menus, handle after-hours calls, and route by language or intent.
                  </p>
                </div>
    
                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 lg:p-8">
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">Smart routing & queues</h3>
                  <p class="text-gray-700 dark:text-gray-300">
                    Route calls to the right team and queue calls when agents are busy to reduce churn.
                  </p>
                </div>
    
                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 lg:p-8">
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">Voicemail & missed-call alerts</h3>
                  <p class="text-gray-700 dark:text-gray-300">
                    Capture missed calls with voicemail and notify the right people so follow-up is consistent.
                  </p>
                </div>
    
                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 lg:p-8">
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">Reporting that shows what’s happening</h3>
                  <p class="text-gray-700 dark:text-gray-300">
                    Track answered vs missed calls, wait times, and agent activity — so you can improve the flow.
                  </p>
                </div>
              </div>
    
              <p class="text-lg text-gray-600 dark:text-gray-400 text-center italic mt-10">
                Want deeper analysis? Enable recording, transcription, or AI features only when they’re useful.
              </p>
            </div>
          </div>
        </section>
    
        <!-- PRICING HOOK -->
        <section class="w-full bg-gray-50 dark:bg-gray-800 py-16 lg:py-24" aria-labelledby="pricing">
          <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-4xl mx-auto text-center">
              <h2 id="pricing" class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Inbound-focused pricing that doesn’t punish growth
              </h2>
              <p class="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-10">
                Add agents freely. Pay for call usage and optional add-ons — not seats.
              </p>
    
              <div class="flex flex-col sm:flex-row gap-4 justify-center">
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
            </div>
          </div>
        </section>
    
        <!-- FAQ (short) -->
        <section class="w-full bg-white dark:bg-gray-900 py-16 lg:py-24" aria-labelledby="faq">
          <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-4xl mx-auto">
              <h2 id="faq" class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-12 text-center">
                Inbound call center FAQ
              </h2>
    
              <div class="space-y-4">
                <details class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-lg">
                  <summary class="cursor-pointer font-bold text-lg text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                    Does this work for small teams?
                  </summary>
                  <p class="mt-4 text-gray-700 dark:text-gray-300">
                    Yes. It’s designed for small inbound teams that need professional routing, reporting, and follow-up without per-seat pricing.
                  </p>
                </details>
    
                <details class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-lg">
                  <summary class="cursor-pointer font-bold text-lg text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                    Can I route calls by language or business hours?
                  </summary>
                  <p class="mt-4 text-gray-700 dark:text-gray-300">
                    Yes. A typical inbound flow uses business hours and IVR options (speech or keypad), then routes calls to the right queue.
                  </p>
                </details>
    
                <details class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-lg">
                  <summary class="cursor-pointer font-bold text-lg text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                    Do you charge per agent?
                  </summary>
                  <p class="mt-4 text-gray-700 dark:text-gray-300">
                    No. Agents are not billed per seat. Pricing is usage-based.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </section>
    
        <!-- FINAL CTA -->
        <section class="w-full bg-gradient-to-br from-purple-600 via-indigo-700 to-purple-800 py-16 lg:py-24" aria-labelledby="start">
          <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-4xl mx-auto text-center">
              <h2 id="start" class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Build a cleaner inbound experience
              </h2>
              <p class="text-lg sm:text-xl text-purple-100 mb-10 max-w-2xl mx-auto">
                Route calls properly, reduce missed calls, and scale your team without per-seat pricing.
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
                  to="/pricing/"
                >
                  See Pricing
                </NuxtLink>
              </div>
            </div>
          </div>
        </section>
      </main>

      <!-- Auth Modal -->
      <AuthModal :is-open="authModal.isOpen.value" @close="authModal.close()" />
    </template>
    