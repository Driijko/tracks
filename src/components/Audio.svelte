<!-- SCRIPTS ////////////////////////////////////// -->
<script>
  // IMPORTS --------------------------------------
  import audioStore from "../stores/audioStore";
  import { gsap } from "gsap";

  // ELEMENT/COMPONENT REFERENCES -------------------
  let audioElement;

  // LOCAL STATE -----------------------------------
  let currentTrackPath = "./assets/audio/opening-prompt.mp3";
  let changeTrackReady = true;

  // EVENT HANDLERS -----------------------------------
  function changeTrack(trackPath) {
    function registerTrackChange(trackPath) {
      if ($audioStore.paused === false) {
        audioElement.play();
      }
      currentTrackPath = trackPath;
      changeTrackReady = true;
    }
    const tl = gsap.timeline();
    tl.to("#audio-element", {duration: 3, volume: 0}, 0);
    tl.to("#audio-element", {duration: 0, attr: {src: trackPath}}, 3);
    tl.call(registerTrackChange, [trackPath], 3);
    tl.to("#audio-element", {duration: 3, volume: $audioStore.volume}, 3.1);
  }

  // REACTIVE DECLARATIONS/STATEMENTS -----------------------------------
  $: if (currentTrackPath !== $audioStore.trackPath && changeTrackReady) {
    changeTrack($audioStore.trackPath);
    changeTrackReady = false;
  }
  
</script>

<!-- MARKUP ////////////////////////////////////////////////// -->
<audio bind:this={audioElement} id="audio-element"
  loop={true}
  src={"./assets/audio/opening-prompt.mp3"}
  bind:paused={$audioStore.paused}
  bind:volume={$audioStore.volume}
></audio>