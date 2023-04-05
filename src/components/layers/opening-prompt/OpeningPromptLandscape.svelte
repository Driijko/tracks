<!-- SCRIPTS //////////////////////////////////////////////// -->
<script>
  // IMPORTS --------------------------------------------
  import { gsap } from "gsap";
  import { onMount } from "svelte";
  import OpeningPromptContent from "./OpeningPromptContent.svelte";

  // ANIMATION -------------------------------------------
  const tl = gsap.timeline({delay:1});

  onMount(()=> {
    tl.from("#l1", {duration: 2, ease:"power1.inOut", attr:{x2: 0}},0);
    tl.from("#l2", {duration: 2, ease:"power1.inOut", attr:{x1: 1600}},0);
    tl.from("#l3", {duration: 1, ease:"power1.inOut", attr:{y2: 0}},0);
    tl.from("#l4", {duration: 1, ease:"power1.inOut", 
      attr:{y1: 900}},0);
    tl.from("#l5", {duration: 1, ease:"power1.inOut", 
    attr:{x1: 1600}},3);
    tl.from("#l6", {duration: 1, ease:"power1.inOut", 
    attr:{y2: 0}},2.5);
    tl.from("#l7", {duration: 1, ease:"power1.inOut", 
    attr:{x2: 0}},3);
    tl.from("#l8", {duration: 1, ease:"power1.inOut", 
    attr:{y1: 900}},2.5);
    tl.from("#r1", {duration: 3, ease:"power1.out", attr:{x:1600, width: 0}},1);
    tl.from("#r2", {duration: 3, ease:"power1.out", attr:{width: 0}},1);
    tl.from("#r3", {duration: 2, ease:"power1.out", attr:{y: 900, height: 0}},1);
    tl.from(["#r4", "#r5"], {duration: 2, ease: "power1.inOut", opacity: 0}, 4);
    tl.from("p", {duration: 3, ease:"power1.inOut", letterSpacing: "-0.5em", stagger: 1}, 1);
    tl.set("p", {transform: "rotateY(0deg)", stagger: 1}, 1)
    tl.from("p", {duration: 1, ease:"linear", transform: "rotateY(90deg)", stagger: 1}, 1);
    tl.set(".settings-option", {transform: "scaleX(1)"}, 2);
    tl.from(".settings-option", {duration: 4, transform: "scaleX(0)", opacity: 0, ease: "power1.out"}, 2);
    tl.set("#volume-adjust", {opacity: 0}, 0);
    tl.from("#volume-adjust", {duration: 1, opacity: 0}, 5);
    tl.from("a", {duration: 2, opacity: 0}, 6);
  });
</script>

<!-- MARKUP //////////////////////////////////////////// -->
<svg class="svg-background" viewBox="0 0 1600 900" >
  <rect id="r1" class="color1" x="1000" y="0" width="600" height="530" />
  <rect id="r2" class="color1" x="0" y="450" width="600" height="480" />
  <rect id="r3" class="color1" x="0" y="200" width="150" height="700" />
  <rect id="r4" class="color3" x="1410" y="60" width="130" height="200" />
  <rect id="r5" class="color3" x="60" y="640" width="130" height="200" />
  <line id="l1" class="line color1" x1="0" y1="200" x2="1600" y2="200" />
  <line id="l2" class="line color1" x1="0" y1="700" x2="1600" y2="700" />
  <line id="l3" class="line color1" x1="600" y1="0" x2="600" y2="900" />
  <line id="l4" class="line color1" x1="1000" y1="0" x2="1000" y2="900" />
  <line id="l5" class="small-line color5" x1="1000" y1="30" x2="1600" y2="30" />
  <line id="l6" class="small-line color5" x1="1570" y1="0" x2="1570" y2="520" />
  <line id="l7" class="small-line color5" x1="0" y1="870" x2="600" y2="870" />
  <line id="l8" class="small-line color5" x1="30" y1="200" x2="30" y2="900" />
</svg>
<OpeningPromptContent />

<!-- STYLES ////////////////////////////////////////////// -->
<style>
@media screen and (orientation: landscape) {
  :global(main p:nth-of-type(1)) {
    font-size: calc(var(--uarr-width)/43);
    left: 1.5%;
    top: 8.5%;
  }
  :global(main p:nth-of-type(2)) {
    font-size: calc(var(--uarr-width)/50);
    left: 10%;
    top: 26%;
    width: 24%;
    line-height: 2;
  }
  :global(#settings) {
    top: 23%;
    left: 38%;
    width: 24%;
    height: 77%;
  }
  :global(#settings > div) {
    position: absolute;
    width: 100%;
    display: flex;
    background-color: var(--color3);
  }
  :global(#settings > div:nth-of-type(1)), :global(#settings > div:nth-of-type(2)) {
    height: 35%;
    z-index: 1;
  }
  :global(#settings > div:nth-of-type(2)) {
    top: 35%;
  }
  :global(#settings > div:nth-of-type(1) label), 
  :global(#settings > div:nth-of-type(2) label) {
    width: 70%;
    display: flex;
    align-items: center;
    font-size: calc(var(--uarr-width)/47);
    padding-left: 5%;
  }
  :global(input[type="checkbox"]) {
    border-width: calc(var(--uarr-width)/200);
  }
  :global(#settings > div > div) {
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  :global(#settings > div:nth-of-type(3)) {
    z-index: 0;
    height: 27.4%;
    top: 43%;
    flex-direction: column;
    transition: top 1s ease-out;
    justify-content: center;
    align-items: center;
    gap: calc(var(--uarr-width)/50);
  }
  :global(#settings > div:nth-of-type(3).visible),
  :global(main #settings > div:nth-of-type(3):focus-within) {
    top: 72.5%;
  }
  :global(#settings > div:nth-of-type(3) label) {
    width: 60%;
    font-size: calc(var(--uarr-width)/60);
  }
  :global(input[type="range"]) {
    width: 70%;
    height: 30%;
  }
  :global(input[type="range"]::-webkit-slider-runnable-track) {
    height: 50%;
    width: 50%;
    border-radius: calc(var(--uarr-width)/50);
    border-width: calc(var(--uarr-width)/200);
  }
  :global(input[type="range"]::-webkit-slider-thumb) {
    margin-top: -5.4%; 
    border-width: calc(var(--uarr-width)/200);
    border-radius: calc(var(--uarr-width)/10);
    height: 320%;
    width: 16.5%;    
  }
  :global(input[type="range"]::-moz-range-track) {
    height: 30%;
    border-radius: calc(var(--uarr-width)/10);
    border-width: calc(var(--uarr-width)/200);
  }
  :global(input[type="range"]::-moz-range-thumb) {
    margin-top: -4.5%; 
    border-width: calc(var(--uarr-width)/200);
    border-radius: calc(var(--uarr-width)/10);
    height: 60%;
    width: 12.5%;   
  }
  :global(main p:nth-of-type(3)) {
    width: 30%;
    left: 64%;
    top: 62%;
    font-size: calc(var(--uarr-width)/47);
    line-height: 1.5;
  }
  :global(a) {
    top: 86%;
    left: 88%;
    font-size: calc(var(--uarr-width)/50);
    padding: 2%;
    border-width: calc(var(--uarr-width)/300);
  }
}
</style>
