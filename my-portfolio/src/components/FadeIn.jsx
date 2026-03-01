import { useRef } from "react";
import useVisible from "../hooks/useVisible";

/**
 * Wraps children in a div that fades + slides up once it enters the viewport.
 * @param {number} delay  – ms delay before the transition starts
 * @param {object} style  – optional extra inline styles on the wrapper
 */
export default function FadeIn({ children, delay = 0, style = {} }) {
  const ref = useRef(null);
  const visible = useVisible(ref);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(26px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}