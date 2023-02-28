<!-- SCRIPTS //////////////////////////////////////////////////////// -->
<script>
  // IMPORTS ---------------------------------------------------------
  import { setUp, currentPageName, resetCount, backgroundAudio } from "./stores/site";
  import SiteMenuModal from "./modules/SiteMenuModal.svelte";
  import OpeningPrompt from "./pages/OpeningPrompt.svelte";
  import Splash from "./pages/Splash.svelte";
  import MusicPage from "./pages/MusicPage.svelte";
  import LoadingPage from "./pages/LoadingPage.svelte";

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

{#key resetCount}
<div class="uarr-container">
  <div class="uarr">
    {#if $currentPageName === "loading-page"}
      <LoadingPage />
    {:else if $currentPageName === "opening-prompt"}
      <OpeningPrompt />
    {:else if $currentPageName === "splash"}
      <Splash />
    {:else if $currentPageName === "music-page"}
      <MusicPage />
    {/if}
  
    {#if $currentPageName !== "loading-page" 
    && $currentPageName !== "opening-prompt"}
      <SiteMenuModal />
    {/if}
  </div>
</div>
{/key}


<style>
  div.uarr-container {
    position: relative;
    background-color: var(--color1);
  }
  div.uarr {
    position: relative;
    background-color: var(--color2);
  }
</style>

