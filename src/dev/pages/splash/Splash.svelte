<!-- SCRIPTS ///////////////////////////////////////////////////// -->
<script>
  // IMPORTS ------------------------------------------------------
  import { orientation } from "../../stores/site.js"; 
  import SplashPortrait from "./SplashPortrait.svelte";
  import SplashLandscape from "./SplashLandscape.svelte";
</script>

<!-- MARKUP /////////////////////////////////////////////////////// -->
{#if $orientation === "portrait"}
  <SplashPortrait />
{:else}
 <SplashLandscape />
{/if}