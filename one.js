function openPopup() {
  // Fetch the signup-container element by its ID
  var popup = document.getElementById("signup-card");
  // Fetch the dimmed overlay element
  var dimmedOverlay = document.getElementById("dimmed-overlay");

  // Check if the popup element exists
  if (popup && dimmedOverlay) {
      // Change the display property of popup to block
      popup.style.display = "block";
      // Display the dimmed overlay
      dimmedOverlay.style.display = "block";
  }
}

function closePopup() {
  // Fetch the signup-container element by its ID
  var popup = document.getElementById("signup-card");
  // Fetch the dimmed overlay element
  var dimmedOverlay = document.getElementById("dimmed-overlay");

  // Hide the popup
  if (popup && dimmedOverlay) {
      popup.style.display = "none";
      // Hide the dimmed overlay
      dimmedOverlay.style.display = "none";
  }
}
function openlogin() {
  // Fetch the signup-container element by its ID
  var popup = document.getElementById("login-card");
  // Fetch the dimmed overlay element
  var dimmedOverlay = document.getElementById("dimmed-overlay");

  // Check if the popup element exists
  if (popup && dimmedOverlay) {
      // Change the display property of popup to block
      popup.style.display = "block";
      // Display the dimmed overlay
      dimmedOverlay.style.display = "block";
  }
}

function closelogin() {
  // Fetch the signup-container element by its ID
  var popup = document.getElementById("login-card");
  // Fetch the dimmed overlay element
  var dimmedOverlay = document.getElementById("dimmed-overlay");

  // Hide the popup
  if (popup && dimmedOverlay) {
      popup.style.display = "none";
      // Hide the dimmed overlay
      dimmedOverlay.style.display = "none";
  }
}