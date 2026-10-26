import React, { useState } from 'react';
import { Briefcase, Award, ExternalLink, Calendar, CheckCircle } from 'lucide-react';
import { SUPPORTING_CREDENTIALS } from '../data/portfolioData';
import PaytmCertificateModal from './PaytmCertificateModal.jsx';
import {
  GoogleLogo,
  PaytmLogo,
  MongoDBLogo,
  PrestoLogo,
  DeloitteLogo,
  GeminiLogo,
  HackerRankLogo,
  CiscoLogo,
  NCETLogo
} from './CompanyLogos';

const TIMELINE_EXPERIENCE = [
  {
    period: "2024 – 2028 (Present)",
    role: "Bachelor of Computer Applications (BCA)",
    org: "NCET Bengaluru (Nagarjuna College of Engineering & Technology)",
    type: "Data Foundations",
    contribution: "Undergraduate computer applications curriculum focusing on relational databases (SQL), Python scripting, data structures, and algorithmic logic.",
    scale: "Current CGPA: 7.50 · BCA Class of 2028",
    proofText: "BCA, NCET ↗",
    proofUrl: "https://ncet.co.in/"
  },
  {
    period: "07-07-2026 to 07-10-2026",
    role: "Marketing Intern – Social & PR (Public Relations)",
    org: "One97 Communications Limited (Paytm)",
    type: "Internship & Operations",
    contribution: "Completed 3-month corporate training (Trainee Code: T5113) certified by Vice President Aparna Srivastava. Worked on Social & PR projects, public relations releases, corporate communications, and supported participant operations at the Paytm AI Hackathon in Bengaluru.",
    scale: "Trainee Code: T5113 · Certified by VP Aparna Srivastava · One97 Communications",
    proofText: "Certificate Letter ↗",
    proofUrl: "#paytm-certificate",
    isPaytmCertificate: true
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
    contribution: "Core organizing team alongside Gagandeep, Reyhana Shafi, Apoorva Mudabagil, Sanjana Patil, Suman Mandal, and lead Alok Kumar. Coordinated attendee reception, speaker green-room prep, partner booths (MongoDB, Google for Developers, IBM), and rapid AV resolution for 189+ tech professionals.",
    scale: "800+ registrations · 189+ tech pros (Google, IBM, TCS, Amazon, Cisco, Salesforce, Airtel)",
    proofText: "Conference Page ↗",
    proofUrl: "https://www.linkedin.com/in/hitesh-rao-m-593775358/"
  },
  {
    period: "Mar 2026",
    role: "Team of Four Participant & Pitcher",
    org: "CareerGroww @ VibeXathon 1.0",
    type: "AI Prototyping",
    contribution: "Formulated the problem architecture, chained Gemini prompts to parse job requirements against skill vectors, and pitched the prototype live on stage to the judging panel.",
    scale: "36-hr AI sprint · Competed as 1st-year team against senior undergraduates",
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
  const [isPaytmModalOpen, setIsPaytmModalOpen] = useState(false);
  const [filterType, setFilterType] = useState('ALL');

  const types = ['ALL', 'Internship & Operations', 'Campus Leadership', 'DevRel & Conference Ops', 'Certification', 'Data Foundations'];

  const filteredItems = filterType === 'ALL'
    ? TIMELINE_EXPERIENCE
    : TIMELINE_EXPERIENCE.filter((item) => item.type === filterType || (filterType === 'Certification' && (item.type === 'Simulation & Modeling' || item.type === 'Certification')));

  const getOrgLogo = (org = '', role = '') => {
    if (org.includes('NCET') || org.includes('Nagarjuna')) return <NCETLogo size="xs" />;
    if (org.includes('Paytm')) return <PaytmLogo size="xs" />;
    if (role.includes('Google') || org.includes('Google for Education')) return <GoogleLogo size="xs" />;
    if (org.includes('Presto') || org.includes('MUG')) {
      return (
        <span className="inline-flex items-center gap-1">
          <PrestoLogo size="xs" />
          <MongoDBLogo size="xs" />
        </span>
      );
    }
    if (org.includes('Deloitte')) return <DeloitteLogo size="xs" />;
    if (role.includes('Gemini')) return <GeminiLogo size="xs" />;
    if (org.includes('HackerRank') || role.includes('HackerRank')) return <HackerRankLogo size="xs" />;
    if (org.includes('Cisco') || role.includes('Cisco')) return <CiscoLogo size="xs" />;
    return null;
  };

  return (
    <section id="credentials-ledger" className="relative px-5 md:px-10 py-24 md:py-32 max-w-7xl mx-auto z-10 border-b border-[rgba(236,235,230,0.14)] text-left">
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
            {filteredItems.map((item, idx) => {
              const orgLogo = getOrgLogo(item.org, item.role);
              return (
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
                    <div className="flex items-center gap-2 text-xs text-[rgba(236,235,230,0.7)] font-mono mt-1">
                      {orgLogo && (
                        <span className="shrink-0 p-1 rounded-md bg-white/[0.05] border border-white/10">
                          {orgLogo}
                        </span>
                      )}
                      <span>{item.org}</span>
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
                  {item.isPaytmCertificate || item.proofUrl === "#paytm-certificate" ? (
                    <button
                      type="button"
                      onClick={() => setIsPaytmModalOpen(true)}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-[#00baf2] bg-[#00baf2]/10 border border-[#00baf2]/30 hover:bg-[#00baf2]/20 hover:border-[#00baf2]/60 transition-all cursor-pointer font-semibold shadow-xs"
                      data-cursor="pointer"
                    >
                      <span>{item.proofText}</span>
                    </button>
                  ) : (
                    <a
                      href={item.proofUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-[#d4ff4f] bg-[#d4ff4f]/10 border border-[#d4ff4f]/25 hover:bg-[#d4ff4f]/20 hover:border-[#d4ff4f]/50 transition-all"
                      data-cursor="pointer"
                    >
                      <span>{item.proofText}</span>
                    </a>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
        </table>
      </div>
      {/* One97 Communications Limited Certificate Modal */}
      <PaytmCertificateModal isOpen={isPaytmModalOpen} onClose={() => setIsPaytmModalOpen(false)} />
    </section>
  );
}
