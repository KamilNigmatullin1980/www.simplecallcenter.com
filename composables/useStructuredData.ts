export const useStructuredData = (options: {
  type?: 'WebPage' | 'FAQPage' | 'Article' | 'SoftwareApplication'
  name: string
  description: string
  url: string
  additionalData?: Record<string, any>
}) => {
  const { type = 'WebPage', name, description, url, additionalData = {} } = options

  const runtimeConfig = useRuntimeConfig()
  const baseUrl = (runtimeConfig.public?.siteUrl as string) || 'https://www.simplecallcenter.com'
  const cleanBaseUrl = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl
  const fullUrl = url.startsWith('http') ? url : `${cleanBaseUrl}${url}`

  const publisher = {
    '@type': 'Organization',
    name: 'Simple Communications, LLC',
    alternateName: 'SimpleCallCenter',
    url: 'https://www.simplecallcenter.com',
  }

  const baseSchema: Record<string, any> = {
    '@context': 'https://schema.org',
    '@type': type,
    name,
    description,
    url: fullUrl,
    publisher,
    ...additionalData,
  }

  // Special handling for FAQPage
  if (type === 'FAQPage') {
    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: {
        '@type': 'Question',
        name,
        acceptedAnswer: {
          '@type': 'Answer',
          text: description,
        },
      },
      url: fullUrl,
      publisher,
      ...additionalData,
    }
  }

  return baseSchema
}


