import { useState, useEffect } from "react";

/**
 * Returns true once the referenced element enters the viewport.
 * Used to trigger scroll-reveal animations.
 */
export default function useVisible(ref, threshold = 0.08) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);   // eslint-disable-line react-hooks/exhaustive-deps

  return visible;
}