<!-- SCRIPTS ///////////////////////////////////////////////////// -->
<script>
  // IMPORTS ------------------------------------------------------
  import viewportOrientation  from "../../../stores/viewportOrientation"; 
  import MusicNavPortrait from "./MusicNavPortrait.svelte";
  import MusicNavLandscape from "./MusicNavLandscape.svelte";
  import MusicNavContent from "./MusicNavContent.svelte";
</script>

<!-- MARKUP /////////////////////////////////////////////////////// -->
<MusicNavContent />
<!-- {#if $viewportOrientation === "portrait"}
  <MusicNavPortrait />
{:else}
  <MusicNavLandscape />
{/if} -->