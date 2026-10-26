import React from 'react';
import { getAssetUrl } from '../utils/assetPath';

/**
 * Authentic logos and official brand styling for MNCs and Institutional Partners:
 * - Google (4-Color G and Google Wordmark)
 * - Paytm (One97 Communications official wordmark & brand mark)
 * - MongoDB (Official Leaf emblem)
 * - Deloitte (Official Wordmark with #86BC25 period)
 * - Google Gemini (Official 4-point gradient sparkle)
 * - Cisco (Official 9-bar Golden Gate bridge wave)
 * - Presto Foundation (Official Linux Foundation Presto SQL wave)
 * - HackerRank (Official green geometric H mark)
 * - Nagarjuna College of Engineering & Technology (NCET) Official Institutional Logo
 * - LinkedIn & GitHub
 */

// 0. Nagarjuna College of Engineering & Technology (NCET) Official Logo
export function NCETLogo({ size = 'md', variant = 'badge', className = '' }) {
  const heightClasses = {
    xs: 'h-6',
    sm: 'h-7',
    md: 'h-8 sm:h-9',
    lg: 'h-10 sm:h-12',
    xl: 'h-14 sm:h-16'
  }[size] || 'h-8';

  const logoSrc = getAssetUrl("/images/ncet-logo.png");
  const fallbackSrc = getAssetUrl("/assets/aistudio/image_098a23c4.png");

  const handleImgError = (e) => {
    if (e.currentTarget.src !== fallbackSrc) {
      e.currentTarget.src = fallbackSrc;
    }
  };

  if (variant === 'raw') {
    return (
      <img
        src={logoSrc}
        onError={handleImgError}
        alt="Nagarjuna College of Engineering & Technology (NCET)"
        className={`${heightClasses} w-auto object-contain transition-transform duration-300 group-hover:scale-105 ${className}`}
        loading="eager"
        decoding="sync"
      />
    );
  }

  return (
    <div className={`inline-flex items-center px-2 py-1 rounded-lg bg-white select-none shadow-[0_2px_12px_rgba(0,0,0,0.35)] transition-transform duration-300 group-hover:scale-105 border border-white/40 ${className}`}>
      <img
        src={logoSrc}
        onError={handleImgError}
        alt="Nagarjuna College of Engineering & Technology (NCET)"
        className={`${heightClasses} w-auto object-contain`}
        loading="eager"
        decoding="sync"
      />
    </div>
  );
}

// 0b. Nagarjuna Vidyaniketan Official School Logo
export function NagarjunaVidyaniketanLogo({ size = 'md', variant = 'badge', className = '' }) {
  const heightClasses = {
    xs: 'h-6',
    sm: 'h-7',
    md: 'h-8 sm:h-9',
    lg: 'h-10 sm:h-12',
    xl: 'h-14 sm:h-16'
  }[size] || 'h-8';

  const logoSrc = getAssetUrl("/images/nagarjuna-vidyaniketan-logo.png");

  if (variant === 'raw') {
    return (
      <img
        src={logoSrc}
        alt="Nagarjuna Vidyaniketan"
        className={`${heightClasses} w-auto object-contain transition-transform duration-300 group-hover:scale-105 ${className}`}
        loading="eager"
        decoding="sync"
      />
    );
  }

  return (
    <div className={`inline-flex items-center px-1.5 py-0.5 rounded-lg bg-white select-none shadow-[0_2px_12px_rgba(0,0,0,0.25)] transition-transform duration-300 group-hover:scale-105 border border-white/40 ${className}`}>
      <img
        src={logoSrc}
        alt="Nagarjuna Vidyaniketan"
        className={`${heightClasses} w-auto object-contain`}
        loading="eager"
        decoding="sync"
      />
    </div>
  );
}

// 1. Google 4-Color Official 'G' Mark
export function GoogleLogo({ size = 'md', className = '' }) {
  const dim = {
    xs: 'w-3.5 h-3.5',
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-8 h-8'
  }[size] || 'w-5 h-5';

  return (
    <svg className={`${dim} shrink-0 ${className}`} viewBox="0 0 24 24" fill="none">
      <path
        d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
        fill="#4285F4"
      />
      <path
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
        fill="#34A853"
      />
      <path
        d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
        fill="#FBBC05"
      />
      <path
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
        fill="#EA4335"
      />
    </svg>
  );
}

// Google Full Lockup with Official Typography
export function GoogleWordmark({ className = '' }) {
  return (
    <div className={`inline-flex items-center gap-1.5 ${className}`}>
      <GoogleLogo size="sm" />
      <span className="font-sans font-medium tracking-normal text-white text-sm">
        Google
      </span>
    </div>
  );
}

// 2. Paytm Official Brand Logo (Enhanced from user attachment with background removed)
export function PaytmLogo({ size = 'md', variant = 'badge', className = '' }) {
  const heightClasses = {
    xs: 'h-3.5',
    sm: 'h-4',
    md: 'h-5',
    lg: 'h-6 sm:h-7',
    xl: 'h-8 sm:h-9'
  }[size] || 'h-5';

  if (variant === 'dark') {
    return (
      <div className={`inline-flex items-center select-none ${className}`}>
        <img
          src={getAssetUrl("/assets/aistudio/paytm-dark.png")}
          alt="Paytm Official Logo"
          className={`${heightClasses} w-auto object-contain transition-transform duration-300 group-hover:scale-105`}
          loading="lazy"
          decoding="async"
        />
      </div>
    );
  }

  if (variant === 'transparent') {
    return (
      <div className={`inline-flex items-center select-none ${className}`}>
        <img
          src={getAssetUrl("/assets/aistudio/paytm-transparent.png")}
          alt="Paytm Official Logo"
          className={`${heightClasses} w-auto object-contain transition-transform duration-300 group-hover:scale-105`}
          loading="lazy"
          decoding="async"
        />
      </div>
    );
  }

  // Default "badge": Pristine white pill backdrop that makes the official navy 'pay' and cyan 'tm' contrast sharply on dark surfaces
  return (
    <div className={`inline-flex items-center px-1.5 py-0.5 rounded-md bg-white select-none shadow-[0_2px_8px_rgba(0,0,0,0.4)] transition-transform duration-300 group-hover:scale-105 ${className}`}>
      <img
        src={getAssetUrl("/assets/aistudio/paytm-transparent.png")}
        alt="Paytm Official Logo"
        className={`${heightClasses} w-auto object-contain`}
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}

// 3. MongoDB Official Leaf Logo
export function MongoDBLogo({ size = 'md', className = '' }) {
  const dim = {
    xs: 'w-3.5 h-3.5',
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-8 h-8'
  }[size] || 'w-5 h-5';

  return (
    <svg className={`${dim} shrink-0 ${className}`} viewBox="0 0 24 24" fill="none">
      <defs>
        <linearGradient id="mongoGrad" x1="12" y1="2" x2="12" y2="22" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00ED64" />
          <stop offset="1" stopColor="#00684A" />
        </linearGradient>
      </defs>
      {/* Right Leaf Half */}
      <path
        d="M12.003 2.155c-.24 0-.46.12-.59.32-.47.7-4.85 7.42-4.85 12.35 0 4.14 3.01 7.03 5.44 7.03.24 0 .47-.03.7-.08V2.155z"
        fill="#00684A"
      />
      {/* Left Leaf Half (Bright) */}
      <path
        d="M12.003 2.155c.24 0 .46.12.59.32.47.7 4.85 7.42 4.85 12.35 0 4.14-3.01 7.03-5.44 7.03-.24 0-.47-.03-.7-.08V2.155z"
        fill="url(#mongoGrad)"
      />
      {/* Center Spine */}
      <path
        d="M12.35 21.775c-.12.02-.23.03-.35.03s-.23-.01-.35-.03c-.15-.03-.28-.15-.28-.31V2.85c0-.23.19-.4.41-.36.14.02.26.11.32.24l.25.59v18.455z"
        fill="#023430"
      />
    </svg>
  );
}

// 4. Deloitte Official Corporate Wordmark
export function DeloitteLogo({ size = 'md', className = '' }) {
  const textSize = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl'
  }[size] || 'text-base';

  return (
    <span className={`font-sans font-bold tracking-tight text-white inline-flex items-baseline ${textSize} ${className}`}>
      Deloitte<span className="text-[#86BC25] ml-[1px] leading-none text-[1.2em] font-black">.</span>
    </span>
  );
}

// 5. Google Gemini Official Star Emblem
export function GeminiLogo({ size = 'md', className = '' }) {
  const dim = {
    xs: 'w-3.5 h-3.5',
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-8 h-8'
  }[size] || 'w-5 h-5';

  return (
    <svg className={`${dim} shrink-0 ${className}`} viewBox="0 0 24 24" fill="none">
      <defs>
        <linearGradient id="geminiGrad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4285F4" />
          <stop offset="0.45" stopColor="#9B72CB" />
          <stop offset="0.8" stopColor="#D96570" />
          <stop offset="1" stopColor="#FBBC05" />
        </linearGradient>
      </defs>
      {/* 4-Point Curved Star of Gemini */}
      <path
        d="M12 2C12 7.523 7.523 12 2 12C7.523 12 12 16.477 12 22C12 16.477 16.477 12 22 12C16.477 12 12 7.523 12 2Z"
        fill="url(#geminiGrad)"
      />
    </svg>
  );
}

// 6. Cisco Official 9-Bar Bridge Soundwave
export function CiscoLogo({ size = 'md', className = '' }) {
  const height = {
    xs: 'h-3',
    sm: 'h-3.5',
    md: 'h-4',
    lg: 'h-5',
    xl: 'h-6'
  }[size] || 'h-4';

  return (
    <div className={`inline-flex flex-col items-center select-none ${className}`}>
      <svg className={`${height} w-auto`} viewBox="0 0 64 24" fill="none">
        {/* Cisco 9 soundwave bars representing the Golden Gate bridge */}
        <rect x="2" y="14" width="3.5" height="9" rx="1.75" fill="#049FD9" />
        <rect x="9" y="9" width="3.5" height="14" rx="1.75" fill="#049FD9" />
        <rect x="16" y="5" width="3.5" height="18" rx="1.75" fill="#049FD9" />
        <rect x="23" y="1" width="3.5" height="22" rx="1.75" fill="#049FD9" />
        <rect x="30" y="7" width="3.5" height="16" rx="1.75" fill="#049FD9" />
        <rect x="37" y="1" width="3.5" height="22" rx="1.75" fill="#049FD9" />
        <rect x="44" y="5" width="3.5" height="18" rx="1.75" fill="#049FD9" />
        <rect x="51" y="9" width="3.5" height="14" rx="1.75" fill="#049FD9" />
        <rect x="58" y="14" width="3.5" height="9" rx="1.75" fill="#049FD9" />
      </svg>
    </div>
  );
}

// 7. Presto Foundation (Linux Foundation) Official Blue Wave
export function PrestoLogo({ size = 'md', className = '' }) {
  const dim = {
    xs: 'w-3.5 h-3.5',
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-8 h-8'
  }[size] || 'w-5 h-5';

  return (
    <svg className={`${dim} shrink-0 ${className}`} viewBox="0 0 24 24" fill="none">
      <defs>
        <linearGradient id="prestoGrad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1C88E3" />
          <stop offset="1" stopColor="#00B2FE" />
        </linearGradient>
      </defs>
      <circle cx="12" cy="12" r="10" stroke="url(#prestoGrad)" strokeWidth="2" strokeDasharray="14 4" />
      <path
        d="M7 14.5c2-3.5 5.5-5 9-4.5-2 3.5-5.5 5-9 4.5z"
        fill="url(#prestoGrad)"
      />
      <circle cx="15.5" cy="9.5" r="1.5" fill="#ffffff" />
    </svg>
  );
}

// 8. HackerRank Official Green Hexagon / H Mark
export function HackerRankLogo({ size = 'md', className = '' }) {
  const dim = {
    xs: 'w-3.5 h-3.5',
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-8 h-8'
  }[size] || 'w-5 h-5';

  return (
    <svg className={`${dim} shrink-0 ${className}`} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="5" fill="#1BA94C" />
      <path
        d="M7 6v12h3v-4.5h4V18h3V6h-3v4.5h-4V6H7z"
        fill="#ffffff"
      />
    </svg>
  );
}

// 9. LinkedIn Official Invert Mark
export function LinkedInLogo({ size = 'md', className = '' }) {
  const dim = {
    xs: 'w-3.5 h-3.5',
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-8 h-8'
  }[size] || 'w-5 h-5';

  return (
    <svg className={`${dim} shrink-0 ${className}`} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="4" fill="#0A66C2" />
      <path
        d="M7.05 9.5H4.25V18h2.8v-8.5zm-1.4-4.5c-.9 0-1.6.7-1.6 1.6s.7 1.6 1.6 1.6 1.6-.7 1.6-1.6c0-.9-.7-1.6-1.6-1.6zm13.1 8.85c0-2.6-1.4-3.85-3.3-3.85-1.5 0-2.2.85-2.6 1.45V9.5h-2.8v8.5h2.8v-4.7c0-1.25.25-2.45 1.8-2.45 1.5 0 1.5 1.4 1.5 2.5v4.65h2.8V13.85z"
        fill="#ffffff"
      />
    </svg>
  );
}

// 10. GitHub Official Invertocat Mark
export function GitHubLogo({ size = 'md', className = '' }) {
  const dim = {
    xs: 'w-3.5 h-3.5',
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-8 h-8'
  }[size] || 'w-5 h-5';

  return (
    <svg className={`${dim} shrink-0 fill-current ${className}`} viewBox="0 0 24 24">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

/**
 * Editorial Signature Typographic Name Lockup ("Name Fonty Style")
 * Harmonizes modern geometric structural sans with elegant, fluid Instrument Serif italic.
 */
export function BrandSignatureName({
  size = 'md',
  accentColor = 'lime',
  className = ''
}) {
  const styles = {
    sm: {
      first: 'text-xs tracking-wider font-semibold',
      last: 'text-sm'
    },
    md: {
      first: 'text-sm tracking-wider font-semibold',
      last: 'text-base'
    },
    lg: {
      first: 'text-base sm:text-lg tracking-widest font-bold',
      last: 'text-xl sm:text-2xl'
    },
    xl: {
      first: 'text-2xl sm:text-3xl tracking-widest font-bold',
      last: 'text-3xl sm:text-4xl'
    },
    display: {
      first: 'text-4xl sm:text-6xl md:text-7xl tracking-tighter font-semibold',
      last: 'text-5xl sm:text-7xl md:text-8xl'
    }
  }[size] || {
    first: 'text-sm tracking-wider font-semibold',
    last: 'text-base'
  };

  const accentClass = {
    lime: 'text-[#15803d] dark:text-[#d4ff4f]',
    gold: 'text-[#b45309] dark:text-[#e5c158]',
    white: 'text-black dark:text-white',
    cyan: 'text-[#0284c7] dark:text-[#00baf2]'
  }[accentColor] || 'text-[#15803d] dark:text-[#d4ff4f]';

  return (
    <span className={`inline-flex items-baseline select-none group font-editorial ${className}`}>
      <span className={`font-sans uppercase text-black dark:text-white transition-colors group-hover:opacity-80 font-bold ${styles.first}`}>
        HITESH
      </span>
      <span className={`font-serif italic font-normal ${accentClass} ml-1.5 leading-none transition-all duration-300 group-hover:scale-105 ${styles.last}`}>
        RAO M
      </span>
    </span>
  );
}
