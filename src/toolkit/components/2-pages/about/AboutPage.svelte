<!-- SCRIPTS ////////////////////////////////////// -->
<script>
  // IMPORTS --------------------------------
  import { setPageExit } from "../../../scripts/currentPageStore";
  import About1 from "./1/About1.svelte";
  import About2 from "./2/About2.svelte";
  import About3 from "./3/About3.svelte";
  import About4 from "./4/About4.svelte";
  import About5 from "./5/About5.svelte";
  import About6 from "./6/About6.svelte";
  import About7 from "./7/About7.svelte";
  import About8 from "./8/About8.svelte";
  import About9 from "./9/About9.svelte";
  import About10 from "./10/About10.svelte";
  import About11 from "./11/About11.svelte";
  import SnapScroll from "../../4-layouts/partial/SnapScroll.svelte";

  // PAGE EXIT ---------------------------------------
  let fade = false;
  function pageExit() {
    fade = true;
  }
  setPageExit(pageExit,2000);
</script>

<!-- MARKUP /////////////////////////////////// -->
<div id="this" class:fade >
  <div class="background"></div>
  <SnapScroll axis="vertical" handleScroll={null}>
    <svelte:fragment slot="content">
      <About1 />
      <About2 />
      <About3 />
      <About4 />
      <About5 />
      <About6 />
      <About7 />
      <About8 />
      <About9 />
      <About10 />
      <About11 />
    </svelte:fragment>
  </SnapScroll>
</div>
<!-- STYLES /////////////////////////////////// -->
<style>
/* PAGE ENTRANCE/EXIT, BACKGROUND, LAYOUT --------------------------- */
@keyframes fade-in {from{opacity:0;}to{opacity:1;}}
@keyframes fade-out {from{opacity:1;}to{opacity:0;}}
@keyframes shift {
  0% {background-position: 0% 0%; opacity: 0;}
  10% {background-position: 10% 10%; opacity: 1;}
  90% {background-position: 90% 90%; opacity: 1;}
  100% {background-position: 100% 100%; opacity: 0;}
}
#this {
  transition-property: opacity;
  transition-timing-function: ease-out;
  transition-duration: 2s;
  background-color: hsl(40, 100%, 70%);
  width: 100vw;
  height: var(--viewport-height);
  display: flex;
  justify-content: center;
  opacity: 0;
  animation: fade-in 2s ease-out forwards;
}
#this.fade {
  animation: fade-out 2s ease-out forwards;
}
/* PAGE BACKGROUND ------------------------- */
.background {
  background-image: url("./images/pic5.webp");
  background-size: 150%;
  opacity: 0;
  animation: shift 60s linear infinite;
  /* filter: brightness(0.9) contrast(0.6); */
}
/* PAGE STYLES ------------------------------- */
#this :global(.uarr-container) {
  background-color: hsl(40, 100%, 70%);
}
#this :global(line) {
  stroke-width: 10;
  stroke: hsl(40, 100%, 50%);
}
#this :global(p) {
  position: absolute;
  background-color: hsl(150, 100%, 90%);
  border-color:hsl(40, 100%, 50%);
  border-style: solid;
}
#this :global(h3) {
  font-family: "Tenor Sans", sans-serif;
  font-weight: 400;
  background-color: hsl(150, 100%, 50%);
  position: absolute;
}
/* PORTRAIT --------------------------------------- */
@media screen and (orientation: portrait) {
  #this :global(.snap-scroll) {
    width: var(--uarr1-width);
    height: calc(var(--uarr1-height) * 0.92);
  }
  #this :global(p) {
    padding: calc(var(--uarr1-width) * 0.05);
    line-height: 1.3;
    font-size: calc(var(--uarr1-width)/18);
  }
}
/* LANDSCAPE ----------------------------------------- */
@media screen and (orientation: landscape) {
  #this {
    align-items: center;
  }
  #this :global(.snap-scroll) {
    width: var(--uarr2-width);
    height: var(--uarr2-height);
    transform-origin: 50% 50%;
  }
  #this :global(p) {
    line-height: 2;
    font-size: calc(var(--uarr2-width)/70);
    padding: calc(var(--uarr2-height) * 0.03) calc(var(--uarr2-width) * 0.01);
  }
}
@media screen and (orientation:landscape) and (min-width: 1920px) {
  #this :global(.snap-scroll) {
    transform: scale(0.75);
  }
}
@media screen and (orientation:landscape) and (min-width: 2560px) {
  #this :global(.snap-scroll) {
    transform: scale(0.7);
  }
}
/* HOVER/FOCUS TRANSITIONS ------------------------------------- */
@media (hover:hover) {
  #this :global(p a:hover), #this :global(p a:focus-visible) {
    background-color: black;
    color: white;
    text-decoration: none;
  }
  #this :global(.technologies-section a) {
    transition-property: transform;
    transition-duration: 0.3s;
    transition-timing-function: ease-out;
  }
  #this :global(.technologies-section a:hover), 
  #this :global(.technologies-section a:focus-visible) {
    transform: scale(1.4);
  }
  #this :global(.fonts-section ul a) {
    transition-property: background-color, color;
    transition-duration: 0.3s;
    transition-timing-function: ease-out;
  }
  #this :global(.fonts-section ul a:hover), 
  #this :global(.fonts-section ul a:focus-visible) {
    color: white;
    background-color: hsl(40, 100%, 50%);
  }
}
@media (hover:hover) and (orientation: portrait) {
  #this :global(.technologies-section a:hover), 
  #this :global(.technologies-section a:focus-visible) {
    border-bottom-width: calc(var(--uarr1-width)/100);
    background-color: hsl(150, 100%, 50%);
  }
}
</style>