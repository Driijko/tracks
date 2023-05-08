<!-- SCRIPTS /////////////////////////////////////// -->
<script>
  import SiteMenuPortrait from "./SiteMenuPortrait.svelte";
  import SiteMenuLandscape from "./SiteMenuLandscape.svelte";
  import viewportOrientationStore from "../../../scripts/viewport/viewportOrientationStore";
  import { siteMenuModal } from "../../../scripts/modalsStore";
  import { resizing } from "../../../scripts/viewport/resizeStore";
</script>

<!-- MARKUP ///////////////////////////////////////////// -->

<!-- {#if $resizing === false }
  <div class="uarr-container" class:open={$siteMenuModal}>
    <div class="uarr">
      {#if $viewportOrientationStore === "portrait"}
        <SiteMenuPortrait />
      {:else}
        <SiteMenuLandscape />
      {/if}
    </div>
  </div>
{/if} -->

{#if $viewportOrientationStore === "portrait"}
  <SiteMenuPortrait />
{:else}
  <SiteMenuLandscape />
{/if}