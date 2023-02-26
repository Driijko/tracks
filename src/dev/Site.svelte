<!-- SCRIPTS //////////////////////////////////////////////////////// -->
<script>
  // IMPORTS ---------------------------------------------------------
  import { setUp, currentPageName, resetCount, backgroundAudio } from "./stores/site";
  import SiteMenuModal from "./modules/SiteMenuModal.svelte";
  import OpeningPrompt from "./pages/OpeningPrompt.svelte";
  import Splash from "./pages/Splash.svelte";
  import MusicPage from "./pages/MusicPage.svelte";

  // RUN SCRIPTS ---------------------------------------------------------
  setUp();

</script>

<!-- MARKUP //////////////////////////////////////////////////////////// -->

<audio
  loop={$backgroundAudio.loop}
  src={$backgroundAudio.track}
  bind:paused={$backgroundAudio.paused}
  bind:volume={$backgroundAudio.volume}
></audio>

<div class="uarr-container">
  <div class="uarr">
    {#if $currentPageName === "opening-prompt"}
      {#key $resetCount}
        <OpeningPrompt />
      {/key}
    {:else if $currentPageName === "splash"}
      {#key $resetCount}
        <Splash />
      {/key}
    {:else if $currentPageName === "music-page"}
      {#key $resetCount}
        <MusicPage />
      {/key}
    {/if}
  
    {#if $currentPageName !== "opening-prompt"}
      {#key $resetCount}
        <SiteMenuModal />
      {/key}
    {/if}
  </div>
</div>


<style>
  div.uarr-container {
    position: relative;
    border: 4px solid red;
  }
  div.uarr {
    position: relative;
    border: 4px solid green;
  }
</style>

