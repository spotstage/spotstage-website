/**
 * SPOTSTAGE – audience-specific product features.
 * Feature carousel reusing the audience toggle, cyclic navigation and swipe threshold.
 */
(function () {
  'use strict';

  var STORAGE_KEY = 'spotstage-howto-audience';
  var currentAudience = 'organizer';
  var activeIndex = 0;
  var SWIPE_THRESHOLD = 48;
  var touchStart = null;
  var PLACEHOLDER = 'images/placeholders/hero-phone.svg';
  // Replace sources with the reviewed captures from docs/homepage-screenshots.md.
  var FEATURE_IMAGES = {
    'organizer-applications': PLACEHOLDER,
    'organizer-lineup': PLACEHOLDER,
    'organizer-show-organization': PLACEHOLDER,
    'organizer-team': PLACEHOLDER,
    'comedian-discover': PLACEHOLDER,
    'comedian-apply': PLACEHOLDER,
    'comedian-application-status': PLACEHOLDER,
    'comedian-calendar': PLACEHOLDER,
  };

  function escapeHtml(value) {
    return String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function renderFeatures() {
    var container = document.getElementById('feature-list');
    if (!container) return;
    var locale = window.SpotstageI18n ? window.SpotstageI18n.getLocale() : 'de';
    var data = window.SpotstageTranslations[locale].howItWorks;
    var features = currentAudience === 'organizer' ? data.organizers : data.artists;
    container.setAttribute('data-audience', currentAudience);
    container.innerHTML = features.map(function (feature) {
      var src = FEATURE_IMAGES[feature.id] || PLACEHOLDER;
      var isPlaceholder = src === PLACEHOLDER;
      var caption = isPlaceholder ? data.placeholder : feature.label;
      var alt = isPlaceholder ? data.placeholderAlt : feature.title;
      return '<article class="product-feature" data-feature="' + escapeHtml(feature.id) +
        '" aria-labelledby="' + escapeHtml(feature.id) + '-heading">' +
        '<div class="product-feature__copy"><p class="product-feature__label">' + escapeHtml(feature.label) +
        '</p><h3 id="' + escapeHtml(feature.id) + '-heading">' + escapeHtml(feature.title) +
        '</h3><p class="product-feature__description">' + escapeHtml(feature.text) +
        '</p><p class="product-feature__benefit">' + escapeHtml(feature.benefit) + '</p></div>' +
        '<figure class="product-feature__visual"><img src="' + escapeHtml(src) +
        '" width="320" height="640" loading="lazy" alt="' + escapeHtml(alt) + '">' +
        '<figcaption>' + escapeHtml(caption) + '</figcaption></figure></article>';
    }).join('');
    document.querySelectorAll('.howto__switch-btn').forEach(function (button) {
      var active = button.getAttribute('data-audience') === currentAudience;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    document.getElementById('feature-carousel').setAttribute('aria-roledescription', data.carouselRole);
    var dots = document.getElementById('feature-dots');
    dots.innerHTML = features.map(function (feature, index) {
      return '<button type="button" class="feature-carousel__dot" data-slide="' + index +
        '" aria-controls="feature-list" aria-label="' + escapeHtml(data.showFeature + ': ' + feature.label) + '"></button>';
    }).join('');
    document.getElementById('feature-controls').hidden = false;
    showSlide(activeIndex, false);
  }

  function setAudience(audience) {
    if (audience !== 'artist' && audience !== 'organizer') return;
    if (audience === currentAudience) return;
    currentAudience = audience;
    activeIndex = 0;
    try { localStorage.setItem(STORAGE_KEY, audience); } catch (e) { /* optional */ }
    renderFeatures();
  }

  function showSlide(index, focusDot) {
    var slides = document.querySelectorAll('#feature-list .product-feature');
    if (!slides.length) return;
    activeIndex = (index + slides.length) % slides.length;
    slides.forEach(function (slide, i) { slide.hidden = i !== activeIndex; });
    var dots = document.querySelectorAll('#feature-dots button');
    dots.forEach(function (dot, i) {
      dot.classList.toggle('is-active', i === activeIndex);
      if (i === activeIndex) dot.setAttribute('aria-current', 'true');
      else dot.removeAttribute('aria-current');
    });
    if (focusDot) dots[activeIndex].focus();
    var locale = window.SpotstageI18n ? window.SpotstageI18n.getLocale() : 'de';
    var data = window.SpotstageTranslations[locale].howItWorks;
    var features = currentAudience === 'organizer' ? data.organizers : data.artists;
    document.getElementById('feature-status').textContent =
      (currentAudience === 'organizer' ? data.switchOrganizers : data.switchArtists) + ': ' + features[activeIndex].label;
  }

  function initCarousel() {
    document.getElementById('feature-prev').addEventListener('click', function () { showSlide(activeIndex - 1); });
    document.getElementById('feature-next').addEventListener('click', function () { showSlide(activeIndex + 1); });
    document.getElementById('feature-dots').addEventListener('click', function (event) {
      var dot = event.target.closest('button[data-slide]');
      if (dot) showSlide(Number(dot.getAttribute('data-slide')));
    });
    document.getElementById('feature-carousel').addEventListener('keydown', function (event) {
      var index;
      if (event.key === 'ArrowRight') index = activeIndex + 1;
      else if (event.key === 'ArrowLeft') index = activeIndex - 1;
      else if (event.key === 'Home') index = 0;
      else if (event.key === 'End') index = 3;
      else return;
      event.preventDefault();
      showSlide(index, event.target.matches('button[data-slide]'));
    });
    var content = document.getElementById('feature-list');
    content.addEventListener('touchstart', function (event) {
      touchStart = event.touches.length === 1 ? {
        x: event.touches[0].clientX, y: event.touches[0].clientY,
        id: event.touches[0].identifier,
      } : null;
    }, { passive: true });
    content.addEventListener('touchcancel', function () { touchStart = null; }, { passive: true });
    content.addEventListener('touchend', function (event) {
      if (!touchStart || event.touches.length || !event.changedTouches.length) { touchStart = null; return; }
      var touch = event.changedTouches[0];
      var start = touchStart;
      touchStart = null;
      if (touch.identifier !== start.id) return;
      var dx = touch.clientX - start.x;
      var dy = touch.clientY - start.y;
      if (Math.abs(dx) < SWIPE_THRESHOLD || Math.abs(dx) <= Math.abs(dy) * 1.2) return;
      showSlide(activeIndex + (dx < 0 ? 1 : -1));
    }, { passive: true });
  }

  function init() {
    if (!document.getElementById('feature-list')) return;
    try {
      var stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'artist' || stored === 'organizer') currentAudience = stored;
    } catch (e) { /* optional */ }
    var buttons = Array.prototype.slice.call(document.querySelectorAll('.howto__switch-btn'));
    buttons.forEach(function (button, index) {
      button.addEventListener('click', function () { setAudience(button.getAttribute('data-audience')); });
      button.addEventListener('keydown', function (event) {
        var target;
        if (event.key === 'ArrowRight' || event.key === 'ArrowDown') target = (index + 1) % buttons.length;
        else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') target = (index - 1 + buttons.length) % buttons.length;
        else if (event.key === 'Home') target = 0;
        else if (event.key === 'End') target = buttons.length - 1;
        else return;
        event.preventDefault();
        buttons[target].focus();
        setAudience(buttons[target].getAttribute('data-audience'));
      });
    });
    renderFeatures();
    initCarousel();
  }

  document.addEventListener('DOMContentLoaded', init);
  document.addEventListener('spotstage:localechange', renderFeatures);
})();
