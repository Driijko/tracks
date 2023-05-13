import {gsap} from "gsap";

// HELPERS -----------------------
const fill1 = "hsla(50, 100%, 65%)";
const fill2 = "hsl(50, 100%, 80%)";

export default function channel1Animation() {
  function handleOnComplete() {
    this.kill();
  }
  const tl = gsap.timeline({
    repeat: 19, repeatDelay: 0.1, onComplete: handleOnComplete
  });
  tl.to("#svg4 .circle1", {
    duration: 0.01,
    ease: "none",
    fill: fill1,
    strokeWidth: 20,
  },0);
  tl.to("#svg4 .circle1", {
    duration: 0,
    ease: "none",
    fill: fill2,
    strokeWidth: 5,
  },0.1);
  tl.to("#svg4 .circle1", {
    duration: 0,
    ease: "none",
    fill: fill1,
    strokeWidth: 20,
  },0.25);
  tl.to("#svg4 .circle1", {
    duration: 0.5,
    ease: "power1.out",
    fill: fill2,
    strokeWidth: 5,
  },0.5);
  
  tl.to("#svg4 .circle2", {
    duration: 0,
    ease: "none",
    fill: fill1,
    strokeWidth: 20,
  },1.5);
  tl.to("#svg4 .circle2", {
    duration: 0,
    ease: "none",
    fill: fill2,
    strokeWidth: 5,
  },1.6);
  tl.to("#svg4 .circle2", {
    duration: 0,
    ease: "none",
    fill: fill1,
    strokeWidth: 20,
  },1.75);
  tl.to("#svg4 .circle2", {
    duration: 0.5,
    ease: "power1.out",
    fill: fill2,
    strokeWidth: 5,
  },2);
  
  tl.to("#svg4 .circle3", {
    duration: 0,
    ease: "none",
    fill: fill1,
    strokeWidth: 20,
  },2.2);
  tl.to("#svg4 .circle3", {
    duration: 0,
    ease: "none",
    fill: fill2,
    strokeWidth: 5,
  },2.3);
  tl.to("#svg4 .circle3", {
    duration: 0,
    ease: "none",
    fill: fill1,
    strokeWidth: 20,
  },2.45);
  tl.to("#svg4 .circle3", {
    duration: 0.5,
    ease: "power1.out",
    fill: fill2,
    strokeWidth: 5,
  },2.6);
  
  tl.to("#svg4 .circle4", {
    duration: 0,
    ease: "none",
    fill: fill1,
    strokeWidth: 20,
  },3);
  tl.to("#svg4 .circle4", {
    duration: 0.4,
    ease: "power1.out",
    fill: fill2,
    strokeWidth: 5,
  },3.1);
  tl.to("#svg4 .circle4", {
    duration: 0,
    ease: "none",
    fill: fill1,
    strokeWidth: 20,
  },3.5);
  tl.to("#svg4 .circle4", {
    duration: 0.4,
    ease: "power1.out",
    fill: fill2,
    strokeWidth: 5,
  },3.5);

  return tl;
}
