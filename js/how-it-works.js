/**
 * SPOTSTAGE – How it works showcase (audience switch + step slider)
 * No external dependencies.
 */

(function () {
  'use strict';

  var STORAGE_KEY = 'spotstage-howto-audience';
  var SWIPE_THRESHOLD = 48;
  var TRANSITION_MS = 220;

  var currentAudience = 'artist';
  var activeStepIndex = 0;
  var isTransitioning = false;
  var touchStartX = 0;

  function getLocale() {
    return window.SpotstageI18n ? window.SpotstageI18n.getLocale() : 'de';
  }

  function getHowItWorksData() {
    var locale = getLocale();
    var translations = window.SpotstageTranslations && window.SpotstageTranslations[locale];

    if (translations && translations.howItWorks) {
      return translations.howItWorks;
    }

    return window.SpotstageTranslations.de.howItWorks;
  }

  function getSteps() {
    var data = getHowItWorksData();
    return currentAudience === 'organizer' ? data.organizers : data.artists;
  }

  function getStepCount() {
    var steps = getSteps();
    return steps.length > 0 ? steps.length : 3;
  }

  function normalizeStepIndex() {
    var total = getStepCount();
    if (activeStepIndex < 0) {
      activeStepIndex = (activeStepIndex % total + total) % total;
    } else if (activeStepIndex >= total) {
      activeStepIndex = activeStepIndex % total;
    }
  }

  function loadAudience() {
    try {
      var stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'artist' || stored === 'organizer') {
        currentAudience = stored;
      }
    } catch (e) {
      /* ignore */
    }
  }

  function saveAudience(audience) {
    try {
      localStorage.setItem(STORAGE_KEY, audience);
    } catch (e) {
      /* ignore */
    }
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function renderTags(tags) {
    if (!tags || !tags.length) return '';

    return (
      '<div class="how-ui-tags">' +
      tags
        .map(function (tag) {
          return '<span class="how-ui-chip">' + escapeHtml(tag) + '</span>';
        })
        .join('') +
      '</div>'
    );
  }

  function renderBadge(text, variant) {
    return (
      '<span class="how-ui-status how-ui-status--' +
      escapeHtml(variant || 'default') +
      '">' +
      escapeHtml(text) +
      '</span>'
    );
  }

  function renderListItems(items) {
    return (
      '<ul class="how-ui-list">' +
      items
        .map(function (item) {
          var badge = item.badge
            ? '<span class="how-ui-list__badge">' + escapeHtml(item.badge) + '</span>'
            : '';

          return (
            '<li class="how-ui-list__item">' +
            '<div class="how-ui-list__main">' +
            '<span class="how-ui-list__title">' +
            escapeHtml(item.title) +
            '</span>' +
            badge +
            '</div>' +
            (item.meta ? '<span class="how-ui-list__meta">' + escapeHtml(item.meta) + '</span>' : '') +
            '</li>'
          );
        })
        .join('') +
      '</ul>'
    );
  }

  function renderStatusItems(items) {
    return (
      '<ul class="how-ui-list how-ui-list--status">' +
      items
        .map(function (item) {
          return (
            '<li class="how-ui-list__item how-ui-list__item--' +
            escapeHtml(item.variant || 'default') +
            '">' +
            '<div class="how-ui-list__main">' +
            '<span class="how-ui-list__title">' +
            escapeHtml(item.title) +
            '</span>' +
            renderBadge(item.badge, item.variant) +
            '</div>' +
            (item.meta ? '<span class="how-ui-list__meta">' + escapeHtml(item.meta) + '</span>' : '') +
            '</li>'
          );
        })
        .join('') +
      '</ul>'
    );
  }

  function renderFields(fields) {
    return (
      '<dl class="how-ui-fields">' +
      fields
        .map(function (field) {
          return (
            '<div class="how-ui-fields__row">' +
            '<dt>' +
            escapeHtml(field.label) +
            '</dt>' +
            '<dd>' +
            escapeHtml(field.value) +
            '</dd>' +
            '</div>'
          );
        })
        .join('') +
      '</dl>'
    );
  }

  function renderSlots(slots) {
    return (
      '<ul class="how-ui-list how-ui-list--slots">' +
      slots
        .map(function (slot) {
          return (
            '<li class="how-ui-list__item">' +
            '<div class="how-ui-list__main">' +
            '<span class="how-ui-list__title">' +
            escapeHtml(slot.title) +
            '</span>' +
            '<span class="how-ui-slot-badge">' +
            escapeHtml(slot.badge) +
            '</span>' +
            '</div>' +
            (slot.meta ? '<span class="how-ui-list__meta">' + escapeHtml(slot.meta) + '</span>' : '') +
            '</li>'
          );
        })
        .join('') +
      '</ul>'
    );
  }

  function renderPrimaryPanel(ui) {
    var inner = '';

    if (ui.label) {
      inner += '<p class="how-ui-panel__label">' + escapeHtml(ui.label) + '</p>';
    }

    if (ui.title) {
      inner += '<h4 class="how-ui-panel__title">' + escapeHtml(ui.title) + '</h4>';
    }

    if (ui.meta) {
      inner += '<p class="how-ui-panel__meta">' + escapeHtml(ui.meta) + '</p>';
    }

    if (ui.detail) {
      inner += '<p class="how-ui-panel__detail">' + escapeHtml(ui.detail) + '</p>';
    }

    if (ui.fields) {
      inner += renderFields(ui.fields);
    }

    if (ui.items) {
      inner += renderStatusItems(ui.items);
    }

    if (ui.slots) {
      inner += renderSlots(ui.slots);
    }

    if (ui.tags) {
      inner += renderTags(ui.tags);
    }

    if (ui.action) {
      inner += '<span class="how-ui-button">' + escapeHtml(ui.action) + '</span>';
    }

    return '<article class="how-ui-panel how-ui-panel--primary">' + inner + '</article>';
  }

  function renderSecondaryPanel(ui) {
    if (!ui) return '';

    var inner = '<p class="how-ui-panel__label">' + escapeHtml(ui.label) + '</p>';

    if (ui.items) {
      inner += renderListItems(ui.items);
    }

    return '<article class="how-ui-panel how-ui-panel--secondary">' + inner + '</article>';
  }

  function renderFloatCard(card, position) {
    if (!card) return '';

    var inner = '<p class="how-ui-card__label">' + escapeHtml(card.label) + '</p>';
    inner += '<div class="how-ui-card__body">';
    inner += '<p class="how-ui-card__title">' + escapeHtml(card.title) + '</p>';

    if (card.meta) {
      inner += '<p class="how-ui-card__meta">' + escapeHtml(card.meta) + '</p>';
    }

    if (card.badge) {
      inner += renderBadge(card.badge, card.badge === 'Applied' || card.badge === 'Live' ? 'success' : 'gold');
    }

    if (card.tags) {
      inner += renderTags(card.tags);
    }

    inner += '</div>';

    return '<article class="how-ui-card how-ui-card--' + position + '">' + inner + '</article>';
  }

  function renderVisual(step) {
    var ui = step.ui || {};
    var accent =
      step.visual && step.visual.indexOf('org') === 0 ? 'organizers' : 'artists';

    return (
      '<div class="how-ui-stack how-ui-stack--' +
      accent +
      ' how-ui-stack--' +
      escapeHtml(step.visual) +
      '">' +
      '<div class="how-ui-stack__stage" aria-hidden="true"></div>' +
      renderSecondaryPanel(ui.secondary) +
      renderPrimaryPanel(ui.primary) +
      renderFloatCard(ui.floatTop, 'top') +
      renderFloatCard(ui.floatBottom, 'bottom') +
      '</div>'
    );
  }

  function renderCopy(step) {
    return (
      '<div class="how-showcase__step">' +
      '<span class="how-step-number" aria-hidden="true">' +
      escapeHtml(step.number) +
      '</span>' +
      '<h3 class="how-step-title" id="howto-step-title">' +
      escapeHtml(step.title) +
      '</h3>' +
      '<p class="how-step-text">' +
      escapeHtml(step.text) +
      '</p>' +
      '</div>'
    );
  }

  function renderDots() {
    var container = document.getElementById('howto-dots');
    if (!container) return;

    var data = getHowItWorksData();
    var dotLabel = data.dotLabel || 'Step';

    container.innerHTML = '';

    var totalSteps = getStepCount();

    for (var i = 0; i < totalSteps; i++) {
      var button = document.createElement('button');
      var isActive = i === activeStepIndex;
      button.type = 'button';
      button.className = 'how-showcase__dot' + (isActive ? ' is-active' : '');
      button.setAttribute('aria-label', dotLabel + ' ' + (i + 1));

      if (isActive) {
        button.setAttribute('aria-current', 'step');
      }

      button.setAttribute('data-step', String(i));

      button.addEventListener('click', function () {
        var target = Number(this.getAttribute('data-step'));
        var direction = target > activeStepIndex ? 1 : target < activeStepIndex ? -1 : 0;
        goToStep(target, direction);
      });

      container.appendChild(button);
    }
  }

  function updateNavState() {
    var prevBtn = document.getElementById('howto-prev');
    var nextBtn = document.getElementById('howto-next');

    if (prevBtn) {
      prevBtn.disabled = isTransitioning;
    }

    if (nextBtn) {
      nextBtn.disabled = isTransitioning;
    }

    document.querySelectorAll('.how-showcase__dot').forEach(function (dot, index) {
      var isActive = index === activeStepIndex;
      dot.classList.toggle('is-active', isActive);
      if (isActive) {
        dot.setAttribute('aria-current', 'step');
      } else {
        dot.removeAttribute('aria-current');
      }
    });
  }

  function updateAccent() {
    var showcase = document.getElementById('howto-showcase');
    if (!showcase) return;

    showcase.setAttribute(
      'data-accent',
      currentAudience === 'organizer' ? 'organizers' : 'artists'
    );
  }

  function finishTransition(contentEl) {
    if (contentEl) {
      contentEl.classList.remove('is-changing', 'is-entering', 'is-entering-back');
    }
    isTransitioning = false;
    updateNavState();
  }

  function renderStep(direction) {
    var copyEl = document.getElementById('howto-copy');
    var visualEl = document.getElementById('howto-visual');
    var contentEl = document.getElementById('howto-panel');

    normalizeStepIndex();

    var steps = getSteps();
    var step = steps[activeStepIndex];

    if (!copyEl || !visualEl || !contentEl) {
      finishTransition(contentEl);
      return;
    }

    if (!step) {
      activeStepIndex = 0;
      step = steps[0];
      if (!step) {
        finishTransition(contentEl);
        return;
      }
    }

    contentEl.classList.remove('is-entering', 'is-entering-back', 'is-changing');
    contentEl.classList.add('is-changing');

    if (direction < 0) {
      contentEl.classList.add('is-entering-back');
    } else if (direction > 0) {
      contentEl.classList.add('is-entering');
    }

    window.setTimeout(function () {
      copyEl.innerHTML = renderCopy(step);
      visualEl.innerHTML = renderVisual(step);
      finishTransition(contentEl);
    }, TRANSITION_MS);
  }

  function goToStep(index, direction) {
    if (isTransitioning) return;

    var total = getStepCount();
    if (index < 0 || index >= total) return;
    if (index === activeStepIndex) return;

    isTransitioning = true;
    activeStepIndex = index;
    updateNavState();
    renderStep(direction);
  }

  function goPrev() {
    var total = getStepCount();
    goToStep((activeStepIndex - 1 + total) % total, -1);
  }

  function goNext() {
    var total = getStepCount();
    goToStep((activeStepIndex + 1) % total, 1);
  }

  function updateSwitchButtons() {
    document.querySelectorAll('.howto__switch-btn').forEach(function (btn) {
      var audience = btn.getAttribute('data-audience');
      var isActive = audience === currentAudience;
      btn.classList.toggle('is-active', isActive);
      btn.setAttribute('aria-pressed', String(isActive));
    });
  }

  function setAudience(audience) {
    if (audience !== 'artist' && audience !== 'organizer') return;
    if (audience === currentAudience) return;

    currentAudience = audience;
    activeStepIndex = 0;
    saveAudience(audience);
    updateSwitchButtons();
    updateAccent();
    renderDots();
    isTransitioning = true;
    renderStep(0);
  }

  function initSwitch() {
    var buttons = Array.prototype.slice.call(
      document.querySelectorAll('.howto__switch-btn')
    );

    buttons.forEach(function (btn, index) {
      btn.addEventListener('click', function () {
        setAudience(btn.getAttribute('data-audience'));
      });

      btn.addEventListener('keydown', function (event) {
        var targetIndex = index;

        if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
          targetIndex = (index + 1) % buttons.length;
        } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
          targetIndex = (index - 1 + buttons.length) % buttons.length;
        } else if (event.key === 'Home') {
          targetIndex = 0;
        } else if (event.key === 'End') {
          targetIndex = buttons.length - 1;
        } else {
          return;
        }

        event.preventDefault();
        buttons[targetIndex].focus();
        setAudience(buttons[targetIndex].getAttribute('data-audience'));
      });
    });
  }

  function initDotKeyboard() {
    var container = document.getElementById('howto-dots');
    if (!container) return;

    container.addEventListener('keydown', function (event) {
      var dots = Array.prototype.slice.call(
        container.querySelectorAll('.how-showcase__dot')
      );
      if (!dots.length) return;

      var currentIndex = dots.indexOf(document.activeElement);
      if (currentIndex === -1) return;

      var targetIndex = currentIndex;

      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
        targetIndex = (currentIndex + 1) % dots.length;
      } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
        targetIndex = (currentIndex - 1 + dots.length) % dots.length;
      } else if (event.key === 'Home') {
        targetIndex = 0;
      } else if (event.key === 'End') {
        targetIndex = dots.length - 1;
      } else {
        return;
      }

      event.preventDefault();
      goToStep(targetIndex, targetIndex > activeStepIndex ? 1 : -1);
      dots[targetIndex].focus();
    });
  }

  function initNav() {
    var prevBtn = document.getElementById('howto-prev');
    var nextBtn = document.getElementById('howto-next');
    var contentEl = document.getElementById('howto-panel');

    if (prevBtn) {
      prevBtn.addEventListener('click', goPrev);
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', goNext);
    }

    if (contentEl) {
      contentEl.addEventListener(
        'touchstart',
        function (event) {
          if (!event.changedTouches || !event.changedTouches.length) return;
          touchStartX = event.changedTouches[0].clientX;
        },
        { passive: true }
      );

      contentEl.addEventListener(
        'touchend',
        function (event) {
          if (!event.changedTouches || !event.changedTouches.length) return;
          var deltaX = event.changedTouches[0].clientX - touchStartX;

          if (Math.abs(deltaX) < SWIPE_THRESHOLD) return;

          if (deltaX < 0) {
            goNext();
          } else {
            goPrev();
          }
        },
        { passive: true }
      );
    }
  }

  function init() {
    var showcase = document.getElementById('howto-showcase');
    if (!showcase) return;

    loadAudience();
    normalizeStepIndex();
    updateSwitchButtons();
    updateAccent();
    renderDots();
    isTransitioning = false;

    var steps = getSteps();
    var step = steps[activeStepIndex];
    var copyEl = document.getElementById('howto-copy');
    var visualEl = document.getElementById('howto-visual');

    if (copyEl && visualEl && step) {
      copyEl.innerHTML = renderCopy(step);
      visualEl.innerHTML = renderVisual(step);
    }

    updateNavState();
    initSwitch();
    initNav();
    initDotKeyboard();
  }

  document.addEventListener('DOMContentLoaded', init);
  document.addEventListener('spotstage:localechange', function () {
    updateSwitchButtons();
    normalizeStepIndex();
    renderDots();
    isTransitioning = false;
    updateAccent();

    var copyEl = document.getElementById('howto-copy');
    var visualEl = document.getElementById('howto-visual');
    var steps = getSteps();
    var step = steps[activeStepIndex];

    if (copyEl && visualEl && step) {
      copyEl.innerHTML = renderCopy(step);
      visualEl.innerHTML = renderVisual(step);
    }

    updateNavState();
  });
})();
