<!-- SCRIPTS /////////////////////////////////////////// -->
<script>
  // IMPORTS --------------------------------------
  import About6Content from "./About6Content.svelte";
</script>

<!-- MARKUP ////////////////////////////////////////////////// -->
<div id="this" class="uarr-container">
  <div class="uarr2">
    <svg class="background" viewBox="0 0 1600 900">
      <rect x="0" y="0" width="1600" height="900" fill="hsl(150, 100%, 80%)" />
      <rect x="1100" y="0" width="415" height="870" fill="hsl(40, 100%, 70%)" />
      <line x1="61" y1="0" x2="61" y2="900" />
      <line x1="90" y1="0" x2="90" y2="900" />
      <line x1="1100" y1="0" x2="1100" y2="870" />
      <line x1="1544" y1="0" x2="1544" y2="900" />
      <line x1="1517" y1="0" x2="1517" y2="900" />
      <line x1="90" y1="870" x2="1517" y2="870" />
    </svg>
    <About6Content />
  </div>
</div>

<!-- STYLES ////////////////////////////////////////////// -->
<style>
svg {
  width: 100%;
  height: 100%;
}
#this :global(p) {
  height: calc(var(--uarr2-height)* 0.24);
  top: 30%;
  left: 4%;
  border-top-width: calc(var(--uarr2-width)/150);
  border-bottom-width: calc(var(--uarr2-width)/150);
}
</style>