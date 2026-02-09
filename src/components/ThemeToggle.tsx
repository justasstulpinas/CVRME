import { useEffect, useState } from 'react';
import { applyTheme, loadTheme, Theme } from '@/lib/theme';

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    const t = loadTheme();
    setTheme(t);
    applyTheme(t);
    setMounted(true);
  }, []);

  if (!mounted) return null;

  function toggle() {
    const next: Theme = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    applyTheme(next);
  }

  return (
    <button
      onClick={toggle}
      className="text-caption underline"
    >
      Toggle theme ({theme})
    </button>
  );
}
