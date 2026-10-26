import React, { useState } from 'react';
import { PERSONAL_INFO, WORKFLOW_STEPS, FAQS } from '../data/portfolioData';

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
    <footer id="contact" className="px-5 md:px-10 pt-24 pb-12 mt-24 border-t border-[rgba(236,235,230,0.14)] max-w-7xl mx-auto z-10 text-[#ecebe6]">
      {/* 3-Column Top Bar: Email, Social, Workflow & FAQ Navigation */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12 border-b border-[rgba(236,235,230,0.1)]">
        {/* Email */}
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-[rgba(236,235,230,0.5)] mb-2">
            Email
          </p>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="text-xl md:text-2xl font-sans hover:text-[#d4ff4f] transition-colors break-all"
            data-cursor="pointer"
          >
            {PERSONAL_INFO.email}
          </a>
        </div>

        {/* Social */}
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-[rgba(236,235,230,0.5)] mb-2">
            Social
          </p>
          <div className="text-xl md:text-2xl space-x-4 font-sans text-neutral-200">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#d4ff4f] transition-colors"
              data-cursor="pointer"
            >
              LinkedIn
            </a>
            <a
              href="https://behance.net"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#d4ff4f] transition-colors"
              data-cursor="pointer"
            >
              Behance
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#d4ff4f] transition-colors"
              data-cursor="pointer"
            >
              Instagram
            </a>
          </div>
        </div>

        {/* Nav Links: Workflow & FAQ */}
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

      {/* Massive Iconic Headline: Tech Marketer & Data Builder. Based in Bengaluru */}
      <div className="pt-16 pb-8">
        <h2 className="text-[clamp(2.6rem,10vw,9rem)] leading-[0.92] tracking-tighter font-semibold text-white">
          Tech marketer<br />
          &amp; <span className="font-serif italic font-normal text-[#d4ff4f]">data builder.</span><br />
          Based in Bengaluru.
        </h2>
      </div>

      {/* Bottom Row: Copyright & Back to Top */}
      <div className="flex justify-between items-center mt-16 pt-8 border-t border-[rgba(236,235,230,0.1)] font-mono text-xs uppercase tracking-wider text-[rgba(236,235,230,0.5)]">
        <span>© {new Date().getFullYear()} All rights reserved</span>
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
