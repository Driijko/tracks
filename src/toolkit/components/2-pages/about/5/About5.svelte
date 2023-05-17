<!-- SCRIPTS /////////////////////////////////////// -->
<script>
  import viewportOrientationStore 
  from "../../../../scripts/viewport/viewportOrientationStore";
  import About5Portrait from "./About5Portrait.svelte";
  import About5Landscape from "./About5Landscape.svelte";
</script>

<!-- MARKUP //////////////////////////////// -->
<div class="uarr-container">
  {#if $viewportOrientationStore === "portrait"}
    <About5Portrait />
  {:else if $viewportOrientationStore === "landscape"}
    <About5Landscape />
  {/if}
</div>