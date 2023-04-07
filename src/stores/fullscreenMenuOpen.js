import { writable } from "svelte/store";

function createFullscreenMenuOpen() {
  const {subscribe, set} = writable(false);
  return {
    subscribe,
    toggleFullscreenMenu: boolean => {
      set(boolean);
    },
  }
}

const fullscreenMenuOpen = createFullscreenMenuOpen();
export default fullscreenMenuOpen;