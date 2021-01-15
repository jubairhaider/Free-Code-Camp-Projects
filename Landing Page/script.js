const navbar = document.getElementById("header");
const links = document.querySelectorAll(".nav-link");
console.log(navbar);

window.addEventListener("scroll", () => {
  if (scrollY > 630) {
    navbar.style.backgroundColor = " rgb(66, 130, 248)";
    navbar.style.height = "3.5rem";
  }

  if (scrollY < 630) {
    navbar.style.backgroundColor = "transparent";
  }
});
