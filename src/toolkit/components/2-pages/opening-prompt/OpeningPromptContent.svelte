<!-- SCRIPTS //////////////////////////////////////////// -->
<script>
  // IMPORTS -------------------------------------
  import SiteSettings from "../../5-structures/SiteSettings.svelte";
  import { newPage } from "../../../scripts/currentPageStore";
  import { audioBkgLoadPlay, audioBkgLoad, audioBkgSetLoop, audioBkgPaused } 
  from "../../../scripts/audioBkgStore";

  // Load and loop opening-prompt track.
  audioBkgLoad("","./audio/opening-prompt.mp3");
  audioBkgSetLoop(true);

  // EVENT HANDLERS ----------------------------
  function handleClick() {
    newPage("splash");
    if ($audioBkgPaused) {
      audioBkgLoad("Background Music", "./audio/corridors.mp3");
    }
    else {
      audioBkgLoadPlay("Background Music", "./audio/corridors.mp3");
    };
  };

</script>

<!-- MARKUP //////////////////////////////////////////// -->
<main class="foreground opening-prompt-content">
  <p>Welcome to<br class="portrait"/> Tracks by Dreeko</p>
  <p>
    For the best experience,<br class="landscape"/> the following settings are recommended:
  </p>
  <SiteSettings />
  <p>
    You can change these settings later in the menu.
  </p>
  <a on:click|preventDefault={handleClick} href="splash">Ready</a>
</main>

<!-- STYLES /////////////////////////////////////////// -->
<style>
@media (hover:hover) {
  a:focus-visible, .opening-prompt-content :global(input:focus-visible) {
    transform: scale(1.2);
    outline: 10px solid var(--color4);
    outline-offset: 5px;
    z-index: 1;
  }
}
</style>