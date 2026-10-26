import React, { useState } from 'react';
import { PERSONAL_INFO, INTERNSHIP_BLOCK, WORKFLOW_STEPS, FAQS } from '../data/portfolioData';
import { Mail, FileText, ArrowUpRight, MapPin, Calendar, Clock, CheckCircle2, Globe, ExternalLink, Copy, Check, MessageSquare, ChevronDown, ChevronUp } from 'lucide-react';
import { BrandSignatureName, LinkedInLogo, GitHubLogo } from './CompanyLogos';

export default function ContactSection({ onOpenContactModal }) {
  const [openFaq, setOpenFaq] = useState(null);
  const [showWorkflow, setShowWorkflow] = useState(false);
  const [showFaq, setShowFaq] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative px-4 sm:px-6 md:px-10 pt-20 md:pt-28 pb-12 mt-20 md:mt-28 border-t border-white/10 max-w-7xl mx-auto z-10 text-[#ecebe6] text-left">
      
      {/* Eyebrow Header */}
      <div className="rv flex items-center gap-3 mb-6">
        <span className="font-mono text-xs uppercase tracking-widest text-[#d4ff4f] flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#d4ff4f] animate-pulse" />
          (07 // Connect &amp; Opportunities)
        </span>
        <span className="w-12 h-px bg-white/20" />
      </div>

      {/* ========================================================= */}
      {/* 1. UNIFIED RESPONSIVE CONNECT CARD (Mobile/Tablet/Desktop) */}
      {/* ========================================================= */}
      <div className="rv mb-16 p-6 sm:p-8 md:p-12 rounded-3xl border border-[#d4ff4f]/30 bg-gradient-to-b from-[#d4ff4f]/[0.07] via-white/[0.02] to-transparent shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Who, What, Availability */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4ff4f]/15 border border-[#d4ff4f]/30 text-[#d4ff4f] text-xs font-mono mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d4ff4f] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#d4ff4f]"></span>
                </span>
                <span>OPEN TO INTERNSHIPS · BENGALURU</span>
              </div>

              <h3 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tighter text-white mb-4">
                Let’s talk growth, data &amp; community.
              </h3>

              <p className="text-base sm:text-lg text-[rgba(236,235,230,0.85)] leading-relaxed mb-6">
                I’m actively looking for internships in <strong className="text-white">growth marketing, campus programs, fintech marketing, developer relations, or data analytics</strong> where I can ship real work and create measurable impact.
              </p>

              {/* Verified Practical Location & Timing Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-sm font-sans mb-6">
                <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#d4ff4f] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block text-xs font-mono uppercase tracking-wider">Location</span>
                    <span className="text-neutral-300 text-xs sm:text-sm">Bengaluru (On-site, Hybrid, or Remote)</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 flex items-start gap-3">
                  <Calendar className="w-4 h-4 text-[#d4ff4f] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block text-xs font-mono uppercase tracking-wider">Engagement</span>
                    <span className="text-neutral-300 text-xs sm:text-sm">Immediate · Part-time in term / Full-time breaks</span>
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[rgba(236,235,230,0.65)] italic">
                "{INTERNSHIP_BLOCK.closingLine}"
              </p>
            </div>
          </div>

          {/* Right Column: High-Visibility Direct Action Stack (Fixed grid that never overflows) */}
          <div className="lg:col-span-5 flex flex-col gap-3 w-full">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-1">
              Connect Channels
            </span>

            {/* Primary Action 1: Email Me */}
            <a
              data-cms="email"
              href={`mailto:${PERSONAL_INFO.email}?subject=Internship%20enquiry:%20[Role]%20·%20Hitesh%20Rao%20M`}
              className="w-full inline-flex items-center justify-between px-5 py-3.5 rounded-2xl bg-[#d4ff4f] text-black font-semibold text-sm hover:bg-white transition-all shadow-[0_0_24px_rgba(212,255,79,0.35)] hover:scale-[1.02] active:scale-[0.98] group"
              data-cursor="pointer"
            >
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-black" />
                <span className="font-mono text-xs uppercase tracking-wider">Email for Internships</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-black transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* Primary Action 2: Send Note in Modal */}
            <button
              onClick={onOpenContactModal}
              className="w-full inline-flex items-center justify-between px-5 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium text-sm transition-all hover:scale-[1.02] active:scale-[0.98] group"
              data-cursor="pointer"
            >
              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-[#d4ff4f]" />
                <span className="font-mono text-xs uppercase tracking-wider">Send a Quick Note</span>
              </div>
              <span className="text-[11px] font-mono text-[#d4ff4f]">Hub ↗</span>
            </button>

            {/* Primary Action 3: LinkedIn Profile */}
            <a
              data-cms="linkedin"
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-between px-5 py-3.5 rounded-2xl bg-white/[0.04] hover:bg-[#0077b5]/20 border border-white/10 hover:border-[#0077b5]/50 text-neutral-200 hover:text-white text-sm transition-all hover:scale-[1.02] active:scale-[0.98] group"
              data-cursor="pointer"
            >
              <div className="flex items-center gap-2.5">
                <LinkedInLogo size="xs" />
                <span className="font-mono text-xs uppercase tracking-wider">LinkedIn Profile</span>
              </div>
              <span className="text-[11px] font-mono text-neutral-400 group-hover:text-white">500+ Conn ↗</span>
            </a>

            {/* Primary Action 4: Download Résumé */}
            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-between px-5 py-3.5 rounded-2xl bg-white/[0.04] hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-white text-sm transition-all hover:scale-[1.02] active:scale-[0.98] group"
              data-cursor="pointer"
            >
              <div className="flex items-center gap-2.5">
                <FileText className="w-4 h-4 text-neutral-400 group-hover:text-white" />
                <span className="font-mono text-xs uppercase tracking-wider">Download Résumé</span>
              </div>
              <span className="text-[11px] font-mono text-neutral-400 group-hover:text-white">PDF ↗</span>
            </a>

            {/* Direct Email Display with 1-Click Copy */}
            <div className="mt-2 p-3.5 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-between gap-2">
              <div className="min-w-0 pr-2">
                <span className="block text-[10px] font-mono text-neutral-400 uppercase tracking-wider">Direct Address</span>
                <span className="text-xs sm:text-sm font-mono text-white truncate block">{PERSONAL_INFO.email}</span>
              </div>
              <button
                onClick={handleCopyEmail}
                className="shrink-0 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-mono text-white flex items-center gap-1.5 transition-all"
                data-cursor="pointer"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#d4ff4f]" />
                    <span className="text-[#d4ff4f] font-semibold text-[11px]">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span className="text-[11px]">Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* ========================================================= */}
      {/* 2. SECONDARY LINKS & INFORMATION BAR                      */}
      {/* ========================================================= */}
      <div className="rv grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pb-12 border-b border-white/10 text-xs font-mono">
        {/* Verified Profiles */}
        <div>
          <span className="text-neutral-400 uppercase tracking-widest block mb-2">Verified Profiles</span>
          <div className="flex items-center gap-4 text-white text-sm font-sans">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#d4ff4f] transition-colors inline-flex items-center gap-1.5"
            >
              <LinkedInLogo size="xs" />
              <span>LinkedIn</span>
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#d4ff4f] transition-colors inline-flex items-center gap-1.5"
            >
              <GitHubLogo size="xs" />
              <span>GitHub</span>
            </a>
          </div>
        </div>

        {/* Response Metrics */}
        <div>
          <span className="text-neutral-400 uppercase tracking-widest block mb-2">Response Time</span>
          <p className="text-white text-sm font-sans flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-[#d4ff4f]" />
            <span>Replies within 24 hours</span>
          </p>
        </div>

        {/* Methodology & FAQ Toggles */}
        <div className="sm:col-span-2 md:col-span-1 flex items-center md:justify-end gap-4 uppercase tracking-wider">
          <button
            onClick={() => setShowWorkflow(!showWorkflow)}
            className={`px-3 py-1.5 rounded-lg border transition-all ${
              showWorkflow
                ? 'border-[#d4ff4f] bg-[#d4ff4f]/15 text-[#d4ff4f]'
                : 'border-white/10 bg-white/5 text-neutral-300 hover:text-white'
            }`}
            data-cursor="pointer"
          >
            Workflow {showWorkflow ? '▲' : '▼'}
          </button>
          <button
            onClick={() => setShowFaq(!showFaq)}
            className={`px-3 py-1.5 rounded-lg border transition-all ${
              showFaq
                ? 'border-[#d4ff4f] bg-[#d4ff4f]/15 text-[#d4ff4f]'
                : 'border-white/10 bg-white/5 text-neutral-300 hover:text-white'
            }`}
            data-cursor="pointer"
          >
            FAQ {showFaq ? '▲' : '▼'}
          </button>
        </div>
      </div>

      {/* Expandable Workflow Section */}
      {showWorkflow && (
        <div className="py-12 border-b border-white/10 animate-fade-in">
          <p className="font-mono text-xs uppercase tracking-widest text-neutral-400 mb-3">
            (Methodology)
          </p>
          <h3 className="text-2xl sm:text-4xl font-medium tracking-tighter text-white mb-6">
            Workflow Cadence
          </h3>
          <div className="divide-y divide-white/10">
            {WORKFLOW_STEPS.map((s, i) => (
              <div
                key={s.title}
                className="grid grid-cols-1 md:grid-cols-12 gap-3 py-5 items-start"
              >
                <span className="md:col-span-1 font-mono text-xs text-[#d4ff4f]">0{i + 1}</span>
                <span className="md:col-span-4 text-lg sm:text-xl tracking-tight text-white font-medium">{s.title}</span>
                <span className="md:col-span-7 text-sm sm:text-base text-neutral-300 leading-relaxed">{s.desc}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Expandable FAQ Section */}
      {showFaq && (
        <div className="py-12 border-b border-white/10 max-w-4xl animate-fade-in">
          <p className="font-mono text-xs uppercase tracking-widest text-neutral-400 mb-3">
            (Inquiries)
          </p>
          <h3 className="text-2xl sm:text-4xl font-medium tracking-tighter text-white mb-6">
            Frequently Asked Questions
          </h3>
          <div className="divide-y divide-white/10 border-t border-white/10">
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
                <summary className="text-lg sm:text-xl font-medium text-white group-hover:text-[#d4ff4f] transition-colors list-none flex justify-between items-center gap-4">
                  <span>{q.q}</span>
                  <span className="font-mono text-sm text-neutral-400">
                    {openFaq === idx ? '−' : '+'}
                  </span>
                </summary>
                <p className="mt-3 text-sm sm:text-base text-neutral-300 leading-relaxed max-w-2xl">
                  {q.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      )}

      {/* Brand Footer Sign-Off (Safe wrapping to prevent horizontal mobile overflow) */}
      <div className="rv pt-16 pb-8 overflow-hidden">
        <div className="mb-4">
          <BrandSignatureName size="xl" />
        </div>
        <h2 className="text-[clamp(2.2rem,8vw,6.5rem)] leading-[0.98] tracking-tighter font-semibold text-white break-words [overflow-wrap:anywhere]">
          Tech marketer<br />
          &amp; <span className="font-serif italic font-normal text-[#d4ff4f]">data builder.</span><br />
          Based in Bengaluru.
        </h2>
      </div>

      {/* Bottom Legal & Navigation */}
      <div className="rv flex flex-col sm:flex-row justify-between items-center gap-4 mt-12 pt-8 border-t border-white/10 font-mono text-xs uppercase tracking-wider text-neutral-400">
        <div className="flex flex-wrap items-center gap-2.5">
          <span>© {new Date().getFullYear()}</span>
          <BrandSignatureName size="sm" />
          <span>•</span>
          <span className="text-[#d4ff4f]">Bengaluru, Karnataka</span>
        </div>
        <button
          onClick={scrollToTop}
          className="hover:text-[#d4ff4f] transition-colors flex items-center gap-1.5"
          data-cursor="pointer"
        >
          <span>Back to top</span>
          <span>↑</span>
        </button>
      </div>

    </footer>
  );
}
