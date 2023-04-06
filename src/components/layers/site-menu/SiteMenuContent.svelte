<!-- SCRIPTS ////////////////////////////////////////////////// -->
<script>
  // IMPORTS ------------------------------------------------
  import currentPageName from "../../../stores/currentPageName";
  import { fade, fly } from 'svelte/transition';
  import pageExit from "../../../helpers/pageExit";


  // LOCAL STATE --------------------------------------------
  let menuState = {
    open: false,
    currentTab: "navigation",
  };

  // EVENT HANDLERS ----------------------------------------------
  function handleMenuButtonClick(e) {
    menuState.open = !(menuState.open);
  }
</script>

<!-- MARKUP /////////////////////////////////////////////////// -->
<dialog class="uarr-container" open id="menu">
  <div class="uarr">

    <!-- MENU BUTTON ----------------------------------- -->
    <button id="menu-button" type="button" class:splash={$currentPageName === "splash"} on:click={handleMenuButtonClick}>
      <svg id="menu-button-icon" viewBox="0 0 100 100">
        <line id="line1" x1="10" y1="10" x2="90" y2="10" stroke-linecap="round"  stroke-width="20" />
        <line id="line2" x1="10" y1="50" x2="90" y2="50" stroke-linecap="round"  stroke-width="20" />
        <line id="line3" x1="10" y1="50" x2="90" y2="50" stroke-linecap="round"  stroke-width="20" />
        <line id="line4" x1="10" y1="90" x2="90" y2="90" stroke-linecap="round"  stroke-width="20" />
      </svg>
    </button>

    <!-- OPEN MENU --------------------------------------- -->
    {#if menuState.open}
      <div id="open-menu" transition:fly="{{x:200,duration:1000}}">

        <!-- MENU TITLE ----------------- -->
        <h1>
          <span>Tracks</span>
          <span>by</span>
          <span>Dreeko</span>
        </h1>

        <!-- TABS ------------------------ -->
        {#if menuState.currentTab === "navigation"}

          <!-- NAV ---------------- -->
          <nav class="tab" transition:fly="{{ x: 200, duration: 1000 }}">
            <ul>
              <li>
                <a href={null} 
                  on:click|preventDefault={()=> pageExit("page1")}
                >Music</a>
              </li>
              <li>
                <a href={null} 
                  on:click|preventDefault={()=> pageExit("page2")}
                >About</a>
              </li>
              <li>
                <a href={null} 
                  on:click|preventDefault={()=> pageExit("page3")}
                >Contact</a>
              </li>
            </ul>
          </nav>

        {/if}
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
  #open-menu {
    position: absolute;
    left: -0.1%;
    width: 100.2%;
    height: 100%;
    background-color: var(--color1);
  }
  h1 {
    background-color: var(--color2);
    color: var(--color1-2);
    position: relative;
  }
  h1 span {
    position: absolute;
  }
  h1 span:nth-of-type(1) {
    font-family: "Permanent Marker", cursive;
  }
  h1 span:nth-of-type(2) {
    font-family: "Dancing Script", cursive;
  }
  h1 span:nth-of-type(3) {
    font-family: "Julius Sans One", sans-serif;
  }
  .tab {
    position: absolute;
    top: 10%;
    height: 79%;
    width: 100%;
    background-color: var(--color1-2);
    border-style: solid;
    border-color: var(--color2);
  }
  nav ul {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    align-items: center;
  }
  nav li {
    border-color: var(--color2);
    border-style: solid;
    background-color: var(--color1-1);
    width: 100%;
    font-family: "Bungee Outline";
    color: var(--color2-2);
    letter-spacing: calc(var(--uarr-width)/100);
  }
  nav a {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>