<!-- SCRIPTS ///////////////////////////////////// -->
<script>
  // IMPORTS -----------------------------------------
  import { gsap } from "gsap";
  import { onMount } from "svelte";
  import { setPageExit } from "../../../scripts/currentPageStore";
  import { modals } from "../../../scripts/modalsStore";
  import SplashContent from "./SplashContent.svelte";

  onMount(()=> {

    function pageEntrance() {
      const tl = gsap.timeline();

      tl.from(["#id2-1 .paths1", " #id2-1 .paths2"], {
        duration: 5, ease: "linear", opacity: 0
      },0);
      tl.from("#id2-1 .paths1", {
        duration: 3, ease: "elastic.out(1, 1)",
        attr: {
          d: "M 0,900 H 1600 L 0,900 Q 0 900 0 900 T 0 900 T 0 900"
        }
      }, 0);
      tl.from("#id2-1 .paths2", {
        duration: 10, ease: "elastic.out(2, 1)",
        attr: {
          d: "M 0,0 H 1600 Q 0 500 1600 900 T 0,900"
        }
      }, 0);
      tl.from("#id2-1 .background line", {
        duration: 8,
        stroke: "hsl(150, 100%, 100%)",
        strokeWidth: 0,
      },2);

      tl.from("#id2-1 .background .line5", {
        duration: 4,
        attr: {x2: 0}
      },2);
      tl.from("#id2-1 .background .line3", {
        duration: 4,
        attr: {y2: 0}
      },2);
      tl.from("#id2-1 .background .line4", {
        duration: 4,
        attr: {y2: 210}
      },2.3);
      tl.from("#id2-1 .background .line1", {
        duration: 3,
        attr: {y1: 210}
      },4);
      tl.from("#id2-1 .background .line2", {
        duration: 3,
        attr: {y2: 70}
      },3.8);
      tl.from("#id2-1 .background .line6", {
        duration: 3.5,
        attr: {x2: 50}
      },2.7);
      tl.from("#id2-1 .background .line7", {
        duration: 4,
        attr: {x1: 1200}
      },2.1);
      tl.from("#id2-1 .background .line8", {
        duration: 2,
        attr: {x2: 1100}
      },5.4);

      tl.from("#id2-1 .background .rect1", {
        duration: 6,
        opacity:0,
      },0);
      tl.from("#id2-1 h1 span", {
        duration: 2, opacity: 0,
        stagger: 0.8,
      },7);
      tl.from("#id2-1 h2 span", {
        duration:2, opacity:0, stagger: 0.8
      },9.5);
      tl.from("#id2-1 header .site-menu-modal-button", {
        duration:4, opacity:0, ease: "power4.out"
      },12.3);
      tl.from("#id2-1", {
        backgroundColor: "hsl(150, 100%, 100%)",
        duration: 8,
      },0)
    };

    pageEntrance();

    function pageExit() {
      modals.close("siteMenu");
      const tl = gsap.timeline();
      tl.to([
        "#id2-1 .splash-content", 
        "#id2-1 .background path",
        "#id2-1 .background rect"
      ], {
        duration: 1,
        opacity: 0,
      },0);
      tl.to("#id2-1 line", {
        duration: 1.5,
        strokeWidth: 0,
        stagger: 0.1,
      },1.5);
    };

    setPageExit(pageExit, 3000);

  });

</script>

<!-- MARKUP //////////////////////////////// -->
<div id="id2-1" class="uarr-container">
  <div id="this" class="uarr2">
    <svg class="background" viewBox="0 0 1600 900">

      <rect class="rect1" x="0" y="0" width="1600" height="900" fill="hsl(150, 100%, 70%)" />

      <path class="paths1" fill="hsl(40, 100%, 70%)"
        d="M 0,900
        H 1600
        L 1600,0
        Q 1500 500 1200 400
        T 700 400
        T 100 900
      "/>
      <path class="paths2" fill="hsl(40, 100%, 70%)"
        d="M 0,0 
        H 1600
        Q 1500 500 1200 200
        T 0,700
      "/>

      <line class="line1" x1="830" y1="0" x2="830" y2="210" />
      <line class="line2" x1="1100" y1="70" x2="1100" y2="900" />
      <line class="line3" x1="1200" y1="0" x2="1200" y2="900" />
      <line class="line4" x1="50" y1="210" x2="50" y2="900" />
      <line class="line5" x1="0" y1="210" x2="1100" y2="210" />
      <line class="line6" x1="50" y1="300" x2="1100" y2="300" />
      <line class="line7" x1="830" y1="70" x2="1200" y2="70" />
      <line class="line8" x1="1100" y1="725" x2="1600" y2="725" />
    </svg>
    <SplashContent />
  </div>
</div>


<!-- STYLES ///////////////////////////////// -->
<style>
@media screen and (orientation: landscape) {
.uarr-container {
  background-color: hsl(150, 100%, 70%);
}
.uarr2 {
  overflow: hidden;
}
line {
  stroke-width: 20;
  stroke: hsl(150, 100%, 70%);
}
#this :global(header) {
  position: absolute;
  color: hsl(40, 100%, 10%);
  left: 1%;
  top: 1%;
  width: 99%;
  height: 99%;
}
#this :global(h1) {
  position: absolute;
  left: 0.5%;
  top: 1.5%;
  width: 60%;
  height: 12%;
}
#this :global(h1 span) {
  position: absolute;
}
#this :global(h1 span:nth-of-type(1)) {
  font-size: calc(var(--uarr-width)/14);
}
#this :global(h1 span:nth-of-type(2)) {
  font-size: calc(var(--uarr-width)/50);
  left: 53%;
  top:10%;
}
#this :global(h1 span:nth-of-type(3)) {
  font-size: calc(var(--uarr-width)/26);
  left: 52.5%;
  top: 44%;
}
#this :global(h2) {
  position: absolute;
  top: 16%;
  left: 2.4%;
  font-size: calc(var(--uarr-width)/50);
  word-spacing: calc(var(--uarr-width)/300);
  letter-spacing: calc(var(--uarr-width)/1000);
}
#this :global(header .site-menu-modal-button) {
  position: absolute;
  width: 10%;
  height: 15%;
  left: 89%;
  top: 83.3%;
  background-color: hsl(150, 100%, 3%);
  border-radius: calc(var(--uarr2-width)/200);
  border-color: hsl(40, 100%, 50%);
  border-style: solid;
  border-width: calc(var(--uarr2-width)/150);
}
#this :global(.site-menu-modal-button svg) {
  width: 40%;
}
#this :global(.site-menu-modal-button line) {
  stroke: hsl(40, 100%, 50%);
}
}
/* HOVER TRANSITIONS ---------------- */
@media screen and (orientation: landscape) and (hover:hover) {
  #this :global(.site-menu-modal-button) {
    transition-property: border-color, background-color, outline-width;
    transition-timing-function: ease-in;
    transition-duration: 0.3s;
    outline-width: 0;
    outline-style: solid;
    outline-color: hsla(40, 100%, 50%, 0.7);
  }
  #this :global(.site-menu-modal-button line),
  #this :global(.site-menu-modal-button line) {
    transition-property: stroke;
    transition-timing-function: ease-out;
    transition-duration: 0.3s;
  }
  #this :global(.site-menu-modal-button:hover),
  #this :global(.site-menu-modal-button:focus-visible) {
      border-color:hsl(150, 100%, 70%);
      background-color: hsl(220, 100%, 10%);
      outline-width: calc(var(--uarr2-width) * 1.1);
  }
  #this :global(.site-menu-modal-button:hover line),
  #this :global(.site-menu-modal-button:focus-visible line) {
    stroke: hsl(150, 100%, 70%);
  }
}
</style>
