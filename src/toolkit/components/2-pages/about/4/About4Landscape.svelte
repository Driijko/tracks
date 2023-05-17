<!-- SCRIPTS /////////////////////////////////////////// -->
<script>
  // IMPORTS --------------------------------------
  import About4Content from "./About4Content.svelte";
</script>

<!-- MARKUP ////////////////////////////////////////////////// -->
<div id="id13" class="uarr-container">
  <div class="uarr2">
    <svg class="background" viewBox="0 0 1600 900">
      <rect x="0" y="0" width="1600" height="900" fill="hsl(150, 100%, 80%)" />
      <rect x="1119" y="150" width="77" height="750" fill="hsl(40, 100%, 80%)" />
      <line x1="109" y1="0" x2="109" y2="900" />
      <line x1="1119" y1="0" x2="1119" y2="900" />
      <line x1="1119" y1="150" x2="1600" y2="150" />
      <line x1="1080" y1="261" x2="1080" y2="900" />
      <line x1="1200" y1="150" x2="1200" y2="900" />
      <line x1="1080" y1="880" x2="1119" y2="880" />
    </svg>
    <About4Content />
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
#id13 :global(p) {
  height: calc(var(--uarr2-height)* 0.24);
  padding: calc(var(--uarr1-width) * 0.05);
  position: absolute;
  line-height: 2;
  top: 5%;
  left: 7%;
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