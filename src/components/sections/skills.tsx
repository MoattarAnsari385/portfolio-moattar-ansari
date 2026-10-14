"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Terminal, Database, BrainCircuit, Blocks } from "lucide-react";
import { cn } from "@/lib/utils";
import { skillCategories } from "@/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

// Icon mapping based on category names or identifiers
const getCategoryIcon = (categoryName: string) => {
  const name = categoryName.toLowerCase();
  if (name.includes("ai") || name.includes("machine")) return <BrainCircuit size={18} />;
  if (name.includes("front") || name.includes("ui")) return <Code size={18} />;
  if (name.includes("back") || name.includes("api")) return <Terminal size={18} />;
  if (name.includes("data") || name.includes("db")) return <Database size={18} />;
  return <Blocks size={18} />;
};

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>(
    skillCategories.length > 0 ? skillCategories[0].name : "AI Engineering"
  );

  const activeSkills = skillCategories.find((c: any) => c.name === activeCategory)?.skills || [];
  
  // Find the color of the active category, default to blue/purple
  const activeColor = skillCategories.find((c: any) => c.name === activeCategory)?.color || "from-[#6366f1] to-[#7c3aed]";

  return (
    <section id="skills" className="py-32 relative w-full overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#06b6d4]/5 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#7c3aed]/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          number="02" 
          label="MY SKILLS" 
          title="Technologies I Work With" 
        />
        
        <ScrollReveal direction="up" delay={0.1}>
          <p className="text-text-secondary text-lg mt-4 max-w-2xl">
            I work with modern technologies to build intelligent, scalable applications.
          </p>
        </ScrollReveal>

        {/* Category Tabs */}
        <div className="mt-16 w-full overflow-x-auto pb-4 scrollbar-hide">
          <div className="flex gap-4 items-center min-w-max">
            {skillCategories.map((category: any, index: number) => {
              const isActive = activeCategory === category.name;
              return (
                <button
                  key={category.name}
                  onClick={() => setActiveCategory(category.name)}
                  className={cn(
                    "relative px-6 py-3 rounded-full flex items-center gap-2 text-sm font-medium transition-colors duration-300",
                    isActive ? "text-white" : "text-text-secondary hover:text-text-primary bg-surface/50 border border-white/5 hover:bg-surface"
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeCategoryBg"
                      className="absolute inset-0 rounded-full bg-gradient-to-r shadow-lg opacity-90 -z-10"
                      initial={false}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      style={{
                        backgroundImage: `linear-gradient(to right, ${
                          category.color === 'blue' ? '#6366f1, #3b82f6' : 
                          category.color === 'purple' ? '#7c3aed, #a855f7' :
                          category.color === 'cyan' ? '#06b6d4, #0ea5e9' :
                          '#6366f1, #7c3aed'
                        })`
                      }}
                    />
                  )}
                  {getCategoryIcon(category.name)}
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="mt-12 min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
            >
              {activeSkills.map((skill: any, index: number) => (
                <motion.div
                  key={skill.name || skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                >
                  <GlassCard className="relative overflow-hidden group h-full py-6 px-4 flex flex-col items-center justify-center hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                    {/* Top colored border indicator */}
                    <div 
                      className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: `linear-gradient(to right, ${
                          skillCategories.find((c: any) => c.name === activeCategory)?.color === 'blue' ? '#6366f1, #3b82f6' : 
                          skillCategories.find((c: any) => c.name === activeCategory)?.color === 'purple' ? '#7c3aed, #a855f7' :
                          skillCategories.find((c: any) => c.name === activeCategory)?.color === 'cyan' ? '#06b6d4, #0ea5e9' :
                          '#6366f1, #7c3aed'
                        })`
                      }}
                    />
                    
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    
                    <span className="text-text-primary font-medium text-center z-10">
                      {typeof skill === 'string' ? skill : skill.name}
                    </span>
                  </GlassCard>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};




