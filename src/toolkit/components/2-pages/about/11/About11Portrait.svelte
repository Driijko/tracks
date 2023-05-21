<!-- SCRIPTS /////////////////////////////////////////// -->
<script>
  // IMPORTS --------------------------------------
  import About11Content from "./About11Content.svelte";
</script>

<!-- MARKUP ////////////////////////////////////////////////// -->
<div id="this" class="uarr1-pad">
  <svg class="background" viewBox="0 0 900 1472">
    <rect x="0" y="0" width="900" height="1472" fill="hsla(150, 100%, 70%, 0.3)" />
    <line x1="850" y1="0" x2="850" y2="1472" />
    <line x1="870" y1="0" x2="870" y2="1472" />
    <line x1="0" y1="420" x2="900" y2="420" />
    <line x1="0" y1="1055" x2="900" y2="1055" />
  </svg>
  <About11Content />
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
#this :global(ul) {
  background-color: hsl(40, 100%, 50%);
  position: absolute;
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: calc(var(--uarr1-height)/10);
  top: 30%;
  font-size: calc(var(--uarr1-width)/12);
  font-family: "Kodchasan", sans-serif;
}
</style>