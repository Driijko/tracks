<!-- SCRIPTS /////////////////////////////////////////// -->
<script>
  // IMPORTS --------------------------------------
  import About9Content from "./About9Content.svelte";
</script>

<!-- MARKUP ////////////////////////////////////////////////// -->
<div id="this" class="uarr1-pad">
  <svg class="background" viewBox="0 0 900 1472">
    <rect x="0" y="0" width="900" height="1472" fill="hsl(150, 100%, 80%)" />
    <rect x="0" y="840" width="900" height="550" fill="hsl(150, 100%, 60%)" />
    <line x1="0" y1="840" x2="900" y2="840" />
    <line x1="0" y1="1390" x2="900" y2="1390" />
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
  display: flex; 
  justify-content: center;
  align-items: center;
  font-size: calc(var(--uarr1-width)/7);
  background-color: hsl(150, 100%, 60%);
  height: calc(var(--uarr1-height)* 0.2);
  width: 100%;
  text-align: center;
  top: 5%;
  border-color: hsl(40, 100%, 50%);
  border-style: solid;
  border-top-width: calc(var(--uarr1-width)/80);
  border-bottom-width: calc(var(--uarr1-width)/80);
}
#this :global(p) {
  border-top-width: calc(var(--uarr1-width)/80);
  border-bottom-width: calc(var(--uarr1-width)/80);
  top: 31%;
}
#this :global(img) {
  width: 80%;
  left: 10%;
  top: 57.4%;
}
</style>