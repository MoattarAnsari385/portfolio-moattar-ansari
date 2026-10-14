'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin, User, MessageSquare, Send } from 'lucide-react';
import { contactInfo } from '@/data';
import { SectionHeading } from '@/components/ui/section-heading';
import { GlassCard } from '@/components/ui/glass-card';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { MagneticButton } from '@/components/ui/magnetic-button';
import { cn } from '@/lib/utils';

const iconMap: Record<string, React.ElementType> = {
  Mail,
  Github,
  Linkedin,
  MapPin
};

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 relative w-full overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          number="05" 
          label="CONTACT" 
          title="Let's Work Together" 
        />
        
        <ScrollReveal>
          <p className="text-slate-400 text-lg md:text-xl text-center max-w-2xl mx-auto mt-6 mb-16">
            Have a project in mind? Feel free to reach out. I&apos;m always open to new opportunities.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column - Contact Info */}
          <div className="flex flex-col gap-4">
            {contactInfo.map((info, index) => {
              const Icon = iconMap[info.icon] || Mail;
              return (
                <ScrollReveal key={info.id || index} delay={index * 0.1}>
                  <a 
                    href={info.href} 
                    target={info.href?.startsWith('http') ? '_blank' : '_self'}
                    rel={info.href?.startsWith('http') ? 'noopener noreferrer' : ''}
                    className="block"
                  >
                    <GlassCard className="group flex items-center p-6 transition-all duration-300 hover:scale-[1.02] hover:border-indigo-500/30 hover:shadow-[0_0_30px_-5px_rgba(99,102,241,0.2)]">
                      <div className="w-14 h-14 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mr-6 group-hover:bg-indigo-500/20 transition-colors">
                        <Icon className="w-6 h-6 text-indigo-400 group-hover:text-indigo-300 transition-colors" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-slate-400 mb-1">{info.label}</h4>
                        <p className="text-lg font-semibold text-slate-100 group-hover:text-indigo-300 transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </GlassCard>
                  </a>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Right Column - Contact Form */}
          <ScrollReveal delay={0.2}>
            <GlassCard className="h-full p-8 md:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
              
              <h3 className="text-2xl font-bold text-slate-100 mb-8 relative z-10">Send me a message</h3>
              
              <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                    <User className="w-5 h-5 text-slate-500 group-focus-within:text-indigo-400 transition-colors" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Name"
                    className="w-full pl-12 pr-4 py-4 bg-[#0a0a1a]/50 border border-white/10 rounded-xl text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/30 transition-all shadow-[0_0_0_rgba(99,102,241,0)] focus:shadow-[0_0_15px_rgba(99,102,241,0.2)]"
                  />
                </div>

                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                    <Mail className="w-5 h-5 text-slate-500 group-focus-within:text-indigo-400 transition-colors" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Your Email"
                    className="w-full pl-12 pr-4 py-4 bg-[#0a0a1a]/50 border border-white/10 rounded-xl text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/30 transition-all shadow-[0_0_0_rgba(99,102,241,0)] focus:shadow-[0_0_15px_rgba(99,102,241,0.2)]"
                  />
                </div>

                <div className="relative group">
                  <div className="absolute top-4 left-0 flex items-start pl-4 pointer-events-none">
                    <MessageSquare className="w-5 h-5 text-slate-500 group-focus-within:text-indigo-400 transition-colors" />
                  </div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Your Message"
                    className="w-full pl-12 pr-4 py-4 bg-[#0a0a1a]/50 border border-white/10 rounded-xl text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/30 transition-all resize-none shadow-[0_0_0_rgba(99,102,241,0)] focus:shadow-[0_0_15px_rgba(99,102,241,0.2)]"
                  />
                </div>

                <MagneticButton className="w-full">
                  <button
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                    className={cn(
                      "w-full flex items-center justify-center gap-2 py-4 rounded-xl text-white font-semibold transition-all duration-300",
                      isSubmitted 
                        ? "bg-green-500/20 text-green-400 border border-green-500/50" 
                        : "bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] border border-transparent disabled:opacity-70 disabled:cursor-not-allowed"
                    )}
                  >
                    {isSubmitted ? (
                      "Message Sent Successfully!"
                    ) : isSubmitting ? (
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </MagneticButton>
              </form>
            </GlassCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

