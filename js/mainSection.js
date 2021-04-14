export function mainSection() {
  gsap.from(".main__container__left", {
    x: -1000,
    scrollTrigger: {
      trigger: ".main",
      start: "top 300px",
      end: "top 75px",
      scrub: 1,
      // markers: true,
    },
  });

  gsap.from(".main__container__right", {
    x: 1000,
    scrollTrigger: {
      trigger: ".main",
      start: "top 200px",
      end: "top 50px",
      scrub: 1,
    },
  });

  gsap.from(".offer", {
    fontSize: "0.2",
    scrollTrigger: {
      trigger: ".main",
      start: "top 400px",
      end: "top 200px",
      scrub: 1,
    },
  });
}
