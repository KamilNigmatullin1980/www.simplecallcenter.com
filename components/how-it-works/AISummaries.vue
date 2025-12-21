<template>
  <div>
    <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">
      AI Summaries
    </h2>
    
    <div class="prose prose-lg dark:prose-invert max-w-none">
      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
        When enabled, SimpleCallCenter automatically generates an AI summary after each call and attaches it to the call record.
      </p>

      <div class="mb-8">
        <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
          What the summary can include:
        </h3>
        
        <ul class="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300 ml-6">
          <li>
            <strong>A clear call recap</strong> (what the caller wanted, what the agent did, outcome / next steps)
          </li>
          <li>
            <strong>Extracted contact details</strong> mentioned in the call, such as:
            <ul class="list-disc list-inside space-y-2 ml-6 mt-2">
              <li>email</li>
              <li>name</li>
              <li>address</li>
              <li>company</li>
            </ul>
          </li>
          <li>
            <strong>Automatic flags for review</strong> if agent tone or behavior looks suspicious (for example aggressive, inappropriate, or unusual patterns)
          </li>
        </ul>
        
        <p class="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
          These summaries help supervisors and agents understand calls fast without replaying audio.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
// AI Summaries section component
</script>





