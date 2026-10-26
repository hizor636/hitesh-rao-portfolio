import React, { useState } from 'react';
import { Award, ExternalLink, Trophy, Star } from 'lucide-react';
import { AWARDS_LIST } from '../data/portfolioData';

export default function RecognitionSection() {
  const [filterOrg, setFilterOrg] = useState('ALL');

  const orgs = ['ALL', 'Awwwards', 'FWA', 'CSS Design Awards', 'Red Dot Design Award'];

  const filteredAwards = filterOrg === 'ALL'
    ? AWARDS_LIST
    : AWARDS_LIST.filter((a) => a.org === filterOrg);

  return (
    <section id="awards" className="relative py-28 md:py-36 px-4 md:px-8 max-w-7xl mx-auto z-10 border-b border-white/10">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono-tech text-xs tracking-widest text-neutral-500 uppercase">
              [05 // ARCHIVE OF HONORS]
            </span>
            <span className="w-12 h-px bg-white/20" />
          </div>
          <h2 className="font-sans font-medium text-[clamp(2.2rem,6vw,4.5rem)] leading-[1.05] tracking-[-0.03em] text-white">
            Accolades & Jury Press
          </h2>
        </div>

        {/* Filter Badges */}
        <div className="flex flex-wrap gap-2 text-xs font-sans">
          {orgs.map((org) => (
            <button
              key={org}
              onClick={() => setFilterOrg(org)}
              className={`px-3 py-1.5 rounded-full border transition-all duration-300 font-medium ${
                filterOrg === org
                  ? 'bg-white text-black border-white'
                  : 'bg-white/[0.02] text-neutral-400 border-white/10 hover:border-white/30 hover:text-white'
              }`}
              data-cursor="pointer"
            >
              {org}
            </button>
          ))}
        </div>
      </div>

      {/* Awards Ledger Table */}
      <div className="mt-12 overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-white/15 text-[11px] font-mono-tech tracking-widest text-neutral-400 uppercase">
              <th className="py-4 font-normal">YEAR</th>
              <th className="py-4 font-normal">AWARD / RECOGNITION</th>
              <th className="py-4 font-normal">HONORED PROJECT</th>
              <th className="py-4 font-normal">INSTITUTION</th>
              <th className="py-4 font-normal text-right">DISCIPLINE</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 font-sans">
            {filteredAwards.map((item, idx) => (
              <tr
                key={idx}
                className="group hover:bg-white/[0.03] transition-colors"
                data-cursor="pointer"
              >
                <td className="py-5 font-mono-tech text-xs text-neutral-400">
                  {item.year}
                </td>
                <td className="py-5">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
                    <span className="text-sm md:text-base font-semibold text-white group-hover:text-gradient-silver transition-colors">
                      {item.title}
                    </span>
                  </div>
                </td>
                <td className="py-5 text-sm text-neutral-300 font-sans tracking-normal">
                  {item.project}
                </td>
                <td className="py-5 font-mono-tech text-xs text-neutral-400">
                  {item.org}
                </td>
                <td className="py-5 text-right font-mono-tech text-xs text-neutral-400">
                  {item.category}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
