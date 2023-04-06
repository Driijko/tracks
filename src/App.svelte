<!-- SCRIPTS ///////////////////////////////////////////////// -->
<script>
  // IMPORTS ------------------------------------------------------
  import currentPageName from "./stores/currentPageName";
  import setUp from "./helpers/setUp";
  import resetCount from "./stores/resetCount";
  import Audio from "./components/Audio.svelte";
  import SiteMenu from "./components/layers/site-menu/SiteMenu.svelte"
  import LoadingScreen from "./components/layers/LoadingScreen.svelte";
  import OpeningPrompt from "./components/layers/opening-prompt/OpeningPrompt.svelte";
  import Splash from "./components/layers/splash/Splash.svelte";

  setUp();
</script>

<!-- MARKUP ///////////////////////////////////////////////////// -->
<Audio />

{#key resetCount}
  {#if $currentPageName === "loading-screen"}
    <LoadingScreen />
  {:else if $currentPageName === "opening-prompt"}
    <OpeningPrompt />
  {:else}
    <SiteMenu />
    {#if $currentPageName === "splash"}
      <Splash />
    {/if}
  {/if}
{/key}