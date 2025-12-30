<template>
  <div>
    <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">
      Missed Calls & Follow Ups
    </h2>
    
    <div class="prose prose-lg dark:prose-invert max-w-none">
      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
        Missed calls automatically turn into follow-up items your team can process from one place — with real-time visibility and clear ownership.
      </p>

      <!-- Step 1 -->
      <div class="mb-8 pb-6 border-b border-gray-200 dark:border-gray-700">
        <div class="flex items-start gap-4">
          <div class="flex-shrink-0 w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-lg">
            1
          </div>
          <div class="flex-1">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Real-time "needs attention" counters
            </h3>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
              On the left sidebar, SimpleCallCenter shows the number of unassigned / unprocessed missed calls as a live counter.
            </p>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed mt-2">
              As new missed calls happen (or get picked up/closed), those numbers update instantly for everyone.
            </p>
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
              Permission-based access
            </h3>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
              Only agents with permission to process missed calls can work from this screen (so not every user can change statuses or take ownership).
            </p>
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
              A clear, trackable workflow (no guessing who's handling it)
            </h3>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
              Each missed call shows:
            </p>
            <ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-3 ml-6">
              <li>Caller number + timestamp</li>
              <li>Team / Call Center</li>
              <li>Status (e.g. New, Processing)</li>
              <li>State (Assigned / Unassigned)</li>
              <li>Assigned to (who owns the follow-up)</li>
            </ul>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
              Actions support a simple lifecycle:
            </p>
            <ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-6">
              <li><strong>Assign to me</strong> → claim the missed call</li>
              <li><strong>Mark as Processing</strong> → signal "I'm working on it now"</li>
              <li><strong>Back to New</strong> → revert if needed</li>
              <li><strong>Unassign</strong> → hand it back to the pool</li>
              <li><strong>Close</strong> → mark completed and remove it from the active follow-up list</li>
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
              Fast filtering when volume grows
            </h3>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
              The list can be filtered by:
            </p>
            <ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-6">
              <li>caller (search)</li>
              <li>team</li>
              <li>status</li>
              <li>assigned/unassigned state</li>
              <li>assigned agent</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Step 5 -->
      <div class="mb-8">
        <div class="flex items-start gap-4">
          <div class="flex-shrink-0 w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-lg">
            5
          </div>
          <div class="flex-1">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Open the missed call and take action
            </h3>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
              From each row, an agent can open the missed call entry (details view) and perform the follow-up (typically a manual callback / handling the request), then update the item status so the whole team sees the result in real time.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Missed Calls & Follow Ups section component
</script>






