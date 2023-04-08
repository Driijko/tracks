<!-- SCRIPTS //////////////////////////////////// -->
<script>
  // IMPORTS --------------------------------------------
  import MusicNavContent from "./MusicNavContent.svelte";
</script>

<!-- MARKUP ///////////////////////////////////// -->
<svg class="svg-background" viewBox="0 0 900 1600" >
  <defs>
    
  </defs>
  <path d="M 901,0 V 1600 L 0,1600 Z" fill="black"/>
  <path fill="hsl(340, 100%, 60%)" d=" M -1,300 
    H 733
    L 468,770
    H -1
  Z"/>
  <path fill="hsl(280, 100%, 10%)" d=" M 901,1250 
    H 197
    L 468,770
    H 901
  Z"/>
  
</svg>
<div id="this">
  <MusicNavContent />
</div>

<!-- STYLES ///////////////////////////////////////// -->
<style>
svg {
  background-color: var(--color2-2);
}
#this :global(ul li) {
  position: absolute;
  font-size: calc(var(--uarr-width)/10);
  width: 50%;
  text-align: center;
  line-height: 1.5;
}
#this :global(ul li:nth-of-type(1)) {
  top: 20%;
  left: 5%;
}
#this :global(ul li:nth-of-type(2)) {
  top: 50%;
  left: 45%;
}
</style>