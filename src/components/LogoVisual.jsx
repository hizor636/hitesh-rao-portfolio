import React from 'react';

export default function LogoVisual({ size = 'md', interactive = true }) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-20 h-20 md:w-24 md:h-24',
    xl: 'w-32 h-32 md:w-36 md:h-36'
  }[size] || 'w-10 h-10';

  return (
    <div
      className={`relative group inline-flex items-center justify-center select-none ${sizeClasses}`}
      data-cursor={interactive ? 'pointer' : undefined}
    >
      {/* Outer ambient glow */}
      <div className="absolute inset-0 rounded-full bg-[#d4ff4f]/10 blur-md group-hover:bg-[#d4ff4f]/25 transition-all duration-500" />

      {/* Rotating Outer Astrolabe / Data Compass Ring */}
      <svg
        className="absolute inset-0 w-full h-full text-white/30 group-hover:text-[#d4ff4f]/80 transition-colors duration-500 animate-[spin_24s_linear_infinite]"
        viewBox="0 0 100 100"
      >
        <circle
          cx="50"
          cy="50"
          r="47"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="2 4"
        />
        <circle cx="50" cy="3" r="2" fill="#d4ff4f" />
        <circle cx="97" cy="50" r="1.5" fill="currentColor" />
        <circle cx="50" cy="97" r="1.5" fill="currentColor" />
        <circle cx="3" cy="50" r="1.5" fill="currentColor" />
      </svg>

      {/* Inner Precision Hexagon / Diamond Shield */}
      <div className="relative w-[82%] h-[82%] rounded-xl bg-[#0e0e12] border border-white/20 group-hover:border-[#d4ff4f]/70 flex items-center justify-center transition-all duration-500 shadow-xl overflow-hidden backdrop-blur-md">
        {/* Subtle grid lines background inside badge */}
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:6px_6px]" />

        {/* Monogram Monolith SVG: Interlocking H + Data Pulse */}
        <svg
          className="w-[68%] h-[68%] transition-transform duration-500 group-hover:scale-105"
          viewBox="0 0 60 60"
          fill="none"
        >
          {/* Left Pillar */}
          <line x1="14" y1="12" x2="14" y2="48" stroke="#ffffff" strokeWidth="4.5" strokeLinecap="round" />
          
          {/* Right Pillar */}
          <line x1="46" y1="12" x2="46" y2="48" stroke="#ffffff" strokeWidth="4.5" strokeLinecap="round" />
          
          {/* Crossbar with Electric Lime Data Bridge */}
          <line x1="14" y1="30" x2="46" y2="30" stroke="#d4ff4f" strokeWidth="3.5" strokeLinecap="round" />

          {/* Central Data Matrix Dot */}
          <circle cx="30" cy="30" r="4.5" fill="#d4ff4f" className="group-hover:animate-ping opacity-90" />
          <circle cx="30" cy="30" r="2.5" fill="#080808" />

          {/* Precision Corner Ticks */}
          <line x1="8" y1="12" x2="14" y2="12" stroke="#d4ff4f" strokeWidth="1.5" />
          <line x1="46" y1="48" x2="52" y2="48" stroke="#d4ff4f" strokeWidth="1.5" />
        </svg>

        {/* Glass reflection gradient */}
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
      </div>
    </div>
  );
}

/* Institutional Partner Logos Banner featuring authentic MNC brand marks */
import {
  GoogleLogo,
  PaytmLogo,
  MongoDBLogo,
  DeloitteLogo,
  GeminiLogo,
  CiscoLogo,
  PrestoLogo,
  HackerRankLogo
} from './CompanyLogos';

export function PartnerLogosBar() {
  const partners = [
    {
      name: 'Google',
      role: 'Student Ambassador 2026',
      badge: '125K+ APPLICANTS',
      logo: <GoogleLogo size="md" />,
      brandClass: 'font-sans font-medium tracking-tight text-white'
    },
    {
      name: 'Paytm',
      role: 'Hackathon Core Ops',
      badge: 'ONE97 COMM',
      logo: <PaytmLogo size="md" />,
      brandClass: 'font-sans font-bold text-white'
    },
    {
      name: 'MongoDB',
      role: 'Namma MUG Partner',
      badge: '800+ ATTENDEES',
      logo: <MongoDBLogo size="md" />,
      brandClass: 'font-sans font-semibold text-white'
    },
    {
      name: 'Deloitte.',
      role: 'Analytics Simulation',
      badge: 'BUSINESS INTEL',
      logo: <DeloitteLogo size="sm" />,
      brandClass: 'font-sans font-bold text-white'
    },
    {
      name: 'Google Gemini',
      role: 'Certified Student',
      badge: 'GOOGLE FOR EDU',
      logo: <GeminiLogo size="md" />,
      brandClass: 'font-sans font-medium text-white'
    },
    {
      name: 'Cisco',
      role: 'Python Essentials 1',
      badge: 'PROGRAMMING',
      logo: <CiscoLogo size="sm" />,
      brandClass: 'font-sans font-semibold text-white'
    },
    {
      name: 'Presto Foundation',
      role: 'Distributed SQL Summit',
      badge: 'LINUX FOUNDATION',
      logo: <PrestoLogo size="md" />,
      brandClass: 'font-sans font-medium text-white'
    },
    {
      name: 'HackerRank',
      role: 'SQL Intermediate',
      badge: 'VERIFIED SKILL',
      logo: <HackerRankLogo size="md" />,
      brandClass: 'font-mono text-white'
    }
  ];

  return (
    <div className="w-full pt-10 pb-6 border-y border-white/10">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
        <span className="font-mono-tech text-[10px] tracking-[0.25em] text-neutral-400 uppercase flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#d4ff4f]" />
          [OFFICIAL MNC PARTNERS &amp; VERIFIED INSTITUTIONAL CREDENTIALS]
        </span>
        <span className="font-mono-tech text-[10px] tracking-widest text-[#d4ff4f] uppercase flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#d4ff4f] animate-pulse" />
          ACTIVE ROLES · NATIONAL SELECTIONS
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
        {partners.map((p) => (
          <div
            key={p.name}
            className="group p-3.5 rounded-xl border border-white/10 bg-white/[0.02] hover:border-[#d4ff4f]/50 hover:bg-white/[0.05] transition-all duration-300 flex flex-col justify-between"
          >
            <div className="flex items-center justify-between h-7 mb-2">
              <div className="transition-transform duration-300 group-hover:scale-105">
                {p.logo}
              </div>
              <span className="text-[8px] font-mono-tech text-neutral-500 group-hover:text-[#d4ff4f] transition-colors tracking-tight">
                {p.badge}
              </span>
            </div>
            <div className="mt-2">
              <span className={`block text-xs text-white ${p.brandClass}`}>{p.name}</span>
              <span className="block text-[10px] font-mono-tech text-neutral-400 truncate">{p.role}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
