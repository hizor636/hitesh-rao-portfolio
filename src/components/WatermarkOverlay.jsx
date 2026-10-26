import React from 'react';
import { useContent } from '../context/ContentContext';

export default function WatermarkOverlay({ customText, className = '' }) {
  const { watermarkSettings } = useContent();

  if (!watermarkSettings || !watermarkSettings.enabled) {
    return null;
  }

  const text = customText || watermarkSettings.text || '© Hitesh Rao M';
  const opacity = watermarkSettings.opacity !== undefined ? watermarkSettings.opacity : 0.35;
  const position = watermarkSettings.position || 'diagonal';

  if (position === 'bottom-right') {
    return (
      <div
        className={`absolute bottom-3 right-3 z-20 pointer-events-none select-none font-mono text-[11px] uppercase tracking-wider text-white px-2 py-1 rounded bg-black/50 backdrop-blur-xs border border-white/10 ${className}`}
        style={{ opacity }}
      >
        {text}
      </div>
    );
  }

  if (position === 'center') {
    return (
      <div
        className={`absolute inset-0 z-20 pointer-events-none select-none flex items-center justify-center ${className}`}
      >
        <span
          className="font-mono text-sm sm:text-base font-bold uppercase tracking-widest text-white px-4 py-2 rounded-xl bg-black/40 backdrop-blur-xs border border-white/15"
          style={{ opacity }}
        >
          {text}
        </span>
      </div>
    );
  }

  // Default: 'diagonal' repeated watermark pattern (maximum anti-screenshot / anti-theft protection)
  return (
    <div
      className={`absolute inset-0 z-20 pointer-events-none select-none overflow-hidden flex items-center justify-center ${className}`}
      style={{ opacity }}
    >
      <div className="w-[180%] h-[180%] flex flex-col justify-around rotate-[-25deg] transform scale-110">
        {[...Array(6)].map((_, rIdx) => (
          <div key={rIdx} className="flex justify-around whitespace-nowrap gap-8 text-neutral-100 font-mono text-xs uppercase tracking-widest">
            {[...Array(5)].map((_, cIdx) => (
              <span key={cIdx} className="drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                {text}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
