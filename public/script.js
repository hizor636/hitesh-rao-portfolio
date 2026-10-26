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
})();
