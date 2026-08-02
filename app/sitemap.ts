import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.pragueairportaxi.com'
  const pages = [
    { url: '/', priority: 1.0, changeFrequency: 'weekly' as const },
    { url: '/airport-transfer', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/intercity-transport', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/hourly-rental', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/corporate-travel', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/train-bus-station', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/terms-and-conditions', priority: 0.3, changeFrequency: 'yearly' as const },
    { url: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' as const },
    { url: '/cookie-policy', priority: 0.3, changeFrequency: 'yearly' as const },
  ]
  return pages.map(page => ({
    url: `${base}${page.url}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }))
}
