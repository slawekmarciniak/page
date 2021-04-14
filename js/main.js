import { hamburger } from "./hamburger.js";
import { typing } from "./typing.js";
import { balls } from "./balls.js";
import { profilePicture } from "./profilePicture.js";
import { mainSection } from "./mainSection.js";
import { technologies } from "./technologies.js";

window.addEventListener("DOMContentLoaded", () => {
  hamburger();
  setTimeout(() => {
    typing();
  }, 2000);

  balls();
  profilePicture();
  mainSection();
  technologies();
});
