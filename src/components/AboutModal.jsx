import React, { useEffect } from 'react';
import { X, ArrowUpRight, Award, Compass, Cpu, Database, Terminal, Shield, GraduationCap, Briefcase } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import LogoVisual from './LogoVisual';

export default function AboutModal({ isOpen, onClose, onOpenContact }) {
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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-300">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0b0b0e] border border-white/15 rounded-3xl shadow-2xl my-auto text-white">
        {/* Sticky Header */}
        <div className="sticky top-0 z-30 flex items-center justify-between px-6 py-4 bg-[#0b0b0e]/95 backdrop-blur-md border-b border-white/10">
          <div className="flex items-center gap-3 font-mono-tech text-xs">
            <LogoVisual size="sm" interactive={false} />
            <span className="text-white font-bold">HITESH RAO M</span>
            <span className="text-neutral-500">•</span>
            <span className="text-[#d4ff4f]">ACADEMIC & INDUSTRY PROFILE</span>
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
        <div className="p-6 md:p-12 space-y-12">
          {/* Top Headline */}
          <div className="space-y-4">
            <span className="text-xs font-mono-tech uppercase tracking-[0.25em] text-[#d4ff4f]">
              TECH MARKETING • ANALYTICS • COMMUNITY
            </span>
            <h2 className="font-sans font-medium text-[clamp(1.8rem,4vw,2.5rem)] leading-[1.1] tracking-[-0.03em] text-white">
              Consistent improvement. Turning achievements into compounding momentum.
            </h2>
          </div>

          {/* Biography Narrative */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-[rgba(236,235,230,0.8)] font-sans font-normal leading-[1.6] text-[1rem]">
            <div className="md:col-span-6 space-y-4">
              <p>
                My name is <strong className="text-white font-medium">Hitesh Rao M</strong>. I am currently pursuing a Bachelor of Computer Applications (BCA, Class of 2028) at Nagarjuna College of Engineering and Technology (NCET) in Bengaluru.
              </p>
              <p>
                Rather than staying confined to theory, I have actively immersed myself in high-stakes campus programs and developer ecosystems. Selected from over 125,000 applicants across India as a <strong className="text-[#d4ff4f] font-medium">Google Student Ambassador</strong>, I lead peer workshops, developer initiatives, and Google certification study circles.
              </p>
            </div>
            <div className="md:col-span-6 space-y-4">
              <p>
                At <strong className="text-[#00baf2] font-medium">Paytm (One97 Communications)</strong>, I served on the core organizing team for the flagship Bengaluru Hackathon, managing inter-collegiate outreach and campus ambassador pipelines while adhering to rigorous corporate security and data standards.
              </p>
              <p>
                Complementing my marketing execution is deep database discipline: having solved 70+ SQL programs on Torii Minds (holding the #1 university leaderboard streak), earned the HackerRank SQL Intermediate credential, and verified enterprise business intelligence with Deloitte Australia.
              </p>
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="pt-6 border-t border-white/10 space-y-4">
            <div className="flex items-center gap-2 font-mono-tech text-xs uppercase tracking-widest text-[#d4ff4f]">
              <Briefcase className="w-4 h-4" />
              <span>EXPERIENCE & LEADERSHIP ROLES</span>
            </div>
            <div className="space-y-3">
              {[
                { role: 'Marketing Intern & Campus Ambassador', org: 'Paytm (One97 Communications)', term: 'Jun – Oct 2026', desc: 'Core organizing team for flagship Bengaluru Hackathon; coordinated college partnerships and brand campaigns.' },
                { role: 'Google Student Ambassador', org: 'Google India Campus Cohort', term: 'May – Oct 2026', desc: 'Selected from 125,000+ applicants; organized tech talks and guided students to Cloud/AI certifications.' },
                { role: 'Conference Organizing Team', org: 'Presto & Namma MUG (MongoDB User Group)', term: 'Oct 2026', desc: 'Coordinated city-wide developer gathering with 800+ registrations and 189+ industry professionals.' },
                { role: 'Operations Team Member', org: 'KCET Coaching Centre (MIT)', term: 'Mar – May 2026', desc: 'Managed student intake, applicant onboarding, structured follow-ups, and process improvements.' },
                { role: 'BCA (Bachelor of Computer Applications)', org: 'Nagarjuna College of Engineering & Technology', term: '2025 – 2028', desc: 'Class of 2028; specializing in computer applications, databases, programming, and cloud technologies.' }
              ].map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl border border-white/5 bg-white/[0.015] flex flex-col md:flex-row md:items-center justify-between gap-2">
                  <div>
                    <span className="text-sm font-semibold text-white">{item.role}</span>
                    <span className="text-xs text-[#d4ff4f] ml-2">@ {item.org}</span>
                    <p className="text-xs text-neutral-400 mt-1">{item.desc}</p>
                  </div>
                  <span className="font-mono-tech text-xs text-neutral-500 whitespace-nowrap">{item.term}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Toolkit Archive */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4">
            <div className="flex items-center gap-2 font-mono-tech text-xs uppercase tracking-widest text-neutral-400">
              <Terminal className="w-4 h-4 text-[#d4ff4f]" />
              <span>TECHNICAL ARSENAL & CREDENTIALS</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono-tech text-neutral-300">
              <div className="flex flex-col">
                <span className="text-white font-medium">LANGUAGES</span>
                <span className="text-neutral-500">SQL, Python, C</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-medium">CLOUD & AI</span>
                <span className="text-neutral-500">Google Cloud, Gemini AI</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-medium">VERIFIED BADGES</span>
                <span className="text-neutral-500">HackerRank, Deloitte, Cisco</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-medium">MARKETING / DEVREL</span>
                <span className="text-neutral-500">Eventbrite, LinkedIn, Discord</span>
              </div>
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="font-mono-tech text-xs text-neutral-500">
              BENGALURU, INDIA // OPEN FOR HYBRID & ON-SITE ROLES
            </span>

            <button
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="px-6 py-3 rounded-full bg-[#d4ff4f] text-black font-mono-tech text-xs font-bold uppercase tracking-wider hover:bg-white transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(212,255,79,0.3)]"
              data-cursor="pointer"
            >
              <span>Initiate Conversation</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
