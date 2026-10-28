'use client';

import { ThemeHotkey } from '@/components/theme-hotkey';
import { ThemeProvider } from 'next-themes';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <ThemeHotkey />
      {children}
    </ThemeProvider>
  );
}