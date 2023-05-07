<!-- SCRIPTS //////////////////////////////// -->
<script>
  // IMPORTS ----------------------------------
  import SiteMenuModalButton 
  from "../../6-elements/interface/modals/SiteMenuModalButton.svelte";
</script>

<!-- MARKUP //////////////////////////////////// -->
<header class="splash-content">
  <h1>
    <span>TRACKS</span> 
    <span>by</span> 
    <span>DREEKO</span>
  </h1>
  <h2>
    <span>Dreamy,</span><br class="portrait" />
    <span>moody,</span><br class="portrait" />
    <span>ambient music...</span>
  </h2>
  <SiteMenuModalButton />
</header>

<!-- STYLES //////////////////////////////////////// -->
<style>
h1 {
  font-family: "Tenor Sans", sans-serif;
  font-weight: 400;
}
h1 span:nth-of-type(2) {
  font-style: italic;
}
</style>