<!-- SCRIPTS //////////////////////////////////////////////////// -->
<script>
  // IMPORTS ----------------------------------------------------
  import { backgroundAudio, pageExit } from "../../stores/site.js";
  import fullscreen from "../../helpers/fullscreen.js";

  // PROPS ------------------------------------------------------
  export let animation = null;

  // LOCAL STATE -----------------------------------------------
  let fadeSliderSection = false;

  // EVENT HANDLERS -----------------------------------------------
  function toggleFullscreen(e) {
    fullscreen(e.target.checked);
  }
  function toggleBackgroundAudio(e) {
    backgroundAudio.pause(!e.target.checked)
  }
  function handleLinkClick() {
    pageExit("splash", 5000);
    animation.reverse(4.5);
    fadeSliderSection = true;
  }

</script>

<div class="foreground">
  <p id="p1-p1">Welcome to<br/> Tracks by Dreeko.</p>
  <div id="p1-d1">
    <p id="p1-p2">For the best experience,<br/> the following settings<br/> are recommended:</p>
    <div id="prompt-option-1" class="prompt-option">
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
      <p id="p1-p3">You can change<br/> these settings later<br/> in the menu.</p>
    </div>
  </div>
  <a id="p1-link1" class="interface-style-1" href={null} 
    on:click|preventDefault={handleLinkClick} 
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
  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    background-color: var(--color5); 
  }
  .fade {
    opacity: 0;
  }
</style>