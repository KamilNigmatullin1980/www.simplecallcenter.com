<template>
  <div>
    <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
      How the HubSpot Integration Works
    </h2>
    
    <p class="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
      SimpleCallCenter connects to HubSpot through OAuth, so you can log calls and keep your CRM up to date without manual copy-paste.
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
            Connect your HubSpot account (OAuth)
          </h3>
        </div>
        <p class="text-gray-700 dark:text-gray-300 leading-relaxed ml-16">
          An admin clicks <strong>Connect HubSpot</strong>, signs in to HubSpot, and grants the permissions needed for the integration. We store the access securely and refresh it automatically when needed.
        </p>
      </div>

      <!-- Step 2 -->
      <div class="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-700 dark:to-gray-800 rounded-xl p-6 lg:p-8 border border-purple-100 dark:border-gray-600">
        <div class="flex items-start gap-4 mb-4">
          <div class="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500 text-white shadow-lg flex items-center justify-center text-xl font-bold">
            2
          </div>
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white pt-2">
            We identify the caller and "upsert" a Contact
          </h3>
        </div>
        <div class="ml-16 space-y-4">
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
            When a call happens, we try to find an existing HubSpot Contact by the caller's details (email when available, otherwise phone).
          </p>
          <ul class="space-y-3">
            <li class="flex items-start">
              <i class="uil uil-check-circle text-purple-600 dark:text-purple-400 text-xl mr-3 mt-0.5 flex-shrink-0"></i>
              <span class="text-gray-700 dark:text-gray-300"><strong>If the Contact exists</strong> → we update it (only the fields you choose)</span>
            </li>
            <li class="flex items-start">
              <i class="uil uil-check-circle text-purple-600 dark:text-purple-400 text-xl mr-3 mt-0.5 flex-shrink-0"></i>
              <span class="text-gray-700 dark:text-gray-300"><strong>If it doesn't exist</strong> → we create it</span>
            </li>
          </ul>
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed italic">
            This approach works in every HubSpot portal, including Core seats (no special "Leads" object required).
          </p>
        </div>
      </div>

      <!-- Step 3 -->
      <div class="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-700 dark:to-gray-800 rounded-xl p-6 lg:p-8 border border-purple-100 dark:border-gray-600">
        <div class="flex items-start gap-4 mb-4">
          <div class="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500 text-white shadow-lg flex items-center justify-center text-xl font-bold">
            3
          </div>
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white pt-2">
            We log the call as a HubSpot engagement
          </h3>
        </div>
        <div class="ml-16 space-y-4">
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
            For each call, we create a <strong>Call engagement</strong> in HubSpot and associate it to the Contact (and optionally to a Company or Deal if you use them). This means the call appears on the Contact timeline, like a native phone system:
          </p>
          <ul class="space-y-3">
            <li class="flex items-start">
              <i class="uil uil-arrow-right text-purple-600 dark:text-purple-400 text-lg mr-3 mt-1 flex-shrink-0"></i>
              <span class="text-gray-700 dark:text-gray-300">inbound / outbound direction</span>
            </li>
            <li class="flex items-start">
              <i class="uil uil-arrow-right text-purple-600 dark:text-purple-400 text-lg mr-3 mt-1 flex-shrink-0"></i>
              <span class="text-gray-700 dark:text-gray-300">start time, duration, answered / missed status</span>
            </li>
            <li class="flex items-start">
              <i class="uil uil-arrow-right text-purple-600 dark:text-purple-400 text-lg mr-3 mt-1 flex-shrink-0"></i>
              <span class="text-gray-700 dark:text-gray-300">agent (owner) when available</span>
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
            Ownership and activity go to the right person
          </h3>
        </div>
        <p class="text-gray-700 dark:text-gray-300 leading-relaxed ml-16">
          If you map your agents to HubSpot users, we assign the Contact and call activity to the matching HubSpot owner — so everything doesn't end up owned by the person who installed the app.
        </p>
      </div>

      <!-- Step 5 -->
      <div class="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-700 dark:to-gray-800 rounded-xl p-6 lg:p-8 border border-purple-100 dark:border-gray-600">
        <div class="flex items-start gap-4 mb-4">
          <div class="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500 text-white shadow-lg flex items-center justify-center text-xl font-bold">
            5
          </div>
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white pt-2">
            Your data stays consistent (and we avoid duplicates)
          </h3>
        </div>
        <p class="text-gray-700 dark:text-gray-300 leading-relaxed ml-16">
          We store a unique internal call ID on each logged engagement, so retries or network hiccups don't create duplicates. If the same call event is processed again, we update the existing record instead of creating a new one.
        </p>
      </div>
    </div>

    <!-- What we write to HubSpot -->
    <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 lg:p-8 mb-8">
      <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        What we write to HubSpot
      </h3>
      
      <div class="space-y-6">
        <div>
          <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">By default, the integration creates or updates:</h4>
          <ul class="space-y-3">
            <li class="flex items-start">
              <i class="uil uil-check-circle text-green-600 dark:text-green-400 text-xl mr-3 mt-0.5 flex-shrink-0"></i>
              <span class="text-gray-700 dark:text-gray-300"><strong>Contacts</strong> (create if missing, update if found)</span>
            </li>
            <li class="flex items-start">
              <i class="uil uil-check-circle text-green-600 dark:text-green-400 text-xl mr-3 mt-0.5 flex-shrink-0"></i>
              <span class="text-gray-700 dark:text-gray-300"><strong>Call engagements</strong> associated to the Contact</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">Optional (only if you enable it):</h4>
          <ul class="space-y-3">
            <li class="flex items-start">
              <i class="uil uil-plus-circle text-purple-600 dark:text-purple-400 text-xl mr-3 mt-0.5 flex-shrink-0"></i>
              <span class="text-gray-700 dark:text-gray-300">associate to <strong>Company / Deal</strong></span>
            </li>
            <li class="flex items-start">
              <i class="uil uil-plus-circle text-purple-600 dark:text-purple-400 text-xl mr-3 mt-0.5 flex-shrink-0"></i>
              <span class="text-gray-700 dark:text-gray-300">attach <strong>recording / transcript / summary links</strong></span>
            </li>
            <li class="flex items-start">
              <i class="uil uil-plus-circle text-purple-600 dark:text-purple-400 text-xl mr-3 mt-0.5 flex-shrink-0"></i>
              <span class="text-gray-700 dark:text-gray-300">create follow-up <strong>Tasks</strong> after missed calls or escalations</span>
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
        We request only the scopes needed to create/update contacts and log call activity. Tokens are stored securely and can be revoked anytime from HubSpot. You stay in control of what fields we sync and what gets written into the CRM.
      </p>
    </div>
  </div>
</template>

<script setup>
// Component for HubSpot CRM Integration explanation
</script>

<style scoped>
/* All styling handled via Tailwind */
</style>


