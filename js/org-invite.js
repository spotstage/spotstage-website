/**
 * Organization invite web fallback.
 * - No token in visible page content
 * - No analytics / logging of the token
 * - Custom scheme used only for the explicit "Open in app" button
 */
(function initOrgInvitePage() {
  var openButton = document.getElementById("invite-open-app");
  if (!openButton) {
    return;
  }

  var params;
  try {
    params = new URLSearchParams(window.location.search);
  } catch {
    return;
  }

  var token = params.get("token");
  if (!token || !token.trim()) {
    openButton.setAttribute("aria-disabled", "true");
    openButton.classList.add("is-disabled");
    return;
  }

  var encoded = encodeURIComponent(token.trim());
  openButton.href = "spotstage://org/invite?token=" + encoded;
})();
