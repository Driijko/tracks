// IMPORT SCRIPTS ------------------------------------
import { writable} from "svelte/store";
import siteSettings from "../helpers/siteSettings";

// STORE
const currentPageName = writable(siteSettings.startingPageName);

export default currentPageName;