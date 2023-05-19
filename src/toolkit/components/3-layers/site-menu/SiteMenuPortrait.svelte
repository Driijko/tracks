<!-- SCRIPTS ////////////////////////////////// -->
<script>
  import SiteMenuContent from "./SiteMenuContent.svelte";
  import { siteMenuModal } from "../../../scripts/modalsStore";
</script>

<!-- MARKUP /////////////////////////////////////// -->
<div class="uarr-container site-menu" class:open={$siteMenuModal}>
  <div id="this" class="uarr">
    <SiteMenuContent />
  </div>
</div>

<!-- STYLE //////////////////////////////////////// -->
<style>
@media screen and (orientation: portrait) {
.uarr-container.open {
  background-image: linear-gradient(0deg,
  hsl(40, 100%, 35%), hsl(150, 100%, 35%));
}
/* INTERFACE TRAY ------------------------------ */
#this :global(.interface-tray) {
  transition-property: background-color, left, width;
  transition-timing-function: ease-out;
}
#this :global(.interface-tray.closed) {
  transition-duration: 0.5s;
}
#this :global(.interface-tray.open) {
  transition-duration: 1s;
}
#this :global(.interface-tray.open) {
  background-color: hsl(150, 100%, 40%);
}
#this :global(.interface-tray.open svg) {
  border-color: hsl(40, 100%,40%);
  background-color: hsl(40, 100%, 50%);
}
#this :global(.interface-tray.open line) {
  stroke: hsl(40, 100%, 0%);
}
#this :global(.interface-tray.closed) {
  background-color: hsl(150, 100%, 0%);
}
#this :global(.interface-tray) {
  height: 8%;
  justify-content: center;
  gap: 8%;
}
#this :global(.interface-tray.closed) {
  width: 100%;
  top: 92%;
  left: 0%;
  height: 8%;
}
#this :global(.interface-tray li) {
  min-width: calc(var(--uarr1-width)/8);
  height: 100%;
}
#this :global(.interface-tray button) {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
#this :global(.interface-tray svg) {
  width: calc(var(--uarr1-width)/12);
  height: calc(var(--uarr1-width)/12);
}
#this :global(.interface-tray.open) {
  width: 15%;
  left: 85%;
  top: 91%;
  height: 9%;
}
#this :global(.interface-tray.open button) {
  padding-top: calc(var(--uarr1-width)/40);
}
#this :global(.interface-tray.open svg) {
  width: calc(var(--uarr1-width)/10);
  height: calc(var(--uarr1-width)/10);
  padding: calc(var(--uarr1-width)/70);
  border-width: calc(var(--uarr1-width)/100);
  border-style: solid;
  border-radius: calc(var(--uarr1-width)/100);
}
#this :global(.interface-tray.splash) {
  transition-property: top;
  transition-duration: 0.89s;
  transition-timing-function: ease-out;
}
#this :global(.interface-tray.closed.splash) {
  top: 300%;
}
/* HEADER ------------------------------------------ */
#this :global(header) {
  height: 8%;
  padding-left: calc(var(--uarr1-width)/70);
  display: flex;
  align-items: center;
}
#this :global(h1) {
  word-spacing: calc(var(--uarr1-width)/100);
  display: flex;
  align-items: center;
  gap: calc(var(--uarr1-width)/30);
}
#this :global(h1 span:nth-of-type(1)) {
  font-size: calc(var(--uarr-width)/16);
}
#this :global(h1 span:nth-of-type(2)) {
  font-size: calc(var(--uarr1-width)/22);
}
#this :global(h1 span:nth-of-type(3)) {
  font-size: calc(var(--uarr1-width)/16);
}
/* BREADCRUMBS ---------------------------------- */
#this :global(.site-menu-breadcrumbs) {
  padding-left: calc(var(--uarr1-width)/70);
  padding-top: calc(var(--uarr1-width)/200);
  height: 4%;
  font-size: calc(var(--uarr-width)/18);
  overflow-x: scroll;
  scrollbar-width: 0;
  font-weight: 400;
}
/* TAB CONTENT ------------------------------------ */
#this :global(.tab-content) {
  height: 79%;
  border-width:calc(var(--uarr-width)/40);
  border-style: solid; 
  border-bottom: none;
  /* border-top: none; */
}
#this :global(nav), #this :global(.site-settings) {
  height: 100%;
}
/* NAV ---------------- */
#this :global(nav ul) {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: calc(var(--uarr-width)/13);
  gap: 10%;
  width: 100%;
}
#this :global(nav li) {
  text-align: center;
  line-height: 1.3;
  width: 100%;
  display: flex;
  justify-content: center;
}
#this :global(nav a) {
  border-width: calc(var(--uarr1-width)/200);
  border-style: solid;
  border-color: hsl(150, 100%, 60%);
  display: block;
  padding: calc(var(--uarr1-width)/100) calc(var(--uarr1-width)/50);
  letter-spacing: calc(var(--uarr1-width)/100);
  border-radius: calc(var(--uarr1-width)/100);
}
#this :global(nav li.selected) {
  font-size: calc(var(--uarr-width)/10);
}
/* SETTINGS ---------------- */
#this :global(.site-settings) {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: calc(var(--uarr-width)/10);
}
#this :global(.site-settings-option) {
  border-top-style: solid;
  border-top-width: calc(var(--uarr-width)/30);
  border-bottom-style: solid;
  border-bottom-width: calc(var(--uarr-width)/30);
  font-size: calc(var(--uarr-width)/15);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 20%;
  padding: 3%;
}
#this :global(.site-settings input[type="checkbox"]) {
  border-width: calc(var(--uarr-width)/50);
  border-style: solid;
  width: calc(var(--uarr-width)/7);
  height: calc(var(--uarr-width)/7);
}
#this :global(.site-settings .volume-adjust) {
  border-top-width: calc(var(--uarr-width)/50);
  border-top-style: solid;
  border-bottom-width: calc(var(--uarr-width)/50);
  border-bottom-style: solid;
  height: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: calc(var(--uarr-width)/20);
  padding-top: calc(var(--uarr-width)/100);
  font-size: calc(var(--uarr-width)/18);
}
#this :global(input[type="range"]) {
  width: 70%;
  height: calc(var(--uarr1-width)/10);
}
#this :global(input[type="range"]::-webkit-slider-runnable-track) {
  height: calc(var(--uarr-width)/20);
  border-radius: calc(var(--uarr-width)/10);
  border-width: calc(var(--uarr-width)/100);
  border-style: solid;
}
#this :global(input[type="range"]::-webkit-slider-thumb) {
  margin-top: -4.5%; 
  border-width: calc(var(--uarr-width)/100);
  border-style: solid;
  border-radius: calc(var(--uarr-width)/10);
  height: calc(var(--uarr-width)/12);
  width: calc(var(--uarr-width)/12);    
}
#this :global(input[type="range"]::-moz-range-track) {
  height: calc(var(--uarr-width)/30);
  border-radius: calc(var(--uarr-width)/10);
  border-width: calc(var(--uarr-width)/100);
}
#this :global(input[type="range"]::-moz-range-thumb) {
  margin-top: -4.5%; 
  border-width: calc(var(--uarr-width)/100);
  border-radius: calc(var(--uarr-width)/10);
  height: calc(var(--uarr-width)/15);
  width: calc(var(--uarr-width)/15);   
}
/* TAB BUTTONS ------------------------------------ */
#this :global(.site-menu-tab-buttons) {
  display: flex;
  gap: calc(var(--uarr-width)/10);
  position: absolute;
  top: 91%;
  height: 9%;
  width: 85%;
  border-top-width: calc(var(--uarr-width)/40);
  border-top-style: solid;
}
#this :global(.site-menu-tab-buttons li) {
  width: 20%;
  height: 100%;
  padding-bottom: 2%;
}
#this :global(.site-menu-tab-buttons button) {
  padding-bottom: 5%;
  min-height: 0;
}
#this :global(.site-menu-tab-buttons svg) {
  width: 40%;
}
}

/* HOVER/FOCUS TRANSITIONS ------------------------------- */
@media screen and (orientation: portrait) and (hover:hover) {
  /* SITE MENU MODAL BUTTON ----------------------------------- */
  #this :global(.site-menu-modal-button.open svg) {
    transition-property: background-color, color, border-color, outline-width;
    transition-timing-function: ease-in;
    transition-duration: 0.3s;
    outline-color: hsla(150, 100%, 0%, 0.8);
    outline-width: 0;
    outline-style: solid;
  }
  #this :global(.site-menu-modal-button.open line) {
    transition-property: stroke;
    transition-timing-function: ease-in;
    transition-duration: 0.3s;
  }
  #this :global(.site-menu-modal-button.open:hover svg) {
    outline-width: calc(var(--uarr1-height) * 1.1);
    background-color: hsl(40, 100%, 0%);
    border-color: white;
  }
  #this :global(.site-menu-modal-button.open:hover line) {
    stroke: white;
  }
  /* NAV LINKS ------------------------------------------- */
  #this :global(nav a) {
    transition-property: border-color, transform, background-color, color;
    transition-timing-function: ease-out;
    transition-duration: 0.3s;
    outline: none;
  }
  #this :global(nav a:hover), #this :global(nav a:focus-visible) {
    border-color: hsl(150, 100%, 70%);
    transform: scale(1.15);
    background-color: hsla(150, 100%, 70%, 0.5);
    color: hsl(150, 100%,10%);
  }
}
</style>