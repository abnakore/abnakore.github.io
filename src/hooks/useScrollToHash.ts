import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    // Remove the leading '#' and find the element
    const id = hash.replace('#', '');
    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 80);

    return () => clearTimeout(timer);
  }, [hash]);
}