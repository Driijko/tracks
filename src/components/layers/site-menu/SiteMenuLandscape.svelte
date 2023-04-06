<!-- SCRIPTS //////////////////////////////////////////////// -->
<script>
  // IMPORTS -----------------------------------------
  import SiteMenuContent from "./SiteMenuContent.svelte";
</script>

<!-- MARKUP ////////////////////////////////////////////// -->
<div id="this">
  <SiteMenuContent />
</div>

<!-- STYLES ///////////////////////////////////////////////// -->
<style>
@media screen and (orientation: landscape) {
  #this :global(#menu-button.splash) {
    left: 75%;
    top: 40%;
    width: 13%;
    height: 20%;
    border-width: calc(var(--uarr-width)/200);
    border-radius: calc(var(--uarr-width)/100);
    padding: 2%;
  }
  #this :global(#open-menu h1 span:nth-of-type(1)) {
    font-size: calc(var(--uarr-width)/20);
    left: 1%;
    top: 5%;
    letter-spacing: 0.1rem;
  }
  #this :global(#open-menu h1 span:nth-of-type(2)) {
    font-size: calc(var(--uarr-width)/55);
    left: 20%;
    top: 15%;
  }
  #this :global(#open-menu h1 span:nth-of-type(3)) {
    font-size: calc(var(--uarr-width)/40);
    left: 19.7%;
    top: 50%; 
  }
}
</style>