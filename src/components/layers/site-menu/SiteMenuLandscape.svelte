<!-- SCRIPTS //////////////////////////////////////////////// -->
<script>
  // IMPORTS -----------------------------------------
  import SiteMenuContent from "./SiteMenuContent.svelte";
</script>

<!-- MARKUP ////////////////////////////////////////////// -->
<SiteMenuContent />

<!-- STYLES ///////////////////////////////////////////////// -->
<style>
@media screen and (orientation: landscape) {
  :global(#menu-button.splash) {
    left: 75%;
    top: 40%;
    width: 13%;
    height: 20%;
    border-width: calc(var(--uarr-width)/200);
    border-radius: calc(var(--uarr-width)/100);
    padding: 2%;
  }
}
</style>