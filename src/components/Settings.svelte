<!-- SCRIPTS /////////////////////////////////////////////// -->
<script>
  // IMPORTS ---------------------------------------------
  import fullscreen from "../helpers/fullscreen";
  import audioStore from "../stores/audioStore";
  
  // LOCAL STATE ------------------------------------------
  let visible = false;

  // EVENT HANDLERS --------------------------------------
  function toggleFullscreen(e) {
    fullscreen(e.target.checked);
  }

  function toggleAudio(e) {
    audioStore.pause(!e.target.checked);
    visible = !($audioStore.paused);
  }
</script>

<!-- MARKUP /////////////////////////////////////////////// -->
<div id="settings">
  <div>
    <label for="fullscreen-option">Fullscreen</label>
    <div>
      <input id="fullscreen-option" type="checkbox" on:click={toggleFullscreen} />
    </div>
  </div>
  <div>
    <label for="audio-option">Audio</label>
    <div>
      <input id="audio-option" type="checkbox" on:click={toggleAudio} />
    </div>
  </div>
  <div class:visible>
    <label for="volume">Adjust volume to your preference:</label>
    <input type="range" min="0.0" max="1.0" step="0.01" 
    bind:value={$audioStore.volume} />
  </div>
</div>

<!-- STYLES /////////////////////////////////////////////// -->
<style>
  input[type="checkbox"] {
    background-color: var(--color1-1);
    border-radius: 5%;
    border-color: var(--color1);
    border-style: solid;
    transition: background-color 1s ease-out;
  }
  input[type="checkbox"]:checked {
    background-color: var(--color5);
  }
  input[type="range"] {
    background-color: transparent;
  }
  input[type="range"]::-webkit-slider-runnable-track {
    background-color: var(--color1-1);
  }
  input[type="range"]::-moz-range-track { 
    background-color: var(--color1-1);
  }
  input[type="range"]::-webkit-slider-thumb {
    background-color: var(--color2-1); 
  }
  input[type="range"]::-moz-range-thumb {
    background-color: var(--color2-1); 
  }
</style>