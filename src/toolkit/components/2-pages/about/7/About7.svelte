<!-- SCRIPTS /////////////////////////////////////// -->
<script>
  import viewportOrientationStore 
  from "../../../../scripts/viewport/viewportOrientationStore";
  import About7Portrait from "./About7Portrait.svelte";
  import About7Landscape from "./About7Landscape.svelte";
</script>

<!-- MARKUP //////////////////////////////// -->
<div class="uarr-container">
  {#if $viewportOrientationStore === "portrait"}
    <About7Portrait />
  {:else if $viewportOrientationStore === "landscape"}
    <About7Landscape />
  {/if}
</div>