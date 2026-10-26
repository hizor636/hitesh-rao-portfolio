import React from 'react';
import { BEYOND_WORK_INFO, FOCUS_AREAS } from '../data/portfolioData';
import { Compass, Sparkles, BookOpen, Layers, Cpu } from 'lucide-react';

export default function Capabilities() {
  return (
    <section id="capabilities" className="relative px-5 md:px-10 py-24 md:py-32 max-w-7xl mx-auto z-10 border-b border-[rgba(236,235,230,0.14)] text-left">
      {/* Eyebrow Label */}
      <div className="rv flex items-center gap-3 mb-4">
        <span className="font-mono text-xs uppercase tracking-widest text-[#d4ff4f]">
          (Beyond work &amp; Working Philosophy)
        </span>
        <span className="w-12 h-px bg-white/20" />
      </div>

      {/* Main Heading */}
      <h2 className="rv text-3xl sm:text-5xl md:text-6xl tracking-tighter font-medium text-white mb-6">
        Outside the <span className="font-serif italic font-normal text-[#d4ff4f]">laptop.</span>
      </h2>

      {/* Narrative Bio */}
      <div className="rv max-w-3xl text-[rgba(236,235,230,0.8)] text-base sm:text-lg leading-relaxed mb-12">
        <p>
          {BEYOND_WORK_INFO.bio}
        </p>
      </div>

      {/* 4 Working Philosophy Cards */}
      <div className="rv mb-16">
        <div className="flex items-center gap-2 mb-6">
          <Compass className="w-5 h-5 text-[#d4ff4f]" />
          <h3 className="text-xl sm:text-2xl font-medium text-white tracking-tight">
            How I Think &amp; Work
          </h3>
        </div>

        <div className="rv-stagger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {BEYOND_WORK_INFO.workingStyle.map((item, idx) => (
            <div
              key={idx}
              className="interactive-card p-6 rounded-2xl border border-white/10 bg-white/[0.015] hover:bg-white/[0.03] transition-all flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs text-[#d4ff4f] mb-3 block">
                  0{idx + 1} // PHILOSOPHY
                </span>
                <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-sm text-[rgba(236,235,230,0.7)] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Currently Exploring Banner */}
      <div className="rv interactive-card p-6 rounded-2xl border border-[#d4ff4f]/20 bg-[#d4ff4f]/[0.03] flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-16">
        <div className="flex items-start sm:items-center gap-3">
          <Sparkles className="w-5 h-5 text-[#d4ff4f] shrink-0 mt-0.5 sm:mt-0" />
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-[#d4ff4f] block sm:inline mr-2">
              Currently exploring:
            </span>
            <span className="text-sm sm:text-base text-white font-medium">
              {BEYOND_WORK_INFO.currentlyExploring}
            </span>
          </div>
        </div>
        <span className="font-mono text-xs text-neutral-400 whitespace-nowrap">
          Q4 2026 Focus
        </span>
      </div>

      {/* Core Capabilities Columns */}
      <div className="rv">
        <p className="font-mono text-xs uppercase tracking-widest text-[rgba(236,235,230,0.5)] mb-3">
          (Core technical &amp; growth toolkit)
        </p>
        <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-white mb-8">
          Focus disciplines &amp; execution toolset
        </h3>

        <div className="rv-stagger grid grid-cols-1 md:grid-cols-3 gap-8">
          {FOCUS_AREAS.map((col) => (
            <div key={col.title} className="interactive-card p-6 rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all">
              <p className="font-mono text-xs uppercase tracking-wider text-[#d4ff4f] mb-4">
                {col.title}
              </p>
              <ul className="space-y-2.5 text-base text-neutral-200">
                {col.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
