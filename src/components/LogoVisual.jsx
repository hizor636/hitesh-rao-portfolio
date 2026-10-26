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

/* Institutional Partner Logos Banner */
export function PartnerLogosBar() {
  const partners = [
    {
      name: 'Google',
      role: 'Student Ambassador 2026',
      badge: '125K+ APPLICANTS',
      svg: (
        <svg className="h-6 w-auto fill-current" viewBox="0 0 24 24">
          <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
        </svg>
      )
    },
    {
      name: 'Paytm',
      role: 'Hackathon Core Ops',
      badge: 'ONE97 COMM',
      svg: (
        <span className="font-mono-tech text-base font-black tracking-tighter text-white">
          Pay<span className="text-[#00baf2] group-hover:text-[#d4ff4f] transition-colors">tm</span>
        </span>
      )
    },
    {
      name: 'MongoDB',
      role: 'Namma MUG Partner',
      badge: '800+ ATTENDEES',
      svg: (
        <svg className="h-6 w-auto fill-current" viewBox="0 0 24 24">
          <path d="M17.193 9.555c-1.264-5.18-4.434-7.55-4.9-7.893-.162-.12-.395-.12-.557 0-.466.343-3.636 2.713-4.9 7.893-1.42 5.83-.07 10.45 4.9 12.87.162.08.395.08.557 0 4.97-2.42 6.32-7.04 4.9-12.87z"/>
        </svg>
      )
    },
    {
      name: 'Deloitte.',
      role: 'Analytics Verified',
      badge: 'BUSINESS INTEL',
      svg: (
        <span className="font-sans text-base font-bold tracking-tight text-white">
          Deloitte<span className="text-[#86bc25] group-hover:text-[#d4ff4f] text-lg leading-none">.</span>
        </span>
      )
    },
    {
      name: 'Google Gemini',
      role: 'Certified Student',
      badge: 'GOOGLE FOR EDU',
      svg: (
        <span className="font-sans text-base font-semibold tracking-wide text-white">
          ✦ Gemini
        </span>
      )
    },
    {
      name: 'HackerRank',
      role: 'SQL Intermediate',
      badge: 'LEADERBOARD',
      svg: (
        <span className="font-mono-tech text-base font-bold text-white tracking-widest">
          [H<span className="text-[#00ea64] group-hover:text-[#d4ff4f]">R</span>]
        </span>
      )
    }
  ];

  return (
    <div className="w-full pt-10 pb-6 border-y border-white/10">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
        <span className="font-mono-tech text-[10px] tracking-[0.25em] text-neutral-500 uppercase">
          [COMMUNITY & INSTITUTIONAL ECOSYSTEM]
        </span>
        <span className="font-mono-tech text-[10px] tracking-widest text-[#d4ff4f] uppercase flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#d4ff4f] animate-pulse" />
          ACTIVE ROLES & CREDENTIALS
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {partners.map((p) => (
          <div
            key={p.name}
            className="group p-4 rounded-xl border border-white/5 bg-white/[0.015] hover:border-[#d4ff4f]/40 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between"
          >
            <div className="flex items-center justify-between text-neutral-400 group-hover:text-white transition-colors h-8">
              {p.svg}
              <span className="text-[9px] font-mono-tech text-neutral-600 group-hover:text-[#d4ff4f] transition-colors">
                {p.badge}
              </span>
            </div>
            <div className="mt-3">
              <span className="block text-xs font-semibold text-white tracking-tight">{p.name}</span>
              <span className="block text-[10px] font-mono-tech text-neutral-400">{p.role}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
