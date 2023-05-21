<!-- SCRIPTS //////////////////////////////////////// -->
<script>
  // IMPORTS ------------------------------------
  import { gsap } from "gsap";
  import { onMount } from "svelte";
  import About1Content from "./About1Content.svelte";

  // ANIMATION ------------------------------------
  onMount(()=> {
    const tl = gsap.timeline();
    tl.from("#svg8 .line2", {duration: 8, ease: "power1.out", attr:{y2: 0}},0);
    tl.from("#svg8 .line3", {duration: 8, ease: "power1.out", attr:{x1: 1600}},0);
    tl.from("#svg8 .line4", {duration: 8, ease: "power1.out", attr:{x2: 0}},0);
    tl.from("#svg8 .line5", {duration: 8, ease: "power1.out", attr:{y1: 900}},0);
    tl.from("#svg8 .line6", {duration: 4, ease: "power1.out", attr:{x2: 40}},2);
    tl.from("#svg8 .line7", {duration: 7, ease: "power1.out", attr:{y1: 832}},0.2);
    tl.from("#svg8 .line8", {duration: 6, ease: "power1.out", attr:{x1: 600}},1);
    tl.from("#svg8 .line9", {duration: 3, ease: "power1.out", attr:{y2: 700}},4);
    tl.from("#svg8 .line10", {duration: 2, ease: "power1.out", attr:{y2: 700}},6);
    tl.from("#svg8 .line11", {duration: 2, ease: "power1.out", attr:{x1: 232}},6);
    tl.from("#id8 span", {duration: 2, stagger: 1, opacity: 0}, 3);
    tl.from("#id8 .rect1",{duration: 4, attr:{width:0}},4);
  });
</script>

<!-- MARKUP /////////////////////////////////////// -->
<div id="id8" class="uarr2">
  <svg id="svg8" class="background"  viewBox="0 0 1600 900">
    <rect x="0" y="0" width="1600" height="900" fill="hsla(150, 100%, 70%, 0.3)" />
    <rect class="rect1" x="100" y="700" width="130" height="130" fill="hsl(150, 100%, 50%)" />
    <line class="line2" x1="1527" y1="0" x2="1527" y2="900" />
    <line class="line3" x1="0" y1="68" x2="1600" y2="68" />
    <line class="line4" x1="0" y1="832" x2="1600" y2="832" />
    <line class="line2" x1="40" y1="0" x2="40" y2="900" />
    <line class="line5" x1="600" y1="0" x2="600" y2="900" />
    <line class="line6" x1="40" y1="400" x2="600" y2="400" />
    <line class="line7" x1="100" y1="400" x2="100" y2="832" />
    <line class="line8" x1="100" y1="700" x2="600" y2="700" />
    <line class="line9" x1="232" y1="700" x2="232" y2="832" />
    <line class="line1 line10" x1="120" y1="700" x2="120" y2="832" />
    <line class="line1 line10" x1="135" y1="700" x2="135" y2="832" />
    <line class="line1 line11" x1="100" y1="800" x2="232" y2="800" />
    <line class="line1 line11" x1="100" y1="815" x2="232" y2="815" />
  </svg>
  <About1Content />
</div>

<!-- STYLES //////////////////////////////////// -->
<style>
svg {
  width: 100%;
  height: 100%;
}
.line1 {
  stroke-width: 5 !important;
}
#id8 :global(header) {
  position: absolute;
  width: 20%;
  height: 40%;
  left: 73%;
  top: 30%;
}
#id8 :global(h2) {
  font-size: calc(var(--uarr2-width)/30);
  text-align: right;
  line-height: 1.5;
}
#id8 :global(header svg) {
  width: calc(var(--uarr2-width)/25);
  position: absolute;
  left: 73%;
}
</style>