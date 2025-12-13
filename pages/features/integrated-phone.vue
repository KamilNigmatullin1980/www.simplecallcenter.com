<script setup lang="ts">
import { useHead } from '#imports';
import image from '../../assets/images/bg/bg-index.png';

useHead({
  title: 'Integrated Web Phone | SimpleCallCenter',
  meta: [
    {
      name: 'description',
      content:
        'Enjoy seamless communication with our built-in, browser-based phone. Experience high-quality calls directly from your browser without any downloads or installations. Stay connected effortlessly with SimpleCallCenter.',
    },
    {
      name: 'keywords',
      content:
        'integrated web phone, browser-based phone, seamless communication, high-quality calls, call center, SimpleCallCenter',
    },
    { property: 'og:title', content: 'Integrated Web Phone | SimpleCallCenter' },
    {
      property: 'og:description',
      content:
        'Experience seamless, high-quality calls directly from your browser with our built-in web phone – no downloads or installations required.',
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://simplecallcenter.com/integrated-web-phone' },
  ],
});
</script>

<template>
    
  <section
    class="relative w-full overflow-hidden bg-top bg-cover py-12"
    :style="{ 'background-image': 'url(' + image + ')' }"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       
        <!-- Header -->
      <div class="flex justify-center">
        <div class="w-full text-center">
          <h1 class="text-3xl font-bold mb-4">Integrated Web Phone</h1>
          <p class="text-gray-600">
            Enjoy seamless communication with our built-in, browser-based phone. Experience
            high-quality calls directly from your browser with zero downloads required.
          </p>
        </div>
      </div>

      <!-- Features -->
      <div class="flex flex-wrap items-center mt-8">
        <div class="w-full lg:w-1/2 lg:ml-12">
          <h4 class="text-2xl font-semibold mb-4">Effortless, High-Quality Communication</h4>
          <ul class="space-y-3 text-gray-600">
            <li class="flex items-start">
              <span class="text-blue-500 text-lg mr-2 mt-1">
                <i class="uil uil-check-circle"></i>
              </span>
              Experience seamless calls directly from your browser – no downloads or installations.
            </li>
            <li class="flex items-start">
              <span class="text-blue-500 text-lg mr-2 mt-1">
                <i class="uil uil-check-circle"></i>
              </span>
              Enjoy crystal-clear, high-quality audio for every call.
            </li>
            <li class="flex items-start">
              <span class="text-blue-500 text-lg mr-2 mt-1">
                <i class="uil uil-check-circle"></i>
              </span>
              Fully integrated with your call center platform for efficient communication.
            </li>
            <li class="flex items-start">
              <span class="text-blue-500 text-lg mr-2 mt-1">
                <i class="uil uil-check-circle"></i>
              </span>
              An intuitive, user-friendly interface that requires zero technical expertise.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<!--
  No additional CSS needed—everything is styled via Tailwind utilities.
-->

