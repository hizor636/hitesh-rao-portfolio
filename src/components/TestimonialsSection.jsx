import React, { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../data/portfolioData';

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => {
    setActiveIndex((current) => (current === 0 ? TESTIMONIALS.length - 1 : current - 1));
  };

  const next = () => {
    setActiveIndex((current) => (current === TESTIMONIALS.length - 1 ? 0 : current + 1));
  };

  const current = TESTIMONIALS[activeIndex];

  return (
    <section className="relative py-28 md:py-36 px-4 md:px-8 max-w-7xl mx-auto z-10 border-b border-white/10">
      {/* Section Header */}
      <div className="flex items-center justify-between pb-12 border-b border-white/10">
        <div className="flex items-center gap-3">
          <span className="font-mono-tech text-xs tracking-widest text-neutral-500 uppercase">
            [06 // CLIENT REPUTATION]
          </span>
          <span className="w-12 h-px bg-white/20" />
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={prev}
            className="p-3 rounded-full border border-white/10 bg-white/[0.02] hover:bg-white/[0.08] text-white transition-colors"
            data-cursor="pointer"
            aria-label="Previous quote"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={next}
            className="p-3 rounded-full border border-white/10 bg-white/[0.02] hover:bg-white/[0.08] text-white transition-colors"
            data-cursor="pointer"
            aria-label="Next quote"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Editorial Luxury Quote */}
      <div className="mt-16 max-w-4xl mx-auto text-center flex flex-col items-center">
        <Quote className="w-10 h-10 text-neutral-600 mb-8 opacity-40" />

        <blockquote className="text-[clamp(1.25rem,2.5vw,1.8rem)] font-sans font-normal leading-[1.6] text-neutral-100 max-w-[60ch]">
          "{current.quote}"
        </blockquote>

        <div className="mt-10 flex flex-col items-center">
          <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center font-mono-tech text-xs font-bold text-white bg-white/5 mb-3">
            {current.avatarInitials}
          </div>
          <span className="text-base font-semibold text-white tracking-wide">
            {current.author}
          </span>
          <span className="text-xs font-mono-tech text-neutral-400 mt-1 uppercase tracking-widest">
            {current.title} • {current.company}
          </span>
        </div>

        {/* Carousel indicators */}
        <div className="mt-12 flex items-center gap-2">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === activeIndex ? 'w-8 bg-white' : 'w-2 bg-neutral-700'
              }`}
              data-cursor="pointer"
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
