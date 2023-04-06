<!-- SCRIPTS ///////////////////////////////////////////////////// -->
<script>
  // IMPORTS ------------------------------------------------------
  import viewportOrientation  from "../../../stores/viewportOrientation"; 
  import SiteMenuPortrait from "./SiteMenuPortrait.svelte";
  import SiteMenuLandscape from "./SiteMenuLandscape.svelte";
</script>

<!-- MARKUP /////////////////////////////////////////////////////// -->
{#if $viewportOrientation === "portrait"}
  <SiteMenuPortrait />
{:else}
  <SiteMenuLandscape />
{/if}