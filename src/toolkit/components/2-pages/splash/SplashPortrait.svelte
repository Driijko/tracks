<!-- SCRIPTS ///////////////////////////////////// -->
<script>
  // IMPORTS -----------------------------------------
  import { gsap } from "gsap";
  import { onMount } from "svelte";
  import { setPageExit } from "../../../scripts/currentPageStore";
  import { modals } from "../../../scripts/modalsStore";
  import SplashContent from "./SplashContent.svelte";

  onMount(()=> {

    // ANIMATIONS ----------------------------------------

    function pageEntrance() {
      const tl = gsap.timeline();

      tl.from("#id2", {
        duration: 4,
        backgroundColor: "white",
      },0);
      tl.from("#id2 .rect1", {
        duration: 2,
        opacity: 0,
      },1);
      tl.from("#id2 .background line", {
        duration: 5,
        stroke: "hsl(150, 100%, 0%)",
        ease: "power4.in"
      },0);
      tl.from("#id2 .background .line1", {
        duration: 2,
        attr: {x2:0},
        ease: "linear",
      },0);
      tl.from("#id2 .background .line2", {
        duration: 2,
        attr: {x1:900},
        ease: "linear",
      },0.2);
      tl.from("#id2 .background .line3", {
        duration: 2,
        attr: {y2:0},
        ease: "linear",
      },0.4);
      tl.from("#id2 .rect2", {
        duration: 5,
        attr:{width: 0, y:1600},
      },0);
      tl.from("#id2 h1", {
        duration: 0.1,
        borderWidth: 0,
      },1)
      tl.from("#id2 h1", {
        duration: 4,
        width: 0,
      },1);
      tl.from(["#id2 h1", "#id2 h2"], {
        color: "hsla(150, 100%, 100%, 0%)",
        duration: 5,
        stagger: 1,
      },1);
      tl.from("#id2 .site-menu-modal-button", {
        opacity: 0,
        duration: 2,
      },5);
    };

    pageEntrance();

    function pageExit() {
      const tl = gsap.timeline();
      tl.to(["#id2 .splash-content", "#id2 rect"], {
        opacity: 0,
        duration: 1,
      },0);
      tl.to("#id2", {
        backgroundColor: "hsl(150, 100%, 100%)",
        duration: 3,
      },1);
      tl.to("#id2 line", {
        stroke: "hsl(150, 100%, 20%)",
        duration: 2,
        strokeWidth: 0,
      },2);
    }

    setPageExit(pageExit, 4000);

    
  });

</script>

<!-- MARKUP ///////////////////////////////////// -->
<div id="id2" class="uarr-container">
  <div id="this" class="uarr1">
    <svg class="background" viewBox="0 0 900 1600" >
      <rect class="rect1" x="0" y="0" width="900" height="1600" fill="white" />
      <rect class="rect2" x="-140" y="785" width="940" height="940" 
        stroke="hsl(150, 100%, 80%)" stroke-width="25" fill="hsl(150, 100%, 70%)" rx="70" 
      />
      <line class="line1" x1="0" y1="35" x2="900" y2="35" />
      <line class="line2" x1="0" y1="740" x2="900" y2="740" />
      <line class="line3" x1="855" y1="0" x2="855" y2="1600" />
    </svg>
    <SplashContent />
  </div>
</div>


<!-- STYLES ///////////////////////////////////// -->
<style>
@media screen and (orientation: portrait) {
.uarr-container {
  background-color: hsl(150, 100%, 60%);
}
svg {
  width: 100%;
  height: 100%;
}
line {
  stroke: hsl(150, 100%, 80%);
  stroke-width: 20;
}
#this :global(header) {
  width: 100%;
  top: 0%;
  height: 100%;
  color: hsl(150, 100%, 16%);
}
#this :global(header > *) {
  position: absolute;
}
#this :global(h1) {
  top: 4%;
  left: 0%;
  width: calc(var(--uarr1-width)/1.25);
  height: 40%;
  line-height: 1;
  font-size: calc(var(--uarr1-width)/6);
  margin-bottom: 10%;
  background-color: hsl(150, 100%, 70%);
  border-radius: 0 calc(var(--uarr1-width)/10) calc(var(--uarr1-width)/10) 0;
  border-width: calc(var(--uarr1-width)/30);
  border-style: solid;
  border-color: hsl(150, 100%, 80%);
  border-left: none;
}
#this :global(h1 span) {
  position: absolute;
}
#this :global(h1 span:nth-of-type(1)) {
  top: 5%;
  left: 3%;
}
#this :global(h1 span:nth-of-type(2)) {
  top: 38%;
  left: 7%;
  font-size: calc(var(--uarr1-width)/8);
}
#this :global(h1 span:nth-of-type(3)) {
  top: 70%;
  left: 3%;
}
#this :global(h2) {
  top: 52%;
  left: 5%;
  line-height: 2;
  letter-spacing: calc(var(--uarr-width)/200);
  font-size: calc(var(--uarr-width)/15);
}
#this :global(h2 span:nth-of-type(2)) {
  top: 35%;
  left: 24%;
}
#this :global(h2 span:nth-of-type(3)) {
  left: 41%;
  top: 70%;
}
#this :global(header .site-menu-modal-button) {
  top: 82.5%;
  left: 5%;
  width: 30%;
  height: 15%;
  border-radius: calc(var(--uarr1-width)/100);
  background-color: hsl(40, 100%, 55%);
  border: calc(var(--uarr1-width)/100) solid hsl(150, 100%, 20%);
}
#this :global(header line) {
  stroke: hsl(150, 100%, 20%);
}
#this :global(header svg) {
  width: 40%;
}
}
/* HOVER TRANSITIONS ---------------- */
@media screen and (orientation: portrait) and (hover:hover) {
  #this :global(.site-menu-modal-button) {
    transition-property: transform, border-color, background-color;
    transition-timing-function: ease-out;
    transition-duration: 0.3s;
  }
  #this :global(.site-menu-modal-button line),
  #this :global(.site-menu-modal-button line) {
    transition-property: stroke;
    transition-timing-function: ease-out;
    transition-duration: 0.3s;
  }
  #this :global(.site-menu-modal-button:hover),
  #this :global(.site-menu-modal-button:focus-visible) {
    transform: scale(1.3) 
      translateX(calc(var(--uarr1-width)/40)) 
      translateY(calc(var(--uarr1-width)/-40));
      border-color:hsl(40, 100%, 50%);
      background-color: hsl(40, 100%, 0%);
  }
  #this :global(.site-menu-modal-button:hover line),
  #this :global(.site-menu-modal-button:focus-visible line) {
    stroke: hsl(40, 100%, 50%);
  }
}
</style>