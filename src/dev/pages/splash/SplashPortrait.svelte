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
      tl.from("#p1-l1", {duration: 1, ease:"linear", attr:{x2: 0}},0);
      tl.from("#p1-l2", {duration: 1, ease:"linear", attr:{y2: 0}},0);
      tl.from("#p1-l3", {duration: 1, ease:"power1.inOut", attr:{x2: 100}},0.85);
      tl.from("#p1-l4", {duration: 1, ease:"power1.inOut", 
        attr:{y1: 800, y2: 800}},1.7);
      tl.from("#p1-r1", {duration: 2, ease:"power1.inOut", attr:{x:900, width: 0}},0);
      tl.from(["#p1-r2", "#p1-r3"], {duration: 2, ease:"power1.inOut", opacity:0},0);
      tl.from(["#p1-p1", "#p1-p2", "#p1-p3"], {duration: 1.5, ease:"power1.inOut", letterSpacing: "-0.5em"}, 1);
      tl.set(["#p1-p1", "#p1-p2", "#p1-p3"], {transform: "rotateY(0deg)"}, 1)
      tl.from(["#p1-p1", "#p1-p2", "#p1-p3"], {duration: 0.5, ease:"linear", transform: "rotateY(90deg)"}, 1);
      tl.set(".prompt-option", {transform: "scaleX(1)"}, 1);
      tl.from(".prompt-option", {duration: 1.5, transform: "scaleX(0)"}, 1);
      tl.from("#p1-link1", {duration: 2, opacity: 0}, 2);
  });
</script>

<!-- MARKUP /////////////////////////////////////////////////////// -->
<main id="p2p">
  <svg class="svg-background" viewBox="0 0 900 1600" >

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
    top: 15%;
  }
  #p2p :global(#p2-span1) {
    font-size: calc(var(--uarr-width)/4.5);
  }
  #p2p :global(#p2-span2) {
    font-size: calc(var(--uarr-width)/7);
  }
  #p2p :global(#p2-span3) {
    font-size: calc(var(--uarr-width)/9);
  }
</style>