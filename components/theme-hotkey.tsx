'use client';

import { useTheme } from 'next-themes';
import { useEffect } from 'react';

export function ThemeHotkey() {
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() !== 'd') return;
      if (e.metaKey || e.ctrlKey || e.altKey || e.repeat) return;

      // Don't fire while typing
      const el = e.target as HTMLElement;
      if (
        el.isContentEditable ||
        ['INPUT', 'TEXTAREA', 'SELECT'].includes(el.tagName)
      ) return;

      setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [resolvedTheme, setTheme]);

  return null;
}