<template>
  <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
    <!-- Section 1: Who's It For? -->
    <div class="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
      <div class="lg:col-span-2">
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Who's It For?
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-300 italic mb-2">
          Perfect for teams who need to handle real inbound calls — without wasting time on setup or fighting clunky tools.
        </p>
      </div>
      <div class="lg:col-span-3 space-y-6">
        <div class="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-xl shadow-lg border border-blue-100 dark:border-gray-600 p-6 lg:p-8">
          <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-5 flex items-center gap-3">
            <span class="text-3xl">🧑‍💼</span>
            <span>Solo Sellers & Small Teams</span>
          </h3>
          <ul class="space-y-3 text-gray-700 dark:text-gray-300">
            <li class="flex items-start gap-3">
              <svg class="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Handle support or sales calls professionally</span>
            </li>
            <li class="flex items-start gap-3">
              <svg class="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Route by language, topic, or working hours</span>
            </li>
            <li class="flex items-start gap-3">
              <svg class="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Use your laptop or SIP phone — no hardware required</span>
            </li>
            <li class="flex items-start gap-3">
              <svg class="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Test for free, live, before you commit</span>
            </li>
          </ul>
        </div>
        <div class="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 rounded-xl shadow-lg border border-purple-100 dark:border-gray-600 p-6 lg:p-8">
          <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-5 flex items-center gap-3">
            <span class="text-3xl">🏢</span>
            <span>Growing or Multi-Brand Teams</span>
          </h3>
          <ul class="space-y-3 text-gray-700 dark:text-gray-300">
            <li class="flex items-start gap-3">
              <svg class="w-6 h-6 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Unlimited agents and queues — no per-seat pricing</span>
            </li>
            <li class="flex items-start gap-3">
              <svg class="w-6 h-6 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Run multiple call centers under one account</span>
            </li>
            <li class="flex items-start gap-3">
              <svg class="w-6 h-6 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Assign voicemails, monitor calls, evaluate agents with AI</span>
            </li>
            <li class="flex items-start gap-3">
              <svg class="w-6 h-6 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Collaborate across teams with internal extensions and attended transfers</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Section 2: What Problem Does This Solve? -->
    <div class="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
      <div class="lg:col-span-2">
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          What Problem Does This Solve?
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-300 italic mb-2">
          "Why not just use Zoom / a phone line / yelling?"
        </p>
        <p class="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
          Most tools aren't made for actual inbound work. SCC fixes that.
        </p>
      </div>
      <div class="lg:col-span-3 space-y-5">
        <div v-for="(item, idx) in problemSolutions" :key="idx" class="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 space-y-4 hover:shadow-xl transition-shadow">
          <div class="flex items-start gap-4">
            <div class="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
              <span class="text-red-600 dark:text-red-400 font-bold">❌</span>
            </div>
            <div class="flex-1">
              <p class="text-sm font-semibold text-red-600 dark:text-red-400 mb-2 uppercase tracking-wide">Problem</p>
              <p class="text-gray-700 dark:text-gray-300 leading-relaxed">{{ item.problem }}</p>
            </div>
          </div>
          <div class="flex items-start gap-4 pt-3 border-t border-gray-200 dark:border-gray-700">
            <div class="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
              <span class="text-green-600 dark:text-green-400 font-bold">✅</span>
            </div>
            <div class="flex-1">
              <p class="text-sm font-semibold text-green-600 dark:text-green-400 mb-2 uppercase tracking-wide">SCC Solution</p>
              <p class="text-gray-700 dark:text-gray-300 leading-relaxed">{{ item.solution }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Section 3: Everything Included -->
    <div class="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
      <div class="lg:col-span-2">
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Everything Included
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-300 italic mb-2">
          "What do I get with my plan?"
        </p>
        <p class="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
          No feature gates. No fake tiers. Every plan includes the full platform — only usage is billed.
        </p>
      </div>
      <div class="lg:col-span-3">
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-6 lg:p-8">
          <div class="grid grid-cols-1 gap-5">
            <div v-for="(feature, idx) in features" :key="idx" class="bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-700 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600 p-5 hover:shadow-md hover:border-blue-300 dark:hover:border-blue-600 transition-all">
              <h3 class="text-base font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-3">
                <span class="text-2xl">{{ feature.icon }}</span>
                <span>{{ feature.title }}</span>
              </h3>
              <p class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Section 4: Usage-Based Pricing -->
    <div class="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
      <div class="lg:col-span-2">
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Usage-Based Pricing
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-300 italic mb-2">
          "How does billing work?"
        </p>
        <p class="text-2xl font-bold text-blue-800 dark:text-blue-300 mb-4">
          💸 No seat fees. No upgrades. Just usage.
        </p>
        <p class="text-base text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
          You pick a monthly plan — it comes with included usage credit (e.g., $20, $50, etc.). We bill from that credit first for:
        </p>
        <ul class="list-disc list-inside space-y-2 text-base text-gray-700 dark:text-gray-300 mb-4">
          <li>Inbound/Outbound call minutes</li>
          <li>AI summaries, transcription, evaluations</li>
          <li>Call recording</li>
          <li>Fax + OCR (if used)</li>
        </ul>
        <p class="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
          After credit is used up, extra usage is billed at standard per-minute or per-call rates. Simple.
        </p>
      </div>
      <div class="lg:col-span-3 space-y-6">
        <div class="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-xl shadow-lg border border-blue-100 dark:border-gray-600 p-6 lg:p-8">
          <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-5 flex items-center gap-3">
            <span class="text-3xl">🧾</span>
            <span>All plans include:</span>
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
        <div class="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-700 rounded-xl shadow-lg border border-green-100 dark:border-gray-600 p-6 lg:p-8">
          <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-5 flex items-center gap-3">
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
  </section>
</template>

<script setup>
const problemSolutions = [
  {
    problem: 'Missed voicemails, tab juggling, "Sorry, can you repeat that?"',
    solution: 'All calls, voicemails, and agent tools in a persistent desktop app'
  },
  {
    problem: 'Agents forget to log in, switch tabs, or miss calls',
    solution: 'Electron app always running — with call waiting, hold, and call transfers built in'
  },
  {
    problem: 'Setting up IVRs or call flows takes a tech degree',
    solution: 'You define languages + queues — we auto-build the IVR with TTS and ASR in 188 languages'
  },
  {
    problem: 'Crappy "AI" features locked behind $200/month tiers',
    solution: 'All plans include AI summaries, transcription, and evaluations — pay only for what you use'
  }
]

const features = [
  {
    icon: '🖥',
    title: 'Agent Desktop App',
    description: 'Persistent Electron app with calls, follow-ups, voicemails, dashboards — no browser tabs needed'
  },
  {
    icon: '📞',
    title: 'One Included Number',
    description: 'Every call center includes 1 voice + fax number (US/Canada) — more available for $7/mo'
  },
  {
    icon: '📟',
    title: 'SIP Phone Support',
    description: 'Use with softphones or hardware SIP phones — standalone or in parallel with the app'
  },
  {
    icon: '🧠',
    title: 'Smart IVRs',
    description: 'Auto-generated based on your queues and languages. Text-to-speech in 188 languages. Supports voice commands + keypad input (simultaneously)'
  },
  {
    icon: '🔁',
    title: 'Call Queues & Routing',
    description: 'Unlimited queues + schedules. Call waiting, position announcements, voicemail fallback with timers. Voicemails are assignable and trackable ("Processing," "Closed")'
  },
  {
    icon: '🧑‍🏫',
    title: 'Live Coaching',
    description: 'Supervisors can listen, whisper, or join live calls. Flagged calls (via AI scoring) shown for review'
  },
  {
    icon: '📊',
    title: 'Live Dashboard',
    description: 'Real-time call activity, agent status, queue metrics — no refresh'
  },
  {
    icon: '🧙',
    title: 'Magic-Link Onboarding',
    description: 'Send one link, they join instantly with Google or email login. No passwords. App download offered right after sign-up.'
  },
  {
    icon: '📡',
    title: 'Internal Extensions',
    description: 'Every user gets an internal SIP number — agents can transfer, call, and hold each other like a real business.'
  }
]
</script>
