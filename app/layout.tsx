import { Geist_Mono, Inter } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import "./globals.css";
import { Providers } from './providers';

const inter = Inter({subsets:['latin'],variable:'--font-sans'})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  // Required for resolving absolute URLs for Open Graph images
  metadataBase: new URL('https://imperialmedia.na'), 
  
  title: {
    default: 'Imperial Media Solutions', // Fallback title for pages without a title
    template: '%s | Imperial Media', // The template suffix/prefix for child pages
  },
  description: 'A comprehensive, high-performance web application template.',
  keywords: ['Imperial Media Solutions', 'Design Agency', ''],
  authors: [{ name: 'Thindhimba George', url: 'https://imperialmedia.na' }],
  creator: 'Imperial Media Solutions',
  
  // Open Graph (Social Previews for Facebook/LinkedIn)
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://imperialmedia.na',
    siteName: 'Imperial Media Solutions',
    title: 'Imperial Media Solutions',
    description: 'A comprehensive, high-performance web application template.',
    images: [
      {
        url: '/og-image.png', // Resolves to https://imperialmedia.na
        width: 1200,
        height: 630,
        alt: 'Imperial Media Solutions Preview Image',
      },
    ],
  },

  // Twitter Cards
  twitter: {
    card: 'summary_large_image',
    title: 'Imperial Media Solutions',
    description: 'A comprehensive, high-performance web application template.',
    creator: '@thee_great_kenn',
    images: ['/og-image.png'], 
  },

  // Search Engine Crawling Control
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

  // App Icons
  icons: {
    icon: '/favicon.ico',
    shortcut: '/shortcut-icon.png',
    apple: '/apple-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", inter.variable)}
    >
      <body>
        <ThemeProvider>
          <Providers>
            <TooltipProvider>{children}</TooltipProvider>
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  )
}
