const navBar = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    navBar.classList.add("navScrolled");
  } else {
    navBar.classList.remove("navScrolled");
  }
});

const navButton = document.querySelector("nav button");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    navButton.classList.add("navButton");
  } else {
    navButton.classList.remove("navButton");
  }
});
