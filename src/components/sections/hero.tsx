'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ParticleField } from '@/components/effects/particle-field';
import { GradientOrbs } from '@/components/effects/gradient-orbs';
import { GridPattern } from '@/components/effects/grid-pattern';
import { AnimatedText } from '@/components/ui/animated-text';
import { MagneticButton } from '@/components/ui/magnetic-button';
import { Sparkles, ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { heroData } from '@/data';

const roles = ['Agentic AI Engineer', 'Full-Stack Developer'];

export function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRoleIndex];
    let timeoutId: NodeJS.Timeout;

    if (isDeleting) {
      if (displayText === '') {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        timeoutId = setTimeout(() => {
          setDisplayText(prev => prev.slice(0, -1));
        }, 50);
      }
    } else {
      if (displayText === role) {
        timeoutId = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      } else {
        timeoutId = setTimeout(() => {
          setDisplayText(role.slice(0, displayText.length + 1));
        }, 100);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [displayText, isDeleting, currentRoleIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      <ParticleField />
      <GradientOrbs />
      <GridPattern />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-8">
          
          {/* Left Text Content */}
          <div className="w-full lg:w-[60%] flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6 shadow-[0_0_15px_rgba(99,102,241,0.15)]"
            >
              <Sparkles className="w-4 h-4 text-indigo-400" />
              <span className="text-sm font-medium text-slate-300">Hi, I&apos;m</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-4 text-slate-100"
            >
              Moattar <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">Ansari</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl sm:text-2xl font-medium text-slate-300 mb-6 h-8 flex items-center"
            >
              <span>{displayText}</span>
              <span className="animate-pulse text-indigo-400 ml-1">|</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-base sm:text-lg text-slate-400 max-w-lg mb-10 leading-relaxed"
            >
              {heroData?.description || "I build premium web experiences and intelligent AI agents that solve real-world problems. Passionate about clean code and exceptional design."}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-12"
            >
              <MagneticButton>
                <Link
                  href="#projects"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium hover:from-indigo-400 hover:to-purple-500 transition-all shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)]"
                >
                  View Projects
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </MagneticButton>
              <MagneticButton>
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all backdrop-blur-sm"
                >
                  Contact Me
                </Link>
              </MagneticButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center gap-6"
            >
              <Link href={heroData?.socials?.find(s => s.name === 'GitHub')?.href || '#'} target="_blank" className="text-slate-400 hover:text-white hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all">
                <Github className="w-6 h-6" />
              </Link>
              <Link href={heroData?.socials?.find(s => s.name === 'LinkedIn')?.href || '#'} target="_blank" className="text-slate-400 hover:text-[#0a66c2] hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(10,102,194,0.5)] transition-all">
                <Linkedin className="w-6 h-6" />
              </Link>
              <Link href={heroData?.socials?.find(s => s.name === 'Email')?.href || '#'} className="text-slate-400 hover:text-indigo-400 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(99,102,241,0.5)] transition-all">
                <Mail className="w-6 h-6" />
              </Link>
            </motion.div>
          </div>

          {/* Right Portrait */}
          <div className="w-full lg:w-[40%] flex justify-center relative mt-10 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
              className="relative w-64 h-80 sm:w-80 sm:h-[400px] lg:w-[400px] lg:h-[500px]"
            >
              {/* Outer Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-[2rem] opacity-30 blur-2xl" />
              
              {/* Animated Border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-500 p-[2px] opacity-70 animate-[spin_4s_linear_infinite_reverse]" style={{ animationDuration: '6s' }} />
              
              {/* Inner container */}
              <div className="absolute inset-[2px] rounded-2xl overflow-hidden bg-[#030014] shadow-[0_0_40px_rgba(99,102,241,0.2)]">
                <Image
                  src="/images/portrait.jpg"
                  alt="Moattar Ansari"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 400px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030014]/80 via-[#030014]/20 to-transparent" />
              </div>

              {/* Floating Badges */}
              <motion.div
                className="absolute top-10 -left-6 lg:-left-12 px-4 py-2 rounded-full bg-[#030014]/50 backdrop-blur-md border border-white/10 shadow-[0_0_15px_rgba(6,182,212,0.2)] animate-float"
              >
                <span className="text-sm font-semibold text-cyan-300">Next.js 14</span>
              </motion.div>

              <motion.div
                className="absolute top-1/2 -right-6 lg:-right-12 px-4 py-2 rounded-full bg-[#030014]/50 backdrop-blur-md border border-white/10 shadow-[0_0_15px_rgba(124,58,237,0.2)] animate-float-delay"
              >
                <span className="text-sm font-semibold text-purple-300">Agentic AI</span>
              </motion.div>

              <motion.div
                className="absolute bottom-10 -left-4 lg:-left-8 px-4 py-2 rounded-full bg-[#030014]/50 backdrop-blur-md border border-white/10 shadow-[0_0_15px_rgba(99,102,241,0.2)] animate-float-slow"
              >
                <span className="text-sm font-semibold text-indigo-300">Python</span>
              </motion.div>
              
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
