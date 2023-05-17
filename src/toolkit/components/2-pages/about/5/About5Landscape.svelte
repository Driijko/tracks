<!-- SCRIPTS /////////////////////////////////////////// -->
<script>
  // IMPORTS --------------------------------------
  import About5Content from "./About5Content.svelte";
</script>

<!-- MARKUP ////////////////////////////////////////////////// -->
<div id="id16" class="uarr-container">
  <div class="uarr2">
    <svg class="background" viewBox="0 0 1600 900">
      <rect x="0" y="0" width="1600" height="900" fill="hsl(150, 100%, 80%)" />
      <rect x="1200" y="390" width="400" height="80" fill="hsl(40, 100%, 50%)" />
      <line x1="1132" y1="0" x2="1132" y2="900" />
      <line x1="1132" y1="150" x2="1600" y2="150" />
      <line x1="1132" y1="680" x2="1600" y2="680" />
      <line x1="1200" y1="150" x2="1200" y2="680" />
    </svg>
    <About5Content />
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
#id16 :global(p) {
  height: calc(var(--uarr2-height)* 0.34);
  padding: calc(var(--uarr1-width) * 0.05);
  position: absolute;
  line-height: 2;
  top: 30%;
  left: 0%;
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