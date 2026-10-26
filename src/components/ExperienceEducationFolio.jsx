import React, { useState } from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Calendar, 
  MapPin, 
  ArrowUpRight, 
  ChevronDown, 
  ChevronUp, 
  Sparkles,
  CheckCircle2,
  Building,
  Award
} from 'lucide-react';
import { PROFESSIONAL_EXPERIENCE, EDUCATION_LIST } from '../data/portfolioData';
import PaytmCertificateModal from './PaytmCertificateModal.jsx';
import {
  GoogleLogo,
  PaytmLogo,
  MongoDBLogo,
  PrestoLogo,
  GeminiLogo,
  NCETLogo,
  NagarjunaVidyaniketanLogo
} from './CompanyLogos';

export default function ExperienceEducationFolio() {
  const [activeTab, setActiveTab] = useState('all'); // 'all' | 'experience' | 'education'
  const [expandedId, setExpandedId] = useState('paytm-intern'); // default open first item
  const [isPaytmModalOpen, setIsPaytmModalOpen] = useState(false);

  // Helper to render organization logo
  const renderLogo = (logoKey, role = '') => {
    switch (logoKey) {
      case 'paytm':
        return <PaytmLogo size="xs" />;
      case 'google':
        return <GoogleLogo size="xs" />;
      case 'presto':
        return (
          <span className="inline-flex items-center gap-1">
            <PrestoLogo size="xs" />
            <MongoDBLogo size="xs" />
          </span>
        );
      case 'gemini':
        return <GeminiLogo size="xs" />;
      case 'ncet':
        return <NCETLogo size="xs" />;
      case 'nagarjuna-vidyaniketan':
      case 'vidyaniketan':
      case 'nv':
        return <NagarjunaVidyaniketanLogo size="xs" />;
      default:
        return role.toLowerCase().includes('education') || role.toLowerCase().includes('bca') ? (
          <GraduationCap className="w-3.5 h-3.5 text-[var(--accent-lime)]" />
        ) : (
          <Briefcase className="w-3.5 h-3.5 text-[var(--accent-lime)]" />
        );
    }
  };

  // Combine and sort or filter records
  const allRecords = [
    ...PROFESSIONAL_EXPERIENCE.map(item => ({ ...item, recordType: 'experience' })),
    ...EDUCATION_LIST.map(item => ({ ...item, recordType: 'education' }))
  ];

  const displayedRecords = allRecords.filter(item => {
    if (activeTab === 'experience') return item.recordType === 'experience';
    if (activeTab === 'education') return item.recordType === 'education';
    return true;
  });

  const toggleExpand = (id) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <section 
      id="experience" 
      className="relative px-5 md:px-10 py-24 md:py-32 max-w-7xl mx-auto z-10 border-b border-[var(--border-subtle)] text-left scroll-mt-24"
    >
      {/* Section Header */}
      <div className="rv flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[var(--border-subtle)]">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent-lime)]">
              (Professional Folio &amp; Pedigree)
            </span>
            <span className="w-12 h-px bg-[var(--border-subtle)]" />
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl tracking-tighter font-medium text-[var(--text-primary)]">
            Experience &amp; <span className="font-serif italic font-normal text-[var(--accent-lime)]">Education.</span>
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-muted)] mt-3 max-w-2xl leading-relaxed">
            Detailed chronological record of corporate internships, developer relations operations, campus leadership, and academic degree foundations at NCET Bengaluru.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-full bg-[var(--card-subtle)] border border-[var(--border-subtle)]">
          <button
            type="button"
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-full font-mono text-xs transition-all cursor-pointer ${
              activeTab === 'all'
                ? 'bg-[var(--accent-lime)] text-[var(--accent-contrast)] font-semibold shadow-sm'
                : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
            }`}
            data-cursor="pointer"
          >
            All Milestones ({allRecords.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('experience')}
            className={`px-4 py-2 rounded-full font-mono text-xs transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'experience'
                ? 'bg-[var(--accent-lime)] text-[var(--accent-contrast)] font-semibold shadow-sm'
                : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
            }`}
            data-cursor="pointer"
          >
            <Briefcase className="w-3 h-3" />
            Experience ({PROFESSIONAL_EXPERIENCE.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('education')}
            className={`px-4 py-2 rounded-full font-mono text-xs transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'education'
                ? 'bg-[var(--accent-lime)] text-[var(--accent-contrast)] font-semibold shadow-sm'
                : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
            }`}
            data-cursor="pointer"
          >
            <GraduationCap className="w-3 h-3" />
            Education ({EDUCATION_LIST.length})
          </button>
        </div>
      </div>

      {/* Folio Rows List Container */}
      <div className="rv mt-8 space-y-1">
        {displayedRecords.map((item, index) => {
          const isExpanded = expandedId === item.id;
          const isEducation = item.recordType === 'education';
          const title = isEducation ? item.degree : item.role;
          const entity = isEducation ? item.institution : item.organization;
          const badgeLabel = isEducation ? item.score : item.badge;

          return (
            <div
              key={item.id}
              className={`group transition-all duration-300 border-b border-[var(--border-subtle)] hover:bg-[var(--card-subtle)] rounded-xl px-3 sm:px-5 py-5 sm:py-6 ${
                isExpanded ? 'bg-[var(--card-subtle)]' : ''
              }`}
            >
              {/* Folio Row Main Layout */}
              <div 
                className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start cursor-pointer select-none"
                onClick={() => toggleExpand(item.id)}
              >
                {/* 1. Index & Type (Left Column) */}
                <div className="md:col-span-1 flex md:flex-col items-center md:items-start gap-2 pt-1 font-mono text-xs text-[var(--text-muted)]">
                  <span className="font-semibold text-[var(--accent-lime)] group-hover:scale-105 transition-transform">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="hidden md:inline-block text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-[var(--border-subtle)] text-[var(--text-muted)]">
                    {isEducation ? 'EDU' : 'EXP'}
                  </span>
                </div>

                {/* 2. Main Title, Organization, & Summary (Center Column) */}
                <div className="md:col-span-8 space-y-2">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h3 className="text-lg sm:text-xl font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent-lime)] transition-colors">
                      {title}
                    </h3>

                    {/* Logo & Org Badge */}
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[var(--border-subtle)] text-xs text-[var(--text-primary)] font-medium">
                      {renderLogo(item.logoKey, title)}
                      <span>{entity}</span>
                    </div>

                    {/* Mobile-only status badge */}
                    <span className="inline-flex md:hidden items-center text-xs font-mono px-2 py-0.5 rounded-full bg-[var(--accent-lime)]/10 text-[var(--accent-lime)] border border-[var(--accent-lime)]/20">
                      {badgeLabel}
                    </span>
                  </div>

                  {/* Period & Location Sub-line */}
                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[var(--text-muted)]">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[var(--accent-lime)]" />
                      {item.period}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-[var(--border-subtle)]" />
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {item.location}
                    </span>
                    {item.status && (
                      <>
                        <span className="w-1 h-1 rounded-full bg-[var(--border-subtle)]" />
                        <span className="text-[var(--accent-lime)]">{item.status}</span>
                      </>
                    )}
                  </div>

                  {/* Summary Text */}
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed pt-1">
                    {item.summary}
                  </p>
                </div>

                {/* 3. Action, Badge & Expand Chevron (Right Column) */}
                <div className="md:col-span-3 flex md:flex-col items-center md:items-end justify-between md:justify-start gap-3 pt-1">
                  {/* Desktop Badge */}
                  <span className="hidden md:inline-flex items-center text-xs font-mono px-2.5 py-1 rounded-full bg-[var(--accent-lime)]/10 text-[var(--accent-lime)] border border-[var(--accent-lime)]/20 whitespace-nowrap">
                    {badgeLabel}
                  </span>

                  {/* Interactive Action / Certificate Button */}
                  <div className="flex items-center gap-2">
                    {item.isPaytmCertificate ? (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsPaytmModalOpen(true);
                        }}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-[#00baf2] bg-[#00baf2]/10 border border-[#00baf2]/30 hover:bg-[#00baf2]/20 hover:border-[#00baf2]/60 transition-all cursor-pointer font-semibold"
                        data-cursor="pointer"
                      >
                        <span>{item.linkText}</span>
                      </button>
                    ) : item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-[var(--accent-lime)] bg-[var(--accent-lime)]/10 border border-[var(--accent-lime)]/25 hover:bg-[var(--accent-lime)]/20 hover:border-[var(--accent-lime)]/50 transition-all"
                        data-cursor="pointer"
                      >
                        <span>{item.linkText}</span>
                      </a>
                    ) : null}

                    {/* Expand/Collapse Chevron */}
                    <button
                      type="button"
                      aria-label={isExpanded ? "Collapse details" : "Expand details"}
                      className="p-1 rounded-md text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--border-subtle)] transition-colors"
                    >
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4 text-[var(--accent-lime)]" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Expandable Details Drawer */}
              {isExpanded && (
                <div className="mt-5 pt-4 border-t border-[var(--border-subtle)] md:pl-12 grid grid-cols-1 md:grid-cols-12 gap-6 animate-fadeIn">
                  {/* Highlights Bullet List */}
                  <div className="md:col-span-8 space-y-3">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--accent-lime)] font-semibold flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      Key Contributions &amp; Scope
                    </h4>
                    <ul className="space-y-2">
                      {item.highlights && item.highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-[var(--accent-lime)] shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills or Coursework Chips */}
                  <div className="md:col-span-4 space-y-3">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] font-semibold">
                      {isEducation ? 'Key Coursework Modules' : 'Applied Competencies'}
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {(item.skills || item.coursework || []).map((chip, cIdx) => (
                        <span
                          key={cIdx}
                          className="px-2.5 py-1 rounded-md font-mono text-[11px] bg-[var(--border-subtle)] text-[var(--text-primary)] border border-[var(--border-subtle)]"
                        >
                          {chip}
                        </span>
                      ))}
                    </div>

                    {/* Official Institution logo callout for education */}
                    {isEducation && item.logoImg && (
                      <div className="mt-4 p-3.5 rounded-xl bg-[var(--border-subtle)]/60 border border-[var(--border-subtle)] flex items-center gap-3.5">
                        <div className="p-1.5 rounded-lg bg-white shrink-0 shadow-xs border border-black/10 flex items-center justify-center">
                          <img
                            src={item.logoImg}
                            alt={`${item.institution} Crest`}
                            className="h-9 w-auto max-w-[54px] object-contain shrink-0"
                            loading="eager"
                            decoding="sync"
                          />
                        </div>
                        <div className="text-xs text-[var(--text-muted)] leading-tight">
                          <div className="font-semibold text-sm text-[var(--text-primary)]">{item.institution}</div>
                          <div className="text-[11px] mt-0.5">{item.institutionSubText || 'Bengaluru, Karnataka, India'}</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* One97 Communications Limited Official Certificate Modal */}
      <PaytmCertificateModal 
        isOpen={isPaytmModalOpen} 
        onClose={() => setIsPaytmModalOpen(false)} 
      />
    </section>
  );
}
