"use client";

import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full bg-[#0a0a1a] border-t border-t-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#6366f1]/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left */}
        <div className="flex flex-col items-center md:items-start">
          <span className="text-xl font-semibold text-[#f1f5f9]">Moattar Ansari</span>
          <span className="text-sm text-[#94a3b8] mt-1">Software Engineer</span>
        </div>

        {/* Center */}
        <div className="flex items-center gap-6">
          <Link href="https://github.com" target="_blank" className="text-[#94a3b8] hover:text-[#6366f1] transition-colors">
            <Github className="w-5 h-5" />
          </Link>
          <Link href="https://linkedin.com" target="_blank" className="text-[#94a3b8] hover:text-[#7c3aed] transition-colors">
            <Linkedin className="w-5 h-5" />
          </Link>
          <Link href="mailto:email@example.com" className="text-[#94a3b8] hover:text-[#06b6d4] transition-colors">
            <Mail className="w-5 h-5" />
          </Link>
        </div>

        {/* Right */}
        <div className="flex flex-col items-center md:items-end text-xs text-[#94a3b8]">
          <p>© 2024 All Rights Reserved</p>
          <p className="mt-1 opacity-60">Built with Next.js & TypeScript</p>
        </div>
      </div>
    </footer>
  );
}

