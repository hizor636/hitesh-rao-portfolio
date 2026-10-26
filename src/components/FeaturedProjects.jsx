import React, { useState, useEffect, useRef } from 'react';
import { FOLIO_PROJECTS } from '../data/portfolioData';

export default function FeaturedProjects({ onSelectProject }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredProject, setHoveredProject] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeModalProject, setActiveModalProject] = useState(null);
  const [isFinePointer, setIsFinePointer] = useState(true);

  const filters = ['All', 'Career', 'Project', 'Skill'];

  const filteredProjects = activeFilter === 'All'
    ? FOLIO_PROJECTS
    : FOLIO_PROJECTS.filter((p) => p.c === activeFilter);

  // Check pointer precision and bind global mousemove for the floating preview
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

  const handleOpenProject = (project) => {
    setHoveredProject(null);
    setActiveModalProject(project);
    if (onSelectProject) {
      // Also notify parent if needed
      onSelectProject(project);
    }
  };

  return (
    <section id="work" className="relative px-5 md:px-10 mt-28 max-w-7xl mx-auto z-10">
      {/* Folio Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8 pb-4">
        <div className="flex items-center gap-3">
          <h2 className="font-mono text-xs uppercase tracking-widest text-[rgba(236,235,230,0.66)]">
            (Folio)
          </h2>
          <span className="w-8 h-px bg-white/20" />
        </div>

        {/* Filter Chips & Count */}
        <div className="flex flex-wrap items-center gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`folio-chip font-mono text-xs ${
                activeFilter === filter ? 'on' : ''
              }`}
              data-cursor="pointer"
              aria-pressed={activeFilter === filter}
            >
              {filter}
            </button>
          ))}
          <span className="font-mono text-xs text-[rgba(236,235,230,0.5)] ml-2">
            All ({FOLIO_PROJECTS.length}) →
          </span>
        </div>
      </div>

      {/* Folio Interactive Rows List */}
      <div className="border-b border-[rgba(236,235,230,0.14)]">
        {filteredProjects.map((project) => (
          <button
            key={project.i}
            className="folio-row group focus:outline-hidden"
            onClick={() => handleOpenProject(project)}
            onMouseEnter={() => isFinePointer && setHoveredProject(project)}
            onMouseLeave={() => isFinePointer && setHoveredProject(null)}
            aria-label={`Open ${project.t} case study`}
            data-cursor="pointer"
          >
            {/* Index: 00-1 */}
            <span className="font-mono text-xs text-[rgba(236,235,230,0.5)] group-hover:text-[#d4ff4f] transition-colors">
              {project.i}
            </span>

            {/* Title */}
            <span className="text-2xl md:text-4xl tracking-tight font-medium text-white group-hover:text-[#d4ff4f] transition-colors text-left">
              {project.t}
            </span>

            {/* Metadata: Category & Year */}
            <span className="font-mono text-xs text-[rgba(236,235,230,0.5)] hidden sm:block text-right">
              {project.k} · {project.y}
            </span>
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
                background: `linear-gradient(135deg, hsl(${hoveredProject.h} 70% 24%), hsl(${hoveredProject.h + 40} 80% 7%))`
              }}
            >
              <span className="font-mono text-[11px] tracking-wider uppercase text-[rgba(236,235,230,0.75)]">
                {hoveredProject.i} · {hoveredProject.k}
              </span>
              <div className="mt-8">
                <p className="text-3xl md:text-4xl font-semibold tracking-tight text-white leading-none">
                  {hoveredProject.s[0]}
                </p>
                <p className="font-mono text-[11px] text-[rgba(236,235,230,0.6)] mt-2 uppercase tracking-wider">
                  {hoveredProject.s[1]}
                </p>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Modal Dialog for Clicked Work */}
      {activeModalProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeModalProject.t}
          className="fixed inset-0 z-[80] overflow-y-auto bg-black/85 backdrop-blur-md p-4 sm:p-6 md:p-12 flex justify-center items-start animate-fade-in"
          onClick={(e) => {
            if (e.target === e.currentTarget) setActiveModalProject(null);
          }}
        >
          <div
            className="w-full max-w-4xl p-6 md:p-10 rounded-2xl border border-[rgba(236,235,230,0.14)] bg-[#0b0b0c] text-[#ecebe6] shadow-2xl relative my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header bar */}
            <div className="flex justify-between items-center font-mono text-xs text-[rgba(236,235,230,0.6)] mb-6 border-b border-[rgba(236,235,230,0.1)] pb-4">
              <span>{activeModalProject.i} · {activeModalProject.k}</span>
              <button
                onClick={() => setActiveModalProject(null)}
                className="hover:text-white transition-colors px-3 py-1 rounded-full border border-white/10 hover:border-white/30 text-xs font-mono"
                aria-label="Close case study"
                data-cursor="pointer"
              >
                Close ✕
              </button>
            </div>

            {/* Gradient Cover Banner */}
            <div
              className="folio-cover !aspect-auto min-h-[180px] md:min-h-[220px] p-6 md:p-8"
              style={{
                background: `linear-gradient(135deg, hsl(${activeModalProject.h} 70% 24%), hsl(${activeModalProject.h + 40} 80% 7%))`
              }}
            >
              <span className="font-mono text-xs uppercase tracking-wider text-[rgba(236,235,230,0.7)]">
                {activeModalProject.i} · {activeModalProject.k}
              </span>
              <div className="mt-8">
                <p className="text-4xl md:text-6xl font-semibold tracking-tight text-white leading-none">
                  {activeModalProject.s[0]}
                </p>
                <p className="font-mono text-xs text-[rgba(236,235,230,0.6)] mt-2 uppercase tracking-wider">
                  {activeModalProject.s[1]}
                </p>
              </div>
            </div>

            {/* Project Title */}
            <h2 className="text-3xl sm:text-4xl md:text-6xl tracking-tighter font-medium mt-8 text-white">
              {activeModalProject.t}
            </h2>

            {/* Description Paragraph */}
            <p className="mt-5 text-base sm:text-lg text-[rgba(236,235,230,0.7)] max-w-2xl leading-[1.6]">
              {activeModalProject.d}
            </p>

            {/* Services & Recognition Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 pt-6 border-t border-[rgba(236,235,230,0.14)]">
              <div>
                <p className="font-mono text-xs text-[rgba(236,235,230,0.5)] mb-3 uppercase tracking-wider">
                  Services
                </p>
                <ul className="folio-li text-base sm:text-lg text-neutral-200">
                  {activeModalProject.sv.map((service, idx) => (
                    <li key={idx}>{service}</li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="font-mono text-xs text-[rgba(236,235,230,0.5)] mb-3 uppercase tracking-wider">
                  Recognition & Term
                </p>
                <ul className="folio-li text-base sm:text-lg text-neutral-200">
                  {activeModalProject.aw.map((award, idx) => (
                    <li key={idx}>{award}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
