<!-- SCRIPTS /////////////////////////////////////////// -->
<script>
  // IMPORTS --------------------------------------
  import About12Content from "./About12Content.svelte";
</script>

<!-- MARKUP ////////////////////////////////////////////////// -->
<div id="this" class="uarr2">
  <svg class="background" viewBox="0 0 1600 900">
    <rect x="0" y="0" width="1600" height="900" fill="hsl(150, 100%, 80%)" />
    <rect x="0" y="392" width="100" height="160" fill="hsl(40, 100%, 50%)" />
    <rect x="1500" y="671" width="100" height="229" fill="hsl(40, 100%, 50%)" />
    <line x1="1100" y1="145" x2="1100" y2="272" />
  </svg>
  <About12Content />
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
  font-size: calc(var(--uarr2-width)/25);
  background-color: hsl(150, 100%, 60%);
  height: calc(var(--uarr2-height)* 0.11);
  width: 100%;
  text-align: center;
  top: 5%;
  border-color: hsl(40, 100%, 50%);
  border-style: solid;
  border-top-width: calc(var(--uarr2-width)/160);
  border-bottom-width: calc(var(--uarr2-width)/160);
}
#this :global(p) {
  border-top-width: calc(var(--uarr2-width)/160);
  border-bottom-width: calc(var(--uarr2-width)/160);
  width: 100%;
  height: calc(var(--uarr2-height) * 0.14);
  padding-top: calc(var(--uarr2-height) * 0.035);
}
#this :global(p:nth-of-type(1)) {
  top: 30%;
}
#this :global(p:nth-of-type(2)) {
  top: 61%;
}
</style>