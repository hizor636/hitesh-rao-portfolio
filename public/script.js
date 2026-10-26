/**
 * script.js — Interactive handlers for Hitesh Rao M Portfolio
 * Vanilla JS, accessible, zero external dependencies.
 */
(function () {
  'use strict';

  // 1. Work Filter: Query cards dynamically at click time so re-rendered CMS cards are read
  document.addEventListener('click', function (e) {
    var btn = e.target.closest('[data-filter]') || e.target.closest('[data-f]');
    if (!btn) return;

    var category = btn.getAttribute('data-filter') || btn.getAttribute('data-f') || 'ALL';

    // Update active filter button state
    document.querySelectorAll('[data-filter], [data-f]').forEach(function (b) {
      b.classList.toggle('active', b === btn);
    });

    // Query "#cards > li" inside the click handler at click time
    var cards = document.querySelectorAll('#cards > li');
    cards.forEach(function (card) {
      var cardCat = card.getAttribute('data-category') || '';
      if (category === 'ALL' || category === 'All' || cardCat.toLowerCase() === category.toLowerCase()) {
        card.style.display = '';
        card.removeAttribute('hidden');
      } else {
        card.style.display = 'none';
        card.setAttribute('hidden', '');
      }
    });
  });

  // 2. Mobile navigation toggle handler
  var menuBtn = document.querySelector('#menu-btn') || document.querySelector('[data-menu-toggle]');
  var navMenu = document.querySelector('#nav-menu') || document.querySelector('#mobile-nav');
  if (menuBtn && navMenu) {
    menuBtn.addEventListener('click', function () {
      var isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
      menuBtn.setAttribute('aria-expanded', !isExpanded);
      navMenu.classList.toggle('open');
    });
  }

  // 3. Contact form mailto dispatcher
  document.addEventListener('submit', function (e) {
    var form = e.target;
    if (form.id !== 'contact-form' && form.id !== 'cf') return;
    e.preventDefault();

    var nameInput = form.querySelector('[name="name"]') || form.querySelector('#name') || form.querySelector('#n');
    var emailInput = form.querySelector('[name="email"]') || form.querySelector('#email') || form.querySelector('#e');
    var msgInput = form.querySelector('[name="message"]') || form.querySelector('#message') || form.querySelector('#m');

    var name = nameInput ? nameInput.value.trim() : '';
    var email = emailInput ? emailInput.value.trim() : '';
    var msg = msgInput ? msgInput.value.trim() : '';

    if (msg.length < 5) return;

    var recipient = 'hiteshraom@email.com';
    var subject = encodeURIComponent('Portfolio Contact from ' + (name || 'Visitor'));
    var body = encodeURIComponent(msg + '\n\n' + name + ' (' + email + ')');

    window.location.href = 'mailto:' + recipient + '?subject=' + subject + '&body=' + body;
  });

  // 4. Visitor Protections (casual copying deterrents)
  var toastTimer = null;
  var lastToast = 0;
  function showToast(msg) {
    if (window.__showProtectionToast) {
      window.__showProtectionToast(msg);
      return;
    }
    var now = Date.now();
    if (now - lastToast < 400) return;
    lastToast = now;

    var toast = document.getElementById('protection-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'protection-toast';
      toast.className = 'protection-toast';
      toast.setAttribute('role', 'status');
      toast.setAttribute('aria-live', 'polite');
      toast.setAttribute('aria-atomic', 'true');
      toast.innerHTML = '<span class="protection-toast-badge" aria-hidden="true">🛡️</span><span id="protection-toast-text"></span>';
      document.body.appendChild(toast);
    }
    var txt = toast.querySelector('#protection-toast-text') || toast;
    txt.textContent = msg;
    toast.classList.add('show');
    toast.setAttribute('aria-hidden', 'false');

    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      toast.classList.remove('show');
      toast.setAttribute('aria-hidden', 'true');
    }, 2500);
  }

  function isSelectable(node) {
    if (!node) return false;
    var el = node.nodeType === 1 ? node : node.parentElement;
    if (!el || !el.closest) return false;
    return !!el.closest('input, textarea, select, button, nav, [data-cms="email"], [data-cms="linkedin"], [data-cms="behance"], [data-cms="instagram"], .contact-detail, .selectable, a[href^="mailto:"], a[href^="tel:"]');
  }

  function isProtected(node) {
    if (!node) return false;
    var el = node.nodeType === 1 ? node : node.parentElement;
    if (!el || !el.closest) return false;
    return !!el.closest('.protected-content, [data-protect-content="true"], #about .prose, #about .statement, .card .body p');
  }

  function isImg(node) {
    if (!node) return false;
    var el = node.nodeType === 1 ? node : node.parentElement;
    if (!el || !el.closest) return false;
    return el.tagName === 'IMG' || !!el.closest('img, [data-protect-image="true"], .protect-img, .hl-avatar-box, .hl-modal, .card .cover');
  }

  document.addEventListener('contextmenu', function (e) {
    if (isImg(e.target)) {
      e.preventDefault();
      showToast('Image protection is enabled.');
    }
  });

  document.addEventListener('dragstart', function (e) {
    if (isImg(e.target)) {
      e.preventDefault();
      showToast('Image protection is enabled.');
    }
  });

  document.addEventListener('copy', function (e) {
    var sel = window.getSelection();
    var anchor = sel ? sel.anchorNode : null;
    if (isSelectable(e.target) || isSelectable(anchor)) return;
    if (isProtected(e.target) || isProtected(anchor)) {
      e.preventDefault();
      showToast('Content protection is enabled.');
    }
  });

  document.addEventListener('cut', function (e) {
    var sel = window.getSelection();
    var anchor = sel ? sel.anchorNode : null;
    if (isSelectable(e.target) || isSelectable(anchor)) return;
    if (isProtected(e.target) || isProtected(anchor)) {
      e.preventDefault();
      showToast('Content protection is enabled.');
    }
  });

  document.addEventListener('selectstart', function (e) {
    if (isSelectable(e.target)) return;
    if (isProtected(e.target)) {
      e.preventDefault();
      showToast('Content protection is enabled.');
    }
  });
})();
