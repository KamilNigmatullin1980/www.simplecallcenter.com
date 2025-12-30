<template>
  <div>
    <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">
      Inbound Calls for Direct Phone Numbers
    </h2>
    
    <div class="prose prose-lg dark:prose-invert max-w-none">
      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
        Direct Phone Numbers are personal numbers for a specific user (not a Call Center Direct Phone Number). The flow is intentionally simple.
      </p>

      <!-- Step 1 -->
      <div class="mb-8 pb-6 border-b border-gray-200 dark:border-gray-700">
        <div class="flex items-start gap-4">
          <div class="flex-shrink-0 w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-lg">
            1
          </div>
          <div class="flex-1">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Each Direct Phone Number has its own subscription
            </h3>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
              Every Direct Phone Number is a separate subscription: $7/month, which includes 1 Direct Phone Number and its included usage.
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
              Calls go directly to the user
            </h3>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
              When someone calls a user's Direct Phone Number, the call is routed straight to that user in the app — no call center logic, no queues, no routing rules.
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
              Optional recording (user-controlled)
            </h3>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
              If the user has recording enabled in the app, the call will be recorded. If not, nothing is recorded.
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
              Private by design
            </h3>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
              Recordings for Direct Phone Numbers are treated as personal:
            </p>
            <ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-6">
              <li>the user can listen to the recording</li>
              <li>the user can share it (if they choose)</li>
              <li>no one else can access it — including admins and supervisors — because it's a personal number, not a business call center number.</li>
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
              Business call priority + call waiting rules
            </h3>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
              Call Center calls are treated as business-priority calls:
            </p>
            <ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-6">
              <li>If the user is on a personal (direct number) call and a Call Center call comes in, the user will see call waiting for the business call.</li>
              <li>If the user is already on a Call Center call, any new incoming call will receive busy.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Inbound Calls for Direct Phone Numbers section component
</script>





