import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { Mail, ArrowUpRight } from 'lucide-react';
import CustomCursor from './components/CustomCursor';
import BackgroundCanvas from './components/BackgroundCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ValueProposition from './components/ValueProposition';
import StoryHighlights from './components/StoryHighlights';
import FeaturedProjects from './components/FeaturedProjects';
import ProcessSection from './components/ProcessSection';
import AboutDegreeLife from './components/AboutDegreeLife';
import RecognitionSection from './components/RecognitionSection';
import Capabilities from './components/Capabilities';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import ContactModal from './components/ContactModal';
import VisitorProtections from './components/VisitorProtections';
import { PERSONAL_INFO } from './data/portfolioData';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [showStickyEmail, setShowStickyEmail] = useState(false);

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

  // Global scroll reveal observer for animated blocks (.rv and .rv-stagger)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: '150px 0px 150px 0px' }
    );

    const observeElements = () => {
      const elements = document.querySelectorAll('.rv, .rv-stagger');
      elements.forEach((el) => {
        el.classList.add('in');
        observer.observe(el);
      });
    };

    observeElements();
    const timer = setTimeout(observeElements, 100);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#080808] text-[#f5f5f5] selection:bg-white selection:text-black overflow-x-hidden font-sans">
      {/* Fluid Magnetic Cursor */}
      <CustomCursor />

      {/* Ambient Interactive Canvas & Film Grain */}
      <BackgroundCanvas />

      {/* Visitor Protections: Image and written content deterrents & accessible toasts */}
      <VisitorProtections />

      {/* Fixed Floating Navbar */}
      <Navbar onOpenContact={() => setIsContactOpen(true)} />

      {/* Main Content Layout — Clean & Sequenced */}
      <main className="relative z-10">
        {/* 1. Hero: Who, what, looking for, CTAs, availability pill */}
        <Hero />

        {/* 2. Proof Strip: 4 verified facts, each linking to proof */}
        <ValueProposition />

        {/* Story Highlights: Professional, NCET College, My Lyfff, Credentials */}
        <StoryHighlights />

        {/* 3. Selected Work: 4 deep case studies with honest metrics + supporting credentials */}
        <FeaturedProjects />

        {/* 4. How I Actually Work: 4 operational principles */}
        <ProcessSection />

        {/* 5. About + Degree Life: BCA at NCET, coursework matrix */}
        <AboutDegreeLife onOpenContact={() => setIsContactOpen(true)} />

        {/* 6. Credentials & Experience: Compact timeline with verified proof links */}
        <RecognitionSection />

        {/* 7. Beyond Work: Outside the laptop + working style philosophy */}
        <Capabilities />

        {/* Endorsements & Peer Impact */}
        <TestimonialsSection />

        {/* 8. Open to Internships + Contact + Footer */}
        <ContactSection onOpenContactModal={() => setIsContactOpen(true)} />
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

      {/* Interactive Connect Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}
