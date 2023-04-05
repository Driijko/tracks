<!-- SCRIPTS ////////////////////////////////////////////////// -->
<script>
  // IMPORTS ---------------------------------------------------
  import { gsap } from "gsap";
  import { onMount } from "svelte";
  import OpeningPromptContent from "./OpeningPromptContent.svelte";

  // ANIMATION ------------------------------------------------
  const tl = gsap.timeline({delay:1});

  onMount(()=> {
    tl.from("#l1", {duration: 1, ease:"linear", attr:{x2: 0}},0);
    tl.from("#l2", {duration: 1, ease:"linear", attr:{y2: 0}},0);
    tl.from("#l3", {duration: 1, ease:"power1.inOut", attr:{x2: 100}},0.85);
    tl.from("#l4", {duration: 1, ease:"power1.inOut", 
      attr:{y1: 800, y2: 800}},1.7);
    tl.from("#l5", {duration: 1, ease: "power1.inOut", attr: {x1:435, x2:435}}, 1.7);
    tl.from("#r1", {duration: 2, ease:"power1.inOut", attr:{x:900, width: 0}},0);
    tl.from("#r2", {duration: 2, ease:"power1.inOut", opacity:0},0);
    tl.from("#r3", {duration: 2, ease:"power1.inOut", attr:{x:900, width: 0}},0);
    tl.from("p", {duration: 1.5, ease:"power1.inOut", letterSpacing: "-0.5em"}, 1);
    tl.set("p", {transform: "rotateY(0deg)"}, 1)
    tl.from("p", {duration: 0.5, ease:"linear", transform: "rotateY(90deg)"}, 1);
    tl.set(".settings-option", {transform: "scaleX(1)"}, 1);
    tl.from(".settings-option", {duration: 1.5, transform: "scaleX(0)"}, 1);
    tl.set("#volume-adjust", {opacity: 0}, 0);
    tl.from("#volume-adjust", {duration: 1, opacity: 0}, 2.5);
    tl.from("a", {duration: 2, opacity: 0}, 3);
  });
</script>

<!-- MARKUP ////////////////////////////////////////// -->
<svg class="svg-background" viewBox="0 0 900 1600" >
  <rect id="r1" class="color1" x="750" y="100" width="150" height="1400" />
  <rect id="r2" class="color3" x="490" y="100" width="260" height="1400" />
  <rect id="r3" class="color1" x="100" y="500" width="651" height="640" />
  <line id="l1" class="line color1" x1="0" y1="100" x2="900" y2="100" />
  <line id="l2" class="line color1" x1="100" y1="0" x2="100" y2="1600" />
  <line id="l3" class="line color1" x1="100" y1="1500" x2="900" y2="1500" />
  <line id="l4" class="line color5" x1="850" y1="100" x2="850" y2="1500" />
  <line id="l5" class="line color4" x1="90" y1="1000" x2="830" y2="1000" />
</svg>
<OpeningPromptContent />

<!-- STYLES ///////////////////////////////////////////// -->
<style>
  @media screen and (orientation: portrait) {
  :global(main p:nth-of-type(1)) {
    width: 60%;
    left: 13%;
    top: 8%;
    font-size: calc(var(--uarr-width)/15);
  }
  :global(main p:nth-of-type(2)) {
    width: 70%;
    left: 13%;
    top: 20%;
    font-size: calc(var(--uarr-width)/18);
  }
  :global(main #settings) {
    width: 71.2%;
    left: 12.2%;
    top: 31%; 
    height: 40%;   
  }
  :global(main #settings > div:nth-of-type(1)),
  :global(main #settings > div:nth-of-type(2)) {
    height: 30%;
    position: absolute;
    width: 100%;
    z-index: 1;
    display: flex;
    background-color: var(--color4);
  }
  :global(main #settings > div:nth-of-type(1)) {
    border-top: calc(var(--uarr-width)/50) solid var(--color1);
    border-bottom: calc(var(--uarr-width)/100) solid var(--color1);
  }
  :global(main #settings > div:nth-of-type(2)) {
    top: 30%;
    border-bottom: calc(var(--uarr-width)/50) solid var(--color1);
    border-top: calc(var(--uarr-width)/100) solid var(--color1);
  }
  :global(main #settings > div:nth-of-type(1) label),
  :global(main #settings > div:nth-of-type(2) label) {
    width: 70%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: calc(var(--uarr-width)/16);
  }
  :global(main #settings > div > div) {
    width: 30%;
    padding: 5% 7%;
  }
  :global(main #settings > div > div > input[type="checkbox"]) {
    min-width: 30px;
    min-height: 30px;
    width: 100%;
    height: 100%;
    border-width: calc(var(--uarr-width)/100);
  }
  :global(main #settings > div:nth-of-type(3)) {
    width: 100%;
    height: 40%;
    position: absolute;
    top: 20%;
    z-index: 0;
    transition: top 1s ease-out;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: calc(var(--uarr-width)/25);
    gap: calc(var(--uarr-width)/20);
    background-color: var(--color4);
    border-bottom: calc(var(--uarr-width)/50) solid var(--color1);
  }
  :global(main #settings > div:nth-of-type(3).visible),
  :global(main #settings > div:nth-of-type(3):focus-within) {
    top: 60%;
  }
  :global(input[type="range"]) {
    width: 70%;
    height: 30%;
    min-height: 0;
  }
  :global(input[type="range"]::-webkit-slider-runnable-track) {
    height: 50%;
    width: 50%;
    border-radius: calc(var(--uarr-width)/50);
    border-width: calc(var(--uarr-width)/100);
  }
  :global(input[type="range"]::-webkit-slider-thumb) {
    margin-top: -4.5%; 
    border-width: calc(var(--uarr-width)/100);
    border-radius: calc(var(--uarr-width)/10);
    height: 320%;
    width: 13.5%;    
  }
  :global(input[type="range"]::-moz-range-track) {
    height: 30%;
    border-radius: calc(var(--uarr-width)/10);
    border-width: calc(var(--uarr-width)/100);
  }
  :global(input[type="range"]::-moz-range-thumb) {
    margin-top: -4.5%; 
    border-width: calc(var(--uarr-width)/100);
    border-radius: calc(var(--uarr-width)/10);
    height: 60%;
    width: 10%;   
  }
  :global(main p:nth-of-type(3)) {
    top: 72%;
    left: 13%;
    font-size: calc(var(--uarr-width)/20);
    width: 70%;
  }
  :global(a) {
    top: 84.5%;
    left: 55.5%;
    font-size: calc(var(--uarr-width)/17);
    padding: 4%;
    border-width: calc(var(--uarr-width)/200);
  }
  }
</style>