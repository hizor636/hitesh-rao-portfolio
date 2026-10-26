import React, { useEffect } from 'react';
import { X, ArrowUpRight, Award, CheckCircle, ChevronRight, Layers, Sparkles } from 'lucide-react';
import ProjectVisual from './ProjectVisual';
import { PROJECTS } from '../data/portfolioData';

export default function CaseStudyModal({ project, onClose, onSelectProject }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project) return null;

  // Find next project in sequence
  const currentIndex = PROJECTS.findIndex((p) => p.id === project.id);
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-300">
      <div className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-[#0b0b0e] border border-white/15 rounded-3xl shadow-2xl my-auto text-white">
        {/* Sticky Modal Top Bar */}
        <div className="sticky top-0 z-30 flex items-center justify-between px-6 py-4 bg-[#0b0b0e]/90 backdrop-blur-md border-b border-white/10">
          <div className="flex items-center gap-3 font-mono-tech text-xs">
            <span className="text-white font-bold">{project.index}</span>
            <span className="text-neutral-500">•</span>
            <span className="text-neutral-300">{project.client}</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden sm:inline-block text-[11px] font-mono-tech text-neutral-400 uppercase tracking-widest">
              PRESS ESC TO EXIT
            </span>
            <button
              onClick={onClose}
              className="p-2 rounded-full border border-white/15 hover:border-white bg-white/5 hover:bg-white/15 transition-all text-white"
              data-cursor="pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 md:p-12 space-y-12">
          {/* Header Title & Subtitle */}
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-4">
              {project.awards.map((award) => (
                <span
                  key={award}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono-tech tracking-wider uppercase bg-white/10 text-white border border-white/10"
                >
                  <Award className="w-3 h-3 text-amber-300" />
                  <span>{award}</span>
                </span>
              ))}
            </div>

            <h2 className="font-sans font-medium text-[clamp(2.2rem,5vw,3.5rem)] tracking-[-0.03em] leading-[1.05] text-white">
              {project.title}
            </h2>

            <p className="mt-3 text-sm md:text-base font-mono-tech text-neutral-400 uppercase tracking-wider">
              {project.subtitle}
            </p>
          </div>

          {/* Interactive Project Visual Showcase */}
          <div className="w-full">
            <ProjectVisual
              type={project.visualType}
              title={project.title}
              accentColor={project.accentColor}
            />
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6 rounded-2xl bg-white/[0.02] border border-white/10">
            {project.results.map((res, i) => (
              <div key={i} className="flex flex-col">
                <span className="font-sans text-3xl md:text-4xl font-semibold text-white tracking-tight">
                  {res.metric}
                </span>
                <span className="mt-1 text-xs font-mono-tech tracking-wider uppercase text-neutral-400">
                  {res.label}
                </span>
              </div>
            ))}
          </div>

          {/* Narrative: The Brief, Challenge & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-6 border-t border-white/10">
            <div className="md:col-span-4 font-mono-tech text-xs tracking-widest text-neutral-400 uppercase">
              [THE ARCHITECTURAL BRIEF]
            </div>
            <div className="md:col-span-8 space-y-6 text-sm md:text-base font-light text-neutral-300 leading-relaxed">
              <p>{project.summary}</p>
              <div>
                <h4 className="font-mono-tech text-xs uppercase tracking-widest text-white mb-2">The Challenge</h4>
                <p className="text-neutral-400">{project.challenge}</p>
              </div>
              <div>
                <h4 className="font-mono-tech text-xs uppercase tracking-widest text-white mb-2">The Strategic Solution</h4>
                <p className="text-neutral-400">{project.solution}</p>
              </div>
            </div>
          </div>

          {/* Gallery Breakdown Slides */}
          <div className="space-y-6 pt-6 border-t border-white/10">
            <div className="font-mono-tech text-xs tracking-widest text-neutral-400 uppercase">
              [GALLERY & DESIGN ARTIFACTS]
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {project.images.map((img, i) => (
                <div key={i} className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col justify-between">
                  <div className="h-28 rounded-xl bg-linear-to-br from-white/5 to-white/[0.01] border border-white/5 flex items-center justify-center font-mono-tech text-neutral-600 text-xs">
                    ARTIFACT // 0{i + 1}
                  </div>
                  <div className="mt-4">
                    <h5 className="text-xs font-bold text-white font-mono-tech uppercase">{img.title}</h5>
                    <p className="mt-1 text-[11px] text-neutral-400 leading-relaxed">{img.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack & Client Testimonial */}
          <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 space-y-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono-tech text-neutral-400 uppercase mr-2">TECH STACK:</span>
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full text-xs font-mono-tech bg-white/5 border border-white/10 text-neutral-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {project.testimonial && (
              <div className="pt-6 border-t border-white/10">
                <p className="font-sans text-[1.1rem] font-normal leading-[1.6] text-neutral-200">
                  "{project.testimonial.quote}"
                </p>
                <div className="mt-3 text-xs font-mono-tech text-neutral-400 uppercase">
                  {project.testimonial.author} • {project.testimonial.role}
                </div>
              </div>
            )}
          </div>

          {/* Next Project Footer Switcher */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={onClose}
              className="text-xs font-mono-tech uppercase tracking-widest text-neutral-400 hover:text-white"
              data-cursor="pointer"
            >
              ← RETURN TO ARCHIVE
            </button>

            <button
              onClick={() => onSelectProject(nextProject)}
              className="group flex items-center gap-3 px-6 py-3 rounded-full bg-white text-black text-xs font-mono-tech font-bold uppercase tracking-wider hover:bg-neutral-200 transition-all"
              data-cursor="pointer"
            >
              <span>NEXT CASE: {nextProject.title}</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
