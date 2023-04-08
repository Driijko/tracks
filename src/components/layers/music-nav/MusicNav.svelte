<!-- SCRIPTS ///////////////////////////////////////////////////// -->
<script>
  // IMPORTS ------------------------------------------------------
  import { fly } from "svelte/transition";
  import viewportOrientation  from "../../../stores/viewportOrientation"; 
  import MusicNavPortrait from "./MusicNavPortrait.svelte";
  import MusicNavLandscape from "./MusicNavLandscape.svelte";
</script>

<!-- MARKUP /////////////////////////////////////////////////////// -->
<dialog class="menu-layer" open transition:fly="{{duration: 1000, y:-400}}">
  {#if $viewportOrientation === "portrait"}
    <MusicNavPortrait />
  {:else}
    <MusicNavLandscape />
  {/if}
</dialog>
