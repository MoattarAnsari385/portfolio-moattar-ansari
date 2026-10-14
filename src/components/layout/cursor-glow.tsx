"use client";

import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';
import { useMousePosition } from '@/hooks/use-mouse-position';

export function CursorGlow() {
  const [isMobile, setIsMobile] = useState(true); // Default true to avoid flash on mobile
  const { x, y } = useMousePosition();

  const springConfig = { damping: 25, stiffness: 150 };
  const cursorX = useSpring(x, springConfig);
  const cursorY = useSpring(y, springConfig);

  useEffect(() => {
    const checkMobile = () => {
      const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      setIsMobile(isTouch || window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMobile) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none z-50"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: '-50%',
        translateY: '-50%',
        background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, rgba(124,58,237,0.05) 50%, rgba(0,0,0,0) 70%)',
        opacity: 0.5,
        filter: 'blur(40px)'
      }}
    />
  );
}

