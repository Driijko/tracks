<!-- SCRIPTS ////////////////////////////////////////////////////// -->
<script>
  // IMPORTS ---------------------------------------------------
  import MusicPagePortrait from "./MusicPagePortrait.svelte";
  import AudioAnimationList 
  from "../../4-layouts/partial/AudioAnimationList.svelte";
  import AudioVolumeModal from "../../3-layers/AudioVolumeModal.svelte";
  import viewportOrientationStore
  from "../../../scripts/viewport/viewportOrientationStore";
  import { setPageExit } from "../../../scripts/currentPageStore";

  // PAGE EXIT ----------------------------------------------
  let fade = false;
  function pageExit() {
    fade = true;
  }
  setPageExit(pageExit, 2000);
  
</script>

<!-- MARKUP //////////////////////////////////////////////// -->
<AudioVolumeModal />
<div class="uarr-container"
  class:landscape={$viewportOrientationStore === "landscape"}
  class:fade
>
  <div class="uarr2" class:portrait={$viewportOrientationStore === "portrait"}>
    <AudioAnimationList />
  </div>
  <div class="uarr1">
    <MusicPagePortrait />
  </div>
</div>

<!-- STYLES //////////////////////////////////////// -->
<style>
  .uarr-container {
    transition-property: opacity;
    transition-duration: 2s;
    transition-timing-function: ease-in;
  }
  .uarr-container.landscape {
    background-color: hsl(150, 80%, 90%);
  }
  .uarr1, .uarr2 {
    position: absolute;
  }
  .uarr2 {
    background-color: white;
  }
  .uarr2.portrait {
    transform: rotate(90deg) scale(2.2);
  }
  .fade {
    opacity: 0;
  }
</style>