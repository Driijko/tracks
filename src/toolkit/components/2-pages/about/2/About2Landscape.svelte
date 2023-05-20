<!-- SCRIPTS /////////////////////////////////////////// -->
<script>
  // IMPORTS --------------------------------------
  import About2Content from "./About2Content.svelte";
</script>

<!-- MARKUP ////////////////////////////////////////////////// -->
<div id="this" class="uarr2">
  <svg class="background" viewBox="0 0 1600 900">
    <rect x="0" y="0" width="1600" height="900" fill="hsla(150, 100%, 70%, 0.7)" />
    <line x1="0" y1="800" x2="1600" y2="800" />
    <line x1="200" y1="0" x2="200" y2="900" />
    <line x1="1200" y1="130" x2="1600" y2="130" />
    <rect x="0" y="230" width="1600" height="275" fill="hsl(150, 100%, 90%)" />
    <rect x="1200" y="230" width="400" height="275" fill="hsl(40, 100%, 50%)" />
    <line x1="1200" y1="0" x2="1200" y2="800" />
  </svg>
  <About2Content />
</div>

<!-- STYLES ////////////////////////////////////////////// -->
<style>
svg {
  width: 100%;
  height: 100%;
}
#this :global(p) {
  height: calc(var(--uarr2-height)* 0.32);
  display: flex;
  align-items: center;
  line-height: 1.5 !important;
  top: 25%;
  border-top-width: calc(var(--uarr2-width)/150);
  border-bottom-width: calc(var(--uarr2-width)/150);
}
</style>