'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';
import { experiences } from '@/data';
import { SectionHeading } from '@/components/ui/section-heading';
import { GlassCard } from '@/components/ui/glass-card';

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="py-32 relative w-full overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          number="04" 
          label="EXPERIENCE" 
          title="My Journey" 
        />

        <div 
          ref={containerRef}
          className="relative mt-20 max-w-5xl mx-auto"
        >
          {/* Animated Timeline Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-white/10">
            <motion.div 
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-[#6366f1] via-[#7c3aed] to-[#06b6d4] shadow-[0_0_15px_rgba(99,102,241,0.5)] origin-top"
            />
          </div>

          <div className="flex flex-col gap-12 md:gap-24">
            {experiences.slice(0, 3).map((exp, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={exp.id || index}
                  className={cn(
                    "relative flex w-full md:justify-between items-start md:items-center",
                    isEven ? "md:flex-row-reverse" : "md:flex-row",
                    "flex-row" // Mobile always left
                  )}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center mt-6 md:mt-0 z-10">
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.2 }}
                      className="w-5 h-5 rounded-full bg-[#0a0a1a] border-4 border-indigo-500 shadow-[0_0_20px_rgba(99,102,241,0.8)]"
                    >
                      <motion.div 
                        animate={{ 
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 0, 0.5]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="absolute inset-0 rounded-full bg-indigo-500"
                      />
                    </motion.div>
                  </div>

                  {/* Empty space for alternating layout on desktop */}
                  <div className="hidden md:block md:w-[45%]" />

                  {/* Card Content */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="w-full md:w-[45%] pl-16 md:pl-0"
                  >
                    <GlassCard className="relative overflow-hidden group hover:border-indigo-500/50 transition-colors duration-300">
                      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="relative z-10 flex flex-col gap-4">
                        <div className="inline-flex self-start px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                          {exp.period}
                        </div>
                        
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold text-slate-100 mb-1">
                            {exp.role}
                          </h3>
                          <h4 className="text-lg font-medium text-indigo-400">
                            {exp.company}
                          </h4>
                        </div>
                        
                        <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                          {exp.description}
                        </p>
                        
                        {exp.technologies && (
                          <div className="flex flex-wrap gap-2 mt-2">
                            {exp.technologies.map((tech: string, i: number) => (
                              <span 
                                key={i}
                                className="px-2.5 py-1 text-xs font-medium rounded-md bg-white/5 border border-white/10 text-slate-300"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </GlassCard>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
