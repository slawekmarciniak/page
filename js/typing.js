const box = document.querySelector(".header__info");
const text = ["Ultran", "Web Developer", "Serwisy webowe i mobilne"];

let activeDomElement = box;
let letterIndex = 0;
let wordIndex = 0;
let oldTime = 0;
const speed = 50;

export function typing(newTime) {
  if (newTime - oldTime > speed) {
    if (letterIndex === text[wordIndex].length) {
      if (wordIndex === text.length - 1) return;
      return setTimeout(() => {
        // p.textContent = "";
        letterIndex = 0;
        wordIndex++;
        requestAnimationFrame(typing);
      }, 1000);
    } else if (letterIndex === 0) {
      const p = document.createElement("p");
      box.appendChild(p);
      activeDomElement = p;
    }

    oldTime = newTime;
    const letter = text[wordIndex].substr(letterIndex, 1);
    activeDomElement.textContent += letter;
    letterIndex++;
  }
  requestAnimationFrame(typing);
}
