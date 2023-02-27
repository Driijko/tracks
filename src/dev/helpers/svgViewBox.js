export default function svgViewBox() {
  if (window.innerHeight >= window.innerWidth) {
    return "0 0 900 1600";
  } else {
    return "0 0 1600 900";
  }
};