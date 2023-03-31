<!-- SCRIPTS /////////////////////////////////////////////// -->
<script>
  // IMPORTS ---------------------------------------------
  import fullscreen from "../helpers/fullscreen";

  // EVENT HANDLERS --------------------------------------
  function toggleFullscreen(e) {
    fullscreen(e.target.checked);
  }
</script>

<!-- MARKUP /////////////////////////////////////////////// -->
<div>
  <div>
    <label for="fullscreen-option">Fullscreen</label>
    <input id="fullscreen-option" type="checkbox" on:click={toggleFullscreen} />
  </div>
  <div>
    <label for="audio-option">Audio</label>
    <input id="audio-option" type="checkbox" />
  </div>
  <div>
    <label for="volume">Adjust volume to your preference:</label>
    <input type="range" min="0.0" max="1.0" step="0.01" />
  </div>
</div>

<!-- STYLES /////////////////////////////////////////////// -->
<style>
  input[type="checkbox"] {
    background-color: var(--color1-1);
    border-radius: 5%;
    transition: background-color 1s ease-out;
  }
  input[type="checkbox"]:checked {
    background-color: var(--color5);
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