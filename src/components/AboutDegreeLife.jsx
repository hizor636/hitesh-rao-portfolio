import React from 'react';
import { DEGREE_LIFE_MATRIX, PERSONAL_INFO } from '../data/portfolioData';
import { GraduationCap, BookOpen, Sparkles, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { getAssetUrl } from '../utils/assetPath';
import {
  GoogleLogo,
  PaytmLogo,
  MongoDBLogo,
  PrestoLogo,
  GeminiLogo,
  HackerRankLogo
} from './CompanyLogos';

export default function AboutDegreeLife({ onOpenContact }) {
  const highlights = [
    {
      title: "Google Student Ambassador at NCET",
      desc: "Selected per Google's selection email from 125,000+ applicants. Organized practical AI Sandboxes and cloud study circles for 500+ peers.",
      tag: "Community & Cloud"
    },
    {
      title: "VibeXathon 1.0 Pitcher",
      desc: "First-year team of four that validated and pitched CareerGroww (AI skill-gap analyzer) directly to tech founders and judges.",
      tag: "AI Prototyping"
    },
    {
      title: "Verified SQL & Problem-Solving",
      desc: "Solved 70+ SQL programs on Torii Minds with university leaderboard streak; earned HackerRank SQL Intermediate certificate.",
      tag: "Data Rigor"
    },
    {
      title: "Event Operations at Scale",
      desc: "Marketing Intern (Social & PR) at One97 Communications Limited (Paytm); core organizing teams for Paytm AI Hackathon, Bengaluru and Presto & Namma MUG Summit (800+ registrations, 189+ tech pros across Google, IBM, Amazon, Cisco, Airtel).",
      tag: "Operations"
    }
  ];

  return (
    <section id="about" className="relative px-5 md:px-10 py-24 md:py-32 max-w-7xl mx-auto z-10 border-b border-[rgba(236,235,230,0.14)] text-left">
      {/* Eyebrow */}
      <div className="rv flex items-center gap-3 mb-4">
        <span className="font-mono text-xs uppercase tracking-widest text-[#d4ff4f]">
          (About &amp; Degree Journey)
        </span>
        <span className="w-12 h-px bg-white/20" />
      </div>

      {/* Main Headline */}
      <h2 className="rv text-3xl sm:text-5xl md:text-6xl tracking-tighter font-medium text-white mb-6">
        Learning the fundamentals, <span className="font-serif italic font-normal text-[#d4ff4f]">using them early.</span>
      </h2>

      {/* Narrative Intro */}
      <div className="rv grid grid-cols-1 md:grid-cols-12 gap-8 text-[rgba(236,235,230,0.8)] text-base sm:text-lg leading-relaxed mb-16">
        <div className="md:col-span-6 space-y-4">
          <p>
            I’m <span className="font-sans font-bold text-white tracking-wide uppercase">Hitesh</span> <span className="font-serif italic font-normal text-[#d4ff4f] text-xl ml-1">Rao M</span>, a second-year BCA student at <strong className="text-white font-medium">Nagarjuna College of Engineering and Technology (NCET)</strong> in Bengaluru (<strong className="text-[#d4ff4f] font-mono">Current CGPA: 7.50</strong> · Class of 2028). I got into marketing through events and communities, then realised the best decisions come from data.
          </p>
          <p>
            So I study both: I write SQL and Python for my degree, and I apply them while running student communities, workshops, and hackathon operations.
          </p>
        </div>
        <div className="md:col-span-6 space-y-4">
          <p>
            Over the past year I’ve completed a 3-month corporate internship as Marketing Intern - Social & PR at One97 Communications Limited (Paytm), served as a Google Student Ambassador, helped coordinate city-scale developer summits, and pitched an AI skill-gap platform at a student hackathon.
          </p>
          <p>
            I’m early in my career, and I’m looking for internships where I can contribute, get feedback, and grow alongside an ambitious team.
          </p>
        </div>
      </div>

      {/* Degree Life Matrix: In Class vs Outside Class */}
      <div className="rv mb-16">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-[#d4ff4f]" />
            <h3 className="text-xl sm:text-2xl font-medium text-white tracking-tight">
              Classroom Foundations vs Real-World Application
            </h3>
          </div>

          {/* Institutional Academic Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-white/[0.04] border border-white/15 shadow-md">
            <div className="px-2 py-1 rounded-md bg-white shrink-0 shadow-xs">
              <img
                src={getAssetUrl("/assets/aistudio/image_098a23c4.png")}
                alt="Nagarjuna College of Engineering & Technology (NCET)"
                className="h-8 w-auto object-contain"
              />
            </div>
            <div>
              <span className="font-mono text-xs font-semibold text-white block">NCET Bengaluru</span>
              <span className="font-mono text-[11px] text-neutral-300">BCA 2028 · CGPA: <strong className="text-[#d4ff4f] font-semibold">7.50</strong></span>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto border border-white/10 rounded-2xl bg-white/[0.02]">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-xs font-mono uppercase tracking-widest text-neutral-400 bg-white/[0.02]">
                <th className="py-4 px-6 w-2/5 font-medium">In Class (NCET BCA Curriculum · Current CGPA: 7.50)</th>
                <th className="py-4 px-6 w-3/5 font-medium text-[#d4ff4f]">Outside Class (Shipping Real Work)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-sm sm:text-base">
              {DEGREE_LIFE_MATRIX.map((row, idx) => (
                <tr key={idx} className="interactive-row hover:bg-white/[0.04] transition-all">
                  <td className="py-4 px-6 text-white font-medium flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0" />
                    {row.inClass}
                  </td>
                  <td className="py-4 px-6 text-[rgba(236,235,230,0.85)]">
                    {row.outsideClass}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Beyond the Classroom Highlights */}
      <div className="rv">
        <div className="flex items-center gap-2 mb-6">
          <BookOpen className="w-5 h-5 text-[#d4ff4f]" />
          <h3 className="text-xl sm:text-2xl font-medium text-white tracking-tight">
            Beyond the Classroom Highlights
          </h3>
        </div>

        <div className="rv-stagger grid grid-cols-1 md:grid-cols-2 gap-4">
          {highlights.map((h, i) => {
            const getHighlightLogo = (index) => {
              switch (index) {
                case 0:
                  return <GoogleLogo size="sm" />;
                case 1:
                  return <GeminiLogo size="sm" />;
                case 2:
                  return <HackerRankLogo size="sm" />;
                case 3:
                  return (
                    <div className="inline-flex items-center gap-1.5">
                      <PaytmLogo size="xs" />
                      <PrestoLogo size="xs" />
                    </div>
                  );
                default:
                  return null;
              }
            };

            return (
              <div
                key={i}
                className="interactive-card p-6 rounded-2xl border border-white/10 bg-white/[0.015] hover:bg-white/[0.03] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="p-1 rounded-md bg-white/[0.05] border border-white/10">
                        {getHighlightLogo(i)}
                      </span>
                      <span className="font-mono text-xs uppercase tracking-wider text-[#d4ff4f] px-2.5 py-0.5 rounded-full bg-[#d4ff4f]/10 border border-[#d4ff4f]/20">
                        {h.tag}
                      </span>
                    </div>
                    <CheckCircle2 className="w-4 h-4 text-white/40" />
                  </div>
                  <h4 className="text-lg font-medium text-white mb-2">{h.title}</h4>
                  <p className="text-sm text-[rgba(236,235,230,0.7)] leading-relaxed">{h.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
