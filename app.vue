<template>
  <div>
    <NuxtLayout>
      <NuxtPage></NuxtPage>
    </NuxtLayout>
  </div>
</template>
<script setup>
import { useHead } from '#app'

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Simple Communications LLC",
        alternateName: "SimpleCallCenter",
        url: "https://www.simplecallcenter.com",
        logo: "https://www.simplecallcenter.com/logo.png"
      })
    }
  ]
})
</script>