import { useEffect, useState } from 'react';

/** Types out `text` character by character, restarting whenever `text` changes. */
export function useTypewriter(text: string, speed = 45, startDelay = 200) {
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    let i = 0;
    let interval: ReturnType<typeof setInterval> | undefined;
    setDisplayed('');

    const startTimeout = setTimeout(() => {
      interval = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length && interval) clearInterval(interval);
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(startTimeout);
      if (interval) clearInterval(interval);
    };
  }, [text, speed, startDelay]);

  return displayed;
}
