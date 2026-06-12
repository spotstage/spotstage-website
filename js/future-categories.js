/**
 * SPOTSTAGE – Vision / roadmap categories
 * No external dependencies.
 */

(function () {
  'use strict';

  var VISION_ICONS = {
    comedy:
      '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>',
    music:
      '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>',
    poetry:
      '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 7v14"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/></svg>',
    variety:
      '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 16.1A5.9 5.9 0 0 1 7.9 10H12a5.9 5.9 0 0 1 5.9 6.1"/><path d="M6.2 20.9A7 7 0 0 1 12 18a7 7 0 0 1 5.8 2.9"/><path d="M22 16.1A5.9 5.9 0 0 0 16.1 10H12a5.9 5.9 0 0 0-5.9 6.1"/><path d="M17.8 20.9A7 7 0 0 0 12 18a7 7 0 0 0-5.8 2.9"/><circle cx="9" cy="10" r="1"/><circle cx="15" cy="10" r="1"/></svg>',
  };

  function getVisionData() {
    var locale = window.SpotstageI18n ? window.SpotstageI18n.getLocale() : 'de';
    var translations = window.SpotstageTranslations && window.SpotstageTranslations[locale];

    if (translations && translations.futureCategories) {
      return translations.futureCategories;
    }

    return window.SpotstageTranslations.de.futureCategories;
  }

  function buildMailtoHref(data) {
    if (!data || !data.ctaEmail) return '#';

    var params = [
      'subject=' + encodeURIComponent(data.ctaMailSubject || ''),
      'body=' + encodeURIComponent(data.ctaMailBody || ''),
    ].join('&');

    return 'mailto:' + data.ctaEmail + '?' + params;
  }

  function renderVisionCard(item, index) {
    var panelAccent =
      item.type === 'live' ? 'comparison__panel--artist' : 'comparison__panel--organizer';
    var liveClass = item.type === 'live' ? ' vision-card--live' : '';
    var iconSize = item.type === 'live' ? 26 : 24;
    var iconMarkup = (VISION_ICONS[item.icon] || '').replace(
      /width="\d+" height="\d+"/,
      'width="' + iconSize + '" height="' + iconSize + '"'
    );

    return (
      '<article class="comparison__panel ' +
      panelAccent +
      ' vision-card' +
      liveClass +
      '" role="listitem" style="--reveal-delay: ' +
      index * 70 +
      'ms">' +
      '<div class="vision-card__icon" aria-hidden="true">' +
      iconMarkup +
      '</div>' +
      '<div class="vision-card__body">' +
      '<h3 class="comparison__panel-title vision-card__title">' +
      item.title +
      '</h3>' +
      '<div class="vision-card__divider" aria-hidden="true"></div>' +
      '<p class="vision-card__text comparison__panel-subline">' +
      item.description +
      '</p>' +
      '</div>' +
      '<span class="vision-card__status">' +
      item.status +
      '</span>' +
      '</article>'
    );
  }

  function renderVisionGrid() {
    var grid = document.getElementById('future-categories-grid');
    if (!grid) return;

    var data = getVisionData();
    if (!data || !data.items) return;

    grid.innerHTML = data.items
      .map(function (item, index) {
        return renderVisionCard(item, index);
      })
      .join('');
  }

  function renderVisionCta() {
    var link = document.getElementById('vision-cta-link');
    if (!link) return;

    link.href = buildMailtoHref(getVisionData());
  }

  function initScrollReveal() {
    var prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    var cards = document.querySelectorAll('.vision-card');

    if (!cards.length) return;

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      cards.forEach(function (card) {
        card.classList.add('is-visible');
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: '0px 0px -6% 0px', threshold: 0.12 }
    );

    cards.forEach(function (card) {
      observer.observe(card);
    });
  }

  function initVision() {
    renderVisionGrid();
    renderVisionCta();
    initScrollReveal();
  }

  document.addEventListener('DOMContentLoaded', initVision);
  document.addEventListener('spotstage:localechange', initVision);
})();
