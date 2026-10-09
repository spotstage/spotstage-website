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
  // Original cut-outs; positions are percentages of the compact 500 × 450 canvas.
  // Add a composition and matching DE/EN feature to extend either audience.
  var FEATURE_COMPOSITIONS = {
    "organizer-create": [
      {"src": "images/screenshots/Organizer/slide01/spots.webp", "width": 1134, "height": 643, "x": 8, "y": 5, "size": 64, "rotation": -2, "delay": 0, "duration": 900, "z": 1},
      {"src": "images/screenshots/Organizer/slide01/serie.webp", "width": 1083, "height": 606, "x": 13, "y": 44, "size": 55, "rotation": -1, "delay": 400, "duration": 900, "z": 2},
      {"src": "images/screenshots/Organizer/slide01/gage.webp", "width": 1083, "height": 594, "x": 43, "y": 62, "size": 50, "rotation": 1, "delay": 800, "duration": 900, "z": 3}
    ],
    "organizer-shows": [
      {"src": "images/screenshots/Organizer/slide02/show01.webp", "width": 1083, "height": 537, "x": 6, "y": 16, "size": 64, "rotation": -2, "delay": 0, "duration": 900, "z": 1},
      {"src": "images/screenshots/Organizer/slide02/show02.webp", "width": 1083, "height": 552, "x": 15, "y": 38, "size": 66, "rotation": 1, "delay": 400, "duration": 900, "z": 2},
      {"src": "images/screenshots/Organizer/slide02/castingReady.webp", "width": 1083, "height": 138, "x": 13, "y": 5, "size": 62, "rotation": 0, "delay": 400, "duration": 900, "z": 3},
      {"src": "images/screenshots/Organizer/slide02/chat.webp", "width": 1179, "height": 1341, "x": 52, "y": 28, "size": 42, "rotation": 2, "delay": 800, "duration": 900, "z": 4}
    ],
    "organizer-applications": [
      {"src": "images/screenshots/Organizer/slide03/bewerbung01.webp", "width": 1083, "height": 849, "x": 8, "y": 3, "size": 64, "rotation": -2, "delay": 0, "duration": 900, "z": 1},
      {"src": "images/screenshots/Organizer/slide03/bewerbung02.webp", "width": 1083, "height": 819, "x": 28, "y": 27, "size": 64, "rotation": 2, "delay": 400, "duration": 900, "z": 2}
    ],
    "organizer-lineup": [
      {"src": "images/screenshots/Organizer/slide04/lineup.webp", "width": 1083, "height": 1605, "x": 12, "y": 4, "size": 49, "rotation": -1, "delay": 0, "duration": 900, "z": 1},
      {"src": "images/screenshots/Organizer/slide04/warteliste.webp", "width": 1083, "height": 601, "x": 42, "y": 48, "size": 49, "rotation": 2, "delay": 400, "duration": 900, "z": 2}
    ],
    "organizer-tasks": [
      {"src": "images/screenshots/Organizer/slide05/todoFilter.webp", "width": 1126, "height": 324, "x": 12, "y": 10, "size": 70, "rotation": -1, "delay": 0, "duration": 900, "z": 1},
      {"src": "images/screenshots/Organizer/slide05/todo01.webp", "width": 1083, "height": 258, "x": 8, "y": 37, "size": 75, "rotation": -2, "delay": 400, "duration": 900, "z": 2},
      {"src": "images/screenshots/Organizer/slide05/todo02.webp", "width": 1083, "height": 258, "x": 17, "y": 62, "size": 76, "rotation": 1, "delay": 800, "duration": 900, "z": 3}
    ],
    "organizer-team": [
      {"src": "images/screenshots/Organizer/slide06/orga.webp", "width": 1083, "height": 631, "x": 9, "y": 6, "size": 77, "rotation": -1, "delay": 0, "duration": 900, "z": 1},
      {"src": "images/screenshots/Organizer/slide06/statistik.webp", "width": 1083, "height": 276, "x": 22, "y": 58, "size": 71, "rotation": 2, "delay": 400, "duration": 900, "z": 2}
    ],
    "comedian-discover": [
      {"src": "images/screenshots/Comedian/slide01/filter.webp", "width": 1169, "height": 557, "x": 12, "y": 2, "size": 60, "rotation": -1, "delay": 0, "duration": 900, "z": 1},
      {"src": "images/screenshots/Comedian/slide01/show01.webp", "width": 1152, "height": 597, "x": 7, "y": 23, "size": 63, "rotation": -2, "delay": 400, "duration": 900, "z": 2},
      {"src": "images/screenshots/Comedian/slide01/show02.webp", "width": 1152, "height": 597, "x": 24, "y": 39, "size": 64, "rotation": 2, "delay": 400, "duration": 900, "z": 3},
      {"src": "images/screenshots/Comedian/slide01/show03.webp", "width": 1152, "height": 627, "x": 13, "y": 54, "size": 72, "rotation": -1, "delay": 800, "duration": 900, "z": 4}
    ],
    "comedian-apply": [
      {"src": "images/screenshots/Comedian/slide02/detail.webp", "width": 1083, "height": 906, "x": 8, "y": 3, "size": 60, "rotation": -2, "delay": 0, "duration": 900, "z": 1},
      {"src": "images/screenshots/Comedian/slide02/wunsch.webp", "width": 1112, "height": 861, "x": 42, "y": 20, "size": 52, "rotation": 0, "delay": 400, "duration": 900, "z": 2},
      {"src": "images/screenshots/Comedian/slide02/bewerbung.webp", "width": 1083, "height": 729, "x": 20, "y": 49, "size": 60, "rotation": 2, "delay": 800, "duration": 900, "z": 3}
    ],
    "comedian-application-status": [
      {"src": "images/screenshots/Comedian/slide04/filter.webp", "width": 1171, "height": 349, "x": 14, "y": 2, "size": 70, "rotation": 0, "delay": 0, "duration": 900, "z": 1},
      {"src": "images/screenshots/Comedian/slide04/ausstehend.webp", "width": 1131, "height": 627, "x": 8, "y": 25, "size": 57, "rotation": 2, "delay": 400, "duration": 900, "z": 2},
      {"src": "images/screenshots/Comedian/slide04/warteliste.webp", "width": 1131, "height": 627, "x": 32, "y": 40, "size": 60, "rotation": -1, "delay": 400, "duration": 900, "z": 3},
      {"src": "images/screenshots/Comedian/slide04/angenommen.webp", "width": 1131, "height": 627, "x": 27, "y": 55, "size": 65, "rotation": 1, "delay": 800, "duration": 900, "z": 4}
    ],
    "comedian-calendar": [
      {"src": "images/screenshots/Comedian/slide03/kalender.webp", "width": 1179, "height": 1117, "x": 8, "y": 4, "size": 84, "rotation": 0, "delay": 0, "duration": 900, "z": 1}
    ],
    "comedian-messages": [
      {"src": "images/screenshots/Comedian/slide05/nachrichten.webp", "width": 1083, "height": 138, "x": 10, "y": 9, "size": 75, "rotation": 0, "delay": 0, "duration": 900, "z": 1},
      {"src": "images/screenshots/Comedian/slide05/update01.webp", "width": 1083, "height": 270, "x": 7, "y": 25, "size": 60, "rotation": -1, "delay": 400, "duration": 900, "z": 2},
      {"src": "images/screenshots/Comedian/slide05/update02.webp", "width": 1083, "height": 324, "x": 12, "y": 41, "size": 60, "rotation": 1, "delay": 400, "duration": 900, "z": 3},
      {"src": "images/screenshots/Comedian/slide05/chat.webp", "width": 1179, "height": 1341, "x": 46, "y": 35, "size": 48, "rotation": 2, "delay": 800, "duration": 900, "z": 4}
    ],
    "comedian-conflicts": [
      {"src": "images/screenshots/Comedian/slide06/showcard.webp", "width": 1131, "height": 627, "x": 30, "y": 3, "size": 63, "rotation": 2, "delay": 0, "duration": 900, "z": 1},
      {"src": "images/screenshots/Comedian/slide06/bottomSheet.webp", "width": 1128, "height": 1201, "x": 4, "y": 18, "size": 48, "rotation": -2, "delay": 400, "duration": 900, "z": 2},
      {"src": "images/screenshots/Comedian/slide06/overlay.webp", "width": 1035, "height": 714, "x": 27, "y": 47, "size": 66, "rotation": 1, "delay": 800, "duration": 900, "z": 3}
    ]
  };

  function escapeHtml(value) {
    return String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function renderComposition(feature) {
    var layers = FEATURE_COMPOSITIONS[feature.id];
    return '<figure class="product-feature__visual"><div class="feature-composition">' +
      layers.map(function (layer, index) {
        return '<img class="feature-composition__layer" src="' + layer.src +
          '" width="' + layer.width + '" height="' + layer.height +
          '" loading="eager" decoding="async" draggable="false" alt="' +
          escapeHtml(index === 0 ? feature.imageAlt : '') + '" style="--x:' + layer.x +
          '%;--y:' + layer.y + '%;--size:' + layer.size + '%;--rotation:' + layer.rotation +
          'deg;--z:' + layer.z + ';--delay:' + layer.delay + 'ms;--duration:' + layer.duration +
          'ms;--enter-x:' + (layers.length === 1 || index === layers.length - 1 ? 0 : index % 2 ? 30 : -20) +
          'px;--enter-y:' + (layers.length === 1 ? 10 : index === layers.length - 1 ? 40 : 20) + 'px">';
      }).join('') + '</div>' + (feature.annotation ?
        '<figcaption class="feature-annotation"><strong>SPOTLIGHT</strong> ' +
        escapeHtml(feature.annotation) + '</figcaption>' : '') + '</figure>';
  }

  function renderFeatures() {
    var container = document.getElementById('feature-list');
    if (!container) return;
    var locale = window.SpotstageI18n ? window.SpotstageI18n.getLocale() : 'de';
    var data = window.SpotstageTranslations[locale].howItWorks;
    var features = currentAudience === 'organizer' ? data.organizers : data.artists;
    container.setAttribute('data-audience', currentAudience);
    container.innerHTML = features.map(function (feature) {
      return '<article class="product-feature" data-feature="' + escapeHtml(feature.id) +
        '" aria-labelledby="' + escapeHtml(feature.id) + '-heading">' +
        '<div class="product-feature__copy"><p class="product-feature__label">' + escapeHtml(feature.label) +
        '</p><h3 id="' + escapeHtml(feature.id) + '-heading">' + escapeHtml(feature.title) +
        '</h3><div class="product-feature__details"><p class="product-feature__description">' + escapeHtml(feature.text) +
        '</p><p class="product-feature__benefit">' + escapeHtml(feature.benefit) + '</p></div></div>' +
        renderComposition(feature) + '</article>';
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
      else if (event.key === 'End') index = document.querySelectorAll('#feature-list .product-feature').length - 1;
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
