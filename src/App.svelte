<!-- SCRIPTS ///////////////////////////////////////////////// -->
<script>
  // IMPORTS ------------------------------------------------------
  import currentPageName from "./stores/currentPageName";
  import setUp from "./helpers/setUp";
  import resetCount from "./stores/resetCount";
  import LoadingScreen from "./components/layers/LoadingScreen.svelte";
  import OpeningPrompt from "./components/layers/opening-prompt/OpeningPrompt.svelte";
  import Audio from "./components/Audio.svelte";

  setUp();
</script>

<!-- MARKUP ///////////////////////////////////////////////////// -->
<Audio />

{#key resetCount}
  {#if $currentPageName === "loading-screen"}
    <LoadingScreen />
  {:else if $currentPageName === "opening-prompt"}
    <OpeningPrompt />
  {/if}
{/key}