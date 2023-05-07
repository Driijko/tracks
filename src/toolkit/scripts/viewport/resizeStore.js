// import { writable } from "svelte/store";

// RESET COUNT ------------------------------------------
// function createResizeStore() {
//   const {subscribe, update} = writable(0);

//   return {
//     subscribe,
//     updateResizeCount: ()=> update(n => n + 1),
//   }
// }

// const resizeStore = createResizeStore();

// export default resizeStore;

import { writable, get } from "svelte/store";

// STATE -----------------------------------
export const resetCount = writable(0);
export const resizing = writable(false);

// FUNCTIONS -------------------------------
export function updateResetCount() {
  resetCount.set(get(resetCount) + 1);
};

export function nowResizing() {
  resizing.set(true);
};

export function notResizing() {
  resizing.set(false);
};