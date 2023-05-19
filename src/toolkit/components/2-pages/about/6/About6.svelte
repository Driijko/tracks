<!-- SCRIPTS /////////////////////////////////////// -->
<script>
  import viewportOrientationStore 
  from "../../../../scripts/viewport/viewportOrientationStore";
  import About6Portrait from "./About6Portrait.svelte";
  import About6Landscape from "./About6Landscape.svelte";
</script>

<!-- MARKUP //////////////////////////////// -->
{#if $viewportOrientationStore === "portrait"}
  <About6Portrait />
{:else if $viewportOrientationStore === "landscape"}
  <About6Landscape />
{/if}