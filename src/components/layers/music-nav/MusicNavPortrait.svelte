<!-- SCRIPTS //////////////////////////////////// -->
<script>
  // IMPORTS --------------------------------------------
  import MusicNavContent from "./MusicNavContent.svelte";

</script>

<!-- MARKUP ///////////////////////////////////// -->
<svg class="svg-background" viewBox="0 0 900 1600" >
  <path fill="hsl(340, 100%, 60%)" d=" M -1,300 
    H 733
    L 468,770
    H -1
  Z"/>
  <path d="M 901,0 V 1600 H 0 V 1600 L 900,0 Z" fill="black" filter="url(#filter1)"/>
  <path fill="hsl(280, 100%, 10%)" d=" M 901,1250 
    H 197
    L 468,770
    H 901
  Z"/>
  
</svg>
<div id="this">
  <MusicNavContent  />
</div>


<!-- STYLES ///////////////////////////////////////// -->
<style>
@media screen and (orientation: portrait) {
svg {
  background-color: var(--color2);
}
#this :global(ul li) {
  position: absolute;
  font-size: calc(var(--uarr-width)/10);
  width: 50%;
  text-align: center;
  line-height: 1.5;
}
#this :global(#music-nav li:nth-of-type(1)) {
  top: 20%;
  left: 5%;
}
#this :global(#music-nav li:nth-of-type(2)) {
  top: 50%;
  left: 45%;
}
}
</style>