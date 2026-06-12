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
    initNavActiveState();
    initSmoothScroll();
    initCTAHelpers();
  }

  /* --------------------------------------------------------------------------
     Mobile Navigation Toggle
     -------------------------------------------------------------------------- */

  function initMobileNav() {
    var toggle = document.getElementById('nav-toggle');
    var nav = document.getElementById('site-nav');
    var mobileNavMq = window.matchMedia('(max-width: 1023px)');

    if (!toggle || !nav) return;

    var firstNavLink = nav.querySelector('.site-nav__link');

    function isMobileNav() {
      return mobileNavMq.matches;
    }

    function setNavOpen(isOpen, options) {
      options = options || {};

      nav.classList.toggle('is-open', isOpen);
      document.body.classList.toggle('nav-open', isOpen && isMobileNav());
      toggle.setAttribute('aria-expanded', String(isOpen));
      toggle.setAttribute('aria-label', getNavToggleLabel(isOpen));

      if (!isMobileNav()) return;

      if (isOpen && firstNavLink) {
        firstNavLink.focus();
      } else if (!isOpen && options.restoreFocus !== false) {
        toggle.focus();
      }
    }

    toggle.addEventListener('click', function () {
      setNavOpen(!nav.classList.contains('is-open'));
    });

    nav.addEventListener('click', function (event) {
      if (
        event.target.matches('.site-nav__link') ||
        event.target.matches('.mobile-nav__legal-link')
      ) {
        setNavOpen(false, { restoreFocus: false });
      }
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && nav.classList.contains('is-open')) {
        setNavOpen(false);
      }
    });

    mobileNavMq.addEventListener('change', function () {
      if (!mobileNavMq.matches && nav.classList.contains('is-open')) {
        setNavOpen(false, { restoreFocus: false });
      }
    });
  }

  function getNavToggleLabel(isOpen) {
    if (window.SpotstageI18n) {
      return isOpen
        ? window.SpotstageI18n.t('nav.close')
        : window.SpotstageI18n.t('nav.open');
    }

    return isOpen ? 'Navigation schließen' : 'Navigation öffnen';
  }

  /* --------------------------------------------------------------------------
     Active nav link (current section)
     -------------------------------------------------------------------------- */

  function initNavActiveState() {
    var nav = document.getElementById('site-nav');
    if (!nav) return;

    var links = Array.prototype.slice.call(
      nav.querySelectorAll('.site-nav__link[href^="#"]')
    );
    if (!links.length) return;

    var sections = links
      .map(function (link) {
        var target = document.querySelector(link.getAttribute('href'));
        return target ? { link: link, section: target } : null;
      })
      .filter(Boolean);

    if (!sections.length) return;

    function setActiveLink(activeLink) {
      links.forEach(function (link) {
        var isActive = activeLink !== null && link === activeLink;
        link.classList.toggle('is-active', isActive);
        if (isActive) {
          link.setAttribute('aria-current', 'true');
        } else {
          link.removeAttribute('aria-current');
        }
      });
    }

    function getSectionTop(section) {
      return section.getBoundingClientRect().top + window.scrollY;
    }

    function updateActiveLink() {
      var headerHeight =
        document.getElementById('site-header')?.offsetHeight || 0;
      var scrollMarker = window.scrollY + headerHeight + 96;
      var current = null;

      sections.forEach(function (entry) {
        if (getSectionTop(entry.section) <= scrollMarker) {
          current = entry;
        }
      });

      setActiveLink(current ? current.link : null);
    }

    updateActiveLink();
    window.addEventListener('scroll', updateActiveLink, { passive: true });
    window.addEventListener('resize', updateActiveLink);
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
