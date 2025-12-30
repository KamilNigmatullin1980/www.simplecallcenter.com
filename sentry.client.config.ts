import * as Sentry from '@sentry/nuxt'

Sentry.init({
  dsn: 'https://46c2a6c152f36eaeec98b1b7922cdb98@o4509069293518848.ingest.us.sentry.io/4509102049525760',
  
  // Performance Monitoring
  tracesSampleRate: 1.0, // Capture 100% of transactions
  
  // Session Replay
  replaysSessionSampleRate: 0.1, // 10% of sessions
  replaysOnErrorSampleRate: 1.0, // 100% of sessions with errors
  
  integrations: [
    Sentry.replayIntegration({
      maskAllText: false,
      blockAllMedia: false,
    }),
  ],
  
  // Environment
  environment: process.env.NODE_ENV || 'production',
  
  // Additional options
  enabled: true,
})


