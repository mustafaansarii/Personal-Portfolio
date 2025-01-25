// aosConfig.js
import AOS from "aos";

export const initAOS = () => {
  AOS.init({
    offset: 120, // offset from the element (in px)
    delay: 0, // delay animation
    duration: 600, // animation duration
    easing: "ease-in-out", // easing function
    once: true, // whether animation should happen only once
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: "top-bottom", // defines which position of the element triggers the animation
  });
};
