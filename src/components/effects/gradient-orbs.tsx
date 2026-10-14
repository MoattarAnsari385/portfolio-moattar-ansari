'use client';

import { cn } from '@/lib/utils';


export function GradientOrbs({ className }: { className?: string }) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none z-0", className)}>
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#6366f1] opacity-[0.08] blur-[120px] animate-float" />
      <div className="absolute top-[20%] right-[-5%] w-[400px] h-[400px] rounded-full bg-[#7c3aed] opacity-[0.1] blur-[120px] animate-float-delay" />
      <div className="absolute bottom-[-10%] left-[10%] w-[350px] h-[350px] rounded-full bg-[#06b6d4] opacity-[0.09] blur-[120px] animate-float-slow" />
    </div>
  );
}

