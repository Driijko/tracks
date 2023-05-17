<!-- SCRIPTS /////////////////////////////////////////// -->
<script>
  // IMPORTS --------------------------------------
  import About7Content from "./About8Content.svelte";
</script>

<!-- MARKUP ////////////////////////////////////////////////// -->
<div id="this" class="uarr-container">
  <div class="uarr2">
    <svg class="background" viewBox="0 0 1600 900">
      <rect x="0" y="0" width="1600" height="900" fill="hsl(150, 100%, 80%)" />
      <rect x="0" y="850" width="570" height="50" fill="hsl(40, 100%, 50%)" />
      <line x1="573" y1="0" x2="573" y2="900" />
      <line x1="900" y1="0" x2="900" y2="272" />
      <line x1="1100" y1="0" x2="1100" y2="250" />
      <line x1="1100" y1="220" x2="1600" y2="220" />
      <line x1="1200" y1="450" x2="1600" y2="450" />
      <line x1="1000" y1="397" x2="1000" y2="900" />
      <line x1="1200" y1="415" x2="1200" y2="900" />
      <line x1="900" y1="250" x2="1600" y2="250" />
      <line x1="1000" y1="420" x2="1600" y2="420" />
    </svg>
    <About7Content />
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
#this :global(p) {
  height: calc(var(--uarr2-height)* 0.14);
  padding: calc(var(--uarr1-width) * 0.05);
  position: absolute;
  line-height: 2;
  top: 30%;
  left: 36%;
  background-color: hsl(150, 100%, 90%);
  font-size: calc(var(--uarr2-width)/70);
  border-top-width: calc(var(--uarr2-width)/150);
  border-bottom-width: calc(var(--uarr2-width)/150);
  border-top-style: solid;
  border-bottom-style: solid;
  border-top-color: hsl(40, 100%, 50%);
  border-bottom-color: hsl(40, 100%, 50%);
}
</style>