<!-- SCRIPTS /////////////////////////////////////// -->
<script>
  import viewportOrientationStore 
  from "../../../../scripts/viewport/viewportOrientationStore";
  import About4Portrait from "./About4Portrait.svelte";
  import About4Landscape from "./About4Landscape.svelte";
</script>

<!-- MARKUP //////////////////////////////// -->
{#if $viewportOrientationStore === "portrait"}
  <About4Portrait />
{:else if $viewportOrientationStore === "landscape"}
  <About4Landscape />
{/if}