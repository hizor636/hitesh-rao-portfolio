import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, Sparkles, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';
import LogoVisual from './LogoVisual';

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    roleType: 'Growth & Campus Marketing',
    availability: 'Immediate (Within 2 wks)',
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ffffff', '#d4ff4f', '#00baf2', '#10b981']
      });
    } catch (err) {
      // ignore
    }

    // Also trigger mailto with prepopulated body
    const subject = encodeURIComponent(`Growth & Data Opportunity: ${formData.name} (${formData.company || 'Team'})`);
    const body = encodeURIComponent(`Hi Hitesh,\n\nI came across your portfolio.\nRole Category: ${formData.roleType}\nTimeline: ${formData.availability}\n\nMessage:\n${formData.message}\n\nBest,\n${formData.name}\n${formData.email}`);
    window.open(`mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`, '_blank');
  };

  const roleTypes = [
    'Growth & Campus Marketing',
    'Developer Relations & DevRel',
    'Data Analytics & SQL Lead',
    'Fintech Hackathon Ops'
  ];

  const availabilities = ['Immediate (Within 2 wks)', 'Summer 2026', 'Part-Time / Hybrid', 'Flexible'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-300">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#0b0b0e] border border-white/15 rounded-3xl shadow-2xl my-auto text-white">
        {/* Header */}
        <div className="sticky top-0 z-30 flex items-center justify-between px-6 py-4 bg-[#0b0b0e]/95 backdrop-blur-md border-b border-white/10">
          <div className="flex items-center gap-3 font-mono-tech text-xs">
            <LogoVisual size="sm" interactive={false} />
            <span className="text-white font-bold">HITESH RAO M</span>
            <span className="text-neutral-500">•</span>
            <span className="text-[#d4ff4f]">OPPORTUNITY INQUIRY</span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full border border-white/15 hover:border-white bg-white/5 hover:bg-white/15 transition-all text-white"
            data-cursor="pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-10">
          {submitted ? (
            <div className="py-12 flex flex-col items-center text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-[#d4ff4f]/20 border border-[#d4ff4f]/50 flex items-center justify-center text-[#d4ff4f]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-sans font-medium text-[1.5rem] tracking-[-0.03em] text-white">
                Message Initialized.
              </h3>
              <p className="text-[1rem] font-sans font-normal text-[rgba(236,235,230,0.8)] max-w-md leading-[1.6]">
                Thank you, {formData.name || 'Partner'}. Your default email client has been opened with your inquiry dispatched directly to <span className="text-[#d4ff4f] font-mono-tech">{PERSONAL_INFO.email}</span>. I respond to all opportunities promptly.
              </p>
              <div className="pt-4 font-mono-tech text-xs text-neutral-500">
                BENGALURU • NCET CAMPUS HUB
              </div>
              <button
                onClick={onClose}
                className="mt-6 px-8 py-3 rounded-full bg-[#d4ff4f] text-black font-mono-tech text-xs font-bold uppercase tracking-wider hover:bg-white transition-all"
                data-cursor="pointer"
              >
                Return to Portfolio
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <span className="text-xs font-mono-tech uppercase tracking-widest text-[#d4ff4f]">
                  EXPLORE INTERNSHIPS & COLLABORATIONS
                </span>
                <h3 className="text-[1.5rem] font-sans font-medium text-white tracking-[-0.03em] mt-1">
                  Start a Conversation
                </h3>
              </div>

              {/* Service Type Selection */}
              <div>
                <label className="block text-xs font-mono-tech uppercase tracking-widest text-neutral-400 mb-2">
                  01 // Focus Area / Role
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono-tech">
                  {roleTypes.map((type) => (
                    <button
                      type="button"
                      key={type}
                      onClick={() => setFormData({ ...formData, roleType: type })}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        formData.roleType === type
                          ? 'border-[#d4ff4f] bg-[#d4ff4f]/15 text-white font-medium'
                          : 'border-white/10 bg-white/[0.02] text-neutral-400 hover:border-white/30'
                      }`}
                      data-cursor="pointer"
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Timeline / Availability */}
              <div>
                <label className="block text-xs font-mono-tech uppercase tracking-widest text-neutral-400 mb-2">
                  02 // Timeline / Engagement
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono-tech">
                  {availabilities.map((b) => (
                    <button
                      type="button"
                      key={b}
                      onClick={() => setFormData({ ...formData, availability: b })}
                      className={`p-2.5 rounded-xl border text-center transition-all ${
                        formData.availability === b
                          ? 'border-[#d4ff4f] bg-[#d4ff4f]/15 text-white font-medium'
                          : 'border-white/10 bg-white/[0.02] text-neutral-400 hover:border-white/30'
                      }`}
                      data-cursor="pointer"
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono-tech uppercase tracking-widest text-neutral-400 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ananya Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-[#d4ff4f] focus:outline-hidden font-sans text-[1rem] text-white placeholder-neutral-600 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono-tech uppercase tracking-widest text-neutral-400 mb-1.5">
                    Your Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-[#d4ff4f] focus:outline-hidden font-sans text-[1rem] text-white placeholder-neutral-600 transition-colors"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-mono-tech uppercase tracking-widest text-neutral-400 mb-1.5">
                  Message / Role Overview
                </label>
                <textarea
                  rows="3"
                  placeholder="Share details regarding your team, campaign goals, or internship scope..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-[#d4ff4f] focus:outline-hidden font-sans text-[1rem] text-white placeholder-neutral-600 transition-colors resize-none"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-[11px] font-mono-tech text-neutral-500">
                  Direct dispatch to {PERSONAL_INFO.email}
                </span>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#d4ff4f] text-black font-mono-tech text-xs font-bold uppercase tracking-widest hover:bg-white transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(212,255,79,0.3)]"
                  data-cursor="pointer"
                >
                  <span>Dispatch Message</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
