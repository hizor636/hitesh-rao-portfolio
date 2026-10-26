import React from 'react';
import { Quote, Sparkles, Target, Zap, Clock } from 'lucide-react';
import { BrandSignatureName } from './CompanyLogos';

export default function TestimonialsSection() {
  const noteText = "So, for me, it’s about bridging analytical execution with grassroots marketing to set new benchmarks across technical operations and campus ecosystems. Driven by relentless ambition, I measure effort not by conventional 9-to-5 schedules or Sunday breaks, but by consistent execution, tangible outcomes, and the impact I create.";

  return (
    <section 
      id="about" 
      className="relative py-24 md:py-32 px-4 md:px-8 max-w-7xl mx-auto z-10 border-b border-[var(--border-subtle)] text-left scroll-mt-24"
    >
      {/* Backward-compatibility anchor for existing links */}
      <span id="testimonials" className="absolute -top-24" />

      {/* Section Header */}
      <div className="rv flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-[var(--border-subtle)]">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs tracking-widest text-[var(--accent-lime)] font-semibold uppercase">
            [06 // A SMALL NOTE ABOUT ME]
          </span>
          <span className="w-12 h-px bg-[var(--border-subtle)]" />
        </div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--pill-bg)] border border-[var(--pill-border)] text-xs font-mono text-[var(--accent-lime)] font-medium">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Work Ethic &amp; Philosophy</span>
        </div>
      </div>

      {/* Editorial Luxury Note Card */}
      <div className="rv interactive-card mt-10 max-w-4xl mx-auto text-center flex flex-col items-center p-8 sm:p-14 md:p-16 rounded-3xl border border-[var(--border-subtle)] bg-[var(--card-subtle)] backdrop-blur-md relative overflow-hidden shadow-xs">
        {/* Subtle decorative glow */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-[var(--accent-lime)]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="w-12 h-12 rounded-full bg-[var(--accent-lime)]/10 border border-[var(--accent-lime)]/20 flex items-center justify-center text-[var(--accent-lime)] mb-6 sm:mb-8 shadow-xs">
          <Quote className="w-6 h-6 rotate-180" />
        </div>

        <blockquote className="relative z-10 text-[clamp(1.15rem,2.3vw,1.75rem)] font-sans font-normal leading-[1.68] text-[var(--text-primary)] max-w-3xl mx-auto tracking-tight">
          "{noteText}"
        </blockquote>

        {/* Author Signature & Role Lockup */}
        <div className="relative z-10 mt-10 pt-8 border-t border-[var(--border-subtle)] w-full max-w-md flex flex-col items-center space-y-2">
          <BrandSignatureName size="md" />
          <span className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider text-center">
            Tech Marketer &amp; Data Builder · Bengaluru, Karnataka
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[var(--pill-bg)] border border-[var(--pill-border)] text-[10px] font-mono text-[var(--accent-lime)] font-semibold mt-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-lime)] animate-pulse" />
            <span>High-Velocity Execution · Outcome Focused</span>
          </span>
        </div>
      </div>
    </section>
  );
}
