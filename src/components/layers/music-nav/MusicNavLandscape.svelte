<!-- SCRIPTS //////////////////////////////////// -->
<script>
  // IMPORTS --------------------------------------------
  import MusicNavContent from "./MusicNavContent.svelte";
</script>

<!-- MARKUP ///////////////////////////////////// -->
<svg class="svg-background" viewBox="0 0 1600 900" >
  <circle cx="800" cy="450" r="300" fill="hsl(340, 100%, 60%)" />
  <rect x="800" y="0" width="800" height="900" />
  <svg x="800" y="0">
    <circle cx="0" cy="450" r="400" fill="hsl(280, 100%, 10%)" />
  </svg>
</svg>
<div id="this">
  <MusicNavContent  />
</div>


<!-- STYLES ///////////////////////////////////////// -->
<style>
@media screen and (orientation: landscape) {
svg.svg-background {
  background-color: var(--color2);
}
#this :global(ul li) {
  position: absolute;
  font-size: calc(var(--uarr-width)/50);
  width: 12%;
  text-align: center;
  line-height: 1.5;
  display: flex;
  align-items: center;
}
#this :global(#music-nav li:nth-of-type(1)) {
  padding-right: 2%;
  top: 35%;
  height: 30%;
  left: 38%;
  text-align: right;
}
#this :global(#music-nav li:nth-of-type(2)) {
  padding-left: 2%;
  left: 50%;
  top: 30%;
  height: 40%;
  text-align: left;
}
}
@media screen and (orientation:landscape) and (hover:hover) {
#this :global(#music-nav li:hover) {
  box-shadow: 0 0 calc(var(--uarr-width)/10) currentColor;
}
}
</style>