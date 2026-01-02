export default defineSitemapEventHandler(() => {
  const routes = [
    // Main pages
    '/',
    '/about',
    '/pricing',
    '/faq',
    '/privacy-policy',
    '/terms-of-services',
    '/features',
    '/how-it-works',
    
    // Landing pages
    '/ai-call-center-software',
    '/aircall-alternative',
    '/call-recording-call-monitoring',
    '/cloud-call-center-software',
    '/customer-support-call-center-software',
    '/inbound-call-center-software',
    '/ivr-call-routing',
    '/sales-call-center-software',
    '/small-business-call-center-software',
    '/usage-based-call-center-pricing',
    '/virtual-call-center-software',
    
    // Feature pages
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
    
    // How it works pages
    '/how-it-works/ai_agent_efficiency',
    '/how-it-works/ai_summaries',
    '/how-it-works/billing_usage',
    '/how-it-works/hubspot_integration',
    '/how-it-works/inbound_calls',
    '/how-it-works/inbound_calls_direct_phone',
    '/how-it-works/inbound_fax',
    '/how-it-works/missed_calls_follow_ups',
    '/how-it-works/outbound_calls',
    '/how-it-works/queues_routing',
    '/how-it-works/voicemail_follow_ups',
    '/how-it-works/zoho_integration',
  ]

  return routes.map(route => ({
    loc: route,
    changefreq: 'monthly',
    priority: route === '/' ? 1.0 : 0.8,
    lastmod: new Date().toISOString(),
  }))
})








