<!-- SCRIPTS ///////////////////////////////////////// -->
<script>
  // IMPORTS --------------------------------------------
  import { audioBkgTrack } from "../../../scripts/audioBkgStore";
  import { animationsOff } from "../../../scripts/animationsStore";
  import viewportOrientationStore 
  from "../../../scripts/viewport/viewportOrientationStore";
  import Animation2 from "../../6-elements/art/Animation2.svelte";
  import SwimmingAnimation from "../../6-elements/art/SwimmingAnimation.svelte";
  import FadeAnimation from "../../6-elements/art/FadeAnimation.svelte";
  import PrismAnimation from "../../6-elements/art/prism-animation/PrismAnimation.svelte";
</script>

<!-- MARKUP /////////////////////////////////////////// -->
<div class:portrait={$viewportOrientationStore === "portrait"}>
  {#if $animationsOff || $audioBkgTrack.name === "Background Music"}
    <svg viewBox="0 0 1600 900">
      <defs>
        <linearGradient id="gradient1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="hsl(150, 100%, 50%)" />
          <stop offset="80%" stop-color="hsl(40, 100%, 80%)" />
        </linearGradient>
        <pattern id="pattern1" viewBox="0 0 100 100" width="6.25%" height="11.11%">
          <path stroke="hsla(40, 100%,80%, 0.5)" stroke-width="10" 
            fill="hsla(150, 100%, 80%, 0)" stroke-linecap="round" stroke-linejoin="round"
            d="M 50,0 Q 0,50 50,100 Q 100,50 50,0 Q 50,50 0,50"
          />
          <path stroke="hsla(40, 100%,80%, 0.5)" stroke-width="10" 
            fill="hsla(150, 100%, 50%, 0)" stroke-linecap="round" stroke-linejoin="round"
            d="M 50,100 Q 50,50 100,50"
          />
        </pattern>
      </defs>
      <rect x="0" y="0" width="1600" height="900" fill="url(#gradient1)"/>
      <rect x="0" y="0" width="1600" height="900" fill="url(#pattern1)"/>
    </svg>
  {:else}
    {#if $audioBkgTrack.name === "Swimming"}
      <SwimmingAnimation />
    {:else if $audioBkgTrack.name === "Fade"}
      <FadeAnimation />
    {:else if $audioBkgTrack.name === "Prism"}
      <PrismAnimation />
    {/if}
  {/if}
</div>

<!-- STYLES ////////////////////////////////////////// -->
<style>
svg {
  width: 100%;
}
</style>
