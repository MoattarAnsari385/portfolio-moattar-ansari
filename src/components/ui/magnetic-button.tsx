'use client';

import React, { useRef, useState } from 'react';
import { motion, useSpring } from 'framer-motion';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  href?: string;
  variant?: 'primary' | 'outline';
}

export function MagneticButton({
  children,
  className,
  href,
  variant = 'primary',
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.3, y: middleY * 0.3 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
  const springX = useSpring(position.x, springConfig);
  const springY = useSpring(position.y, springConfig);

  const baseStyles = "relative inline-flex items-center justify-center rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 disabled:pointer-events-none disabled:opacity-50 h-11 px-8 py-2 overflow-hidden";
  
  const variants = {
    primary: "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 border border-white/10",
    outline: "bg-transparent text-slate-200 border border-slate-700/50 hover:border-indigo-500/50 hover:bg-indigo-500/10 backdrop-blur-sm"
  };

  const Component = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="inline-block"
    >
      {href ? (
        <Link href={href} className={cn(baseStyles, variants[variant], className)}>
          <span className="relative z-10 flex items-center gap-2">{children}</span>
        </Link>
      ) : (
        <button className={cn(baseStyles, variants[variant], className)} {...props}>
          <span className="relative z-10 flex items-center gap-2">{children}</span>
        </button>
      )}
    </motion.div>
  );

  return Component;
}
