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
    // ANIMATION --------------------------------------------------
    tl.from(["#r1", "#r2", "#r3", "#r4"], {duration: 2, opacity: 0},0);
    tl.to("#r1", {duration: 5, fill: "hsl(340, 100%, 70%)", ease: "linear",repeat: -1, yoyo: true, repeatDelay: 1},2);
    tl.to(["#r2", "#r3", "#r4"], {duration: 5, fill: "hsl(350, 100%, 10%)", ease: "linear",repeat: -1, yoyo: true, repeatDelay: 1},2);
    tl.from(".line-group-1", {duration: 6, attr: {y1:450,y2:450}, stagger:0.5, ease:"power1.inOut"},2);
    tl.from(".line-group-2", {duration: 4, attr: {x1:800,x2:800}, stagger:0.5, ease:"power1.inOut"},2);
    tl.from(".line-group-3", {duration: 3, attr: {x1:300,x2:300}, stagger:0.1, ease:"power1.inOut"},7.5);
    tl.from("#splash-title span", {duration: 2, opacity:0, stagger: 1.5}, 9);
  });
</script>

<!-- MARKUP /////////////////////////////////////////////////////// -->
<main id="p2l">
  <svg class="svg-background" viewBox="0 0 1600 900" >

    <rect id="r1" fill="hsl(350, 100%, 10%)" x="0" y="0" width="300" height="900" />
    <rect id="r2" fill="hsl(340, 100%, 70%)" x="300" y="0" width="1300" height="50" />
    <rect id="r3" fill="hsl(340, 100%, 70%)" x="300" y="850" width="1300" height="50" />
    <rect id="r4" fill="hsl(340, 100%, 70%)" x="1100" y="50" width="400" height="800" />

    <line class="line-group-1 line color2" x1="1300" y1="0" x2="1300" y2="900" />

    <line class="line-group-1 line color1-2" x1="1100" y1="0" x2="1100" y2="900" />
    <line class="line-group-1 line color1-2" x1="1500" y1="0" x2="1500" y2="900" />

    <line class="line-group-2 line color1-2" x1="0" y1="50" x2="1600" y2="50" />
    <line class="line-group-2 small-line color4" x1="0" y1="50" x2="1600" y2="50" />
    <line class="line-group-2 line color1-2" x1="0" y1="850" x2="1600" y2="850" />
    <line class="line-group-2 small-line color4" x1="0" y1="850" x2="1600" y2="850" />

    <line class="line-group-3 line color1-2" x1="0" y1="100" x2="300" y2="100" />
    <line class="line-group-3 small-line color4" x1="0" y1="100" x2="300" y2="100" />
    <line class="line-group-3 line color1-2" x1="0" y1="150" x2="300" y2="150" />
    <line class="line-group-3 small-line color4" x1="0" y1="150" x2="300" y2="150" />
    <line class="line-group-3 line color1-2" x1="0" y1="200" x2="300" y2="200" />
    <line class="line-group-3 small-line color4" x1="0" y1="200" x2="300" y2="200" />
    <line class="line-group-3 line color1-2" x1="0" y1="250" x2="300" y2="250" />
    <line class="line-group-3 small-line color4" x1="0" y1="250" x2="300" y2="250" />
    <line class="line-group-3 line color1-2" x1="0" y1="300" x2="300" y2="300" />
    <line class="line-group-3 small-line color4" x1="0" y1="300" x2="300" y2="300" />
    <line class="line-group-3 line color1-2" x1="0" y1="350" x2="300" y2="350" />
    <line class="line-group-3 small-line color4" x1="0" y1="350" x2="300" y2="350" />
    <line class="line-group-3 line color1-2" x1="0" y1="400" x2="300" y2="400" />
    <line class="line-group-3 small-line color4" x1="0" y1="400" x2="300" y2="400" />
    <line class="line-group-3 line color1-2" x1="0" y1="450" x2="300" y2="450" />
    <line class="line-group-3 small-line color4" x1="0" y1="450" x2="300" y2="450" />
    <line class="line-group-3 line color1-2" x1="0" y1="500" x2="300" y2="500" />
    <line class="line-group-3 small-line color4" x1="0" y1="500" x2="300" y2="500" />
    <line class="line-group-3 line color1-2" x1="0" y1="550" x2="300" y2="550" />
    <line class="line-group-3 small-line color4" x1="0" y1="550" x2="300" y2="550" />
    <line class="line-group-3 line color1-2" x1="0" y1="600" x2="300" y2="600" />
    <line class="line-group-3 small-line color4" x1="0" y1="600" x2="300" y2="600" />
    <line class="line-group-3 line color1-2" x1="0" y1="650" x2="300" y2="650" />
    <line class="line-group-3 small-line color4" x1="0" y1="650" x2="300" y2="650" />
    <line class="line-group-3 line color1-2" x1="0" y1="700" x2="300" y2="700" />
    <line class="line-group-3 small-line color4" x1="0" y1="700" x2="300" y2="700" />
    <line class="line-group-3 line color1-2" x1="0" y1="750" x2="300" y2="750" />
    <line class="line-group-3 small-line color4" x1="0" y1="750" x2="300" y2="750" />
    <line class="line-group-3 line color1-2" x1="0" y1="800" x2="300" y2="800" />
    <line class="line-group-3 small-line color4" x1="0" y1="800" x2="300" y2="800" />

    <line class="line-group-1 line color1-2" x1="300" y1="0" x2="300" y2="900" />
    <line class="line-group-1 small-line color4" x1="300" y1="0" x2="300" y2="900" />
  </svg>
  <SplashContent />
</main>

<!-- STYLES /////////////////////////////////////////////////// -->
<style>
@media screen and (orientation: landscape) {
  :global(#splash-title) {
    position: absolute;
    left: 21%;
    top: 20%;
    line-height: 1.2;
  }
  :global(#splash-title span:nth-of-type(1)) {
    font-size: calc(var(--uarr-width)/10);
  }
  :global(#splash-title span:nth-of-type(2)) {
    font-size: calc(var(--uarr-width)/15);
    padding-left: 5%;
  }
  :global(#splash-title span:nth-of-type(3)) {
    font-size: calc(var(--uarr-width)/16);
  }
}
</style>