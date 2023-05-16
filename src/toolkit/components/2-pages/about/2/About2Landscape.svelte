<!-- SCRIPTS /////////////////////////////////////////// -->
<script>
  // IMPORTS --------------------------------------
  import About2Content from "./About2Content.svelte";
</script>

<!-- MARKUP ////////////////////////////////////////////////// -->
<div id="id9" class="uarr-container">
  <div class="uarr2">
    <svg class="background" viewBox="0 0 1600 900">
      <rect x="0" y="0" width="1600" height="900" fill="hsl(150, 100%, 80%)" />
      <line x1="0" y1="800" x2="1600" y2="800" />
      <line x1="200" y1="0" x2="200" y2="900" />
      <line x1="1200" y1="130" x2="1600" y2="130" />
      <rect x="0" y="230" width="1600" height="275" fill="hsl(150, 100%, 90%)" />
      <rect x="1200" y="230" width="400" height="275" fill="hsl(40, 100%, 50%)" />
      <line x1="1200" y1="0" x2="1200" y2="800" />
    </svg>
    <About2Content />
  </div>
</div>

<!-- STYLES ////////////////////////////////////////////// -->
<style>
svg {
  width: 100%;
  height: 100%;
}
.uarr-container {
  background-color: hsl(40, 100%, 70%);
}
line {
  stroke-width: 10;
  stroke: hsl(40, 100%, 50%);
}
#id9 :global(p) {
  /* background-color: hsl(150, 100%, 90%); */
  height: calc(var(--uarr2-height)* 0.32);
  display: flex;
  align-items: center;
  padding: calc(var(--uarr1-width) * 0.05);
  position: absolute;
  line-height: 1.5;
  top: 25%;
  font-size: calc(var(--uarr2-width)/70);
  border-top-width: calc(var(--uarr2-width)/150);
  border-bottom-width: calc(var(--uarr2-width)/150);
  border-top-style: solid;
  border-bottom-style: solid;
  border-top-color: hsl(40, 100%, 50%);
  border-bottom-color: hsl(40, 100%, 50%);
}
</style>