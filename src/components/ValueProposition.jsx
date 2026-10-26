import React from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function ValueProposition() {
  return (
    <section id="proof-strip" className="relative px-5 md:px-10 mt-20 max-w-7xl mx-auto z-10 border-b border-[rgba(236,235,230,0.14)] pb-20">
      
      {/* Proof Strip Header */}
      <div className="flex items-center justify-between pb-4 mb-8 border-b border-[rgba(236,235,230,0.1)]">
        <div className="flex items-center gap-2 text-xs font-mono text-[rgba(236,235,230,0.6)] uppercase tracking-wider">
          <CheckCircle2 className="w-3.5 h-3.5 text-[#d4ff4f]" />
          <span>Verified Track Record &amp; Proof</span>
        </div>
        <span className="font-mono text-xs text-[rgba(236,235,230,0.4)] hidden sm:inline">
          Sourced &amp; Verifiable Claims
        </span>
      </div>

      {/* 4 Verified Facts Grid with Live Proof Links */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[rgba(236,235,230,0.14)] border border-[rgba(236,235,230,0.14)] rounded-2xl overflow-hidden shadow-2xl mb-16">
        {PERSONAL_INFO.proofStats.map((stat) => (
          <div
            key={stat.label}
            className="p-6 md:p-7 bg-[#0b0b0c] hover:bg-[#121216] transition-colors flex flex-col justify-between"
          >
            <div>
              <p className="text-3xl md:text-5xl font-semibold tracking-tight text-white leading-none">
                {stat.num}
              </p>
              <p className="text-sm font-medium text-white mt-3">
                {stat.label}
              </p>
              <p className="font-mono text-[11px] text-[rgba(236,235,230,0.5)] mt-1">
                {stat.sub}
              </p>
            </div>

            <a
              href={stat.proofLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-1 font-mono text-xs text-[#d4ff4f] hover:underline"
              data-cursor="pointer"
            >
              <span>{stat.proofText}</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        ))}
      </div>

      {/* Info Statement */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-10 items-start pt-6">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-[rgba(236,235,230,0.5)] mb-3">
            (About my focus)
          </p>
          <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-white leading-snug">
            A 2nd-year BCA student who connects <span className="font-serif italic text-[#d4ff4f]">technology</span>, <span className="font-serif italic text-[#00baf2]">analytics</span> and <span className="font-serif italic text-[#34a853]">community</span> to help brands reach their audience and leave a mark.
          </h2>
        </div>

        <div className="text-[1.05rem] text-[rgba(236,235,230,0.75)] font-normal leading-[1.65] space-y-4">
          <p>
            I got into marketing through events and communities, then realised the best decisions come from data. So I study both: I write SQL and Python for my BCA degree, and I apply them while running student communities, workshops and hackathon operations.
          </p>
          <p>
            Over the past year I’ve been a Google Student Ambassador, worked on the organising team at a Paytm hackathon as a marketing intern, helped on the organising side of a Bengaluru developer meetup, and pitched an AI skill-gap idea at a student hackathon. I’m early in my career, and I’m looking for internships where I can contribute, get feedback and grow.
          </p>
          <div className="pt-2">
            <a
              href="#degree-life"
              className="inline-flex items-center gap-1.5 font-mono text-xs text-white border-b border-white/40 hover:border-[#d4ff4f] hover:text-[#d4ff4f] pb-1 transition-colors uppercase tracking-wider"
              data-cursor="pointer"
            >
              <span>See how classes connect to the work →</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
