<template>
  <div>
    <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">
      How Outbound Calls Work
    </h2>
    
    <div class="prose prose-lg dark:prose-invert max-w-none">
      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
        Outbound calling in SimpleCallCenter is built for manual agent calls (follow-ups, callbacks, customer outreach). No robocalls.
      </p>

      <!-- Step 1 -->
      <div class="mb-8 pb-6 border-b border-gray-200 dark:border-gray-700">
        <div class="flex items-start gap-4">
          <div class="flex-shrink-0 w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-lg">
            1
          </div>
          <div class="flex-1">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Agent starts a call manually
            </h3>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
              An agent initiates an outbound call from the app (for example from call history, a contact/lead, or by typing a phone number).
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
              Caller ID selection (when needed)
            </h3>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
              Before the call is placed, the system decides what number will be shown as the Caller ID:
            </p>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
              If the agent has only one available Caller ID, it's used automatically.
            </p>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
              If the agent has a dedicated direct phone number or participates in more than one Call Center, the agent must choose the Caller ID:
            </p>
            <ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-6">
              <li>a Call Center Direct Phone Number (placing the call on behalf of that Call Center), or</li>
              <li>their direct phone number</li>
            </ul>
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
              The call is placed and connected
            </h3>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
              SimpleCallCenter places the call to the destination number and connects it to the agent when the other side answers.
            </p>
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
              Live supervisor monitoring (for Call Center outbound calls)
            </h3>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
              Outbound calls made on behalf of a Call Center can be supervised the same way as inbound calls. A supervisor can see who the agent is talking to in real time and can connect using a dedicated supervisor window with modes:
            </p>
            <ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-6">
              <li>Listen only</li>
              <li>Talk to Agent only</li>
              <li>Talk to Caller only</li>
              <li>Talk to both (Agent + Caller)</li>
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
              After the call (uploads, AI, stats, CRM)
            </h3>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
              After hangup, SimpleCallCenter finalizes the call and applies your enabled features:
            </p>
            <ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-3 ml-6">
              <li>If recording is enabled → the recording is uploaded</li>
              <li>If transcription is enabled → the transcription is uploaded</li>
              <li>If AI summary is enabled → the summary is added to the call</li>
              <li>Normal agent statistics are updated</li>
              <li>If AI evaluation is enabled → the evaluation result is added to the call</li>
            </ul>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-2 font-semibold">
              If a CRM integration is connected:
            </p>
            <ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-6">
              <li>the system adds the call, recording, transcription, and summary to the CRM</li>
              <li>if the call creates a new lead, the system attempts to extract email, name, address, and company from the conversation and populate those fields automatically when available</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Outbound Calls section component
</script>







