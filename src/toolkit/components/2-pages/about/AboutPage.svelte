<!-- SCRIPTS ////////////////////////////////////// -->
<script>
  import viewportOrientationStore 
  from "../../../scripts/viewport/viewportOrientationStore";
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
</script>

<!-- MARKUP /////////////////////////////////// -->
<div id="this">
  <SnapScroll axis="vertical" handleScroll={null}>
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
  </SnapScroll>
</div>
<!-- STYLES /////////////////////////////////// -->
<style>
#this :global(.uarr-container) {
  background-color: hsl(40, 100%, 70%);
}
#this :global(line) {
  stroke-width: 10;
  stroke: hsl(40, 100%, 50%);
}
#this :global(p) {
  position: absolute;
  padding: calc(var(--uarr1-width) * 0.05);
  background-color: hsl(150, 100%, 90%);
  border-color:hsl(40, 100%, 50%);
  border-style: solid;
}
@media screen and (orientation: portrait) {
  #this :global(p) {
    line-height: 1.3;
    font-size: calc(var(--uarr1-width)/18);
  }
}
@media screen and (orientation: landscape) {
  #this :global(p) {
    line-height: 2;
    font-size: calc(var(--uarr2-width)/70);
  }
}
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
  #this :global(.fonts-section a) {
    transition-property: background-color, color;
    transition-duration: 0.3s;
    transition-timing-function: ease-out;
  }
  #this :global(.fonts-section a:hover), 
  #this :global(.fonts-section a:focus-visible) {
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