export function balls() {
  gsap.set(".ball", {
    visibility: "visible",
  });

  //U

  gsap.from(".u", 2, {
    scaleX: 25,
    scaleY: 25,
    x: -500,
    ease: "linear",
    rotation: "-720",
  });

  gsap.to(".u", {
    duration: 1,
    delay: 6,
    x: -1000,
    y: -250,
    ease: "linear",
  });

  //L

  gsap.fromTo(
    ".l",
    { duration: 0.5, x: -300, y: 50, ease: "linear" },
    { x: 0, y: 50 }
  );

  gsap.fromTo(
    ".l",
    { duration: 0.5, x: 0, y: 50 },
    { x: 0, y: 0, ease: "linear", delay: 0.5 }
  );

  gsap.to(".l", {
    duration: 0.9,
    delay: 6.2,
    x: -1000,
    y: -220,
    ease: "linear",
  });
}

//T
gsap.from(".t", {
  duration: 2,
  y: -500,
  ease: "bounce.out",
});

gsap.to(".t", {
  duration: 0.8,
  delay: 6.3,
  x: -1000,
  y: -180,
  ease: "linear",
});
//R

gsap.from(".r", { duration: 1, y: 400, ease: "linear" });

gsap.to(".r", {
  duration: 0.8,
  delay: 6.6,
  x: -1000,
  y: -210,
  ease: "linear",
});

//A
gsap.from(".a", {
  duration: 0.7,
  y: -400,
  x: -1000,
  scaleX: 40,
  scaleY: 40,
  rotation: "-360",
  ease: "linear",
});

gsap.to(".a", {
  duration: 0.6,
  delay: 6.7,
  x: -1000,
  y: -190,
  ease: "linear",
});

//N

gsap.from(".n", { duration: 2, x: 400 });
gsap.to(".n", { duration: 2, rotation: "-720" });

gsap.to(".n", {
  duration: 0.5,
  delay: 7,
  x: -1000,
  y: -170,
  ease: "linear",
});

//All Balls

gsap.to(".ball", {
  duration: 1,
  opacity: 0.5,
});

gsap.to(".ball", {
  delay: 2,
  duration: 1,
  boxShadow: "0 0 15px 5px white",
  textShadow: "2px 2px 4px white",
  color: "white",
  ease: "linear",
});
