<!-- SCRIPTS /////////////////////////////////////// -->
<script>
  // IMPORTS ------------------------------------------
  import { gsap } from "gsap";
  import { onMount } from "svelte";
  import ContactContent from "./ContactContent.svelte";
  import { setPageExit } from "../../../scripts/currentPageStore";

  // ANIMATION ----------------------------------------
  const tl = gsap.timeline();

  onMount(()=> {
    function pageEntrance() {
      tl.from("#svg9 rect", {duration: 4, attr:{height:0}},0);
      tl.from("#svg9 .line1", {duration: 0.4, stagger: 0.5, attr:{x2:0}},0);
      tl.from("#svg9 .line2", {
        duration: 2,
        stagger: {from: "end", amount: 3},
        attr: {x1:900}
      },0);
      tl.from("#id9 section", {duration:2, width:0},3);
    }

    pageEntrance();

    function pageExit() {
      tl.timeScale(2).reverse();
    }

    setPageExit(pageExit,3000);

    return ()=> tl.kill();
  });
</script>

<!-- MARKUP ///////////////////////////////////////// -->
<div id="id9" class="uarr1-pad">
  <svg id="svg9" class="background" viewBox="0 0 900 1472" >
    <rect x="0" y="0" width="900" height="1472" fill="hsl(40, 100%, 60%)" />
    <line class="line1" x1="0" y1="125" x2="850" y2="125" />
    <line class="line2" x1="850" y1="85" x2="900" y2="85" />
    <line class="line2" x1="850" y1="125" x2="900" y2="125" />
    <line class="line2" x1="850" y1="165" x2="900" y2="165" />
    <line class="line1" x1="0" y1="325" x2="750" y2="325" />
    <line class="line2" x1="750" y1="285" x2="900" y2="285" />
    <line class="line2" x1="750" y1="325" x2="900" y2="325" />
    <line class="line2" x1="750" y1="365" x2="900" y2="365" />
    <line class="line1" x1="0" y1="525" x2="650" y2="525" />
    <line class="line2" x1="650" y1="485" x2="900" y2="485" />
    <line class="line2" x1="650" y1="525" x2="900" y2="525" />
    <line class="line2" x1="650" y1="565" x2="900" y2="565" />
    <line class="line1" x1="0" y1="725" x2="550" y2="725" />
    <line class="line2" x1="550" y1="685" x2="900" y2="685" />
    <line class="line2" x1="550" y1="725" x2="900" y2="725" />
    <line class="line2" x1="550" y1="765" x2="900" y2="765" />
    <line class="line1" x1="0" y1="925" x2="450" y2="925" />
    <line class="line2" x1="450" y1="885" x2="900" y2="885" />
    <line class="line2" x1="450" y1="925" x2="900" y2="925" />
    <line class="line2" x1="450" y1="965" x2="900" y2="965" />
    <line class="line1" x1="0" y1="1125" x2="350" y2="1125" />
    <line class="line2" x1="350" y1="1085" x2="900" y2="1085" />
    <line class="line2" x1="350" y1="1125" x2="900" y2="1125" />
    <line class="line2" x1="350" y1="1165" x2="900" y2="1165" />
    <line class="line1" x1="0" y1="1325" x2="250" y2="1325" />
    <line class="line2" x1="250" y1="1285" x2="900" y2="1285" />
    <line class="line2" x1="250" y1="1325" x2="900" y2="1325" />
    <line class="line2" x1="250" y1="1365" x2="900" y2="1365" />
  </svg>
  <ContactContent />
</div>

<!-- STYLES ////////////////////////////////////////////// -->
<style>
.line1 {
  stroke-width: 100;
  stroke: hsl(150, 100%, 50%);
}
.line2 {
  stroke-width: 20;
  stroke: hsl(40, 100%, 80%);
}
#id9 :global(section) {
  top: 18%;
  background-color: hsl(40, 100%, 80%);
  position: absolute;
  height: calc(var(--uarr1-height) * 0.57);
  overflow:hidden;
}
#id9 :global(address) {
  line-height: 1.5;
  width: calc(var(--uarr1-width));
  height: calc(var(--uarr1-height) * 0.57);
  padding-top: calc(var(--uarr1-height) * 0.03);
  padding-left: calc(var(--uarr1-width) * 0.025);
  font-size: calc(var(--uarr1-width)/17);
}
</style>