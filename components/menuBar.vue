<template>
<div class="navbar bg-base-400 shadow-sm dark:shadow-gray-600">
  <div class="navbar-start">
    <img
  src="../assets/images/large-logo.webp"
  alt="Logo"
  class="
    h-10                 <!-- mobile: 2rem tall -->
    w-auto               <!-- preserve aspect ratio -->
    sm:h-12             <!-- ≥640px: override to 3rem tall -->
    sm:max-w-[280px]    <!-- ≥640px: override to max-width 280px -->
    block dark:hidden
  "
/>

<!-- Dark-mode logo -->
<img
  src="../assets/images/large-logo-dark-2.webp"
  alt="Logo"
  class="
    h-10                 <!-- mobile: 2rem tall -->
    w-auto               <!-- preserve aspect ratio -->
    sm:h-12             <!-- ≥640px: 3rem tall -->
    sm:max-w-[280px]    <!-- ≥640px: max-width 280px -->
    hidden dark:block
  "
/>
    <div class="dropdown item-right">
      <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabindex="0"
        class="menu text-lg menu-lg dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li :class="activeIndex === '/' ? 'bg-blue-800 dark:bg-blue-300 dark:text-gray-900 rounded-xl text-white' : 'hover:rounded-xl rounded-xl'">
            <NuxtLink to="/" class="sub-menu-item">Home</NuxtLink>
        </li>
        <li :class="isFeaturesActive ? 'bg-blue-800  dark:bg-blue-300 dark:text-gray-900 rounded-xl text-white' : ''">
            <NuxtLink to="/features" class="sub-menu-item">Features</NuxtLink>
        </li>
        <li :class="activeIndex === '/pricing' ? 'bg-blue-800 dark:bg-blue-300 dark:text-gray-900 rounded-xl text-white' : ''">
            <NuxtLink to="/pricing" class="sub-menu-item">Pricing</NuxtLink>
        </li>
        <li :class="activeIndex === '/faq' ? 'bg-blue-800  dark:bg-blue-300 dark:text-gray-900 rounded-xl text-white' : ''">
            <NuxtLink to="/faq" class="sub-menu-item">FAQ</NuxtLink>
        </li>
        <li :class="activeIndex === '/how-it-works' ? 'bg-blue-800  dark:bg-blue-300 dark:text-gray-900 rounded-xl text-white' : ''">
            <NuxtLink to="/how-it-works" class="sub-menu-item">How It Works</NuxtLink>
        </li>
      </ul>
    </div>
    
    
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal text-lg px- space-x-4">
        <li :class="activeIndex === '/' ? 'bg-blue-800 dark:bg-blue-300 dark:text-gray-900 rounded-xl text-white' : 'hover:rounded-xl rounded-xl'">
            <NuxtLink to="/" class="sub-menu-item">Home</NuxtLink>
          </li>
          <li :class="isFeaturesActive ? 'bg-blue-800  dark:bg-blue-300 dark:text-gray-900 rounded-xl text-white' : ''">
            <NuxtLink to="/features" class="sub-menu-item">Features</NuxtLink>
          </li>
          <li :class="activeIndex === '/pricing' ? 'bg-blue-800 dark:bg-blue-300 dark:text-gray-900 rounded-xl text-white' : ''">
            <NuxtLink to="/pricing" class="sub-menu-item">Pricing</NuxtLink>
          </li>
          <li :class="activeIndex === '/faq' ? 'bg-blue-800  dark:bg-blue-300 dark:text-gray-900 rounded-xl text-white' : ''">
            <NuxtLink to="/faq" class="sub-menu-item">FAQ</NuxtLink>
          </li>
          <li :class="activeIndex === '/how-it-works' ? 'bg-blue-800  dark:bg-blue-300 dark:text-gray-900 rounded-xl text-white' : ''">
            <NuxtLink to="/how-it-works" class="sub-menu-item">How It Works</NuxtLink>
          </li>
    </ul>
  </div>
  <div class="navbar-end">
  <a
    href="#"
    class="
      bg-blue-800 
       dark:bg-blue-300
      text-white 
      dark:text-gray-900
      px-2 py-1        /* mobile: small padding */
      text-xs           /* mobile: smaller text */
      sm:px-4 sm:py-2  /* ≥640px: default padding */
      sm:text-base     /* ≥640px: default text size */
      rounded
      transition
      hover:shadow-lg
      me-3
    "
  >
    Sign In
  </a>
</div>
</div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useRoute } from '#app';

// track current route for “active” styling
const route = useRoute();
const activeIndex = computed(() => route.path);
const isFeaturesActive = computed(() => route.path.startsWith('/features'));

// control your Sign-In modal
// const emailIsSent = useEmailSent();
// let modal = ref<{ openModal: () => void } | null>(null);
const open = () => {
//   if (modal.value) {
    // emailIsSent.value = false;
    // modal.value.openModal();
//   }
};

// mobile-menu toggle
const toggle = ref(false);
const handler = () => {
  toggle.value = !toggle.value;
};

// sticky nav on scroll (if you still want)
const handleScroll = () => { /* … */ };
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>