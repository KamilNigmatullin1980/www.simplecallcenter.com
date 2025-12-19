<template>
  <picture>
    <source :srcset="webpSrc" type="image/webp" v-if="webpSrc">
    <img
      :src="fallbackSrc"
      :alt="alt"
      :class="imgClass"
      :loading="loading"
      :width="width"
      :height="height"
    />
  </picture>
</template>

<script setup>
defineProps({
  webpSrc: {
    type: String,
    default: null
  },
  fallbackSrc: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    required: true
  },
  imgClass: {
    type: String,
    default: ''
  },
  loading: {
    type: String,
    default: 'lazy'
  },
  width: {
    type: [String, Number],
    default: null
  },
  height: {
    type: [String, Number],
    default: null
  }
})
</script>



