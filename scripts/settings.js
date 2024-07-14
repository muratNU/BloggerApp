function updateSelection(key, val) {
  if (val == null || val === "undefined") return;
  btn = document.querySelector("#" + key + "-list-item button");
  btn.textContent.trim();
  btn.textContent = val.charAt(0).toUpperCase() + val.slice(1);
  options = document.querySelectorAll("#" + key + "-list-item a");
  options.forEach((option) => {
    /* First remove previous activation */
    if (option.classList.contains("active")) option.classList.remove("active");

    if (option.textContent.trim().toLowerCase() === val)
      option.classList.add("active");
  });
}

function eventsOnDocLoad() {
  updateSelection("theme", localStorage.getItem("theme"));
  updateSelection("fontsize", localStorage.getItem("fontsize"));
  updateSelection("fontfamily", localStorage.getItem("fontfam"));
  // addEventListeners();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", eventsOnDocLoad());
} else {
  /* 'DOMContentLoaded has already been fired before 
  getting a chance to run this script. So making sure that all necessary 
  events after load are done */
  eventsOnDocLoad();
}
