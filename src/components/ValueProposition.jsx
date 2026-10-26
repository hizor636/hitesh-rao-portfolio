import React from 'react';
import { ArrowRight, Database } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function ValueProposition({ onOpenAbout }) {
  const highlightStats = [
    { num: '125K+', label: 'Google SA pool' },
    { num: '800+', label: 'event registrations' },
    { num: '70+', label: 'SQL programs' },
  ];

  return (
    <section id="statement" className="relative px-5 md:px-10 mt-24 max-w-7xl mx-auto z-10 border-b border-[rgba(236,235,230,0.14)] pb-24">
      {/* 2-Column Split: Info Narrative & 3-Column Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-10 items-start">
        {/* Left: (Info) & Statement */}
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-[rgba(236,235,230,0.5)] mb-4">
            (Info)
          </p>
          <p className="text-xl sm:text-2xl md:text-3xl leading-snug font-normal text-white max-w-md">
            A 2nd-year BCA student who connects <span className="font-serif italic font-normal text-[#d4ff4f]">technology</span>, <span className="font-serif italic font-normal text-[#00baf2]">analytics</span> and <span className="font-serif italic font-normal text-[#34a853]">community</span> to help brands reach their audience and leave a mark.
          </p>
          <button
            onClick={onOpenAbout}
            className="inline-flex items-center gap-2 mt-6 font-mono text-xs uppercase tracking-wider text-white border-b border-[rgba(236,235,230,0.4)] pb-1 hover:text-[#d4ff4f] hover:border-[#d4ff4f] transition-colors"
            data-cursor="pointer"
          >
            <span>About me →</span>
          </button>
        </div>

        {/* Right: Numbers Grid (gap-px with subtle line background) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-[rgba(236,235,230,0.14)] border border-[rgba(236,235,230,0.14)] rounded-2xl overflow-hidden shadow-2xl">
          {highlightStats.map((stat) => (
            <div
              key={stat.label}
              className="p-6 md:p-8 bg-[#0b0b0c] hover:bg-[#121215] transition-colors flex flex-col justify-between"
            >
              <p className="text-3xl md:text-5xl font-semibold tracking-tight text-white">
                {stat.num}
              </p>
              <p className="font-mono text-xs text-[rgba(236,235,230,0.5)] mt-3 uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Extended Bio & Growth Philosophy */}
      <div className="mt-16 pt-12 border-t border-[rgba(236,235,230,0.1)] grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        <div className="md:col-span-4">
          <div className="flex items-center gap-2 font-mono text-xs text-[#d4ff4f] uppercase tracking-widest mb-3">
            <Database className="w-3.5 h-3.5 text-[#d4ff4f]" />
            <span>Analytical Rigor</span>
          </div>
          <p className="text-[1rem] font-sans font-normal text-[rgba(236,235,230,0.66)] leading-[1.6] max-w-[60ch]">
            I believe in consistent improvement: learning from every sprint, analyzing real user signals, and converting raw achievements into unstoppable momentum.
          </p>
        </div>

        <div className="md:col-span-8">
          <p className="text-[1.1rem] font-sans text-neutral-300 font-normal leading-[1.6] max-w-[60ch]">
            Pursuing a BCA (Class of 2028) at Nagarjuna College of Engineering and Technology in Bengaluru, I blend campus marketing, event operations, and community building at Google and Paytm with Python, SQL, C, and Google Cloud. Open to high-impact internships across marketing, growth, campus programs, fintech marketing, and data analytics.
          </p>
        </div>
      </div>
    </section>
  );
}
