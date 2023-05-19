<!-- SCRIPTS /////////////////////////////////////// -->
<script>
  // IMPORTS ------------------------------------------
  import { gsap } from "gsap";
  import { onMount } from "svelte";
  import ContactContent from "./ContactContent.svelte";
  import { setPageExit } from "../../../scripts/currentPageStore";

  // ANIMATION ----------------------------------------
  const tl = gsap.timeline();
  onMount(()=> {
    function pageEntrance() {

      tl.from("#svg10 rect", {duration: 4, opacity: 0},0);
      tl.from("#svg10 path", {
        duration: 10,
        attr:{d:"M 1000,900 Q 800,800 1000,200  Q 1200,800 1000,900 Z"},
      },0);
      tl.from("#id10 section", {duration: 4, opacity: 0},4);
    }

    pageEntrance();

    function pageExit() {
      gsap.to("#id10", {duration: 2, opacity: 0});
    }

    setPageExit(pageExit,2000);

    return ()=> tl.kill();
  });

</script>

<!-- MARKUP ///////////////////////////////////////// -->
<div id="id10" class="uarr2">
  <svg id="svg10" class="background" viewBox="0 0 1600 900">
    <defs>
      <linearGradient id="gradient1">
        <stop offset="0%" stop-color="hsl(150, 100%, 50%)"></stop>
        <stop offset="100%" stop-color="hsl(150, 100%, 90%)"></stop>
      </linearGradient>
    </defs>
    <rect x="0" y="0" width="1600" height="900" fill="url(#gradient1)"></rect>
    <path d="M 1000, 900 
      Q 800,800 1000,200 
      Q 1200,800 1000,900 
    Z"></path><path d="M 1000, 900 
      Q 800,800 1000,200 
      Q 1210,800 1030,900 
    Z"></path><path d="M 1000, 900 
      Q 800,800 1000,200 
      Q 1220,800 1060,900 
    Z"></path><path d="M 1000, 900 
      Q 800,800 1000,200 
      Q 1230,800 1090,900 
    Z"></path><path d="M 1000, 900 
      Q 800,800 1000,200 
      Q 1240,800 1120,900 
    Z"></path><path d="M 1000, 900 
      Q 800,800 1000,200 
      Q 1250,800 1150,900 
    Z"></path><path d="M 1000, 900 
      Q 800,800 1000,200 
      Q 1260,800 1180,900 
    Z"></path><path d="M 1000, 900 
      Q 800,800 1000,200 
      Q 1270,800 1210,900 
    Z"></path><path d="M 1000, 900 
      Q 800,800 1000,200 
      Q 1280,800 1240,900 
    Z"></path><path d="M 1000, 900 
      Q 800,800 1000,200 
      Q 1290,800 1270,900 
    Z"></path><path d="M 1000, 900 
      Q 800,800 1000,200 
      Q 1300,800 1300,900 
    Z"></path><path d="M 1000, 900 
      Q 800,800 1000,200 
      Q 1310,800 1330,900 
    Z"></path><path d="M 1000, 900 
      Q 800,800 1000,200 
      Q 1320,800 1360,900 
    Z"></path><path d="M 1000, 900 
      Q 800,800 1000,200 
      Q 1330,800 1390,900 
    Z"></path><path d="M 1000, 900 
      Q 800,800 1000,200 
      Q 1340,800 1420,900 
    Z"></path><path d="M 1000, 900 
      Q 800,800 1000,200 
      Q 1350,800 1450,900 
    Z"></path><path d="M 1000, 900 
      Q 800,800 1000,200 
      Q 1360,800 1480,900 
    Z"></path><path d="M 1000, 900 
      Q 800,800 1000,200 
      Q 1370,800 1510,900 
    Z"></path><path d="M 1000, 900 
      Q 800,800 1000,200 
      Q 1380,800 1540,900 
    Z"></path><path d="M 1000, 900 
      Q 800,800 1000,200 
      Q 1390,800 1570,900 
    Z"></path><path d="M 1000, 900 
      Q 800,800 1000,200 
      Q 1200,800 1000,900 
    Z"></path><path d="M 1000, 900 
      Q 790,800 970,220 
      Q 1200,800 1000,900 
    Z"></path><path d="M 1000, 900 
      Q 780,800 940,240 
      Q 1200,800 1000,900 
    Z"></path><path d="M 1000, 900 
      Q 770,800 910,260 
      Q 1200,800 1000,900 
    Z"></path><path d="M 1000, 900 
      Q 760,800 880,280 
      Q 1200,800 1000,900 
    Z"></path><path d="M 1000, 900 
      Q 750,800 850,300 
      Q 1200,800 1000,900 
    Z"></path><path d="M 1000, 900 
      Q 740,800 820,320 
      Q 1200,800 1000,900 
    Z"></path><path d="M 1000, 900 
      Q 730,800 790,340 
      Q 1200,800 1000,900 
    Z"></path><path d="M 1000, 900 
      Q 720,800 760,360 
      Q 1200,800 1000,900 
    Z"></path><path d="M 1000, 900 
      Q 710,800 730,380 
      Q 1200,800 1000,900 
    Z"></path><path d="M 1000, 900 
      Q 700,800 700,400 
      Q 1200,800 1000,900 
    Z"></path><path d="M 1000, 900 
      Q 690,800 670,420 
      Q 1200,800 1000,900 
    Z"></path><path d="M 1000, 900 
      Q 680,800 640,440 
      Q 1200,800 1000,900 
    Z"></path><path d="M 1000, 900 
      Q 670,800 610,460 
      Q 1200,800 1000,900 
    Z"></path><path d="M 1000, 900 
      Q 660,800 580,480 
      Q 1200,800 1000,900 
    Z"></path><path d="M 1000, 900 
      Q 650,800 550,500 
      Q 1200,800 1000,900 
    Z"></path><path d="M 1000, 900 
      Q 640,800 520,520 
      Q 1200,800 1000,900 
    Z"></path><path d="M 1000, 900 
      Q 630,800 490,540 
      Q 1200,800 1000,900 
    Z"></path><path d="M 1000, 900 
      Q 620,800 460,560 
      Q 1200,800 1000,900 
    Z"></path><path d="M 1000, 900 
      Q 610,800 430,580 
      Q 1200,800 1000,900 
    Z"></path>
  </svg>
  <ContactContent />
</div>

<!-- STYLES //////////////////////////////////// -->
<style>
path {
  fill: transparent;
  stroke: hsl(150, 100%, 90%);
  stroke-width: 5;
}
#id10 :global(section) {
  position: absolute;
  font-size: calc(var(--uarr2-width)/70);
  line-height: 2;
  left: 2%;
  top: 5%;
}
</style>