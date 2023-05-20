<!-- SCRIPTS /////////////////////////////////////////// -->
<script>
  // IMPORTS --------------------------------------
  import About9Content from "./About9Content.svelte";
</script>

<!-- MARKUP ////////////////////////////////////////////////// -->
<div id="this" class="uarr2">
  <svg class="background" viewBox="0 0 1600 900">
    <rect x="0" y="0" width="1600" height="900" fill="hsla(150, 100%, 70%, 0.7)" />
    <rect x="700" y="600" width="70" height="300" fill="hsl(40, 100%, 50%)" />
    <line x1="775" y1="140" x2="775" y2="900" />
    <line x1="828" y1="140" x2="828" y2="900" />
    <line x1="1021" y1="395" x2="1021" y2="900" />
    <line x1="700" y1="556" x2="700" y2="900" />
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
#this :global(.icons-section) {
  width: 48%;
  top: 43%;
}
#this :global(p) {
  border-top-width: calc(var(--uarr2-width)/160);
  border-bottom-width: calc(var(--uarr2-width)/160);
  width: 100%;
}
#this :global(.icons-section p) {
  padding-top: calc(var(--uarr2-height) * 0.035);
  height: calc(var(--uarr2-height) * 0.19);
}
#this :global(.fonts-section) {
  top: 25.3%;
  left: 52%;
  height: 70%;
  width: 48%;
}
#this :global(.fonts-section p) {
  padding-top: calc(var(--uarr2-height) * 0.035);
  height: calc(var(--uarr2-height) * 0.19);
}
#this :global(ul) {
  top: 45%;
  width: 75%;
  left: 25%;
  height: calc(var(--uarr2-height)* 0.32);
}
#this :global(li) {
  width: 100%;
  height: 33.33%; 
}
#this :global(li a) {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-color: hsl(40, 100%, 50%);
  border-style: solid;
  border-top-width: calc(var(--uarr2-width)/160);
  background-color: hsl(150, 100%, 70%);
  font-size: calc(var(--uarr1-width)/14);
}
#this :global(ul li:nth-of-type(3) a) {
  border-bottom-width: calc(var(--uarr2-width)/160);
}
</style>