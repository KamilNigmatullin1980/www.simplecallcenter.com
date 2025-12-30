import * as Sentry from '@sentry/nuxt'

// Server-side Sentry is disabled for static sites
// This file is required by @sentry/nuxt but won't be used

Sentry.init({
  dsn: 'https://46c2a6c152f36eaeec98b1b7922cdb98@o4509069293518848.ingest.us.sentry.io/4509102049525760',
  enabled: false, // Disabled for static generation
  tracesSampleRate: 1.0,
})

