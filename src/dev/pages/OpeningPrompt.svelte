<!-- SCRIPTS ///////////////////////////////////////////////////// -->
<script>
  // IMPORTS ------------------------------------------------------
  import fullscreen from "../helpers/fullscreen.js";
  import { backgroundAudio } from "../stores/site.js"; 

  // EVENT HANDLERS -----------------------------------------------
  function toggleFullscreen(e) {
    fullscreen(e.target.checked);
  }
  function toggleBackgroundAudio(e) {
    backgroundAudio.pause(!e.target.checked)
  }
</script>

<p>Welcome to Tracks by Dreeko.</p>
<div>
  <p>For the best experience, the following settings are recommended:</p>
  <div>
    <label for="fullscreen-option">Fullscreen</label>
    <input id="fullscreen-option" type="checkbox" on:click={toggleFullscreen}/>
  </div>
  <div>
    <label for="audio-option">Background Audio</label>
    <input id="audio-option" type="checkbox" on:click={toggleBackgroundAudio} />
  </div>
  {#if !($backgroundAudio.paused)}
    <label for="volume">Adjust volume to your preference:</label>
    <input type="range" min="0.0" max="1.0" step="0.01" 
      bind:value={$backgroundAudio.volume}
    />
  {/if}
  <p>You can change these settings later in the menu.</p>
</div>
<!-- <a href={null} on:click|preventDefault={()=> pageExit("splash")} >Ready</a> -->


