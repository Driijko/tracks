<!-- SCRIPTS /////////////////////////////////////// -->
<script>
  // IMPORTS --------------------------------------------
  import {gsap} from "gsap";
  import {onMount} from "svelte";
  import { audioBkgPaused, audioBkgRestartCount, audioBkgCurrentTime } 
  from "../../../../scripts/audioBkgStore";

  // ANIMATION --------------------------------------------
  const tl = gsap.timeline();
  onMount(()=> {
    tl.from("#svg5 .group1", {
      duration: 40,
      opacity: 0,
    }, 0);
    tl.from("#svg5 .line1", {
      duration: 80,
      attr: {x2: 0},
      ease: "none",
      stroke: "hsl(220, 100%, 50%)",
    }, 0);
    tl.from("#svg5 .line2", {
      duration: 60,
      attr: {y2: 0},
      ease: "none",
      stroke: "hsl(220, 100%, 50%)",
    }, 0);
    tl.from("#svg5 .line3", {
      duration: 60,
      attr: {y1: 900},
      ease: "none",
      stroke: "hsl(220, 100%, 50%)",
    }, 0);
    tl.from("#svg5 .line4", {
      duration: 30,
      attr: {x2: 1600},
      ease: "none",
      stroke: "hsl(220, 100%, 50%)",
    }, 0);
    tl.from("#svg5 .circle1", {
      duration: 90,
      attr: {cx: -300},
      ease: "none",
    }, 14);
    tl.from("#svg5 .circle2", {
      duration: 82,
      attr: {cx: 1800},
      ease: "none",
    }, 14);
    tl.from("#svg5 .circle3", {
      duration: 70,
      attr: {cy: -200},
      ease: "none",
    }, 14);
    tl.from("#svg5 .line5", {
      duration: 70,
      ease: "power1.in",
      stroke: "hsl(220, 100%, 0%)",
    }, 52);
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
<svg id="svg5" viewBox="0 0 1600 900" >
  <defs>
    <pattern id="pattern1" viewBox="0 0 100 100" width="6.25%" height="11.11%">
      <rect x="10" y="10" width="80" height="80" fill="hsl(220, 100%, 4%)" 
        stroke="hsl(220, 100%, 30%)" 
      />
    </pattern>
    <filter id="filter1" x="0" y="0" width="1600" height="900">
      <feTurbulence
        type="turbulence"
        baseFrequency="1"
        numOctaves="1"
        result="turbulence" />
      <feDisplacementMap
        in2="turbulence"
        in="SourceGraphic"
        scale="3"
        xChannelSelector="R"
        yChannelSelector="B" />
    </filter>
  </defs>

  <rect x="0" y="0" width="1600" height="900" />
  <line class="line5" x1="200" y1="0" x2="200" y2="900" 
    stroke="hsl(220, 50%, 80%)" stroke-width="100"
  />
  <line class="line5" x1="0" y1="800" x2="1600" y2="800" 
    stroke="hsl(220, 50%, 80%)" stroke-width="100"
  />
  <g class="group1" filter="url(#filter1)">
    
    <rect x="0" y="0" width="1600" height="900" fill="url(#pattern1)" />
    <line class="line1" x1="0" y1="100" x2="1200" y2="100" 
      stroke="hsl(220, 100%, 15%)" stroke-width="9"
    />
    <line class="line2" x1="400" y1="0" x2="400" y2="900" 
      stroke="hsl(220, 100%, 15%)" stroke-width="9"
    />
    <line class="line4" x1="1600" y1="800" x2="1200" y2="800" 
      stroke="hsl(220, 100%, 15%)" stroke-width="9"
    />
    <line class="line3" x1="1200" y1="0" x2="1200" y2="900" 
      stroke="hsl(220, 100%, 15%)" stroke-width="9"
    />
    <circle class="circle1" cx="1050" cy="450" r="300" 
      fill="hsla(220, 100%, 10%, 0.7)" stroke="hsl(220, 100%, 0%)"
      stroke-width="10" rx="100"
    />
    <circle class="circle2" cx="250" cy="250" r="100" 
      fill="hsla(220, 100%, 10%, 0.7)" stroke="hsl(220, 100%, 0%)"
      stroke-width="10" rx="100"
    />
    <circle class="circle3" cx="850" cy="650" r="100" 
      fill="hsla(220, 100%, 10%, 0.7)" stroke="hsl(220, 100%, 0%)"
      stroke-width="10" rx="100"
    />
  </g>
</svg>

<!-- STYLES //////////////////////////////// -->
<style>
  svg {
    width: 100%;
  }
</style>