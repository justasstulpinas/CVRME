import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { applyTheme, loadTheme } from '@/lib/theme';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    applyTheme(loadTheme());
  }, []);

  return <Component {...pageProps} />;
}
