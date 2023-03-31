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
    <input type="range" min="0.0" max="1.0" step="0.01" 

    />
  </div>
</div>