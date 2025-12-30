<template>
  <section
    class="w-full bg-cover bg-center relative overflow-hidden"
    :style="{ backgroundImage: `url(${image})` }"
  >
    <!-- Optional overlay for better text readability -->
    <div class="absolute inset-0 bg-gradient-to-b from-white/80 to-white/60 dark:from-gray-900/80 dark:to-gray-900/60"></div>
    
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 lg:py-24">
      <!-- Call Center Features Title -->
      <div class="max-w-5xl mx-auto text-center mb-12">
        <h1 class="text-4xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
          Our <span class="text-purple-800 dark:text-purple-300">Features</span>
        </h1>
        <p class="text-xl sm:text-2xl lg:text-3xl text-gray-700 dark:text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
          <strong>All features are included in every plan</strong> <br></br>
          <strong><span class="text-purple-800 dark:text-purple-300">no extra fees, no tiered pricing. Just usage.</span></strong>
        </p>
      </div>

      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <article
            v-for="(item, index) in cc_features"
            :key="item.name"
            class="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col border border-gray-100 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 hover:-translate-y-1"
          >
            <!-- Icon with modern background -->
            <div class="flex-shrink-0 mb-6">
              <div class="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500 text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                <i :class="`${item.icon} text-2xl`"></i>
              </div>
            </div>

            <!-- Content area -->
            <div class="flex-1 flex flex-col">
              <h3 class="mb-4 text-xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                {{ item.name }}
              </h3>
              <p class="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed text-base">
                {{ item.desc }}
              </p>

              <!-- “Read More” will stay at bottom -->
              <a
                v-if="item.path"
                @click="navigateTo(`/features/${item.path}`)"
                class="mt-auto inline-flex items-center text-purple-600 dark:text-purple-400 font-semibold hover:text-purple-700 dark:hover:text-purple-300 transition-all duration-300 group/link cursor-pointer"
              >
                <span class="mr-2">Learn more</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2.5"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>

            <!-- Decorative gradient overlay on hover -->
            <div class="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-50/0 to-purple-50/0 dark:from-purple-900/0 dark:to-purple-900/0 group-hover:from-purple-50/50 group-hover:to-transparent dark:group-hover:from-purple-900/20 dark:group-hover:to-transparent transition-all duration-300 pointer-events-none"></div>
          </article>
        </div>
      </div>

    </div>
  </section>
</template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import { useHead, navigateTo } from '#imports'
  import image from '~/assets/images/bg/bg-startup.webp'
  
  useHead({
    title: 'Features | SimpleCallCenter',
    meta: [
      { name: 'description', content: 'Explore all features included in SimpleCallCenter — from AI call evaluation and visual call flows to inbound/outbound routing, dashboards, voicemail automation, and more.' },
      { name: 'keywords', content: 'SimpleCallCenter features, call center features, AI call evaluation, visual call flow, inbound call routing, outbound calls, call queues, dashboards and reporting, shared voicemail, call recording, call transcription' },
      { property: 'og:title', content: 'Explore Our Awesome Features | SimpleCallCenter' },
      { property: 'og:description', content: 'Discover the robust features of SimpleCallCenter including AI-based automated setup, multilingual IVR, integrated web phone, and advanced call center tools designed for business efficiency.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://simplecallcenter.com/features' },
    ],
  })
  
  const cc_features = ref([
    { icon: 'uil uil-robot',               name: 'Easy, Fully Automated Setup',     desc: 'Set up your system quickly with AI-driven processes, including synthetic voice integration. Our streamlined, automated process asks minimal questions, tailoring the setup to your business needs.', path: 'fully-automated-setup' },
    // { icon: 'uil uil-globe',               name: 'Multilingual IVR Creation',        desc: 'Create IVRs in over 80 languages during call center setup, ensuring global accessibility without needing multilingual interfaces.', path: 'multilingual-ivr' },
    { icon: 'uil uil-microphone',          name: 'Automatic IVR Menu with Advanced Options on 80+ Languages', desc: 'Benefit from an interactive voice response system with built-in speech recognition and DTMF support.', path: 'speech-recognition' },
    { icon: 'uil uil-sitemap',             name: 'Automatic Call Distribution System for Inbound Calls',                       desc: 'Utilize our Advanced Call Distribution system for position announcement, SLAs and Timers and Integrated voicemail, and more for efficient call handling.', path: 'automatic-call-distribution' },
    { icon: 'uil uil-phone-volume',        name: 'Quality Control With AI',                   desc: 'AI automatically reviews every call and flags only those where the agent sounds rude or service falls below standard — with alerts visible right in the desktop app.', path: 'quality-assurance-and-quality-control' },
    { icon: 'uil uil-life-ring',           name: 'Supervisor Assistance',            desc: 'Supervisors can discreetly join live calls to provide tips and guidance directly from the user interface.', path: 'supervisor-assistance' },
    { icon: 'uil uil-phone-volume',        name: 'Reporting & Dashboards',                   desc: 'Hourly queue stats, daily agent stats, SLA breakdowns, AI-flagged calls, missed & voicemail follow-up, usage and peaks — all turned into dashboards with drill-down to individual CDRs, so you always know what’s happening in your call center, not just how many minutes you used.', path: 'reporting-and-dashboards' },
    { icon: 'uil uil-sync',                name: 'Agent Flexibility',                desc: 'Configure wrap-up time, call timeouts, and no-answer rules per agent. Let the same person work in multiple hotlines and call centers at once, even as both agent and supervisor.', path: 'multi-role-callcenters' },
    { icon: 'uil uil-voicemail',           name: 'Shared Voicemail Processing',           desc: 'Not every call reaches an agent — queues time out, lines close for the day, people call after hours. SimpleCallCenter turns all of that into a shared, trackable voicemail workflow, not a black hole.', path: 'shared-voicemail' },
    { icon: 'uil uil-voicemail',           name: 'Missed Call Processing',           desc: 'If the caller leaves a voicemail, it becomes a voicemail item. If the caller hangs up without recording anything, it becomes a missed call item. All of these missed calls land in the same shared “Missed & Voicemail” workspace in the desktop app.', path: 'missed-call-processing' },
    { icon: 'uil uil-eye',                 name: 'Real-Time Agent Presence',         desc: 'Live presence for every agent across all call centers and queues: who’s logged in, on a call, or logged out. Presence updates are pushed in real time to the desktop app and used by the ACD, so supervisors and routing logic always work off the same, up-to-date status.', path: 'real-time-agent-presence' },
    { icon: 'uil uil-phone-volume',        name: 'Personal Phone Numbers (Direct Lines)',                   desc: 'Give users their own direct numbers on top of call center queues and extensions. Direct calls ring their desktop app, SIP phone, and mobile app, and optional recordings from personal numbers are visible only to that user, not to supervisors.', path: 'personal-phone-numbers-direct-lines' },
    { icon: 'uil uil-phone-volume',        name: 'Outbound Calls',                   desc: 'Agents can dial out as a call center (with full recording, transcription, AI QA, and supervisor access) or from their own direct number. Personal outbound calls can be recorded optionally, but those recordings are visible only to that user, not to supervisors or admins.', path: 'outbound-calls' },
    { icon: 'uil uil-phone-volume',        name: 'Inbound Fax Service',                   desc: 'Receive faxes on your existing numbers: the system detects fax tone, converts the fax to PDF, and delivers it by email and inside the portal. Dedicated fax lines are supported for clinics and other fax-heavy users — no separate fax service needed.', path: 'inbound-fax-service' },
    
    { icon: 'uil uil-phone-volume',        name: 'Free Internal Calls, Extensions & Transfers',                   desc: 'Every user gets a free internal extension that works on SIP desk phones, softphones, and our mobile app with push wake-up. Incoming calls can be warm-transferred to any extension, and personal voicemail with SIP MWI is coming soon.', path: 'free-internal-calls-and-extensions' },
    { icon: 'uil uil-desktop',             name: 'All-in-One Desktop App',        desc: 'One desktop app for everyone: a softphone for users, a full call center workstation for agents, and a real-time monitoring console for supervisors — with multi-account support, visual CDRs, recordings, transcripts, and AI quality flags built in.', path: 'desktop-softphone' },
    

    
    
    
    
    { icon: 'uil uil-calendar-alt',        name: 'Automatic Schedule Redirect',      desc: 'Define business hours once, and SimpleCallCenter will automatically send off-hours calls to voicemail with transcription and AI summary, so your team can follow up instead of guessing what those missed calls were about.', path: 'automatic-schedule-redirect' },
    
    { icon: 'uil uil-file-download',       name: 'Visual Call Flow & Advanced CDR',              desc: 'Open any call and see a visual timeline of every step: messages played, queues entered, agents tried, ring times, answer, transfer, and hangup — plus recording, transcript, and AI review all in one screen.', path: 'visual-call-flow-and-advanced-cdr' },
    { icon: 'uil uil-phone-volume',        name: 'Security & Reliability',                   desc: 'Redundant in two regions (New York and San Francisco), so if one site goes down, the other continues to handle new calls. TLS is used everywhere we control the connection, with exceptions only for third-party SIP phones, and recording access is scoped so call center recordings are available for QA while personal direct-number recordings are visible only to their owner.', path: 'security-and-reliability' },
    // { icon: 'uil uil-calendar-alt',        name: 'Automatic State Holiday Support',  desc: 'Enjoy automated adjustments for state holidays.', path: 'automatic-state-holiday-support' },
  ])
  
  </script>
  
  <style scoped>
  /* All styling handled via Tailwind */
  </style>
  