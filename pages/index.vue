<template>
  <section
    class="w-full bg-cover bg-center relative py-16 lg:py-24"
    :style="{ backgroundImage: `url(${image})` }"
  >
    <!-- Optional overlay for better text readability -->
    <div class="absolute inset-0 bg-gradient-to-b from-white/80 to-white/60 dark:from-gray-900/80 dark:to-gray-900/60"></div>
    
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="max-w-5xl mx-auto text-center">
      <!-- Page’s single H1 -->
      <!-- <h1 class="text-center text-5xl font-bold font-sans font-stretch-normal mt-5">
        A Real <span class="text-blue-800 dark:text-blue-300">Call Center</span> Platform
      </h1> -->
        <h1 class="text-4xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
          Your team talks to customers.<br>
          <span class="text-purple-800 dark:text-purple-300"> Our AI handles the rest.</span><br>
          <!-- <span class="text-purple-800 dark:text-purple-300"> No Per-Seat Fees. <br>Test Live with Free Credit.</span> -->
        </h1>
        
        <h2 class="text-lg sm:text-xl lg:text-2xl text-gray-700 dark:text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
          SimpleCallCenter is a <span class="mt-2 font-semibold text-purple-800 dark:text-white">phone platform for support teams</span> — with unlimited agents, usage-based pricing, and AI that works behind the scenes to flag call issues, summarize conversations, and help your team improve.
          <!-- Unlimited agents, full features, and usage-based pricing. Test your call flow live with a free $1 credit — no card required. -->
          <!-- <span class="block mt-2 font-semibold text-gray-900 dark:text-white"> -->
            <!-- Everything included, nothing gated — no per-seat pricing. -->
          <!-- </span> -->
        </h2>

        <div class="flex flex-col items-center justify-center gap-4 mt-10">
          <button
            @click="authModal.open()"
            class="group relative px-10 py-6 bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-800 hover:from-purple-500 hover:via-purple-600 hover:to-indigo-700 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-110 active:scale-105 shadow-2xl hover:shadow-purple-500/50 text-xl lg:text-2xl flex items-center justify-center gap-3 min-w-[280px] lg:min-w-[320px] border-2 border-white/20 hover:border-white/40 relative overflow-hidden z-10"
          >
            <!-- Animated background gradient -->
            <div class="absolute inset-0 bg-gradient-to-r from-purple-500 via-indigo-600 to-purple-500 bg-[length:200%_100%] animate-[shimmer_3s_ease-in-out_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <!-- Pulse ring effect -->
            <div class="absolute inset-0 rounded-full bg-purple-400 opacity-0 group-hover:opacity-30 animate-ping"></div>
            
            <!-- Content -->
            <span class="relative z-10 flex items-center gap-3">
              <span class="font-extrabold tracking-tight">Try It Live — Free $1 Credit</span>
              <svg class="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            
            <!-- Shine effect on hover -->
            <div class="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shine transition-opacity duration-500"></div>
          </button>
          <div class="flex flex-col sm:flex-row gap-6 mt-6 max-w-5xl mx-auto">
            <!-- Box 1 — AI Credit -->
            <div class="flex-1 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg">
              <div class="text-5xl mb-4">🎁</div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">$1 in Free AI Credit</h3>
              <p class="text-base text-gray-600 dark:text-gray-300">
                Covers call summaries, quality checks, and performance insights.
              </p>
            </div>

            <!-- Box 2 — Inbound Calls Still Work -->
            <div class="flex-1 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg">
              <div class="text-5xl mb-4">📞</div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">Calls Keep Flowing</h3>
              <p class="text-base text-gray-600 dark:text-gray-300">
                Your shared test number + PIN still works after credit runs out.
              </p>
            </div>

            <!-- Box 3 — CRM Still Syncs -->
            <div class="flex-1 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg">
              <div class="flex items-center justify-center gap-4 mb-4 h-12 flex-wrap">
                <!-- Zoho -->
                <span class="text-xl font-bold tracking-tight" style="color: #C8202F;">Zoho</span>
                <!-- HubSpot -->
                <span class="text-xl font-bold tracking-tight" style="color: #FF7A59;">HubSpot</span>
                <!-- Zendesk -->
                <!-- <span class="text-xl font-bold tracking-tight" style="color: #03363D;">Zendesk</span> -->
              </div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">CRM Integration Works</h3>
              <p class="text-base text-gray-600 dark:text-gray-300">
                CRM Sync Stays On
              </p>
            </div>
          </div>
          <p class="text-center text-sm lg:text-base text-gray-700 dark:text-gray-200 mt-6 font-medium">
            Test the real platform. No card. No tricks. Just $1 of free AI and full access.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Tired of overpriced call software section -->
  <section class="w-full bg-white dark:bg-gray-900 py-16 lg:py-24">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-5xl mx-auto">
        <!-- Section Title -->
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white text-center mb-12">
          Tired of overpriced call software and fake AI agents?
        </h2>

        <!-- Three Boxes -->
        <div class="flex flex-col sm:flex-row gap-6">
          <!-- Box 1 — Problem -->
          <div class="flex-1 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg">
            <div class="text-5xl mb-4">🔥</div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Most platforms punish you for growing.
            </h3>
            <p class="text-base text-gray-600 dark:text-gray-300">
              They charge per agent, lock you into contracts, and pitch "AI agents" that butcher your customer experience.
            </p>
          </div>

          <!-- Box 2 — Solution -->
          <div class="flex-1 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg">
            <div class="text-5xl mb-4">✅</div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
              We built SimpleCallCenter for real support teams — not for replacing them.
            </h3>
            <p class="text-base text-gray-600 dark:text-gray-300 mb-3">
              <strong class="font-semibold">Your agents stay human.</strong>
            </p>
            <p class="text-base text-gray-600 dark:text-gray-300 mb-2">
              Our AI works quietly in the background to:
            </p>
            <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-300 ml-4">
              <li class="flex items-start">
                <span class="text-purple-600 dark:text-purple-400 mr-2 font-bold">•</span>
                <span>Summarize every call</span>
              </li>
              <li class="flex items-start">
                <span class="text-purple-600 dark:text-purple-400 mr-2 font-bold">•</span>
                <span>Flag quality issues</span>
              </li>
              <li class="flex items-start">
                <span class="text-purple-600 dark:text-purple-400 mr-2 font-bold">•</span>
                <span>Provide insights without extra tools or manual review</span>
              </li>
            </ul>
          </div>

          <!-- Box 3 — Best Part -->
          <div class="flex-1 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/30 dark:to-indigo-900/30 backdrop-blur-sm rounded-xl p-8 border-2 border-purple-200 dark:border-purple-800 shadow-lg">
            <div class="text-5xl mb-4">💵</div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
              And the best part?
            </h3>
            <p class="text-lg font-bold text-purple-800 dark:text-purple-300 mb-3">
              No per-agent pricing. Ever.
            </p>
            <p class="text-base text-gray-600 dark:text-gray-300 mb-3">
              You only pay for what you use — calls, AI, integrations — at some of the lowest rates you'll find anywhere.
            </p>
            <p class="text-base font-semibold text-gray-900 dark:text-white mb-2">
              Voice calls are just $0.0025 per minute.
            </p>
            <p class="text-sm text-gray-600 dark:text-gray-400 italic mb-3">
              (Seriously. That's not a typo.)
            </p>
            <p class="text-base text-gray-600 dark:text-gray-300 mb-3">
              Want AI call summaries, scoring, or transcription? Enable them when you need them — billed separately, only if used.
            </p>
            <p class="text-base text-gray-600 dark:text-gray-300 font-semibold mb-2">
              No contracts. No surprise fees. No fine print.
            </p>
            <p class="text-base text-gray-600 dark:text-gray-300">
              Just honest pricing that doesn't make you feel tricked.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <setup-preview />
 
  <section
    class="w-full bg-cover bg-center py-16 lg:py-20"
    :style="{ backgroundImage: `url(${image})` }"
  >
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Flexible for Teams of Any Size
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"> 
          Perfect for teams who need to handle real inbound calls — without wasting time on setup or fighting clunky tools.
        </p>
      </div>

      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <div class="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-xl shadow-lg border border-blue-100 dark:border-gray-600 p-6 lg:p-8">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-5 flex items-center gap-3">
              <span class="text-2xl">🔹</span>
              <span>Solo Sellers & Small Teams</span>
            </h3>
            <p class="text-base text-gray-700 dark:text-gray-300 mb-4 font-medium">
              Everything you need to sound professional — without sounding like a bot.
            </p>
            <ul class="space-y-3 text-gray-700 dark:text-gray-300">
              <li class="flex items-start gap-3">
                <svg class="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Route by language, topic, or schedule</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Use your laptop or any SIP phone — no extra hardware</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Get AI summaries and transcripts without hiring extra staff</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Set up in minutes, test for free</span>
              </li>
            </ul>
          </div>
          <div class="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 rounded-xl shadow-lg border border-purple-100 dark:border-gray-600 p-6 lg:p-8">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-5 flex items-center gap-3">
              <span class="text-2xl">🔸</span>
              <span>Growing or Multi-Brand Teams</span>
            </h3>
            <p class="text-base text-gray-700 dark:text-gray-300 mb-4 font-medium">
              Scale support without growing your budget.
            </p>
            <ul class="space-y-3 text-gray-700 dark:text-gray-300">
              <li class="flex items-start gap-3">
                <svg class="w-6 h-6 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Unlimited agents + queues — no per-seat pricing</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-6 h-6 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Run multiple call centers under one login</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-6 h-6 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Evaluate calls with AI, assign voicemails, monitor live</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-6 h-6 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Collaborate across teams with extensions and warm transfers</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section
    class="w-full bg-cover bg-center py-16 lg:py-20"
    :style="{ backgroundImage: `url(${image})` }"
  >
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          How does billing work?
        </h2>
        <p class="text-xl font-bold text-blue-800 dark:text-blue-300 mb-8">
          💸 No seat fees. No upgrades. Just usage.
        </p>
      </div>

      <div class="max-w-4xl mx-auto mb-12">
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 lg:p-10">
          <div class="mb-8">
            <p class="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Your monthly plan includes usage credit (like <span class="font-semibold text-blue-800 dark:text-blue-300">$20</span> or <span class="font-semibold text-blue-800 dark:text-blue-300">$50</span>), used for:
            </p>
            
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div class="flex items-start gap-3 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-2 border-blue-200 dark:border-blue-800">
                <svg class="w-7 h-7 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div class="flex-1">
                  <span class="inline-block px-3 py-1 text-xs font-semibold text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/50 rounded-full mb-2">Calls</span>
                  <p class="text-base font-medium text-gray-900 dark:text-gray-100">Inbound/Outbound call minutes</p>
                </div>
              </div>
              <div class="flex items-start gap-3 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border-2 border-purple-200 dark:border-purple-800">
                <svg class="w-7 h-7 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                <div class="flex-1">
                  <span class="inline-block px-3 py-1 text-xs font-semibold text-purple-700 dark:text-purple-300 bg-purple-100 dark:bg-purple-900/50 rounded-full mb-2">Smart Features (AI)</span>
                  <p class="text-base font-medium text-gray-900 dark:text-gray-100">Summaries, transcription, evaluations</p>
                </div>
              </div>
              <div class="flex items-start gap-3 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border-2 border-green-200 dark:border-green-800">
                <svg class="w-7 h-7 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <div class="flex-1">
                  <span class="inline-block px-3 py-1 text-xs font-semibold text-green-700 dark:text-green-300 bg-green-100 dark:bg-green-900/50 rounded-full mb-2">Recording</span>
                  <p class="text-base font-medium text-gray-900 dark:text-gray-100">Call recording</p>
                </div>
              </div>
              <div class="flex items-start gap-3 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border-2 border-orange-200 dark:border-orange-800">
                <svg class="w-7 h-7 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <div class="flex-1">
                  <span class="inline-block px-3 py-1 text-xs font-semibold text-orange-700 dark:text-orange-300 bg-orange-100 dark:bg-orange-900/50 rounded-full mb-2">Fax</span>
                  <p class="text-base font-medium text-gray-900 dark:text-gray-100">Fax + OCR (if used)</p>
                </div>
              </div>
            </div>

            <div class="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-6 border-2 border-blue-200 dark:border-blue-800">
              <div class="flex items-start gap-3">
                <span class="text-2xl">💡</span>
                <p class="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                  After your credit runs out, we simply bill at standard rates — <span class="font-semibold text-blue-800 dark:text-blue-300">no surprise charges, no seat fees, no upsells.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <div class="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-xl shadow-lg border-2 border-blue-200 dark:border-blue-700 p-6 lg:p-8">
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-5 flex items-center gap-3">
              <span class="text-3xl">🧾</span>
              <span>All Plans Include</span>
            </h3>
            <ul class="space-y-3 text-gray-700 dark:text-gray-300">
              <li class="flex items-start gap-3">
                <svg class="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>One phone/fax number</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Unlimited agents</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>All features (no gating)</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Magic link onboarding</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Full access to AI tools (usage-billed only)</span>
              </li>
            </ul>
          </div>
          <div class="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-700 rounded-xl shadow-lg border-2 border-green-200 dark:border-green-700 p-6 lg:p-8">
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-5 flex items-center gap-3">
              <span class="text-3xl">🎁</span>
              <span>Test for Free</span>
            </h3>
            <ul class="space-y-3 text-gray-700 dark:text-gray-300">
              <li class="flex items-start gap-3">
                <svg class="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Create your call center in 6 steps</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Get a shared number + PIN to test live</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Receive $1 credit to try transcription, summaries, and AI scoring</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>All real. All free to start. No card required.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section
    class="w-full bg-cover bg-center py-16 lg:py-20"
    :style="{ backgroundImage: `url(${image})` }"
  >
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          What do I get with my plan?
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"> 
          Everything included. No feature gates. No fake tiers. Every plan includes the full platform — only usage is billed.
        </p>
      </div>

      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <div 
            v-for="(feature, idx) in features" 
            :key="idx" 
            class="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 lg:p-8 hover:shadow-2xl hover:border-purple-300 dark:hover:border-purple-600 transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
          >
            <!-- Gradient background on hover -->
            <div class="absolute inset-0 bg-gradient-to-br from-purple-50/0 to-blue-50/0 group-hover:from-purple-50/50 group-hover:to-blue-50/30 dark:group-hover:from-purple-900/10 dark:group-hover:to-blue-900/10 transition-all duration-300"></div>
            
            <!-- Icon Container -->
            <div class="relative mb-4">
              <div class="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 group-hover:from-purple-600 group-hover:to-indigo-700 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                <div class="text-white" v-html="feature.icon"></div>
              </div>
            </div>
            
            <!-- Content -->
            <div class="relative">
              <h3 class="text-lg lg:text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-purple-700 dark:group-hover:text-purple-400 transition-colors">
                {{ feature.title }}
              </h3>
              <p class="text-sm lg:text-base text-gray-600 dark:text-gray-300 leading-relaxed">{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Testimonials Section -->
  <section
    class="w-full bg-cover bg-center py-16 lg:py-20"
    :style="{ backgroundImage: `url(${image})` }"
  >
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          What Our Customers Say
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"> 
          Real feedback from teams using SimpleCallCenter to handle their calls
        </p>
      </div>

      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <!-- Testimonial 1 -->
          <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 lg:p-8 hover:shadow-2xl hover:border-purple-300 dark:hover:border-purple-600 transition-all duration-300">
            <div class="flex items-center mb-4">
              <!--  -->
            </div>
            <p class="text-gray-700 text-lg font-bold dark:text-gray-300 mb-6 leading-relaxed italic">
              Game-changer for our support team!
            </p>
            <p class="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              We migrated from a well-known cloud telephony provider, and the cost of our call handling dropped by nearly 5x overnight. What really surprised us was how affordable the AI features were — call summaries, transcripts, and agent evaluations used to feel out of reach, but now they’re part of our daily workflow. It's not ridiculously cheap, but it's finally priced for growing teams like ours.
            </p>
            <div class="border-t border-gray-200 dark:border-gray-700 pt-4">
              <p class="font-semibold text-gray-900 dark:text-white">— Sarah M.</p>
              <p class="text-sm text-gray-600 dark:text-gray-400">Customer Experience Lead</p>
            </div>
          </div>

          <!-- Testimonial 2 -->
          <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 lg:p-8 hover:shadow-2xl hover:border-purple-300 dark:hover:border-purple-600 transition-all duration-300">
            <div class="flex items-center mb-4">

            </div>
            <p class="text-gray-700 text-lg font-bold dark:text-gray-300 mb-6 leading-relaxed italic">
              Exactly what our team needed!
            </p>
            <p class="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              The desktop app has been a big win for us. Features like preventing the computer from going to sleep and auto-answering made a huge difference — our team stopped missing calls left and right. And even when a call is missed, the follow-up is seamless with transcripts, voicemails, and call notes all in one place. It just works.
            </p>
            <div class="border-t border-gray-200 dark:border-gray-700 pt-4">
              <p class="font-semibold text-gray-900 dark:text-white">— Dan P.</p>
              <p class="text-sm text-gray-600 dark:text-gray-400">Call Center Manager</p>
            </div>
          </div>

          <!-- Testimonial 3 -->
          <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 lg:p-8 hover:shadow-2xl hover:border-purple-300 dark:hover:border-purple-600 transition-all duration-300">
            <div class="flex items-center mb-4">
             
            </div>
            <p class="text-gray-700 text-lg font-bold dark:text-gray-300 mb-6 leading-relaxed italic">
              We love it
            </p>
            <p class="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              We're a small, inbound-focused team, and every customer matters. We can't afford to hand calls off to AI — and with this platform, we don’t have to. It’s clearly built with human agents in mind. Whisper and eavesdrop features help us support each other in real time, and since there’s no per-seat fee, we were able to make almost the whole staff available to answer calls. The pricing is fantastic, especially for smaller teams that care about quality.
            </p>
            <div class="border-t border-gray-200 dark:border-gray-700 pt-4">
              <p class="font-semibold text-gray-900 dark:text-white">— Melissa K.</p>
              <p class="text-sm text-gray-600 dark:text-gray-400">Commercial Director</p>
            </div>
          </div>

         
        </div>
      </div>
    </div>
  </section>

  <!-- Auth Modal -->
  <AuthModal :is-open="authModal.isOpen.value" @close="authModal.close()" />
  
</template>

<script setup>
import image from '@/assets/images/bg/bg-startup.webp'

const authModal = useAuthModal()

useHead({
  title: 'SimpleCallCenter – AI-Powered Call Center & Phone Platform',
  meta: [
    {
      name: 'description',
      content:
        'Real business phone platform for teams. No seat fees. No fake tiers. Just pay for usage — calls, faxes, AI tools. Includes internal calling and extensions. Try live, free.',
    },
    {
      name: 'keywords',
      content:
        'AI call center software, virtual call center platform, business phone system, desktop app, multilingual IVR, call queue system, VoIP call center, shared voicemail, inbound fax service, AI quality monitoring, no per seat pricing, usage-based pricing, auto-answer, whisper feature, eavesdrop, call transcription, agent evaluation, AI summaries, voicemail transcription, missed call follow-up, live dashboard, call notes, AI scoring',
    },
    {
      property: 'og:title',
      content: 'SimpleCallCenter – AI-Powered Call Center & Phone Platform',
    },
    {
      property: 'og:description',
      content:
        'Run a full call center with multilingual IVR, queues, internal calls, shared voicemail, fax, and AI call quality control — without per-seat pricing.',
    },
    { property: 'og:type', content: 'website' },
    {
      property: 'og:url',
      content: 'https://www.simplecallcenter.com/',
    },
    {
      property: 'og:image',
      content:
        'https://www.simplecallcenter.com/images/social-preview.png',
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://www.simplecallcenter.com/',
    },
    {
      rel: 'alternate',
      hreflang:"x-default",
      href:"https://www.simplecallcenter.com/"
    },
  ],
  script: [
    {
      type: 'application/ld+json',
      // JSON-LD stays the same; adjust if your live domain or image path changes
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'SimpleCallCenter',
        operatingSystem: 'All',
        applicationCategory: 'CommunicationApplication',
        description:
          'From one-person shops to 50-agent teams — SimpleCallCenter powers real conversations without the telecom nonsense.',
        offers: {
          '@type': 'Offer',
          price: '20.00',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
          url: 'https://www.simplecallcenter.com/',
        },
      }),
    },
  ],
})

const features = [
  {
    icon: `<svg class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>`,
    title: 'Agent Desktop App',
    description: 'Persistent Electron app with calls, follow-ups, voicemails, dashboards — no browser tabs needed'
  },
  {
    icon: `<svg class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>`,
    title: 'One Included Number',
    description: 'Every call center includes 1 voice + fax number (US/Canada) — more available for $7/mo'
  },
  {
    icon: `<svg class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
    </svg>`,
    title: 'SIP Phone Support',
    description: 'Use with softphones or hardware SIP phones — standalone or in parallel with the app'
  },
  {
    icon: `<svg class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>`,
    title: 'Smart IVRs',
    description: 'Auto-generated based on your queues and languages. Text-to-speech in 188 languages. Supports voice commands + keypad input (simultaneously)'
  },
  {
    icon: `<svg class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>`,
    title: 'Call Queues & Routing',
    description: 'Unlimited queues + schedules. Call waiting, position announcements, voicemail fallback with timers. Voicemails are assignable and trackable ("Processing," "Closed")'
  },
  {
    icon: `<svg class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>`,
    title: 'Live Coaching',
    description: 'Supervisors can listen, whisper, or join live calls. Flagged calls (via AI scoring) shown for review'
  },
  {
    icon: `<svg class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>`,
    title: 'Live Dashboard',
    description: 'Real-time call activity, agent status, queue metrics — no refresh'
  },
  {
    icon: `<svg class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>`,
    title: 'Magic-Link Onboarding',
    description: 'Send one link, they join instantly with Google or email login. No passwords. App download offered right after sign-up.'
  },
  {
    icon: `<svg class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
    </svg>`,
    title: 'Internal Extensions',
    description: 'Every user gets an internal SIP number — agents can transfer, call, and hold each other like a real business.'
  }
]
</script>

<style scoped>
/* Hide scrollbar for Chrome, Safari and Opera */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>