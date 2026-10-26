import React, { useState, useEffect } from 'react';
import { X, CheckCircle, ShieldCheck, Building2, Mail, Globe, MapPin, Phone, Printer, Copy, Check } from 'lucide-react';
import { PaytmLogo } from './CompanyLogos';

export default function PaytmCertificateModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

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
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const certificateText = `ONE97 COMMUNICATIONS LIMITED (PAYTM)
TRAINING COMPLETION CERTIFICATE

TO WHOMSOEVER IT MAY CONCERN

This is to certify that Hitesh Rao M has completed his/her training at One97 Communications Limited from 07-07-2026 to 07-10-2026 and worked on project in Social & PR - Public Relations.

Best Wishes,
Aparna Srivastava
Vice President
One97 Communications Limited

Corporate Office: One Skymark, Floor No. 6th to 22nd, Tower-D, Plot No. H-10B, Sector-98, Noida-201304
T: +91 120 4770770 | F: +91 120 4770771
CIN: L72200DL2000PLC108985
Registered Office: 136, First Floor, Devika Tower, Nehru Place, New Delhi-110019
Contact: compliance.officer@paytm.com | www.paytm.com`;

  const copyDetails = () => {
    navigator.clipboard.writeText(certificateText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[var(--modal-backdrop)] backdrop-blur-md animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="One97 Communications Limited Certificate Document"
    >
      <div
        className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-2xl bg-[var(--modal-bg)] border border-[var(--modal-border)] text-[var(--text-primary)] shadow-[0_25px_70px_rgba(0,0,0,0.18)] dark:shadow-[0_25px_70px_rgba(0,0,0,0.85)] p-5 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Action Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-black/10 dark:border-white/10 mb-6">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 font-mono text-xs font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>OFFICIAL CORPORATE CERTIFICATE</span>
            </span>
            <span className="hidden sm:inline-block font-mono text-xs text-neutral-600 dark:text-neutral-400">
              Social & PR Department
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={copyDetails}
              className="px-3 py-1.5 rounded-lg bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 border border-black/10 dark:border-white/10 text-xs font-mono text-neutral-800 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors flex items-center gap-1.5"
              title="Copy certificate text"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
            <button
              onClick={handlePrint}
              className="hidden sm:flex px-3 py-1.5 rounded-lg bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 border border-black/10 dark:border-white/10 text-xs font-mono text-neutral-800 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors items-center gap-1.5"
              title="Print certificate"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-black/5 dark:bg-white/5 hover:bg-black/15 dark:hover:bg-white/15 border border-black/10 dark:border-white/10 text-neutral-700 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
              aria-label="Close certificate dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Authentic Certificate Container (Letterhead Style) */}
        <div className="relative p-6 sm:p-10 rounded-xl bg-gradient-to-b from-white to-slate-50 dark:from-[#141923] dark:to-[#0c0f16] border border-cyan-500/30 dark:border-cyan-500/25 shadow-sm dark:shadow-inner space-y-6 text-neutral-900 dark:text-neutral-100">
          {/* Subtle Watermark Backdrop */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-[0.03] dark:opacity-[0.03] overflow-hidden">
            <PaytmLogo size="xl" variant="transparent" className="scale-[4]" />
          </div>

          {/* Letterhead Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-black/10 dark:border-white/10">
            <div>
              <div className="flex items-center gap-3">
                <PaytmLogo size="lg" variant="badge" />
                <div>
                  <h3 className="text-lg sm:text-xl font-bold tracking-tight text-neutral-900 dark:text-white font-sans">
                    One97 Communications Limited
                  </h3>
                  <p className="font-mono text-[11px] text-[#008db8] dark:text-[#00baf2] tracking-wider uppercase font-semibold">
                    Paytm · Corporate Marketing &amp; PR
                  </p>
                </div>
              </div>
            </div>

            <div className="text-left sm:text-right font-mono text-[11px] text-neutral-600 dark:text-neutral-400 space-y-0.5">
              <p><span className="text-neutral-500">Department:</span> <strong className="text-cyan-700 dark:text-cyan-300 font-semibold">Social &amp; PR</strong></p>
              <p><span className="text-neutral-500">Duration:</span> <span className="text-neutral-900 dark:text-white font-medium">07-07-2026 to 07-10-2026</span></p>
              <p><span className="text-neutral-500">CIN:</span> L72200DL2000PLC108985</p>
            </div>
          </div>

          {/* Certificate Title */}
          <div className="text-center pt-2 pb-2">
            <p className="font-mono text-xs sm:text-sm tracking-[0.25em] uppercase text-neutral-600 dark:text-neutral-400 font-bold">
              TO WHOMSOEVER IT MAY CONCERN
            </p>
          </div>

          {/* Certificate Body Paragraph */}
          <div className="text-neutral-800 dark:text-neutral-200 text-sm sm:text-base leading-relaxed space-y-4 px-1 sm:px-4 font-sans">
            <p>
              This is to certify that <strong className="text-neutral-900 dark:text-white font-bold underline decoration-[#008db8] dark:decoration-[#00baf2] decoration-2 underline-offset-4">Hitesh Rao M</strong> has completed his/her training at <strong className="text-neutral-900 dark:text-white font-semibold">One97 Communications Limited</strong> from <strong className="text-neutral-900 dark:text-white font-semibold">07-07-2026 to 07-10-2026</strong> and worked on project in <strong className="text-[#008db8] dark:text-[#00baf2] font-semibold">Social &amp; PR - Public Relations</strong>.
            </p>
          </div>

          {/* Signatory Box */}
          <div className="pt-8 sm:pt-10 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 px-1 sm:px-4">
            <div className="space-y-1">
              <p className="font-mono text-xs text-neutral-500 dark:text-neutral-400 uppercase tracking-wider font-semibold">Best Wishes,</p>
              <div className="pt-2">
                <p className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white font-sans tracking-tight">
                  Aparna Srivastava
                </p>
                <p className="text-xs sm:text-sm text-cyan-700 dark:text-cyan-400 font-semibold">
                  Vice President
                </p>
                <p className="text-xs text-neutral-600 dark:text-neutral-400">
                  One97 Communications Limited
                </p>
              </div>
            </div>

            {/* Official Verification Seal Stamp */}
            <div className="flex items-center gap-3 p-3 rounded-xl bg-black/[0.03] dark:bg-white/[0.03] border border-cyan-500/30 dark:border-cyan-500/20 backdrop-blur-xs">
              <div className="w-10 h-10 rounded-full bg-cyan-500/10 border border-cyan-500/40 flex items-center justify-center shrink-0">
                <CheckCircle className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
              </div>
              <div className="text-left font-mono text-[11px] leading-tight text-neutral-700 dark:text-neutral-300">
                <p className="text-neutral-900 dark:text-white font-bold">AUTHENTIC RECORD</p>
                <p className="text-cyan-700 dark:text-cyan-300/80 font-medium">Paytm / One97 Corporate</p>
                <p className="text-[10px] text-neutral-500 dark:text-neutral-400">Social & PR · 3-Mo Term</p>
              </div>
            </div>
          </div>

          {/* Corporate Footer Information */}
          <div className="pt-6 border-t border-black/10 dark:border-white/10 text-[11px] font-mono text-neutral-600 dark:text-neutral-400 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <p className="text-neutral-800 dark:text-neutral-300 font-semibold flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                <span>Corporate Office</span>
              </p>
              <p className="leading-tight text-neutral-600 dark:text-neutral-400">
                One Skymark, Floor No. 6th to 22nd, Tower-D, Plot No. H-10B, Sector-98, Noida-201304
              </p>
              <p className="text-[10px] text-neutral-500 flex items-center gap-2 pt-0.5">
                <span>T: +91 120 4770770</span>
                <span>•</span>
                <span>F: +91 120 4770771</span>
              </p>
            </div>

            <div className="space-y-1 md:text-right">
              <p className="text-neutral-800 dark:text-neutral-300 font-semibold flex items-center gap-1.5 md:justify-end">
                <MapPin className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                <span>Registered Office</span>
              </p>
              <p className="leading-tight text-neutral-600 dark:text-neutral-400">
                136, First Floor, Devika Tower, Nehru Place, New Delhi-110019
              </p>
              <div className="pt-1 flex flex-wrap items-center gap-3 md:justify-end text-[10px] text-[#008db8] dark:text-cyan-400 font-medium">
                <a href="mailto:compliance.officer@paytm.com" className="hover:underline flex items-center gap-1">
                  <Mail className="w-3 h-3" />
                  <span>compliance.officer@paytm.com</span>
                </a>
                <span>•</span>
                <a href="https://www.paytm.com" target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                  <Globe className="w-3 h-3" />
                  <span>www.paytm.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-4 text-center font-mono text-[11px] text-neutral-600 dark:text-neutral-400">
          This record verifies Hitesh Rao M's corporate internship at One97 Communications Limited (Paytm) in Social &amp; PR - Public Relations.
        </div>
      </div>
    </div>
  );
}
