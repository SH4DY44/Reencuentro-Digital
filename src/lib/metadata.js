export function generatePageMetadata({ 
  title, 
  description, 
  keywords = [], 
  path,
  image = '/assets/logo/logo.png'
}) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://reencuentro-digital.com'
  
  return {
    title: `${title} | Reencuentro Digital`,
    description,
    keywords: ['reencuentro digital', 'reintegración', 'tecnología', 'familia', ...keywords],
    authors: [{ name: 'Reencuentro Digital' }],
    creator: 'Reencuentro Digital',
    publisher: 'Reencuentro Digital',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `${baseUrl}${path}`,
    },
    openGraph: {
      title: `${title} | Reencuentro Digital`,
      description,
      url: `${baseUrl}${path}`,
      siteName: 'Reencuentro Digital',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: 'Reencuentro Digital',
        },
      ],
      locale: 'es_ES',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | Reencuentro Digital`,
      description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
} 