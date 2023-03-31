import currentPageName from "../stores/currentPageName";

export default function pageExit(destinationPageName, duration) {
  const timerId = setTimeout(()=> {
    clearTimeout(timerId);
    currentPageName.set(destinationPageName);
    clearTimeout(timerId);
  }, duration);
};