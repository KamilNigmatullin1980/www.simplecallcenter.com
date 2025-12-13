<script setup lang="ts">
import { useHead } from '#imports';

useHead({
  title: 'Multilingual IVR Creation | SimpleCallCenter',
  meta: [
    {
      name: 'description',
      content:
        'Automatically translate your IVR content into over 80 languages using advanced Google TTS voices. Our system adjusts the IVR menu based on hotline names and counts for optimal multilingual communication. Customize all text to match your brand’s tone.',
    },
    {
      name: 'keywords',
      content:
        'multilingual IVR, IVR translation, automated IVR, Google TTS, multilingual call center, IVR menu, hotline configuration, SimpleCallCenter',
    },
    { property: 'og:title', content: 'Multilingual IVR Creation | SimpleCallCenter' },
    {
      property: 'og:description',
      content:
        'Automatically translate IVR content for multilingual customers using advanced Google TTS voices. Our system adjusts your IVR menu based on hotline names and counts, ensuring global accessibility with full text customization.',
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://simplecallcenter.com/multilingual-ivr' },
  ],
});
</script>

<template>
  <section class="relative w-full overflow-hidden py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="flex justify-center">
        <div class="w-full">
          <header class="mb-4 pb-2 text-center">
            <h1 class="text-3xl font-bold mb-4">Multilingual IVR Creation</h1>
            <p class="text-gray-600">
              Automatically translate your IVR content into over 80 languages using advanced Google
              TTS voices. Ideal for companies serving multilingual customers.
            </p>
          </header>
        </div>
      </div>

      <!-- Features List -->
      <div class="flex flex-wrap items-center">
        <div class="w-full mt-4 md:mt-0 pt-2 md:pt-0 lg:ml-12">
          <ul class="list-none mt-3 space-y-3 text-gray-600">
            <li class="flex items-start">
              <span class="text-blue-500 text-lg mr-2 mt-1">
                <i class="uil uil-check-circle align-middle"></i>
              </span>
              Automatically translate your IVR scripts into over 80 languages for true global accessibility.
            </li>
            <li class="flex items-start">
              <span class="text-blue-500 text-lg mr-2 mt-1">
                <i class="uil uil-check-circle align-middle"></i>
              </span>
              Utilize advanced Google TTS voices to deliver clear, professional prompts.
            </li>
            <li class="flex items-start">
              <span class="text-blue-500 text-lg mr-2 mt-1">
                <i class="uil uil-check-circle align-middle"></i>
              </span>
              Customize all text to perfectly match your brand’s tone and customer needs.
            </li>
            <li class="flex items-start">
              <span class="text-blue-500 text-lg mr-2 mt-1">
                <i class="uil uil-check-circle align-middle"></i>
              </span>
              The IVR menu is automatically adjusted based on your hotline names and count, tailored to the selected languages.
            </li>
            <li class="flex items-start">
              <span class="text-blue-500 text-lg mr-2 mt-1">
                <i class="uil uil-check-circle align-middle"></i>
              </span>
              Perfect for companies serving a multilingual customer base.
            </li>
            <li class="flex items-start">
              <span class="text-blue-500 text-lg mr-2 mt-1">
                <i class="uil uil-check-circle align-middle"></i>
              </span>
              Allows full customization of text to ensure your IVR perfectly reflects your brand.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
/* Add your custom styles for the multilingual IVR page here */
</style>