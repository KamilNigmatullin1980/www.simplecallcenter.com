<template>
  <div>
    <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">
      Queues & Routing
    </h2>
    
    <div class="prose prose-lg dark:prose-invert max-w-none">
      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
        Queues are the routing and reporting unit inside a Call Center.<br>
        A Call Center has its own Direct Phone Number, schedule, agents, and settings. Inside it, queues represent your product/service lines.
      </p>

      <!-- Step 1 -->
      <div class="mb-8 pb-6 border-b border-gray-200 dark:border-gray-700">
        <div class="flex items-start gap-4">
          <div class="flex-shrink-0 w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-lg">
            1
          </div>
          <div class="flex-1">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
              What a Queue is
            </h3>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
              A queue is where inbound calls are placed so the system can:
            </p>
            <ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-6">
              <li>connect the caller to an available agent</li>
              <li>track waiting / serving in real time</li>
              <li>produce per-queue analytics (not mixed across the whole call center)</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Step 2 -->
      <div class="mb-8 pb-6 border-b border-gray-200 dark:border-gray-700">
        <div class="flex items-start gap-4">
          <div class="flex-shrink-0 w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-lg">
            2
          </div>
          <div class="flex-1">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
              How a call reaches a queue
            </h3>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
              Inbound flow into a queue looks like this:
            </p>
            <ol class="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-6">
              <li>Caller dials the Call Center Direct Phone Number</li>
              <li>Language selection happens only if there are 2+ languages (otherwise skipped)</li>
              <li>Schedule check runs after language selection (or skip)
                <ul class="list-disc list-inside space-y-1 ml-6 mt-2">
                  <li>Closed for the day / Holiday / Lunch break → each can Voicemail or play message</li>
                </ul>
              </li>
              <li>Queue selection happens only if there are 2+ queues (otherwise skipped)</li>
              <li>Optional recording notice (only if recording is enabled)</li>
              <li>"Please wait for an agent" message is played
                <ul class="list-disc list-inside space-y-1 ml-6 mt-2">
                  <li>the repeat interval is configurable and can be turned on/off</li>
                </ul>
              </li>
            </ol>
          </div>
        </div>
      </div>

      <!-- Step 3 -->
      <div class="mb-8 pb-6 border-b border-gray-200 dark:border-gray-700">
        <div class="flex items-start gap-4">
          <div class="flex-shrink-0 w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-lg">
            3
          </div>
          <div class="flex-1">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Routing strategy (ACD)
            </h3>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
              Routing is availability-based:
            </p>
            <ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-6">
              <li>the system offers calls to agents who are available</li>
              <li>there is no fairness strategy (no round-robin / no longest-idle)</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Step 4 -->
      <div class="mb-8 pb-6 border-b border-gray-200 dark:border-gray-700">
        <div class="flex items-start gap-4">
          <div class="flex-shrink-0 w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-lg">
            4
          </div>
          <div class="flex-1">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Waiting behavior, position prompts, and timeouts
            </h3>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
              While the caller is in the queue:
            </p>
            <ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-3 ml-6">
              <li>the system announces the caller's position in the queue every X minutes (configurable)</li>
            </ul>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
              two configurable timeouts control when the call stops waiting and goes to voicemail:
            </p>
            <ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-6">
              <li>Max wait in the queue → forward to Voicemail</li>
              <li>Max wait without agents → forward to Voicemail</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Step 5 -->
      <div class="mb-8 pb-6 border-b border-gray-200 dark:border-gray-700">
        <div class="flex items-start gap-4">
          <div class="flex-shrink-0 w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-lg">
            5
          </div>
          <div class="flex-1">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Presence & availability (what routing is based on)
            </h3>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
              Queues route calls using agent presence and state visible in the app, for example:
            </p>
            <ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-6">
              <li>Online status (shown live in the desktop app)</li>
              <li>whether an agent is in the queue and able to receive calls</li>
              <li>whether an agent is logged out / offline</li>
            </ul>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed mt-3">
              These updates are real time, so routing reacts instantly when agents go online/offline.
            </p>
          </div>
        </div>
      </div>

      <!-- Step 6 -->
      <div class="mb-8 pb-6 border-b border-gray-200 dark:border-gray-700">
        <div class="flex items-start gap-4">
          <div class="flex-shrink-0 w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-lg">
            6
          </div>
          <div class="flex-1">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Live per-queue stats (operational view)
            </h3>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
              Each queue shows live operational counters such as:
            </p>
            <ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-6">
              <li>Agents online</li>
              <li>Waiting (callers currently in queue)</li>
              <li>Serving (calls currently being handled)</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Step 7 -->
      <div class="mb-8">
        <div class="flex items-start gap-4">
          <div class="flex-shrink-0 w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-lg">
            7
          </div>
          <div class="flex-1">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Per-queue reports & analytics
            </h3>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
              Each queue has its own performance reports, including:
            </p>
            <ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-3 ml-6">
              <li><strong>Daily Queue Performance</strong> (with hourly breakdown):
                <ul class="list-disc list-inside space-y-1 ml-6 mt-2">
                  <li>Offered, Answered, Abandoned, Timed Out, Peak Concurrent, Avg Talk Time (s)</li>
                </ul>
              </li>
              <li>Queue Service Levels</li>
              <li>Abandoned Call Analysis</li>
              <li>Timed Out Calls Report</li>
              <li>Queue Wait Time Metrics</li>
              <li>Peak Concurrent Calls Report (chart + "max peak")</li>
            </ul>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
              Reports can be exported (e.g., CSV / PDF) for sharing or audits.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Queues & Routing section component
</script>




