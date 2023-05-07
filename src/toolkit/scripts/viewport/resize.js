import siteSettings from "../../data/siteSettings";
import viewportCSS from "./viewportCSS";
// import resizeStore from "./resizeStore";
import { updateResetCount, nowResizing, notResizing } from "./resizeStore";
import viewportOrientationStore from "./viewportOrientationStore";
import { setNotification } from "../notifyStore";

export default function resize() {
  let resizeReady = false;
  window.addEventListener("resize", ()=> {
    if (resizeReady === false) {
      resizeReady = true;
      nowResizing();
      setNotification("resize", siteSettings.resizeDelay - 500);
      const timerId = setTimeout(()=> {
        viewportCSS();
        // resizeStore.updateResizeCount();
        updateResetCount();
        notResizing();
        viewportOrientationStore.update();
        resizeReady = false;
        clearTimeout(timerId);
      }, siteSettings.resizeDelay);
    };
  });
};