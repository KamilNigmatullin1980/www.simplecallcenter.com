<template>
  <!-- Footer -->
  <footer class="bg-purple-900 dark:bg-gray-800 text-white">
    <div class="max-w-5xl mx-auto px-4 py-10">
      <div class="flex flex-wrap -mx-4">
        <!-- Contact Info Column -->
        <div class="w-full lg:w-1/3 px-4 mb-8 lg:mb-0 text-sm">
          <img
            src="../assets/images/large-logo-inverse.webp"
            alt="Logo"
            class="h-12 w-auto max-w-[280px] mb-4"
          />
          <ul class="space-y-2">
            <li class="flex items-center">
              <i data-feather="briefcase" class="inline-block w-4 h-4 mr-2"></i>
              Simple Communications, LLC
            </li>
            <li class="flex items-center">
              <i data-feather="map-pin" class="inline-block w-4 h-4 mr-2"></i>
              <a href="#" class="hover:underline">California, United States</a>
            </li>
            <li class="flex items-center">
              <i data-feather="mail" class="inline-block w-4 h-4 mr-2"></i>
              <a href="mailto:support@simplecallcenter.com" class="hover:underline">
                support@simplecallcenter.com
              </a>
            </li>
            <li class="flex items-center">
              <i data-feather="phone" class="inline-block w-4 h-4 mr-2"></i>
              <a href="tel:+14245073330" class="hover:underline">+1 (424) 507 3330</a>
            </li>
          </ul>
        </div>

        <!-- Links Columns -->
        <div class="w-full lg:w-2/3 px-4">
          <div class="flex flex-wrap -mx-4">
            <!-- Column 1 -->
            <div class="w-1/2 md:w-1/4 px-4 mb-6">
              <ul class="space-y-2">
                <li>
                  <a href="/about" class="flex items-center hover:underline">
                    <i data-feather="chevron-right" class="inline-block w-4 h-4 mr-1"></i>
                    About
                  </a>
                </li>
                <li>
                  <a href="/features" class="flex items-center hover:underline">
                    <i data-feather="chevron-right" class="inline-block w-4 h-4 mr-1"></i>
                    Features
                  </a>
                </li>
              </ul>
            </div>

            <!-- Column 2 -->
            <div class="w-1/2 md:w-1/4 px-4 mb-6">
              <ul class="space-y-2">
                <li>
                  <a href="/pricing" class="flex items-center hover:underline">
                    <i data-feather="chevron-right" class="inline-block w-4 h-4 mr-1"></i>
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="/faq" class="flex items-center hover:underline">
                    <i data-feather="chevron-right" class="inline-block w-4 h-4 mr-1"></i>
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <!-- Column 3 -->
            <div class="w-1/2 md:w-1/4 px-4 mb-6">
              <ul class="space-y-2">
                <li>
                  <a href="/terms-of-services" class="flex items-center hover:underline">
                    <i data-feather="chevron-right" class="inline-block w-4 h-4 mr-1"></i>
                    Terms Policy
                  </a>
                </li>
                <li>
                  <a href="/privacy-policy" class="flex items-center hover:underline">
                    <i data-feather="chevron-right" class="inline-block w-4 h-4 mr-1"></i>
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-blue-800 dark:border-gray-200 mt-8 pt-6 text-center text-sm">
        © {{ date }} Simple Communications, LLC. All rights reserved.
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
// import feather from 'feather-icons'

const date = ref(new Date().getFullYear())

onMounted(() => {
  // If you want to render Feather icons, uncomment:
  // feather.replace()
})
</script>
