<template>
  <section
    class="w-full bg-cover bg-center relative overflow-hidden py-8 lg:py-12"
    :style="{ backgroundImage: `url(${image})` }"
  >
    <!-- Optional overlay for better text readability -->
    <div class="absolute inset-0 bg-gradient-to-b from-white/80 to-white/60 dark:from-gray-900/80 dark:to-gray-900/60"></div>
    
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Header -->
      <div class="max-w-5xl mx-auto text-center mb-8">
        <h1 class="text-4xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
          How It <span class="text-purple-800 dark:text-purple-300">Works</span>
        </h1>
        <p class="text-lg sm:text-xl lg:text-2xl text-gray-700 dark:text-gray-200 mb-4 max-w-3xl mx-auto leading-relaxed">
          Learn how SimpleCallCenter helps you manage your call center operations
        </p>
      </div>

      <!-- Wiki-style layout: Sidebar + Content -->
      <div class="max-w-7xl mx-auto">
        <div class="flex flex-col lg:flex-row gap-8">
          <!-- Left Sidebar: Navigation -->
          <aside class="w-full lg:w-64 flex-shrink-0">
            <nav class="sticky top-24 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-4">
              <h2 class="text-lg font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
                Sections
              </h2>
              <ul class="space-y-2">
                <li v-for="section in sections" :key="section.id">
                  <NuxtLink
                    :to="`/how-it-works/${section.param}`"
                    class="block w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                    :class="activeSection === section.id
                      ? 'bg-purple-600 text-white shadow-md'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'"
                  >
                    {{ section.title }}
                  </NuxtLink>
                </li>
              </ul>
            </nav>
          </aside>

          <!-- Right Content Area -->
          <main class="flex-1 min-w-0">
            <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 lg:p-8">
              <!-- Dynamic Content Component -->
              <component :is="currentComponent" />
            </div>
          </main>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useHead, useRoute, useRouter } from '#imports'
import image from '~/assets/images/bg/bg-startup.webp'

// Import section components
import InboundCalls from '~/components/how-it-works/InboundCalls.vue'
import InboundCallsDirectPhone from '~/components/how-it-works/InboundCallsDirectPhone.vue'
import InboundFax from '~/components/how-it-works/InboundFax.vue'
import OutboundCalls from '~/components/how-it-works/OutboundCalls.vue'
import AISummaries from '~/components/how-it-works/AISummaries.vue'
import AIAgentEfficiency from '~/components/how-it-works/AIAgentEfficiency.vue'
import QueuesRouting from '~/components/how-it-works/QueuesRouting.vue'
import VoicemailFollowUps from '~/components/how-it-works/VoicemailFollowUps.vue'
import MissedCallsFollowUps from '~/components/how-it-works/MissedCallsFollowUps.vue'
import BillingUsage from '~/components/how-it-works/BillingUsage.vue'

const route = useRoute()
const router = useRouter()

// Section definitions with URL parameter mapping
const sections = [
  { id: 'inbound-calls', param: 'inbound_calls', title: 'Inbound Call for Callcenter', component: InboundCalls },
  { id: 'inbound-calls-direct-phone', param: 'inbound_calls_direct_phone', title: 'Inbound Calls for Direct Phone Numbers', component: InboundCallsDirectPhone },
  { id: 'inbound-fax', param: 'inbound_fax', title: 'Inbound Fax', component: InboundFax },
  { id: 'outbound-calls', param: 'outbound_calls', title: 'Outbound Calls', component: OutboundCalls },
  { id: 'ai-summaries', param: 'ai_summaries', title: 'AI Summaries', component: AISummaries },
  { id: 'ai-agent-efficiency', param: 'ai_agent_efficiency', title: 'AI Agent Efficiency', component: AIAgentEfficiency },
  { id: 'queues-routing', param: 'queues_routing', title: 'Queues & Routing', component: QueuesRouting },
  { id: 'voicemail-follow-ups', param: 'voicemail_follow_ups', title: 'Voicemail & Follow-Ups', component: VoicemailFollowUps },
  { id: 'missed-calls-follow-ups', param: 'missed_calls_follow_ups', title: 'Missed Calls & Follow Ups', component: MissedCallsFollowUps },
  { id: 'billing-usage', param: 'billing_usage', title: 'Billing & Usage', component: BillingUsage },
]

// Create a map from param to section id for quick lookup
const paramToSectionId = Object.fromEntries(
  sections.map(s => [s.param, s.id])
)

// Function to get section ID from route parameter
const getSectionFromRoute = () => {
  const tabParam = Array.isArray(route.params.tab) ? route.params.tab[0] : route.params.tab
  if (tabParam && typeof tabParam === 'string') {
    const sectionId = paramToSectionId[tabParam]
    if (sectionId) {
      return sectionId
    }
  }
  // Handle legacy query parameter for backward compatibility
  const queryTab = Array.isArray(route.query.tab) ? route.query.tab[0] : route.query.tab
  if (queryTab && typeof queryTab === 'string') {
    const sectionId = paramToSectionId[queryTab]
    if (sectionId) {
      // Redirect to new path-based URL
      router.replace(`/how-it-works/${queryTab}`)
      return sectionId
    }
  }
  return 'inbound-calls' // default
}

// Active section state
const activeSection = ref(getSectionFromRoute())

// Watch for route changes (e.g., browser back/forward)
watch(() => route.params.tab, (newTab) => {
  const tabParam = Array.isArray(newTab) ? newTab[0] : newTab
  if (tabParam && typeof tabParam === 'string') {
    const sectionId = paramToSectionId[tabParam]
    if (sectionId && sectionId !== activeSection.value) {
      activeSection.value = sectionId
    }
  } else {
    // If no tab param, redirect to default
    router.replace('/how-it-works/inbound_calls')
  }
}, { immediate: true })

// Initialize from URL on mount
onMounted(() => {
  const sectionId = getSectionFromRoute()
  if (sectionId !== activeSection.value) {
    activeSection.value = sectionId
  }
  // If invalid tab, redirect to default
  const tabParam = Array.isArray(route.params.tab) ? route.params.tab[0] : route.params.tab
  if (!tabParam || typeof tabParam !== 'string' || !paramToSectionId[tabParam]) {
    router.replace('/how-it-works/inbound_calls')
  }
})

// Current component based on active section
const currentComponent = computed(() => {
  const section = sections.find(s => s.id === activeSection.value)
  return section ? section.component : InboundCalls
})

// Dynamic meta tags based on section
const sectionMeta = computed(() => {
  const section = sections.find(s => s.id === activeSection.value)
  if (!section) {
    return {
      title: 'How It Works | SimpleCallCenter',
      url: 'https://simplecallcenter.com/how-it-works',
    }
  }
  
  let sectionTitle = 'How It Works | SimpleCallCenter'
  
  switch (section.id) {
    case 'inbound-calls':
      sectionTitle = 'Inbound Calls for Call Center | How It Works'
      break
    case 'inbound-calls-direct-phone':
      sectionTitle = 'Inbound Calls for Direct Phone Numbers | How It Works'
      break
    case 'inbound-fax':
      sectionTitle = 'Inbound Fax | How It Works'
      break
    case 'outbound-calls':
      sectionTitle = 'Outbound Calls | How It Works'
      break
    case 'ai-summaries':
      sectionTitle = 'AI Summaries | How It Works'
      break
    case 'ai-agent-efficiency':
      sectionTitle = 'AI Agent Efficiency | How It Works'
      break
    case 'queues-routing':
      sectionTitle = 'Queues & Routing | How It Works'
      break
    case 'voicemail-follow-ups':
      sectionTitle = 'Voicemail & Follow-Ups | How It Works'
      break
    case 'missed-calls-follow-ups':
      sectionTitle = 'Missed Calls & Follow Ups | How It Works'
      break
    case 'billing-usage':
      sectionTitle = 'Billing & Usage | How It Works'
      break
  }
  
  return {
    title: sectionTitle,
    url: `https://simplecallcenter.com/how-it-works/${section.param}`,
  }
})

useHead({
  title: sectionMeta.value.title,
  meta: [
    {
      name: 'description',
      content:
        'Learn how SimpleCallCenter works. Understand inbound calls, outbound calls, AI summaries, queues, routing, voicemail, dashboards, and billing.',
    },
    {
      name: 'keywords',
      content:
        'how it works, call center guide, inbound calls, outbound calls, AI summaries, call routing, voicemail, dashboards, billing',
    },
    { property: 'og:title', content: sectionMeta.value.title },
    {
      property: 'og:description',
      content:
        'Learn how SimpleCallCenter helps you manage your call center operations effectively.',
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: sectionMeta.value.url },
  ],
})
</script>

<style scoped>
/* All styling handled via Tailwind */
</style>




