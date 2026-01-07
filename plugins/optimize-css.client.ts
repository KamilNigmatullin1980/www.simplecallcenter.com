export default defineNuxtPlugin({
  name: 'optimize-css',
  setup() {
    if (process.client) {
      // Wait for DOM to be ready
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', optimizeCSS)
      } else {
        optimizeCSS()
      }
      
      function optimizeCSS() {
        // Find all stylesheet links and make them non-render-blocking
        const stylesheets = document.querySelectorAll('link[rel="stylesheet"]')
        
        stylesheets.forEach((link: HTMLLinkElement) => {
          // Skip if already processed
          if (link.dataset.optimized) {
            return
          }
          
          // Skip critical CSS or already loaded stylesheets
          if (link.href && (
            link.href.includes('critical') || 
            link.sheet || 
            link.href.includes('data:')
          )) {
            return
          }
          
          // Mark as processed
          link.dataset.optimized = 'true'
          
          // Use media="print" trick to load asynchronously
          const originalMedia = link.media || 'all'
          link.media = 'print'
          
          // Once loaded, switch back to all
          const onLoad = function() {
            this.media = originalMedia
            this.removeEventListener('load', onLoad)
          }
          
          link.addEventListener('load', onLoad)
          
          // Fallback: if onload doesn't fire, set media to 'all' after a short delay
          setTimeout(() => {
            if (link.media === 'print') {
              link.media = originalMedia
            }
          }, 3000)
        })
      }
    }
  }
})

