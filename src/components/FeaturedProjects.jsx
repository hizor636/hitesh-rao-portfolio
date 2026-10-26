import React, { useState, useEffect } from 'react';
import { ArrowUpRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { DEEP_CASE_STUDIES, SUPPORTING_CREDENTIALS } from '../data/portfolioData';

export default function FeaturedProjects() {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeModalProject, setActiveModalProject] = useState(null);
  const [isFinePointer, setIsFinePointer] = useState(true);

  // Check pointer precision and bind mousemove for cursor preview
  useEffect(() => {
    const media = window.matchMedia('(pointer: fine)');
    setIsFinePointer(media.matches);

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Escape key handler for modal dialog
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveModalProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="work" className="relative px-5 md:px-10 mt-28 max-w-7xl mx-auto z-10 border-b border-[rgba(236,235,230,0.14)] pb-24">
      {/* Section Header */}
      <div className="rv flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-4 border-b border-[rgba(236,235,230,0.1)]">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-[rgba(236,235,230,0.5)] mb-2">
            (Selected Work · 4 Deep Case Studies)
          </p>
          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-white">
            Real work, honest outcomes.
          </h2>
        </div>
        <p className="font-mono text-xs text-[rgba(236,235,230,0.5)] max-w-xs">
          Click any case study to read the opportunity, real challenges, lessons, and verified proof.
        </p>
      </div>

      {/* Folio Interactive Rows List */}
      <div className="rv-stagger border-b border-[rgba(236,235,230,0.14)]">
        {DEEP_CASE_STUDIES.map((project) => (
          <button
            key={project.id}
            className="folio-row group focus:outline-hidden"
            onClick={() => setActiveModalProject(project)}
            onMouseEnter={() => isFinePointer && setHoveredProject(project)}
            onMouseLeave={() => isFinePointer && setHoveredProject(null)}
            aria-label={`Open ${project.title} case study`}
            data-cursor="pointer"
          >
            {/* Index: 00-1 */}
            <span className="font-mono text-xs text-[rgba(236,235,230,0.5)] group-hover:text-[#d4ff4f] transition-colors">
              {project.index}
            </span>

            {/* Title & Role */}
            <div className="text-left">
              <span className="text-2xl sm:text-3xl md:text-4xl tracking-tight font-medium text-white group-hover:text-[#d4ff4f] transition-colors block">
                {project.title}
              </span>
              <span className="text-xs sm:text-sm text-[rgba(236,235,230,0.6)] font-mono mt-1 block">
                {project.role} · {project.dates}
              </span>
            </div>

            {/* Discipline & Proof Chip */}
            <div className="hidden sm:flex flex-col items-end gap-1 text-right">
              <span className="font-mono text-xs text-[rgba(236,235,230,0.5)]">
                {project.discipline}
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-mono text-[#d4ff4f] bg-[#d4ff4f]/10 px-2 py-0.5 rounded-full border border-[#d4ff4f]/20">
                <CheckCircle2 className="w-3 h-3" />
                <span>Case study ↗</span>
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Floating Preview Card (#folio-pv) following cursor smoothly on desktop */}
      {isFinePointer && (
        <div
          id="folio-pv"
          className={`${hoveredProject ? 'on' : ''}`}
          style={{
            transform: `translate(${Math.min(mousePos.x + 24, (typeof window !== 'undefined' ? window.innerWidth : 1200) - 310)}px, ${Math.max(80, mousePos.y - 90)}px)`
          }}
          aria-hidden="true"
        >
          {hoveredProject && (
            <div
              className="folio-cover text-white"
              style={{
                background: `linear-gradient(135deg, hsl(${hoveredProject.hue} 70% 24%), hsl(${hoveredProject.hue + 40} 80% 7%))`
              }}
            >
              <span className="font-mono text-[11px] tracking-wider uppercase text-[rgba(236,235,230,0.75)]">
                {hoveredProject.index} · {hoveredProject.discipline}
              </span>
              <div className="mt-8">
                <p className="text-3xl md:text-4xl font-semibold tracking-tight text-white leading-none">
                  {hoveredProject.stat[0]}
                </p>
                <p className="font-mono text-[11px] text-[rgba(236,235,230,0.6)] mt-2 uppercase tracking-wider">
                  {hoveredProject.stat[1]}
                </p>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Supporting Credentials & Background Track Record */}
      <div className="mt-16 pt-8">
        <p className="rv font-mono text-xs uppercase tracking-widest text-[rgba(236,235,230,0.5)] mb-4">
          (Supporting Credentials &amp; Practice)
        </p>
        <div className="rv-stagger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SUPPORTING_CREDENTIALS.map((item, idx) => (
            <div
              key={idx}
              className="interactive-card p-5 rounded-xl border border-[rgba(236,235,230,0.1)] bg-white/[0.015] hover:bg-white/[0.03] transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[rgba(236,235,230,0.5)] mb-2">
                  <span className="text-[#d4ff4f]">{item.tag}</span>
                  <span>{item.dates}</span>
                </div>
                <h3 className="text-base font-medium text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-[rgba(236,235,230,0.7)] leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <a
                href={item.proofLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 pt-3 border-t border-white/5 inline-flex items-center gap-1 font-mono text-[11px] text-neutral-400 hover:text-[#d4ff4f] transition-colors"
                data-cursor="pointer"
              >
                <span>Proof verification ↗</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Honest Case Study Modal Dialog */}
      {activeModalProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeModalProject.title}
          className="fixed inset-0 z-[80] overflow-y-auto bg-black/85 backdrop-blur-md p-4 sm:p-6 md:p-12 flex justify-center items-start animate-fade-in"
          onClick={(e) => {
            if (e.target === e.currentTarget) setActiveModalProject(null);
          }}
        >
          <div
            className="w-full max-w-4xl p-6 md:p-10 rounded-2xl border border-[rgba(236,235,230,0.14)] bg-[#0b0b0c] text-[#ecebe6] shadow-2xl relative my-auto space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header bar */}
            <div className="flex justify-between items-center font-mono text-xs text-[rgba(236,235,230,0.6)] border-b border-[rgba(236,235,230,0.1)] pb-4">
              <span>{activeModalProject.index} · {activeModalProject.discipline}</span>
              <button
                onClick={() => setActiveModalProject(null)}
                className="hover:text-white transition-colors px-3 py-1 rounded-full border border-white/10 hover:border-white/30 text-xs font-mono"
                aria-label="Close case study"
                data-cursor="pointer"
              >
                Close ✕
              </button>
            </div>

            {/* Gradient Cover Banner with Stat */}
            <div
              className="folio-cover !aspect-auto min-h-[160px] p-6 md:p-8"
              style={{
                background: `linear-gradient(135deg, hsl(${activeModalProject.hue} 70% 24%), hsl(${activeModalProject.hue + 40} 80% 7%))`
              }}
            >
              <span className="font-mono text-xs uppercase tracking-wider text-[rgba(236,235,230,0.7)]">
                {activeModalProject.role} · {activeModalProject.dates}
              </span>
              <div className="mt-6">
                <p className="text-3xl sm:text-5xl font-semibold tracking-tight text-white leading-none">
                  {activeModalProject.stat[0]}
                </p>
                <p className="font-mono text-xs text-[rgba(236,235,230,0.6)] mt-2 uppercase tracking-wider">
                  {activeModalProject.stat[1]}
                </p>
              </div>
            </div>

            {/* Case Study Title */}
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl tracking-tighter font-medium text-white">
                {activeModalProject.title}
              </h2>
              <div className="flex flex-wrap items-center gap-3 mt-2 font-mono text-xs text-[#d4ff4f]">
                <span>{activeModalProject.role}</span>
                <span>•</span>
                <span>{activeModalProject.dates}</span>
              </div>
            </div>

            {/* Deep-Dive Honest Case Breakdown */}
            <div className="space-y-6 pt-4 border-t border-[rgba(236,235,230,0.1)] text-sm sm:text-base leading-relaxed text-[rgba(236,235,230,0.8)]">
              <div>
                <strong className="block font-mono text-xs uppercase tracking-wider text-white mb-1.5">
                  The Opportunity
                </strong>
                <p>{activeModalProject.opportunity}</p>
              </div>

              <div>
                <strong className="block font-mono text-xs uppercase tracking-wider text-white mb-1.5">
                  My Responsibility (Personal Contribution)
                </strong>
                <p>{activeModalProject.responsibility}</p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <strong className="block font-mono text-xs uppercase tracking-wider text-[#d4ff4f] mb-1.5">
                  What Actually Happened (The Reality Behind the Work)
                </strong>
                <p className="text-neutral-300">{activeModalProject.whatHappened}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <strong className="block font-mono text-xs uppercase tracking-wider text-white mb-1.5">
                    What I Learned
                  </strong>
                  <p className="italic text-neutral-300">"{activeModalProject.learned}"</p>
                </div>

                <div>
                  <strong className="block font-mono text-xs uppercase tracking-wider text-white mb-1.5">
                    Verifiable Outcome
                  </strong>
                  <p>{activeModalProject.result}</p>
                </div>
              </div>

              {/* Tools & Skills */}
              <div>
                <strong className="block font-mono text-xs uppercase tracking-wider text-white mb-2">
                  Tools &amp; Practical Skills
                </strong>
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.toolsAndSkills.map((tool) => (
                    <span
                      key={tool}
                      className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 font-mono text-xs text-neutral-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Verified Proof Banner */}
              <div className="p-4 rounded-xl bg-[#d4ff4f]/10 border border-[#d4ff4f]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#d4ff4f]" />
                  <span className="font-mono text-xs text-white">
                    Verified Claim · Sourced documentation available
                  </span>
                </div>
                <a
                  href={activeModalProject.proofUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-black font-semibold bg-[#d4ff4f] px-3.5 py-1.5 rounded-full hover:bg-white transition-colors inline-flex items-center gap-1"
                >
                  <span>{activeModalProject.proofType}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
