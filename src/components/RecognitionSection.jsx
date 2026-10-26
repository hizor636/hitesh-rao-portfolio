import React, { useState } from 'react';
import { Briefcase, Award, ExternalLink, Calendar, CheckCircle } from 'lucide-react';
import { SUPPORTING_CREDENTIALS } from '../data/portfolioData';

const TIMELINE_EXPERIENCE = [
  {
    period: "Jun – Oct 2026",
    role: "Marketing Intern & Core Organising Team",
    org: "Paytm Bengaluru Hackathon",
    type: "Internship & Operations",
    contribution: "Supported national brand campaign framework, managed collegiate partner outreach across Karnataka universities, and handled attendee verification operations under enterprise privacy standards.",
    scale: "Event Scale: 800+ registrations · Personal post impressions: 8,261+",
    proofText: "Post verification ↗",
    proofUrl: "https://www.linkedin.com/in/hitesh-rao-m-593775358/"
  },
  {
    period: "May – Oct 2026",
    role: "Google Student Ambassador",
    org: "NCET Bengaluru",
    type: "Campus Leadership",
    contribution: "Selected per Google's selection notification from 125,000+ applicants nationwide. Organized AI Sandboxes, Gemini technical talks, and cloud study circles for 500+ peers.",
    scale: "500+ student peers guided · 125,000+ national applicant pool",
    proofText: "Selection email verified ↗",
    proofUrl: "https://www.linkedin.com/in/hitesh-rao-m-593775358/"
  },
  {
    period: "Oct 2026",
    role: "Core Organising Team (Bengaluru)",
    org: "Build with Presto & Namma MUG",
    type: "DevRel & Conference Ops",
    contribution: "Coordinated attendee ingress, MongoDB and Google partner sponsor booths, green-room speaker transitions, and resolved track-2 AV downtime in under 3 minutes.",
    scale: "Event Scale: 800+ registrations, 189+ industry professionals",
    proofText: "Conference Page ↗",
    proofUrl: "https://www.linkedin.com/in/hitesh-rao-m-593775358/"
  },
  {
    period: "Mar 2026",
    role: "Team of Four Participant & Pitcher",
    org: "CareerGroww @ VibeXathon 1.0",
    type: "AI Prototyping",
    contribution: "Formulated the problem architecture, chained Gemini prompts to parse job requirements against skill vectors, and pitched the prototype live on stage to the judging panel.",
    scale: "Competed as 1st-year team against senior undergraduates · 4,566+ post reach",
    proofText: "Pitch summary ↗",
    proofUrl: "https://www.linkedin.com/in/hitesh-rao-m-593775358/"
  },
  {
    period: "Mar – May 2026",
    role: "Operations Team Member",
    org: "KCET Coaching Centre, Bengaluru",
    type: "Operations & Administration",
    contribution: "Managed grassroots student applicant intake, processed admissions rosters, and executed structured parent/candidate follow-ups during peak examination admissions.",
    scale: "Supported admissions cycle & candidate communications",
    proofText: "Role record ↗",
    proofUrl: "https://www.linkedin.com/in/hitesh-rao-m-593775358/"
  },
  {
    period: "Feb – Apr 2026",
    role: "Data Analytics Simulation Participant",
    org: "Deloitte Australia (via Forage)",
    type: "Simulation & Modeling",
    contribution: "Completed practical analytics modules analyzing pay-equality statistical distribution modeling, forensic spreadsheet audit, and demographic segmentation.",
    scale: "Verified simulation completion",
    proofText: "Certificate ↗",
    proofUrl: "https://www.theforage.com/"
  },
  {
    period: "Apr 2026",
    role: "Gemini Certified Student",
    org: "Google for Education",
    type: "Certification",
    contribution: "Official credential verifying applied proficiency with generative prompt architectures, multi-turn AI interactions, and Google cloud workspace intelligence.",
    scale: "Official Google certification",
    proofText: "Credential ↗",
    proofUrl: "https://edu.google.com/"
  },
  {
    period: "Oct – Nov 2025",
    role: "SQL 70+ Sprints & HackerRank Intermediate",
    org: "Torii Minds & HackerRank",
    type: "Data Foundations",
    contribution: "Solved 70+ SQL relational query problems covering complex joins, aggregations, and subqueries; maintained campus weekly leaderboard streak.",
    scale: "70+ solved programs · HackerRank SQL Intermediate verified",
    proofText: "HackerRank verified ↗",
    proofUrl: "https://www.hackerrank.com/"
  }
];

export default function RecognitionSection() {
  const [filterType, setFilterType] = useState('ALL');

  const types = ['ALL', 'Internship & Operations', 'Campus Leadership', 'DevRel & Conference Ops', 'Certification', 'Data Foundations'];

  const filteredItems = filterType === 'ALL'
    ? TIMELINE_EXPERIENCE
    : TIMELINE_EXPERIENCE.filter((item) => item.type === filterType || (filterType === 'Certification' && (item.type === 'Simulation & Modeling' || item.type === 'Certification')));

  return (
    <section id="experience" className="relative px-5 md:px-10 py-24 md:py-32 max-w-7xl mx-auto z-10 border-b border-[rgba(236,235,230,0.14)] text-left">
      {/* Header */}
      <div className="rv flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-white/10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#d4ff4f]">
              (Experience &amp; Credentials)
            </span>
            <span className="w-12 h-px bg-white/20" />
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl tracking-tighter font-medium text-white">
            Compact experience <span className="font-serif italic font-normal text-[#d4ff4f]">ledger.</span>
          </h2>
          <p className="text-sm sm:text-base text-[rgba(236,235,230,0.7)] mt-3 max-w-2xl">
            Every role, campaign, and simulation backed by official records, verifiable proof links, and transparent distinctions between event scale and personal contributions.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 text-xs font-mono">
          {types.map((t) => (
            <button
              key={t}
              onClick={() => setFilterType(t)}
              className={`px-3 py-1.5 rounded-full border transition-all ${
                filterType === t
                  ? 'bg-white text-black border-white font-medium'
                  : 'bg-white/[0.02] text-neutral-400 border-white/10 hover:border-white/30 hover:text-white'
              }`}
              data-cursor="pointer"
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Ledger Table */}
      <div id="credentials" className="rv mt-10 overflow-x-auto scroll-mt-24">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-white/10 text-xs font-mono uppercase tracking-widest text-neutral-400 bg-white/[0.02]">
              <th className="py-4 px-4 w-32 font-medium">Dates</th>
              <th className="py-4 px-4 font-medium">Role &amp; Organization</th>
              <th className="py-4 px-4 font-medium hidden md:table-cell">Contribution &amp; Scope</th>
              <th className="py-4 px-4 font-medium text-right">Proof</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 font-sans">
            {filteredItems.map((item, idx) => (
              <tr key={idx} className="interactive-row hover:bg-white/[0.04] transition-all group">
                {/* Dates */}
                <td className="py-5 px-4 font-mono text-xs text-neutral-400 whitespace-nowrap align-top">
                  {item.period}
                </td>

                {/* Role & Org */}
                <td className="py-5 px-4 align-top">
                  <div className="font-semibold text-white group-hover:text-[#d4ff4f] transition-colors text-base">
                    {item.role}
                  </div>
                  <div className="text-xs text-[rgba(236,235,230,0.6)] font-mono mt-0.5">
                    {item.org}
                  </div>
                  <div className="md:hidden text-xs text-[rgba(236,235,230,0.7)] mt-2">
                    {item.contribution}
                  </div>
                </td>

                {/* Contribution */}
                <td className="py-5 px-4 align-top hidden md:table-cell">
                  <p className="text-sm text-[rgba(236,235,230,0.8)] leading-relaxed">
                    {item.contribution}
                  </p>
                  <p className="text-xs font-mono text-[#d4ff4f]/80 mt-1">
                    {item.scale}
                  </p>
                </td>

                {/* Proof Link Chip */}
                <td className="py-5 px-4 align-top text-right whitespace-nowrap">
                  <a
                    href={item.proofUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-[#d4ff4f] bg-[#d4ff4f]/10 border border-[#d4ff4f]/25 hover:bg-[#d4ff4f]/20 hover:border-[#d4ff4f]/50 transition-all"
                    data-cursor="pointer"
                  >
                    <span>{item.proofText}</span>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
