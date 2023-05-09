<!-- SCRIPTS ///////////////////////////////////////// -->
<script>
  // IMPORTS --------------------------------------------
  import { audioBkgTrack } from "../../../scripts/audioBkgStore";
  import { animationsOff } from "../../../scripts/animationsStore";
  import viewportOrientationStore 
  from "../../../scripts/viewport/viewportOrientationStore";
  import Animation2 from "../../6-elements/art/Animation2.svelte";
  import StrollAnimation from "../../6-elements/art/StrollAnimation.svelte";
</script>

<!-- MARKUP /////////////////////////////////////////// -->
<div class:portrait={$viewportOrientationStore === "portrait"}>
  {#if $animationsOff || $audioBkgTrack.name === "Background Music"}
    <svg viewBox="0 0 1600 900">
      <defs>
        <pattern id="pattern1" viewBox="0 0 20 20" width="20%" height="10%">
          <path d="M 10,0 L 20,10 L 10,20 L 0,10 Z" fill="hsl(150, 100%, 75%" />
          <line x1="0" y1="10" x2="10" y2="20" stroke="hsl(150, 100%, 68%)" />
          <line x1="10" y1="20" x2="10" y2="0" stroke="hsl(150, 100%, 68%)" />
          <line x1="10" y1="20" x2="7" y2="2" stroke="hsl(150, 100%, 68%)" />
          <line x1="10" y1="20" x2="4" y2="5" stroke="hsl(150, 100%, 68%)" />
          <line x1="10" y1="20" x2="2" y2="8" stroke="hsl(150, 100%, 68%)" />
          <line x1="10" y1="20" x2="13" y2="2" stroke="hsl(150, 100%, 68%)" />
          <line x1="10" y1="20" x2="16" y2="5" stroke="hsl(150, 100%, 68%)" />
          <line x1="10" y1="20" x2="18" y2="8" stroke="hsl(150, 100%, 68%)" />
          <line x1="10" y1="20" x2="20" y2="10" stroke="hsl(150, 100%, 68%)" />
        </pattern>
      </defs>
      <rect x="0" y="0" width="1600" height="900" fill="hsl(150, 100%, 70%)"/>
      <path fill="hsl(150, 100%, 60%)"
        d="M 0,0 Q 0,900 800,450 Q 1600,0 1600,900 H 0 Z"  
      />
      <rect x="0" y="0" width="1600" height="900" fill="url(#pattern1)"/>
    </svg>
  {:else}
    {#if $audioBkgTrack.name === "Stroll"}
      <StrollAnimation />
    {/if}
  {/if}
</div>

<!-- STYLES ////////////////////////////////////////// -->
<style>
svg {
  width: 100%;
}
</style>
