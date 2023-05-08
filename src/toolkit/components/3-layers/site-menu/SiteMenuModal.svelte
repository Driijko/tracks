<!-- SCRIPTS /////////////////////////////////////// -->
<script>
  import SiteMenuPortrait from "./SiteMenuPortrait.svelte";
  import SiteMenuLandscape from "./SiteMenuLandscape.svelte";
  import viewportOrientationStore from "../../../scripts/viewport/viewportOrientationStore";
  import { siteMenuModal } from "../../../scripts/modalsStore";
  import { resizing } from "../../../scripts/viewport/resizeStore";
</script>

<!-- MARKUP ///////////////////////////////////////////// -->
{#if $resizing === false}
  {#if $viewportOrientationStore === "portrait"}
    <SiteMenuPortrait />
  {:else}
    <SiteMenuLandscape />
  {/if}
{/if}