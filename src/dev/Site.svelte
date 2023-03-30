<!-- SCRIPTS //////////////////////////////////////////////////////// -->
<script>
  // IMPORTS ---------------------------------------------------------
  import { setUp, currentPageName, resetCount, backgroundAudio } from "./stores/site";
  import { gsap } from "gsap";
  import SiteMenuModal from "./modules/SiteMenuModal.svelte";
  import OpeningPrompt from "./pages/opening-prompt/OpeningPrompt.svelte";
  import Splash from "./pages/splash/Splash.svelte";
  import MusicPage from "./pages/MusicPage.svelte";
  import LoadingPage from "./pages/LoadingPage.svelte";

  // ELEMENT/COMPONENT REFERENCES -----------------------------------
  let siteAudio;

  // LOCAL STATE -----------------------------------------------------
  let currentTrackPath = "./assets/audio/opening-prompt.mp3";
  let changeTrackReady = true;

  // RUN SCRIPTS ---------------------------------------------------------
  setUp();

  // EVENT HANDLERS -----------------------------------------------------
  $: if (currentTrackPath !== $backgroundAudio.trackPath && changeTrackReady) {
    changeTrack($backgroundAudio.trackPath);
    changeTrackReady = false;
  }

  function changeTrack(trackPath) {
    function siteAudioPlay(trackPath) {
      siteAudio.play();
      currentTrackPath = trackPath;
      changeTrackReady = true;
    }
    const tl = gsap.timeline();
    tl.to("#site-audio", {duration: 3, volume: 0}, 0);
    tl.to("#site-audio", {duration: 0, attr: {src: trackPath}}, 3);
    tl.call(siteAudioPlay, [trackPath], 3);
    tl.to("#site-audio", {duration: 3, volume: $backgroundAudio.volume}, 3.1);
  }

</script>

<!-- MARKUP //////////////////////////////////////////////////////////// -->
<audio controls bind:this={siteAudio} id="site-audio"
  loop={true}
  src={"./assets/audio/opening-prompt.mp3"}
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

