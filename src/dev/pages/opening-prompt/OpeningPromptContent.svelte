<!-- SCRIPTS //////////////////////////////////////////////////// -->
<script>
  // IMPORTS ----------------------------------------------------
  import { backgroundAudio } from "../../stores/site.js";
  import fullscreen from "../../helpers/fullscreen.js";

  // PROPS ------------------------------------------------------
  export let handleLinkClick = null;

  // LOCAL STATE -----------------------------------------------
  let fadeSliderSection = false;

  // EVENT HANDLERS -----------------------------------------------
  function toggleFullscreen(e) {
    fullscreen(e.target.checked);
  }
  function toggleBackgroundAudio(e) {
    backgroundAudio.pause(!e.target.checked)
  }
</script>

<div class="foreground">
  <p id="p1-p1">Welcome to<br class="portrait"/> Tracks by Dreeko.</p>
  <div id="p1-d1">
    <p id="p1-p2">For the best experience,<br/> the following settings<br/> are recommended:</p>
    <div id="prompt-option-1" class="prompt-option" >
      <label for="fullscreen-option">Fullscreen</label>
      <input id="fullscreen-option" type="checkbox" on:click={toggleFullscreen}/>
    </div>
    <div id="prompt-option-2" class="prompt-option">
      <label for="audio-option">Background<br/> Audio</label>
      <input id="audio-option" type="checkbox" on:click={toggleBackgroundAudio} />
    </div>
    <div id="p1-d2">
      {#if (!($backgroundAudio.paused))}
        <div class:fade={fadeSliderSection} id="prompt-option-3">
          <label for="volume">Adjust volume<br/> to your preference:</label>
          <input type="range" min="0.0" max="1.0" step="0.01" 
            bind:value={$backgroundAudio.volume}
          />
        </div>
      {/if}
      <p id="p1-p3">You can change<br class="portrait"/> these <br class="landscape"/> settings later<br class="portrait"/> in the menu.</p>
    </div>
  </div>
  <a id="p1-link1" class="interface-style-1" 
    href={"https://driijko.github.io/tracks"} 
    on:click|preventDefault={()=> {
      handleLinkClick();
      fadeSliderSection = true;
      $backgroundAudio.trackPath = "./assets/audio/background.mp3";
    }} 
  >Ready</a>
</div>

<style>
  .foreground > * {
    position: absolute;
  }
  input[type="checkbox"] {
    appearance: none;
    -webkit-appearance: none;
    margin: 0;
    background-color: var(--color1-1);
    transition: background-color 1s ease-out;
  }
  input[type="checkbox"]:checked {
    background-color: var(--color5);
  }
  #prompt-option-3 {
    transition: opacity 2s ease-out;
  }
  input[type="range"] {
    -webkit-appearance: none;
    appearance: none;
    background-color: transparent;
  }
  input[type="range"]::-webkit-slider-runnable-track {
    background: var(--color1-1);
  }
  input[type="range"]::-moz-range-track { 
    background: var(--color1-1);
  }
  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    background-color: var(--color2-1); 
  }
  input[type="range"]::-moz-range-thumb {
    background-color: var(--color2-1); 
  }
  .fade {
    opacity: 0;
  }
  /* HIGHLIGHTING ------------------------------ */
  @media (hover:hover) {
    .prompt-option:hover, .prompt-option:focus-within {
      color: var(--color5);
    }
    input[type="range"]::-webkit-slider-thumb:hover, input[type="range"]:focus::-webkit-slider-thumb {
      background-color: var(--color5);
    }
  }
</style>