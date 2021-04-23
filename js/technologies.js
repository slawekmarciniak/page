export function technologies() {
  gsap.from(".technologieImageA", {
    x: -1000,
    rotation: "-1080",
    scrollTrigger: {
      trigger: ".technologies",
      start: "top 250px",
      end: "top 150px",
      scrub: 1,
      // markers: true,
    },
  });

  gsap.from(".technologieImageB", {
    x: 1000,
    scrollTrigger: {
      trigger: ".technologies",
      start: "top 200px",
      end: "top 120px",
      scrub: 1,
    },
  });

  gsap.from(".technologiesHeader", {
    fontSize: "0.2",
    scrollTrigger: {
      trigger: ".technologies",
      start: "top 400px",
      end: "top 200px",
      scrub: 1,
    },
  });
}
