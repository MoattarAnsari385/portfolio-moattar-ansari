'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  number: string;
  label: string;
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeading({
  number,
  label,
  title,
  description,
  className,
}: SectionHeadingProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={cn("flex flex-col gap-4", className)}
    >
      <motion.div variants={itemVariants} className="flex items-center gap-3">
        <span className="font-mono text-sm font-medium text-indigo-400">
          {number}
        </span>
        <div className="h-[1px] w-12 bg-indigo-500/30" />
        <span className="text-xs font-bold tracking-widest text-indigo-400/80 uppercase">
          {label}
        </span>
      </motion.div>
      
      <motion.h2 
        variants={itemVariants}
        className="text-3xl md:text-5xl font-bold tracking-tight text-slate-100"
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p 
          variants={itemVariants}
          className="max-w-2xl text-slate-400 md:text-lg"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
