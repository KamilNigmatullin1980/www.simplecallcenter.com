export default defineNuxtPlugin(() => {
  if (process.client) {
    // Load Unicons CSS asynchronously to avoid render-blocking
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = 'https://unicons.iconscout.com/release/v4.0.8/css/line.css'
    link.media = 'print'
    link.onload = function() {
      this.media = 'all'
    }
    // Fallback for browsers that don't support onload on link elements
    link.onerror = function() {
      this.media = 'all'
    }
    document.head.appendChild(link)
    
    // Fallback: if onload doesn't fire, set media to 'all' after a short delay
    setTimeout(() => {
      if (link.media === 'print') {
        link.media = 'all'
      }
    }, 100)
  }
})





