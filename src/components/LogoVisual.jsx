import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
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

export default function LogoVisual({ size = 'md', interactive = true, className = '' }) {
  const { isDark } = useTheme();

  const sizeMap = {
    xs: { box: 'w-7 h-7 min-w-[28px] min-h-[28px]', text: 'text-[11px]', inner: 'w-5 h-5' },
    sm: { box: 'w-9 h-9 min-w-[36px] min-h-[36px]', text: 'text-xs', inner: 'w-7 h-7' },
    md: { box: 'w-11 h-11 min-w-[44px] min-h-[44px]', text: 'text-sm', inner: 'w-8 h-8' },
    lg: { box: 'w-16 h-16 min-w-[64px] min-h-[64px] md:w-20 md:h-20', text: 'text-xl', inner: 'w-12 h-12 md:w-15 md:h-15' },
    xl: { box: 'w-24 h-24 min-w-[96px] min-h-[96px] md:w-28 md:h-28', text: 'text-3xl', inner: 'w-18 h-18 md:w-22 md:h-22' }
  };

  const currentSize = sizeMap[size] || sizeMap.md;

  return (
    <div
      className={`relative inline-flex items-center justify-center select-none group shrink-0 ${currentSize.box} ${className}`}
      data-cursor={interactive ? 'pointer' : undefined}
      title="Hitesh Rao M — Portfolio Logo"
    >
      {/* Outer ambient glow — contained within bounds */}
      <div
        className={`absolute inset-0 rounded-xl blur-xs transition-all duration-500 pointer-events-none ${
          isDark
            ? 'bg-[#d4ff4f]/20 group-hover:bg-[#d4ff4f]/35'
            : 'bg-emerald-500/15 group-hover:bg-emerald-500/25'
        }`}
      />

      {/* Outer Orbiting Precision Ring — safely contained inside the box */}
      <svg
        className={`absolute inset-0 w-full h-full transition-colors duration-500 animate-[spin_20s_linear_infinite] pointer-events-none ${
          isDark ? 'text-[#d4ff4f]/60' : 'text-emerald-600/50'
        }`}
        viewBox="0 0 100 100"
      >
        <circle
          cx="50"
          cy="50"
          r="44"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeDasharray="4 6"
        />
        <circle cx="50" cy="6" r="3.5" fill={isDark ? '#d4ff4f' : '#16a34a'} />
        <circle cx="50" cy="94" r="2" fill="currentColor" opacity="0.6" />
        <circle cx="6" cy="50" r="2" fill="currentColor" opacity="0.6" />
        <circle cx="94" cy="50" r="2" fill="currentColor" opacity="0.6" />
      </svg>

      {/* Main High-Contrast Monogram Shield */}
      <div
        className={`relative ${currentSize.inner} rounded-lg border flex items-center justify-center transition-all duration-300 shadow-md overflow-hidden backdrop-blur-md ${
          isDark
            ? 'bg-[#0a0a0d] border-[#d4ff4f]/40 group-hover:border-[#d4ff4f] group-hover:shadow-[0_0_15px_rgba(212,255,79,0.3)]'
            : 'bg-white border-neutral-300 group-hover:border-emerald-600 group-hover:shadow-[0_0_12px_rgba(22,163,74,0.2)]'
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
export function PartnerLogosBar() {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const offset = direction === 'left' ? -260 : 260;
      scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
      setTimeout(checkScroll, 320);
    }
  };

  const partners = [
    {
      name: 'Google',
      role: 'Student Ambassador 2026',
      badge: '125K+ POOL',
      logo: <GoogleLogo size="md" className="h-5 w-5 object-contain" />,
      brandClass: 'font-sans font-medium tracking-tight text-white dark:text-white'
    },
    {
      name: 'NCET Bengaluru',
      role: 'BCA (CGPA: 7.50)',
      badge: 'OFFICIAL LOGO',
      logo: <NCETLogo size="xs" variant="badge" className="py-0.5 px-1.5" />,
      brandClass: 'font-sans font-bold text-white dark:text-white'
    },
    {
      name: 'Paytm (One97)',
      role: 'Marketing Intern (Social & PR)',
      badge: 'TRAINEE T5113',
      logo: <PaytmLogo size="xs" variant="badge" className="py-0.5 px-1.5" />,
      brandClass: 'font-sans font-bold text-white dark:text-white'
    },
    {
      name: 'MongoDB',
      role: 'Namma MUG Partner',
      badge: '800+ ATTENDEES',
      logo: <MongoDBLogo size="md" className="h-5 w-5 object-contain" />,
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
      logo: <GeminiLogo size="md" className="h-5 w-5 object-contain" />,
      brandClass: 'font-sans font-medium text-white dark:text-white'
    },
    {
      name: 'Cisco',
      role: 'Python Essentials 1',
      badge: 'PROGRAMMING',
      logo: <CiscoLogo size="sm" className="h-3.5 w-auto object-contain" />,
      brandClass: 'font-sans font-semibold text-white dark:text-white'
    },
    {
      name: 'Presto Foundation',
      role: 'Distributed SQL Summit',
      badge: 'ORGANIZER TEAM',
      logo: <PrestoLogo size="md" className="h-5 w-5 object-contain" />,
      brandClass: 'font-sans font-medium text-white dark:text-white'
    },
    {
      name: 'HackerRank',
      role: 'SQL Intermediate',
      badge: '70+ PROBLEMS',
      logo: <HackerRankLogo size="md" className="h-5 w-5 object-contain" />,
      brandClass: 'font-mono text-white dark:text-white'
    }
  ];

  return (
    <div className="w-full pt-10 pb-6 border-y border-white/10">
      {/* Header with Title and Scroll Controls */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-5">
        <span className="font-mono text-[11px] tracking-[0.2em] text-neutral-400 uppercase flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#d4ff4f] animate-pulse shrink-0" />
          <span>[OFFICIAL MNC PARTNERS &amp; VERIFIED INSTITUTIONAL CREDENTIALS]</span>
        </span>

        <div className="flex items-center gap-4">
          <span className="font-mono text-[11px] tracking-widest text-[#d4ff4f] uppercase flex items-center gap-1.5 shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4ff4f]" />
            ACTIVE ROLES · HIGH-IMPACT COMMUNITY
          </span>

          {/* Carousel Navigation Buttons */}
          <div className="hidden sm:flex items-center gap-1.5">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`p-1.5 rounded-lg border border-white/10 bg-white/[0.03] transition-all duration-200 ${
                canScrollLeft
                  ? 'hover:bg-white/10 hover:border-[#d4ff4f]/40 text-neutral-300 hover:text-white cursor-pointer active:scale-95'
                  : 'opacity-30 cursor-not-allowed text-neutral-600'
              }`}
              title="Scroll left"
              aria-label="Scroll credentials left"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`p-1.5 rounded-lg border border-white/10 bg-white/[0.03] transition-all duration-200 ${
                canScrollRight
                  ? 'hover:bg-white/10 hover:border-[#d4ff4f]/40 text-neutral-300 hover:text-white cursor-pointer active:scale-95'
                  : 'opacity-30 cursor-not-allowed text-neutral-600'
              }`}
              title="Scroll right"
              aria-label="Scroll credentials right"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Refactored Credential Carousel Cards */}
      <div
        ref={scrollRef}
        onScroll={checkScroll}
        className="flex items-stretch gap-3 sm:gap-3.5 overflow-x-auto no-scrollbar scroll-smooth py-1 snap-x snap-mandatory"
        tabIndex={0}
        role="region"
        aria-label="Partner credentials carousel"
      >
        {partners.map((p) => (
          <div
            key={p.name}
            className="shrink-0 snap-start min-w-[175px] sm:min-w-[190px] md:min-w-[205px] flex-1 max-w-[240px] p-3.5 sm:p-4 rounded-xl border border-white/10 bg-white/[0.02] hover:border-[#d4ff4f]/50 hover:bg-white/[0.05] transition-all duration-300 flex flex-col justify-between group shadow-xs select-none"
          >
            {/* Top Row: Fixed height Logo Container + Status/Metric Badge */}
            <div className="flex items-center justify-between gap-2 h-8 mb-3">
              <div className="h-8 flex items-center justify-start shrink-0 max-w-[55%]">
                <div className="transition-transform duration-300 group-hover:scale-105 flex items-center">
                  {p.logo}
                </div>
              </div>
              <span className="text-[9px] font-mono tracking-tight px-1.5 py-0.5 rounded-md bg-white/[0.04] border border-white/10 text-neutral-400 group-hover:text-[#d4ff4f] group-hover:border-[#d4ff4f]/30 transition-colors whitespace-nowrap shrink-0">
                {p.badge}
              </span>
            </div>

            {/* Bottom Content: Name & Natural Wrapping 2-line Role (No truncate cutoffs) */}
            <div className="mt-auto pt-1">
              <span className={`block text-xs md:text-[13px] font-semibold leading-snug ${p.brandClass}`}>
                {p.name}
              </span>
              <span className="block text-[11px] font-mono text-neutral-400 leading-snug line-clamp-2 mt-1">
                {p.role}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

