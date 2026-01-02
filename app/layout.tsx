import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Long And Chuyen Invitation',
  description: 'Thiệp mời đám cưới Long & Chuyên',
  metadataBase: new URL('https://long-chuyen-wedding.online'),
  openGraph: {
    title: 'Long And Chuyen Invitation',
    description: 'Thiệp mời đám cưới Long & Chuyên',
    url: 'https://long-chuyen-wedding.online',
    siteName: 'Long And Chuyen Invitation',
    images: [
      {
        url: '/images/DSC_1051.jpg',
        width: 1200,
        height: 630,
        alt: 'Long And Chuyen Wedding Invitation',
      },
    ],
    locale: 'vi_VN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Long And Chuyen Invitation',
    description: 'Thiệp mời đám cưới Long & Chuyên',
    images: ['/images/DSC_1051.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
