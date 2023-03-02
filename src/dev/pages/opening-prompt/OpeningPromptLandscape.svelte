<!-- SCRIPTS ///////////////////////////////////////////// -->
<script>
  // IMPORTS ----------------------------------------------
  import OpeningPromptContent from "./OpeningPromptContent.svelte";
  import { gsap } from "gsap";
  import { pageExit } from "../../stores/site.js";
  import { onMount } from "svelte";

  // ANIMATION ---------------------------------------------
  let tl = gsap.timeline();

  // EVENT HANDLERS ----------------------------------------
  function handleLinkClick() {
    tl.reverse(5);
    pageExit("splash", 5000);
  }

  // LIFECYCLE ---------------------------------------------------
  onMount(()=> {
    // ANIMATION ----------------------------------------------
      tl.from("#p1-l1", {duration: 2, ease:"power1.inOut", attr:{x2: 0}},0);
      tl.from("#p1-l2", {duration: 2, ease:"power1.inOut", attr:{x1: 1600}},0);
      tl.from("#p1-l3", {duration: 1, ease:"power1.inOut", attr:{y2: 0}},0);
      tl.from("#p1-l4", {duration: 1, ease:"power1.inOut", 
        attr:{y1: 900}},0);
      tl.from("#p1-l5", {duration: 1, ease:"power1.inOut", 
      attr:{x1: 1600}},3);
      tl.from("#p1-l6", {duration: 1, ease:"power1.inOut", 
      attr:{y2: 0}},2.5);
      tl.from("#p1-l7", {duration: 1, ease:"power1.inOut", 
      attr:{x2: 0}},3);
      tl.from("#p1-l8", {duration: 1, ease:"power1.inOut", 
      attr:{y1: 900}},2.5);
      tl.from("#p1-r1", {duration: 3, ease:"power1.out", attr:{x:1600, width: 0}},1);
      tl.from("#p1-r2", {duration: 3, ease:"power1.out", attr:{width: 0}},1);
      tl.from("#p1-r3", {duration: 2, ease:"power1.out", attr:{y: 900, height: 0}},1);
      tl.from(["#p1-r4", "#p1-r5"], {duration: 2, ease: "power1.inOut", opacity: 0}, 4);
      tl.from(["#p1-p1", "#p1-p2", "#p1-p3"], {duration: 3, ease:"power1.inOut", letterSpacing: "-0.5em", stagger: 1}, 1);
      tl.set(["#p1-p1", "#p1-p2", "#p1-p3"], {transform: "rotateY(0deg)", stagger: 1}, 1)
      tl.from(["#p1-p1", "#p1-p2", "#p1-p3"], {duration: 1, ease:"linear", transform: "rotateY(90deg)", stagger: 1}, 1);
      tl.set(".prompt-option", {transform: "scaleX(1)"}, 2);
      tl.from(".prompt-option", {duration: 6, transform: "scaleX(0)", opacity: 0, ease: "power1.out"}, 2);
      tl.from("#p1-link1", {duration: 2, opacity: 0}, 6);
  });
</script>

<!-- MARKUP //////////////////////////////////////////////// -->
<main id="p1l">
  <svg class="svg-background" viewBox="0 0 1600 900" >
    <rect id="p1-r1" class="color1" x="1000" y="0" width="600" height="530" />
    <rect id="p1-r2" class="color1" x="0" y="450" width="600" height="480" />
    <rect id="p1-r3" class="color1" x="0" y="200" width="150" height="700" />
    <rect id="p1-r4" class="color3" x="1410" y="60" width="130" height="200" />
    <rect id="p1-r5" class="color3" x="60" y="640" width="130" height="200" />
    <line id="p1-l1" class="line" x1="0" y1="200" x2="1600" y2="200" />
    <line id="p1-l2" class="line" x1="0" y1="700" x2="1600" y2="700" />
    <line id="p1-l3" class="line" x1="600" y1="0" x2="600" y2="900" />
    <line id="p1-l4" class="line" x1="1000" y1="0" x2="1000" y2="900" />
    <line id="p1-l5" class="small-accent-line" x1="1000" y1="30" x2="1600" y2="30" />
    <line id="p1-l6" class="small-accent-line" x1="1570" y1="0" x2="1570" y2="520" />
    <line id="p1-l7" class="small-accent-line" x1="0" y1="870" x2="600" y2="870" />
    <line id="p1-l8" class="small-accent-line" x1="30" y1="200" x2="30" y2="900" />
  </svg>
  <OpeningPromptContent {handleLinkClick} />
</main>

<!-- STYLE //////////////////////////////////////////////// -->
<style>
  main {
    width: 100%;
    height: 100%;
  }
  #p1l :global(#p1-p1) {
    font-size: calc(var(--uarr-width)/43);
    left: 1.5%;
    top: 8.5%;
  }
  #p1l :global(#p1-d1) {
    top: 23%;
    width: 100%;
    height: 77%;
  } 
  #p1l :global(#p1-d1 > *) {
    position: absolute;
  } 
  #p1l :global(#p1-p2) {
    font-size: calc(var(--uarr-width)/50);
    width: 35%;
    line-height: 2;
    top: 4%;
    left: 11%;
  }
  #p1l :global(.prompt-option) {
    left: 38%;
    width: 24%;
    height: 33%;
    font-size: calc(var(--uarr-width)/47);
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-between;
    padding: 2%;
  }
  #p1l :global(#prompt-option-2) {
    top: 33%;
  }
  #p1l :global(input[type="checkbox"]) {
    border: calc(var(--uarr-width)/200) solid var(--color1);
    border-radius: calc(var(--uarr-width)/200);
    width: 20%;
    height: 37%;
  }
  #p1l :global(#p1-d2) {
    left: 37.8%;
    top: 0%;
    width: 62%;
    height: 100%;
    font-size: calc(var(--uarr-width)/50);
    pointer-events: none;
  }
  #p1l :global(#p1-d2 label) {
    position: absolute;
    top: 76%;
    text-align: center;
    width: 39%;
  }
  #p1l :global(input[type="range"]) {
    position: absolute;
    left: 5%;
    top: 82%;
    width: 30%;
    height: calc(var(--uarr-width)/12);
    pointer-events: initial;
  }
  #p1l :global(input[type="range"]::-webkit-slider-runnable-track) {
    height: 30%;
    border-radius: calc(var(--uarr-width)/50);
    border: calc(var(--uarr-width)/150) solid var(--color1);
    pointer-events: initial;
  }
  #p1l :global(input[type="range"]::-moz-range-track) {
    height: 10%;
    border-radius: calc(var(--uarr-width)/50);
    border: calc(var(--uarr-width)/150) solid var(--color1);
    pointer-events: initial;
  }
  #p1l :global(input[type="range"]::-webkit-slider-thumb) {
    margin-top: -5.1%; 
    border: calc(var(--uarr-width)/200) solid var(--color1);
    border-radius: calc(var(--uarr-width)/10);
    height: 250%;
    width: 18%;  
    pointer-events:initial;
  }
  #p1l :global(input[type="range"]::-moz-range-thumb) {
    margin-top: -4.5%; 
    border: calc(var(--uarr-width)/200) solid var(--color1);
    border-radius: calc(var(--uarr-width)/10);
    height: 25%;
    width: 10%;   
  }
  #p1l :global(#p1-p3) {
    position: absolute;
    left: 45%;
    width: 59%;
    top: 50%;
    line-height: 1.7;
  }
  #p1l :global(#p1-link1) {
    font-size: calc(var(--uarr-width)/50);
    padding: 2%;
    right: 1%;
    top: 83.5%;
    border: calc(var(--uarr-width)/300) solid var(--color2-2);
  }
</style>