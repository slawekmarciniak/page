export function balls() {
  gsap.set(".ball", {
    visibility: "visible",
  });

  //U

  gsap.from(".u", 2, {
    x: -300,
    ease: "linear",
    rotation: "-360",
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
  duration: 1,
  scaleX: 0.1,
  scaleY: 0.1,
  y: -200,
  ease: "linear",
});
//R

gsap.from(".r", { duration: 1, y: 400, ease: "linear" });

//A
gsap.from(".a", { duration: 1, y: -400, ease: "linear" });

//N

gsap.from(".n", { duration: 2, x: 400 });
gsap.to(".n", { duration: 2, rotation: "-360" });

//All Balls

gsap.to(".ball", {
  delay: 2,
  duration: 1,
  boxShadow: "0 0 15px 0 yellow",
  textShadow: "0 0 5px yellow",
  ease: "linear",
});
