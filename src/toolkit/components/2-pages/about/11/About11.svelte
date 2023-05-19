<!-- SCRIPTS /////////////////////////////////////// -->
<script>
  import viewportOrientationStore 
  from "../../../../scripts/viewport/viewportOrientationStore";
  import About11Portrait from "./About11Portrait.svelte";
  import About11Landscape from "./About11Landscape.svelte";
</script>

<!-- MARKUP //////////////////////////////// -->
{#if $viewportOrientationStore === "portrait"}
  <About11Portrait />
{:else if $viewportOrientationStore === "landscape"}
  <About11Landscape />
{/if}