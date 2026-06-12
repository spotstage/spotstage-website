/**
 * SPOTSTAGE – Lightweight i18n (de / en)
 * No external dependencies.
 */
(function () {
  'use strict';

  var STORAGE_KEY = 'spotstage-locale';
  var SUPPORTED = ['de', 'en'];
  var DEFAULT_LOCALE = 'en';
  var GERMAN_REGIONS = ['DE', 'AT', 'CH'];

  var currentLocale = DEFAULT_LOCALE;

  function getTranslations(locale) {
    return window.SpotstageTranslations && window.SpotstageTranslations[locale];
  }

  function t(key, locale) {
    var lang = locale || currentLocale;
    var parts = key.split('.');
    var value = getTranslations(lang);

    for (var i = 0; i < parts.length; i++) {
      if (value == null) return key;
      value = value[parts[i]];
    }

    return value !== undefined ? value : key;
  }

  function isGermanLanguageTag(tag) {
    if (!tag) return false;
    return String(tag).toLowerCase().split('-')[0] === 'de';
  }

  function isGermanRegion(region) {
    if (!region) return false;
    return GERMAN_REGIONS.indexOf(String(region).toUpperCase()) !== -1;
  }

  function detectLocale() {
    var stored = null;

    try {
      stored = localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      stored = null;
    }

    if (stored === 'de' || stored === 'en') {
      return stored;
    }

    var languages = navigator.languages && navigator.languages.length
      ? navigator.languages
      : [navigator.language || ''];

    for (var i = 0; i < languages.length; i++) {
      if (isGermanLanguageTag(languages[i])) {
        return 'de';
      }

      var parts = String(languages[i]).split('-');
      if (parts.length > 1 && isGermanRegion(parts[1])) {
        return 'de';
      }
    }

    try {
      var intlLocale = Intl.DateTimeFormat().resolvedOptions().locale || '';
      if (isGermanLanguageTag(intlLocale)) {
        return 'de';
      }

      var intlParts = intlLocale.split('-');
      if (intlParts.length > 1 && isGermanRegion(intlParts[1])) {
        return 'de';
      }
    } catch (e) {
      /* ignore */
    }

    return DEFAULT_LOCALE;
  }

  function setStoredLocale(locale) {
    try {
      localStorage.setItem(STORAGE_KEY, locale);
    } catch (e) {
      /* ignore */
    }
  }

  function resolveValue(key) {
    return t(key, currentLocale);
  }

  function applyTextNodes() {
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var value = resolveValue(key);

      if (el.tagName === 'TITLE') {
        document.title = value;
        return;
      }

      el.textContent = value;
    });

    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      el.innerHTML = resolveValue(el.getAttribute('data-i18n-html'));
    });

    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      var spec = el.getAttribute('data-i18n-attr').split(':');
      var key = spec[0];
      var attr = spec[1] || 'aria-label';
      el.setAttribute(attr, resolveValue(key));
    });
  }

  function applyBadges() {
    var badges = getTranslations(currentLocale);
    if (!badges || !badges.badges) return;

    document.querySelectorAll('[data-store]').forEach(function (link) {
      var store = link.getAttribute('data-store');
      var badge = badges.badges[store];
      if (!badge) return;

      link.setAttribute('aria-label', badge.aria);

      var img = link.querySelector('img');
      if (!img) return;

      img.src = badge.src;
      img.setAttribute('width', String(badge.width));
      img.setAttribute('height', String(badge.height));
      img.setAttribute('alt', badge.alt);
    });
  }

  function updateLangSwitch() {
    document.querySelectorAll('.lang-switch__btn').forEach(function (btn) {
      var locale = btn.getAttribute('data-locale');
      var isActive = locale === currentLocale;
      btn.classList.toggle('is-active', isActive);
      btn.setAttribute('aria-pressed', String(isActive));
    });
  }

  function updateNavToggleLabel() {
    var toggle = document.getElementById('nav-toggle');
    if (!toggle) return;

    var isOpen = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-label', isOpen ? t('nav.close') : t('nav.open'));
  }

  function applyLocale(locale) {
    if (SUPPORTED.indexOf(locale) === -1) {
      locale = DEFAULT_LOCALE;
    }

    currentLocale = locale;
    document.documentElement.lang = locale;

    applyTextNodes();
    applyBadges();
    updateLangSwitch();
    updateNavToggleLabel();

    document.dispatchEvent(
      new CustomEvent('spotstage:localechange', { detail: { locale: locale } })
    );
  }

  function setLocale(locale, persist) {
    if (SUPPORTED.indexOf(locale) === -1) return;

    if (persist !== false) {
      setStoredLocale(locale);
    }

    applyLocale(locale);
  }

  function initLangSwitch() {
    document.querySelectorAll('.lang-switch__btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var locale = btn.getAttribute('data-locale');
        if (locale && locale !== currentLocale) {
          setLocale(locale, true);
        }
      });
    });
  }

  function init() {
    applyLocale(detectLocale());
    initLangSwitch();
  }

  window.SpotstageI18n = {
    t: t,
    getLocale: function () {
      return currentLocale;
    },
    setLocale: setLocale,
    applyLocale: applyLocale,
    detectLocale: detectLocale,
    supportedLocales: SUPPORTED.slice(),
  };

  document.addEventListener('DOMContentLoaded', init);
})();
