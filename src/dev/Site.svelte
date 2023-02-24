<!-- SCRIPTS //////////////////////////////////////////////////////// -->
<script>
  // IMPORTS ---------------------------------------------------------
  import { setUp, currentPageName, resetCount, backgroundAudio } from "./stores/site";
  import OpeningPrompt from "./pages/OpeningPrompt.svelte";

  // RUN SCRIPTS ---------------------------------------------------------
  setUp();
  
</script>

<audio controls 
  loop={$backgroundAudio.loop}
  src={$backgroundAudio.track}
  bind:paused={$backgroundAudio.paused}
  bind:volume={$backgroundAudio.volume}
></audio>
<!-- MARKUP --------------------------------------------------- -->
<div>
  {#if $currentPageName === "opening-prompt"}
    {#key $resetCount}
      <OpeningPrompt />
    {/key}
  {/if}
</div>

