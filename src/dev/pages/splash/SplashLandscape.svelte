<!-- SCRIPTS ///////////////////////////////////////////////////// -->
<script>
  // IMPORTS ------------------------------------------------------
  import { gsap } from "gsap";
  import { onMount } from "svelte";
  import { pageExit } from "../../stores/site.js";
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
    tl.from("h1 span", {duration: 2, opacity:0, stagger: 1.5}, 3);
    tl.to("#p2-r1", {duration: 2,ease: "linear",fill: "hsl(340, 100%, 10%)",repeat: -1,yoyo: true,},0);
    tl.to("#p2-r2", {duration: 2,ease: "linear",fill: "hsl(360, 100%, 10%)",repeat: -1,yoyo: true,},1);
    tl.to("#p2-r3", {duration: 3, ease: "linear", fill: "hsl(350, 100%, 70%)",repeat: -1,yoyo: true,},2);
  });
</script>

<!-- MARKUP /////////////////////////////////////////////////////// -->
<main id="p2l">
  <svg class="svg-background" viewBox="0 0 1600 900" >

    <line class="line color1-2" x1="0" y1="50" x2="1600" y2="50" />
    <line class="small-line color4" x1="0" y1="50" x2="1600" y2="50" />
    <line class="line color1-2" x1="0" y1="850" x2="1600" y2="850" />
    <line class="small-line color4" x1="0" y1="850" x2="1600" y2="850" />
    <line class="line color1-2" x1="0" y1="100" x2="300" y2="100" />
    <line class="small-line color4" x1="0" y1="100" x2="300" y2="100" />

    <line class="line color1-2" x1="0" y1="150" x2="300" y2="150" />
    <line class="small-line color4" x1="0" y1="150" x2="300" y2="150" />
    <line class="line color1-2" x1="0" y1="200" x2="300" y2="200" />
    <line class="small-line color4" x1="0" y1="200" x2="300" y2="200" />
    <line class="line color1-2" x1="0" y1="250" x2="300" y2="250" />
    <line class="small-line color4" x1="0" y1="250" x2="300" y2="250" />
    <line class="line color1-2" x1="0" y1="300" x2="300" y2="300" />
    <line class="small-line color4" x1="0" y1="300" x2="300" y2="300" />
    <line class="line color1-2" x1="0" y1="350" x2="300" y2="350" />
    <line class="small-line color4" x1="0" y1="350" x2="300" y2="350" />
    <line class="line color1-2" x1="0" y1="400" x2="300" y2="400" />
    <line class="small-line color4" x1="0" y1="400" x2="300" y2="400" />
    <line class="line color1-2" x1="0" y1="450" x2="300" y2="450" />
    <line class="small-line color4" x1="0" y1="450" x2="300" y2="450" />
    <line class="line color1-2" x1="0" y1="500" x2="300" y2="500" />
    <line class="small-line color4" x1="0" y1="500" x2="300" y2="500" />
    <line class="line color1-2" x1="0" y1="550" x2="300" y2="550" />
    <line class="small-line color4" x1="0" y1="550" x2="300" y2="550" />
    <line class="line color1-2" x1="0" y1="600" x2="300" y2="600" />
    <line class="small-line color4" x1="0" y1="600" x2="300" y2="600" />
    <line class="line color1-2" x1="0" y1="650" x2="300" y2="650" />
    <line class="small-line color4" x1="0" y1="650" x2="300" y2="650" />
    <line class="line color1-2" x1="0" y1="700" x2="300" y2="700" />
    <line class="small-line color4" x1="0" y1="700" x2="300" y2="700" />
    <line class="line color1-2" x1="0" y1="750" x2="300" y2="750" />
    <line class="small-line color4" x1="0" y1="750" x2="300" y2="750" />
    <line class="line color1-2" x1="0" y1="800" x2="300" y2="800" />
    <line class="small-line color4" x1="0" y1="800" x2="300" y2="800" />
    <line class="line color1-2" x1="0" y1="600" x2="300" y2="600" />
    <line class="small-line color4" x1="0" y1="600" x2="300" y2="600" />

    <line class="line color1-2" x1="300" y1="0" x2="300" y2="900" />
    <line class="small-line color4" x1="300" y1="0" x2="300" y2="900" />
  </svg>
  <SplashContent />
</main>

<!-- STYLES /////////////////////////////////////////////////// -->
<style>
  #p2l :global(h1) {
    position: absolute;
    left: 20%;
    top: 10%;
  }
  #p2l :global(#p2-span1) {
    font-size: calc(var(--uarr-width)/10);
  }
  #p2l :global(#p2-span2) {
    font-size: calc(var(--uarr-width)/15);
  }
  #p2l :global(#p2-span3) {
    font-size: calc(var(--uarr-width)/15);
  }
</style>