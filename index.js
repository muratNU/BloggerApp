function getSystemTheme() {
  return window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function setTheme(theme) {
  /* == in JavaScript is the abstract inequality operator in JavaScript. 
  Since null == undefined is true the statment below will catch both null
  undefined*/
  if (theme == null || theme === "undefined") return;
  localStorage.setItem("theme", theme);
  if (theme === "system") theme = getSystemTheme();
  document.documentElement.style.setProperty(
    "--body-background-color",
    theme === "light" ? "white" : "black"
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
      if (localStorage.getItem("theme") === "system")
        setTheme(event.matches ? "dark" : "light");
    });
}

function eventsOnDocLoad() {
  theme = localStorage.getItem("theme");
  if (theme && theme !== "undefined") setTheme(theme);
  addEventListeners();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", eventsOnDocLoad());
} else {
  /* 'DOMContentLoaded has already been fired before 
  getting a chance to run this script. So making sure that all necessary 
  events after load are done*/
  eventsOnDocLoad();
}
