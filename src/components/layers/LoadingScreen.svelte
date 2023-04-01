<!-- SCRIPTS /////////////////////////////////////////////////////////// -->
<script>
  // IMPORTS ---------------------------------------
  import { onMount } from "svelte";
  import pageExit from "../../helpers/pageExit";

  // LOCAL STATE ----------------------------------
  let fade = false;

  // LOAD EVENT ----------------------------------
  onMount(()=> {
    window.addEventListener("load", ()=>{
      pageExit("opening-prompt",2000)
      fade = true;
    });
    return ()=> {
      window.removeEventListener("load", ()=> {
        pageExit("opening-prompt",2000)
        fade = true;
      });
    };
  });
</script>

<!-- MARKUP /////////////////////////////////////////////////////////// -->
<div id="loading-screen" class:fade>
  <div class="animation"></div>
  <div class="animation"></div>
  <p>Loading...</p>
</div>

<!-- STYLES ///////////////////////////////////////////////////////// -->
<style>
  #loading-screen {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: var(--viewport-height);
    background-color: var(--color1);
    transition: opacity 2s ease-out;
  }
  .fade {
    opacity: 0;
  }
  p {
    color: var(--color2-2);
    z-index: 1;
  }
  @keyframes rotate1 {
    from {transform: rotate(0deg);}
    to {transform: rotate(360deg);}
  }
  @keyframes rotate2 {
    from {transform: rotate(0deg);}
    to {transform: rotate(-360deg);}
  }
  .animation {
    position: absolute;
    border-radius: 50%;
    border-style: solid;
    border-color: var(--color2);
  }
  #loading-screen div:nth-of-type(1) {
    animation: rotate1 4s ease-in-out infinite;
  }
  #loading-screen div:nth-of-type(2) {
    animation: rotate2 4s ease-in-out infinite;
  }
  /* PORTRAIT -------------------------------- */
  @media screen and (orientation: portrait) {
    p {
      font-size: calc(var(--uarr-width)/15);
    }
    .animation {
      width: 60%;
      height: 20%;
      border-width: calc(var(--uarr-width)/50);
    }
  }
  /* LANDSCAPE -------------------------------- */
  @media screen and (orientation: landscape) {
    p {
      font-size: calc(var(--uarr-width)/30);
    }
    .animation {
      width: 50%;
      height: 40%;
      border-width: calc(var(--uarr-width)/100);
    }
  }
</style>