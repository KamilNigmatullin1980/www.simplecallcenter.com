<script setup lang="ts">
import { ref } from 'vue'
import { useHead } from '#imports'
import image from '../../assets/images/bg/bg-startup.png'

useHead({
  title: 'Reporting & Dashboards | SimpleCallCenter',
  meta: [
    {
      name: 'description',
      content:
        'SimpleCallCenter keeps detailed statistics for queues, agents, and usage, then turns them into actionable dashboards, not just CSV exports. Get insights into call volume, SLA performance, agent metrics, and quality.',
    },
    {
      name: 'keywords',
      content:
        'reporting, dashboards, call center analytics, SLA reports, agent performance, queue statistics, call center metrics, SimpleCallCenter',
    },
    { property: 'og:title', content: 'Reporting & Dashboards | SimpleCallCenter' },
    {
      property: 'og:description',
      content:
        'Actionable dashboards and reports for queues, agents, and usage. Track SLA performance, agent metrics, AI quality flags, and usage capacity all in one place.',
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://simplecallcenter.com/reporting-and-dashboards' },
  ],
})

const coreFeatures = ref([
  {
    icon: 'uil uil-chart-line',
    title: 'Actionable Dashboards',
    description: 'SimpleCallCenter keeps detailed statistics for queues, agents, and usage, then turns them into actionable dashboards, not just CSV exports.',
    hint: 'Visual insights'
  },
  {
    icon: 'uil uil-clock',
    title: 'Hourly Aggregations',
    description: 'Every hour the system aggregates what happened in each call center / hotline: total calls, answered calls, missed calls, voicemails, outbound calls, and peak simultaneous calls.',
    hint: 'Real-time data'
  },
  {
    icon: 'uil uil-user',
    title: 'Per-Agent Daily Stats',
    description: 'Per-agent daily stats are stored: calls answered, first-attempt answers, talk time, missed/rejected calls, wrap-up time, logged-in time, and auto-logout events.',
    hint: 'Individual metrics'
  }
])

const queueFeatures = ref([
  {
    icon: 'uil uil-chart-bar',
    title: 'Call Volume Analysis',
    description: 'See call volume by hour, day, and date range with interactive charts and tables showing trends and patterns.',
    hint: 'Volume trends'
  },
  {
    icon: 'uil uil-list-ul',
    title: 'Call Disposition',
    description: 'Track answered vs abandoned vs voicemail vs missed (no voicemail) calls to understand call outcomes.',
    hint: 'Outcome tracking'
  },
  {
    icon: 'uil uil-clock',
    title: 'Wait Time Metrics',
    description: 'See average and maximum wait time in queue to identify bottlenecks and optimize routing.',
    hint: 'Performance metrics'
  },
  {
    icon: 'uil uil-shield-check',
    title: 'SLA Tracking',
    description: 'Configurable SLA (e.g., "answer 80% of calls within 20 seconds") with breakdown of calls answered in SLA vs out of SLA.',
    hint: 'SLA compliance'
  },
  {
    icon: 'uil uil-chart-pie',
    title: 'Visual Analytics',
    description: 'Charts and tables make it easy to see at what times abandonment spikes, which hotlines struggle to meet SLA, and whether you need more people or better scheduling.',
    hint: 'Visual insights'
  },
  {
    icon: 'uil uil-link',
    title: 'Drill-Down to CDRs',
    description: 'Clicking on a bar or row takes you down to the actual CDR list for that period, providing detailed call records.',
    hint: 'Detailed records'
  }
])

const agentFeatures = ref([
  {
    icon: 'uil uil-phone',
    title: 'Call Handling Metrics',
    description: 'See how many calls each agent answered, how many were answered on the first attempt, and total talk time with averages.',
    hint: 'Call volume'
  },
  {
    icon: 'uil uil-times-circle',
    title: 'Missed & Rejected Calls',
    description: 'Track missed, rejected, and no-answer calls per agent to identify performance issues and training needs.',
    hint: 'Issue identification'
  },
  {
    icon: 'uil uil-clock',
    title: 'Time Management',
    description: 'Monitor total wrap-up time, total logged-in time, and how often agents were auto-logged-out for no answers.',
    hint: 'Time tracking'
  },
  {
    icon: 'uil uil-users-alt',
    title: 'Performance Insights',
    description: 'See who carries most of the load, tends to ignore or reject calls, spends too long in wrap-up, and who might need coaching.',
    hint: 'Team insights'
  }
])

const qaFeatures = ref([
  {
    icon: 'uil uil-filter',
    title: 'AI Flag Filtering',
    description: 'Filter calls by AI-flagged = yes (potentially rude / poor service) to quickly identify quality issues.',
    hint: 'Quality filtering'
  },
  {
    icon: 'uil uil-chart-line',
    title: 'Flagged Call Analysis',
    description: 'See which agents and queues generate the most flagged calls to understand where quality really drops.',
    hint: 'Quality trends'
  },
  {
    icon: 'uil uil-link',
    title: 'Combined Metrics',
    description: 'Combine AI flags with volume, missed calls, and SLA to get a complete picture of service quality.',
    hint: 'Holistic view'
  },
  {
    icon: 'uil uil-tasks',
    title: 'Follow-Up Tracking',
    description: 'Missed calls and voicemails appear in the shared workspace with statuses (Unassigned → In process → Done), so you can track how many were actually worked.',
    hint: 'Workflow tracking'
  }
])

const usageFeatures = ref([
  {
    icon: 'uil uil-chart-line',
    title: 'Usage Over Time',
    description: 'See inbound and outbound minutes over time to understand usage patterns and plan capacity.',
    hint: 'Usage trends'
  },
  {
    icon: 'uil uil-file-alt',
    title: 'Fax Statistics',
    description: 'Track fax pages received to monitor fax service usage alongside voice calls.',
    hint: 'Fax metrics'
  },
  {
    icon: 'uil uil-chart-bar',
    title: 'Peak Concurrent Calls',
    description: 'See peak concurrent calls per hour to understand real usage vs included allowance and whether you\'re close to capacity limits.',
    hint: 'Capacity planning'
  }
])
</script>

<template>
  <section
    class="w-full bg-cover bg-center relative overflow-hidden py-16 lg:py-24"
    :style="{ backgroundImage: `url(${image})` }"
  >
    <!-- Optional overlay for better text readability -->
    <div class="absolute inset-0 bg-gradient-to-b from-white/80 to-white/60 dark:from-gray-900/80 dark:to-gray-900/60"></div>
    
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Header -->
      <div class="max-w-5xl mx-auto text-center mb-16">
        <h1 class="text-4xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
          Reporting & <span class="text-purple-800 dark:text-purple-300">Dashboards</span>
        </h1>
        <p class="text-lg sm:text-xl lg:text-2xl text-gray-700 dark:text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
          SimpleCallCenter keeps detailed statistics for queues, agents, and usage, then turns them into actionable dashboards, not just CSV exports.
        </p>
      </div>

      <!-- Core Features -->
      <div class="max-w-7xl mx-auto mb-20">
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 lg:p-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Comprehensive Statistics
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 mb-10 text-center max-w-3xl mx-auto">
            Detailed data collection and aggregation for complete visibility
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <div
              v-for="(feature, index) in coreFeatures"
              :key="index"
              class="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-2xl hover:border-purple-300 dark:hover:border-purple-600 hover:-translate-y-1 transition-all duration-300"
            >
              <div class="flex-shrink-0 mb-6">
                <div class="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500 text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <i :class="`${feature.icon} text-2xl`"></i>
                </div>
              </div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                {{ feature.title }}
              </h3>
              <p class="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {{ feature.description }}
              </p>
              <div class="flex items-center text-purple-600 dark:text-purple-400">
                <i class="uil uil-info-circle text-lg mr-2"></i>
                <span class="text-sm font-semibold">{{ feature.hint }}</span>
              </div>
              
              <!-- Decorative gradient overlay on hover -->
              <div class="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-50/0 to-purple-50/0 dark:from-purple-900/0 dark:to-purple-900/0 group-hover:from-purple-50/50 group-hover:to-transparent dark:group-hover:from-purple-900/20 dark:group-hover:to-transparent transition-all duration-300 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Queue & SLA Reports -->
      <div class="max-w-7xl mx-auto mb-20">
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 lg:p-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Queue & SLA Reports
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 mb-10 text-center max-w-3xl mx-auto">
            For each call center and hotline, get complete visibility into call volume, performance, and SLA compliance
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <div
              v-for="(feature, index) in queueFeatures"
              :key="index"
              class="group relative bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-700 dark:to-gray-800 rounded-xl p-6 lg:p-8 border border-purple-100 dark:border-gray-600 hover:shadow-lg hover:border-purple-300 dark:hover:border-purple-500 transition-all duration-300"
            >
              <div class="flex items-start gap-4">
                <div class="flex-shrink-0">
                  <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500 text-white shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <i :class="`${feature.icon} text-xl`"></i>
                  </div>
                </div>
                <div class="flex-1">
                  <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-3">
                    {{ feature.title }}
                  </h3>
                  <p class="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                    {{ feature.description }}
                  </p>
                  <div class="mt-3 flex items-center text-purple-600 dark:text-purple-400">
                    <i class="uil uil-check-circle text-sm mr-2"></i>
                    <span class="text-xs font-semibold">{{ feature.hint }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Agent Performance Reports -->
      <div class="max-w-7xl mx-auto mb-20">
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 lg:p-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Agent Performance Reports
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 mb-10 text-center max-w-3xl mx-auto">
            For each agent (per day / per queue / per call center), get detailed performance metrics
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div
              v-for="(feature, index) in agentFeatures"
              :key="index"
              class="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-2xl hover:border-purple-300 dark:hover:border-purple-600 hover:-translate-y-1 transition-all duration-300"
            >
              <div class="flex-shrink-0 mb-6">
                <div class="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500 text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <i :class="`${feature.icon} text-2xl`"></i>
                </div>
              </div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                {{ feature.title }}
              </h3>
              <p class="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {{ feature.description }}
              </p>
              <div class="flex items-center text-purple-600 dark:text-purple-400">
                <i class="uil uil-info-circle text-lg mr-2"></i>
                <span class="text-sm font-semibold">{{ feature.hint }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- QA, AI & Follow-Up Reporting -->
      <div class="max-w-7xl mx-auto mb-20">
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 lg:p-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            QA, AI & Follow-Up Reporting
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 mb-10 text-center max-w-3xl mx-auto">
            Because recordings, transcripts, AI summaries, and AI flags are attached to each CDR, you get quality insights
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div
              v-for="(feature, index) in qaFeatures"
              :key="index"
              class="group relative bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-700 dark:to-gray-800 rounded-xl p-6 lg:p-8 border border-purple-100 dark:border-gray-600 hover:shadow-lg hover:border-purple-300 dark:hover:border-purple-500 transition-all duration-300"
            >
              <div class="flex items-start gap-4">
                <div class="flex-shrink-0">
                  <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500 text-white shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <i :class="`${feature.icon} text-xl`"></i>
                  </div>
                </div>
                <div class="flex-1">
                  <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-3">
                    {{ feature.title }}
                  </h3>
                  <p class="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                    {{ feature.description }}
                  </p>
                  <div class="mt-3 flex items-center text-purple-600 dark:text-purple-400">
                    <i class="uil uil-check-circle text-sm mr-2"></i>
                    <span class="text-xs font-semibold">{{ feature.hint }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Usage & Capacity Overview -->
      <div class="max-w-7xl mx-auto mb-20">
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 lg:p-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Usage & Capacity Overview
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 mb-10 text-center max-w-3xl mx-auto">
            From the same reporting area, understand real usage vs included allowance and capacity limits
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <div
              v-for="(feature, index) in usageFeatures"
              :key="index"
              class="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-2xl hover:border-purple-300 dark:hover:border-purple-600 hover:-translate-y-1 transition-all duration-300"
            >
              <div class="flex-shrink-0 mb-6">
                <div class="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500 text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <i :class="`${feature.icon} text-2xl`"></i>
                </div>
              </div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                {{ feature.title }}
              </h3>
              <p class="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {{ feature.description }}
              </p>
              <div class="flex items-center text-purple-600 dark:text-purple-400">
                <i class="uil uil-info-circle text-lg mr-2"></i>
                <span class="text-sm font-semibold">{{ feature.hint }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- How It Works -->
      <div class="max-w-7xl mx-auto">
        <div class="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl shadow-lg border border-purple-100 dark:border-gray-600 p-8 lg:p-10">
          <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Actionable Insights, Not Just Data
          </h2>
          <div class="max-w-4xl mx-auto space-y-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              All of this feeds into several ready-made reports and dashboards in the portal / desktop app. Instead of exporting CSV files and building your own reports, you get interactive dashboards that help you understand what's happening in your call center.
            </p>
            <p>
              Charts and tables make it easy to see at what times of day abandonment spikes, which hotlines struggle to meet SLA, and whether you need more people or better scheduling. Clicking on any data point takes you directly to the underlying CDR records for detailed investigation.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* All styling handled via Tailwind */
</style>
