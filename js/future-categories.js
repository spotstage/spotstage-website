/**
 * SPOTSTAGE – Vision / roadmap categories
 * No external dependencies.
 */

(function () {
  'use strict';

  var VISION_ICONS = {
    comedy: 'images/icons/mikrofon.svg',
    poetry: 'images/icons/bucher.svg',
    variety: 'images/icons/kaninchen.svg',
    music: 'images/icons/musik.svg',
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
    var iconSrc = VISION_ICONS[item.icon];
    var iconMarkup = iconSrc
      ? '<img src="' + iconSrc + '" alt="" width="32" height="32">'
      : '';

    return (
      '<article class="comparison__panel ' +
      panelAccent +
      ' vision-card' +
      liveClass +
      '" style="--reveal-delay: ' +
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
