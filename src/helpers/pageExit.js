import currentPageName from "../stores/currentPageName";

export default function pageExit(destinationPageName, duration) {
  const timerId = setTimeout(()=> {
    currentPageName.set(destinationPageName);
    clearTimeout(timerId);
  }, duration);
};