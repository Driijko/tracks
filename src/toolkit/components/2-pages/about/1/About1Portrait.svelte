<!-- SCRIPTS //////////////////////////////////////// -->
<script>
  // IMPORTS ------------------------------------
  import { gsap } from "gsap";
  import { onMount } from "svelte";
  import About1Content from "./About1Content.svelte";

  // ANIMATION ----------------------------------
  onMount(()=> {
    const tl = gsap.timeline();
    tl.from("#svg7 .line1", {duration: 4, ease: "none", attr: {y2: 0}}, 0);
    tl.from("#svg7 .line2", {duration: 4, ease: "none", attr: {x1: 900}}, 0);
    tl.from("#id7 span", {duration: 3, ease: "none", opacity: 0, stagger: 1}, 0.5);
  });
</script>

<!-- MARKUP /////////////////////////////////////// -->
<div id="id7" class="uarr1-pad">
  <svg id="svg7" class="background" viewBox="0 0 900 1472">
    <rect x="0" y="0" width="900" height="1472" fill="hsl(150, 100%, 80%)" />
    <line class="line1" x1="50" y1="0" x2="50" y2="1472"  />
    <line class="line1" x1="800" y1="0" x2="800" y2="1472"  />
    <line class="line1" x1="850" y1="0" x2="850" y2="1472"  />
    <line class="line2" x1="0" y1="20" x2="900" y2="20"  />
    <line class="line2" x1="0" y1="120" x2="900" y2="120"  />
    <line class="line2" x1="0" y1="220" x2="900" y2="220"  />
    <line class="line2" x1="0" y1="1445" x2="900" y2="1445"  />
  </svg>
  <About1Content />
</div>

<!-- STYLES //////////////////////////////////// -->
<style>
line {
  stroke-width: 10;
  stroke: hsl(40, 100%, 50%);
}
#id7 :global(header) {
  position: absolute;
  top: 30%;
  width: 50%;
  left: 30%;
  text-align: right;
  line-height: 1.5;
}
#id7 :global(h2) {
  font-size: calc(var(--uarr1-width)/10);
}
#id7 :global(header svg) {
  position: absolute;
  left: 75%;
  width: calc(var(--uarr1-width)/10);
}
</style>