<template>
  <div>
    <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
      How the Zoho CRM Integration Works
    </h2>
    
    <p class="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
      SimpleCallCenter connects to Zoho CRM via OAuth, so your calls show up in Zoho automatically — with the right contact/lead, the right agent, and the right context.
    </p>

    <!-- Integration Steps -->
    <div class="space-y-8 mb-12">
      <!-- Step 1 -->
      <div class="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-700 dark:to-gray-800 rounded-xl p-6 lg:p-8 border border-purple-100 dark:border-gray-600">
        <div class="flex items-start gap-4 mb-4">
          <div class="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500 text-white shadow-lg flex items-center justify-center text-xl font-bold">
            1
          </div>
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white pt-2">
            Connect Zoho CRM (OAuth)
          </h3>
        </div>
        <p class="text-gray-700 dark:text-gray-300 leading-relaxed ml-16">
          An admin clicks <strong>Connect Zoho</strong>, signs in, and approves access for the integration. We store tokens securely and refresh them automatically when needed.
        </p>
      </div>

      <!-- Step 2 -->
      <div class="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-700 dark:to-gray-800 rounded-xl p-6 lg:p-8 border border-purple-100 dark:border-gray-600">
        <div class="flex items-start gap-4 mb-4">
          <div class="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500 text-white shadow-lg flex items-center justify-center text-xl font-bold">
            2
          </div>
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white pt-2">
            We find the matching Lead or Contact (and avoid duplicates)
          </h3>
        </div>
        <div class="ml-16 space-y-4">
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
            When a call happens, we try to match the caller by the data you already have in Zoho:
          </p>
          <ul class="space-y-2 ml-4">
            <li class="flex items-start">
              <i class="uil uil-arrow-right text-purple-600 dark:text-purple-400 text-lg mr-3 mt-1 flex-shrink-0"></i>
              <span class="text-gray-700 dark:text-gray-300">email (when available)</span>
            </li>
            <li class="flex items-start">
              <i class="uil uil-arrow-right text-purple-600 dark:text-purple-400 text-lg mr-3 mt-1 flex-shrink-0"></i>
              <span class="text-gray-700 dark:text-gray-300">phone number (normalized)</span>
            </li>
          </ul>
          <ul class="space-y-3">
            <li class="flex items-start">
              <i class="uil uil-check-circle text-purple-600 dark:text-purple-400 text-xl mr-3 mt-0.5 flex-shrink-0"></i>
              <span class="text-gray-700 dark:text-gray-300"><strong>If we find a match</strong>, we update the record (only the fields you allow).</span>
            </li>
            <li class="flex items-start">
              <i class="uil uil-check-circle text-purple-600 dark:text-purple-400 text-xl mr-3 mt-0.5 flex-shrink-0"></i>
              <span class="text-gray-700 dark:text-gray-300"><strong>If we don't find one</strong>, we can create a new Lead or Contact — depending on how your team prefers to work in Zoho.</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Step 3 -->
      <div class="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-700 dark:to-gray-800 rounded-xl p-6 lg:p-8 border border-purple-100 dark:border-gray-600">
        <div class="flex items-start gap-4 mb-4">
          <div class="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500 text-white shadow-lg flex items-center justify-center text-xl font-bold">
            3
          </div>
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white pt-2">
            We log the call as a Zoho activity
          </h3>
        </div>
        <div class="ml-16 space-y-4">
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
            For each call, we create a <strong>Call activity</strong> in Zoho and link it to the matching Lead/Contact (and optionally to an Account/Deal when applicable). That means your team sees the call in Zoho like it belongs there:
          </p>
          <ul class="space-y-3">
            <li class="flex items-start">
              <i class="uil uil-arrow-right text-purple-600 dark:text-purple-400 text-lg mr-3 mt-1 flex-shrink-0"></i>
              <span class="text-gray-700 dark:text-gray-300">inbound / outbound direction</span>
            </li>
            <li class="flex items-start">
              <i class="uil uil-arrow-right text-purple-600 dark:text-purple-400 text-lg mr-3 mt-1 flex-shrink-0"></i>
              <span class="text-gray-700 dark:text-gray-300">start time and duration</span>
            </li>
            <li class="flex items-start">
              <i class="uil uil-arrow-right text-purple-600 dark:text-purple-400 text-lg mr-3 mt-1 flex-shrink-0"></i>
              <span class="text-gray-700 dark:text-gray-300">answered / missed status</span>
            </li>
            <li class="flex items-start">
              <i class="uil uil-arrow-right text-purple-600 dark:text-purple-400 text-lg mr-3 mt-1 flex-shrink-0"></i>
              <span class="text-gray-700 dark:text-gray-300">agent who handled the call</span>
            </li>
            <li class="flex items-start">
              <i class="uil uil-arrow-right text-purple-600 dark:text-purple-400 text-lg mr-3 mt-1 flex-shrink-0"></i>
              <span class="text-gray-700 dark:text-gray-300">notes, tags, and links (recording, transcript, AI summary — if enabled)</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Step 4 -->
      <div class="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-700 dark:to-gray-800 rounded-xl p-6 lg:p-8 border border-purple-100 dark:border-gray-600">
        <div class="flex items-start gap-4 mb-4">
          <div class="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500 text-white shadow-lg flex items-center justify-center text-xl font-bold">
            4
          </div>
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white pt-2">
            Calls are assigned to the right user
          </h3>
        </div>
        <p class="text-gray-700 dark:text-gray-300 leading-relaxed ml-16">
          If you map your agents to Zoho users, we assign the call activity and ownership consistently — so records don't all end up under the admin who connected the integration.
        </p>
      </div>

      <!-- Step 5 -->
      <div class="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-700 dark:to-gray-800 rounded-xl p-6 lg:p-8 border border-purple-100 dark:border-gray-600">
        <div class="flex items-start gap-4 mb-4">
          <div class="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500 text-white shadow-lg flex items-center justify-center text-xl font-bold">
            5
          </div>
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white pt-2">
            Clean sync, no spammy duplicates
          </h3>
        </div>
        <p class="text-gray-700 dark:text-gray-300 leading-relaxed ml-16">
          We store a unique internal call ID on each logged call. If the same event is retried (network hiccup, webhook retry, etc.), we update the existing activity instead of creating duplicates.
        </p>
      </div>
    </div>

    <!-- What we write to Zoho -->
    <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 lg:p-8 mb-8">
      <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        What we write to Zoho
      </h3>
      
      <div class="space-y-6">
        <div>
          <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">By default, the integration creates or updates:</h4>
          <ul class="space-y-3">
            <li class="flex items-start">
              <i class="uil uil-check-circle text-green-600 dark:text-green-400 text-xl mr-3 mt-0.5 flex-shrink-0"></i>
              <span class="text-gray-700 dark:text-gray-300"><strong>Leads or Contacts</strong> (create if missing, update if found)</span>
            </li>
            <li class="flex items-start">
              <i class="uil uil-check-circle text-green-600 dark:text-green-400 text-xl mr-3 mt-0.5 flex-shrink-0"></i>
              <span class="text-gray-700 dark:text-gray-300"><strong>Call activities</strong> linked to the right record</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">Optional (if you enable it):</h4>
          <ul class="space-y-3">
            <li class="flex items-start">
              <i class="uil uil-plus-circle text-purple-600 dark:text-purple-400 text-xl mr-3 mt-0.5 flex-shrink-0"></i>
              <span class="text-gray-700 dark:text-gray-300">link to <strong>Deals / Accounts</strong></span>
            </li>
            <li class="flex items-start">
              <i class="uil uil-plus-circle text-purple-600 dark:text-purple-400 text-xl mr-3 mt-0.5 flex-shrink-0"></i>
              <span class="text-gray-700 dark:text-gray-300">attach <strong>recording / transcript / summary links</strong></span>
            </li>
            <li class="flex items-start">
              <i class="uil uil-plus-circle text-purple-600 dark:text-purple-400 text-xl mr-3 mt-0.5 flex-shrink-0"></i>
              <span class="text-gray-700 dark:text-gray-300">create follow-up <strong>tasks</strong> (missed calls, callbacks, escalations)</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Permissions and security -->
    <div class="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-800 rounded-xl p-6 lg:p-8 border border-blue-100 dark:border-gray-600">
      <div class="flex items-start gap-4 mb-4">
        <div class="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 text-white shadow-lg flex items-center justify-center">
          <i class="uil uil-lock text-2xl"></i>
        </div>
        <h3 class="text-2xl font-bold text-gray-900 dark:text-white pt-2">
          Permissions and security
        </h3>
      </div>
      <p class="text-gray-700 dark:text-gray-300 leading-relaxed ml-16">
        We request only the access needed to match records and log call activity. Tokens are stored securely and can be revoked anytime in Zoho. You control what fields are synced and what gets written into your CRM.
      </p>
    </div>
  </div>
</template>

<script setup>
// Component for Zoho CRM Integration explanation
</script>

<style scoped>
/* All styling handled via Tailwind */
</style>

