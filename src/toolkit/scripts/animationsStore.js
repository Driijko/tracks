import { writable, get } from "svelte/store";

// STATE ---------------------------------
export const animationsOff = writable(false);

if (window.innerWidth < window.innerHeight) {
  animationsOff.set(true);
}

// FUNCTIONS -----------------------------
export function toggleAnimations() {
  animationsOff.set(!(get(animationsOff)));
};