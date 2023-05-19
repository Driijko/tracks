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
    tl.from("#svg6 line", {
      duration:80, 
      // attr:{x2:0},
      // ease: "none",
      strokeWidth: 5,
      opacity: 0,
    },38);
    tl.to("#svg6 image", {
      duration: 20,
      attr: {x:20, y:20},
    },0);
    tl.to("#svg6 rect",{duration: 5, opacity: 0.5},0);
    tl.to("#svg6 rect",{
      duration: 20, 
      stroke: "hsl(300, 100%, 50%)",
      fill: "hsl(200, 100%, 50%)",
    },18);
    tl.to("#svg6 .rect1", {
      duration: 120,
      attr: {x:300, y:200, width: 1000, height:500},
      ease: "none",
    },0);
    tl.to("#svg6 .rect2", {
      duration: 120,
      attr: {x:100, y:50, width: 1400, height:750},
      ease: "none",
    },0);
    tl.to("#svg6 rect",{
      duration: 80, 
      stroke: "hsl(300, 100%, 90%)",
      fill: "hsl(200, 100%, 90%)",
      opacity: 1,
    },38);
    tl.to("#svg6 rect",{
      duration: 40,
      strokeWidth: 50,
    },80);
    return ()=> tl.kill();
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
<div class="background background2"></div>
<div class="background background1"></div>
<svg id="svg6" viewBox="0 0 1600 900">
  <line class="line1" x1="0" y1="200" x2="1600" y2="200" />
  <line class="line1" x1="0" y1="100" x2="1600" y2="100" />
  <line class="line2" x1="0" y1="700" x2="1600" y2="700" />
  <line class="line2" x1="0" y1="450" x2="1600" y2="450" />
  <line class="line2" x1="0" y1="800" x2="1600" y2="800" />
  <rect class="rect2" x="500" y="425" width="600" height="350" 
    fill="hsl(200, 100%, 90%)" stroke="hsl(300, 100%, 90%)" stroke-width="10"
    opacity="0" 
  />
  <rect class="rect1" x="600" y="100" width="400" height="250" 
    fill="hsl(200, 100%, 90%)" stroke="hsl(300, 100%, 90%)" stroke-width="10"
    opacity="0" 
  />
</svg>



<!-- STYLES /////////////////////////////////////////////////// -->
<style>
  svg {
    width: 100%;
    position: absolute;
  }
  @keyframes shift {
    0% {background-position: 0% 0%; opacity: 0;}
    10% {background-position: 10% 10%; opacity: 0.4;}
    50% {background-position: 50% 50%; opacity: 0.8;}
    90% {background-position: 90% 90%; opacity: 0.4;}
    100% {background-position: 100% 100%; opacity: 0;}
  }
  @keyframes shift2 {
    0% {background-position: 100% 100%; opacity: 0.5;}
    10% {background-position: 90% 90%; opacity: 1;}
    50% {background-position: 50% 50%; opacity: 1;}
    90% {background-position: 10% 10%; opacity: 1;}
    100% {background-position: 0% 0%; opacity: 0.5;}
  }
  .background1 {
    background-image: url("./images/pic3.webp");
    background-size: 120%;
    opacity: 0.3;
    animation: shift 20s infinite linear;
  }
  .background2 {
    background-image: url("./images/pic4.webp");
    background-size: 120%;
    opacity: 0.3;
    animation: shift2 20s 10s infinite linear;
  }
  rect, line {
    filter: blur(6px);
  }
  line {
    stroke-width: 500;
    stroke: hsl(50, 100%, 50%);
    opacity: 0.5;
  }
</style>