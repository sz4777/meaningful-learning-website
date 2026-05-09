// DOM queries
const body = document.body;
const colorModeButton = document.getElementById("color-mode-button");
const colorModeLabel = document.getElementById("color-mode-label");
const textSizeButton = document.getElementById("text-size-button");
const textSizeLabel = document.getElementById("text-size-label");

// Load saved color mode
if (localStorage.getItem("colorMode") === "dark") {
  body.classList.remove("light-mode");
  body.classList.add("dark-mode");
  colorModeLabel.textContent = "Light Mode";
} else {
  body.classList.remove("dark-mode");
  body.classList.add("light-mode");
  colorModeLabel.textContent = "Dark Mode";
}

// Load saved text size
if (localStorage.getItem("textSize") === "large") {
  body.classList.add("large-text");
  textSizeLabel.textContent = "Regular Text";
} else {
  body.classList.remove("large-text");
  textSizeLabel.textContent = "Large Text";
}

// Function 1: toggle color mode
function toggleColorMode() {
  if (body.classList.contains("light-mode")) {
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
    colorModeLabel.textContent = "Light Mode";
    localStorage.setItem("colorMode", "dark");
  } else {
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
    colorModeLabel.textContent = "Dark Mode";
    localStorage.setItem("colorMode", "light");
  }
}

// Function 2: toggle text size
function toggleTextSize() {
  if (body.classList.contains("large-text")) {
    body.classList.remove("large-text");
    textSizeLabel.textContent = "Large Text";
    localStorage.setItem("textSize", "regular");
  } else {
    body.classList.add("large-text");
    textSizeLabel.textContent = "Regular Text";
    localStorage.setItem("textSize", "large");
  }
}

// DOM events
colorModeButton.addEventListener("click", toggleColorMode);
textSizeButton.addEventListener("click", toggleTextSize);