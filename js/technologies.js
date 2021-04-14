export function technologies() {
  gsap.from(".technologieImageA", {
    x: -1000,
    rotation: "-1080",
    scrollTrigger: {
      trigger: ".technologies",
      start: "top 300px",
      end: "top 50px",
      scrub: 1,
      markers: true,
    },
  });

  gsap.from(".technologieImageB", {
    x: 1000,
    scrollTrigger: {
      trigger: ".technologies",
      start: "top 200px",
      end: "top 10px",
      scrub: 1,
    },
  });

  gsap.from(".technologieHeader", {
    fontSize: "0.2",
    scrollTrigger: {
      trigger: ".technologies",
      start: "top 400px",
      end: "top 200px",
      scrub: 1,
    },
  });
}
