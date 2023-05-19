<!-- SCRIPTS /////////////////////////////////////////// -->
<script>
  // IMPORTS --------------------------------------
  import About3Content from "./About3Content.svelte";
</script>

<!-- MARKUP ////////////////////////////////////////////////// -->
  <div id="this" class="uarr2">
    <svg class="background" viewBox="0 0 1600 900">
      <rect x="0" y="0" width="1600" height="900" fill="hsl(150, 100%, 80%)" />
      <line x1="109" y1="0" x2="109" y2="527" />
      <line x1="1494" y1="0" x2="1494" y2="527" />
      <line x1="0" y1="527" x2="1600" y2="527" />
      <rect x="700" y="800" width="300" height="100" fill="hsl(40, 100%, 50%)" />
      <line x1="700" y1="0" x2="700" y2="900" />
      <line x1="1000" y1="0" x2="1000" y2="900" />
    </svg>
    <About3Content />
  </div>

<!-- STYLES ////////////////////////////////////////////// -->
<style>
svg {
  width: 100%;
  height: 100%;
}
#this :global(p) {
  height: calc(var(--uarr2-height)* 0.34);
  top: 25%;
  left: 7%;
  border-top-width: calc(var(--uarr2-width)/150);
  border-bottom-width: calc(var(--uarr2-width)/150);
  width: 86%;
}
</style>