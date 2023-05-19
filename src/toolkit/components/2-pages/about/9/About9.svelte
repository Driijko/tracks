<!-- SCRIPTS /////////////////////////////////////// -->
<script>
  import viewportOrientationStore 
  from "../../../../scripts/viewport/viewportOrientationStore";
  import About9Portrait from "./About9Portrait.svelte";
  import About9Landscape from "./About9Landscape.svelte";
</script>

<!-- MARKUP //////////////////////////////// -->
{#if $viewportOrientationStore === "portrait"}
  <About9Portrait />
{:else if $viewportOrientationStore === "landscape"}
  <About9Landscape />
{/if}