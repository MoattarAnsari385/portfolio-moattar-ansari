"use client";

import React, { useEffect, useRef } from 'react';

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<any>(null);

  useEffect(() => {
    let raf: number;
    let lenis: any;

    const initLenis = async () => {
      try {
        const Lenis = (await import('@studio-freight/lenis')).default;
        lenis = new Lenis({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
          wheelMultiplier: 0.8,
          touchMultiplier: 1.5,
        });

        lenisRef.current = lenis;

        function animate(time: number) {
          lenis.raf(time);
          raf = requestAnimationFrame(animate);
        }

        raf = requestAnimationFrame(animate);
      } catch (err) {
        console.warn('Lenis failed to initialize:', err);
      }
    };

    initLenis();

    return () => {
      if (raf) cancelAnimationFrame(raf);
      if (lenis) lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
