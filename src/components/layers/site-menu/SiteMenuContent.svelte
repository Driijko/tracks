<!-- SCRIPTS ////////////////////////////////////////////////// -->
<script>
  // IMPORTS ------------------------------------------------
  import currentPageName from "../../../stores/currentPageName";

  // LOCAL STATE --------------------------------------------
  let menuState = {
    open: false,
    currentTab: "navigation",
  };
</script>

<!-- MARKUP /////////////////////////////////////////////////// -->
<dialog class="uarr-container" open id="menu">
  <div class="uarr">

    <!-- MENU BUTTON ----------------------------------- -->
    <button id="menu-button" type="button" class:splash={$currentPageName === "splash"}>
      <svg id="menu-button-icon" viewBox="0 0 100 100">
        <line id="line1" x1="10" y1="10" x2="90" y2="10" stroke-linecap="round"  stroke-width="20" />
        <line id="line2" x1="10" y1="50" x2="90" y2="50" stroke-linecap="round"  stroke-width="20" />
        <line id="line3" x1="10" y1="50" x2="90" y2="50" stroke-linecap="round"  stroke-width="20" />
        <line id="line4" x1="10" y1="90" x2="90" y2="90" stroke-linecap="round"  stroke-width="20" />
      </svg>
    </button>

    <!-- OPEN MENU --------------------------------------- -->
    {#if menuState.open}
      <div id="open-menu">
        <h1>
          <span>Tracks</span>
          <span>by</span>
          <span>Dreeko</span>
        </h1>
      </div>
    {/if}
  </div>
</dialog>

<!-- STYLES /////////////////////////////////////////////////// -->
<style>
  dialog {
    position: fixed;
    left: 0;
    top: 0;
    background-color: transparent;
    pointer-events: none;
    z-index: 1;
  }
  #menu-button {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color1-1);
    border-color: var(--color2-2);
    border-style: solid;
    pointer-events: initial;
  }
  #menu-button-icon {
    stroke: var(--color2-2);
    width: 100%;
    height: 100%;
  }
</style>