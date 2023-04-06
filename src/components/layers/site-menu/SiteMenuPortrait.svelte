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
@media screen and (orientation: portrait) {
  #this :global(#menu-button.splash) {
    left: 37.5%;
    top: 70%;
    width: 25%;
    height: 12%;
    border-width: calc(var(--uarr-width)/100);
    border-radius: calc(var(--uarr-width)/100);
    padding: 3%;
  }
  #this :global(#open-menu h1) {
    height: 10%;
    padding-top: 4%;
  }
  #this :global(#open-menu h1 span:nth-of-type(1)) {
    font-size: calc(var(--uarr-width)/7);
    left: 5%;
    top: 10%;
    letter-spacing: 0.1rem;
  }
  #this :global(#open-menu h1 span:nth-of-type(2)) {
    font-size: calc(var(--uarr-width)/15);
    left: 75%;
    top: 10%;
  }
  #this :global(#open-menu h1 span:nth-of-type(3)) {
    font-size: calc(var(--uarr-width)/15);
    left: 65%;
    top: 55%;
  }
  #this :global(.tab) {
    border-width: calc(var(--uarr-width)/50);
  }
  #this :global(nav ul) {
    gap: 10%;
  }
  #this :global(nav li) {
    border-top-width: calc(var(--uarr-width)/100);
    border-bottom-width: calc(var(--uarr-width)/100);
    padding: 2%;
    font-size: calc(var(--uarr-width)/10);
  }
}
</style>