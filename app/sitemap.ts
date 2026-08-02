import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.naletistelevne.cz'
  const pages = [
    { url: '/', priority: 1.0, changeFrequency: 'weekly' as const },
    { url: '/letistni-preprava', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/mezimestska-doprava', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/hodinovy-pronajem', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/preprava-pro-firmy', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/vlakove-autobusove-nadrazi', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/obchodni-podminky', priority: 0.4, changeFrequency: 'yearly' as const },
    { url: '/ochrana-osobnich-udaju', priority: 0.3, changeFrequency: 'yearly' as const },
    { url: '/zasady-zpracovani-cookies', priority: 0.3, changeFrequency: 'yearly' as const },
  ]

  return pages.map(page => ({
    url: `${base}${page.url}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }))
}
