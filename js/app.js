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
    initSkipLink();
    initMobileNav();
    initNavActiveState();
    initSmoothScroll();
    initCTAHelpers();
  }

  /* --------------------------------------------------------------------------
     Skip link – focus main content
     -------------------------------------------------------------------------- */

  function initSkipLink() {
    var skipLink = document.querySelector('.skip-link');
    var main = document.getElementById('main-content');
    if (!skipLink || !main) return;

    skipLink.addEventListener('click', function (event) {
      event.preventDefault();

      if (!main.hasAttribute('tabindex')) {
        main.setAttribute('tabindex', '-1');
      }

      main.focus({ preventScroll: true });

      var headerHeight =
        document.getElementById('site-header')?.offsetHeight || 0;
      var mainTop = main.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: Math.max(0, mainTop - headerHeight - 8),
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
          ? 'auto'
          : 'smooth',
      });
    });
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
    var main = document.getElementById('main-content');
    var footer = document.querySelector('.site-footer');

    function isMobileNav() {
      return mobileNavMq.matches;
    }

    function setPageInert(inert) {
      if (!isMobileNav()) return;

      [main, footer].forEach(function (region) {
        if (!region) return;
        if (inert) {
          region.setAttribute('inert', '');
        } else {
          region.removeAttribute('inert');
        }
      });
    }

    function getFocusableNavElements() {
      return Array.prototype.slice.call(
        nav.querySelectorAll(
          'a[href]:not([tabindex="-1"]), button:not([disabled]):not([tabindex="-1"])'
        )
      );
    }

    function setNavOpen(isOpen, options) {
      options = options || {};

      nav.classList.toggle('is-open', isOpen);
      document.body.classList.toggle('nav-open', isOpen && isMobileNav());
      toggle.setAttribute('aria-expanded', String(isOpen));
      toggle.setAttribute('aria-label', getNavToggleLabel(isOpen));
      setPageInert(isOpen);

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

    nav.addEventListener('keydown', function (event) {
      if (event.key !== 'Tab' || !nav.classList.contains('is-open') || !isMobileNav()) {
        return;
      }

      var focusable = getFocusableNavElements();
      if (!focusable.length) return;

      var first = focusable[0];
      var last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        toggle.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        toggle.focus();
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
      setPageInert(false);
    });
  }

  function getNavToggleLabel(isOpen) {
    if (window.SpotstageI18n) {
      return isOpen
        ? window.SpotstageI18n.t('nav.close')
        : window.SpotstageI18n.t('nav.open');
    }

    return isOpen ? 'Menü schließen' : 'Menü öffnen';
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

        if (!target.hasAttribute('tabindex')) {
          target.setAttribute('tabindex', '-1');
        }
        target.focus({ preventScroll: true });
      });
    });
  }

  /* --------------------------------------------------------------------------
     CTA Helper Functions
     -------------------------------------------------------------------------- */

  var STORE_URLS = {
    apple: '#', // TODO: Replace with App Store URL
    google: '#', // TODO: Replace with Google Play URL
  };

  function initCTAHelpers() {
    document.querySelectorAll('[data-store]').forEach(function (el) {
      var store = el.getAttribute('data-store');
      var url = STORE_URLS[store];
      var isLink = el.tagName === 'A';

      if (!isLink) return;

      if (!url || url === '#') {
        el.setAttribute('aria-disabled', 'true');
        el.addEventListener('click', function (event) {
          event.preventDefault();
        });
        return;
      }

      el.setAttribute('href', url);
      el.removeAttribute('aria-disabled');
      el.addEventListener('click', function () {
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
