<!-- SCRIPTS /////////////////////////////////////// -->
<script>
  import viewportOrientationStore 
  from "../../../../scripts/viewport/viewportOrientationStore";
  import About3Portrait from "./About4Portrait.svelte";
  import About3Landscape from "./About4Landscape.svelte";
</script>

<!-- MARKUP //////////////////////////////// -->
<div class="uarr-container">
  {#if $viewportOrientationStore === "portrait"}
    <About3Portrait />
  {:else if $viewportOrientationStore === "landscape"}
    <About3Landscape />
  {/if}
</div>