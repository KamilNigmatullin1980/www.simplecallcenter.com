export default defineSitemapEventHandler(() => {
  const routes = [
    '/',
    '/about',
    '/pricing',
    '/faq',
    '/bloge',
    '/privacy-policy',
    '/terms-of-services',
    '/features',
    '/features/automatic-call-distribution',
    '/features/automatic-schedule-redirect',
    '/features/desktop-softphone',
    '/features/free-internal-calls-and-extensions',
    '/features/fully-automated-setup',
    '/features/inbound-fax-service',
    '/features/integrated-phone',
    '/features/missed-call-processing',
    '/features/multi-role-callcenters',
    '/features/multilingual-ivr',
    '/features/outbound-calls',
    '/features/personal-phone-numbers-direct-lines',
    '/features/quality-assurance-and-quality-control',
    '/features/real-time-agent-presence',
    '/features/reporting-and-dashboards',
    '/features/security-and-reliability',
    '/features/shared-voicemail',
    '/features/speech-recognition',
    '/features/supervisor-assistance',
    '/features/visual-call-flow-and-advanced-cdr',
  ]

  return routes.map(route => ({
    loc: route,
    changefreq: 'monthly',
    priority: route === '/' ? 1.0 : 0.8,
    lastmod: new Date().toISOString(),
  }))
})





