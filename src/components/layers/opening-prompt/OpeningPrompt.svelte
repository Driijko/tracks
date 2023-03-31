<!-- SCRIPTS ///////////////////////////////////////////////////// -->
<script>
  // IMPORTS ------------------------------------------------------
  import viewportOrientation  from "../../../stores/viewportOrientation"; 
  import OpeningPromptPortrait from "./OpeningPromptPortrait.svelte";
  import OpeningPromptLandscape from "./OpeningPromptLandscape.svelte";
</script>

<!-- MARKUP /////////////////////////////////////////////////////// -->
<div class="uarr-container">
  <div class="uarr">
    {#if $viewportOrientation === "portrait"}
      <OpeningPromptPortrait />
    {:else}
      <OpeningPromptLandscape />
    {/if}
  </div>
</div>

<!-- STYLE ///////////////////////////////////////////////////////////// -->
<style>
  .uarr-container {
    position: relative;
    background-color: var(--color1);
  }
  .uarr {
    position: relative;
    background-color: var(--color2);
  }
</style>