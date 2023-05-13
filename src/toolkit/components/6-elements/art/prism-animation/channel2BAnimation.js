import { gsap } from "gsap";

// HELPERS -----------------------
const fill1 = "hsla(50, 100%, 65%)";
const fill2 = "hsl(50, 100%, 80%)";

export default function channel2BAnimation() {
  const tl = gsap.timeline();
  tl.to("#svg4 .rect1", {
    duration: 47,
    opacity: 0.5,
    strokeWidth: 10,
    y: 0,
    ease: "power1.in"
  },0);
  tl.to("#svg4 .rect2", {
    duration: 47,
    opacity: 0.5,
    strokeWidth: 10,
    y: 0,
    ease: "power1.in"
  },0);
  tl.from("#svg4 .path11", {
    duration: 47,
    ease: "power1.out",
    stagger: {
      from: "edges",
      amount: 20,
    },
    opacity: 1,
    attr: {d: "M 800,14 Q 800,14 800,14 Z"},
  },0);
  tl.from("#svg4 .path12", {
    duration: 47,
    ease: "power1.out",
    stagger: {
      from: "edges",
      amount: 20,
    },
    opacity: 1,
    attr: {d: "M 800,886 Q 800,886 800,886 Z"},
  },0);

  return tl;
}