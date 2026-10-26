import React from 'react';
import { FOCUS_AREAS } from '../data/portfolioData';

export default function Capabilities() {
  return (
    <section id="capabilities" className="relative px-5 md:px-10 mt-28 max-w-7xl mx-auto z-10 border-b border-[rgba(236,235,230,0.14)] pb-24">
      {/* Eyebrow Label */}
      <p className="font-mono text-xs uppercase tracking-widest text-[rgba(236,235,230,0.5)] mb-3">
        (My areas of focus)
      </p>

      {/* Main Heading */}
      <h2 className="text-4xl sm:text-5xl md:text-7xl tracking-tighter font-medium text-white mb-12">
        Key skills &amp; <span className="font-serif italic font-normal text-[#d4ff4f]">interests</span>
      </h2>

      {/* 3 Columns Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {FOCUS_AREAS.map((col) => (
          <div key={col.title}>
            <p className="font-mono text-xs uppercase tracking-wider text-[rgba(236,235,230,0.5)] mb-4">
              {col.title}
            </p>
            <ul className="folio-li text-lg md:text-xl text-neutral-200">
              {col.items.map((item) => (
                <li key={item} data-cursor="pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
