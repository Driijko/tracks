<!-- SCRIPTS ///////////////////////////////////// -->
<script>
  // IMPORTS ------------------------------
  import { fade } from "svelte/transition";
  import { audioVolumeModal } from "../../scripts/modalsStore";
  import { modals } from "../../scripts/modalsStore";
  import AudioBkgVolumeSlider 
  from "../6-elements/interface/audio-bkg/AudioBkgVolumeSlider.svelte";
  import XIcon from "../6-elements/icons/menu/XIcon.svelte";
</script>

<!-- MARKUP ////////////////////////////////// -->
{#if $audioVolumeModal}
<dialog class="uarr-container">
  <div class="background" 
    in:fade="{{duration:200}}"
    out:fade="{{duration:200, delay:300}}"
  >
    <button class="clickable-background" type="button" on:click={()=> modals.close("audioVolume")}>
    </button>
  </div>
  <div class="uarr">
    <div class="container" 
      in:fade="{{duration:200, delay:300}}"
      out:fade="{{duration:200}}"
    >
      <button class="closer-button" type="button" autofocus on:click={()=> modals.close("audioVolume")}>
        <XIcon />
      </button>
      <p>Adjust volume to your preference:</p>
      <AudioBkgVolumeSlider axis="vertical" />
    </div>
  </div>
</dialog>
{/if}

<!-- STYLES //////////////////////////////////// -->
<style>
dialog {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
}
.background {
  background-color: hsla(150, 100%, 70%, 0.8);
}
.clickable-background {
  width: 100%;
  height: 100%;
}
.uarr {
  pointer-events: none;
}
.container {
  position: absolute;
  pointer-events: initial;
  background-color: hsl(150, 100%, 5%);
  color: white;
}
.container :global(.audio-bkg-volume-slider) {
  display: block;
}
.container :global(input[type="range"]::-webkit-slider-runnable-track) {
  background-color: hsl(150, 100%, 0%);
  border-color: white;
}
.container :global(input[type="range"]::-moz-range-track) {
  background-color: hsl(150, 100%, 0%);
  border-color: white;
}
.container :global(input[type="range"]::-webkit-slider-thumb) {
  border-color: hsl(150, 50%, 90%);
  background-color: hsl(150, 100%, 12%);
}
.container :global(input[type="range"]::-moz-range-thumb) {
  border-color: hsl(150, 50%, 90%);
  background-color: hsl(150, 30%, 30%);
}
.closer-button {
  border-color: hsl(150, 100%, 100%);
  border-style: solid;
}
@media screen and (orientation: portrait) {
  .container {
    left: 10%;
    top: 10%;
    width: 80%;
    height: 80%;
    border-radius: calc(var(--uarr1-width)/10);
  }
  .container > :global(*) {
    position: absolute;
  }
  .closer-button {
    width: calc(var(--uarr1-width)/10);
    height: calc(var(--uarr1-width)/10);
    left: 80%;
    top: 3%;
  }
  .closer-button :global(svg) {
    width: 100%;
    height: 100%;
  }
  p {
    line-height: 1.3;
    text-align: center;
    width: 70%;
    left: 15%;
    top: 16%;
    font-size: calc(var(--uarr1-width)/15);
  }
  .container :global(.audio-bkg-volume-slider) {
    top: 59%;
    left: -1%;
    width: calc(var(--uarr1-width)/1.2);
    height: calc(var(--uarr1-width)/7);
  }
  .container :global(input[type="range"]::-webkit-slider-runnable-track) {
    border-style: solid;
    border-width: calc(var(--uarr1-width)/100);
    height: calc(var(--uarr1-width)/15);
    width: calc(var(--uarr1-width)/100);
    border-radius: calc(var(--uarr1-width)/10);
  }
  .container :global(input[type="range"]::-moz-range-track) { 
    border-style: solid;
    border-width: calc(var(--uarr1-width)/100);
    height: calc(var(--uarr1-width)/15);
    width: calc(var(--uarr1-width)/1.5);
    border-radius: calc(var(--uarr1-width)/10);
  }
  .container :global(input[type="range"]::-webkit-slider-thumb) {
    border-style: solid;
    border-width: calc(var(--uarr1-width)/100);
    border-radius: calc(var(--uarr1-width)/10);
    width: calc(var(--uarr1-width)/9);
    height: calc(var(--uarr1-width)/9);
    margin-top: calc(var(--uarr1-width)/-32); 
  }
  .container :global(input[type="range"]::-moz-range-thumb) {
    border-style: solid;
    border-width: calc(var(--uarr1-width)/100);
    border-radius: calc(var(--uarr1-width)/10);
    width: calc(var(--uarr1-width)/9);
    height: calc(var(--uarr1-width)/9);
    margin-top: calc(var(--uarr1-width)/-32); 
  }

}
@media screen and (orientation: landscape) {
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60%;
    left: 20%;
    top: 20%;
    height: 60%;
    border-radius: calc(var(--uarr2-width)/100);
  }
  p {
    font-size: calc(var(--uarr2-width)/60);
  }
  .closer-button {
    position: absolute;
    top: 0%;
    width: calc(var(--uarr2-width)/30);
    height: calc(var(--uarr2-width)/30);
    left: 93%;
    top: 3%;
  }
  .closer-button :global(svg){
    width: 100%;
    height: 100%;
  }
  .container :global(.audio-bkg-volume-slider) {
    top: 55%;
    left: -1%;
    width: calc(var(--uarr2-width)/5);
    height: calc(var(--uarr2-width)/25);
  }
  .container :global(input[type="range"]::-webkit-slider-runnable-track) {
    border-style: solid;
    border-width: calc(var(--uarr2-width)/200);
    height: calc(var(--uarr2-width)/40);
    width: calc(var(--uarr2-width)/100);
    border-radius: calc(var(--uarr2-width)/10);
  }
  .container :global(input[type="range"]::-moz-range-track) { 
    border-style: solid;
    border-width: calc(var(--uarr2-width)/200);
    height: calc(var(--uarr2-width)/70);
    width: calc(var(--uarr2-width)/6);
    border-radius: calc(var(--uarr2-width)/10);
  }
  .container :global(input[type="range"]::-webkit-slider-thumb) {
    border-style: solid;
    border-width: calc(var(--uarr2-width)/200);
    border-radius: calc(var(--uarr2-width)/10);
    width: calc(var(--uarr2-width)/30);
    height: calc(var(--uarr2-width)/30);
    margin-top: calc(var(--uarr2-width)/-110); 
  }
  .container :global(input[type="range"]::-moz-range-thumb) {
    border-style: solid;
    border-width: calc(var(--uarr2-width)/200);
    border-radius: calc(var(--uarr2-width)/10);
    width: calc(var(--uarr2-width)/35);
    height: calc(var(--uarr2-width)/35);
    margin-top: calc(var(--uarr2-width)/-32); 
  }
}
/* HOVER/FOCUS TRANSITIONS ---------------------------------- */
@media (hover:hover) {
  .closer-button:hover, .closer-button:focus-visible {
    background-color: white;
    color: black;
    outline: 10px solid hsla(0, 0%, 100%, 0.5);
    outline-offset: 10px;
  }
  .container :global(input:focus-visible) {
    outline: 10px solid hsla(0, 0%, 100%, 0.5);
  }
}
</style>