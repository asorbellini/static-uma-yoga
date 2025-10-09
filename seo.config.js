// Configuración de SEO para UMĀ Yoga Project
export default {
  // Meta tags básicos
  meta: {
    title: 'UMĀ YOGA PROJECT - Yoga Retreats & Workshops Transformative',
    description: "Umā è un movimento. Uno spazio in cui il corpo diventa un percorso, il respiro si trasforma in saggezza e la comunità si crea attraverso l' esperienza condivisa.",
    keywords: 'yoga, retreats, workshop, meditation, navakarana, anubhuti, vinyasa, wellness, mindfulness, spiritual growth',
    author: 'UMĀ Yoga Project',
    robots: 'index, follow',
    viewport: 'width=device-width, initial-scale=1.0',
    googlebot: 'translate'
  },
  
  // Open Graph tags
  openGraph: {
    type: 'website',
    url: 'https://www.umayogaproject.com/',
    title: 'UMĀ YOGA PROJECT',
    description: "Umā è un movimento. Uno spazio in cui il corpo diventa un percorso, il respiro si trasforma in saggezza e la comunità si crea attraverso l' esperienza condivisa.",
    image: 'https://www.umayogaproject.com/images/umayogaproject.png',
    siteName: 'UMĀ Yoga Project',
    locale: 'it_IT'
  },
  
  // Twitter Cards
  twitter: {
    card: 'summary_large_image',
    site: '@umayoga',
    creator: '@umayoga',
    title: 'UMĀ YOGA PROJECT',
    description: "Umā è un movimento. Uno spazio in cui il corpo diventa un percorso, il respiro si trasforma in saggezza e la comunità si crea attraverso l' esperienza condivisa.",
    image: 'https://www.umayogaproject.com/images/umayogaproject.png'
  },
  
  // Structured data (JSON-LD)
  structuredData: {
    organization: {
      '@type': 'Organization',
      name: 'UMĀ Yoga Project',
      url: 'https://umayogaproject.com',
      logo: 'https://umayogaproject.com/UMA.svg',
      description: "Umā è un movimento. Uno spazio in cui il corpo diventa un percorso, il respiro si trasforma in saggezza e la comunità si crea attraverso l' esperienza condivisa.",
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'IT'
      },
      sameAs: [
        'https://www.instagram.com/uma.retreats/'
      ]
    },
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
    baseUrl: 'https://www.umayogaproject.com/'
  }
}
