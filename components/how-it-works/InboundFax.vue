<template>
  <div>
    <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">
      Inbound Fax
    </h2>
    
    <div class="prose prose-lg dark:prose-invert max-w-none">
      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
        Inbound Fax lines are dedicated, always-on fax numbers. Once created, they receive faxes 24/7 and automatically deliver them to your team.
      </p>

      <!-- Step 1 -->
      <div class="mb-8 pb-6 border-b border-gray-200 dark:border-gray-700">
        <div class="flex items-start gap-4">
          <div class="flex-shrink-0 w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-lg">
            1
          </div>
          <div class="flex-1">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Dedicated fax line (always on)
            </h3>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
              You create a dedicated fax line and assign a dedicated fax number (Direct Phone Number) to it.
            </p>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed mt-2">
              That line is always active — no agent, schedule, or login required.
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
              Fax delivery by email
            </h3>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
              When a fax arrives, SimpleCallCenter automatically sends it to the configured email recipients.
            </p>
          </div>
        </div>
      </div>

      <!-- Step 3 -->
      <div class="mb-8">
        <div class="flex items-start gap-4">
          <div class="flex-shrink-0 w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-lg">
            3
          </div>
          <div class="flex-1">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
              PDF attachment + optional OCR + optional summary
            </h3>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
              Each inbound fax email includes the fax as a PDF attachment.
            </p>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
              If enabled:
            </p>
            <ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-6">
              <li><strong>OCR (text recognition)</strong> → the recognized text is included in the email body</li>
              <li><strong>AI summary</strong> → a short summary is included in the email body</li>
            </ul>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed mt-3">
              This makes it easy to search your inbox and quickly find the right document without opening every PDF.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Inbound Fax section component
</script>

