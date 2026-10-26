import React, { useEffect, useRef, useState } from 'react';

export default function ProjectVisual({ type, title, accentColor }) {
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-[360px] sm:h-[440px] md:h-[520px] rounded-2xl overflow-hidden bg-[#0a0a0d] border border-white/10 group-hover:border-[#d4ff4f]/40 transition-all duration-700 select-none shadow-2xl"
      style={{ perspective: '1200px' }}
    >
      {/* 3D Parallax Tilt Canvas */}
      <div
        className="w-full h-full relative transition-transform duration-500 ease-out flex items-center justify-center overflow-hidden"
        style={{
          transform: isHovered
            ? `rotateY(${mousePos.x * 12}deg) rotateX(${-mousePos.y * 12}deg) scale(1.02)`
            : 'rotateY(0deg) rotateX(0deg) scale(1)',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Project-Specific Interactive Visualizers */}
        {type === 'paytm-radar' && <PaytmRadarVisual mousePos={mousePos} isHovered={isHovered} />}
        {type === 'google-neural' && <GoogleNeuralVisual mousePos={mousePos} isHovered={isHovered} />}
        {type === 'devrel-network' && <DevRelNetworkVisual mousePos={mousePos} isHovered={isHovered} />}
        {type === 'ai-skillgap' && <CareerGrowwVisual mousePos={mousePos} isHovered={isHovered} />}
        {type === 'sql-terminal' && <SqlTerminalVisual mousePos={mousePos} isHovered={isHovered} />}
        {type === 'deloitte-analytics' && <DeloitteVisual mousePos={mousePos} isHovered={isHovered} />}

        {/* Ambient Gloss & Light Sheen Effect */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at ${(mousePos.x + 0.5) * 100}% ${(mousePos.y + 0.5) * 100}%, rgba(212, 255, 79, 0.1) 0%, transparent 65%)`,
            opacity: isHovered ? 1 : 0.25,
          }}
        />

        {/* Glass reflection line */}
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none" />

        {/* Bottom HUD Metadata Pill */}
        <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-[11px] font-mono-tech text-neutral-400 bg-black/75 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: accentColor || '#d4ff4f' }} />
            <span className="text-white font-medium">{title}</span>
          </div>
          <span className="tracking-widest uppercase text-[#d4ff4f] text-[10px]">
            INTERACTIVE CASE // CLICK TO EXPAND
          </span>
        </div>
      </div>
    </div>
  );
}

/* 1. Paytm Bengaluru Hackathon Radar Visualizer */
function PaytmRadarVisual({ mousePos }) {
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setAngle((a) => (a + 2) % 360);
    }, 25);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center bg-radial from-[#002e48] via-[#05131d] to-[#04080c] overflow-hidden">
      {/* Radar Coordinate Grid */}
      <svg className="w-80 h-80 sm:w-96 sm:h-96" viewBox="0 0 400 400">
        <defs>
          <linearGradient id="paytmSweep" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00baf2" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#00baf2" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Concentric Circles */}
        <circle cx="200" cy="200" r="170" fill="none" stroke="#00baf2" strokeWidth="1" strokeDasharray="3 3" opacity="0.3" />
        <circle cx="200" cy="200" r="120" fill="none" stroke="#00baf2" strokeWidth="1" opacity="0.4" />
        <circle cx="200" cy="200" r="70" fill="none" stroke="#00baf2" strokeWidth="1" strokeDasharray="2 4" opacity="0.5" />
        <circle cx="200" cy="200" r="20" fill="none" stroke="#00baf2" strokeWidth="1" opacity="0.6" />

        {/* Crosshairs */}
        <line x1="20" y1="200" x2="380" y2="200" stroke="#00baf2" strokeWidth="0.8" opacity="0.3" />
        <line x1="200" y1="20" x2="200" y2="380" stroke="#00baf2" strokeWidth="0.8" opacity="0.3" />

        {/* Rotating Radar Sweep Line */}
        <g transform={`rotate(${angle}, 200, 200)`}>
          <line x1="200" y1="200" x2="370" y2="200" stroke="#00baf2" strokeWidth="2" />
          <path d="M 200,200 L 370,200 A 170 170 0 0 0 350,110 Z" fill="url(#paytmSweep)" opacity="0.35" />
        </g>

        {/* Bengaluru Campus Nodes Pinged on Radar */}
        <circle cx="270" cy="140" r="5" fill="#d4ff4f" className="animate-ping" />
        <circle cx="270" cy="140" r="3" fill="#d4ff4f" />
        <text x="280" y="143" fill="#d4ff4f" fontSize="8" fontFamily="monospace">NCET HUB</text>

        <circle cx="140" cy="260" r="4" fill="#00baf2" />
        <text x="80" y="263" fill="#00baf2" fontSize="8" fontFamily="monospace">BENGALURU CEN</text>

        <circle cx="290" cy="280" r="4" fill="#ffffff" />
        <text x="300" y="283" fill="#ffffff" fontSize="8" fontFamily="monospace">PARTNER NODE</text>
      </svg>

      <div className="absolute top-6 left-6 font-mono-tech text-[10px] text-[#00baf2] tracking-widest uppercase">
        PAYTM CAMPUS OPS // 8,261+ IMPRESSIONS • LAT: 12°58'N
      </div>
      <div className="absolute top-6 right-6 font-mono-tech text-[10px] text-neutral-400 tracking-widest uppercase">
        FLAGSHIP HACKATHON // DATA SECURED
      </div>
    </div>
  );
}

/* 2. Google Student Ambassador Neural Network Visualizer */
function GoogleNeuralVisual({ mousePos }) {
  const [pulse, setPulse] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setPulse((p) => (p + 1) % 100), 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center bg-radial from-[#121820] via-[#080d14] to-[#040609] overflow-hidden">
      <svg className="w-full h-full" viewBox="0 0 600 400">
        <defs>
          <linearGradient id="googleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4285f4" />
            <stop offset="33%" stopColor="#ea4335" />
            <stop offset="66%" stopColor="#fbbc05" />
            <stop offset="100%" stopColor="#34a853" />
          </linearGradient>
        </defs>

        {/* Synaptic Pathway Lines */}
        {Array.from({ length: 12 }).map((_, i) => {
          const x1 = 120 + i * 32;
          const y1 = 140 + Math.sin(i + pulse * 0.1) * 30;
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={300 + mousePos.x * 30}
              y2={200 + mousePos.y * 20}
              stroke="url(#googleGrad)"
              strokeWidth={i % 2 === 0 ? '1.5' : '0.8'}
              opacity={0.3 + (i / 12) * 0.4}
              strokeDasharray={i % 3 === 0 ? '4 2' : 'none'}
            />
          );
        })}

        {/* Central Core Google Student Ambassador Emblem */}
        <circle cx={300 + mousePos.x * 30} cy={200 + mousePos.y * 20} r="45" fill="#0a0e14" stroke="#d4ff4f" strokeWidth="2" filter="drop-shadow(0 0 15px rgba(212, 255, 79, 0.4))" />
        <circle cx={300 + mousePos.x * 30} cy={200 + mousePos.y * 20} r="38" fill="none" stroke="#4285f4" strokeWidth="1" strokeDasharray="3 3" />
        <text
          x={300 + mousePos.x * 30}
          y={204 + mousePos.y * 20}
          fill="#ffffff"
          fontSize="11"
          fontFamily="sans-serif"
          fontWeight="bold"
          textAnchor="middle"
          letterSpacing="1"
        >
          GOOGLE
        </text>

        {/* Surrounding Workshop & Community Satellite Nodes */}
        <circle cx="160" cy="120" r="14" fill="#4285f4" opacity="0.8" />
        <text x="160" y="123" fill="#fff" fontSize="8" textAnchor="middle" fontFamily="monospace">CLOUD</text>

        <circle cx="440" cy="110" r="14" fill="#ea4335" opacity="0.8" />
        <text x="440" y="113" fill="#fff" fontSize="8" textAnchor="middle" fontFamily="monospace">GEMINI</text>

        <circle cx="180" cy="290" r="14" fill="#34a853" opacity="0.8" />
        <text x="180" y="293" fill="#fff" fontSize="8" textAnchor="middle" fontFamily="monospace">DEV</text>

        <circle cx="430" cy="280" r="14" fill="#fbbc05" opacity="0.8" />
        <text x="430" y="283" fill="#000" fontSize="8" textAnchor="middle" fontFamily="monospace">COMM</text>
      </svg>

      <div className="absolute top-6 left-6 font-mono-tech text-[10px] text-[#d4ff4f] tracking-widest uppercase">
        GOOGLE STUDENT AMBASSADOR // 125,000+ NATIONWIDE APPLICANT POOL
      </div>
    </div>
  );
}

/* 3. Presto & Namma MUG Conference Network Visualizer */
function DevRelNetworkVisual({ mousePos }) {
  return (
    <div className="relative w-full h-full flex items-center justify-center bg-[#070b09] overflow-hidden">
      <svg className="w-full h-full" viewBox="0 0 600 400">
        <defs>
          <linearGradient id="mongoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#047857" />
          </linearGradient>
        </defs>

        {/* Distributed SQL & NoSQL Node Grid */}
        {Array.from({ length: 6 }).map((_, i) => (
          <circle
            key={i}
            cx={100 + i * 80}
            cy={200 + Math.sin(i * 1.5) * 60}
            r="18"
            fill="#061c14"
            stroke="#10b981"
            strokeWidth="1.5"
          />
        ))}

        {/* Data Stream Connections */}
        <path
          d="M 100,200 C 180,140 260,260 340,200 S 500,160 500,240"
          fill="none"
          stroke="#10b981"
          strokeWidth="2"
          strokeDasharray="6 3"
        />

        {/* Central Stage Node */}
        <circle cx="340" cy="200" r="34" fill="#0f291e" stroke="#34d399" strokeWidth="2" filter="drop-shadow(0 0 20px #10b981)" />
        <text x="340" y="204" fill="#ffffff" fontSize="11" textAnchor="middle" fontFamily="monospace" fontWeight="bold">
          800+
        </text>
      </svg>

      <div className="absolute top-6 left-6 font-mono-tech text-[10px] text-emerald-400 tracking-widest uppercase">
        PRESTO SQL & NAMMA MUG // 800+ DEVS • 189+ SENIOR PROS
      </div>
    </div>
  );
}

/* 4. CareerGroww AI Skill-Gap Platform Visualizer */
function CareerGrowwVisual({ mousePos }) {
  return (
    <div className="relative w-full h-full flex items-center justify-center bg-radial from-[#1e102d] via-[#10081a] to-[#07030b] overflow-hidden">
      <div className="w-[88%] max-w-md p-6 rounded-2xl bg-black/60 border border-purple-500/30 backdrop-blur-xl shadow-2xl">
        <div className="flex items-center justify-between border-b border-white/10 pb-3 font-mono-tech text-xs">
          <span className="text-purple-400 font-bold flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            CAREERGROWW // AI ENGINE
          </span>
          <span className="text-neutral-500 text-[10px]">VIBEXATHON 1.0</span>
        </div>

        {/* Dynamic Vector Skill Bars */}
        <div className="space-y-3 mt-4 text-xs font-mono-tech">
          <div>
            <div className="flex justify-between text-neutral-300 mb-1">
              <span>SQL & RELATIONAL OPTIMIZATION</span>
              <span className="text-[#d4ff4f]">94% MATCH</span>
            </div>
            <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-purple-500 to-[#d4ff4f] w-[94%]" />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-neutral-300 mb-1">
              <span>FINTECH CAMPAIGN ARCHITECTURE</span>
              <span className="text-[#00baf2]">88% MATCH</span>
            </div>
            <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-blue-500 to-[#00baf2] w-[88%]" />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-neutral-300 mb-1">
              <span>GEMINI AI PROMPT CHAINING</span>
              <span className="text-emerald-400">92% MATCH</span>
            </div>
            <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-purple-500 to-emerald-400 w-[92%]" />
            </div>
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-white/10 flex justify-between text-[10px] font-mono-tech text-neutral-400">
          <span>AI RECOMMENDATION: GENERATED</span>
          <span className="text-white">4,566+ REACH</span>
        </div>
      </div>
    </div>
  );
}

/* 5. SQL Terminal & Leaderboard Streak Visualizer */
function SqlTerminalVisual({ mousePos }) {
  return (
    <div className="relative w-full h-full flex items-center justify-center bg-[#07080a] overflow-hidden p-4">
      <div className="w-full max-w-lg rounded-xl bg-[#0d1117] border border-white/15 p-5 font-mono-tech text-xs shadow-2xl">
        {/* Terminal Header */}
        <div className="flex items-center justify-between pb-3 border-b border-white/10 text-neutral-400 text-[11px]">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            <span className="text-neutral-300 ml-2">hitesh@ncet-bengaluru: ~/torii-minds</span>
          </div>
          <span className="text-[#d4ff4f] text-[10px]">#1 RANK ACTIVE</span>
        </div>

        {/* Live SQL Code Execution */}
        <div className="mt-4 space-y-1.5 text-neutral-300">
          <p className="text-emerald-400">
            $ <span className="text-white">psql -d leaderboard_analytics -c</span>
          </p>
          <p className="text-sky-300">
            SELECT rank, student, programs_solved, streak_days
          </p>
          <p className="text-sky-300">
            FROM university_standings WHERE college = 'NCET'
          </p>
          <p className="text-sky-300">
            ORDER BY streak_days DESC LIMIT 1;
          </p>
        </div>

        {/* Executed Results Table */}
        <div className="mt-4 p-3 rounded-lg bg-black/60 border border-white/10 text-[11px]">
          <div className="flex justify-between text-neutral-400 border-b border-white/10 pb-1 font-bold">
            <span>RANK</span>
            <span>STUDENT</span>
            <span>SOLVED</span>
            <span>STATUS</span>
          </div>
          <div className="flex justify-between text-white pt-2">
            <span className="text-[#d4ff4f] font-bold">01</span>
            <span className="text-white font-medium">Hitesh Rao M</span>
            <span className="text-emerald-400">70+ Progs</span>
            <span className="text-amber-400 font-bold">TOP STREAK</span>
          </div>
        </div>

        <div className="mt-3 flex justify-between text-[10px] text-neutral-500">
          <span>HACKERRANK SQL INTERMEDIATE VERIFIED</span>
          <span className="text-emerald-400">QUERY LATENCY: 0.04ms</span>
        </div>
      </div>
    </div>
  );
}

/* 6. Deloitte Analytics & Gemini Certified Visualizer */
function DeloitteVisual({ mousePos }) {
  return (
    <div className="relative w-full h-full flex items-center justify-center bg-radial from-[#151c10] via-[#090f07] to-[#040803] overflow-hidden">
      <div className="w-[88%] max-w-md p-6 rounded-2xl bg-black/70 border border-[#86bc25]/40 backdrop-blur-xl shadow-2xl">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <span className="font-sans font-bold text-white text-sm">
            Deloitte<span className="text-[#86bc25]">.</span> Data Analytics
          </span>
          <span className="font-mono-tech text-[10px] text-[#d4ff4f] bg-[#86bc25]/20 px-2 py-0.5 rounded-full">
            AUSTRALIA VERIFIED
          </span>
        </div>

        {/* Statistical Equity Bell Curve */}
        <svg className="w-full h-28 mt-4" viewBox="0 0 300 100">
          <path
            d="M 10,90 Q 75,90 120,40 Q 150,10 180,40 Q 225,90 290,90"
            fill="none"
            stroke="#86bc25"
            strokeWidth="2.5"
          />
          <line x1="150" y1="10" x2="150" y2="90" stroke="#d4ff4f" strokeWidth="1.5" strokeDasharray="3 3" />
          <circle cx="150" cy="10" r="4" fill="#d4ff4f" className="animate-ping" />
          <circle cx="150" cy="10" r="3" fill="#d4ff4f" />
        </svg>

        <div className="mt-2 flex justify-between text-[10px] font-mono-tech text-neutral-400">
          <span>STATISTICAL PAY-EQUITY INDEX</span>
          <span className="text-white font-bold">100% CORRELATION</span>
        </div>

        <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between font-mono-tech text-xs">
          <span className="text-white font-sans font-medium text-xs">✦ Google Gemini Certified</span>
          <span className="text-emerald-400 text-[10px]">VERIFIED CREDENTIAL</span>
        </div>
      </div>
    </div>
  );
}
