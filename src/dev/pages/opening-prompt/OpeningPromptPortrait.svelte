<!-- SCRIPTS ///////////////////////////////////////////////////// -->
<script>
  // IMPORTS ------------------------------------------------------
  import { gsap } from "gsap";
  import { onMount } from "svelte";
  import { pageExit } from "../../stores/site.js";
  import OpeningPromptContent from "./OpeningPromptContent.svelte";

  // ANIMATION ---------------------------------------------
  let tl = gsap.timeline();

  // EVENT HANDLERS -------------------------------------------
  function handleLinkClick() {
    tl.reverse(2.5);
    pageExit("splash", 3000);
  }

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
<main id="p1p">
  <svg class="svg-background" viewBox="0 0 900 1600" >
    <rect id="p1-r1" class="color1" x="750" y="100" width="150" height="1400" />
    <rect id="p1-r2" class="color3" x="490" y="100" width="260" height="1400" />
    <rect id="p1-r3" class="color4" x="100" y="500" width="650" height="380" />
    <line id="p1-l1" class="line color1" x1="0" y1="100" x2="900" y2="100" />
    <line id="p1-l2" class="line color1" x1="100" y1="0" x2="100" y2="1600" />
    <line id="p1-l3" class="line color1" x1="100" y1="1500" x2="900" y2="1500" />
    <line id="p1-l4" class="line color5" x1="850" y1="100" x2="850" y2="1500" />
  </svg>
  <OpeningPromptContent {handleLinkClick} />
</main>

<!-- STYLES /////////////////////////////////////////////// -->
<style>
  main {
    width: 100%;
    height: 100%;
  }
  #p1p :global(#p1-p1) {
    left: 13%;
    top: 8%;
    font-size: calc(var(--uarr-width)/15);
  }
  #p1p :global(#p1-d1) {
    left: 12%;
    top: 20%;
    width: 72%;
    height: 70%;
    font-size: calc(var(--uarr-width)/18);
  }
  #p1p :global(#p1-d1 > *) {
    position: absolute;
    padding-left: 3%;
  }
  #p1p :global(.prompt-option) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 1.5em;
    width: 100%;
    height: 17%;
    transform-origin: 100% 50%;
  }
  #p1p :global(#prompt-option-1) {
    top: 16%;
    border-top: calc(var(--uarr-width)/100) solid var(--color1);
  }
  #p1p :global(#prompt-option-2) {
    margin-top: calc(var(--uarr-width)/1000);
    top: 33%;
    border-bottom: calc(var(--uarr-width)/100) solid var(--color1);
  }
  #p1p :global(input[type="checkbox"]) {
    border: calc(var(--uarr-width)/100) solid var(--color1);
    border-radius: calc(var(--uarr-width)/50);
    width: 24%;
    height: 70%;
  }
  #p1p :global(#p1-d2) {
    top: 52%;
  }
  #p1p :global(#prompt-option-3) {
    top: 50%;
    width: 100%;
    height: 13%;
  }
  #p1p :global(input[type="range"]) {
    width: 80%;
    height: calc(var(--uarr-width)/7);
  }
  #p1p :global(input[type="range"]::-webkit-slider-runnable-track) {
    height: 30%;
    border-radius: calc(var(--uarr-width)/50);
    border: calc(var(--uarr-width)/100) solid var(--color1);
  }
  #p1p :global(input[type="range"]::-moz-range-track) {
    height: 30%;
    border-radius: calc(var(--uarr-width)/10);
    border: calc(var(--uarr-width)/100) solid var(--color1);
  }
  #p1p :global(input[type="range"]::-webkit-slider-thumb) {
    margin-top: -4.5%; 
    border: calc(var(--uarr-width)/100) solid var(--color1);
    border-radius: calc(var(--uarr-width)/10);
    height: 300%;
    width: 13%;    
  }
  #p1p :global(input[type="range"]::-moz-range-thumb) {
    margin-top: -4.5%; 
    border: calc(var(--uarr-width)/100) solid var(--color1);
    border-radius: calc(var(--uarr-width)/10);
    height: 40%;
    width: 10%;   
  }
  #p1p :global(#p1-p3) {
    top: 75%;
  }
  #p1p :global(#p1-link1) {
    top: 84.5%;
    left: 55.5%;
    font-size: calc(var(--uarr-width)/17);
    padding: 4%;
    border: calc(var(--uarr-width)/200) solid var(--color2-2);
  }
</style>