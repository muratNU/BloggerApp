function updateThemeSelection(selection) {
  if (selection == null || selection === "undefined") return;
  btn = document.querySelector("#theme-list-item button");
  btn.textContent = selection.charAt(0).toUpperCase() + selection.slice(1);
  options = document.querySelectorAll("#theme-list-item a");
  options.forEach((option) => {
    /* First remove previous activation */
    if (option.classList.contains("active")) option.classList.remove("active");

    if (option.textContent.toLowerCase() === selection)
      option.classList.add("active");
  });
}

// function addEventListeners() {
//   window.addEventListener("storage", (e) => {
//     console.log(e);
//     if (e.key === "theme") {
//       theme = localStorage.getItem("theme");
//       if (theme && theme !== "undefined") updateThemeSelection(theme);
//     }
//   });
// }

function eventsOnDocLoad() {
  theme = localStorage.getItem("theme");
  if (theme && theme !== "undefined") updateThemeSelection(theme);
  // addEventListeners();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", eventsOnDocLoad());
} else {
  /* 'DOMContentLoaded has already been fired before 
  getting a chance to run this script. So making sure that all necessary 
  events after load are done*/
  eventsOnDocLoad();
}
