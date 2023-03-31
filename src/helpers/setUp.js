// IMPORTS --------------------------------------------------------
import viewportOrientation from "../stores/viewportOrientation";
import resetCount from "../stores/resetCount";
import layout from "./layout";
import viewportOrientationString from "./viewportOrientationString";
import siteSettings from "./siteSettings";

export default function setUp() {

  // SETTINGS -----------------------------
  const resizeDelay = siteSettings.resizeDelay;

  layout();

  // RESIZE
  let resizeReady = false;
  window.addEventListener("resize", ()=> {
    if (resizeReady === false) {
      resizeReady = true;
      const timerId = setTimeout(()=> {
        layout();
        viewportOrientation.set(viewportOrientationString());
        resetCount.updateResetCount();
        clearTimeout(timerId);
        resizeReady = false;
      }, resizeDelay);
    };
  });
}