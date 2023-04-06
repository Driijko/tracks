<!-- SCRIPTS ///////////////////////////////////////////////////// -->
<script>
  // IMPORTS ------------------------------------------------------
  import viewportOrientation  from "../stores/viewportOrientation"; 
</script>

<!-- MARKUP /////////////////////////////////////////////////////// -->
<div class="uarr-container">
  <div class="uarr">
    {#if $viewportOrientation === "portrait"}
      <slot name="portraitVersion" />
    {:else}
      <slot name="landscapeVersion" />
    {/if}
  </div>
</div>

<!-- STYLE ///////////////////////////////////////////////////////////// -->
<style>
  .uarr-container {
    position: relative;
    background-color: var(--color1);
  }
  .uarr {
    position: relative;
    background-color: var(--color2);
  }
</style>