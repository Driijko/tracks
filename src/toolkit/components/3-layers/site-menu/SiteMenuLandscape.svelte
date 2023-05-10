<!-- SCRIPTS //////////////////////////////////////////// -->
<script>
  import SiteMenuContent from "./SiteMenuContent.svelte";
  import { siteMenuModal } from "../../../scripts/modalsStore";
</script>

<!-- MARKUP ///////////////////////////////////////////// -->
<div class="uarr-container site-menu" class:open={$siteMenuModal}>
  <div id="this" class="uarr">
    <SiteMenuContent />
  </div>
</div>

<!-- STYLE //////////////////////////////////////// -->
<style>
@media screen and (orientation: landscape) {
.uarr-container.open {
  background-image: linear-gradient(90deg,
  hsl(40, 100%, 35%), hsl(150, 100%, 35%));
}
/* INTERFACE TRAY ------------------------- */
#this :global(.interface-tray) {
  right: 0%;
  gap: calc(var(--uarr2-width)/100);
  top: 0%;
}
#this :global(.interface-tray button) {
  width: 100%;
  height: 100%;
}
#this :global(.interface-tray.closed button) {
  padding: calc(var(--uarr2-width)/80);
  padding-top: calc(var(--uarr2-width)/100);
}
#this :global(.interface-tray svg) {
  width: 100%;
}
#this :global(.interface-tray.closed li) {
  width: calc(var(--uarr2-width)/20);
  height: calc(var(--uarr2-width)/22);
  background-color: black;
}
#this :global(.interface-tray.open) {
  padding-right: calc(var(--uarr2-width)/300);
  padding-top: calc(var(--uarr2-width)/3000);
}
#this :global(.interface-tray.open li) {
  width: calc(var(--uarr2-width)/18);
  height: calc(var(--uarr2-width)/18);
  padding: calc(var(--uarr2-width)/200);
}
#this :global(.interface-tray.open .site-menu-modal-button line) {
  stroke: hsl(40, 100%, 0%);
}
#this :global(.interface-tray.open .site-menu-modal-button) {
  border-color: hsl(150, 100%,30%);
  background-color: hsl(150, 100%, 50%);
  border-width: calc(var(--uarr2-width)/300);
  border-style: solid;
  border-radius: calc(var(--uarr2-width)/100);
}
#this :global(.interface-tray.open svg) {
  width: calc(var(--uarr2-width)/25);
  height: calc(var(--uarr2-width)/25);
  padding: calc(var(--uarr2-width)/500);
}
#this :global(.interface-tray.splash) {
  transition-property: top;
  transition-duration: 0.5s;
  transition-timing-function: ease-out;
}
#this :global(.interface-tray.splash.closed) {
  top: -100%;
}
/* HEADER ------------------------------------------ */
#this :global(header) {
  height: 10%;
  display: flex;
  align-items: center;
  gap: calc(var(--uarr-width)/30);
  padding-left: 1%;
}
#this :global(h1) {
  word-spacing: calc(var(--uarr1-width)/100);
  display: flex;
  align-items: center;
  gap: calc(var(--uarr1-width)/30);
}
#this :global(h1 span:nth-of-type(1)) {
  font-size: calc(var(--uarr2-width)/33);
}
#this :global(h1 span:nth-of-type(2)) {
  font-size: calc(var(--uarr2-width)/60);
}
#this :global(h1 span:nth-of-type(3)) {
  font-size: calc(var(--uarr2-width)/33);
}
#this :global(h2) {
  font-size: calc(var(--uarr-width)/60);
}
/* BREADCRUMBS -------------------------------- */
#this :global(.site-menu-breadcrumbs) {
  display: flex;
  padding-left: calc(var(--uarr2-width)/100);
  padding-bottom: calc(var(--uarr2-width)/300);
  align-items: center;
  height: 4%;
  font-size: calc(var(--uarr-width)/60);
  letter-spacing: calc(var(--uarr-width)/1000);
}
#this :global(.site-menu-breadcrumbs li) {
  padding-right: calc(var(--uarr-width)/200);
}
/* TAB CONTENT ------------------------------------ */
#this :global(.tab-content) {
  height: 75%;
  border-width: calc(var(--uarr-width)/100);
  border-style: solid;
  border-bottom: none;
}
#this :global(nav), #this :global(.site-settings) {
  height: 100%;
}
/* NAV ------------------- */
#this :global(nav ul) {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: calc(var(--uarr-width)/30);
  gap: calc(var(--uarr2-width)/20);
}
#this :global(nav li) {
  text-align: center;
  line-height: 1.3;
  width: 100%;
  word-spacing: calc(var(--uarr-width)/100);
  display: flex;
  justify-content: center;
}
#this :global(nav a) {
  border-width: calc(var(--uarr2-width)/500);
  border-style: solid;
  border-color: hsl(150, 100%, 60%);
  display: block;
  padding: calc(var(--uarr2-width)/100) calc(var(--uarr2-width)/50);
  letter-spacing: calc(var(--uarr2-width)/300);
  border-radius: calc(var(--uarr2-width)/200);
}
#this :global(nav li.selected) {
  font-size: calc(var(--uarr-width)/25);
}
/* SETTINGS ---------------- */
#this :global(.site-settings) {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: calc(var(--uarr-width)/100);
}
#this :global(.site-settings-option) {
  border-top-width: calc(var(--uarr-width)/100);
  border-top-style: solid;
  border-bottom-width: calc(var(--uarr-width)/100);
  border-bottom-style: solid;
  font-size: calc(var(--uarr-width)/40);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 18%;
  padding: 3% 35%;
}
#this :global(.site-settings input[type="checkbox"]) {
  border-width: calc(var(--uarr-width)/150);
  border-style: solid;
  width: calc(var(--uarr-width)/22);
  height: calc(var(--uarr-width)/22);
  border-radius: calc(var(--uarr2-width)/200);
}
#this :global(.site-settings .volume-adjust) {
  border-top-width: calc(var(--uarr-width)/100);
  border-top-style: solid;
  border-bottom-width: calc(var(--uarr-width)/100);
  border-bottom-style: solid;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: calc(var(--uarr-width)/20);
  font-size: calc(var(--uarr-width)/50);
}
#this :global(input[type="range"]) {
  width: 25%;
}
#this :global(input[type="range"]::-webkit-slider-runnable-track) {
  height: calc(var(--uarr-width)/50);
  border-radius: calc(var(--uarr-width)/10);
  border-width: calc(var(--uarr-width)/200);
}
#this :global(input[type="range"]::-webkit-slider-thumb) {
  border-width: calc(var(--uarr-width)/200);
  border-radius: calc(var(--uarr-width)/10);
  height: calc(var(--uarr-width)/30);
  width: calc(var(--uarr-width)/30);    
}
#this :global(input[type="range"]::-moz-range-track) {
  height: calc(var(--uarr-width)/80);
  border-radius: calc(var(--uarr-width)/10);
  border-width: calc(var(--uarr-width)/200);
}
#this :global(input[type="range"]::-moz-range-thumb) {
  border-width: calc(var(--uarr-width)/200);
  border-radius: calc(var(--uarr-width)/10);
  height: calc(var(--uarr-width)/40);
  width: calc(var(--uarr-width)/40);   
}
/* TAB BUTTONS ------------------------------------ */
#this :global(.site-menu-tab-buttons) {
  display: flex;
  justify-content: center;
  gap: calc(var(--uarr-width)/10);
  position: absolute;
  top: 89%;
  height: 11%;
  width: 100.1%;
  border-top-width: calc(var(--uarr-width)/100);
  border-top-style: solid;
}
#this :global(.site-menu-tab-buttons li) {
  width: 20%;
  height: 100%;
  padding-bottom: 1%;
}
#this :global(.site-menu-tab-buttons button) {
  padding-bottom: 3%;
  padding-top: 2%;
}
#this :global(.site-menu-tab-buttons svg) {
  width: 30%;
}
}

/* HOVER/FOCUS TRANSITIONS -------------------------- */
@media screen and (orientation: landscape) and (hover:hover) {
  /* SITE MENU MODAL BUTTON ----------------------- */
  #this :global(.site-menu-modal-button.open) {
    transition-property: background-color, color, border-color, outline-width;
    transition-timing-function: ease-in;
    transition-duration: 0.3s;
    outline-color: hsla(150, 100%, 100%, 1);
    outline-width: 0;
    outline-style: solid;
  }
  #this :global(.site-menu-modal-button.open line) {
    transition-property: stroke;
    transition-timing-function: ease-in;
    transition-duration: 0.3s;
  }
  #this :global(.site-menu-modal-button.open:hover),
  #this :global(.site-menu-modal-button.open:focus-visible) {
    outline-width: calc(var(--uarr2-width)/300);
    background-color: hsl(40, 100%, 0%);
    border-color: white;
  }
  #this :global(.site-menu-modal-button.open:hover line),
  #this :global(.site-menu-modal-button.open:focus-visible line) {
    stroke: white;
  }
  /* NAV LINKS ----------------------------------- */
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
  /* INTERFACE TRAY ------------------------------ */
    #this :global(.interface-tray.closed button) {
    transition-property: outline-width, color;
    transition-timing-function: ease-in;
    transition-duration: 0.3s;
    outline-color: transparent;
    outline-style: solid;
    outline-width: calc(var(--uarr2-width)/100);
  }
  #this :global(.interface-tray.closed button:focus-visible) {
    outline-color: hsla(0, 0%, 100%, 0.7);
  }
}
</style>