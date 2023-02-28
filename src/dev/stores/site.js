// IMPORT SCRIPTS ------------------------------------
import { writable, get } from "svelte/store";

// SITE SETTINGS --------------------------------------
const pageExitDuration = 1000;
const resizeDelay = 2000;
const startingPageName = "opening-prompt";
const uarr1Res = [9, 16];
const uarr2Res = [16, 9];

// RESET COUNT ------------------------------------------
function createResetCount() {
  const {subscribe, update} = writable(0);

  return {
    subscribe,
    updateResetCount: ()=> update(n => n + 1),
  }
}

export const resetCount = createResetCount();

// CURRENT PAGE --------------------------------------------------------
export const currentPage = writable(null);
export const currentPageName = writable(startingPageName);
export function pageExit(destinationPageName, onNewPage) {
  get(currentPage).style.opacity = 0;
  const timerId = setTimeout(()=> {
    clearTimeout(timerId);
    currentPageName.set(destinationPageName);
    if(onNewPage) onNewPage();
  }, pageExitDuration);
};

function layout() {
  document.documentElement.style.setProperty("--viewport-height", `${window.innerHeight}px`);
  const viewportRes = window.innerWidth/window.innerHeight;
  document.documentElement.style.setProperty("--uarr1-aspect-ratio",
    `${uarr1Res[0]}/${uarr1Res[1]}`
  );
  document.documentElement.style.setProperty("--uarr1-width", 
    viewportRes > uarr1Res[0] / uarr1Res[1] ? "auto" : "100vw"
  );
  document.documentElement.style.setProperty("--uarr1-height",
    viewportRes > uarr1Res[0] / uarr1Res[1] ? "var(--viewport-height)" : "auto"
  );
  document.documentElement.style.setProperty("--uarr2-aspect-ratio",
    `${uarr2Res[0]}/${uarr2Res[1]}`
  );
  document.documentElement.style.setProperty("--uarr2-width", 
    viewportRes < uarr2Res[0] / uarr2Res[1] ? "100vw" : "auto"
  );
  document.documentElement.style.setProperty("--uarr2-height",
    viewportRes < uarr2Res[0] / uarr2Res[1] ? "auto" : "var(--viewport-height)"
  );
}

// SETUP ----------------------------------------------------------
export function setUp() {

  // CSS Variables
  document.documentElement.style.setProperty("--page-exit-duration", `${pageExitDuration}ms`);

  layout();

  // RESIZE
  let resizeReady = false;
  window.addEventListener("resize", ()=> {
    if (resizeReady === false) {
      resizeReady = true;
      const timerId = setTimeout(()=> {
        layout();
        resetCount.updateResetCount();
        clearTimeout(timerId);
        resizeReady = false;
      }, resizeDelay);
    };
  });
}

// BACKGROUND AUDIO ------------------------------------
function createBackgroundAudio() {
  const {subscribe, update, set} = writable({
    track: "./assets/audio/opening-prompt.mp3",
    volume: 0,
    paused: true,
    loop: true,
  });

  return {
    subscribe,
    set,
    changeTrack: (trackFilePath)=> update(prev => {
      return {
        ...prev,
        track: trackFilePath,
      }
    }),
    loop: boolean => update(prev => {
      return {
        ...prev,
        loop: boolean,
      }
    }),
    pause: (boolean) => update(prev => {
      return {
        ...prev,
        paused: boolean,
      }
    })
  }
}

export const backgroundAudio = createBackgroundAudio();

function createFullscreenMenuOpen() {
  const {subscribe, set} = writable(false);
  return {
    subscribe,
    toggleFullscreenMenu: boolean => {
      set(boolean);
    },
  }
}

export const fullscreenMenuOpen = createFullscreenMenuOpen();