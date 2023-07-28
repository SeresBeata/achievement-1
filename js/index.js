// To add-remove .active class at .main-navigation

const toggleBtn = document.getElementsByClassName(
  "page-header__item--toggle-btn"
)[0];

const navbarLinks = document.getElementsByClassName("main-navigation")[0];

toggleBtn.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});
