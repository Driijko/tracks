<!-- SCRIPTS /////////////////////////////////////////// -->
<script>
  // IMPORTS --------------------------------------
  import About8Content from "./About8Content.svelte";
</script>

<!-- MARKUP ////////////////////////////////////////////////// -->
<div id="this" class="uarr-container">
  <div class="uarr2">
    <svg class="background" viewBox="0 0 1600 900">
      <rect x="0" y="0" width="1600" height="900" fill="hsl(150, 100%, 80%)" />
      <rect x="1400" y="500" width="200" height="210" fill="hsl(40, 100%, 50%)" />
      <line x1="837" y1="0" x2="837" y2="500" />
      <line x1="1400" y1="500" x2="1400" y2="900" />
      <line x1="0" y1="500" x2="1600" y2="500" />
      <line x1="0" y1="710" x2="1600" y2="710" />
    </svg>
    <About8Content />
  </div>
</div>

<!-- STYLES ////////////////////////////////////////////// -->
<style>
svg {
  width: 100%;
  height: 100%;
}
#this :global(p) {
  height: calc(var(--uarr2-height)* 0.34);
  top: 0%;
  left: 0%;
  border-bottom-width: calc(var(--uarr2-width)/150);
  width: 51.9%;
}
</style>