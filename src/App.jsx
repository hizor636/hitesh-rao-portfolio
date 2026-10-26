import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import CustomCursor from './components/CustomCursor';
import BackgroundCanvas from './components/BackgroundCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ValueProposition from './components/ValueProposition';
import FeaturedProjects from './components/FeaturedProjects';
import Capabilities from './components/Capabilities';
import ProcessSection from './components/ProcessSection';
import RecognitionSection from './components/RecognitionSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import CaseStudyModal from './components/CaseStudyModal';
import AboutModal from './components/AboutModal';
import ContactModal from './components/ContactModal';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  // Initialize Lenis buttery smooth scrolling
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

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
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

      {/* Main Content Layout */}
      <main className="relative z-10">
        {/* Fullscreen Editorial Hero */}
        <Hero
          onOpenAbout={() => setIsAboutOpen(true)}
          onOpenContact={() => setIsContactOpen(true)}
        />

        {/* Value Proposition & Manifesto */}
        <ValueProposition
          onOpenAbout={() => setIsAboutOpen(true)}
        />

        {/* Featured Projects Showcase */}
        <FeaturedProjects
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* Capabilities & Areas of Focus */}
        <Capabilities />

        {/* 4-Step Creative Process */}
        <ProcessSection />

        {/* Selected Recognition & Awards Ledger */}
        <RecognitionSection />

        {/* Client Reputation & Endorsements */}
        <TestimonialsSection />

        {/* Footer & Direct Contact */}
        <ContactSection
          onOpenContactModal={() => setIsContactOpen(true)}
        />
      </main>

      {/* Deep-Dive Case Study Modal */}
      {selectedProject && (
        <CaseStudyModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onSelectProject={(proj) => setSelectedProject(proj)}
        />
      )}

      {/* Designer Biography & Archive Modal */}
      <AboutModal
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Interactive Project Inquiry Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}
