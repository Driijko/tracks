import { writable } from "svelte/store";
import viewportOrientationString from "../helpers/viewportOrientationString";

const viewportOrientation = writable(viewportOrientationString());

export default viewportOrientation;