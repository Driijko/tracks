<!-- SCRIPTS /////////////////////////////////////////////// -->
<script>
  // IMPORTS ------------------------------------------
  import { audioBkgPaused } from "../../scripts/audioBkgStore";
  import FullscreenCheckbox 
  from "../6-elements/interface/FullscreenCheckbox.svelte";
  import AudioBkgCheckbox 
  from "../6-elements/interface/audio-bkg/AudioBkgCheckbox.svelte";
  import AudioBkgVolumeSlider 
  from "../6-elements/interface/audio-bkg/AudioBkgVolumeSlider.svelte";

</script>

<!-- MARKUP ///////////////////////////////////////////// -->
<div class="site-settings">
  <div class="site-settings-option">
    <label for="fullscreen-option">Fullscreen</label>
    <FullscreenCheckbox />
  </div>
  <div class="site-settings-option">
    <label for="audio-option">Audio</label>
    <AudioBkgCheckbox />
  </div>
  <div class="volume-adjust" class:visible={!($audioBkgPaused)}>
    <label for="volume">
      Adjust volume to your preference:
    </label>
    <AudioBkgVolumeSlider />
  </div>
</div>

<!-- STYLES ////////////////////////////////////////// -->
<style>
  .volume-adjust {
    transform: scaleY(0);
    transition: transform 0.3s ease-out;
  }
  .volume-adjust.visible, .volume-adjust:focus-within {
    transform: scaleY(1);
  }
</style>