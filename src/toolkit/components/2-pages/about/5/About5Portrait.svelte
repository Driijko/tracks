<!-- SCRIPTS /////////////////////////////////////////// -->
<script>
  // IMPORTS --------------------------------------
  import About5Content from "./About5Content.svelte";
</script>

<!-- MARKUP ////////////////////////////////////////////////// -->
<div id="this" class="uarr-container">
  <div class="uarr1-pad">
    <svg class="background" viewBox="0 0 900 1472">
      <rect x="0" y="0" width="900" height="1472" fill="hsl(150, 100%, 80%)" />
      <rect x="840" y="30" width="40" height="120" fill="hsl(40, 100%, 80%)" />
      <rect x="25" y="1320" width="40" height="120" fill="hsl(40, 100%, 80%)" />
      <rect x="150" y="1050" width="725" height="100" fill="hsl(40, 100%, 75%)" />
      <line x1="20" y1="0" x2="20" y2="1472" />
      <line x1="880" y1="0" x2="880" y2="1472" />
      <line x1="800" y1="30" x2="800" y2="150" />
      <line x1="840" y1="30" x2="840" y2="150" />
      <line x1="0" y1="30" x2="900" y2="30" />
      <line x1="0" y1="150" x2="900" y2="150" />
      <line x1="60" y1="1320" x2="60" y2="1440" />
      <line x1="100" y1="1320" x2="100" y2="1440" />
      <line x1="0" y1="1440" x2="900" y2="1440" />
      <line x1="0" y1="1320" x2="900" y2="1320" />
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
#this :global(p) {
  height: calc(var(--uarr1-height)* 0.65);
  top: 14.5%;
  border-top-width: calc(var(--uarr1-width)/50);
  border-bottom-width: calc(var(--uarr1-width)/50);
}
</style>