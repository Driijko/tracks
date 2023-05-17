<!-- SCRIPTS /////////////////////////////////////////// -->
<script>
  // IMPORTS --------------------------------------
  import About3Content from "./About3Content.svelte";
</script>

<!-- MARKUP ////////////////////////////////////////////////// -->
<div id="id10" class="uarr-container">
  <div class="uarr1-pad">
    <svg class="background" viewBox="0 0 900 1472">
      <rect x="0" y="0" width="900" height="1472" fill="hsl(150, 100%, 80%)" />
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
    <About3Content />
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
#id10 :global(p) {
  background-color: hsl(150, 100%, 90%);
  height: calc(var(--uarr1-height)* 0.7);
  padding: calc(var(--uarr1-width) * 0.05);
  position: absolute;
  line-height: 1.3;
  top: 12%;
  font-size: calc(var(--uarr1-width)/18);
  border-top-width: calc(var(--uarr1-width)/50);
  border-bottom-width: calc(var(--uarr1-width)/50);
  border-top-style: solid;
  border-bottom-style: solid;
  border-top-color: hsl(40, 100%, 50%);
  border-bottom-color: hsl(40, 100%, 50%);
}
</style>