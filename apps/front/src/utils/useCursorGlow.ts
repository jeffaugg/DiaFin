import { useRef } from "react";

export function useCursorGlow() {
  const raf = useRef<number | null>(null);

  function onPointerMove(e: React.PointerEvent<HTMLDivElement>) {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;

    if (raf.current) cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(() => {
      el.style.setProperty('--x', `${x}px`);
      el.style.setProperty('--y', `${y}px`);
    });
  }

  function onPointerLeave(e: React.PointerEvent<HTMLDivElement>) {
    const el = e.currentTarget;
    el.style.setProperty('--x', `-9999px`);
    el.style.setProperty('--y', `-9999px`);
  }

  return { onPointerMove, onPointerLeave };
}