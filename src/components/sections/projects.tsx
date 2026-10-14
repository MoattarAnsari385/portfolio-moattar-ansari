'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Sparkles, Cpu, Github, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import { projects } from '@/data';
import { SectionHeading } from '@/components/ui/section-heading';
import { GlassCard } from '@/components/ui/glass-card';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { MagneticButton } from '@/components/ui/magnetic-button';

const ICONS = [Bot, Sparkles, Cpu];

export function Projects() {
  return (
    <section id="projects" className="py-32 relative w-full">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          number="03" 
          label="MY PROJECTS" 
          title="Featured Projects" 
        />

        <div className="flex flex-col gap-10 mt-16 max-w-5xl mx-auto">
          {projects.slice(0, 3).map((project, index) => {
            const Icon = ICONS[index % ICONS.length];
            const gradientColors = project.gradient || "from-indigo-500 via-purple-500 to-pink-500";
            
            return (
              <ScrollReveal 
                key={project.id || index}
                delay={index * 0.1}
                className="w-full"
              >
                <GlassCard 
                  className="group overflow-hidden w-full transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_0_30px_-5px_rgba(99,102,241,0.3)]"
                  padding="none"
                >
                  <div className="flex flex-col">
                    {/* Top Preview Area */}
                    <div className={cn(
                      "h-[250px] sm:h-[300px] w-full relative flex items-center justify-center overflow-hidden bg-gradient-to-br opacity-80 group-hover:opacity-100 transition-opacity duration-500",
                      gradientColors
                    )}>
                      <div className="absolute inset-0 bg-black/20" />
                      <motion.div 
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative z-10 p-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_0_50px_rgba(255,255,255,0.3)] group-hover:shadow-[0_0_80px_rgba(255,255,255,0.5)] transition-shadow duration-500"
                      >
                        <Icon className="w-16 h-16 sm:w-24 sm:h-24 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
                      </motion.div>
                    </div>

                    {/* Bottom Content Area */}
                    <div className="p-8 sm:p-10 flex flex-col gap-6">
                      <div className="flex flex-col gap-3">
                        <h3 className="text-2xl sm:text-3xl font-bold text-slate-100 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 transition-all duration-300">
                          {project.title}
                        </h3>
                        <p className="text-slate-400 text-base sm:text-lg line-clamp-3">
                          {project.description}
                        </p>
                      </div>

                      {/* Tech Badges */}
                      <div className="flex flex-wrap gap-2">
                        {project.tech && project.tech.map((techItem: string, techIndex: number) => (
                          <div 
                            key={techIndex}
                            className="px-3 py-1 text-sm font-medium rounded-full bg-white/5 border border-white/10 text-slate-300 backdrop-blur-sm"
                          >
                            {techItem}
                          </div>
                        ))}
                      </div>

                      {/* Actions */}
                      <div className="flex flex-wrap items-center gap-4 pt-2">
                        {project.github && (
                          <MagneticButton>
                            <a 
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-white font-medium transition-colors"
                            >
                              <Github className="w-5 h-5" />
                              <span>Source Code</span>
                            </a>
                          </MagneticButton>
                        )}
                        {project.live && (
                          <MagneticButton>
                            <a 
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-medium transition-all shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)]"
                            >
                              <ExternalLink className="w-5 h-5" />
                              <span>Live Demo</span>
                            </a>
                          </MagneticButton>
                        )}
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
