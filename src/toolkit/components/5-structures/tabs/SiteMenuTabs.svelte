<!-- SCRIPTS ///////////////////////////////////// -->
<script>
  // IMPORTS ------------------------------------
  import TabTransition from "./TabTransition.svelte";
  import CompassIcon from "../../6-elements/icons/menu/CompassIcon.svelte";
  import GearIcon from "../../6-elements/icons/menu/GearIcon.svelte";
  import SiteSettings from "../SiteSettings.svelte";
  import Nav from "../Nav.svelte";
  import { siteMenuTab, newTab } from "../../../scripts/siteMenuStore";
  import viewportOrientationStore
  from "../../../scripts/viewport/viewportOrientationStore";

</script>

<!-- MARKUP /////////////////////////////////// -->
<div class="tab-content">

  {#if $siteMenuTab.current === "navigation"}
    <TabTransition>
      <Nav />
    </TabTransition>
  {:else if $siteMenuTab.current === "settings"}
    <TabTransition>
      <SiteSettings />
    </TabTransition>
  {/if}
</div>

<ul class="site-menu-tab-buttons">
  <li>
    <button class:selected={$siteMenuTab.current === "navigation"} 
      on:click={()=> newTab("navigation")}>
      <CompassIcon />
    </button>
  </li>
  <li>
    <button class:selected={$siteMenuTab.current === "settings"} 
      on:click={()=> newTab("settings")}>
      <GearIcon />
    </button>
  </li>
</ul>

<!-- STYLES /////////////////////////////////// -->
<style>
button {
  display: block;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0% 0% 50% 50%;
}
button.selected {
  background-color: hsl(150, 100%, 50%);
}
button.selected :global(svg path) {
  fill: white;
}
button :global(svg) {
  height: 100%;
}
button :global(svg path) {
  fill: hsl(0, 0%, 15%);
}
@media (hover:hover) {
  button:not(.selected):hover {
    transition-property: transform;
    transition-duration: 1s;
    transition-timing-function: ease-out;
  }
}
</style>