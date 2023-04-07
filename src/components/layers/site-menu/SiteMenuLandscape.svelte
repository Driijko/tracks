<!-- SCRIPTS //////////////////////////////////////////////// -->
<script>
  // IMPORTS -----------------------------------------
  import SiteMenuContent from "./SiteMenuContent.svelte";
</script>

<!-- MARKUP ////////////////////////////////////////////// -->
<div id="this">
  <SiteMenuContent />
</div>

<!-- STYLES ///////////////////////////////////////////////// -->
<style>
@media screen and (orientation: landscape) {
  #this :global(#menu-button.splash) {
    left: 75%;
    top: 40%;
    width: 13%;
    height: 20%;
    border-width: calc(var(--uarr-width)/200);
    border-radius: calc(var(--uarr-width)/100);
    padding: 2%;
    transition: padding 1s ease-out;
  }
  #this :global(#menu-button.open) {
    padding: 0.5%;
    border-radius: 0;
  }
  #this :global(#open-menu h1 span:nth-of-type(1)) {
    font-size: calc(var(--uarr-width)/20);
    left: 1%;
    top: 5%;
    letter-spacing: 0.1rem;
  }
  #this :global(#open-menu h1 span:nth-of-type(2)) {
    font-size: calc(var(--uarr-width)/55);
    left: 20%;
    top: 15%;
  }
  #this :global(#open-menu h1 span:nth-of-type(3)) {
    font-size: calc(var(--uarr-width)/40);
    left: 19.7%;
    top: 50%; 
  }
  #this :global(.tab) {
    border-width: calc(var(--uarr-width)/200);
  }
  #this :global(nav ul) {
    gap: 10%;
  }
  #this :global(nav li) {
    border-top-width: calc(var(--uarr-width)/500);
    border-bottom-width: calc(var(--uarr-width)/500);
    padding: 0.1%;
  }
  #this :global(nav a) {
    font-size: calc(var(--uarr-width)/40);
  }
  #this :global(#settings) {
    gap: 5%;
  }
  #this :global(#settings > div) {
    border-top-width: calc(var(--uarr-width)/100);
    border-bottom-width: calc(var(--uarr-width)/100);
    font-size: calc(var(--uarr-width)/50);
    height: 20%;
    gap: 5%;
  }
  #this :global(#settings label),
  #this :global(#settings > div > div) {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    /* border: 4px solid blue; */
  }
  #this :global(#settings label) {
    justify-content: flex-end;
  }
  #this :global(input[type="checkbox"]) {
    width: 9.5%;
    height: 65%;
    border-width: calc(var(--uarr-width)/250);
    border-radius: calc(var(--uarr-width)/200);
  }
  #this :global(#settings > div:nth-of-type(3).visible) {
    height: 20%;
    padding: 0%;
    padding-top: 0%;
    border-top-width: calc(var(--uarr-width)/100);
    border-bottom-width: calc(var(--uarr-width)/100);
  }
  #this :global(input[type="range"]) {
    padding-right: 20%;
    width: 48%;
  }
  #this :global(input[type="range"]::-webkit-slider-runnable-track) {
    height: 50%;
    border-radius: calc(var(--uarr-width)/50);
    border-width: calc(var(--uarr-width)/200);
  }
  #this :global(input[type="range"]::-moz-range-track) { 
    border-radius: calc(var(--uarr-width)/10);
    height: 25%;
    border-width: calc(var(--uarr-width)/200);
  }
  #this :global(input[type="range"]::-webkit-slider-thumb) {
    margin-top: -3.9%; 
    border-width: calc(var(--uarr-width)/200);
    border-radius: calc(var(--uarr-width)/10);
    height: 400%;
    width: 10%;  
  }
  #this :global(input[type="range"]::-moz-range-thumb) {
    border-width: calc(var(--uarr-width)/200);
    border-radius: calc(var(--uarr-width)/10);
    height: 60%;
    width: 7.5%;   
  }
  #this :global(#menu-tabs) {
    width: 100%;
  }
  #this :global(#menu-tabs li) {
    width: 15%;
    padding-bottom: 1%;
  }
  #this :global(#menu-tabs li button) {
    border-radius: 0% 0% 50% 50%;
    padding-bottom: 5%;
  }
  #this :global(#menu-tabs svg) {
    height: 80%;
  }
}
</style>