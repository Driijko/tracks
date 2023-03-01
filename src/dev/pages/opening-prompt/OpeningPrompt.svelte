<!-- SCRIPTS ///////////////////////////////////////////////////// -->
<script>
  // IMPORTS ------------------------------------------------------
  import { orientation } from "../../stores/site.js"; 
  import OpeningPromptPortrait from "./OpeningPromptPortrait.svelte";
  import OpeningPromptLandscape from "./OpeningPromptLandscape.svelte";

</script>

<!-- MARKUP /////////////////////////////////////////////////////// -->
{#if $orientation === "portrait"}
  <OpeningPromptPortrait />
{:else}
 <OpeningPromptLandscape />
{/if}
