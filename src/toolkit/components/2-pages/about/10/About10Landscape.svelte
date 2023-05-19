<!-- SCRIPTS /////////////////////////////////////////// -->
<script>
  // IMPORTS --------------------------------------
  import About10Content from "./About10Content.svelte";
</script>

<!-- MARKUP ////////////////////////////////////////////////// -->
<div id="this" class="uarr2">
  <svg class="background" viewBox="0 0 1600 900">
    <rect x="0" y="0" width="1600" height="900" fill="hsl(150, 100%, 80%)" />
    <rect x="317" y="279" width="980" height="451" fill="hsl(150, 100%, 60%)" />
    <line x1="640" y1="0" x2="640" y2="735" />
    <line x1="980" y1="0" x2="980" y2="735" />
    <line x1="317" y1="0" x2="317" y2="900" />
    <line x1="1300" y1="0" x2="1300" y2="900" />
    <line x1="0" y1="500" x2="1600" y2="500" />
    <line x1="0" y1="735" x2="1600" y2="735" />
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
  top: 18%;
  left: 20%;
  width: 60.85%;
}
#this :global(ul) {
  width: 100%;
  height: calc(var(--uarr2-height)* 0.5);
  width: 60.8%;
  left: 20%;
  top: 31%;
  display: flex;
  flex-wrap: wrap;
}
#this :global(li) {
  width: 33.33%;
  height: 50%; 
}
#this :global(a) {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: calc(var(--uarr2-width)/50);
  width: 100%;
  height: 100%;
  border-color: hsl(40, 100%, 50%);
  border-style: solid;
  font-size: calc(var(--uarr2-width)/50);
}
#this :global(a img) {
  height: 30%;
}
</style>