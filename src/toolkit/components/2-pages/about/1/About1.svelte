<!-- SCRIPTS /////////////////////////////////////// -->
<script>
  import viewportOrientationStore 
  from "../../../../scripts/viewport/viewportOrientationStore";
  import About1Portrait from "./About1Portrait.svelte";
  import About1Landscape from "./About1Landscape.svelte";
</script>

<!-- MARKUP //////////////////////////////// -->
{#if $viewportOrientationStore === "portrait"}
  <About1Portrait />
{:else if $viewportOrientationStore === "landscape"}
  <About1Landscape />
{/if}