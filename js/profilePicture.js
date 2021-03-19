export function profilePicture() {
  // gsap.set(".ball", {
  //   visibility: "visible",
  // });

  gsap.to(".star__container", {
    duration: 8,
    delay: 0.5,
    rotation: 360,
    repeat: Infinity,
    ease: "linear",
  });
  gsap.to(".star__container2", {
    duration: 4,
    delay: 0.5,
    rotation: 360,
    repeat: Infinity,
    ease: "linear",
  });

  // gsap.to(".star", { duration: 1, ease: "circ.out", y: -50 });
  //   gsap.to(".star", { duration: 1, delay: 1, y: 0 });
}
