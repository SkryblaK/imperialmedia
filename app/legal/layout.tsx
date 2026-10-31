import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: 'Legal Pages', // Fallback title for pages without a title
    template: '%s | Legal Pages', // The template suffix/prefix for child pages
  },
};

export default function LegalLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <main>
      {children}
    </main>
  )
}
