import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import LogoVisual from './LogoVisual';

/**
 * Google Material 3 (M3) & Google Gemini Floating Dock Header
 * Designed according to Google Gemini design language:
 * - Floating capsule surface elevation (top-4, backdrop-blur 16px, subtle 1px border)
 * - Calming dark neutral surface (#131314 / #1E1F20)
 * - M3 status indicators & Google Student Ambassador identity
 * - Segmented sentence-case navigation
 * - Gemini Sparkle multi-stop linear gradient primary CTA
 */
export default function Navbar({ onOpenAbout, onOpenContact }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('work');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Section tracking for active segment
      const sections = ['work', 'capabilities', 'process', 'awards'];
      const scrollY = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Work', href: '#work', id: 'work' },
    { label: 'Capabilities', href: '#capabilities', id: 'capabilities' },
    { label: 'Experience', href: '#process', id: 'process' },
    { label: 'Credentials', href: '#awards', id: 'awards' },
    { label: 'About', href: '#about', id: 'about', action: onOpenAbout },
  ];

  const handleNavClick = (e, item) => {
    if (item.action) {
      e.preventDefault();
      item.action();
      setMobileMenuOpen(false);
      return;
    }
    setActiveSection(item.id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Floating Capsule Dock Header */}
      <header
        className={`fixed top-4 inset-x-0 z-50 px-3 sm:px-6 pointer-events-none transition-all duration-300 ${
          isScrolled ? 'translate-y-0' : 'translate-y-0'
        }`}
      >
        <div
          className={`pointer-events-auto mx-auto max-w-[1140px] h-[58px] md:h-[62px] rounded-full px-3 sm:px-4 md:px-5 flex items-center justify-between gap-2 md:gap-4 transition-all duration-300 ${
            isScrolled
              ? 'bg-[#131314]/90 backdrop-blur-[16px] border border-white/[0.08] shadow-[0_12px_36px_rgba(0,0,0,0.65),0_2px_8px_rgba(0,0,0,0.35)]'
              : 'bg-[#18191B]/80 backdrop-blur-[16px] border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.45),0_2px_6px_rgba(0,0,0,0.25)]'
          }`}
        >
          {/* ========================================================= */}
          {/* LEFT ZONE: Identity & Contextual State                   */}
          {/* ========================================================= */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            {/* Monogram Crest Logo from Hero + Exact Typography */}
            <a
              href="#"
              className="flex items-center gap-2.5 group focus:outline-hidden"
              data-cursor="pointer"
              aria-label="Hitesh Rao M Home"
            >
              {/* Exact Logo Crest Present Below */}
              <div className="shrink-0 transition-transform duration-300 group-hover:scale-105">
                <LogoVisual size="sm" interactive={false} />
              </div>

              {/* Exact Text Depiction: HITESH RAO M */}
              <div className="flex items-baseline tracking-tight">
                <span className="font-sans text-[0.95rem] font-medium text-white uppercase group-hover:text-neutral-200 transition-colors">
                  HITESH
                </span>
                <span className="font-serif italic font-normal text-[1.1rem] text-gradient-lime ml-1.5 leading-none transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(212,255,79,0.4)]">
                  RAO M
                </span>
              </div>
            </a>

            {/* Discreet Badge: Google Student Ambassador */}
            <div className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#222428] border border-white/[0.06] text-[#C4C7C5] text-[11px] font-normal select-none">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4285F4]" />
              <span>Google Student Ambassador</span>
            </div>

            {/* Organic Status Indicator */}
            <div className="hidden lg:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[rgba(52,168,83,0.12)] border border-[rgba(52,168,83,0.25)] text-[#81C995] text-[11px] font-medium select-none">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#34A853] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#34A853]"></span>
              </span>
              <span>Available for Internships</span>
            </div>
          </div>

          {/* ========================================================= */}
          {/* CENTER ZONE: Unified Segmented Navigation                 */}
          {/* ========================================================= */}
          <nav
            className="hidden md:flex items-center p-1 rounded-full bg-black/25 border border-white/[0.05]"
            aria-label="Main Navigation"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`relative px-3.5 py-1.5 rounded-full text-[13px] font-medium tracking-normal transition-all duration-200 ease-out ${
                    isActive
                      ? 'bg-white/[0.1] text-white shadow-xs border border-white/10'
                      : 'text-[#C4C7C5] hover:text-[#FFFFFF] hover:bg-white/[0.05]'
                  }`}
                  data-cursor="pointer"
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* ========================================================= */}
          {/* RIGHT ZONE: Gemini Utility & Primary CTA                 */}
          {/* ========================================================= */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Location Tag */}
            <div className="hidden xl:flex items-center gap-1 text-[11px] text-[#8E918F] bg-[#222428]/60 border border-white/[0.06] px-2.5 py-1 rounded-full select-none">
              <MapPin className="w-3 h-3 text-[#9B72CB]" />
              <span>Bengaluru</span>
            </div>

            {/* Primary Action Button: Gemini Gradient Container Pill */}
            <div className="relative group p-[1px] rounded-full bg-gradient-to-r from-[#4285F4] via-[#9B72CB] to-[#D96570] shadow-[0_2px_14px_rgba(66,133,244,0.3)] hover:shadow-[0_4px_22px_rgba(155,114,203,0.45)] transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]">
              <button
                onClick={onOpenContact}
                className="relative px-4 sm:px-4.5 py-1.5 sm:py-2 rounded-full bg-[#18191C] group-hover:bg-[#202227] text-[13px] font-medium text-[#E3E3E3] group-hover:text-white flex items-center gap-1.5 transition-colors duration-200"
                data-cursor="pointer"
              >
                <span>Connect</span>
                {/* Material Symbols north_east outbound arrow */}
                <ArrowUpRight className="w-3.5 h-3.5 text-[#C4C7C5] group-hover:text-white transition-colors" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-9 h-9 rounded-full bg-white/[0.04] hover:bg-white/[0.08] active:bg-white/[0.12] border border-white/10 flex items-center justify-center text-[#E3E3E3] hover:text-white transition-colors focus:outline-hidden"
              aria-label="Toggle menu"
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
      {/* MOBILE DRAWER SHEET (Google M3 Bottom/Top Card Pattern)   */}
      {/* ========================================================= */}
      <div
        className={`fixed inset-x-4 top-20 z-40 md:hidden transition-all duration-300 ease-out ${
          mobileMenuOpen
            ? 'opacity-100 scale-100 pointer-events-auto'
            : 'opacity-0 scale-95 pointer-events-none'
        }`}
      >
        <div className="p-5 rounded-3xl bg-[#1E1F20]/95 backdrop-blur-[24px] border border-white/10 shadow-[0_16px_48px_rgba(0,0,0,0.8)] space-y-5">
          {/* Header State */}
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <LogoVisual size="sm" interactive={false} />
              <div className="flex items-baseline tracking-tight">
                <span className="font-sans text-[0.95rem] font-medium text-white uppercase">
                  HITESH
                </span>
                <span className="font-serif italic font-normal text-[1.1rem] text-gradient-lime ml-1.5 leading-none">
                  RAO M
                </span>
              </div>
            </div>
            <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[rgba(52,168,83,0.12)] border border-[rgba(52,168,83,0.25)] text-[#81C995] text-[10px] font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#34A853]" />
              <span>Available</span>
            </div>
          </div>

          {/* Navigation Items */}
          <nav className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-[14px] font-medium text-[#E3E3E3] hover:text-white hover:bg-white/[0.06] transition-colors"
              >
                <span>{item.label}</span>
                <ArrowUpRight className="w-4 h-4 text-neutral-500" />
              </a>
            ))}
          </nav>

          {/* Quick Actions & Location */}
          <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-[#8E918F]">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#9B72CB]" />
              Bengaluru, Karnataka
            </span>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="px-4 py-1.5 rounded-full bg-gradient-to-r from-[#4285F4] to-[#9B72CB] text-white text-xs font-medium"
            >
              Get in touch
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
