<!-- SCRIPTS //////////////////////////////// -->
<script>
  // IMPORTS -------------------------------------------------------
  import { gsap } from "gsap";
  import { onMount } from "svelte";
  import { setPageExit } from "../../../scripts/currentPageStore";
  import OpeningPromptContent from "./OpeningPromptContent.svelte";

  // ANIMATION -------------------------------------------------
  onMount(()=> {
    function pageEntrance() {
      const tl = gsap.timeline();
      tl.from("#a1 .line1", {
        duration: 3, attr: {y2: 0}, stroke: "hsl(150, 100%, 30%)"
      }, 0);
      tl.from("#a1 .line2", {
        duration: 2, attr: {x2: 0}, stroke: "hsl(150, 100%, 30%)"
      }, 0.3);
      tl.from("#a1 .line3", {
        duration: 3.5, attr: {x1: 900}, stroke: "hsl(150, 100%, 30%)"
      }, 0);
      tl.from("#a1 .line4", {
        duration: 4, attr: {x1: 800}, stroke: "hsl(150, 100%, 30%)"
      }, 1);
      tl.from("#a1 .line5", {
        duration: 2, attr: {y2: 100}, stroke: "hsl(150, 100%, 30%)"
      }, 0.1);
      tl.from("#a1 rect", {
        duration: 1.5, attr: {x: 900}, stagger: 0.3,
      }, 0);
      tl.from("#a1 p:nth-of-type(1)", {
        duration: 2,
        opacity: 0,
      }, 1);
      tl.from("#a1 p:nth-of-type(2)", {
        duration: 2,
        opacity: 0,
      }, 2.5);
      tl.from("#a1 .site-settings", {
        duration: 2,
        opacity: 0,
      },3.5);
      tl.from("#a1 p:nth-of-type(3)", {
        duration: 2,
        opacity: 0,
      }, 4.5);
      tl.from("#a1 a", {
        duration: 2,
        opacity: 0,
      }, 5.5);
    };

    pageEntrance();

    function pageExit() {
      const tl = gsap.timeline();
      tl.to("#a1 .opening-prompt-content", {
        duration: 1,
        opacity: 0,
      },0);
      tl.to("#a1 line", {
        duration: 2.2,
        strokeWidth: 0,
        ease: "sine.out"
      },0);
      tl.to("#a1 rect", {
        duration: 1,
        attr: {x: 900}
      },0);
    };

    setPageExit(pageExit,2200);

  });
</script>

<!-- MARKUP //////////////////////////////////// -->
<div id="a1" class="uarr-container">
  <div id="this" class="uarr1">
    <svg class="background" viewBox="0 0 900 1600" >
      <rect x="100" y="100" 
        width="800" height="1400" fill="hsl(150, 100%, 80%)" />
      <rect x="0" y="100" 
        width="100" height="1400" fill="hsl(40, 100%, 50%)" />
      <rect x="100" y="100" 
        width="700" height="190" fill="hsl(150, 100%, 60%)" />
      <rect x="100" y="911" 
        width="700" height="275" fill="hsl(150, 100%, 60%)" />
      <rect x="800" y="100" 
        width="100" height="1400" fill="hsl(150, 100%, 40%)" />

      <line class="line1" x1="100" y1="0" x2="100" y2="1600" />
      <line class="line2" x1="0" y1="1500" x2="900" y2="1500" />
      <line class="line3" x1="0" y1="100" x2="900" y2="100" />
      <line class="line4" x1="100" y1="1100" x2="800" y2="1100" />
      <line class="line5" x1="800" y1="100" x2="800" y2="1500" />
    </svg>
    <OpeningPromptContent />
  </div>
</div>


<!-- STYLES ///////////////////////////////// -->
<style>
@media screen and (orientation: portrait) {
.uarr-container {
  background-color: var(--color1-1);
}
.uarr1 {
  background-color: var(--color1);
}
svg {
  width: 100%;
  height: 100%;
}
line {
  stroke: var(--color5-3);
  stroke-width: 20;
}
#this :global(.opening-prompt-content) {
  font-size: calc(var(--uarr-width)/16);
  line-height: 1.5;
  width: 75.7%;
  height: 86%;
  left: 12%;
  top: 7%;
}
#this :global(.opening-prompt-content > *) {
  position: absolute;
}
#this :global(p:nth-of-type(1)) {
  left: 3%;
}
#this :global(p:nth-of-type(2)) {
  left: 3%;
  top: 13.5%;
  width: 80%;
  font-size: calc(var(--uarr1-width)/19.5);
}
#this :global(.site-settings) {
  top: 30%;
  height: 50%;
  width: 100%;
}
#this :global(.site-settings-option) {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2%;
  height: 25%;
  background-color: var(--color5-1);
  margin-bottom: 3%;
}
#this :global(input[type="checkbox"]) {
  border-radius: calc(var(--uarr1-width)/40);
  border: calc(var(--uarr-width)/100) solid black;
  width: calc(var(--uarr-width)/7);
  height: calc(var(--uarr-width)/7);
  background-color: var(--color5-2);
  transition-property: background-color;
  transition-duration: 0.2s;
  transition-timing-function: ease-in;
}
#this :global(input[type="checkbox"]:checked) {
  background-color: hsl(40, 100%, 50%);
}
#this :global(.volume-adjust) {
  height: 40%;
  font-size: calc(var(--uarr-width)/19);
  line-height: 1;
  text-align: center;
  background-color: var(--color5-1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
#this :global(input[type="range"]) {
  width: 70%;
  height: calc(var(--uarr-width)/9);
}
#this :global(input[type="range"]::-webkit-slider-runnable-track) {
  height: calc(var(--uarr-width)/25);
  width: calc(var(--uarr-width)/6);
  border-radius: calc(var(--uarr-width)/10);
  border-width: calc(var(--uarr-width)/100);
  background-color: var(--color5);
}
#this :global(input[type="range"]::-webkit-slider-thumb) {
  margin-top: calc(var(--uarr-width)/-45); 
  border-width: calc(var(--uarr-width)/100);
  border-radius: calc(var(--uarr-width)/10);
  height: calc(var(--uarr-width)/16);
  width: calc(var(--uarr-width)/16);   
  background-color: var(--color1); 
}
#this :global(input[type="range"]::-moz-range-track) {
  height: calc(var(--uarr-width)/45);
  border-radius: calc(var(--uarr-width)/10);
  border-width: calc(var(--uarr-width)/100);
}
#this :global(input[type="range"]::-moz-range-thumb) {
  margin-top: -4.5%; 
  border-width: calc(var(--uarr-width)/100);
  border-radius: calc(var(--uarr-width)/10);
  height: calc(var(--uarr-width)/21);
  width: calc(var(--uarr-width)/21);   
}
#this :global(p:nth-of-type(3)) {
  top: 78%;
  left: 3%;
  font-size: calc(var(--uarr1-width)/19.5);
}
#this :global(a) {
  border: calc(var(--uarr-width)/100) solid black;
  width: 40%;
  height: 9%;
  position: relative;
  left: 58%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(var(--uarr-width)/15);
  top: 90%;
  background-color: hsl(40, 100%, 60%);
  border-radius: calc(var(--uarr1-width)/100);
}
}
@media screen and (orientation: portrait) and (hover:hover) {
  #this :global(a) {
    transition-property: transform, box-shadow;
    transition-duration: 0.5s;
    transition-timing-function: ease-in;
  }
  #this :global(a:hover), #this :global(a:focus-visible) {
    transform: scale(1.1) translate(calc(var(--uarr1-width)/-100));
    box-shadow: 0 0 calc(var(--uarr1-width)/50) var(--color2);
  }
}
</style>