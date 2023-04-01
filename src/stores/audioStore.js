import { writable } from "svelte/store";

function createBackgroundAudio() {
  const {subscribe, update, set} = writable({
    trackPath: "./assets/audio/opening-prompt.mp3",
    volume: 0,
    paused: true,
  });

  return {
    subscribe,
    set,
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

export const audioStore = createBackgroundAudio();

export default audioStore;