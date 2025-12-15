<script setup lang="ts">
import { useHead } from '#imports'
import image from '@/assets/images/bg/bg-startup.webp'

useHead({
  title: 'Terms of Service | SimpleCallCenter',
  meta: [
    {
      name: 'description',
      content:
        'Terms of Service for the SAAS Call Center Product by SimpleCallCenter. Review the terms and conditions governing your use of our service.',
    },
    {
      name: 'keywords',
      content:
        'Terms of Service, SimpleCallCenter, Call Center, SAAS, Terms, Agreement',
    },
    { property: 'og:title', content: 'Terms of Service | SimpleCallCenter' },
    {
      property: 'og:description',
      content:
        'Review the Terms of Service for the SAAS Call Center Product by SimpleCallCenter.',
    },
    { property: 'og:type', content: 'website' },
    {
      property: 'og:url',
      content: 'https://simplecallcenter.com/terms-of-service',
    },
  ],
})
</script>

<template>
  <section
    class="w-full bg-cover bg-center relative overflow-hidden py-16 lg:py-24"
    :style="{ backgroundImage: `url(${image})` }"
  >
    <!-- Optional overlay for better text readability -->
    <div class="absolute inset-0 bg-gradient-to-b from-white/80 to-white/60 dark:from-gray-900/80 dark:to-gray-900/60"></div>
    
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Header -->
      <div class="max-w-5xl mx-auto text-center mb-16">
        <h1 class="text-4xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
          Terms of <span class="text-purple-800 dark:text-purple-300">Service</span>
        </h1>
        <p class="text-lg text-gray-600 dark:text-gray-400">
          <strong>Effective Date:</strong> October 2024
        </p>
      </div>

      <!-- Content -->
      <div class="max-w-4xl mx-auto">
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 lg:p-12">
          
          <!-- Introduction -->
          <div class="mb-10">
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
              These Terms of Service ("Agreement") are entered into by and between <strong class="text-gray-900 dark:text-white">SIMPLE COMMUNICATIONS LLC</strong> ("Provider" or "we") and the user ("User" or "you") of the SAAS Call Center Product ("Service"). This Agreement outlines the terms and conditions governing your use of the Service. By accessing or using the Service, you agree to be bound by this Agreement. If you do not agree with these terms, please refrain from using the Service.
            </p>
          </div>

          <!-- Section 1 -->
          <div class="mb-10">
            <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <span class="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500 text-white flex items-center justify-center mr-4 text-lg font-bold">1</span>
              Service Description
            </h2>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
              The Service provides Users with comprehensive Call Center Services including call routing, customer management, and related communication features. The Service may include updates, enhancements, and new features, subject to the terms of this Agreement.
            </p>
          </div>

          <!-- Section 2 -->
          <div class="mb-10">
            <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <span class="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500 text-white flex items-center justify-center mr-4 text-lg font-bold">2</span>
              User Accounts
            </h2>
            <div class="space-y-4">
              <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
                <strong class="text-gray-900 dark:text-white">2.1 Registration:</strong> In order to use the Service, you must create an account. You agree to provide accurate, current, and complete information during the registration process. You are responsible for maintaining the security of your account credentials.
              </p>
              <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
                <strong class="text-gray-900 dark:text-white">2.2 Access Control:</strong> You are responsible for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account or any other breach of security.
              </p>
            </div>
          </div>

          <!-- Section 3 -->
          <div class="mb-10">
            <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <span class="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500 text-white flex items-center justify-center mr-4 text-lg font-bold">3</span>
              Use of Service
            </h2>
            <div class="space-y-4">
              <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
                <strong class="text-gray-900 dark:text-white">3.1 Acceptable Use:</strong> You agree to use the Service in compliance with all applicable laws and regulations. You shall not use the Service to engage in any unlawful or abusive activities, including but not limited to spamming, fraud, harassment, or unauthorized access.
              </p>
              <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
                <strong class="text-gray-900 dark:text-white">3.2 Prohibited Content:</strong> You shall not use the Service to transmit, store, or display any content that is infringing, obscene, defamatory, or otherwise objectionable. Provider reserves the right to monitor and remove such content.
              </p>
              <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
                <strong class="text-gray-900 dark:text-white">3.3 Data Privacy:</strong> You acknowledge and agree that Provider may collect and use your personal information as outlined in the Privacy Policy.
              </p>
            </div>
          </div>

          <!-- Section 4 -->
          <div class="mb-10">
            <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <span class="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500 text-white flex items-center justify-center mr-4 text-lg font-bold">4</span>
              Fees and Payments
            </h2>
            <div class="space-y-4">
              <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
                <strong class="text-gray-900 dark:text-white">4.1 Subscription Fees:</strong> Access to the Service is provided through subscription plans. You agree to pay the applicable subscription fees in accordance with the terms and pricing specified by Provider.
              </p>
              <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
                <strong class="text-gray-900 dark:text-white">4.2 Billing:</strong> Subscription fees are billed in advance and are non-refundable. Failure to make timely payments may result in suspension or termination of your account.
              </p>
            </div>
          </div>

          <!-- Section 5 -->
          <div class="mb-10">
            <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <span class="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500 text-white flex items-center justify-center mr-4 text-lg font-bold">5</span>
              Intellectual Property
            </h2>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
              <strong class="text-gray-900 dark:text-white">5.1 Ownership:</strong> Provider retains all rights, title, and interest in the Service, including but not limited to intellectual property rights. You shall not reproduce, modify, distribute, or create derivative works based on the Service without the written consent of Provider.
            </p>
          </div>

          <!-- Section 6 -->
          <div class="mb-10">
            <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <span class="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500 text-white flex items-center justify-center mr-4 text-lg font-bold">6</span>
              Termination
            </h2>
            <div class="space-y-4">
              <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
                <strong class="text-gray-900 dark:text-white">6.1 Termination by Provider:</strong> Provider reserves the right to suspend or terminate your access to the Service at any time, with or without cause, without liability.
              </p>
              <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
                <strong class="text-gray-900 dark:text-white">6.2 Termination by User:</strong> You may terminate your account at any time by following the instructions provided in the Service. No refunds will be provided for early termination.
              </p>
            </div>
          </div>

          <!-- Section 7 -->
          <div class="mb-10">
            <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <span class="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500 text-white flex items-center justify-center mr-4 text-lg font-bold">7</span>
              Limitation of Liability
            </h2>
            <div class="space-y-4">
              <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
                <strong class="text-gray-900 dark:text-white">7.1 Disclaimer:</strong> The Service is provided "as is" without warranties of any kind, whether express or implied. Provider disclaims all warranties, including but not limited to merchantability, fitness for a particular purpose, and non-infringement.
              </p>
              <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
                <strong class="text-gray-900 dark:text-white">7.2 Limitation of Liability:</strong> Provider shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with the use of the Service.
              </p>
            </div>
          </div>

          <!-- Section 8 -->
          <div class="mb-10">
            <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <span class="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500 text-white flex items-center justify-center mr-4 text-lg font-bold">8</span>
              Governing Law
            </h2>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
              This Agreement shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law principles.
            </p>
          </div>

          <!-- Section 9 -->
          <div class="mb-10">
            <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <span class="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500 text-white flex items-center justify-center mr-4 text-lg font-bold">9</span>
              Miscellaneous
            </h2>
            <div class="space-y-4">
              <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
                <strong class="text-gray-900 dark:text-white">9.1 Entire Agreement:</strong> This Agreement constitutes the entire agreement between the parties with respect to the subject matter hereof and supersedes all prior and contemporaneous communications.
              </p>
              <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
                <strong class="text-gray-900 dark:text-white">9.2 Amendment:</strong> Provider reserves the right to modify this Agreement at any time. Changes will be effective upon posting to the Service. Continued use of the Service after changes constitutes your acceptance of the modified terms.
              </p>
            </div>
          </div>

          <!-- Agreement Statement -->
          <div class="mb-10">
            <div class="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-700 dark:to-gray-800 rounded-xl p-6 border border-purple-100 dark:border-gray-600">
              <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
                By using the Service, you acknowledge that you have read, understood, and agree to abide by the terms and conditions of this Agreement. If you have any questions or concerns, please contact us using the widget at the bottom right corner of this page.
              </p>
            </div>
          </div>

          <!-- Contact Information -->
          <div>
            <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">Contact Us</h2>
            <div class="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-700 dark:to-gray-800 rounded-xl p-6 border border-purple-100 dark:border-gray-600">
              <address class="not-italic text-gray-700 dark:text-gray-300">
                <strong class="text-gray-900 dark:text-white text-lg">Simple Communications LLC</strong><br />
                2191 Holiday Pines Lane<br />
                Santa Rosa Valley<br />
                93012, CA<br /><br />
                Website: <a href="https://www.simplecallcenter.com" class="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 underline">www.simplecallcenter.com</a>
              </address>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* All styling handled via Tailwind */
</style>
