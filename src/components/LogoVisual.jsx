import React from 'react';
import { useTheme } from '../context/ThemeContext';

export default function LogoVisual({ size = 'md', interactive = true, className = '' }) {
  const { isDark } = useTheme();

  const sizeMap = {
    xs: { box: 'w-7 h-7 min-w-[28px] min-h-[28px]', text: 'text-[11px]', inner: 'w-6 h-6' },
    sm: { box: 'w-9 h-9 min-w-[36px] min-h-[36px]', text: 'text-xs', inner: 'w-8 h-8' },
    md: { box: 'w-11 h-11 min-w-[44px] min-h-[44px]', text: 'text-sm', inner: 'w-10 h-10' },
    lg: { box: 'w-16 h-16 min-w-[64px] min-h-[64px] md:w-20 md:h-20', text: 'text-xl', inner: 'w-14 h-14 md:w-18 md:h-18' },
    xl: { box: 'w-24 h-24 min-w-[96px] min-h-[96px] md:w-28 md:h-28', text: 'text-3xl', inner: 'w-20 h-20 md:w-24 md:h-24' }
  };

  const currentSize = sizeMap[size] || sizeMap.md;

  return (
    <div
      className={`relative inline-flex items-center justify-center select-none group shrink-0 ${currentSize.box} ${className}`}
      data-cursor={interactive ? 'pointer' : undefined}
      title="Hitesh Rao M — Portfolio Logo"
    >
      {/* Outer ambient glow */}
      <div
        className={`absolute inset-0 rounded-2xl blur-md transition-all duration-500 pointer-events-none ${
          isDark
            ? 'bg-[#d4ff4f]/25 group-hover:bg-[#d4ff4f]/45 group-hover:blur-lg'
            : 'bg-emerald-500/20 group-hover:bg-emerald-500/35'
        }`}
      />

      {/* Outer Orbiting Precision Ring */}
      <svg
        className={`absolute -inset-1 w-full h-full scale-125 transition-colors duration-500 animate-[spin_20s_linear_infinite] pointer-events-none ${
          isDark ? 'text-[#d4ff4f]/60' : 'text-emerald-600/50'
        }`}
        viewBox="0 0 100 100"
      >
        <circle
          cx="50"
          cy="50"
          r="46"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="4 6"
        />
        <circle cx="50" cy="4" r="3" fill={isDark ? '#d4ff4f' : '#16a34a'} />
        <circle cx="50" cy="96" r="2" fill="currentColor" />
        <circle cx="4" cy="50" r="2" fill="currentColor" />
        <circle cx="96" cy="50" r="2" fill="currentColor" />
      </svg>

      {/* Main High-Contrast Monogram Shield */}
      <div
        className={`relative ${currentSize.inner} rounded-xl border flex items-center justify-center transition-all duration-300 shadow-xl overflow-hidden backdrop-blur-md ${
          isDark
            ? 'bg-[#0a0a0d] border-[#d4ff4f]/40 group-hover:border-[#d4ff4f] group-hover:shadow-[0_0_20px_rgba(212,255,79,0.35)]'
            : 'bg-white border-neutral-300 group-hover:border-emerald-600 group-hover:shadow-[0_0_15px_rgba(22,163,74,0.25)]'
        }`}
      >
        {/* Subtle grid lines background */}
        <div
          className={`absolute inset-0 opacity-25 bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] bg-[size:5px_5px] ${
            isDark ? 'text-white' : 'text-neutral-900'
          }`}
        />

        {/* Clean, Bold, 100% Legible Geometric H Monogram */}
        <svg
          className="relative z-10 w-[65%] h-[65%] transition-transform duration-300 group-hover:scale-110"
          viewBox="0 0 40 40"
          fill="none"
        >
          {/* Left Vertical Pillar */}
          <rect
            x="7"
            y="7"
            width="5"
            height="26"
            rx="2.5"
            fill={isDark ? '#ffffff' : '#0f172a'}
          />

          {/* Right Vertical Pillar */}
          <rect
            x="28"
            y="7"
            width="5"
            height="26"
            rx="2.5"
            fill={isDark ? '#ffffff' : '#0f172a'}
          />

          {/* Vibrant Data Bridge Crossbar */}
          <rect
            x="10"
            y="17.5"
            width="20"
            height="5"
            rx="2.5"
            fill={isDark ? '#d4ff4f' : '#16a34a'}
          />

          {/* Core Pulse Pip */}
          <circle
            cx="20"
            cy="20"
            r="3"
            fill={isDark ? '#080808' : '#ffffff'}
          />
          <circle
            cx="20"
            cy="20"
            r="1.8"
            fill={isDark ? '#d4ff4f' : '#16a34a'}
          />
        </svg>

        {/* Diagonal Gloss Highlight */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />
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
  HackerRankLogo,
  NCETLogo
} from './CompanyLogos';

export function PartnerLogosBar() {
  const partners = [
    {
      name: 'Google',
      role: 'Student Ambassador 2026',
      badge: '125K+ POOL',
      logo: <GoogleLogo size="md" />,
      brandClass: 'font-sans font-medium tracking-tight text-white dark:text-white'
    },
    {
      name: 'NCET Bengaluru',
      role: 'BCA (CGPA: 7.50)',
      badge: 'OFFICIAL LOGO',
      logo: <NCETLogo size="md" />,
      brandClass: 'font-sans font-bold text-white dark:text-white'
    },
    {
      name: 'Paytm (One97)',
      role: 'Marketing Intern (Social & PR)',
      badge: 'TRAINEE T5113',
      logo: <PaytmLogo size="md" />,
      brandClass: 'font-sans font-bold text-white dark:text-white'
    },
    {
      name: 'MongoDB',
      role: 'Namma MUG Partner',
      badge: '800+ ATTENDEES',
      logo: <MongoDBLogo size="md" />,
      brandClass: 'font-sans font-semibold text-white dark:text-white'
    },
    {
      name: 'Deloitte Australia',
      role: 'Analytics Simulation',
      badge: 'FORAGE VERIFIED',
      logo: <DeloitteLogo size="sm" />,
      brandClass: 'font-sans font-bold text-white dark:text-white'
    },
    {
      name: 'Google Gemini',
      role: 'Certified Student',
      badge: 'AI CREDENTIAL',
      logo: <GeminiLogo size="md" />,
      brandClass: 'font-sans font-medium text-white dark:text-white'
    },
    {
      name: 'Cisco',
      role: 'Python Essentials 1',
      badge: 'PROGRAMMING',
      logo: <CiscoLogo size="sm" />,
      brandClass: 'font-sans font-semibold text-white dark:text-white'
    },
    {
      name: 'Presto Foundation',
      role: 'Distributed SQL Summit',
      badge: 'ORGANIZER TEAM',
      logo: <PrestoLogo size="md" />,
      brandClass: 'font-sans font-medium text-white dark:text-white'
    },
    {
      name: 'HackerRank',
      role: 'SQL Intermediate',
      badge: '70+ PROBLEMS',
      logo: <HackerRankLogo size="md" />,
      brandClass: 'font-mono text-white dark:text-white'
    }
  ];

  return (
    <div className="w-full pt-10 pb-6 border-y border-white/10">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
        <span className="font-mono text-[11px] tracking-[0.2em] text-neutral-400 uppercase flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#d4ff4f] animate-pulse" />
          [OFFICIAL MNC PARTNERS &amp; VERIFIED INSTITUTIONAL CREDENTIALS]
        </span>
        <span className="font-mono text-[11px] tracking-widest text-[#d4ff4f] uppercase flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#d4ff4f]" />
          ACTIVE ROLES · HIGH-IMPACT COMMUNITY
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-9 gap-3">
        {partners.map((p) => (
          <div
            key={p.name}
            className="group p-3.5 rounded-xl border border-white/10 bg-white/[0.02] hover:border-[#d4ff4f]/50 hover:bg-white/[0.05] transition-all duration-300 flex flex-col justify-between"
          >
            <div className="flex items-center justify-between h-9 mb-2">
              <div className="transition-transform duration-300 group-hover:scale-105">
                {p.logo}
              </div>
              <span className="text-[8px] font-mono text-neutral-400 group-hover:text-[#d4ff4f] transition-colors tracking-tight">
                {p.badge}
              </span>
            </div>
            <div className="mt-2">
              <span className={`block text-xs font-semibold ${p.brandClass}`}>{p.name}</span>
              <span className="block text-[10px] font-mono text-neutral-400 truncate">{p.role}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
