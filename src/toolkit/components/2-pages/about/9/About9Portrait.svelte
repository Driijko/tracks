<!-- SCRIPTS /////////////////////////////////////////// -->
<script>
  // IMPORTS --------------------------------------
  import About9Content from "./About9Content.svelte";
</script>

<!-- MARKUP ////////////////////////////////////////////////// -->
<div id="this" class="uarr1-pad">
  <svg class="background" viewBox="0 0 900 1472">
    <rect x="0" y="0" width="900" height="1472" fill="hsla(150, 100%, 70%, 0.7)" />
  </svg>
  <About9Content />
</div>

<!-- STYLES ////////////////////////////////////////////// -->
<style>
#this {
  top: 0;
}
svg {
  width: 100%;
  height: 100%;
}
#this :global(section) {
  width: 100%;
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
#this :global(.icons-section) {
  width: 100%;
  top: 20%;
}
#this :global(p) {
  border-top-width: calc(var(--uarr1-width)/80);
  border-bottom-width: calc(var(--uarr1-width)/80);
  width: 100%;
}
#this :global(.icons-section p) {
  top: 18%;
}
#this :global(.fonts-section) {
  top: 45%;
  height: 50%;
}
#this :global(ul) {
  top: 40%;
  width: 100%;
  height: calc(var(--uarr1-height)* 0.28);
}
#this :global(li) {
  width: 100%;
  height: 33.33%; 
}
#this :global(li a) {
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
  font-size: calc(var(--uarr1-width)/14);
}
#this :global(ul li:nth-of-type(3) a) {
  border-bottom-width: calc(var(--uarr1-width)/100);
}
</style>