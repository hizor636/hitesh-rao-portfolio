/**
 * highlights.js — Instagram-style Story Highlights for Hitesh Rao M Portfolio
 * Vanilla JS, accessible, keyboard-friendly, zero dependencies.
 */

// ============================================================================
// HIGHLIGHTS CONFIGURATION
// Add or edit highlights and slides below.
// Each slide supports: img (photo path), alt (accessibility), tag, date, text.
// ============================================================================
const HIGHLIGHTS = [
  {
    id: 'professional',
    title: 'Professional',
    badge: 'Events & Ops',
    coverImg: '/images/highlight-professional.jpg',
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
    coverImg: '/images/highlight-college.jpg',
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
    coverImg: '/images/highlight-life.jpg',
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
    coverImg: '/images/hitesh-profile.jpg',
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

// ============================================================================
// HIGHLIGHTS ENGINE
// ============================================================================
(function initStoryHighlights() {
  const DURATION = 5000;
  const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let currentCategoryIdx = 0;
  let currentSlideIdx = 0;
  let isPaused = false;
  let progress = 0;
  let timerId = null;
  let lastActiveTrigger = null;
  let touchStartY = null;

  const rowEl = document.getElementById('hl-row');
  if (!rowEl) return;

  // Render Horizontal Circles
  rowEl.innerHTML = HIGHLIGHTS.map((hl, idx) => `
    <button class="hl-circle" data-index="${idx}" aria-label="Open ${hl.title} highlights with ${hl.slides.length} slides">
      <div class="hl-ring">
        <div class="hl-avatar-box">
          <img class="hl-avatar" src="${hl.coverImg}" alt="${hl.title}" loading="lazy">
        </div>
      </div>
      <span class="hl-label">${hl.title}</span>
      <span class="hl-badge">${hl.badge}</span>
    </button>
  `).join('');

  // Create Viewer Modal
  const viewer = document.createElement('div');
  viewer.id = 'hl-viewer-modal';
  viewer.className = 'hl-viewer';
  viewer.setAttribute('role', 'dialog');
  viewer.setAttribute('aria-modal', 'true');
  viewer.setAttribute('aria-label', 'Highlight Viewer');
  viewer.innerHTML = `
    <div class="hl-modal" id="hl-modal-box">
      <img id="hl-img" class="hl-bg-img" src="" alt="">
      <div class="hl-vignette"></div>

      <div class="hl-top">
        <div id="hl-bars" class="hl-bars"></div>
        <div class="hl-header-bar">
          <div class="hl-header-info">
            <div>
              <div id="hl-title-text" class="hl-header-title"></div>
              <div id="hl-date-text" class="hl-header-sub"></div>
            </div>
          </div>
          <div class="hl-controls">
            <button id="hl-pause-btn" class="hl-btn-icon" aria-label="Pause slide">⏸</button>
            <button id="hl-close-btn" class="hl-btn-icon" aria-label="Close highlights">✕</button>
          </div>
        </div>
      </div>

      <div class="hl-tap-zones">
        <button id="hl-tap-left" class="hl-tap-left" aria-label="Previous slide"></button>
        <button id="hl-tap-right" class="hl-tap-right" aria-label="Next slide"></button>
      </div>

      <div class="hl-bottom">
        <div id="hl-tag-text" class="hl-tag"></div>
        <p id="hl-desc-text" class="hl-text"></p>
      </div>
    </div>
  `;
  document.body.appendChild(viewer);

  const imgEl = viewer.querySelector('#hl-img');
  const barsEl = viewer.querySelector('#hl-bars');
  const titleText = viewer.querySelector('#hl-title-text');
  const dateText = viewer.querySelector('#hl-date-text');
  const tagText = viewer.querySelector('#hl-tag-text');
  const descText = viewer.querySelector('#hl-desc-text');
  const pauseBtn = viewer.querySelector('#hl-pause-btn');
  const closeBtn = viewer.querySelector('#hl-close-btn');
  const tapLeft = viewer.querySelector('#hl-tap-left');
  const tapRight = viewer.querySelector('#hl-tap-right');
  const modalBox = viewer.querySelector('#hl-modal-box');

  function updateBars() {
    const category = HIGHLIGHTS[currentCategoryIdx];
    barsEl.innerHTML = category.slides.map((_, i) => {
      let width = 0;
      if (i < currentSlideIdx) width = 100;
      else if (i === currentSlideIdx) width = progress;
      return `<div class="hl-bar ${i < currentSlideIdx ? 'done' : ''}"><div class="hl-bar-fill" style="width:${width}%"></div></div>`;
    }).join('');
  }

  function renderSlide() {
    const category = HIGHLIGHTS[currentCategoryIdx];
    const slide = category.slides[currentSlideIdx];

    imgEl.src = slide.img;
    imgEl.alt = slide.alt;
    titleText.textContent = category.title;
    dateText.textContent = slide.date;
    tagText.textContent = slide.tag;
    descText.textContent = slide.text;
    progress = 0;
    updateBars();
  }

  function next() {
    const category = HIGHLIGHTS[currentCategoryIdx];
    if (currentSlideIdx < category.slides.length - 1) {
      currentSlideIdx++;
      renderSlide();
    } else if (currentCategoryIdx < HIGHLIGHTS.length - 1) {
      currentCategoryIdx++;
      currentSlideIdx = 0;
      renderSlide();
    } else {
      close();
    }
  }

  function prev() {
    if (currentSlideIdx > 0) {
      currentSlideIdx--;
      renderSlide();
    } else if (currentCategoryIdx > 0) {
      currentCategoryIdx--;
      currentSlideIdx = HIGHLIGHTS[currentCategoryIdx].slides.length - 1;
      renderSlide();
    }
  }

  function startTimer() {
    clearInterval(timerId);
    if (isReducedMotion || isPaused) return;

    const intervalMs = 40;
    timerId = setInterval(() => {
      progress += (intervalMs / DURATION) * 100;
      if (progress >= 100) {
        clearInterval(timerId);
        next();
      } else {
        const activeBarFill = barsEl.querySelectorAll('.hl-bar-fill')[currentSlideIdx];
        if (activeBarFill) activeBarFill.style.width = `${progress}%`;
      }
    }, intervalMs);
  }

  function togglePause() {
    isPaused = !isPaused;
    pauseBtn.textContent = isPaused ? '▶' : '⏸';
    pauseBtn.setAttribute('aria-label', isPaused ? 'Resume slide' : 'Pause slide');
    if (!isPaused) startTimer();
    else clearInterval(timerId);
  }

  function open(catIdx, triggerEl) {
    lastActiveTrigger = triggerEl;
    currentCategoryIdx = catIdx;
    currentSlideIdx = 0;
    isPaused = false;
    pauseBtn.textContent = '⏸';
    renderSlide();
    viewer.classList.add('open');
    document.body.style.overflow = 'hidden';
    startTimer();
    closeBtn.focus();
  }

  function close() {
    viewer.classList.remove('open');
    clearInterval(timerId);
    document.body.style.overflow = '';
    if (lastActiveTrigger) lastActiveTrigger.focus();
  }

  // Event Listeners
  rowEl.addEventListener('click', (e) => {
    const btn = e.target.closest('.hl-circle');
    if (!btn) return;
    const idx = parseInt(btn.dataset.index, 10);
    open(idx, btn);
  });

  closeBtn.addEventListener('click', close);
  pauseBtn.addEventListener('click', togglePause);
  tapLeft.addEventListener('click', (e) => { e.stopPropagation(); prev(); });
  tapRight.addEventListener('click', (e) => { e.stopPropagation(); next(); });

  // Press-and-hold to pause
  modalBox.addEventListener('mousedown', () => { if (!isPaused) { clearInterval(timerId); } });
  modalBox.addEventListener('mouseup', () => { if (!isPaused) { startTimer(); } });

  // Touch handling
  modalBox.addEventListener('touchstart', (e) => {
    touchStartY = e.touches[0].clientY;
    if (!isPaused) clearInterval(timerId);
  }, { passive: true });

  modalBox.addEventListener('touchend', (e) => {
    if (touchStartY !== null) {
      const diffY = e.changedTouches[0].clientY - touchStartY;
      if (diffY > 75) {
        close();
        return;
      }
      touchStartY = null;
    }
    if (!isPaused) startTimer();
  }, { passive: true });

  // Keyboard navigation & Focus trapping
  window.addEventListener('keydown', (e) => {
    if (!viewer.classList.contains('open')) return;

    if (e.key === 'Escape') {
      close();
    } else if (e.key === 'ArrowRight') {
      next();
    } else if (e.key === 'ArrowLeft') {
      prev();
    } else if (e.key === ' ' || e.key === 'Spacebar') {
      e.preventDefault();
      togglePause();
    } else if (e.key === 'Tab') {
      const focusables = viewer.querySelectorAll('button, [tabindex]:not([tabindex="-1"])');
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });
})();
