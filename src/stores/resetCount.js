import { writable } from "svelte/store";

// RESET COUNT ------------------------------------------
function createResetCount() {
  const {subscribe, update} = writable(0);

  return {
    subscribe,
    updateResetCount: ()=> update(n => n + 1),
  }
}

const resetCount = createResetCount();

export default resetCount;