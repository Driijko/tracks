<!-- SCRIPTS //////////////////////////// -->
<script>
  import OpeningPromptPortrait from "./OpeningPromptPortrait.svelte";
  import OpeningPromptLandscape from "./OpeningPromptLandscape.svelte";
  import viewportOrientationStore 
  from "../../../scripts/viewport/viewportOrientationStore";
</script>

<!-- MARKUP ////////////////////////////// -->
{#if $viewportOrientationStore === "portrait"}
  <OpeningPromptPortrait />
{:else}
  <OpeningPromptLandscape />
{/if}

<!-- STYLES ///////////////////////////// -->
