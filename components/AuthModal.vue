<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition ease-out duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition ease-in duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isOpen"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
        @click.self="close"
      >
        <Transition
          enter-active-class="transition ease-out duration-300"
          enter-from-class="opacity-0 scale-95"
          enter-to-class="opacity-100 scale-100"
          leave-active-class="transition ease-in duration-200"
          leave-from-class="opacity-100 scale-100"
          leave-to-class="opacity-0 scale-95"
        >
          <div
            v-if="isOpen"
            class="relative bg-gradient-to-br from-purple-50 to-white dark:from-gray-800 dark:to-gray-800 rounded-2xl shadow-2xl w-full max-w-md p-8 border-2 border-purple-300 dark:border-purple-700"
          >
            <!-- Close Button -->
            <button
              @click="close"
              class="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              aria-label="Close modal"
            >
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <!-- Modal Content -->
            <div class="space-y-6">
              <!-- Title -->
              <div>
                <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Sign in or create an account
                </h2>
                <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  New here? We'll create your account automatically.
                </p>
                <p class="text-sm font-semibold text-green-600 dark:text-green-400">
                  ✓ Creating an account and testing is completely free.
                </p>
              </div>

              <!-- Google Button -->
              <button
                @click="handleGoogleAuth"
                :disabled="loading"
                class="w-full flex items-center justify-center gap-3 px-4 py-3 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
              >
                <svg class="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                <span>Continue with Google</span>
              </button>

              <!-- Divider -->
              <div class="relative">
                <div class="absolute inset-0 flex items-center">
                  <div class="w-full border-t border-gray-300 dark:border-gray-600"></div>
                </div>
                <div class="relative flex justify-center text-sm">
                  <span class="px-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                    Or continue with email
                  </span>
                </div>
              </div>

              <!-- Email Input -->
              <div>
                <label for="email" class="sr-only">Email address</label>
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <input
                    id="email"
                    v-model="email"
                    type="email"
                    placeholder="you@example.com"
                    class="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    @keyup.enter="handleEmailAuth"
                  />
                </div>
              </div>

              <!-- Email Button -->
              <button
                @click="handleEmailAuth"
                :disabled="loading || !email || !isValidEmail"
                class="w-full px-4 py-3 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-800 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg"
              >
                <span v-if="!loading">Email me a sign-in link</span>
                <span v-else class="flex items-center justify-center gap-2">
                  <svg class="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              </button>

              <!-- Success Message -->
              <div
                v-if="emailSent"
                class="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg"
              >
                <p class="text-sm text-green-800 dark:text-green-300">
                  ✓ Magic link sent to your email! Please check your inbox.
                </p>
              </div>

              <!-- Error Message -->
              <div
                v-if="error"
                class="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg"
              >
                <p class="text-sm text-red-800 dark:text-red-300">
                  {{ error }}
                </p>
              </div>

              <!-- Terms and Privacy -->
              <p class="text-xs text-center text-gray-500 dark:text-gray-400">
                By continuing, you agree to our
                <a
                  href="/terms-of-services"
                  target="_blank"
                  class="text-purple-600 dark:text-purple-400 hover:underline"
                >
                  Terms
                </a>
                and
                <a
                  href="/privacy-policy"
                  target="_blank"
                  class="text-purple-600 dark:text-purple-400 hover:underline"
                >
                  Privacy Policy
                </a>
                .
              </p>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps<{
  isOpen: boolean
}>()

const emit = defineEmits<{
  close: []
}>()

const email = ref('')
const loading = ref(false)
const emailSent = ref(false)
const error = ref('')

const isValidEmail = computed(() => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email.value)
})

const close = () => {
  email.value = ''
  loading.value = false
  emailSent.value = false
  error.value = ''
  emit('close')
}

const handleGoogleAuth = async () => {
  try {
    loading.value = true
    error.value = ''
    
    const response = await $fetch<{ success: boolean; data: string }>(
      'https://my.simplecallcenter.com/api/auth/google/link'
    )
    
    if (response.success && response.data) {
      // Redirect to Google OAuth
      window.location.href = response.data
    } else {
      error.value = 'Failed to initiate Google authentication. Please try again.'
    }
  } catch (err: any) {
    error.value = err.message || 'An error occurred. Please try again.'
  } finally {
    loading.value = false
  }
}

const handleEmailAuth = async () => {
  if (!email.value || !isValidEmail.value) {
    error.value = 'Please enter a valid email address.'
    return
  }

  try {
    loading.value = true
    error.value = ''
    emailSent.value = false
    
    const encodedEmail = encodeURIComponent(email.value)
    const response = await $fetch<{ success: boolean; message?: string; debug_token?: string }>(
      `https://my.simplecallcenter.com/api/auth/regular/login?email=${encodedEmail}`
    )
    
    if (response.success) {
      emailSent.value = true
      // Optionally close modal after a delay
      setTimeout(() => {
        close()
      }, 3000)
    } else {
      error.value = response.message || 'Failed to send magic link. Please try again.'
    }
  } catch (err: any) {
    error.value = err.message || 'An error occurred. Please try again.'
  } finally {
    loading.value = false
  }
}
</script>




