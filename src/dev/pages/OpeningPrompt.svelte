<!-- SCRIPTS ///////////////////////////////////////////////////// -->
<script>
  // IMPORTS ------------------------------------------------------
  import { gsap } from "gsap";
  import fullscreen from "../helpers/fullscreen.js";
  import svgViewBox from "../helpers/svgViewBox.js";
  import { backgroundAudio, pageExit, currentPage } from "../stores/site.js"; 
  import { onMount } from "svelte";

  // ELEMENT/COMPONENT REFERENCES -----------------------------------
  let openingPrompt;

  // EVENT HANDLERS -----------------------------------------------
  function toggleFullscreen(e) {
    fullscreen(e.target.checked);
  }
  function toggleBackgroundAudio(e) {
    backgroundAudio.pause(!e.target.checked)
  }

  // LIFECYCLE ---------------------------------------------------
  onMount(()=> {
    currentPage.set(openingPrompt);

    // ANIMATION -----------------------------------------------
    const tl = gsap.timeline();
    tl.to("#p1-l1", {duration: 2, ease:"linear", attr:{x2: 900}},0);
    tl.to("#p1-l2", {duration: 2, ease:"power1.inOut", attr:{y2: 1600}},0);
    tl.to("#p1-l3", {duration: 1, ease:"power1.inOut", attr:{x2: 900}},1.55);
    tl.to("#p1-l5", {duration: 1, ease:"power1.inOut", 
      attr:{y1: 100, y2: 1500}},1.7);
    tl.to("#p1-r1", {duration: 3, ease:"power1.inOut", attr:{x:750, width: 150}},0);
    tl.to(["#p1-r2", "#p1-r3"], {duration: 4, ease:"power1.inOut", opacity:0.5},0);
  })
</script>

<!-- MARKUP /////////////////////////////////////////////////////// -->
<main bind:this={openingPrompt} class="page">
  <svg class="svg-background" viewBox={svgViewBox()} >
    <rect id="p1-r1" class="color1" x="900" y="100" width="0" height="1400" />
    <rect id="p1-r2" class="color3" 
      x="400" y="100" width="350" height="1400" 
    opacity="0" />
    <rect id="p1-r3" class="color4" 
      x="100" y="900" width="650" height="100"
      opacity="0" 
    />
    <line id="p1-l1" class="line" x1="0" y1="100" x2="0" y2="100" />
    <line id="p1-l2" class="line" x1="100" y1="0" x2="100" y2="0" />
    <line id="p1-l3" class="line" x1="100" y1="1500" x2="100" y2="1500" />
    <line id="p1-l4" class="line" x1="800" y1="100" x2="800" y2="100" />
    <line id="p1-l5" class="accent-line" x1="850" y1="800" x2="850" y2="800" />
  </svg>
  <div class="foreground">
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
    <a href={null} 
      on:click|preventDefault={()=> pageExit("splash")} 
    >Ready</a>
  </div>
</main>

<!-- STYLES /////////////////////////////////////////////// -->
<style>
  main {
    width: 100%;
    height: 100%;
  }
</style>