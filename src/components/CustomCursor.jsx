import React, { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  const [cursorText, setCursorText] = useState('');
  const [cursorVariant, setCursorVariant] = useState('default');
  const [isVisible, setIsVisible] = useState(false);
  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const rafId = useRef(null);

  useEffect(() => {
    // Check if device has coarse pointer (touch device)
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const onMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      // Check hovered element
      const target = e.target;
      const clickable = target.closest('a, button, [role="button"], input, textarea, select');
      const customCursorEl = target.closest('[data-cursor]');

      if (customCursorEl) {
        const type = customCursorEl.getAttribute('data-cursor');
        const text = customCursorEl.getAttribute('data-cursor-text') || '';
        setCursorVariant(type);
        setCursorText(text);
      } else if (clickable) {
        setCursorVariant('pointer');
        setCursorText('');
      } else {
        setCursorVariant('default');
        setCursorText('');
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    // Smooth lerp loop for the outer magnetic ring
    const render = () => {
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.18;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.18;

      if (cursorRef.current && ringRef.current) {
        cursorRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0)`;
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }

      rafId.current = requestAnimationFrame(render);
    };

    rafId.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [isVisible]);

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  const isView = cursorVariant === 'view' || cursorVariant === 'explore';
  const isPointer = cursorVariant === 'pointer';

  return (
    <div className={`pointer-events-none fixed inset-0 z-99999 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Center sharp dot */}
      <div
        ref={cursorRef}
        className={`fixed top-0 left-0 -ml-1 -mt-1 w-2 h-2 rounded-full bg-white transition-transform duration-75 ease-out ${
          isView ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
        }`}
        style={{ willChange: 'transform' }}
      />

      {/* Outer fluid magnetic ring / label pill */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 transition-all duration-200 ease-out flex items-center justify-center font-mono-tech ${
          isView
            ? '-ml-12 -mt-5 w-24 h-10 rounded-full bg-white text-black font-semibold text-[11px] tracking-widest shadow-[0_0_25px_rgba(255,255,255,0.4)] uppercase scale-100'
            : isPointer
            ? '-ml-6 -mt-6 w-12 h-12 rounded-full border border-white/80 bg-white/10 backdrop-blur-xs scale-100'
            : '-ml-4 -mt-4 w-8 h-8 rounded-full border border-white/30 scale-75'
        }`}
        style={{ willChange: 'transform' }}
      >
        {isView && <span>{cursorText || 'VIEW'}</span>}
      </div>
    </div>
  );
}
