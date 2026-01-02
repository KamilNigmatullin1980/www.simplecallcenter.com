<script setup lang="ts">
    const runtimeConfig = useRuntimeConfig();
    const url = computed(() => {
      const siteUrl = (runtimeConfig.public?.siteUrl as string) || 'https://www.simplecallcenter.com';
      const baseUrl = siteUrl.endsWith('/') ? siteUrl.slice(0, -1) : siteUrl;
      return baseUrl + '/ai-call-center-software/';
    });
    
    const title = 'AI Call Center Software (Transcription, Summaries, QA) | SimpleCallCenter';
    const description =
      'AI call center software that supports real agents: call transcription, AI summaries, quality evaluation, and searchable call insights. Enable AI only when needed with usage-based pricing and no per-seat fees.';
    
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
    const recordingHref = '/call-recording-call-monitoring/';
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
              <p class="text-sm uppercase tracking-wider text-gray-600 dark:text-gray-400 mb-4">AI call center</p>
    
              <h1 id="page-title" class="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                AI Call Center Software — AI That Helps Your Team (Not Replaces It)
              </h1>
    
              <p class="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl">
                Use AI for the boring parts: transcription, call summaries, and quality signals.
                SimpleCallCenter keeps humans in control — AI is optional, charged by usage, and can be enabled only for selected calls or teams.
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
                  Transcription (optional)
                </li>
                <li class="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm font-medium">
                  AI summaries (optional)
                </li>
                <li class="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm font-medium">
                  QA signals (optional)
                </li>
              </ul>
            </div>
          </div>
        </section>
    
        <!-- POSITIONING -->
        <section class="w-full bg-white dark:bg-gray-900 py-16 lg:py-24" aria-labelledby="positioning">
          <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-4xl mx-auto">
              <h2 id="positioning" class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-8">
                AI should reduce workload — not change your business into a chatbot factory
              </h2>
    
              <p class="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Many vendors pitch “AI agents” as a replacement for your team. That can be risky for customer experience.
                A better approach is using AI quietly in the background: summarize calls, detect quality issues, and make follow-up easier.
              </p>
    
              <ul class="space-y-4">
                <li class="flex items-start gap-3 text-lg text-gray-700 dark:text-gray-300">
                  <span class="text-purple-600 dark:text-purple-400 font-bold mt-1">•</span>
                  <span><strong>Humans handle customers</strong>, AI handles paperwork.</span>
                </li>
                <li class="flex items-start gap-3 text-lg text-gray-700 dark:text-gray-300">
                  <span class="text-purple-600 dark:text-purple-400 font-bold mt-1">•</span>
                  <span><strong>AI stays optional</strong>, so you control cost and where it’s applied.</span>
                </li>
                <li class="flex items-start gap-3 text-lg text-gray-700 dark:text-gray-300">
                  <span class="text-purple-600 dark:text-purple-400 font-bold mt-1">•</span>
                  <span><strong>Start small</strong>: enable AI only for specific queues, agents, or sampling.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
    
        <!-- WHAT AI DOES -->
        <section class="w-full bg-gray-50 dark:bg-gray-800 py-16 lg:py-24" aria-labelledby="what">
          <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-6xl mx-auto">
              <h2 id="what" class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                What AI can do in a call center (useful, realistic stuff)
              </h2>
              <p class="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-12 text-center max-w-3xl mx-auto">
                AI is most valuable when it saves time on review, documentation, and coaching.
              </p>
    
              <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">Transcription</h3>
                  <p class="text-gray-700 dark:text-gray-300">
                    Turn calls into searchable text so teams can find key moments quickly.
                  </p>
                </div>
    
                <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">AI summaries</h3>
                  <p class="text-gray-700 dark:text-gray-300">
                    Generate short summaries: reason for call, outcome, action items, and follow-up notes.
                  </p>
                </div>
    
                <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">Quality signals</h3>
                  <p class="text-gray-700 dark:text-gray-300">
                    Spot patterns: escalation risk, missed steps, compliance reminders, and coaching opportunities.
                  </p>
                </div>
              </div>
    
              <div class="text-center mt-10">
                <NuxtLink
                  class="text-purple-600 dark:text-purple-400 font-bold hover:text-purple-700 dark:hover:text-purple-300 transition-colors inline-flex items-center gap-2"
                  :to="recordingHref"
                >
                  Call recording & monitoring
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </NuxtLink>
              </div>
            </div>
          </div>
        </section>
    
        <!-- HOW TO ROLL OUT -->
        <section class="w-full bg-white dark:bg-gray-900 py-16 lg:py-24" aria-labelledby="rollout">
          <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-6xl mx-auto">
              <h2 id="rollout" class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-12 text-center">
                How teams roll out AI without chaos
              </h2>
    
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 lg:p-8">
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">Start with recording + sampling</h3>
                  <p class="text-gray-700 dark:text-gray-300">
                    Record calls first, then review a small sample weekly. Add AI summaries for that sample to speed things up.
                  </p>
                </div>
    
                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 lg:p-8">
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">Enable AI only where it helps</h3>
                  <p class="text-gray-700 dark:text-gray-300">
                    Use AI for selected queues, agents, or call types — so costs stay aligned with value.
                  </p>
                </div>
    
                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 lg:p-8">
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">Keep humans accountable</h3>
                  <p class="text-gray-700 dark:text-gray-300">
                    AI can highlight issues, but managers and agents decide what to change and how to coach.
                  </p>
                </div>
    
                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 lg:p-8">
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">Measure impact</h3>
                  <p class="text-gray-700 dark:text-gray-300">
                    Track whether AI reduces review time and improves consistency — not whether it “sounds impressive.”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
    
        <!-- WHO IT HELPS -->
        <section class="w-full bg-gray-50 dark:bg-gray-800 py-16 lg:py-24" aria-labelledby="who">
          <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-6xl mx-auto">
              <h2 id="who" class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-12 text-center">
                Where AI helps most
              </h2>
    
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                <div class="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 shadow-lg">
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">Support teams</h3>
                  <p class="text-gray-700 dark:text-gray-300 mb-4">
                    Summaries and QA signals make follow-up faster and coaching more consistent.
                  </p>
                  <NuxtLink
                    class="text-purple-600 dark:text-purple-400 font-bold hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
                    :to="supportHref"
                  >
                    Support call center software →
                  </NuxtLink>
                </div>
    
                <div class="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 shadow-lg">
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">Sales teams</h3>
                  <p class="text-gray-700 dark:text-gray-300 mb-4">
                    Summaries help document intent and objections. Coaching helps reps improve faster.
                  </p>
                  <NuxtLink
                    class="text-purple-600 dark:text-purple-400 font-bold hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
                    :to="salesHref"
                  >
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
                AI call center questions
              </h2>
    
              <div class="space-y-4">
                <details class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-lg">
                  <summary class="cursor-pointer font-bold text-lg text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                    Do I need AI to run a call center?
                  </summary>
                  <p class="mt-4 text-gray-700 dark:text-gray-300">
                    No. You can run the full call center without AI. AI is optional and helps reduce review and documentation effort.
                  </p>
                </details>
    
                <details class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-lg">
                  <summary class="cursor-pointer font-bold text-lg text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                    Can I enable AI only for certain calls?
                  </summary>
                  <p class="mt-4 text-gray-700 dark:text-gray-300">
                    Yes. Many teams enable AI only for selected queues or sampling, so it’s used where it provides value.
                  </p>
                </details>
    
                <details class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-lg">
                  <summary class="cursor-pointer font-bold text-lg text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                    Is this “AI agents answering calls”?
                  </summary>
                  <p class="mt-4 text-gray-700 dark:text-gray-300">
                    No. This page is about AI assisting your team — summaries, transcription, and quality signals — while humans handle customers.
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
                Add AI without losing control
              </h2>
              <p class="text-lg sm:text-xl text-purple-100 mb-10 max-w-2xl mx-auto">
                Turn AI on where it helps, keep humans on calls, and keep pricing aligned with usage.
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
    