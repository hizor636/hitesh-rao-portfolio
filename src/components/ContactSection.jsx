import React, { useState } from 'react';
import { PERSONAL_INFO, INTERNSHIP_BLOCK, WORKFLOW_STEPS, FAQS } from '../data/portfolioData';
import { Mail, FileText, ArrowUpRight, MapPin, Calendar, Clock, CheckCircle2, Globe, ExternalLink } from 'lucide-react';

export default function ContactSection({ onOpenContactModal }) {
  const [openFaq, setOpenFaq] = useState(null);
  const [showWorkflow, setShowWorkflow] = useState(false);
  const [showFaq, setShowFaq] = useState(false);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="px-5 md:px-10 pt-24 pb-12 mt-24 border-t border-[rgba(236,235,230,0.14)] max-w-7xl mx-auto z-10 text-[#ecebe6] text-left">
      {/* ========================================================= */}
      {/* 1. DEDICATED RECRUITER CONVERSION BLOCK: OPEN TO INTERNSHIPS */}
      {/* ========================================================= */}
      <div className="rv interactive-card mb-20 p-8 sm:p-12 rounded-3xl border border-[#d4ff4f]/30 bg-gradient-to-b from-[#d4ff4f]/[0.06] to-transparent">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4ff4f]/15 border border-[#d4ff4f]/30 text-[#d4ff4f] text-xs font-mono mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d4ff4f] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#d4ff4f]"></span>
              </span>
              <span>AVAILABLE FOR INTERNSHIPS</span>
            </div>

            <h3 className="text-3xl sm:text-5xl font-medium tracking-tighter text-white mb-4">
              Open to internships.
            </h3>

            <p className="text-base sm:text-lg text-[rgba(236,235,230,0.85)] leading-relaxed mb-6">
              I’m actively looking for internships in <strong className="text-white">marketing, growth, campus programs, fintech marketing, community/DevRel operations, or data analytics</strong>.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-sans mb-8">
              <div className="flex items-start gap-2.5 text-neutral-300">
                <MapPin className="w-4 h-4 text-[#d4ff4f] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Location</span>
                  <span>Bengaluru (On-site, Hybrid, or Remote)</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 text-neutral-300">
                <Calendar className="w-4 h-4 text-[#d4ff4f] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Availability</span>
                  <span>Part-time in term / Full-time in breaks</span>
                </div>
              </div>
            </div>

            <p className="text-sm text-[rgba(236,235,230,0.7)] italic">
              "{INTERNSHIP_BLOCK.closingLine}"
            </p>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
            <a
              href={`mailto:${PERSONAL_INFO.email}?subject=Internship%20enquiry:%20[Role]%20·%20Hitesh%20Rao%20M`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#d4ff4f] text-black font-semibold text-sm hover:bg-[#c2ef3e] transition-all shadow-[0_0_20px_rgba(212,255,79,0.3)] hover:scale-[1.02]"
              data-cursor="pointer"
            >
              <Mail className="w-4 h-4" />
              <span>Email me for internships</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium text-sm transition-all hover:scale-[1.02]"
              data-cursor="pointer"
            >
              <FileText className="w-4 h-4" />
              <span>Download Résumé (PDF)</span>
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-white text-sm transition-all"
              data-cursor="pointer"
            >
              <ExternalLink className="w-4 h-4 text-[#00baf2]" />
              <span>Connect on LinkedIn</span>
            </a>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 2. THREE COLUMN BAR: EMAIL, SOCIAL, WORKFLOW & FAQ NAV   */}
      {/* ========================================================= */}
      <div className="rv grid grid-cols-1 md:grid-cols-3 gap-8 pb-12 border-b border-[rgba(236,235,230,0.1)]">
        {/* Email as clickable and visible text */}
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-[rgba(236,235,230,0.5)] mb-2">
            Direct Email
          </p>
          <a
            href={`mailto:${PERSONAL_INFO.email}?subject=Internship%20enquiry:%20[Role]%20·%20Hitesh%20Rao%20M`}
            className="text-xl md:text-2xl font-sans hover:text-[#d4ff4f] transition-colors break-all"
            data-cursor="pointer"
          >
            {PERSONAL_INFO.email}
          </a>
          <p className="text-xs font-mono text-neutral-500 mt-1">
            Subject: Internship enquiry: [Role]
          </p>
        </div>

        {/* Verified Socials (no mock accounts) */}
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-[rgba(236,235,230,0.5)] mb-2">
            Verified Profiles
          </p>
          <div className="text-xl md:text-2xl space-x-6 font-sans text-neutral-200">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#d4ff4f] transition-colors"
              data-cursor="pointer"
            >
              LinkedIn ↗
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#d4ff4f] transition-colors"
              data-cursor="pointer"
            >
              GitHub ↗
            </a>
          </div>
        </div>

        {/* Nav Links: Workflow & FAQ Toggle */}
        <div className="md:text-right flex items-start md:justify-end gap-6 font-mono text-xs uppercase tracking-wider text-[rgba(236,235,230,0.7)] pt-1">
          <button
            onClick={() => setShowWorkflow(!showWorkflow)}
            className={`hover:text-[#d4ff4f] transition-colors ${showWorkflow ? 'text-[#d4ff4f]' : ''}`}
            data-cursor="pointer"
          >
            Workflow {showWorkflow ? '▴' : '▾'}
          </button>
          <button
            onClick={() => setShowFaq(!showFaq)}
            className={`hover:text-[#d4ff4f] transition-colors ${showFaq ? 'text-[#d4ff4f]' : ''}`}
            data-cursor="pointer"
          >
            FAQ {showFaq ? '▴' : '▾'}
          </button>
        </div>
      </div>

      {/* Expandable Workflow Section */}
      {showWorkflow && (
        <div className="py-12 border-b border-[rgba(236,235,230,0.14)] animate-fade-in">
          <p className="font-mono text-xs uppercase tracking-widest text-[rgba(236,235,230,0.5)] mb-3">
            (Methodology)
          </p>
          <h3 className="text-3xl sm:text-5xl font-medium tracking-tighter text-white mb-8">
            Workflow Cadence
          </h3>
          <div className="divide-y divide-[rgba(236,235,230,0.14)]">
            {WORKFLOW_STEPS.map((s, i) => (
              <div
                key={s.title}
                className="grid grid-cols-[3rem_1fr] md:grid-cols-[4rem_1fr_2fr] gap-4 py-7"
              >
                <span className="font-mono text-xs text-[rgba(236,235,230,0.5)]">0{i + 1}</span>
                <span className="text-2xl sm:text-3xl tracking-tight text-white font-medium">{s.title}</span>
                <span className="text-base sm:text-lg text-[rgba(236,235,230,0.66)] leading-relaxed">{s.desc}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Expandable FAQ Section */}
      {showFaq && (
        <div className="py-12 border-b border-[rgba(236,235,230,0.14)] max-w-4xl animate-fade-in">
          <p className="font-mono text-xs uppercase tracking-widest text-[rgba(236,235,230,0.5)] mb-3">
            (Inquiries)
          </p>
          <h3 className="text-3xl sm:text-5xl font-medium tracking-tighter text-white mb-8">
            Frequently Asked Questions
          </h3>
          <div className="divide-y divide-[rgba(236,235,230,0.14)] border-t border-[rgba(236,235,230,0.14)]">
            {FAQS.map((q, idx) => (
              <details
                key={idx}
                className="group py-5 text-left cursor-pointer"
                open={openFaq === idx}
                onClick={(e) => {
                  e.preventDefault();
                  toggleFaq(idx);
                }}
              >
                <summary className="text-xl sm:text-2xl font-medium text-white group-hover:text-[#d4ff4f] transition-colors list-none flex justify-between items-center">
                  <span>{q.q}</span>
                  <span className="font-mono text-sm text-[rgba(236,235,230,0.5)]">
                    {openFaq === idx ? '−' : '+'}
                  </span>
                </summary>
                <p className="mt-4 text-base sm:text-lg text-[rgba(236,235,230,0.7)] leading-relaxed max-w-2xl">
                  {q.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      )}

      {/* Massive Iconic Headline */}
      <div className="rv pt-16 pb-8">
        <h2 className="text-[clamp(2.6rem,10vw,9rem)] leading-[0.92] tracking-tighter font-semibold text-white">
          Tech marketer<br />
          &amp; <span className="font-serif italic font-normal text-[#d4ff4f]">data builder.</span><br />
          Based in Bengaluru.
        </h2>
      </div>

      {/* Bottom Row: Last Updated, Copyright & Back to Top */}
      <div className="rv flex flex-col sm:flex-row justify-between items-center gap-4 mt-16 pt-8 border-t border-[rgba(236,235,230,0.1)] font-mono text-xs uppercase tracking-wider text-[rgba(236,235,230,0.5)]">
        <div className="flex items-center gap-4">
          <span>© {new Date().getFullYear()} Hitesh Rao M</span>
          <span>•</span>
          <span className="text-[#d4ff4f]">Last updated: October 2026</span>
        </div>
        <button
          onClick={scrollToTop}
          className="font-mono text-xs hover:text-[#d4ff4f] transition-colors"
          data-cursor="pointer"
        >
          Back to top ↑
        </button>
      </div>
    </footer>
  );
}
