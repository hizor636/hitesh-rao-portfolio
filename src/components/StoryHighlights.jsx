import React, { useState, useEffect, useRef, useCallback } from 'react';
import { X, Play, Pause, ChevronLeft, ChevronRight, Sparkles, GraduationCap, Briefcase, Compass, Award } from 'lucide-react';

export const HIGHLIGHTS = [
  {
    id: 'professional',
    title: 'Professional',
    badge: 'Events & Ops',
    icon: 'briefcase',
    coverImg: '/images/highlight-professional.jpg',
    color: '#00baf2',
    slides: [
      {
        img: '/images/highlight-professional.jpg',
        alt: 'Namma Bengaluru Hackathon tech event with collegiate developers and stage',
        tag: 'Paytm Bengaluru Hackathon',
        date: 'Jun – Oct 2026',
        text: 'Core organizing team member managing university partner outreach and on-ground attendee verification for 800+ student developers.'
      },
      {
        img: '/images/highlight-professional.jpg',
        alt: 'Build with Presto & Namma MUG Developer Conference in Bengaluru',
        tag: 'Presto & Namma MUG Summit',
        date: 'Oct 2026',
        text: 'Coordinated developer summit logistics with MongoDB & Google partner booths, speaker green-room prep, and crowd ingress for 189+ industry pros.'
      },
      {
        img: '/images/highlight-professional.jpg',
        alt: 'Google Student Ambassador campus event',
        tag: 'Google Student Ambassador',
        date: 'May – Oct 2026',
        text: 'Selected from 125,000+ national applicants to demystify Google Cloud and Gemini AI for 500+ student peers through interactive sandboxes.'
      }
    ]
  },
  {
    id: 'college',
    title: 'NCET College',
    badge: 'Campus Life',
    icon: 'graduation',
    coverImg: '/images/highlight-college.jpg',
    color: '#d4ff4f',
    slides: [
      {
        img: '/images/highlight-college.jpg',
        alt: 'Modern campus architecture at Nagarjuna College of Engineering and Technology',
        tag: 'NCET Bengaluru · BCA 2028',
        date: 'Class of 2028',
        text: 'Studying Bachelor of Computer Applications at NCET Bengaluru — building rigorous foundations in relational SQL, Python, C, and system architectures.'
      },
      {
        img: '/images/highlight-college.jpg',
        alt: 'Students walking through college campus grounds in afternoon sunlight',
        tag: 'Campus Developer Study Circles',
        date: '2025 – 2026',
        text: 'Formed focused 45-minute lunchtime developer sessions connecting coursework database theory with real-world campaign metrics and SQL sprints.'
      },
      {
        img: '/images/highlight-college.jpg',
        alt: 'VibeXathon 1.0 collegiate hackathon pitching',
        tag: 'CareerGroww @ VibeXathon 1.0',
        date: 'Mar 2026',
        text: 'Pitched an AI-powered student skill-gap prototype live against senior undergraduates, receiving direct feedback and founder mentorship.'
      }
    ]
  },
  {
    id: 'life',
    title: 'My Lyfff',
    badge: 'Outdoors & Art',
    icon: 'compass',
    coverImg: '/images/highlight-life.jpg',
    color: '#10b981',
    slides: [
      {
        img: '/images/highlight-life.jpg',
        alt: 'Scenic mountain trail through lush misty Western Ghats in Karnataka',
        tag: 'Western Ghats Trekking',
        date: 'Karnataka Trails',
        text: 'I think best when I am outdoors. Trekking through the Western Ghats builds mental resilience, patience, and fresh clarity away from the screen.'
      },
      {
        img: '/images/highlight-life.jpg',
        alt: 'Rolling green peaks and morning clouds in nature',
        tag: 'Editorial Design & Architecture',
        date: 'Visual Inspiration',
        text: 'Passionate about brutalist digital architecture, intentional white space, and editorial typography. I notice layout balance before reading the words.'
      },
      {
        img: '/images/highlight-life.jpg',
        alt: 'Hiking trail on green mountain ridge at sunrise',
        tag: 'Learn In Public',
        date: 'Personal Philosophy',
        text: 'Curious first. Consistent over intense. Believing that shipping real work and sharing honest retrospectives creates compounding momentum.'
      }
    ]
  },
  {
    id: 'credentials',
    title: 'Credentials',
    badge: 'Certifications',
    icon: 'award',
    coverImg: '/images/hitesh-profile.jpg',
    color: '#a855f7',
    slides: [
      {
        img: '/images/hitesh-profile.jpg',
        alt: 'Deloitte Australia Data Analytics Simulation',
        tag: 'Deloitte Australia Job Simulation',
        date: 'Feb – Apr 2026',
        text: 'Completed practical data modeling simulation on Forage analyzing pay-equality statistical distributions and demographic segments.'
      },
      {
        img: '/images/hitesh-profile.jpg',
        alt: 'Google for Education Gemini Certified Student',
        tag: 'Gemini Certified Student',
        date: 'Apr 2026',
        text: 'Official credential from Google for Education validating applied generative AI prompt architectures and multi-turn workflows.'
      },
      {
        img: '/images/hitesh-profile.jpg',
        alt: 'Torii Minds and HackerRank SQL Intermediate',
        tag: '70+ SQL Relational Sprints',
        date: 'Oct – Nov 2025',
        text: 'Solved 70+ SQL programs on Torii Minds maintaining university leaderboard streaks; earned verified HackerRank SQL Intermediate badge.'
      }
    ]
  }
];

export default function StoryHighlights() {
  const [activeStoryIdx, setActiveStoryIdx] = useState(null);
  const [activeSlideIdx, setActiveSlideIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const durationPerSlide = 5000; // 5 seconds per slide
  const timerRef = useRef(null);
  const startTimeRef = useRef(null);
  const remainingTimeRef = useRef(durationPerSlide);
  const lastActiveTriggerRef = useRef(null);
  const modalRef = useRef(null);
  const touchStartYRef = useRef(null);

  // Check prefers-reduced-motion
  const isReducedMotion = typeof window !== 'undefined'
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false;

  const activeStory = activeStoryIdx !== null ? HIGHLIGHTS[activeStoryIdx] : null;
  const currentSlide = activeStory ? activeStory.slides[activeSlideIdx] : null;

  // Close story viewer
  const closeStory = useCallback(() => {
    setActiveStoryIdx(null);
    setActiveSlideIdx(0);
    setProgress(0);
    setIsPaused(false);
    if (lastActiveTriggerRef.current) {
      lastActiveTriggerRef.current.focus();
    }
  }, []);

  // Next slide
  const nextSlide = useCallback(() => {
    if (!activeStory) return;
    if (activeSlideIdx < activeStory.slides.length - 1) {
      setActiveSlideIdx((prev) => prev + 1);
      setProgress(0);
      remainingTimeRef.current = durationPerSlide;
    } else if (activeStoryIdx < HIGHLIGHTS.length - 1) {
      // Advance to next highlight category
      setActiveStoryIdx((prev) => prev + 1);
      setActiveSlideIdx(0);
      setProgress(0);
      remainingTimeRef.current = durationPerSlide;
    } else {
      closeStory();
    }
  }, [activeStory, activeSlideIdx, activeStoryIdx, closeStory]);

  // Prev slide
  const prevSlide = useCallback(() => {
    if (!activeStory) return;
    if (activeSlideIdx > 0) {
      setActiveSlideIdx((prev) => prev - 1);
      setProgress(0);
      remainingTimeRef.current = durationPerSlide;
    } else if (activeStoryIdx > 0) {
      // Go back to previous highlight category
      const prevStory = HIGHLIGHTS[activeStoryIdx - 1];
      setActiveStoryIdx((prev) => prev - 1);
      setActiveSlideIdx(prevStory.slides.length - 1);
      setProgress(0);
      remainingTimeRef.current = durationPerSlide;
    }
  }, [activeStory, activeSlideIdx, activeStoryIdx]);

  // Handle open story from cover
  const handleOpenStory = (index, e) => {
    lastActiveTriggerRef.current = e.currentTarget;
    setActiveStoryIdx(index);
    setActiveSlideIdx(0);
    setProgress(0);
    setIsPaused(false);
    remainingTimeRef.current = durationPerSlide;
  };

  // Timer & Progress Animation
  useEffect(() => {
    if (!activeStory || isReducedMotion || isPaused) return;

    startTimeRef.current = Date.now();
    const intervalMs = 30;

    const interval = setInterval(() => {
      setProgress((prev) => {
        const step = (intervalMs / durationPerSlide) * 100;
        const nextProg = prev + step;
        if (nextProg >= 100) {
          clearInterval(interval);
          nextSlide();
          return 0;
        }
        return nextProg;
      });
    }, intervalMs);

    return () => clearInterval(interval);
  }, [activeStory, activeSlideIdx, isPaused, isReducedMotion, nextSlide]);

  // Keyboard navigation & Focus trapping
  useEffect(() => {
    if (activeStoryIdx === null) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeStory();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === ' ' || e.key === 'Spacebar') {
        e.preventDefault();
        setIsPaused((p) => !p);
      } else if (e.key === 'Tab' && modalRef.current) {
        const focusables = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Initial focus on close button
    const timer = setTimeout(() => {
      if (modalRef.current) {
        const closeBtn = modalRef.current.querySelector('#story-close-btn');
        if (closeBtn) closeBtn.focus();
      }
    }, 50);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      clearTimeout(timer);
    };
  }, [activeStoryIdx, closeStory, nextSlide, prevSlide]);

  // Touch Swipe-down to close
  const handleTouchStart = (e) => {
    touchStartYRef.current = e.touches[0].clientY;
    setIsPaused(true);
  };

  const handleTouchEnd = (e) => {
    setIsPaused(false);
    if (!touchStartYRef.current) return;
    const touchEndY = e.changedTouches[0].clientY;
    const diffY = touchEndY - touchStartYRef.current;
    if (diffY > 80) {
      closeStory();
    }
    touchStartYRef.current = null;
  };

  const renderIcon = (iconName) => {
    switch (iconName) {
      case 'briefcase':
        return <Briefcase className="w-3.5 h-3.5" />;
      case 'graduation':
        return <GraduationCap className="w-3.5 h-3.5" />;
      case 'compass':
        return <Compass className="w-3.5 h-3.5" />;
      case 'award':
        return <Award className="w-3.5 h-3.5" />;
      default:
        return <Sparkles className="w-3.5 h-3.5" />;
    }
  };

  return (
    <section id="highlights" className="relative px-5 md:px-10 py-12 max-w-7xl mx-auto z-10 border-b border-[rgba(236,235,230,0.14)] text-left">
      {/* Section Header */}
      <div className="rv flex items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs uppercase tracking-widest text-[#d4ff4f]">
            (Story Highlights)
          </span>
          <span className="w-8 h-px bg-white/20" />
          <span className="text-xs text-neutral-400 font-mono hidden sm:inline">
            Professional • NCET College • My Lyfff
          </span>
        </div>
        <span className="text-[11px] font-mono text-neutral-400">
          Tap any story to watch
        </span>
      </div>

      {/* Horizontal Story Highlight Circles Row */}
      <div className="rv-stagger flex items-center gap-6 sm:gap-8 overflow-x-auto pb-4 pt-1 no-scrollbar focus:outline-hidden">
        {HIGHLIGHTS.map((hl, index) => (
          <button
            key={hl.id}
            onClick={(e) => handleOpenStory(index, e)}
            className="group flex flex-col items-center gap-2.5 shrink-0 focus-visible:outline-2 focus-visible:outline-[#d4ff4f] focus-visible:outline-offset-4 rounded-2xl p-1 transition-transform hover:scale-105 active:scale-95 text-center"
            data-cursor="pointer"
            aria-label={`Open ${hl.title} story highlight with ${hl.slides.length} slides`}
          >
            {/* Story Ring Container */}
            <div className="relative p-[3px] rounded-full bg-gradient-to-tr from-[#d4ff4f] via-[#00baf2] to-[#a855f7] shadow-[0_4px_16px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_20px_rgba(212,255,79,0.4)] transition-all">
              <div className="p-0.5 rounded-full bg-[#080808]">
                <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-full overflow-hidden relative border border-white/10">
                  <img
                    src={hl.coverImg}
                    alt={hl.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Subtle Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
              </div>
            </div>

            {/* Label and Badge */}
            <div className="flex flex-col items-center">
              <span className="text-xs font-medium text-white tracking-tight group-hover:text-[#d4ff4f] transition-colors">
                {hl.title}
              </span>
              <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">
                {hl.badge}
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* ========================================================= */}
      {/* FULLSCREEN ACCESSIBLE INSTAGRAM STORY VIEWER              */}
      {/* ========================================================= */}
      {activeStory && currentSlide && (
        <div
          ref={modalRef}
          role="dialog"
          aria-modal="true"
          aria-label={`${activeStory.title} highlight viewer`}
          className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 bg-black/95 backdrop-blur-2xl animate-in fade-in duration-200"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Main Story Container (Instagram 9:16 aspect ratio) */}
          <div className="relative w-full max-w-[420px] h-full sm:h-[88vh] sm:max-h-[840px] sm:rounded-3xl overflow-hidden bg-[#0c0d10] border border-white/15 shadow-2xl flex flex-col justify-between select-none">
            {/* Background Story Image */}
            <img
              src={currentSlide.img}
              alt={currentSlide.alt}
              className="absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-300"
            />

            {/* Ambient Vignette Gradients */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/90 z-10 pointer-events-none" />

            {/* Top Bar: Progress Bars & Controls */}
            <div className="relative z-30 p-4 pt-5 sm:pt-4 space-y-3">
              {/* Segmented Progress Bars */}
              <div className="flex items-center gap-1.5 w-full">
                {activeStory.slides.map((_, idx) => {
                  let fill = 0;
                  if (idx < activeSlideIdx) fill = 100;
                  else if (idx === activeSlideIdx) fill = progress;

                  return (
                    <div
                      key={idx}
                      className="h-1 flex-1 bg-white/25 rounded-full overflow-hidden"
                    >
                      <div
                        className="h-full bg-white transition-all duration-75"
                        style={{ width: `${fill}%` }}
                      />
                    </div>
                  );
                })}
              </div>

              {/* Story Header: Category Icon, Name, Subtitle, Play/Pause, Close */}
              <div className="flex items-center justify-between text-white">
                <div className="flex items-center gap-2.5">
                  <div
                    className="w-8 h-8 rounded-full border border-white/30 overflow-hidden shrink-0 flex items-center justify-center"
                    style={{ backgroundColor: activeStory.color }}
                  >
                    {renderIcon(activeStory.icon)}
                  </div>
                  <div>
                    <span className="font-semibold text-xs tracking-tight block">
                      {activeStory.title}
                    </span>
                    <span className="text-[10px] font-mono text-neutral-300 block">
                      {currentSlide.date}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsPaused(!isPaused)}
                    className="p-1.5 rounded-full bg-black/40 hover:bg-black/60 border border-white/15 text-white transition-colors focus-visible:outline-2 focus-visible:outline-[#d4ff4f]"
                    aria-label={isPaused ? "Resume story" : "Pause story"}
                    data-cursor="pointer"
                  >
                    {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
                  </button>

                  <button
                    id="story-close-btn"
                    onClick={closeStory}
                    className="p-1.5 rounded-full bg-black/40 hover:bg-black/60 border border-white/15 text-white transition-colors focus-visible:outline-2 focus-visible:outline-[#d4ff4f]"
                    aria-label="Close story viewer (Escape)"
                    data-cursor="pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Middle Tap Touch Zones (Left: Prev, Right: Next, Center: Pause) */}
            <div
              className="relative z-20 flex-1 flex"
              onMouseDown={() => setIsPaused(true)}
              onMouseUp={() => setIsPaused(false)}
            >
              {/* Left Tap Zone */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevSlide();
                }}
                className="w-1/3 h-full cursor-w-resize focus:outline-hidden"
                aria-label="Previous story slide"
              />

              {/* Center Hold Zone */}
              <div className="w-1/3 h-full cursor-pointer" />

              {/* Right Tap Zone */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextSlide();
                }}
                className="w-1/3 h-full cursor-e-resize focus:outline-hidden"
                aria-label="Next story slide"
              />
            </div>

            {/* Bottom Caption & Narrative Description */}
            <div className="relative z-30 p-5 pb-6 text-white space-y-2">
              <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider bg-[#d4ff4f]/20 text-[#d4ff4f] border border-[#d4ff4f]/30">
                {currentSlide.tag}
              </span>

              <p className="text-sm font-sans font-normal leading-relaxed text-neutral-100">
                {currentSlide.text}
              </p>

              <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[10px] font-mono text-neutral-400">
                <span>Slide {activeSlideIdx + 1} of {activeStory.slides.length}</span>
                <span className="hidden sm:inline">← / → Arrow keys to navigate • Space to pause</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
