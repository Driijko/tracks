<!-- SCRIPTS ////////////////////////////////////////////// -->
<script>
  // IMPORTS ---------------------------
  import { gsap } from "gsap";
  import { onMount } from "svelte";
  import { audioBkgPaused, audioBkgCurrentTime, audioBkgRestartCount }
  from "../../../scripts/audioBkgStore";

  // ANIMATIONS ----------------------------
  const tl = gsap.timeline();
  onMount(()=> {
    tl.set("#svg6 .rect1", {transformOrigin: "50% 50%"});
    tl.to("#svg6 .rect1", {
      duration: 20,
      opacity: 0.8,
    },0);
    tl.to("#svg6 .rect1", {
      scale: 0.7,
      stagger: 4,
      duration: 50,
    },20);
    tl.to("#svg6 .rect1", {
      scale: 1,
      stagger: 4,
      duration: 50,
    },70);
    tl.from("#svg6 .rect2", {
      duration: 126,
      attr: {width:500},
      ease: "none",
      fill: "hsl(150, 100%, 50%)",
      stroke: "hsl(40, 100%, 50%)",
      opacity: 0.1,
    },0);
    tl.from("#svg6 .rect3", {
      duration: 126,
      attr: {y:400},
      ease: "none",
      fill: "hsl(150, 100%, 50%)",
      stroke: "hsl(40, 100%, 50%)",
      opacity: 0.1,
    },0);
    tl.from("#svg6 .rect4", {
      duration: 126,
      attr: {x:400},
      ease: "none",
      fill: "hsl(150, 100%, 50%)",
      stroke: "hsl(40, 100%, 50%)",
      opacity: 0.1,
    },0);
    tl.from("#svg6 .rect5", {
      duration: 126,
      attr: {height: 800},
      ease: "none",
      fill: "hsl(150, 100%, 50%)",
      stroke: "hsl(40, 100%, 50%)",
      opacity: 0.1,
    },0);
    return (()=> {
      tl.kill();
    });
  });

  // REACTIVE -------------------------
  $: if ($audioBkgPaused) {
    tl.pause();
  } else {
    tl.play();
  };

  $: if ($audioBkgRestartCount) {
    tl.restart();
  }

  $: if (tl.time() !== $audioBkgCurrentTime) {
    tl.seek($audioBkgCurrentTime);
  }

</script>

<!-- MARKUP //////////////////////////////////////////// -->
<svg id="svg6" viewBox="0 0 1600 900">
  <rect class="rect2" x="-10" y="-100" width="0" height="1060" 
    fill="hsl(150, 100%, 85%)" stroke="hsl(40, 100%, 90%)" stroke-width="100"
    opacity="1"
  />
  <rect class="rect3" x="-30" y="1000" width="1660" height="800" 
    fill="hsl(150, 100%, 85%)" stroke="hsl(40, 100%, 90%)" stroke-width="100"
    opacity="1"
  />
  <rect class="rect4" x="1700" y="-100" width="900" height="1060" 
    fill="hsl(150, 100%, 85%)" stroke="hsl(40, 100%, 90%)" stroke-width="100"
    opacity="1"
  />
  <rect class="rect5" x="-30" y="-100" width="1660" height="0" 
    fill="hsl(150, 100%, 85%)" stroke="hsl(40, 100%, 90%)" stroke-width="100"
    opacity="1"
  />
  <rect class="rect1" x="500" y="400" width="600" height="400" 
    fill="hsl(60, 100%, 70%)" stroke="hsl(60, 100%, 80%)" stroke-width="30"
    opacity="0"
  />
  <rect class="rect1" x="600" y="80" width="400" height="250"
    fill="hsl(60, 100%, 70%)" stroke="hsl(60, 100%, 80%)" stroke-width="30"
    opacity="0"
  />
</svg>



<!-- STYLES /////////////////////////////////////////////////// -->
<style>
  svg {
    width: 100%;
    filter: blur(calc(var(--uarr2-width)/200));
  }
</style>