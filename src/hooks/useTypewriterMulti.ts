import { useEffect, useState } from "react";

/**
 * Cycles through an array of strings with a typewriter effect.
 * Types out each string, pauses, then deletes it before typing the next.
 */
export function useTypewriterMulti(
  strings: string[],
  typeSpeed = 55,
  deleteSpeed = 30,
  pauseAfterTyping = 1800,
  pauseAfterDeleting = 300,
) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let cancelled = false;
    let stringIndex = 0;

    function typeString(str: string, i: number) {
      if (cancelled) return;
      if (i <= str.length) {
        setDisplayed(str.slice(0, i));
        setTimeout(() => typeString(str, i + 1), typeSpeed);
      } else {
        // Finished typing — pause, then delete
        setTimeout(() => deleteString(str, str.length), pauseAfterTyping);
      }
    }

    function deleteString(str: string, i: number) {
      if (cancelled) return;
      if (i >= 0) {
        setDisplayed(str.slice(0, i));
        setTimeout(() => deleteString(str, i - 1), deleteSpeed);
      } else {
        // Finished deleting — move to next string
        stringIndex = (stringIndex + 1) % strings.length;
        setTimeout(() => typeString(strings[stringIndex], 1), pauseAfterDeleting);
      }
    }

    // Start typing the first string after a short delay
    const startTimeout = setTimeout(
      () => typeString(strings[0], 1),
      pauseAfterDeleting,
    );

    return () => {
      cancelled = true;
      clearTimeout(startTimeout);
    };
  }, [strings, typeSpeed, deleteSpeed, pauseAfterTyping, pauseAfterDeleting]);

  return displayed;
}