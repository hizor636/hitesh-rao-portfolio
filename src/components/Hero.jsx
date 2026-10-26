import React, { useState } from 'react';
import { ArrowDown, Award, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import LogoVisual, { PartnerLogosBar } from './LogoVisual';

export default function Hero({ onOpenAbout, onOpenContact }) {
  const [photoHovered, setPhotoHovered] = useState(false);

  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-28 md:pt-36 pb-12 px-5 md:px-10 max-w-7xl mx-auto z-10 overflow-hidden">
      {/* Top Hero Grid: Text & Professional Photo */}
      <div className="my-auto py-6 md:py-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        
        {/* ========================================================= */}
        {/* LEFT COLUMN: Hero Text & Typography                       */}
        {/* ========================================================= */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Eyebrow Label matching exact HTML file */}
          <p className="font-mono text-xs uppercase tracking-widest text-[rgba(236,235,230,0.5)] mb-6">
            (Hitesh Rao M — Tech Marketing &amp; Data)
          </p>

          {/* Primary H1 with exact typography scale and serif accent word */}
          <h1 className="text-[clamp(2.2rem,7.2vw,6.6rem)] leading-[0.98] tracking-tighter font-medium text-white max-w-5xl [text-wrap:balance]">
            Growth marketing, backed by <span className="font-serif italic font-normal text-[#d4ff4f]">data</span>, for teams and brands ready to move forward.
          </h1>

          {/* Subtext Tagline */}
          <p className="text-[1rem] md:text-[1.15rem] font-normal text-[rgba(236,235,230,0.7)] leading-[1.6] max-w-xl mt-6">
            Campus Programs at <strong className="text-white font-medium">Google</strong> &amp; <strong className="text-[#00baf2] font-medium">Paytm</strong> • SQL &amp; Python Analytics • Bengaluru
          </p>

          {/* Accolades Proof Ticker Pill */}
          <div 
            onClick={onOpenAbout}
            className="mt-6 cursor-pointer group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] hover:border-[#d4ff4f]/40 backdrop-blur-md transition-all duration-300 transform hover:scale-[1.02]"
            data-cursor="pointer"
          >
            <Award className="w-3.5 h-3.5 text-[#d4ff4f]" />
            <span className="text-[11px] font-mono tracking-wider text-neutral-300 group-hover:text-white uppercase">
              Google Student Ambassador • Paytm Hackathon Ops • 70+ SQL Streak
            </span>
          </div>

          {/* Action CTAs */}
          <div className="pt-8 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="px-6 py-3.5 rounded-full text-xs font-mono tracking-widest uppercase bg-white/5 border border-white/20 hover:border-[#d4ff4f] hover:text-[#d4ff4f] text-white transition-all duration-300 flex items-center gap-2 group shadow-sm"
              data-cursor="pointer"
            >
              <span>EXPLORE FOLIO</span>
              <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
            </a>

            <button
              onClick={onOpenContact}
              className="px-6 py-3.5 rounded-full text-xs font-mono tracking-widest uppercase bg-[#d4ff4f] text-black hover:bg-white transition-all duration-300 flex items-center gap-2 font-semibold shadow-[0_0_24px_rgba(212,255,79,0.35)] transform hover:scale-[1.02] active:scale-[0.98]"
              data-cursor="pointer"
            >
              <span>DISCUSS OPPORTUNITY</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* ========================================================= */}
        {/* RIGHT COLUMN: Professional Portrait Photo of Hitesh       */}
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
                alt="Professional portrait of Hitesh Rao M"
                width="420"
                height="420"
                className="w-full h-full object-cover object-top filter grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                loading="eager"
              />

              {/* Editorial Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/90 via-[#080808]/20 to-transparent pointer-events-none" />

              {/* Bottom Photo Caption */}
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-black/70 backdrop-blur-md border border-white/10 flex items-center justify-between text-xs font-mono shadow-xl">
                <div>
                  <span className="block text-white font-medium tracking-tight text-[13px]">
                    Hitesh Rao M
                  </span>
                  <span className="block text-[11px] text-neutral-400">
                    NCET Bengaluru • Class of '28
                  </span>
                </div>
                <div className="text-right">
                  <span className="inline-flex items-center gap-1 text-[#d4ff4f] font-mono text-[11px] font-medium bg-[#d4ff4f]/10 px-2.5 py-0.5 rounded-full border border-[#d4ff4f]/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4ff4f] animate-pulse" />
                    VERIFIED
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Institutional Partner Logos Bar */}
      <PartnerLogosBar />

      {/* Bottom Bar: Direct Social Anchor Links & Scroll Indicator */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-b border-white/10 pb-2">
        {/* Direct Socials */}
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
          href="#statement"
          className="group flex items-center gap-3 text-xs font-mono text-neutral-400 hover:text-white transition-colors"
          data-cursor="pointer"
        >
          <span className="tracking-widest uppercase">Scroll to Discover</span>
          <div className="w-5 h-8 rounded-full border border-neutral-700 group-hover:border-[#d4ff4f] flex items-start justify-center p-1 transition-colors">
            <div className="w-1 h-2 rounded-full bg-[#d4ff4f] animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
}
