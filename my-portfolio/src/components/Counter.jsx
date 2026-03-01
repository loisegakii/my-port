import { useState, useEffect, useRef } from "react";
import useVisible from "../hooks/useVisible";

/**
 * Counts from 0 → end once it enters the viewport.
 */
export default function Counter({ end, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const visible = useVisible(ref);

  useEffect(() => {
    if (!visible) return;
    let current = 0;
    const increment = end / 120;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [visible, end]);

  return <span ref={ref}>{count}{suffix}</span>;
}