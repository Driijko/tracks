<!-- SCRIPTS ///////////////////////////////////////////////////// -->
<script>
  // IMPORTS ------------------------------------------------------
  import { gsap } from "gsap";
  import { onMount } from "svelte";
  import SplashContent from "./SplashContent.svelte";

  // ANIMATION ---------------------------------------------
  let tl = gsap.timeline();

  // LIFECYCLE ---------------------------------------------------
  onMount(()=> {
    // ANIMATION ----------------------------------------------
    tl.from(".rect-group-1", {duration:2, opacity: 0});
    tl.from(".line-group-1",{duration: 2,ease:"power1.inOut",attr: {y2:0}},0);
    tl.from(".line-group-2",{duration: 2,ease:"power1.inOut",attr: {y1:1600}},0);
    tl.from(".line-group-3",{duration: 3,ease:"power1.inOut",stagger:0.1,attr: {x2:0}},1);
    tl.from(".line-group-4",{duration: 3,ease:"power1.inOut",stagger:0.1,attr: {x1:900}},1);
    tl.from("h1 span", {duration: 2, opacity:0, stagger: 1.5}, 0);
    tl.to("#p2-r1", {duration: 2,ease: "linear",fill: "hsl(340, 100%, 10%)",repeat: -1,yoyo: true,},0);
    tl.to("#p2-r2", {duration: 2,ease: "linear",fill: "hsl(360, 100%, 10%)",repeat: -1,yoyo: true,},1);
    tl.to("#p2-r3", {duration: 3, ease: "linear", fill: "hsl(350, 100%, 70%)",repeat: -1,yoyo: true,},2);
    // tl.from("#p1-l1", {duration: 1, ease:"linear", attr:{x2: 0}},0);
    // tl.from("#p1-l2", {duration: 1, ease:"linear", attr:{y2: 0}},0);
    // tl.from("#p1-l3", {duration: 1, ease:"power1.inOut", attr:{x2: 100}},0.85);
    // tl.from("#p1-l4", {duration: 1, ease:"power1.inOut", 
    //   attr:{y1: 800, y2: 800}},1.7);
    // tl.from("#p1-r1", {duration: 2, ease:"power1.inOut", attr:{x:900, width: 0}},0);
    // tl.from(["#p1-r2", "#p1-r3"], {duration: 2, ease:"power1.inOut", opacity:0},0);
    // tl.from(["#p1-p1", "#p1-p2", "#p1-p3"], {duration: 1.5, ease:"power1.inOut", letterSpacing: "-0.5em"}, 1);
    // tl.set(["#p1-p1", "#p1-p2", "#p1-p3"], {transform: "rotateY(0deg)"}, 1)
    // tl.from(["#p1-p1", "#p1-p2", "#p1-p3"], {duration: 0.5, ease:"linear", transform: "rotateY(90deg)"}, 1);
    // tl.set(".prompt-option", {transform: "scaleX(1)"}, 1);
    // tl.from(".prompt-option", {duration: 1.5, transform: "scaleX(0)"}, 1);
    // tl.from("#p1-link1", {duration: 2, opacity: 0}, 2);
  });
</script>

<!-- MARKUP /////////////////////////////////////////////////////// -->
<main id="p2p">
  <svg class="svg-background" viewBox="0 0 900 1600" >
    <rect id="p2-r1" class="color4 rect-group-1" x="0" y="0" width="550" height="900" opacity="0.3" stroke-width="0" />
    <rect id="p2-r2" class="color4 rect-group-1" x="350" y="700" width="550" height="900" opacity="0.3" stroke-width="0" />
    <rect id="p2-r3" class="color4 rect-group-1" x="250" y="500" width="400" height="450" opacity="0.5" stroke-width="0" />
    <line class="line line-group-1" x1="20" y1="0" x2="20" y2="1600" />
    <line class="line line-group-2" x1="50" y1="0" x2="50" y2="1600" />
    <line class="line line-group-2" x1="850" y1="0" x2="850" y2="1600" />
    <line class="line line-group-1" x1="880" y1="0" x2="880" y2="1600" />
    <line class="line line-group-3" x1="0" y1="20" x2="900" y2="20" />
    <line class="line line-group-4" x1="0" y1="50" x2="900" y2="50" />
    <line class="line line-group-3" x1="0" y1="80" x2="900" y2="80" />
    <line class="line line-group-4" x1="0" y1="110" x2="900" y2="110" />
    <line class="line line-group-3" x1="0" y1="140" x2="900" y2="140" />
    <line class="line line-group-4" x1="0" y1="170" x2="900" y2="170" />
    <line class="line line-group-3" x1="0" y1="200" x2="900" y2="200" />
    <line class="line line-group-4" x1="0" y1="1400" x2="900" y2="1400" />
    <line class="line line-group-3" x1="0" y1="1430" x2="900" y2="1430" />
    <line class="line line-group-4" x1="0" y1="1460" x2="900" y2="1460" />
    <line class="line line-group-3" x1="0" y1="1490" x2="900" y2="1490" />
    <line class="line line-group-4" x1="0" y1="1520" x2="900" y2="1520" />
    <line class="line line-group-3" x1="0" y1="1550" x2="900" y2="1550" />
    <line class="line line-group-4" x1="0" y1="1580" x2="900" y2="1580" />
  </svg>
  <SplashContent />
</main>

<!-- STYLES /////////////////////////////////////////////// -->
<style>
  main {
    width: 100%;
    height: 100%;
  }
  #p2p :global(h1) {
    position: absolute;
    width: 100%;
    top: 13%;
  }
  #p2p :global(#p2-span1) {
    font-size: calc(var(--uarr-width)/4.5);
  }
  #p2p :global(#p2-span2) {
    font-size: calc(var(--uarr-width)/7);
  }
  #p2p :global(#p2-span3) {
    font-size: calc(var(--uarr-width)/10);
  }
</style>