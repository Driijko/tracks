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
@media screen and (orientation: portrait) {
  #this :global(#menu-button.splash) {
    left: 37.5%;
    top: 70%;
    width: 25%;
    height: 12%;
    border-width: calc(var(--uarr-width)/100);
    border-radius: calc(var(--uarr-width)/100);
    padding: 3%;
  }
  #this :global(#menu-button.open:hover) {
    transform: scale(1.2) translate(calc(var(--uarr-width)/-70), calc(var(--uarr-width)/-80));
  }
  #this :global(#menu-button.open) {
    border-radius: 0;
  }
  #this :global(#open-menu h1) {
    padding-top: 4%;
  }
  #this :global(#open-menu h1 span:nth-of-type(1)) {
    font-size: calc(var(--uarr-width)/7);
    left: 5%;
    top: 10%;
    letter-spacing: 0.1rem;
  }
  #this :global(#open-menu h1 span:nth-of-type(2)) {
    font-size: calc(var(--uarr-width)/15);
    left: 75%;
    top: 10%;
  }
  #this :global(#open-menu h1 span:nth-of-type(3)) {
    font-size: calc(var(--uarr-width)/15);
    left: 65%;
    top: 55%;
  }
  #this :global(.tab) {
    border-width: calc(var(--uarr-width)/50);
  }
  #this :global(nav ul) {
    gap: 8%;
  }
  #this :global(nav li) {
    border-top-width: calc(var(--uarr-width)/100);
    border-bottom-width: calc(var(--uarr-width)/100);
    padding: 2%;
    font-size: calc(var(--uarr-width)/10);
  }
  #this :global(#settings) {
    gap: 5%;
  }
  #this :global(#settings > div) {
    border-top-width: calc(var(--uarr-width)/100);
    border-bottom-width: calc(var(--uarr-width)/100);
    padding: 5%;
    font-size: calc(var(--uarr-width)/20);
    height: 19.2%;
  }
  #this :global(#settings > div:nth-of-type(1) label),
  #this :global(#settings > div:nth-of-type(2) label) {
    width: 70%;
  }
  #this :global(#settings > div > div) {
    width: 30%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #this :global(input[type="checkbox"]) {
    width: 50%;
    height: 85%;
    border-width: calc(var(--uarr-width)/100);
    border-radius: calc(var(--uarr-width)/50);
  }
  #this :global(#settings > div:nth-of-type(3)) {
    flex-direction: column;
  }
  #this :global(#settings > div:nth-of-type(3).visible) {
    height: 28%;
    padding: 5%;
    padding-top: 10%;
    border-top-width: calc(var(--uarr-width)/100);
    border-bottom-width: calc(var(--uarr-width)/100);
  }
  #this :global(input[type="range"]) {
    width: 80%;
    height: calc(var(--uarr-width)/7);
  }
  #this :global(input[type="range"]::-webkit-slider-runnable-track) {
    height: 30%;
    border-radius: calc(var(--uarr-width)/50);
    border-width: calc(var(--uarr-width)/100);
  }
  #this :global(input[type="range"]::-moz-range-track) { 
    border-radius: calc(var(--uarr-width)/10);
    height: 25%;
    border-width: calc(var(--uarr-width)/100);
  }
  #this :global(input[type="range"]::-webkit-slider-thumb) {
    margin-top: -3.8%; 
    border-width: calc(var(--uarr-width)/100);
    border-radius: calc(var(--uarr-width)/10);
    height: 300%;
    width: 10.5%;  
  }
  #this :global(input[type="range"]::-moz-range-thumb) {
    border-width: calc(var(--uarr-width)/100);
    border-radius: calc(var(--uarr-width)/10);
    height: 40%;
    width: 9%;   
  }
  #this :global(#menu-tabs) {
    width: 84%;
  }
  #this :global(#menu-tabs li) {
    width: 20%;
    padding-bottom: 2%;
  }
  #this :global(#menu-tabs li button) {
    border-radius: 0% 0% 20% 20%;
  }
  #this :global(#menu-tabs svg) {
    height: 70%;
  }

}
</style>