<!-- SCRIPTS ////////////////////////////////////////////////////// -->
<script>

  // IMPORTS --------------------------------------------
  import { onMount } from "svelte";
  import { fade, fly } from 'svelte/transition';
  import { gsap } from "gsap";
  import fullscreen from "../helpers/fullscreen.js";
  import { backgroundAudio, pageExit, fullscreenMenuOpen, currentPageName, orientation }    from "../stores/site.js";

  // ANIMATION -----------------------------------------
  let animationDuration = 0.5;
  let tl;
  onMount(()=> {
    tl = gsap.timeline({paused: true});
    tl.to(["#line1", "#line2"], {
      duration: animationDuration,
      strokeWidth: "15",
      attr: {
        x1: "20",
        y1: "20",
        x2: "80",
        y2: "80",
      },
      ease: "linear"
    }, 0);
    tl.to(["#line3","#line4"],  {
      duration: animationDuration,
      strokeWidth: "15",
      attr: {
        x1: "20",
        y1: "80",
        x2: "80",
        y2: "20",
      },
      ease: "linear"
    }, 0);
    tl.to("#menu", {
      duration: animationDuration,
      left: 0,
      top: 0,
      width: "100%",
      height: "100%",
      ease: "linear"
    },0);
    if (window.innerHeight >= window.innerWidth) {
      tl.to("#menu-button", {
        duration: animationDuration,
        ease: "linear",
        width: "16%",
        height: "11%",
        top: "89%",
        left: "84%",
      }, 0);
      tl.to("#menu-icon", {
        width: "100%",
      }, 0);
    } else {
      tl.to("#menu-button", {
        duration: animationDuration,
        ease: "linear",
        left: "95%",
        top: "0%",
        width: "5%",
        height: "10%"
      }, 0);
    }


    if ($fullscreenMenuOpen) {
      animationDuration = 0;
      tl.play();
      animationDuration = 0.5;
    }
  });

  // LOCAL STATE ---------------------------------------
  let menuState;
  if ($fullscreenMenuOpen) {
    menuState = {
      open: true,
      currentTab: "settings",
    }
  } else {
    menuState = {
      open: false,
      currentTab: "navigation",
    }
  }

  // EVENT HANDLERS ------------------------------------
  $: if (menuState.open === true && menuState.currentTab === "settings") {
    fullscreenMenuOpen.toggleFullscreenMenu(true);
  } else {
    fullscreenMenuOpen.toggleFullscreenMenu(false);
  }
  function handleMenuButtonClick() {
    if (menuState.open) {
      tl.reverse();
    } else {
      tl.play();
    }
    menuState.open = !menuState.open;
  }
  function toggleFullscreen(e) {
    fullscreen(e.target.checked);
  }
  function toggleBackgroundAudio(e) {
    backgroundAudio.pause(!e.target.checked)
  }

</script>

<!-- MARKUP ////////////////////////////////////////////////////// -->
<dialog id="menu" open 
  class:splash={$currentPageName === "splash"}
  class:closed={!(menuState.open)}
  class:open={menuState.open}
  transition:fade="{$orientation === "portrait" ? {delay: 7000, duration: 2000}: {delay:13000, duration:2000}}"
>
  <button id="menu-button" type="button" on:click={handleMenuButtonClick}>
    <svg id="menu-icon" viewBox="0 0 100 100">
      <line id="line1" x1="10" y1="10" x2="90" y2="10" stroke-linecap="round"  stroke-width="20" />
      <line id="line2" x1="10" y1="50" x2="90" y2="50" stroke-linecap="round"  stroke-width="20" />
      <line id="line3" x1="10" y1="50" x2="90" y2="50" stroke-linecap="round"  stroke-width="20" />
      <line id="line4" x1="10" y1="90" x2="90" y2="90" stroke-linecap="round"  stroke-width="20" />
    </svg>
  </button>

  {#if menuState.open}
    <div id="open-menu" transition:fly="{{ x: 200, duration: 1000 }}">
      <h1>
        <span>Tracks</span>
        <span>by</span>
        <span>Dreeko</span>
      </h1>
      {#if menuState.currentTab === "navigation"}
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
      {:else if menuState.currentTab === "settings"}
        <section class="tab" transition:fly="{{ x: 200, duration: 1000 }}">
          <div>
            <label for="fullscreen" >Enter/Exit Fullscreen</label>
            <input id="fullscreen" type="checkbox"
              on:click={toggleFullscreen}
              checked={document.fullscreenElement}
             />
          </div>
          <div>
            <label for="audio">Turn Audio On/Off</label>
            <input id="audio" type="checkbox"
              on:click={toggleBackgroundAudio}
              checked={$backgroundAudio.paused === false}
            />
          </div>
          {#if !($backgroundAudio.paused)}
            <label for="volume">Adjust volume to your preference:</label>
            <input type="range" min="0.0" max="1.0" step="0.01" 
              bind:value={$backgroundAudio.volume}
            />
          {/if}
        </section>
      {/if}
  
      <ul id="menu-tabs">
        <li>
          <button type="button"
            class:selected={menuState.currentTab === "navigation"}
            on:click={()=> menuState.currentTab = "navigation"}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <title>navigation</title>
              <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm306.7 69.1L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/>
              </svg>
          </button>
        </li>
        <li>
          <button type="button"
            class:selected={menuState.currentTab === "settings"}
            on:click={()=> menuState.currentTab = "settings"}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <title>settings</title>
              <path d="M481.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-30.9 28.1c-7.7 7.1-11.4 17.5-10.9 27.9c.1 2.9 .2 5.8 .2 8.8s-.1 5.9-.2 8.8c-.5 10.5 3.1 20.9 10.9 27.9l30.9 28.1c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-39.7-12.6c-10-3.2-20.8-1.1-29.7 4.6c-4.9 3.1-9.9 6.1-15.1 8.7c-9.3 4.8-16.5 13.2-18.8 23.4l-8.9 40.7c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-8.9-40.7c-2.2-10.2-9.5-18.6-18.8-23.4c-5.2-2.7-10.2-5.6-15.1-8.7c-8.8-5.7-19.7-7.8-29.7-4.6L69.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l30.9-28.1c7.7-7.1 11.4-17.5 10.9-27.9c-.1-2.9-.2-5.8-.2-8.8s.1-5.9 .2-8.8c.5-10.5-3.1-20.9-10.9-27.9L8.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l39.7 12.6c10 3.2 20.8 1.1 29.7-4.6c4.9-3.1 9.9-6.1 15.1-8.7c9.3-4.8 16.5-13.2 18.8-23.4l8.9-40.7c2-9.1 9-16.3 18.2-17.8C213.3 1.2 227.5 0 242 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l8.9 40.7c2.2 10.2 9.4 18.6 18.8 23.4c5.2 2.7 10.2 5.6 15.1 8.7c8.8 5.7 19.7 7.7 29.7 4.6l39.7-12.6c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM242 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"/>
            </svg>
          </button>
        </li>
      </ul>
    </div>
  {/if}
</dialog>

<!-- STYLE /////////////////////////////////////////////////// -->
<style>
  dialog {
    overflow: hidden;
    position: absolute;
  }
  #menu-button {
    position: absolute;
    top: 0;
    left: 0%;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color1);
    z-index: 1;
  }
  #menu-icon {
    height: 90%;
    stroke: var(--color4);
  }
  #open-menu {
    height: 100%;
    background-color: var(--color1);
  }
  h1 {
    height: 10%;
    background-color: var(--color2);
    padding-top: 4%;
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
    gap: 4rem;
    color: var(--color2-2);
  }
  nav li {
    border-color: var(--color2);
    border-style: solid;
    background-color: var(--color1-1);
    width: 100%;
    text-align: center;
    padding: 2%;
  }
  #menu-tabs {
    position: absolute;
    display: flex;
    justify-content: space-evenly;
    width: 84%;
    height: 11%;
    bottom: 0%;
  }
  #menu-tabs li {
    height: 100%;
    width: 20%;
    padding-bottom: 2%;
  }
  #menu-tabs li button {
    height: 100%;
    width: 100%;
    border-radius: 0% 0% 20% 20%;

    background-color: var(--color1-1);
  }

  #menu-tabs li button.selected {
    background-color: var(--color2);
  }
  #menu-tabs li button svg {
    width: 100%;
    height: 100%;
  }
  #menu-tabs li button svg path {
    fill: var(--color1-2);
  }
  #menu-tabs li button.selected svg path {
    fill: var(--color2-2);
  }
  /* SPLASH VERSION ---------------- */
  dialog.splash.closed {
    border-radius: 5%;
  }
  dialog.splash #menu-button {
    background-color: var(--color1-1);
    border-radius: 5%;
    border-color: var(--color2-2);
    border-style: solid;
  }
  dialog.splash #menu-icon {
    width: 60%;
    stroke: var(--color2-2);
  }
  dialog.open #menu-button {
    border-color: var(--color2);
    border-radius:0;
    background-color: var(--color1-2);
  }
  /* PORTRAIT ------------------- */
  @media screen and (orientation: portrait) {
    dialog {
      width: 100.1%;
      height: 8%;
      left: -0.1%;
      bottom: 0%;
      background-color: var(--color1);
    }
    #menu-icon {
      width: 9%;
    }
    dialog.splash {
      width: 20%;
      height: 10%;
      left: 40%;
      top: 70%;
      background-color: transparent;
    }
    dialog.splash #menu-button {
      border-width: calc(var(--uarr-width)/100);
    }
    dialog.open #menu-button {
      border-width: calc(var(--uarr-width)/80);
      border-top-width: 0;
    }
    dialog.splash #menu-icon {
      width: 60%;
    }

    h1 span:nth-of-type(1) {
      font-size: calc(var(--uarr-width)/7);
      left: 5%;
      top: 10%;
      letter-spacing: 0.1rem;
    }
    h1 span:nth-of-type(2) {
      font-size: calc(var(--uarr-width)/15);
      left: 75%;
      top: 10%;
    }
    h1 span:nth-of-type(3) {
      font-size: calc(var(--uarr-width)/15);
      left: 65%;
      top: 55%;
    }
    .tab {
      border-width: calc(var(--uarr-width)/50);
    }
    nav {
      font-size: calc(var(--uarr-width)/10);
    }
    nav li {
      border-top-width: calc(var(--uarr-width)/100);
      border-bottom-width: calc(var(--uarr-width)/100);
    }
    #menu-tabs {
      width: 84%;
    }
    /* #menu-tabs li button {
      border-left-width: cal(var(--uarr-width)/100);
      border-right-width: cal(var(--uarr-width)/100);
      border-top-width: 0;
      border-bottom-width: 0;
    } */
  }
  /* LANDSCAPE ------------------- */
  @media screen and (orientation: landscape) {
    dialog {
      width: 6%;
      height: 10%;
      top: 0%;
      left: 94%;
    }
    dialog.splash {
      width: 8%;
      height: 13%;
      top: 43%;
      left: 77.3%;
    }
    #menu-icon {
      width: 50%;
    }
    #menu-tabs {
      width: 100%;
    }
  }
  /* HIGHLIGHTING ------------------------------ */
  @media (hover:hover) {
    dialog.splash {
      transition-property: transform, box-shadow;
      transition-timing-function: ease-out;
      transition-duration: 1s;
    }  
    dialog.splash.closed:hover, dialog.splash.closed:focus-within {
      transform: scale(1.2) translateY(5%);
      box-shadow:0px 0px 1000px var(--color2-2), 0px 0px 1000px var(--color2-2);
    }
    dialog.splash #menu-button {
      transition-property: background-color;
      transition-timing-function: ease-in-out;
      transition-duration: 1s;
    } 
    dialog.splash #menu-button:hover, dialog.splash #menu-button:focus {
      background-color: var(--color1);
      border-color: var(--color1);
    } 
    dialog.splash line {
      transition: stroke 1s ease-in-out;
    }
    dialog.splash:hover line, dialog.splash #menu-button:focus line {
      stroke: var(--color2);
    }
  }
</style>