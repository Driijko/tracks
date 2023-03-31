// IMPORT SCRIPTS ------------------------------------
import { writable} from "svelte/store";

// SETTINGS -----------------------------------------
const startingPageName = "loading-screen";

// STORE
const currentPageName = writable(startingPageName);

export default currentPageName;