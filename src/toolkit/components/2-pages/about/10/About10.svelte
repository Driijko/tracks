<!-- SCRIPTS /////////////////////////////////////// -->
<script>
  import viewportOrientationStore 
  from "../../../../scripts/viewport/viewportOrientationStore";
  import About10Portrait from "./About10Portrait.svelte";
  import About10Landscape from "./About10Landscape.svelte";
</script>

<!-- MARKUP //////////////////////////////// -->
<div class="uarr-container">
  {#if $viewportOrientationStore === "portrait"}
    <About10Portrait />
  {:else if $viewportOrientationStore === "landscape"}
    <About10Landscape />
  {/if}
</div>