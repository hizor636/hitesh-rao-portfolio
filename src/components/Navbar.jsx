import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowUpRight, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import LogoVisual from './LogoVisual';
import { BrandSignatureName } from './CompanyLogos';
import ThemeToggle from './ThemeToggle';

export default function Navbar({ onOpenContact }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('work');
  const menuRef = useRef(null);
  const toggleBtnRef = useRef(null);

  const navItems = [
    { label: 'Work', href: '#work', id: 'work' },
    { label: 'Capabilities', href: '#capabilities', id: 'capabilities' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Credentials', href: '#credentials', id: 'credentials' },
    { label: 'Testimonials', href: '#testimonials', id: 'testimonials' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  // Track active section and scroll state
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sectionIds = ['work', 'capabilities', 'experience', 'credentials', 'testimonials', 'contact'];
      const scrollY = window.scrollY + 220;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollY >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Trap focus and handle Escape for mobile menu
  useEffect(() => {
    if (!mobileMenuOpen) return;

    // Lock background scroll
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        if (toggleBtnRef.current) toggleBtnRef.current.focus();
        return;
      }

      if (e.key === 'Tab' && menuRef.current) {
        const focusableElements = menuRef.current.querySelectorAll(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Auto focus first interactive element in drawer
    const timer = setTimeout(() => {
      if (menuRef.current) {
        const firstFocusable = menuRef.current.querySelector('a, button');
        if (firstFocusable) firstFocusable.focus();
      }
    }, 50);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      clearTimeout(timer);
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    if (toggleBtnRef.current) toggleBtnRef.current.focus();
  };

  return (
    <>
      {/* Floating Capsule Dock Header */}
      <header
        className="fixed top-4 inset-x-0 z-50 px-3 sm:px-6 pointer-events-none transition-all duration-300"
        role="banner"
      >
        <div
          className={`pointer-events-auto mx-auto max-w-6xl h-14 md:h-[58px] rounded-full px-3.5 sm:px-5 flex items-center justify-between gap-3 md:gap-6 transition-all duration-300 ${
            isScrolled
              ? 'bg-[#121214]/90 backdrop-blur-md border border-white/10 shadow-[0_12px_36px_rgba(0,0,0,0.7),0_2px_8px_rgba(0,0,0,0.4)]'
              : 'bg-[#161619]/80 backdrop-blur-md border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.5)]'
          }`}
        >
          {/* ========================================================= */}
          {/* LEFT ZONE: Logo & Brand + Available Status               */}
          {/* ========================================================= */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#"
              className="flex items-center gap-2 group rounded-full focus-visible:outline-2 focus-visible:outline-[#d4ff4f] focus-visible:outline-offset-2"
              data-cursor="pointer"
              aria-label="HITESH RAO M home"
            >
              <div className="shrink-0 transition-transform duration-300 group-hover:scale-105">
                <LogoVisual size="sm" interactive={false} />
              </div>

              <BrandSignatureName size="sm" />
            </a>

            {/* Organic Available Status Pill */}
            <div className="hidden lg:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[rgba(52,168,83,0.12)] border border-[rgba(52,168,83,0.25)] text-[#81C995] text-[11px] font-medium select-none">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#34A853] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#34A853]"></span>
              </span>
              <span>Available</span>
            </div>
          </div>

          {/* ========================================================= */}
          {/* CENTER ZONE: Unified Segmented Navigation Links           */}
          {/* ========================================================= */}
          <nav
            className="hidden md:flex items-center gap-1 p-1 rounded-full bg-black/30 border border-white/5"
            aria-label="Primary navigation"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium tracking-normal transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[#d4ff4f] focus-visible:outline-offset-1 ${
                    isActive
                      ? 'bg-white/15 text-white shadow-xs font-semibold'
                      : 'text-neutral-400 hover:text-white hover:bg-white/5'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                  data-cursor="pointer"
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* ========================================================= */}
          {/* RIGHT ZONE: Primary CTA, Theme Toggle & Mobile Toggle    */}
          {/* ========================================================= */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            {/* Theme Toggle Button */}
            <ThemeToggle />

            {/* Direct Résumé Link */}
            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-neutral-300 hover:text-white transition-all focus-visible:outline-2 focus-visible:outline-[#d4ff4f] focus-visible:outline-offset-1"
              data-cursor="pointer"
            >
              <span>Résumé</span>
              <ArrowUpRight className="w-3 h-3 text-neutral-400" />
            </a>

            {/* Primary Action Button */}
            <button
              onClick={onOpenContact}
              className="px-3.5 sm:px-4 py-1.5 rounded-full bg-[#1e1f24] hover:bg-[#282a30] text-xs font-medium text-white border border-white/15 hover:border-white/30 flex items-center gap-1.5 transition-all focus-visible:outline-2 focus-visible:outline-[#d4ff4f] focus-visible:outline-offset-1"
              data-cursor="pointer"
              aria-label="Connect with Hitesh"
            >
              <span>Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#d4ff4f]" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              ref={toggleBtnRef}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 active:bg-white/15 border border-white/10 flex items-center justify-center text-neutral-200 hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-[#d4ff4f] focus-visible:outline-offset-1"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-menu"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* ========================================================= */}
      {/* MOBILE DRAWER SHEET (Focus trapped, Escape enabled)       */}
      {/* ========================================================= */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          ref={menuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className="fixed inset-x-3 top-20 z-50 md:hidden p-5 rounded-3xl bg-[#161619]/95 backdrop-blur-2xl border border-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.85)] space-y-4 animate-in fade-in zoom-in-95 duration-200"
        >
          {/* Header row in sheet */}
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="font-sans text-xs font-semibold uppercase text-white tracking-wider">Navigation</span>
              <span className="w-1 h-1 rounded-full bg-neutral-600" />
              <span className="text-[11px] text-[#81C995] font-mono">Available for internships</span>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (toggleBtnRef.current) toggleBtnRef.current.focus();
              }}
              className="p-1 rounded-full text-neutral-400 hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-[#d4ff4f]"
              aria-label="Close navigation"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Links list */}
          <nav className="flex flex-col space-y-1" aria-label="Mobile menu">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-[#d4ff4f] ${
                    isActive
                      ? 'bg-white/15 text-white font-semibold'
                      : 'text-neutral-300 hover:text-white hover:bg-white/5'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500" />
                </a>
              );
            })}
            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium text-[#d4ff4f] hover:bg-white/5 transition-colors focus-visible:outline-2 focus-visible:outline-[#d4ff4f]"
            >
              <span>Download Résumé (PDF)</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#d4ff4f]" />
            </a>
          </nav>

          {/* Bottom details */}
          <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400">
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-[#d4ff4f]" />
              Bengaluru, Karnataka
            </span>
            <div className="flex items-center gap-2">
              <ThemeToggle showLabel={true} />
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="px-3.5 py-1.5 rounded-full bg-[#d4ff4f] text-black text-xs font-semibold hover:bg-[#c2ef3e] transition-colors focus-visible:outline-2 focus-visible:outline-black"
              >
                Connect →
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
