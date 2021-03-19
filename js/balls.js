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
}

//T
gsap.from(".t", {
  duration: 2,
  y: -500,
  ease: "bounce.out",
});
//R

gsap.from(".r", { duration: 1, y: 400, ease: "linear" });

//A
gsap.from(".a", {
  duration: 1,
  y: -400,
  x: 800,
  scaleX: 40,
  scaleY: 40,
  ease: "linear",
});

//N

gsap.from(".n", { duration: 2, x: 400 });
gsap.to(".n", { duration: 2, rotation: "-720" });

//All Balls

gsap.to(".ball", {
  delay: 2,
  duration: 1,
  boxShadow: "0 0 15px 5px white",
  textShadow: "2px 2px 4px white",
  color: "white",
  ease: "linear",
});
