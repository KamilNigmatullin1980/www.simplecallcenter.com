<template>
  <div>
    <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">
      Billing & Usage
    </h2>
    <div class="prose prose-lg dark:prose-invert max-w-none">
      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
        SimpleCallCenter uses two balances: Monthly Balance and a Top-Up Wallet. We always charge usage in this order:
      </p>

      <!-- Step 1 -->
      <div class="mb-8 pb-6 border-b border-gray-200 dark:border-gray-700">
        <div class="flex items-start gap-4">
          <div class="flex-shrink-0 w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-lg">
            1
          </div>
          <div class="flex-1">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Monthly Balance is used first
            </h3>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
              All usage (calls, AI features, fax OCR/summary, etc.) is deducted from your Monthly Balance while funds are available.
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
              If Monthly Balance runs out, we switch to the Top-Up Wallet
            </h3>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
              When there isn't enough left in Monthly Balance, the system automatically deducts from your Top-Up Wallet instead — at a slightly higher price.
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
              If Top-Up isn't recharged, service may stop
            </h3>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
              If the Top-Up Wallet reaches $0 and auto-recharge is not enabled (or fails), the service may stop until the wallet is funded again.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Placeholder component for Billing & Usage section
</script>






