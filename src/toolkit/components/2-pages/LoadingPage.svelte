<!-- SCRIPTS /////////////////////////////////////////////// -->
<script>
  // IMPORTS -----------------------------------------------
  import { onMount } from "svelte";
  import { setPageExit, newPage } from "../../scripts/currentPageStore";

  // STATE ---------------------------------------
  let fade = false;

  // PAGE EXIT ----------------------------------
  function pageExit() {
    fade = true;
  }
  setPageExit(pageExit, 2000);

  // EVENT HANDLERS --------------------------
  function handleLoad(e) {
    newPage("opening-prompt");
  };
  
  // LOAD EVENT ----------------------------------
  onMount(()=> {
    window.addEventListener("load", handleLoad);
    
    return ()=> {
      window.removeEventListener("load", handleLoad);
    };
  });
</script>

<!-- MARKUP /////////////////////////////////////////////////////////// -->
<div class="loading-page vp" class:fade>
  <div></div>
  <div></div>
  <p>Loading...</p>
</div>

<!-- STYLES ///////////////////////////////////////////////////////// -->
<style>
.loading-page {
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 2s ease-out;
  font-family: Arial, Helvetica, sans-serif;
  background-color: var(--color1);
}
.fade {
  opacity: 0;
}
p {
  z-index: 1;
  color: var(--color2);
}
.loading-page div {
  position: absolute;
  border-radius: 50%;
  border-style: solid;
  border-color: var(--color1-1);
  border-width: 1vw;
  background-color: var(--color1-2);
}
@keyframes rotate1 {
  from {transform: rotate(0deg);}
  to {transform: rotate(360deg);}
}
@keyframes rotate2 {
  from {transform: rotate(0deg);}
  to {transform: rotate(-360deg);}
}
.loading-page div:nth-of-type(1) {
  animation: rotate1 4s ease-in-out infinite;
}
.loading-page div:nth-of-type(2) {
  animation: rotate2 4s ease-in-out infinite;
}
/* PORTRAIT -------------------------------- */
@media screen and (orientation: portrait) {
  p {
    font-size: calc(var(--uarr-width)/15);
  }
  .loading-page div {
    width: 40%;
    height: 60%;
    border-width: calc(var(--uarr-width)/50);
  }
}
/* LANDSCAPE -------------------------------- */
@media screen and (orientation: landscape) {
  p {
    font-size: calc(var(--uarr-width)/30);
  }
  .loading-page div {
    width: 50%;
    height: 40%;
    border-width: calc(var(--uarr-width)/100);
  }
}
</style>