import './globals.css';
import { Cormorant_Garamond, Jost } from 'next/font/google';
import { EnquiryProvider } from '@/components/EnquiryProvider';
import { SITE } from '@/lib/data';
import { jsonLd } from '@/lib/schema';

const display = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-display',
  display: 'swap'
});

const sans = Jost({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500'],
  variable: '--font-sans',
  display: 'swap'
});

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: 'Subishi Sierra | 336 Luxury Villas on 36 Acres, Maheshwaram Road Hyderabad',
    template: '%s | Subishi Sierra'
  },
  description:
    'Subishi Sierra is a 36-acre gated community of 336 luxury villas near Maheshwaram Road, Hyderabad. East and west facing villas of 300 sq. yd / 3,600 sft with a grand clubhouse, pool and sports courts. TG RERA P02400011199.',
  keywords: [
    'Subishi Sierra',
    'luxury villas Hyderabad',
    'villas Maheshwaram Road',
    'gated villa community Hyderabad',
    '300 sq yd villas Hyderabad',
    'villas near ORR Exit 15',
    'RERA approved villas Telangana'
  ],
  applicationName: 'Subishi Sierra',
  authors: [{ name: 'Subishi Engineers' }],
  creator: 'Subishi Engineers',
  publisher: 'Authorized channel partner',
  category: 'Real Estate',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE.url,
    siteName: 'Subishi Sierra',
    title: 'Subishi Sierra | Luxury Villas on Maheshwaram Road, Hyderabad',
    description:
      '36 acres. 336 villas. 300 sq. yd plots with 3,600 sft of considered design near ORR Exit 15, Hyderabad.',
    images: [
      {
        url: 'https://framerusercontent.com/images/BXmCJ3Ly1OD1jpQCl9VrLAhQcw.jpg?width=2400',
        width: 1200,
        height: 630,
        alt: 'Subishi Sierra luxury villa elevation'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Subishi Sierra | Luxury Villas, Maheshwaram Road Hyderabad',
    description: '36 acres, 336 villas, 300 sq. yd plots. TG RERA P02400011199.',
    images: ['https://framerusercontent.com/images/BXmCJ3Ly1OD1jpQCl9VrLAhQcw.jpg?width=2400']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 }
  },
  other: {
    'geo.region': 'IN-TG',
    'geo.placename': 'Maheshwaram, Hyderabad',
    'geo.position': SITE.geo.lat + ';' + SITE.geo.lng,
    ICBM: SITE.geo.lat + ', ' + SITE.geo.lng
  }
};

export const viewport = { themeColor: '#0C2B21', width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN" className={display.variable + ' ' + sans.variable}>
      <head>
        <link rel="preconnect" href="https://framerusercontent.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd()) }}
        />
      </head>
      <body>
        <EnquiryProvider>{children}</EnquiryProvider>
      </body>
    </html>
  );
}
