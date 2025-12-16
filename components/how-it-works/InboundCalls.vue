<template>
  <div>
    <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">
      Inbound Calls
    </h2>
    
    <div class="prose prose-lg dark:prose-invert max-w-none">
      <!-- Step 1 -->
      <div class="mb-8 pb-6 border-b border-gray-200 dark:border-gray-700">
        <div class="flex items-start gap-4">
          <div class="flex-shrink-0 w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-lg">
            1
          </div>
          <div class="flex-1">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Call lands in the correct Call Center (by Direct Phone Number)
            </h3>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
              Each Call Center (e.g., Sales or Support) has its own inbound Direct Phone Number. Calls to that Direct Phone Number enter the correct Call Center automatically.
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
              Language selection (only if needed)
            </h3>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
              If multiple languages are enabled, the caller selects a language.
            </p>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
              If only one language is enabled, the language menu is skipped.
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
              Schedule check (after language)
            </h3>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
              After language selection (or skip), the system checks the schedule:
            </p>
            <ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-3 ml-6">
              <li>Closed for the day</li>
              <li>Holiday</li>
              <li>Lunch break</li>
            </ul>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
              For each state you configure what happens:
            </p>
            <ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-6">
              <li>Forward to Voicemail, or</li>
              <li>Play a message (caller can hang up)</li>
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
              Queue selection (only if needed)
            </h3>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
              Queues represent the product/service line inside the Call Center.
            </p>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
              If multiple queues exist, the caller selects the queue.
            </p>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
              If only one queue exists, the queue menu is skipped.
            </p>
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
              Recording notice + wait message
            </h3>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
              After the queue is selected:
            </p>
            <ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-3 ml-6">
              <li>If recording is enabled, a recording notification is played.</li>
              <li>A "please wait for an agent to answer" message is played. The repeat interval is configurable and can be turned on or off.</li>
            </ul>
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
              Availability-based routing (ACD) + queue updates
            </h3>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
              Calls are offered to agents based on availability only (no fairness rules like round-robin or longest-idle).
            </p>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
              While waiting, the caller hears their position in the queue every X minutes (configurable).
            </p>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
              Two configurable timeouts control when the call stops waiting and is forwarded to Voicemail:
            </p>
            <ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-3 ml-6">
              <li>Max wait in the queue → forward to Voicemail</li>
              <li>Max wait without agents → forward to Voicemail</li>
            </ul>
            <div class="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border-l-4 border-blue-600 mt-4">
              <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-2 font-semibold">
                Agent Login Requirements:
              </p>
              <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                Users must be logged in to the call center to receive inbound calls from the queue. After a configured number of rejects or busy responses, the user will be automatically kicked out from the queue to avoid delaying customers. When they return, they need to log in again.
              </p>
              <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
                Login/logout can be done via toggle in the app or using <strong>*8</strong> for login and <strong>*9</strong> for logout from any SIP phone.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Step 7 -->
      <div class="mb-8 pb-6 border-b border-gray-200 dark:border-gray-700">
        <div class="flex items-start gap-4">
          <div class="flex-shrink-0 w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-lg">
            7
          </div>
          <div class="flex-1">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Live supervisor monitoring (during the call)
            </h3>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
              While the caller is talking to an agent, a supervisor can see who the caller is speaking with in real time and can connect to the call from the app using a dedicated supervisor window. The supervisor can switch modes during the call:
            </p>
            <ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-6">
              <li>Listen only</li>
              <li>Talk to Agent only</li>
              <li>Talk to Caller only</li>
              <li>Talk to Everyone (Agent + Caller)</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Step 8 -->
      <div class="mb-8">
        <div class="flex items-start gap-4">
          <div class="flex-shrink-0 w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-lg">
            8
          </div>
          <div class="flex-1">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
              After the call (what gets saved + what gets synced)
            </h3>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
              After hangup, SimpleCallCenter finalizes the call and applies your enabled features:
            </p>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-2 font-semibold">
              Call record is updated:
            </p>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-3 ml-4">
              agent statistics are updated, and optional AI evaluation is added (if enabled).
            </p>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-2 font-semibold">
              Files & insights are attached:
            </p>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-3 ml-4">
              recording (if enabled), transcription (if enabled), and AI summary (if enabled) are saved and attached to the call.
            </p>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-2 font-semibold">
              CRM sync (if connected):
            </p>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed ml-4">
              the call, recording, transcription, and summary are pushed into your CRM. If a new lead is created, the system attempts to extract email, name, address, and company from the conversation and populate those fields automatically when available.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Inbound Calls section component
</script>

