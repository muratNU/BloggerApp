function setFontFam(fontFam) {
  fontFam = fontFam.trim();
  localStorage.setItem("fontfam", fontFam);
  document.documentElement.style.setProperty("--font-family", fontFam);
}

function setFontSize(fontSize) {
  fontSize = fontSize.trim();
  localStorage.setItem("fontsize", fontSize);
  document.documentElement.style.setProperty("--font-size", fontSize);
}

function getSystemTheme() {
  return window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function setTheme(theme) {
  theme = theme.trim();
  localStorage.setItem("theme", theme);
  if (theme === "system") theme = getSystemTheme();

  /* There is a posibilty that the window.matchMedia 
  defaults to undefined or null. Should not proceed with the update
  in that case */
  if (!theme) return;

  document.documentElement.style.setProperty(
    "--text-color",
    theme === "light" ? "black" : "white"
  );
  document.documentElement.style.setProperty(
    "--body-background-color",
    theme === "light" ? "white" : "black"
  );
  document.documentElement.style.setProperty(
    "--sticky-background-color",
    theme === "light" ? "rgb(239, 236, 236)" : "rgb(65, 63, 63)"
  );
  document.documentElement.style.setProperty(
    "--feed-content-color",
    theme === "light" ? "#f9f9f9" : "#413f3f"
  );
}

function OnInput() {
  /* This will go ahead and each time content is deleted from
  textarea will shrink its size to fit the content */
  this.style.height = "auto";

  /* This in reverse will extend the height of the textarea element
  to fit the content. Note that its suggested a maxheight prop to be added
  to the element via CSS */
  this.style.height = this.scrollHeight + "px";
}

function addEventListeners() {
  /* Dynamically adjusting textarea height */
  const textarea = document.querySelector("#typing-box-form > textarea");
  if (textarea) textarea.addEventListener("input", OnInput);
  /* Checking for system level theme changes */
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (event) => {
      const theme = localStorage.getItem("theme");
      if (theme === "system") setTheme(theme);
    });
}

function eventsOnDocLoad() {
  const theme = localStorage.getItem("theme");
  if (theme && theme !== "undefined") {
    setTheme(theme);
  } else {
    /* Else is needed for theme but not on the others because
    system mode could be dark in that case the appearance should 
    update.(the default for theme is system) */
    setTheme("system");
  }

  const fontsize = localStorage.getItem("fontsize");
  if (fontsize && fontsize !== "undefined") setFontSize(fontsize);
  const fontfam = localStorage.getItem("fontfam");
  if (fontfam && fontfam !== "undefined") setFontFam(fontfam);
  addEventListeners();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", eventsOnDocLoad());
} else {
  /* 'DOMContentLoaded has already been fired before 
  getting a chance to run this script. So making sure that all necessary 
  events after load are done */
  eventsOnDocLoad();
}
