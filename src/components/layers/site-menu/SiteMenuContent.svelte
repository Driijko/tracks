<!-- SCRIPTS ////////////////////////////////////////////////// -->
<script>
  // IMPORTS ------------------------------------------------
  import currentPageName from "../../../stores/currentPageName";
</script>

<!-- MARKUP /////////////////////////////////////////////////// -->
<dialog class="uarr-container" open id="menu">
  <div class="uarr">
    <button id="menu-button" type="button" class:splash={$currentPageName === "splash"}>
      <svg id="menu-button-icon" viewBox="0 0 100 100">
        <line id="line1" x1="10" y1="10" x2="90" y2="10" stroke-linecap="round"  stroke-width="20" />
        <line id="line2" x1="10" y1="50" x2="90" y2="50" stroke-linecap="round"  stroke-width="20" />
        <line id="line3" x1="10" y1="50" x2="90" y2="50" stroke-linecap="round"  stroke-width="20" />
        <line id="line4" x1="10" y1="90" x2="90" y2="90" stroke-linecap="round"  stroke-width="20" />
      </svg>
    </button>
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
  }
  #menu-button-icon {
    stroke: var(--color2-2);
  }
</style>