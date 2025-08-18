// Configuración de SEO para UMĀ Yoga Project
export default {
  // Meta tags básicos
  meta: {
    title: 'UMĀ YOGA PROJECT - Yoga Retreats & Workshops Transformative',
    description: 'UMĀ Yoga Project - Uno spazio sacro di crescita ed evoluzione personale attraverso yoga, retreats e workshop transformative. Scopri Navakaraṇa Vinyāsa e Anubhūti.',
    keywords: 'yoga, retreats, workshop, meditation, navakarana, anubhuti, vinyasa, italy, wellness, mindfulness, spiritual growth',
    author: 'UMĀ Yoga Project',
    robots: 'index, follow',
    viewport: 'width=device-width, initial-scale=1.0'
  },
  
  // Open Graph tags
  openGraph: {
    type: 'website',
    url: 'https://umayogaproject.com/',
    title: 'UMĀ YOGA PROJECT',
    description: 'Uno spazio sacro di crescita ed evoluzione personale attraverso yoga, retreats e workshop transformative.',
    image: '/images/homebg1.png',
    siteName: 'UMĀ Yoga Project',
    locale: 'it_IT'
  },
  
  // Twitter Cards
  twitter: {
    card: 'summary_large_image',
    site: '@umayoga',
    creator: '@umayoga',
    title: 'UMĀ YOGA PROJECT',
    description: 'Uno spazio sacro di crescita ed evoluzione personale attraverso yoga, retreats e workshop transformative.',
    image: '/images/homebg1.png'
  },
  
  // Structured data (JSON-LD)
  structuredData: {
    organization: {
      '@type': 'Organization',
      name: 'UMĀ Yoga Project',
      url: 'https://umayogaproject.com',
      logo: 'https://umayogaproject.com/UMA.svg',
      description: 'Uno spazio sacro di crescita ed evoluzione personale attraverso yoga, retreats e workshop transformative.',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'IT'
      },
      sameAs: [
        'https://www.instagram.com/uma.retreats/'
      ]
    },
    yogaClass: {
      '@type': 'Service',
      name: 'Navakaraṇa Vinyāsa',
      description: 'Práctica de yoga transformativa que combina movimiento, respiración y meditación',
      provider: {
        '@type': 'Organization',
        name: 'UMĀ Yoga Project'
      }
    }
  },
  
  // Sitemap
  sitemap: {
    enabled: true,
    changefreq: 'weekly',
    priority: 0.8
  },
  
  // Canonical URLs
  canonical: {
    enabled: true,
    baseUrl: 'https://umayogaproject.com'
  }
}
