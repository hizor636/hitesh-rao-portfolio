import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, Mail, Copy, Check, ExternalLink, MapPin, Calendar, Clock, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useContent } from '../context/ContentContext';
import LogoVisual from './LogoVisual';
import { BrandSignatureName, LinkedInLogo, GitHubLogo } from './CompanyLogos';

export default function ContactModal({ isOpen, onClose }) {
  const { personalInfo: contextInfo } = useContent();
  const info = contextInfo || PERSONAL_INFO;

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Internship & Collaboration Opportunity',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(info.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleDirectEmail = () => {
    window.location.href = `mailto:${info.email}?subject=${encodeURIComponent(formData.subject || info.emailSubject)}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#ffffff', '#d4ff4f', '#00baf2', '#10b981']
      });
    } catch (err) {
      // ignore
    }

    // Trigger mailto directly via window.location.href (never blocked by iframe popups)
    const emailSubject = encodeURIComponent(`Inquiry from ${formData.name || 'Visitor'}: ${formData.subject}`);
    const emailBody = encodeURIComponent(`Hi Hitesh,\n\n${formData.message}\n\nBest regards,\n${formData.name}\n${formData.email}`);
    
    setTimeout(() => {
      window.location.href = `mailto:${info.email}?subject=${emailSubject}&body=${emailBody}`;
    }, 400);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-[var(--modal-backdrop)] backdrop-blur-xl animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      <div className="relative w-full max-w-xl max-h-[92vh] overflow-y-auto bg-[var(--modal-bg)] border border-[var(--modal-border)] rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.2)] dark:shadow-[0_25px_70px_rgba(0,0,0,0.9)] my-auto text-[var(--text-primary)]">
        
        {/* Modal Header */}
        <div className="sticky top-0 z-30 flex items-center justify-between px-6 py-4 bg-[var(--modal-header-bg)] backdrop-blur-md border-b border-[var(--modal-border)]">
          <div className="flex items-center gap-3">
            <LogoVisual size="sm" interactive={false} />
            <div>
              <div className="flex items-center gap-2">
                <BrandSignatureName size="sm" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#16a34a] dark:bg-[#d4ff4f] animate-pulse" />
              </div>
              <span className="text-[10px] font-mono text-neutral-600 dark:text-neutral-400 block">
                Open to Internships &amp; Opportunities
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full border border-black/10 dark:border-white/15 hover:border-black/30 dark:hover:border-white bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/15 transition-all text-neutral-800 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-[#15803d] dark:focus:ring-[#d4ff4f]"
            data-cursor="pointer"
            aria-label="Close dialog"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Quick Connect Direct Channels */}
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#15803d] dark:text-[#d4ff4f] block mb-3 font-semibold">
              Direct Contact Channels
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Direct Email Card */}
              <div className="p-4 rounded-2xl border border-[var(--modal-card-border)] bg-[var(--modal-card-bg)] hover:border-black/20 dark:hover:border-white/20 transition-all flex flex-col justify-between shadow-xs">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2 text-neutral-900 dark:text-white font-medium text-sm">
                    <Mail className="w-4 h-4 text-[#15803d] dark:text-[#d4ff4f]" />
                    <span>Email</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#15803d] dark:text-[#81C995] bg-[#16a34a]/10 dark:bg-[#34A853]/15 px-2 py-0.5 rounded-full border border-[#16a34a]/30 dark:border-[#34A853]/30 font-semibold">
                    Direct
                  </span>
                </div>

                <div className="font-mono text-xs text-neutral-800 dark:text-neutral-300 break-all mb-3 select-all">
                  {info.email}
                </div>

                <div className="flex items-center gap-2 pt-2 border-t border-black/5 dark:border-white/5">
                  <button
                    onClick={handleCopyEmail}
                    className="flex-1 py-1.5 px-2.5 rounded-lg bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 text-xs font-mono text-neutral-800 dark:text-white flex items-center justify-center gap-1.5 transition-all"
                    data-cursor="pointer"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#15803d] dark:text-[#d4ff4f]" />
                        <span className="text-[#15803d] dark:text-[#d4ff4f] font-semibold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={handleDirectEmail}
                    className="flex-1 py-1.5 px-2.5 rounded-lg bg-[#15803d] hover:bg-[#166534] text-white dark:bg-[#d4ff4f] dark:hover:bg-white dark:text-black text-xs font-mono font-semibold flex items-center justify-center gap-1 transition-all shadow-xs"
                    data-cursor="pointer"
                  >
                    <span>Write</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </div>

              {/* LinkedIn Profile Card */}
              <a
                href={info.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl border border-[var(--modal-card-border)] bg-[var(--modal-card-bg)] hover:border-[#0077b5]/50 transition-all flex flex-col justify-between group shadow-xs"
                data-cursor="pointer"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2 text-neutral-900 dark:text-white font-medium text-sm">
                      <LinkedInLogo size="xs" />
                      <span>LinkedIn</span>
                    </div>
                    <span className="text-[10px] font-mono text-neutral-700 dark:text-neutral-400 bg-black/5 dark:bg-white/5 px-2 py-0.5 rounded-full border border-black/10 dark:border-white/10">
                      500+ Connections
                    </span>
                  </div>

                  <p className="text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed mb-3">
                    Hitesh Rao M · Tech Marketing &amp; Community · Paytm Intern · Google Student Ambassador
                  </p>
                </div>

                <div className="pt-2 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-xs font-mono text-[#0284c7] dark:text-[#00baf2] group-hover:text-black dark:group-hover:text-white transition-colors font-medium">
                  <span>View Full Profile</span>
                  <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </a>
            </div>

            {/* Availability & Location Strip */}
            <div className="mt-3 p-3 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-neutral-700 dark:text-neutral-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#15803d] dark:text-[#d4ff4f]" />
                <span>Bengaluru, Karnataka (On-site / Hybrid / Remote)</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#15803d] dark:text-[#d4ff4f]" />
                <span>Replies within 24 hours</span>
              </div>
            </div>
          </div>

          {/* Quick Message Form */}
          <div className="pt-4 border-t border-[var(--modal-border)]">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#15803d] dark:text-[#d4ff4f] block mb-2 font-semibold">
              Or Send a Quick Message
            </span>
            <p className="text-xs text-neutral-700 dark:text-neutral-400 mb-4">
              Leave your note and contact below — it prepares a direct email to Hitesh's inbox.
            </p>

            {submitted ? (
              <div className="py-8 px-6 rounded-2xl bg-[var(--modal-card-bg)] border border-[#16a34a]/30 dark:border-[#d4ff4f]/30 text-center space-y-4">
                <div className="w-12 h-12 mx-auto rounded-full bg-[#16a34a]/15 dark:bg-[#d4ff4f]/20 border border-[#16a34a]/40 dark:border-[#d4ff4f]/50 flex items-center justify-center text-[#15803d] dark:text-[#d4ff4f]">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-medium text-neutral-900 dark:text-white">
                  Message Dispatched!
                </h4>
                <p className="text-xs text-neutral-700 dark:text-neutral-300 max-w-sm mx-auto leading-relaxed">
                  Thank you, <strong className="text-neutral-900 dark:text-white">{formData.name || 'there'}</strong>. Your email client was triggered with your note directed to <strong className="text-[#15803d] dark:text-[#d4ff4f]">{info.email}</strong>.
                </p>
                <div className="pt-2">
                  <button
                    onClick={onClose}
                    className="px-6 py-2.5 rounded-full bg-[#15803d] dark:bg-[#d4ff4f] text-white dark:text-black font-mono text-xs font-semibold uppercase tracking-wider hover:bg-[#166534] dark:hover:bg-white transition-all shadow-md"
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-[var(--modal-label)] font-semibold mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alok or Sneha"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--modal-input-bg)] border border-[var(--modal-input-border)] focus:border-[#15803d] dark:focus:border-[#d4ff4f] focus:outline-hidden font-sans text-sm text-[var(--modal-input-text)] placeholder-[var(--modal-input-placeholder)] transition-colors shadow-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-[var(--modal-label)] font-semibold mb-1">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="yourname@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--modal-input-bg)] border border-[var(--modal-input-border)] focus:border-[#15803d] dark:focus:border-[#d4ff4f] focus:outline-hidden font-sans text-sm text-[var(--modal-input-text)] placeholder-[var(--modal-input-placeholder)] transition-colors shadow-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-[var(--modal-label)] font-semibold mb-1">
                    Subject / Role Opportunity
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Marketing Internship / Campus Operations / DevRel"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--modal-input-bg)] border border-[var(--modal-input-border)] focus:border-[#15803d] dark:focus:border-[#d4ff4f] focus:outline-hidden font-sans text-sm text-[var(--modal-input-text)] placeholder-[var(--modal-input-placeholder)] transition-colors shadow-xs"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-[var(--modal-label)] font-semibold mb-1">
                    Message *
                  </label>
                  <textarea
                    rows="3"
                    required
                    placeholder="Hi Hitesh, I would love to connect regarding..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--modal-input-bg)] border border-[var(--modal-input-border)] focus:border-[#15803d] dark:focus:border-[#d4ff4f] focus:outline-hidden font-sans text-sm text-[var(--modal-input-text)] placeholder-[var(--modal-input-placeholder)] transition-colors resize-none shadow-xs"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <span className="text-[11px] font-mono text-neutral-600 dark:text-neutral-400">
                    Direct dispatch to {info.email}
                  </span>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#15803d] hover:bg-[#166534] text-white dark:bg-[#d4ff4f] dark:text-black dark:hover:bg-white font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-[0_4px_16px_rgba(21,128,61,0.25)] dark:shadow-[0_0_20px_rgba(212,255,79,0.3)] hover:scale-105 active:scale-95"
                    data-cursor="pointer"
                  >
                    <span>Send Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
