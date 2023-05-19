<!-- SCRIPTS /////////////////////////////////////// -->
<script>
  import viewportOrientationStore 
  from "../../../../scripts/viewport/viewportOrientationStore";
  import About12Portrait from "./About12Portrait.svelte";
  import About12Landscape from "./About12Landscape.svelte";
</script>

<!-- MARKUP //////////////////////////////// -->
{#if $viewportOrientationStore === "portrait"}
  <About12Portrait />
{:else if $viewportOrientationStore === "landscape"}
  <About12Landscape />
{/if}