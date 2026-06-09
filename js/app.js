/**
 * SPOTSTAGE Website – Minimal JavaScript
 * No external dependencies.
 */

(function () {
  'use strict';

  /* --------------------------------------------------------------------------
     DOM Ready
     -------------------------------------------------------------------------- */

  document.addEventListener('DOMContentLoaded', init);

  function init() {
    initMobileNav();
    initSmoothScroll();
    initCurrentYear();
    initCTAHelpers();
  }

  /* --------------------------------------------------------------------------
     Mobile Navigation Toggle
     -------------------------------------------------------------------------- */

  function initMobileNav() {
    var toggle = document.getElementById('nav-toggle');
    var nav = document.getElementById('site-nav');

    if (!toggle || !nav) return;

    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
      toggle.setAttribute(
        'aria-label',
        isOpen ? 'Navigation schließen' : 'Navigation öffnen'
      );
    });

    nav.addEventListener('click', function (event) {
      if (event.target.matches('.site-nav__link')) {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Navigation öffnen');
      }
    });
  }

  /* --------------------------------------------------------------------------
     Smooth Scrolling (enhanced for reduced-motion users)
     -------------------------------------------------------------------------- */

  function initSmoothScroll() {
    var prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) return;

    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (event) {
        var targetId = this.getAttribute('href');

        if (targetId === '#') return;

        var target = document.querySelector(targetId);

        if (!target) return;

        event.preventDefault();

        var headerHeight =
          document.getElementById('site-header')?.offsetHeight || 0;

        var targetPosition =
          target.getBoundingClientRect().top + window.scrollY - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        });

        target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
      });
    });
  }

  /* --------------------------------------------------------------------------
     Current Year (Footer)
     -------------------------------------------------------------------------- */

  function initCurrentYear() {
    var yearElements = document.querySelectorAll('#current-year');

    yearElements.forEach(function (el) {
      el.textContent = String(new Date().getFullYear());
    });
  }

  /* --------------------------------------------------------------------------
     CTA Helper Functions
     -------------------------------------------------------------------------- */

  var STORE_URLS = {
    apple: '#',   // TODO: Replace with App Store URL
    google: '#',  // TODO: Replace with Google Play URL
  };

  function initCTAHelpers() {
    document.querySelectorAll('[data-store]').forEach(function (link) {
      link.addEventListener('click', function (event) {
        var store = this.getAttribute('data-store');
        var url = STORE_URLS[store];

        if (!url || url === '#') {
          event.preventDefault();
          console.info('[SPOTSTAGE] Store URL not yet configured:', store);
          return;
        }

        trackCTAClick(store);
      });
    });
  }

  /**
   * Track CTA clicks – placeholder for future analytics integration.
   * @param {string} store - 'apple' | 'google'
   */
  function trackCTAClick(store) {
    console.info('[SPOTSTAGE] CTA click:', store);
    // Future: window.gtag?.('event', 'download_click', { store: store });
  }

  /* --------------------------------------------------------------------------
     Public API (optional helpers for future use)
     -------------------------------------------------------------------------- */

  window.Spotstage = {
    trackCTAClick: trackCTAClick,
    getStoreUrl: function (store) {
      return STORE_URLS[store] || null;
    },
    setStoreUrl: function (store, url) {
      if (STORE_URLS.hasOwnProperty(store)) {
        STORE_URLS[store] = url;
      }
    },
  };
})();
