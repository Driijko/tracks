<!-- SCRIPTS /////////////////////////////////////////// -->
<script>
  // IMPORTS --------------------------------------
  import About10Content from "./About11Content.svelte";
</script>

<!-- MARKUP ////////////////////////////////////////////////// -->
<div id="this" class="uarr2">
  <svg class="background" viewBox="0 0 1600 900">
    <rect x="0" y="0" width="1600" height="900" fill="hsla(150, 100%, 70%, 0.2)" />
    <line x1="646" y1="0" x2="646" y2="900" />
    <line x1="1100" y1="0" x2="1100" y2="277" />
    <line x1="1400" y1="0" x2="1400" y2="277" />
    <line x1="1250" y1="626" x2="1250" y2="900" />
    <line x1="957" y1="626" x2="957" y2="900" />
    <line x1="646" y1="277" x2="1600" y2="277" />
    <line x1="1100" y1="240" x2="1600" y2="240" />
    <line x1="1400" y1="205" x2="1600" y2="205" />
    <line x1="646" y1="626" x2="1600" y2="626" />
    <line x1="957" y1="663" x2="1600" y2="663" />
    <line x1="1250" y1="700" x2="1600" y2="700" />
  </svg>
  <About10Content />
</div>

<!-- STYLES ////////////////////////////////////////////// -->
<style>
svg {
  width: 100%;
  height: 100%;
}
#this :global(ul) {
  position: absolute;
  background-color: hsl(40, 100%, 50%);
  width: 20%;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: calc(var(--uarr2-height)/7);
  top: 30%;
  left: 40%;
  border-color: hsl(40, 100%, 50%);
  border-style: solid;
  border-width: calc(var(--uarr2-width)/150);
}
#this :global(li) {
  font-size: calc(var(--uarr2-width)/37);
  font-family: "Kodchasan", sans-serif;
  font-weight: 500;
  width: 100%;
  text-align: center;
}
</style>