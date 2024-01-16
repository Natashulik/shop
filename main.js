// Burger handler
(function () {
  const burgerItem = document.querySelector(".burger");
  const menu = document.querySelector(".header__catalog ");
  const menuLinks = document.querySelectorAll(".header__link");
  burgerItem.addEventListener("click", () => {
    menu.classList.toggle("header__catalog_active");
  });
  {
    if (window.innerWidth <= 1024) {
      for (let i = 0; i < menuLinks.length; i += 1) {
        menuLinks[i].addEventListener("click", () => {
          menu.classList.remove("header__nav_active");
        });
      }
    }
  }
})();
