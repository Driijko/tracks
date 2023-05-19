<!-- SCRIPTS /////////////////////////////////////////// -->
<script>
  // IMPORTS --------------------------------------
  import About9Content from "./About9Content.svelte";
</script>

<!-- MARKUP ////////////////////////////////////////////////// -->
<div id="this" class="uarr2">
  <svg class="background" viewBox="0 0 1600 900">
    <rect x="0" y="0" width="1600" height="900" fill="hsl(150, 100%, 80%)" />
    <rect x="1002" y="500" width="60" height="400" fill="hsl(150, 100%, 50%)" />
    <line x1="640" y1="0" x2="640" y2="500" />
    <line x1="1002" y1="0" x2="1002" y2="900" />
    <line x1="1066" y1="500" x2="1066" y2="900" />
    <line x1="0" y1="500" x2="1600" y2="500" />
  </svg>
  <About9Content />
</div>

<!-- STYLES ////////////////////////////////////////////// -->
<style>
svg {
  width: 100%;
  height: 100%;
}
#this :global(section > *) {
  position: absolute;
}
#this :global(h3) {
  font-size: calc(var(--uarr2-width)/15);
  top: 5%;
  left: 0%;
  width: 39.6%;
  border-color: hsl(40, 100%, 50%);
  border-style: solid;
  border-top-width: calc(var(--uarr2-width)/170);
  border-bottom-width: calc(var(--uarr2-width)/170);
  background-color: hsl(150, 100%, 50%);
}
#this :global(p) {
  top: 30%;
  border-top-width: calc(var(--uarr2-width)/170);
  border-bottom-width: calc(var(--uarr2-width)/170);
  width: 62.2%;
}
#this :global(img) {
  height: 43.9%;
  top: 56%;
  left: 66.9%;
}
</style>