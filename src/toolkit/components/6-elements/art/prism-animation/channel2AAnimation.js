import { gsap } from "gsap";

// HELPERS -----------------------
const fill1 = "hsla(50, 100%, 65%)";
const fill2 = "hsl(50, 100%, 80%)";
const duration1 = 0.5;

export default function channel2AAanimation() {
  function handleOnComplete() {
    this.kill();
  };
  const tl = gsap.timeline({
    repeat: 3, repeatDelay: 0.2, onComplete: handleOnComplete
  });
  tl.to("#svg4 .path1", {
    duration: 0.01,
    fill: fill1,
    ease: "power1.out",
    strokeWidth: 10,
  },0);
  tl.to("#svg4 .path1", {
    duration: duration1,
    fill: fill2,
    ease: "power1.out",
    strokeWidth: 5,
  },0.2);
  tl.to("#svg4 .path2", {
    duration: 0,
    fill: fill1,
    ease: "power1.out",
    strokeWidth: 10,
  },0.2);
  tl.to("#svg4 .path2", {
    duration: duration1,
    fill: fill2,
    ease: "power1.out",
    strokeWidth: 5,
  },0.3);
  tl.to("#svg4 .path3", {
    duration: 0,
    fill: fill1,
    ease: "power1.out",
    strokeWidth: 10,
  },0.4);
  tl.to("#svg4 .path3", {
    duration: duration1,
    fill: fill2,
    ease: "power1.out",
    strokeWidth: 5,
  },0.5);
  tl.to("#svg4 .path4", {
    duration: 0,
    fill: fill1,
    ease: "power1.out",
    strokeWidth: 10,
  },0.6);
  tl.to("#svg4 .path4", {
    duration: duration1,
    fill: fill2,
    ease: "power1.out",
    strokeWidth: 5,
  },0.7);
  tl.to("#svg4 .path5", {
    duration: 0,
    fill: fill1,
    ease: "power1.out",
    strokeWidth: 10,
  },0.7);
  tl.to("#svg4 .path5", {
    duration: duration1,
    fill: fill2,
    ease: "power1.out",
    strokeWidth: 5,
  },0.8);

  tl.to("#svg4 .path1", {
    duration: 0,
    fill: fill1,
    ease: "power1.out",
    strokeWidth: 10,
  },1.1);
  tl.to("#svg4 .path1", {
    duration: duration1,
    fill: fill2,
    ease: "power1.out",
    strokeWidth: 5,
  },1.2);
  tl.to("#svg4 .path2", {
    duration: 0,
    fill: fill1,
    ease: "power1.out",
    strokeWidth: 10,
  },1.3);
  tl.to("#svg4 .path2", {
    duration: duration1,
    fill: fill2,
    ease: "power1.out",
    strokeWidth: 5,
  },1.4);
  tl.to("#svg4 .path3", {
    duration: 0,
    fill: fill1,
    ease: "power1.out",
    strokeWidth: 10,
  },1.5);
  tl.to("#svg4 .path3", {
    duration: duration1,
    fill: fill2,
    ease: "power1.out",
    strokeWidth: 5,
  },1.6);
  tl.to("#svg4 .path4", {
    duration: 0,
    fill: fill1,
    ease: "power1.out",
    strokeWidth: 10,
  },1.7);
  tl.to("#svg4 .path4", {
    duration: duration1,
    fill: fill2,
    ease: "power1.out",
    strokeWidth: 5,
  },1.8);
  tl.to("#svg4 .path5", {
    duration: 0,
    fill: fill1,
    ease: "power1.out",
    strokeWidth: 10,
  },1.9);
  tl.to("#svg4 .path5", {
    duration: duration1,
    fill: fill2,
    ease: "power1.out",
    strokeWidth: 5,
  },2);
  tl.to("#svg4 .path6", {
    duration: 0,
    opacity: 1,
    ease: "power1.out",
    strokeWidth: 10,
  },2.1);
  tl.to("#svg4 .path7", {
    duration: 0,
    opacity: 1,
    ease: "power1.out",
    strokeWidth: 10,
  },2.4);
  tl.to("#svg4 .path8", {
    duration: 0,
    opacity: 1,
    ease: "power1.out",
    strokeWidth: 10,
  },2.8);
  tl.to("#svg4 .path9", {
    duration: 0,
    opacity: 1,
    ease: "power1.out",
    strokeWidth: 10,
  },3.2);
  tl.to("#svg4 .path10", {
    duration: duration1,
    opacity: 0.2,
    strokeWidth: 5,
    ease: "power1.out",
  }, 3.3)

  return tl;
}