<script setup lang="ts">
import { useHead } from '#imports'
import image from '@/assets/images/bg/bg-startup.webp'

useHead({
  title: 'Privacy Policy | SimpleCallCenter',
  meta: [
    {
      name: 'description',
      content:
        'Privacy Policy for the SAAS Call Center Product by SimpleCallCenter. Review how we collect, use, and protect your personal information.',
    },
    {
      name: 'keywords',
      content:
        'Privacy Policy, SimpleCallCenter, SAAS, Call Center, Data Protection, Personal Information',
    },
    { property: 'og:title', content: 'Privacy Policy | SimpleCallCenter' },
    {
      property: 'og:description',
      content:
        'Review the Privacy Policy for the SAAS Call Center Product by SimpleCallCenter and learn how we protect your personal data.',
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://simplecallcenter.com/privacy-policy' },
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
          Privacy <span class="text-purple-800 dark:text-purple-300">Policy</span>
        </h1>
        <p class="text-lg text-gray-600 dark:text-gray-400">
          <strong>Effective Date:</strong> October 2024
        </p>
      </div>

      <!-- Content -->
      <div class="max-w-4xl mx-auto">
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 lg:p-12">
          
          <!-- Section 1 -->
          <div class="mb-10">
            <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <span class="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500 text-white flex items-center justify-center mr-4 text-lg font-bold">1</span>
              Introduction
            </h2>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
              At SimpleCallCenter ("Provider", "we", "our"), your privacy is of utmost importance. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our SAAS Call Center Product ("Service"). By accessing or using the Service, you agree to the collection and use of information in accordance with this Policy.
            </p>
          </div>

          <!-- Section 2 -->
          <div class="mb-10">
            <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <span class="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500 text-white flex items-center justify-center mr-4 text-lg font-bold">2</span>
              Information We Collect
            </h2>
            <div class="space-y-4">
              <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
                <strong class="text-gray-900 dark:text-white">2.1 Personal Information:</strong> We may collect personally identifiable information such as your name, email address, phone number, and billing details when you register for an account or use our Service.
              </p>
              <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
                <strong class="text-gray-900 dark:text-white">2.2 Usage Data:</strong> We automatically collect information about your interactions with our Service. This may include your IP address, browser type, access times, pages viewed, and other diagnostic data.
              </p>
            </div>
          </div>

          <!-- Section 3 -->
          <div class="mb-10">
            <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <span class="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500 text-white flex items-center justify-center mr-4 text-lg font-bold">3</span>
              How We Use Your Information
            </h2>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              We use the collected information to:
            </p>
            <ul class="space-y-3">
              <li class="flex items-start">
                <i class="uil uil-check-circle text-purple-600 dark:text-purple-400 text-xl mr-3 mt-1 flex-shrink-0"></i>
                <span class="text-gray-700 dark:text-gray-300">Provide and maintain our Service.</span>
              </li>
              <li class="flex items-start">
                <i class="uil uil-check-circle text-purple-600 dark:text-purple-400 text-xl mr-3 mt-1 flex-shrink-0"></i>
                <span class="text-gray-700 dark:text-gray-300">Improve, personalize, and expand our Service.</span>
              </li>
              <li class="flex items-start">
                <i class="uil uil-check-circle text-purple-600 dark:text-purple-400 text-xl mr-3 mt-1 flex-shrink-0"></i>
                <span class="text-gray-700 dark:text-gray-300">Process transactions and send you related information.</span>
              </li>
              <li class="flex items-start">
                <i class="uil uil-check-circle text-purple-600 dark:text-purple-400 text-xl mr-3 mt-1 flex-shrink-0"></i>
                <span class="text-gray-700 dark:text-gray-300">Communicate with you, including updates and marketing communications.</span>
              </li>
            </ul>
          </div>

          <!-- Section 4 -->
          <div class="mb-10">
            <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <span class="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500 text-white flex items-center justify-center mr-4 text-lg font-bold">4</span>
              Data Security
            </h2>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
              We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is completely secure.
            </p>
          </div>

          <!-- Section 5 -->
          <div class="mb-10">
            <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <span class="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500 text-white flex items-center justify-center mr-4 text-lg font-bold">5</span>
              Disclosure of Your Information
            </h2>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              We may share your information with third parties in the following circumstances:
            </p>
            <ul class="space-y-3">
              <li class="flex items-start">
                <i class="uil uil-check-circle text-purple-600 dark:text-purple-400 text-xl mr-3 mt-1 flex-shrink-0"></i>
                <span class="text-gray-700 dark:text-gray-300">With service providers who help us operate our Service.</span>
              </li>
              <li class="flex items-start">
                <i class="uil uil-check-circle text-purple-600 dark:text-purple-400 text-xl mr-3 mt-1 flex-shrink-0"></i>
                <span class="text-gray-700 dark:text-gray-300">To comply with legal obligations or protect our rights.</span>
              </li>
              <li class="flex items-start">
                <i class="uil uil-check-circle text-purple-600 dark:text-purple-400 text-xl mr-3 mt-1 flex-shrink-0"></i>
                <span class="text-gray-700 dark:text-gray-300">In connection with any merger, sale, or asset transfer.</span>
              </li>
            </ul>
          </div>

          <!-- Section 6 -->
          <div class="mb-10">
            <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <span class="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500 text-white flex items-center justify-center mr-4 text-lg font-bold">6</span>
              Your Rights
            </h2>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
              You have the right to access, correct, or delete your personal information, as well as to object to or restrict certain processing of your data. To exercise these rights, please contact us using the information provided below.
            </p>
          </div>

          <!-- Section 7 -->
          <div class="mb-10">
            <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <span class="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500 text-white flex items-center justify-center mr-4 text-lg font-bold">7</span>
              Changes to This Privacy Policy
            </h2>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
              We may update our Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. Your continued use of the Service after any changes signifies your acceptance of the updated Privacy Policy.
            </p>
          </div>

          <!-- Section 8 -->
          <div class="mb-10">
            <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <span class="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500 text-white flex items-center justify-center mr-4 text-lg font-bold">8</span>
              Contact Us
            </h2>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              If you have any questions or concerns about this Privacy Policy, please contact us using the information below.
            </p>
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




