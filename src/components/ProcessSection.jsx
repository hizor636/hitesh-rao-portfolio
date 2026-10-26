import React from 'react';
import { Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { PROCESS_STEPS } from '../data/portfolioData';

export default function ProcessSection() {
  return (
    <section id="process" className="relative py-28 md:py-36 px-4 md:px-8 max-w-7xl mx-auto z-10 border-b border-white/10">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono-tech text-xs tracking-widest text-neutral-500 uppercase">
              [04 // METHODOLOGY & CADENCE]
            </span>
            <span className="w-12 h-px bg-white/20" />
          </div>
          <h2 className="font-sans font-medium text-[clamp(2.2rem,6vw,4.5rem)] leading-[1.05] tracking-[-0.03em] text-white">
            How We Build
          </h2>
        </div>
        <p className="text-[1rem] font-sans font-normal text-[rgba(236,235,230,0.66)] max-w-[60ch] leading-[1.6]">
          A predictable 8-week sprint cadence turning ambitious vision into industry-defining flagships.
        </p>
      </div>

      {/* 4 Process Step Cards */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {PROCESS_STEPS.map((step, idx) => (
          <div
            key={step.step}
            className="group relative flex flex-col justify-between p-8 rounded-2xl bg-white/[0.015] border border-white/10 hover:border-white/30 transition-all duration-300 hover:bg-white/[0.03]"
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10 font-mono-tech">
                <span className="text-2xl font-bold text-white group-hover:text-gradient-silver transition-colors">
                  {step.step}
                </span>
                <span className="text-[0.75rem] px-2.5 py-1 rounded-full border border-white/10 bg-white/[0.02] text-neutral-400 uppercase tracking-widest">
                  {step.duration}
                </span>
              </div>

              <h3 className="mt-6 font-sans font-medium text-[1.5rem] leading-[1.05] tracking-[-0.03em] text-white">
                {step.title}
              </h3>

              <p className="mt-4 text-[0.95rem] font-sans font-normal text-[rgba(236,235,230,0.66)] leading-[1.6] max-w-[60ch]">
                {step.desc}
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono-tech text-neutral-500 uppercase tracking-widest">
              <span>PHASE {step.step} / 04</span>
              <span className="text-white/60 group-hover:text-white transition-colors">→ MILESTONE</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
