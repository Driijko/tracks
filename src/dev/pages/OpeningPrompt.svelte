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
    tl.to("#p1-p1", {duration: 3, ease:"power1.inOut", letterSpacing: "0rem"}, 1);
    tl.to("#p1-p1", {duration: 2, ease:"linear", transform: "rotateY(0deg)"}, 1);
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
      x="100" y="500" width="650" height="380"
      opacity="1" 
    />
    <line id="p1-l1" class="line" x1="0" y1="100" x2="0" y2="100" />
    <line id="p1-l2" class="line" x1="100" y1="0" x2="100" y2="0" />
    <line id="p1-l3" class="line" x1="100" y1="1500" x2="100" y2="1500" />
    <line id="p1-l4" class="line" x1="800" y1="100" x2="800" y2="100" />
    <line id="p1-l5" class="accent-line" x1="850" y1="800" x2="850" y2="800" />
  </svg>
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
        {#if !($backgroundAudio.paused)}
          <div id="prompt-option-3">
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
  .foreground > *, #p1-d1 > * {
    position: absolute;
  }
  @media screen and (orientation: portrait) {
    #p1-p1 {
      left: 13%;
      top: 8%;
      font-size: calc(var(--uarr-width)/15);
      letter-spacing: -0.5em;
      transform: rotateY(90deg);
    }
    #p1-d1 {
      left: 12%;
      top: 20%;
      width: 72%;
      height: 70%;
      font-size: calc(var(--uarr-width)/18);
    }
    #p1-d1 > * {
      position: absolute;
      padding-left: 3%;
    }
    .prompt-option {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-right: 1.5em;
      width: 100%;
      height: 17%;
    }
    #prompt-option-1 {
      top: 16%;
      border-top: calc(var(--uarr-width)/100) solid var(--color1);
    }
    #prompt-option-2 {
      margin-top: calc(var(--uarr-width)/1000);
      top: 33%;
      border-bottom: calc(var(--uarr-width)/100) solid var(--color1);
    }
    input[type="checkbox"] {
      appearance: none;
      -webkit-appearance: none;
      margin: 0;
      border: calc(var(--uarr-width)/100) solid var(--color1);
      background-color: var(--color1-1);
      border-radius: calc(var(--uarr-width)/50);
      transition: background-color 1s ease-out;
      width: 24%;
      height: 70%;
    }
    input[type="checkbox"]:checked {
      background-color: var(--color5);
    }
    #p1-d2 {
      top: 52%;
    }
    #prompt-option-3 {
      top: 50%;
      width: 100%;
      height: 13%;
    }
    input[type="range"] {
      width: 80%;
      height: calc(var(--uarr-width)/7);
      /* border: 4px solid yellow; */
      -webkit-appearance: none;
      appearance: none;
      background-color: transparent;
    }
    input[type="range"]::-webkit-slider-runnable-track {
      background: var(--color1-1);
      height: 30%;
      border-radius: calc(var(--uarr-width)/50);
      border: calc(var(--uarr-width)/100) solid var(--color1);
    }
    input[type="range"]::-moz-range-track {
      background: var(--color1-1);
      height: 30%;
      border-radius: calc(var(--uarr-width)/50);
    }
    input[type="range"]::-webkit-slider-thumb {
      -webkit-appearance: none; /* Override default look */
      appearance: none;
      margin-top: -4.5%; /* Centers thumb on the track */
      background-color: var(--color5);
      border: calc(var(--uarr-width)/100) solid var(--color1);
      border-radius: calc(var(--uarr-width)/10);
      height: 300%;
      width: 13%;    
    }
    #p1-p3 {
      top: 75%;
    }
    #p1-link1 {
      top: 84.5%;
      /* left: 38%; */
      left: 55.5%;
      font-size: calc(var(--uarr-width)/17);
    }

  }

</style>