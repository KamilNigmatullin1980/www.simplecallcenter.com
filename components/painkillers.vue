<template>
  <div class="px-4 py-12">
    <!-- Section-level heading under index.vue’s H1 -->
    <h2 class="text-3xl font-bold text-center mb-3">Featured Included in Every Plan</h2>
    <p class="text-lg text-gray-500 dark:text-gray-200 text-center mb-8">
      We solved the stuff that shouldn't be hard in the first place.
    </p>

    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div v-for="(item, index) in datas" :key="index" class="flex">
          <div class="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 flex flex-col w-full">
            <!-- Each feature title now an H3 (instead of H5) -->
            <h3 class="text-xl light:text-gray-900 font-semibold mb-2">
              {{ item.title }}
            </h3>
            <p class="light:text-gray-600 dark:text-gray-400">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const datas = ref([
  {
    icon: 'uil uil-server',
    title: 'Persistent Desktop App.',
    desc: 'Lightweight app for agents and supervisors — call handling, voicemail, follow-ups, and dashboards without tab juggling..',
  },
  {
    icon: 'uil uil-cloud-heart',
    title: 'Built-in browser phone.',
    desc: 'Make and receive calls without installing anything. Works right from your browser.',
  },
  {
    icon: 'uil uil-envelope-check',
    title: 'Invite your team in seconds.',
    desc: 'Share a Magic Link. That’s it. They’re in.',
  },
  {
    icon: 'uil uil-users-alt',
    title: 'All features unlocked.',
    desc: 'CRM, issue tracker, supervisor tools—all ready on day one.',
  },
  {
    icon: 'uil uil-tachometer-fast-alt',
    title: 'Smart status indicators',
    desc: 'Call center open but no agents? We’ll highlight that in red. Closed? Status goes white. You always know where you stand, instantly.',
  },
  {
    icon: 'uil uil-compact-disc',
    title: 'Full real-time visibility',
    desc: "Know exactly what's happening—live. See who’s on a call, who’s available, inbound and outbound totals, and real-time queue stats across all hotlines.",
  },
  {
    icon: 'uil uil-comment-alt-check',
    title: 'Assign missed calls and voicemails instantly.',
    desc: 'Supervisors can assign follow-up to any agent with one click. Agents can also claim tasks themselves. No more mystery callbacks or unanswered messages.',
  },
  {
    icon: 'uil uil-comment-alt-check',
    title: 'Automatic state holiday support.',
    desc: 'We pull official holiday calendars from Google and pre-select federal and state holidays, so your system adjusts automatically. You’re covered through next year—and we’ll remind you when it’s time to update again.',
  },
])
</script>

<style scoped>
/* All styling remains in Tailwind—no extra CSS needed. */
</style>
