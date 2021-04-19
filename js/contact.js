export function contact() {
  gsap.from(".contactHeader", {
    fontSize: "0.2",
    scrollTrigger: {
      trigger: ".contact",
      start: "top 500px",
      end: "top 300px",
      scrub: 1,
    },
  });

  gsap.from(".bigBall", {
    x: "-300",
    scrollTrigger: {
      trigger: ".contact",
      start: "top 500px",
      end: "top 200px",
      scrub: 1,
    },
  });

  gsap.from(".smallBall", {
    x: "300",
    scrollTrigger: {
      trigger: ".contact",
      start: "top 500px",
      end: "top 200px",
      scrub: 1,
    },
  });

  gsap.from("#javascript_form", {
    x: "-1000",
    scrollTrigger: {
      trigger: ".contact",
      start: "top 500px",
      end: "top 200px",
      scrub: 1,
    },
  });
}
