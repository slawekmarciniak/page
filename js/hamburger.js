export function hamburger() {
  const ico = document.querySelector(".burger");
  const listContainer = document.querySelector("ul");

  ico.addEventListener("click", function () {
    ico.classList.toggle("active");
    listContainer.classList.toggle("menu-list-active");

    console.log(listContainer.classList[1]);

    if (listContainer.classList[1] === "menu-list-active") {
      gsap.to(".menu-list__home", {
        x: 0,
        delay: 0.4,
        duration: 0.1,
      });
      gsap.to(".menu-list__offer", {
        x: 0,
        delay: 0.4,
        duration: 0.2,
      });
      gsap.to(".menu-list__technologies", {
        x: 0,
        delay: 0.4,
        duration: 0.3,
      });
      gsap.to(".menu-list__contact", {
        x: 0,
        delay: 0.4,
        duration: 0.4,
      });
    } else {
      gsap.to(".menu-list__home", {
        x: 200,
        delay: 0,
        duration: 0.1,
      });
      gsap.to(".menu-list__offer", {
        x: 200,
        delay: 0,
        duration: 0.1,
      });
      gsap.to(".menu-list__technologies", {
        x: 200,
        delay: 0,
        duration: 0.1,
      });
      gsap.to(".menu-list__contact", {
        x: 200,
        delay: 0,
        duration: 0.1,
      });
    }
  });
}
