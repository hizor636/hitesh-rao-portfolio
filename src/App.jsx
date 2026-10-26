import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { Mail, ArrowUpRight } from 'lucide-react';
import CustomCursor from './components/CustomCursor';
import BackgroundCanvas from './components/BackgroundCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ValueProposition from './components/ValueProposition';
import FeaturedProjects from './components/FeaturedProjects';
import ProcessSection from './components/ProcessSection';
import AboutDegreeLife from './components/AboutDegreeLife';
import RecognitionSection from './components/RecognitionSection';
import Capabilities from './components/Capabilities';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import CaseStudyModal from './components/CaseStudyModal';
import AboutModal from './components/AboutModal';
import ContactModal from './components/ContactModal';
import { PERSONAL_INFO } from './data/portfolioData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [showStickyEmail, setShowStickyEmail] = useState(false);

  // Initialize Lenis smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    const handleScroll = () => {
      setShowStickyEmail(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#080808] text-[#f5f5f5] selection:bg-white selection:text-black overflow-x-hidden font-sans">
      {/* Fluid Magnetic Cursor */}
      <CustomCursor />

      {/* Ambient Interactive Canvas & Film Grain */}
      <BackgroundCanvas />

      {/* Fixed Floating Navbar */}
      <Navbar
        onOpenAbout={() => setIsAboutOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Main Content Layout — Sequenced exactly to Audited Strategy */}
      <main className="relative z-10">
        {/* 1. Hero: Who, what, looking for, CTAs, availability pill */}
        <Hero
          onOpenAbout={() => setIsAboutOpen(true)}
          onOpenContact={() => setIsContactOpen(true)}
        />

        {/* 2. Proof Strip: 4 verified facts, each linking to proof */}
        <ValueProposition
          onOpenAbout={() => setIsAboutOpen(true)}
        />

        {/* 3. Selected Work: 4 case studies in the honest structure */}
        <FeaturedProjects
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* 4. How I Actually Work: 4 principles */}
        <ProcessSection />

        {/* 5. About + Degree Life: BCA at NCET, what I study, how it connects */}
        <AboutDegreeLife
          onOpenContact={() => setIsContactOpen(true)}
        />

        {/* 6. Credentials & Experience: Compact timeline with proof links */}
        <RecognitionSection />

        {/* 7. Beyond Work: Outside the laptop + working style philosophy */}
        <Capabilities />

        {/* Endorsements & Peer Impact */}
        <TestimonialsSection />

        {/* 8. Open to Internships + Contact + Footer */}
        <ContactSection
          onOpenContactModal={() => setIsContactOpen(true)}
        />
      </main>

      {/* Sticky "Email me" Quick-Action Button */}
      <div
        className={`fixed bottom-6 right-6 z-40 transition-all duration-300 ${
          showStickyEmail
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-6 pointer-events-none'
        }`}
      >
        <a
          href={`mailto:${PERSONAL_INFO.email}?subject=Internship%20enquiry:%20[Role]%20·%20Hitesh%20Rao%20M`}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#d4ff4f] text-black font-semibold text-xs tracking-wider uppercase font-mono shadow-[0_4px_24px_rgba(212,255,79,0.35)] hover:scale-105 active:scale-95 transition-all"
          data-cursor="pointer"
        >
          <Mail className="w-3.5 h-3.5" />
          <span>Email me</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Deep-Dive Case Study Modal */}
      {selectedProject && (
        <CaseStudyModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onSelectProject={(proj) => setSelectedProject(proj)}
        />
      )}

      {/* Academic & Professional Profile Modal */}
      <AboutModal
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Interactive Communication Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}
