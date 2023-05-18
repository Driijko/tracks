<!-- SCRIPTS //////////////////////////////////////// -->
<script>
  // IMPORTS -------------------------------------
  import viewportOrientationStore 
  from "../../../scripts/viewport/viewportOrientationStore";
  import ContactPortrait from "./ContactPortrait.svelte";
  import ContactLandscape from "./ContactLandscape.svelte";
</script>

<!-- MARKUP ////////////////////////////////////// -->
<div class="uarr-container">
  {#if $viewportOrientationStore === "portrait"}
    <ContactPortrait />
  {:else if $viewportOrientationStore === "landscape"}
    <ContactLandscape />
  {/if}
</div>