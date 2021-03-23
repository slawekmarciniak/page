export function mainSection() {
  gsap.from(".main__container__left", {
    x: -1000,
    scrollTrigger: {
      trigger: ".main",
      start: "top top+=100px",
      end: "+=100px",
    },
  });

  gsap.from(".main__container__right", {
    x: 1000,
    scrollTrigger: {
      trigger: ".main",
      start: "top top+=250px",
    },
  });
}
