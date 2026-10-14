'use client';

import { cn } from '@/lib/utils';

export function GridPattern({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "absolute inset-0 pointer-events-none z-0",
        "bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04)_1px,transparent_1px)]",
        "[background-size:40px_40px]",
        "[mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]",
        className
      )}
    />
  );
}
