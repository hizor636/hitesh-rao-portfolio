import React from 'react';
import { HOW_I_WORK_PRINCIPLES } from '../data/portfolioData';

export default function ProcessSection() {
  return (
    <section id="how-i-work" className="relative px-5 md:px-10 mt-28 max-w-7xl mx-auto z-10 border-b border-[rgba(236,235,230,0.14)] pb-24">
      {/* Section Header */}
      <div className="rv flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[rgba(236,235,230,0.1)]">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-[rgba(236,235,230,0.5)] mb-3">
            (The Reality Behind the Work)
          </p>
          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-white">
            What the work actually looks like.
          </h2>
        </div>
        <p className="text-sm font-normal text-[rgba(236,235,230,0.7)] max-w-md leading-relaxed">
          Behind every event or campaign is unglamorous work: chasing confirmations, fixing registration glitches, printing collateral, and sitting down afterwards to see what really moved the needle.
        </p>
      </div>

      {/* 4 Working Principles Grid */}
      <div className="rv-stagger mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {HOW_I_WORK_PRINCIPLES.map((principle) => (
          <div
            key={principle.num}
            className="interactive-card p-7 rounded-2xl bg-white/[0.015] border border-white/10 hover:border-[#d4ff4f]/40 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <span className="font-mono text-sm text-[#d4ff4f] font-semibold block mb-4">
                {principle.num} //
              </span>
              <h3 className="text-xl font-medium text-white mb-3">
                {principle.title}
              </h3>
              <p className="text-xs sm:text-sm text-[rgba(236,235,230,0.7)] leading-relaxed">
                {principle.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
