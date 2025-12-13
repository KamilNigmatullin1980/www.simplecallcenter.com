export default defineNuxtPlugin(() => {
  if (process.client) {
    // Tawk.to Script
    window.Tawk_API = window.Tawk_API || {}
    window.Tawk_LoadStart = new Date()
    
    ;(function() {
      const s1 = document.createElement('script')
      const s0 = document.getElementsByTagName('script')[0]
      s1.async = true
      s1.src = 'https://embed.tawk.to/693afd459d7ac919810328e6/1jc76qm0u'
      s1.charset = 'UTF-8'
      s1.setAttribute('crossorigin', '*')
      s0.parentNode?.insertBefore(s1, s0)
    })()
  }
})

declare global {
  interface Window {
    Tawk_API?: any
    Tawk_LoadStart?: Date
  }
}





