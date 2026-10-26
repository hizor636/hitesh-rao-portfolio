import React, { useState } from 'react';
import { ArrowDown, ArrowUpRight, FileText, Mail, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { PartnerLogosBar } from './LogoVisual';

export default function Hero() {
  const [photoHovered, setPhotoHovered] = useState(false);

  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-28 md:pt-36 pb-12 px-5 md:px-10 max-w-7xl mx-auto z-10 overflow-hidden">
      {/* Top Hero Grid: Text & Professional Photo */}
      <div className="my-auto py-6 md:py-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        
        {/* ========================================================= */}
        {/* LEFT COLUMN: Hero Copy & Clear Recruiter CTAs             */}
        {/* ========================================================= */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          {/* Status Pill: Open to internships with pulsating green dot */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[rgba(52,168,83,0.12)] border border-[rgba(52,168,83,0.25)] text-[#81C995] text-xs font-mono mb-6 select-none">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#34A853] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#34A853]"></span>
            </span>
            <span>Open to internships · Bengaluru · Immediate</span>
          </div>

          {/* Primary H1: Audited headline with 'data' serif accent */}
          <h1 className="text-[clamp(2.2rem,6.4vw,5.4rem)] leading-[1.02] tracking-tighter font-medium text-white max-w-4xl [text-wrap:balance]">
            I help campuses and brands grow, with <span className="font-serif italic font-normal text-[#d4ff4f]">data</span> behind every decision.
          </h1>

          {/* Subheadline: 2nd-year BCA student in Bengaluru seeking internship */}
          <p className="text-[1.05rem] md:text-[1.2rem] font-normal text-[rgba(236,235,230,0.78)] leading-[1.6] max-w-xl mt-6">
            {PERSONAL_INFO.subheadline}
          </p>

          {/* Recruiter Action CTAs: Plain verbs */}
          <div className="pt-8 flex flex-wrap items-center gap-4">
            {/* Primary CTA: See my work */}
            <a
              href="#work"
              className="px-6 py-3.5 rounded-full text-xs font-mono uppercase tracking-wider bg-[#d4ff4f] text-black hover:bg-white transition-all duration-300 flex items-center gap-2 font-semibold shadow-[0_0_24px_rgba(212,255,79,0.35)] transform hover:scale-[1.02] active:scale-[0.98]"
              data-cursor="pointer"
            >
              <span>See my work</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>

            {/* Secondary CTA: Email me with prefilled subject */}
            <a
              href={`mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(PERSONAL_INFO.emailSubject)}`}
              className="px-6 py-3.5 rounded-full text-xs font-mono uppercase tracking-wider bg-white/5 border border-white/20 hover:border-[#d4ff4f] hover:text-[#d4ff4f] text-white transition-all duration-300 flex items-center gap-2 group shadow-sm"
              data-cursor="pointer"
            >
              <Mail className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#d4ff4f]" />
              <span>Email me</span>
            </a>

            {/* Tertiary Link: Download résumé */}
            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 text-xs font-mono uppercase tracking-wider text-[rgba(236,235,230,0.65)] hover:text-white transition-colors flex items-center gap-1.5 border-b border-transparent hover:border-white/40"
              data-cursor="pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Download résumé ↗</span>
            </a>
          </div>
        </div>

        {/* ========================================================= */}
        {/* RIGHT COLUMN: Authentic Portrait Photo of Hitesh Rao M    */}
        {/* ========================================================= */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div
            className="relative w-full max-w-[380px] sm:max-w-[420px] aspect-[4/5] rounded-[28px] p-2 bg-gradient-to-b from-white/15 via-white/5 to-white/0 border border-white/15 hover:border-[#d4ff4f]/50 transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.8)] group"
            onMouseEnter={() => setPhotoHovered(true)}
            onMouseLeave={() => setPhotoHovered(false)}
          >
            {/* Ambient Background Aura */}
            <div className="absolute inset-0 rounded-[28px] bg-gradient-to-tr from-[#4285F4]/20 via-[#d4ff4f]/15 to-transparent blur-2xl -z-10 opacity-70 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Inner Image Container */}
            <div className="relative w-full h-full rounded-[22px] overflow-hidden bg-[#0c0d11]">
              <img
                src="/images/hitesh-profile.jpg"
                alt="Portrait of Hitesh Rao M — Tech Marketer & Data Builder"
                width="420"
                height="420"
                className="w-full h-full object-cover object-top filter grayscale-[15%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                loading="eager"
              />

              {/* Bottom Photo Caption */}
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-black/75 backdrop-blur-md border border-white/10 flex items-center justify-between text-xs font-mono shadow-xl">
                <div>
                  <span className="block text-white font-medium tracking-tight text-[13px]">
                    Hitesh Rao M
                  </span>
                  <span className="block text-[11px] text-neutral-400">
                    BCA Class of '28 · NCET Bengaluru
                  </span>
                </div>
                <div className="text-right flex items-center gap-1.5 text-neutral-300">
                  <MapPin className="w-3 h-3 text-[#d4ff4f]" />
                  <span className="text-[11px]">Bengaluru</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Institutional Partner Logos Bar */}
      <PartnerLogosBar />

      {/* Bottom Bar: Quick Verified Links & Scroll Indicator */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-b border-white/10 pb-2">
        <div className="flex items-center gap-6 md:gap-8 font-mono text-xs tracking-widest text-neutral-400">
          {PERSONAL_INFO.socials.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-1 hover:text-[#d4ff4f] transition-colors"
              data-cursor="pointer"
            >
              <span>{s.label}</span>
              <ArrowUpRight className="w-3 h-3 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>
          ))}
        </div>

        {/* Scroll Indicator */}
        <a
          href="#proof-strip"
          className="group flex items-center gap-3 text-xs font-mono text-neutral-400 hover:text-white transition-colors"
          data-cursor="pointer"
        >
          <span className="tracking-widest uppercase">Verified Proof &amp; Work</span>
          <div className="w-5 h-8 rounded-full border border-neutral-700 group-hover:border-[#d4ff4f] flex items-start justify-center p-1 transition-colors">
            <div className="w-1 h-2 rounded-full bg-[#d4ff4f] animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
}
