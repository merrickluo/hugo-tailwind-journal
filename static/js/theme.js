const detectTheme = () => {
  let theme = localStorage.getItem("theme");

  if (
    !theme &&
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: light)").matches
  ) {
    theme = "light";
  }

  if (theme === "light") {
    const toggle = document.querySelector(".theme-toggle");
    if (toggle) {
      toggle.classList.add("light");
    }
    document.documentElement.setAttribute("data-theme", "light");
  }
};

const switchTheme = e => {
  const toggle = e.target;
  let theme = document.documentElement.getAttribute("data-theme") || "dark";
  if (theme === "light") {
    e.target.classList.remove("light");
    theme = "dark";
  } else {
    e.target.classList.add("light");
    theme = "light";
  }
  localStorage.setItem("theme", theme);
  document.documentElement.setAttribute("data-theme", theme);
};

detectTheme();

window.addEventListener("DOMContentLoaded", () => {
  detectTheme();
  document
    .querySelector(".theme-toggle")
    .addEventListener("click", switchTheme);
});
