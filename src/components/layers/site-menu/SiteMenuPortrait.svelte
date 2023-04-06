<!-- SCRIPTS //////////////////////////////////////////////// -->
<script>
  // IMPORTS -----------------------------------------
  import SiteMenuContent from "./SiteMenuContent.svelte";
</script>

<!-- MARKUP ////////////////////////////////////////////// -->
<SiteMenuContent />

<!-- STYLES ///////////////////////////////////////////////// -->
<style>
@media screen and (orientation: portrait) {
  :global(#menu-button.splash) {
    left: 37.5%;
    top: 70%;
    width: 25%;
    height: 12%;
    border-width: calc(var(--uarr-width)/100);
    border-radius: calc(var(--uarr-width)/100);
    padding: 3%;
  }
}
</style>