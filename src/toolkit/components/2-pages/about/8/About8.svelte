<!-- SCRIPTS /////////////////////////////////////// -->
<script>
  import viewportOrientationStore 
  from "../../../../scripts/viewport/viewportOrientationStore";
  import About8Portrait from "./About8Portrait.svelte";
  import About8Landscape from "./About8Landscape.svelte";
</script>

<!-- MARKUP //////////////////////////////// -->
<div class="uarr-container">
  {#if $viewportOrientationStore === "portrait"}
    <About8Portrait />
  {:else if $viewportOrientationStore === "landscape"}
    <About8Landscape />
  {/if}
</div>