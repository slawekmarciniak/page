import { hamburger } from "./hamburger.js";
import { typing } from "./typing.js";
import { balls } from "./balls.js";
import { profilePicture } from "./profilePicture.js";

hamburger();
setTimeout(() => {
  typing();
}, 2000);

balls();
profilePicture();
