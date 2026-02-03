const burger = document.querySelector(".burger");
const menu = document.querySelector(".overlay");

burger.addEventListener("click", function () {
  menu.style.display = "block";
});

document
  .querySelector(".courses-section")
  .addEventListener("click", function () {
    menu.style.display = "none";
  });
document.querySelector(".hero").addEventListener("click", function () {
  menu.style.display = "none";
});

const navItems = document.querySelectorAll(".nav-item");
const dropdown = document.querySelector(".dropdown");

navItems.forEach((item) => {
  item.addEventListener("mouseenter", function () {
    dropdown.style.display = "flex";
  });
});
document.querySelector(".nav").addEventListener("mouseleave", () => {
  dropdown.style.display = "none";
});

const searchInput = document.querySelector(".searchInput");
const search = document.querySelector(".search");
search.addEventListener("click", function () {
  searchInput.classList.toggle("active");
});
