<!-- SCRIPTS ///////////////////////////////////////////////////// -->
<script>
  // IMPORTS ------------------------------------------------------
  import viewportOrientation  from "../../../stores/viewportOrientation"; 
  // import OpeningPromptPortrait from "./OpeningPromptPortrait.svelte";
  // import OpeningPromptLandscape from "./OpeningPromptLandscape.svelte";
</script>

<!-- MARKUP /////////////////////////////////////////////////////// -->
{#if $viewportOrientation === "portrait"}
  <!-- <OpeningPromptPortrait /> -->
  <p>portrait</p>
{:else}
 <!-- <OpeningPromptLandscape /> -->
 <p>landscape</p>
{/if}