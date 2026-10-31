import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: 'Auth', // Fallback title for pages without a title
    template: '%s | Imperial Auth', // The template suffix/prefix for child pages
  },
};

export default function AuthLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <main>
      {children}
    </main>
  )
}
