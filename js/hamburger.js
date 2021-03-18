export function hamburger() {
  const ico = document.querySelector(".burger");
  const listContainer = document.querySelector("ul");

  ico.addEventListener("click", function () {
    ico.classList.toggle("active");
    listContainer.classList.toggle("menu-list-active");
  });
}
