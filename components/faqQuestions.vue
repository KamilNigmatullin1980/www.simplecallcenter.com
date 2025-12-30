<template>
  <div class="space-y-4">
    <div
      v-for="(item, index) in datas"
      :key="item.id"
      class="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:border-purple-300 dark:hover:border-purple-600 transition-all duration-300 overflow-hidden"
    >
      <!-- Question Header -->
      <button
        @click="item.show = !item.show"
        class="w-full flex justify-between items-center px-6 py-5 text-left focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 rounded-t-2xl"
      >
        <span class="text-lg font-bold text-gray-900 dark:text-white pr-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
          {{ item.question }}
        </span>
        <div class="flex-shrink-0">
          <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500 text-white flex items-center justify-center transition-transform duration-300"
               :class="item.show ? 'rotate-180' : ''">
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </button>

      <!-- Answer Body -->
      <div
        v-show="item.show"
        class="px-6 pb-5 pt-2 text-gray-700 dark:text-gray-300 leading-relaxed border-t border-gray-100 dark:border-gray-700 animate-fade-in"
      >
        <p class="whitespace-pre-line" v-html="item.answer"></p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const datas = ref([
  {
    id: "headingSeven",
    collapseId: "collapseSeven",
    question: "This sounds too good to be true. What's the catch?",
    answer: "There's no catch. You've got nothing to lose except 2–10 minutes of your very valuable time. With simplified login, you'll be dropped straight into a working system — no setup screens, no forms, no fake demo dashboards. We want you to see it for yourself, click around, and test it freely. We're not going to chase you with emails, calls, or surprise pricing. If it works for you, great. If not, no hard feelings.",
    show: false
  },
  {
    id: "headingEight",
    collapseId: "collapseEight",
    question: "Why is this so much easier (and cheaper) than other platforms?",
    answer: "Most legacy platforms are built on closed, outdated systems that are hard to adapt — and even harder to afford. We built SimpleCallCenter on modern open-source technology that's now more powerful, flexible, and stable than ever — thanks to a global community that's been refining it for over a decade. That gives us the freedom to offer a better product, faster setup, and fair pricing — without sacrificing reliability.",
    show: false
  },
  {
    id: "headingTwentyTwo",
    collapseId: "collapseTwentyTwo",
    question: "Why should I use this when I already have my mobile phone?",
    answer: "Because your phone wasn't built for business. SimpleCallCenter gives you a professional number, call routing, voicemail, agent sharing, and full visibility — all without replacing your phone. You can even connect your mobile to take calls if you want.",
    show: false
  },
  {
    id: "headingNine",
    collapseId: "collapseNine",
    question: "Can one person manage multiple departments or hotlines?",
    answer: "Absolutely. You can create as many call centers as you need — each with its own name, voice menu, and dedicated phone number. A single agent (you) can serve all of them. So even if you're a one-person team, you can look like a full company with Sales, Support, and Billing — all handled through separate lines, but managed from one place.",
    show: false
  },
  {
    id: "headingTwenty",
    collapseId: "collapseTwenty",
    question: "Can I use my own phone number?",
    answer: "Yes. You can port your existing number to us, or we can assign you a new one. We'll even help you with the porting process.",
    show: false
  },
  {
    id: "headingFour",
    collapseId: "collapseFour",
    question: "Do I need any technical skills to set this up?",
    answer: "Not at all. That's literally the whole point — we built this to free you up from dealing with telecom headaches so you can focus on real work, like making sales, helping customers, or growing your business. No SIP configs. No audio files. No engineers required. Just click, and you're in.",
    show: false
  },
  {
    id: "headingTwo",
    collapseId: "collapseTwo",
    question: "What exactly do I get for $20/month?",
    answer: "You get a full-featured call center: one phone number, unlimited agents, access to all features, and $20 of usage credit for inbound or outbound calls. That includes real-time monitoring, CRM, smart call routing, call recordings, voicemail, and fully customizable IVRs. You'll also get detailed statistics on every call, agent efficiency, and hotline usage — the kind of reporting that usually costs extra or doesn't exist at all. Honestly, even setting this up with free software would cost you more — and that's before you factor in hosting, setup time, or ongoing maintenance.",
    show: false
  },
  {
    id: "headingThree",
    collapseId: "collapseThree",
    question: "How long does it take to get started?",
    answer: "About two minutes. Just choose your language, name your hotline, and we'll auto-generate everything — even the phone menu. You can also select from pre-built schedules (like 'Weekdays 9–5') or create your own in just a few clicks. It's all designed to get you live fast, without technical friction.",
    show: false
  },
  {
    id: "headingFive",
    collapseId: "collapseFive",
    question: "Can I customize the phone menu (IVR)?",
    answer: "Yes — but you don't have to. We auto-generate your IVR using text-to-speech based on your selected language and hotline names. You can edit any phrase later.",
    show: false
  },
  {
    id: "headingTen",
    collapseId: "collapseTen",
    question: "Do I have to manually update my voice menu when things change?",
    answer: "Nope — we've got that covered. When you update your schedule, business hours, or hotline languages, the system automatically rephrases your voice prompts using built-in text-to-speech. You can reorder languages, adjust menu structure, and even improve speech recognition by adding custom keywords — all without editing audio files. It just works.",
    show: false
  },
  {
    id: "headingEleven",
    collapseId: "collapseEleven",
    question: "Can I use this for outbound calls?",
    answer: "Absolutely. You can make outbound calls directly from your browser — just click on any number in the CRM, missed calls list, or contact view. Every call shows your dedicated business number as the caller ID, so customers recognize who's calling. While this platform is built for powerful inbound communication, outbound calling is fully supported in a manual, one-click way. No autodialers or robocalls (yet), but for follow-ups and personal outreach, it's quick, direct, and effective.",
    show: false
  },
  {
    id: "headingTwelve",
    collapseId: "collapseTwelve",
    question: "Will I be charged after I sign up?",
    answer: "No. You can test everything for free using our shared number + PIN system. Pay only when you're ready to go live with your own number.",
    show: false
  },
  {
    id: "headingSix",
    collapseId: "collapseSix",
    question: "Is this good for small businesses or solo founders?",
    answer: "That's exactly who we built this for. Our mission from the start was to help small businesses grow — to give them the tools usually reserved for big companies, but without the complexity or cost. That said, the system is fully capable of supporting larger teams too. Whether you're solo, scaling fast, or already managing a busy support team, SimpleCallCenter adapts to your size without getting in your way.",
    show: false
  },
  {
    id: "headingTwentyOne",
    collapseId: "collapseTwentyOne",
    question: "Can I use this with a desk phone or softphone app?",
    answer: "Yes! While our built-in browser phone works out of the box, you can also connect traditional SIP desk phones (like Cisco, Yealink, or Linksys) or softphone apps like Acrobits or Zoiper. When a call comes in, every device linked to your account rings in parallel — so whether you're at your desk, on your laptop, or on the go, you won't miss it. Push notifications are supported on mobile if your app allows it. It's all optional, but the flexibility is there if you want it.",
    show: false
  },
  {
    id: "headingThirteen",
    collapseId: "collapseThirteen",
    question: "Can I take calls on my mobile while I'm out?",
    answer: "Yes — you can use a SIP app like Acrobits or Zoiper with push notifications to stay connected on your phone, even when it's locked or in your pocket. Our browser phone is great on desktop, but mobile browsers tend to sleep, so we recommend using a dedicated app. And when you're back at your desk, every call is recorded and logged — so you can listen to the recording, take notes, or follow up directly from your dashboard.",
    show: false
  },
  {
    id: "headingFourteen",
    collapseId: "collapseFourteen",
    question: "Does this integrate with other CRMs like HubSpot or Salesforce?",
    answer: "Yes! We currently support <strong>HubSpot</strong> and <strong>Zoho CRM</strong> integrations via OAuth. When connected, every call is automatically logged in your CRM with full details — direction, duration, recording links, transcripts, and AI summaries (if enabled). Contacts are created or updated automatically, and calls are assigned to the right agent/owner.<br><br>Learn more: <a href='/how-it-works/hubspot_integration' class='text-purple-600 dark:text-purple-400 hover:underline font-semibold'>HubSpot Integration</a> | <a href='/how-it-works/zoho_integration' class='text-purple-600 dark:text-purple-400 hover:underline font-semibold'>Zoho Integration</a>",
    show: false
  },
  {
    id: "headingFivteen",
    collapseId: "collapseFivteen",
    question: "Is this secure?",
    answer: "Yes. We use Google authentication, encrypted audio, secure storage, and JWT-based session management. All your data is protected using modern security standards.",
    show: false
  }
])
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.3s ease-out;
}
</style>
