<!-- SCRIPTS ////////////////////////////////////// -->
<script>
  // IMPORTS -----------------------------------------
  import shift from "../../../scripts/transitions/shift";
  import { siteMenuModal } from "../../../scripts/modalsStore";
  import SiteMenuBreadcrumbs from "../../5-structures/SiteMenuBreadcrumbs.svelte";
  import SiteMenuTabs from "../../5-structures/tabs/SiteMenuTabs.svelte";
  import InterfaceTray from "../../4-layouts/partial/InterfaceTray.svelte";

</script>

<!-- MARKUP /////////////////////////////////////// -->
<div id="this">
  <InterfaceTray />

  {#if $siteMenuModal}
  <div transition:shift="{{y:window.innerHeight,duration:1000}}">
  
    <header>
      <h1>
        <span>TRACKS</span> 
        <span>by</span> 
        <span>DREEKO</span>
      </h1>
    </header>
  
    <SiteMenuBreadcrumbs />
  
    <SiteMenuTabs />
  </div>
  {/if}
</div>


<!-- STYLES /////////////////////////////////// -->
<style>
div {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
/* INTERFACE TRAY --------------------------- */
#this :global(.interface-tray button) {
  color: white;
}
#this :global(.interface-tray .animations-button.off) {
  color: hsl(0, 0%, 65%);
}
/* HEADER ----------------------------------- */
header {
  background-color: hsl(0, 0%, 0%);
  color: hsl(40, 100%, 50%);
}
h1 {
  font-family: "Tenor Sans", sans-serif;
  font-weight: 400;
}
h1 span:nth-of-type(2) {
  font-style: italic;
}
/* BREADCRUMBS --------------------------------- */
#this :global(.site-menu-breadcrumbs) {
  background-color: hsl(40, 100%, 50%);
  color: black;
}
/* TAB CONTENT ---------------------------------- */
#this :global(.tab-content) {
  background-color: hsl(150, 100%, 20%);
  border-color: hsl(150, 100%, 40%);
}
#this :global(.tab-content > *) {
  background-color: hsl(150, 100%, 50%);
}
/* NAV ------------------------------------------- */
#this :global(nav a) {
  color: hsl(150, 100%, 10%);
}
/* SITE SETTINGS ---------------------------------- */
#this :global(.site-settings-option) {
  border-color: hsl(150, 100%, 40%);
  background-color: hsl(150, 100%, 70%);
}
#this :global(input[type="checkbox"]) {
  border-color: hsl(150, 100%, 30%);
  background-color: hsl(150, 100%, 15%);
  transition-property: background-color;
  transition-timing-function: ease-out;
  transition-duration: 1s;
}
#this :global(input[type="checkbox"]:checked) {
  border-color: hsl(150, 100%, 30%);
  background-color: hsl(40, 100%, 60%);
}
#this :global(.volume-adjust) {
  border-color: hsl(150, 100%, 40%);
  background-color: hsl(150, 100%, 70%);
}
#this :global(input[type="range"]::-webkit-slider-runnable-track) {
  background-color: hsl(150, 100%, 10%);
  border-color: hsl(150, 100%, 25%);
}
#this :global(input[type="range"]::-webkit-slider-thumb) {
  background-color: hsl(150, 100%, 50%);
  border-color: hsl(150, 100%, 25%);
}
/* TAB BUTTONS -------------------------------------- */
#this :global(.site-menu-tab-buttons) {
  border-color: hsl(150, 100%, 40%);
}
#this :global(.site-menu-tab-buttons button) {
  background-color: hsl(150, 50%,20%);
}
#this :global(.site-menu-tab-buttons button path) {
  fill: hsl(150, 40%, 40%);
}
#this :global(.site-menu-tab-buttons button.selected) {
  background-color: hsl(150, 100%, 40%);
}
#this :global(.site-menu-tab-buttons button.selected path) {
  fill: hsl(150, 100%, 0%);
}
/* HOVER/FOCUS TRANSITIONS -------------------------------- */
@media (hover:hover) {
  /* INTERFACE TRAY ------------------------------------ */
  #this :global(.interface-tray button svg) {
    transition-property: transform;
    transition-timing-function: ease-out;
    transition-duration: 0.3s;   
  }
  #this :global(.interface-tray button:hover svg) {
    transform: scale(1.3);
  }
  /* TAB BUTTONS ------------------------------------- */
  #this :global(.site-menu-tab-buttons button) {
    transition-property: background-color;
    transition-timing-function: ease-out;
    transition-duration: 0.5s;
  }
  #this :global(.site-menu-tab-buttons button path) {
    transition-property: fill;
    transition-timing-function: ease-out;
    transition-duration: 0.5s;
  }
  #this :global(.site-menu-tab-buttons button:not(.selected):hover),
  #this :global(.site-menu-tab-buttons button:not(.selected):focus-visible) {
    background-color: hsl(150, 100%, 5%);
  }
  #this :global(.site-menu-tab-buttons button:not(.selected):hover path),
  #this :global(.site-menu-tab-buttons button:not(.selected):focus-visible path) {
    fill: hsl(150, 40%, 70%);
  }
}
</style>