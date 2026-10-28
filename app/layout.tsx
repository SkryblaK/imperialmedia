import { Geist_Mono, Inter } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import "./globals.css";
import { Providers } from './providers';
import { Metadata } from "next";

const inter = Inter({subsets:['latin'],variable:'--font-sans'})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  // Required for resolving absolute URLs for Open Graph images
  metadataBase: new URL('https://imperialmedia.na'), 
  
  title: {
    default: 'My Awesome App', // Fallback title for pages without a title
    template: '%s | My Awesome App', // The template suffix/prefix for child pages
  },
  description: 'A comprehensive, high-performance web application template.',
  keywords: ['Next.js', 'React', 'SEO Template'],
  authors: [{ name: 'Your Name', url: 'https://yourdomain.com' }],
  creator: 'Your Company Name',
  
  // Open Graph (Social Previews for Facebook/LinkedIn)
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourdomain.com',
    siteName: 'My Awesome App',
    title: 'My Awesome App',
    description: 'A comprehensive, high-performance web application template.',
    images: [
      {
        url: '/og-image.png', // Resolves to https://yourdomain.com
        width: 1200,
        height: 630,
        alt: 'My Awesome App Preview Image',
      },
    ],
  },

  // Twitter Cards
  twitter: {
    card: 'summary_large_image',
    title: 'My Awesome App',
    description: 'A comprehensive, high-performance web application template.',
    creator: '@yourtwitterhandle',
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
