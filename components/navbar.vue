<template>
  <nav class="bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-800 sticky top-0 z-50 shadow-lg border-b border-purple-500/30 backdrop-blur-sm">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 lg:h-20">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center hover:opacity-90 transition-opacity">
          <img
            src="../assets/images/large-logo-inverse.webp"
            alt="SimpleCallCenter Logo"
            class="h-10 sm:h-12 w-auto max-w-[200px] sm:max-w-[280px]"
          />
        </NuxtLink>
  
        <!-- Desktop Navigation Links -->
        <ul class="hidden lg:flex items-center space-x-1">
          <li>
            <NuxtLink
              to="/"
              class="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
              :class="activeIndex === '/' 
                ? 'bg-white/20 text-white shadow-lg backdrop-blur-sm' 
                : 'text-white/90 hover:bg-white/10 hover:text-white'"
            >
              Home
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/features"
              class="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
              :class="isFeaturesActive 
                ? 'bg-white/20 text-white shadow-lg backdrop-blur-sm' 
                : 'text-white/90 hover:bg-white/10 hover:text-white'"
            >
              Features
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/pricing"
              class="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
              :class="activeIndex === '/pricing' 
                ? 'bg-white/20 text-white shadow-lg backdrop-blur-sm' 
                : 'text-white/90 hover:bg-white/10 hover:text-white'"
            >
              Pricing
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/faq"
              class="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
              :class="activeIndex === '/faq' 
                ? 'bg-white/20 text-white shadow-lg backdrop-blur-sm' 
                : 'text-white/90 hover:bg-white/10 hover:text-white'"
            >
              FAQ
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/how-it-works"
              class="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
              :class="activeIndex === '/how-it-works' 
                ? 'bg-white/20 text-white shadow-lg backdrop-blur-sm' 
                : 'text-white/90 hover:bg-white/10 hover:text-white'"
            >
              How It Works
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/about"
              class="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
              :class="activeIndex === '/about' 
                ? 'bg-white/20 text-white shadow-lg backdrop-blur-sm' 
                : 'text-white/90 hover:bg-white/10 hover:text-white'"
            >
              About Us
            </NuxtLink>
          </li>
        </ul>
  
        <!-- Right Side: Sign In Button & Mobile Menu Toggle -->
        <div class="flex items-center gap-3">
          <!-- Sign In Button (Desktop) -->
          <a
            href="https://my.simplecallcenter.com"
            target="_blank"
            rel="noopener noreferrer"
            class="hidden sm:inline-flex items-center px-5 py-2.5 bg-white hover:bg-lime-400 text-purple-800 font-semibold rounded-full text-sm transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Sign In
          </a>
  
          <!-- Mobile Menu Toggle Button -->
          <button
            @click="handler"
            class="lg:hidden p-2 rounded-lg text-white hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Toggle menu"
          >
            <svg
              v-if="!toggle"
              class="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg
              v-else
              class="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
  
      <!-- Mobile Menu Dropdown -->
      <Transition
        enter-active-class="transition ease-out duration-200"
        enter-from-class="opacity-0 transform -translate-y-2"
        enter-to-class="opacity-100 transform translate-y-0"
        leave-active-class="transition ease-in duration-150"
        leave-from-class="opacity-100 transform translate-y-0"
        leave-to-class="opacity-0 transform -translate-y-2"
      >
        <div v-if="toggle" class="lg:hidden border-t border-white/20 py-4">
          <ul class="space-y-1">
            <li>
              <NuxtLink
                to="/"
                @click="handler"
                class="block px-4 py-3 rounded-lg text-base font-medium transition-colors"
                :class="activeIndex === '/' 
                  ? 'bg-white/20 text-white backdrop-blur-sm' 
                  : 'text-white/90 hover:bg-white/10 hover:text-white'"
              >
                Home
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/features"
                @click="handler"
                class="block px-4 py-3 rounded-lg text-base font-medium transition-colors"
                :class="isFeaturesActive 
                  ? 'bg-white/20 text-white backdrop-blur-sm' 
                  : 'text-white/90 hover:bg-white/10 hover:text-white'"
              >
                Features
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/pricing"
                @click="handler"
                class="block px-4 py-3 rounded-lg text-base font-medium transition-colors"
                :class="activeIndex === '/pricing' 
                  ? 'bg-white/20 text-white backdrop-blur-sm' 
                  : 'text-white/90 hover:bg-white/10 hover:text-white'"
              >
                Pricing
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/faq"
                @click="handler"
                class="block px-4 py-3 rounded-lg text-base font-medium transition-colors"
                :class="activeIndex === '/faq' 
                  ? 'bg-white/20 text-white backdrop-blur-sm' 
                  : 'text-white/90 hover:bg-white/10 hover:text-white'"
              >
                FAQ
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/how-it-works"
                @click="handler"
                class="block px-4 py-3 rounded-lg text-base font-medium transition-colors"
                :class="activeIndex === '/how-it-works' 
                  ? 'bg-white/20 text-white backdrop-blur-sm' 
                  : 'text-white/90 hover:bg-white/10 hover:text-white'"
              >
                How It Works
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/about"
                @click="handler"
                class="block px-4 py-3 rounded-lg text-base font-medium transition-colors"
                :class="activeIndex === '/about' 
                  ? 'bg-white/20 text-white backdrop-blur-sm' 
                  : 'text-white/90 hover:bg-white/10 hover:text-white'"
              >
                About Us
              </NuxtLink>
            </li>
          </ul>
          <div class="px-4 pt-4 pb-2">
            <a
              href="https://my.simplecallcenter.com"
              target="_blank"
              rel="noopener noreferrer"
              class="block w-full text-center px-5 py-3 bg-white hover:bg-lime-400 text-purple-800 font-semibold rounded-full transition-all duration-300 shadow-lg"
            >
              Log In / Sign Up
            </a>
          </div>
        </div>
      </Transition>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRoute } from '#app';

// Track current route for active styling
const route = useRoute();
const activeIndex = computed(() => route.path);
const isFeaturesActive = computed(() => route.path.startsWith('/features'));


// Mobile menu toggle
const toggle = ref(false);
const handler = () => {
  toggle.value = !toggle.value;
};
</script>
