<!-- SCRIPTS /////////////////////////////////////// -->
<script>
  import viewportOrientationStore 
  from "../../../../scripts/viewport/viewportOrientationStore";
  import About2Portrait from "./About2Portrait.svelte";
  import About2Landscape from "./About2Landscape.svelte";
</script>

<!-- MARKUP //////////////////////////////// -->
{#if $viewportOrientationStore === "portrait"}
  <About2Portrait />
{:else if $viewportOrientationStore === "landscape"}
  <About2Landscape />
{/if}