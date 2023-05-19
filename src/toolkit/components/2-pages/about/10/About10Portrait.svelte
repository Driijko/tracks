<!-- SCRIPTS /////////////////////////////////////////// -->
<script>
  // IMPORTS --------------------------------------
  import About10Content from "./About10Content.svelte";
</script>

<!-- MARKUP ////////////////////////////////////////////////// -->
<div id="this" class="uarr1-pad">
  <svg class="background" viewBox="0 0 900 1472">
    <rect x="0" y="0" width="900" height="1472" fill="hsl(150, 100%, 80%)" />
  </svg>
  <About10Content />
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
  font-size: calc(var(--uarr1-width)/10);
  background-color: hsl(150, 100%, 60%);
  height: calc(var(--uarr1-height)* 0.1);
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
  top: 18%;
}
#this :global(ul) {
  top: 41%;
  width: 100%;
  height: calc(var(--uarr1-height)* 0.52);
}
#this :global(li) {
  width: 100%;
  height: 16.67%; 
}
#this :global(a) {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: calc(var(--uarr1-width)/20);
  width: 100%;
  height: 100%;
  border-color: hsl(40, 100%, 50%);
  border-style: solid;
  border-top-width: calc(var(--uarr1-width)/100);
  background-color: hsl(150, 100%, 70%);
  font-size: calc(var(--uarr1-width)/17);
}
#this :global(ul li:nth-of-type(6) a) {
  border-bottom-width: calc(var(--uarr1-width)/100);
}
#this :global(a img) {
  height: 80%;
}
</style>