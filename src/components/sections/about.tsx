"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion, useInView, useAnimation } from "framer-motion";
import { Calendar, Briefcase, Sparkles, Download } from "lucide-react";
import { cn } from "@/lib/utils";
import { aboutData } from "@/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

interface CounterProps {
  from: number;
  to: number;
  duration?: number;
  suffix?: string;
}

const AnimatedCounter = ({ from, to, duration = 2, suffix = "" }: CounterProps) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (inView) {
      let startTime: number;
      let animationFrame: number;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        
        // Easing function (easeOutQuad)
        const easeProgress = progress * (2 - progress);
        
        setCount(Math.floor(from + easeProgress * (to - from)));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => cancelAnimationFrame(animationFrame);
    }
  }, [inView, from, to, duration]);

  return (
    <span ref={nodeRef} className="tabular-nums">
      {count}{suffix}
    </span>
  );
};

export function About() {
  return (
    <section id="about" className="py-32 relative w-full overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#6366f1]/10 rounded-full blur-[120px] -translate-y-1/2 -z-10 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#7c3aed]/10 rounded-full blur-[120px] -translate-y-1/2 -z-10 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          number="01" 
          label="ABOUT ME" 
          title="Who I Am" 
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
          {/* Left Column: Image */}
          <div className="lg:col-span-2 relative">
            <ScrollReveal direction="right" duration={0.8}>
              <motion.div 
                className="relative z-10 animate-float"
              >
                {/* Glow Shadow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#6366f1] to-[#7c3aed] blur-2xl opacity-20 rounded-2xl" />
                
                {/* Image Container */}
                <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-surface backdrop-blur-md p-2">
                  <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-background">
                    {/* Placeholder image in case /images/portrait.jpg doesn't exist yet */}
                    <div className="absolute inset-0 bg-gradient-to-br from-surface to-background flex items-center justify-center">
                      <Image 
                        src="/images/portrait.jpg" 
                        alt="Portrait" 
                        fill 
                        className="object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                  </div>
                </div>

                {/* Badge */}
                <motion.div 
                  className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 z-20"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <GlassCard className="px-6 py-4 flex items-center gap-3 rounded-2xl border-white/20 shadow-xl shadow-black/50">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#6366f1] to-[#7c3aed] flex items-center justify-center text-white">
                      <Sparkles size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-text-secondary font-medium">Role</p>
                      <p className="text-text-primary font-bold">Agentic AI Engineer</p>
                    </div>
                  </GlassCard>
                </motion.div>
              </motion.div>
            </ScrollReveal>
          </div>

          {/* Right Column: Bio & Stats */}
          <div className="lg:col-span-3 flex flex-col gap-8">
            <div className="space-y-6">
              {aboutData.paragraphs.map((paragraph: string, index: number) => (
                <ScrollReveal 
                  key={index} 
                  direction="up" 
                  delay={index * 0.15}
                  className="text-lg text-text-secondary leading-relaxed"
                >
                  <p>{paragraph}</p>
                </ScrollReveal>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 mt-4 border-t border-white/5">
              <ScrollReveal direction="up" delay={0.3}>
                <GlassCard className="p-6 text-center hover:-translate-y-1 transition-transform duration-300 group">
                  <div className="mx-auto w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-[#6366f1] mb-4 group-hover:bg-[#6366f1] group-hover:text-white transition-colors duration-300">
                    <Calendar size={24} />
                  </div>
                  <h3 className="text-3xl font-bold text-text-primary mb-1">
                    <AnimatedCounter from={0} to={3} suffix="+" />
                  </h3>
                  <p className="text-sm text-text-secondary font-medium">Years Experience</p>
                </GlassCard>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.4}>
                <GlassCard className="p-6 text-center hover:-translate-y-1 transition-transform duration-300 group">
                  <div className="mx-auto w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-[#7c3aed] mb-4 group-hover:bg-[#7c3aed] group-hover:text-white transition-colors duration-300">
                    <Briefcase size={24} />
                  </div>
                  <h3 className="text-3xl font-bold text-text-primary mb-1">
                    <AnimatedCounter from={0} to={10} suffix="+" />
                  </h3>
                  <p className="text-sm text-text-secondary font-medium">Projects</p>
                </GlassCard>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.5}>
                <GlassCard className="p-6 text-center hover:-translate-y-1 transition-transform duration-300 group">
                  <div className="mx-auto w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center text-[#06b6d4] mb-4 group-hover:bg-[#06b6d4] group-hover:text-white transition-colors duration-300">
                    <Sparkles size={24} />
                  </div>
                  <h3 className="text-3xl font-bold text-text-primary mb-1">
                    <AnimatedCounter from={0} to={100} suffix="%" />
                  </h3>
                  <p className="text-sm text-text-secondary font-medium">Dedication</p>
                </GlassCard>
              </ScrollReveal>
            </div>

            {/* Resume Button */}
            <ScrollReveal direction="up" delay={0.6}>
              <div className="mt-4">
                <a 
                  href="/resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-surface border border-white/10 text-text-primary font-medium transition-all duration-300 hover:border-[#6366f1]/50 hover:shadow-[0_0_20px_rgba(99,102,241,0.2)] hover:bg-white/5 group"
                >
                  Download Resume
                  <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};




