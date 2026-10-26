/* Renders page content from /content/*.json.
   If a file can't be loaded, the static HTML already in index.html stays as the fallback.
   Note: fetch() needs http(s), so test with a local server, not file://. */
(function () {
  'use strict';
  var $ = function (s) { return document.querySelector(s); };
  var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); };
  var em = function (s) { return esc(s).replace(/\*(.+?)\*/g, '<span class="font-serif italic font-normal text-[#d4ff4f]">$1</span>'); };
  var safeUrl = function (u) { return /^(https?:|mailto:|assets\/|\.\/|\/)/.test(u || '') ? u : '#'; };
  function get(url) {
    return fetch(url, { cache: 'no-cache' }).then(function (r) { if (!r.ok) throw new Error(url); return r.json(); }).catch(function () { return null; });
  }

  function applySite(d) {
    var h = d.hero || {}, a = d.about || {}, c = d.contact || {};
    var kickerEl = $('#home .kicker') || $('.kicker');
    if (h.kicker && kickerEl) kickerEl.textContent = h.kicker;
    var headlineEl = $('#hero-title') || $('h1');
    if (h.headline && headlineEl) headlineEl.innerHTML = em(h.headline);
    var leadEl = $('#home .lead') || $('.lead');
    if (h.lead && leadEl) leadEl.textContent = h.lead;
    var factsEl = $('#home .facts') || $('.facts');
    if (h.facts && h.facts.length && factsEl) {
      factsEl.innerHTML = h.facts.map(function (f) { return '<div><dt>' + esc(f.label) + '</dt><dd>' + esc(f.value) + '</dd></div>'; }).join('');
    }
    var pill = $('#availability');
    if (pill) { if (d.availability) { pill.textContent = d.availability; pill.hidden = false; } else pill.hidden = true; }
    var stmtEl = $('#info .statement') || $('.statement');
    if (a.statement && stmtEl) { stmtEl.textContent = a.statement; stmtEl.classList.add('protected-content'); stmtEl.setAttribute('data-protect-content', 'true'); }
    var proseEl = $('#info .prose') || $('.prose');
    if (a.paragraph && proseEl) { proseEl.textContent = a.paragraph; proseEl.classList.add('protected-content'); proseEl.setAttribute('data-protect-content', 'true'); }
    if (c.email) document.querySelectorAll('[data-cms="email"]').forEach(function (el) { el.href = 'mailto:' + c.email; el.textContent = c.email; });
    ['linkedin', 'behance', 'instagram'].forEach(function (k) {
      if (c[k]) document.querySelectorAll('[data-cms="' + k + '"]').forEach(function (el) { el.href = safeUrl(c[k]); });
    });
  }

  function card(p) {
    var cover = (p.image ? '<img src="' + esc(safeUrl(p.image)) + '" alt="' + esc(p.image_alt || '') + '" loading="lazy" decoding="async" width="800" height="450" draggable="false" data-protect-image="true" class="protect-img">' : '') +
      (p.stat ? '<p class="stat">' + esc(p.stat) + '</p>' : '') + (p.stat_label ? '<p>' + esc(p.stat_label) + '</p>' : '');
    return '<li data-category="' + esc(p.category) + '"><article class="card" style="--h:' + (+p.hue || 210) + '"><div class="cover">' + cover + '</div><div class="body">' +
      '<p class="meta">' + esc(p.index) + ' · ' + esc(p.kind) + ' · ' + esc(p.year) + '</p><h3>' + esc(p.title) + '</h3><p class="desc protected-content" data-protect-content="true">' + esc(p.description) + '</p>' +
      '<ul class="tags">' + (p.tags || []).map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('') + '</ul>' +
      (p.link_url ? '<p><a class="card-link" href="' + esc(safeUrl(p.link_url)) + '" target="_blank" rel="noopener noreferrer">' + esc(p.link_label || 'View proof') + ' ↗</a></p>' : '') +
      (p.recognition ? '<p class="rec">' + esc(p.recognition) + '</p>' : '') + '</div></article></li>';
  }
  function applyProjects(d) {
    if (!d || !d.projects || !d.projects.length || !$('#cards')) return;
    $('#cards').innerHTML = d.projects.map(card).join('');
    if ($('#work-count')) $('#work-count').textContent = d.projects.length + (d.projects.length === 1 ? ' project' : ' projects');
  }
  function applyExperience(d) {
    var timelineEl = $('.timeline');
    if (d.timeline && d.timeline.length && timelineEl) {
      timelineEl.innerHTML = d.timeline.map(function (t) { return '<li><strong>' + esc(t.role) + '</strong><span>' + esc(t.org) + '</span><time>' + esc(t.dates) + '</time></li>'; }).join('');
    }
    var colsEl = $('#info .cols') || $('.cols');
    if (d.columns && d.columns.length && colsEl) {
      colsEl.innerHTML = d.columns.map(function (c) { return '<div><h4>' + esc(c.title) + '</h4><ul class="plain">' + (c.items || []).map(function (i) { return '<li>' + esc(i) + '</li>'; }).join('') + '</ul></div>'; }).join('');
    }
  }

  function init() {
    Promise.all([get('content/site.json'), get('content/projects.json'), get('content/experience.json')]).then(function (r) {
      try { if (r[0]) applySite(r[0]); if (r[1]) applyProjects(r[1]); if (r[2]) applyExperience(r[2]); } catch (e) { /* keep static fallback */ }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    setTimeout(init, 50);
  }
})();
