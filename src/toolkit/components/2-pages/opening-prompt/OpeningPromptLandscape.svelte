<!-- SCRIPTS //////////////////////////////// -->
<script>
  import { gsap } from "gsap";
  import { onMount } from "svelte";
  import { setPageExit } from "../../../scripts/currentPageStore";
  import OpeningPromptContent from "./OpeningPromptContent.svelte";

  // ANIMATIONS -------------------------------------------------
  onMount(()=> {
    function pageEntrance() {
      const tl = gsap.timeline();
      tl.from("#a2 .rect1", {
        duration: 2, attr:{width:0}}
      ,0);
      tl.from("#a2 .rect3", {
        duration: 2, 
        attr: {width: 0, y: 600, height: 0},
        opacity: 0,
        stagger: 0.25,
      },0.3);
      tl.from("#a2 .line1", {
        duration:1.5,
        strokeWidth: 0,
        attr: {x2:0}
      },0);
      tl.from("#a2 p:nth-of-type(1)", {
        duration: 2,
        opacity: 0,
      },2);
      tl.from("#a2 p:nth-of-type(2)", {
        duration: 2,
        opacity: 0,
      },3);
      tl.from("#a2 .rect4", {
        duration: 5,
        height: 0,
      }, 4);
      tl.from("#a2 .site-settings", {
        duration: 2,
        opacity: 0,
      },4);
      tl.from("#a2 .line2", {
        duration: 1,
        stagger: 0.1,
        attr: {y2: 0}
      },4);
      tl.from("#a2 .path1", {
        duration: 2,
        attr: {
          d: "M 670,880 H 670 V 900 L 1050,880",
          fill: "transparent",
          strokeWidth: 0,
          stroke: "transparent",
        }
      }, 4.5);
      tl.from("#a2 .rect2", {duration: 3, attr:{x:1600}},7);
      tl.from("#a2 .line3", {
        duration: 4,
        strokeWidth: 0,
        attr: {x1: 1600},
      },7);
      tl.from("#a2 .rect5", {
        duration: 1,
        opacity: 0,
        attr: {x: 1600},
        stagger: 0.25,
      },7);
      tl.from("#a2 p:nth-of-type(3)", {
        duration: 2,
        opacity: 0,
      },8);
      tl.from("#a2 a", {
        duration: 3,
        opacity: 0,
      },10);
    }

    pageEntrance();

    function pageExit() {
      const tl = gsap.timeline();
      tl.to("#a2 .opening-prompt-content",{duration: 1, opacity:0},0);
      tl.to("#a2 .rect1",{duration: 0.5, attr:{width:0}},1);
      tl.to("#a2 .rect2",{duration: 0.5, attr:{x:1600}},1);
      tl.to("#a2 .rect4",{duration: 0.5, attr:{y: 900}},1);
      tl.to("#a2 .rect3", {duration:0.5, attr:{width:0}},2);
      tl.to("#a2 .rect5", {duration:0.5, attr:{x:1605}},2);
      tl.to("#a2 .line1", {duration:0.5, attr:{x2:0}},1.5);
      tl.to("#a2 .line3", {duration:0.5, attr:{x1:1600}},1.5);
      tl.to("#a2 .path1", {duration:1, opacity: 0},0);
      tl.to("#a2 .line2", {duration:1.5, attr: {y1: 900, y2: 900}, opacity: 0, stagger: 0.08},0);
    };

    setPageExit(pageExit, 3000);
  });
</script>

<!-- MARKUP //////////////////////////////////// -->
<div id="a2" class="uarr-container">
  <div id="this" class="uarr2">
    <svg class="background" viewBox="0 0 1600 900" >
      <rect class="rect1" x="0" y="270" width="580" height="1600" 
        fill="hsl(150, 100%, 70%)" />
      <rect class="rect2" x="1085" y="0" width="515" height="500" 
        fill="hsl(150, 100%, 70%)" />
      <rect class="rect2" x="1085" y="670" width="515" height="230" 
        fill="hsl(150, 100%, 70%)" />

      <rect class="rect4" x="592" y="0" width="477" height="900" fill="hsl(40, 100%, 75%)" />


      <line class="line2" x1="610" y1="0" x2="610" y2="900" stroke-width="10"
        stroke="hsl(150, 100%, 75%)"
      />
      <line class="line2" x1="630" y1="0" x2="630" y2="880" stroke-width="10"
        stroke="hsl(150, 100%, 75%)"
      />
      <line class="line2" x1="650" y1="0" x2="650" y2="860" stroke-width="10"
        stroke="hsl(150, 100%, 75%)"
      />
      <line class="line2" x1="670" y1="0" x2="670" y2="840" stroke-width="10"
        stroke="hsl(150, 100%, 75%)"
      />
      <line class="line2" x1="690" y1="0" x2="690" y2="820" stroke-width="10"
        stroke="hsl(150, 100%, 75%)"
      />
      <line class="line2" x1="710" y1="0" x2="710" y2="800" stroke-width="10"
        stroke="hsl(150, 100%, 75%)"
      />
      <line class="line2" x1="730" y1="0" x2="730" y2="780" stroke-width="10"
        stroke="hsl(150, 100%, 75%)"
      />
      <line class="line2" x1="750" y1="0" x2="750" y2="760" stroke-width="10"
        stroke="hsl(150, 100%, 75%)"
      />
      <line class="line2" x1="770" y1="0" x2="770" y2="740" stroke-width="10"
        stroke="hsl(150, 100%, 75%)"
      />
      <line class="line2" x1="790" y1="0" x2="790" y2="720" stroke-width="10"
        stroke="hsl(150, 100%, 75%)"
      />
      <line class="line2" x1="810" y1="0" x2="810" y2="700" stroke-width="10"
        stroke="hsl(150, 100%, 75%)"
      />
      <line class="line2" x1="830" y1="0" x2="830" y2="680" stroke-width="10"
        stroke="hsl(150, 100%, 75%)"
      />
      <line class="line2" x1="850" y1="0" x2="850" y2="660" stroke-width="10"
        stroke="hsl(150, 100%, 75%)"
      />
      <line class="line2" x1="870" y1="0" x2="870" y2="640" stroke-width="10"
        stroke="hsl(150, 100%, 75%)"
      />
      <line class="line2" x1="890" y1="0" x2="890" y2="620" stroke-width="10"
        stroke="hsl(150, 100%, 75%)"
      />
      <line class="line2" x1="910" y1="0" x2="910" y2="600" stroke-width="10"
        stroke="hsl(150, 100%, 75%)"
      />
      <line class="line2" x1="930" y1="0" x2="930" y2="580" stroke-width="10"
        stroke="hsl(150, 100%, 75%)"
      />
      <line class="line2" x1="950" y1="0" x2="950" y2="560" stroke-width="10"
        stroke="hsl(150, 100%, 75%)"
      />
      <line class="line2" x1="970" y1="0" x2="970" y2="540" stroke-width="10"
        stroke="hsl(150, 100%, 75%)"
      />
      <line class="line2" x1="990" y1="0" x2="990" y2="520" stroke-width="10"
        stroke="hsl(150, 100%, 75%)"
      />
      <line class="line2" x1="1010" y1="0" x2="1010" y2="500" stroke-width="10"
        stroke="hsl(150, 100%, 75%)"
      />
      <line class="line2" x1="1030" y1="0" x2="1030" y2="480" stroke-width="10"
        stroke="hsl(150, 100%, 75%)"
      />
      <line class="line2" x1="1050" y1="0" x2="1050" y2="470" stroke-width="10"
        stroke="hsl(150, 100%, 75%)"
      />

      <path fill="hsl(40, 100%, 60%)" stroke="hsl(40, 100%, 50%)" stroke-width="10" class="path1"
        d="M 670,880 H 1050 V 500 L 670,880Z" stroke-linejoin="round"
      />

      <rect class="rect3" x="0" y="445" width="500" height="310" 
        fill="hsla(150, 100%, 30%, 0.3)" stroke="hsl(40, 100%, 50%)" stroke-width="5" />
      <rect class="rect3" x="0" y="495" width="450" height="210" 
        fill="hsla(150, 100%, 30%, 0.3)" stroke="hsl(40, 100%, 50%)" stroke-width="5" />
      <rect class="rect3" x="10" y="505" width="430" height="190" 
        fill="hsla(150, 100%, 30%, 0.3)" stroke="hsl(40, 100%, 50%)" stroke-width="5" />
      <rect class="rect3" x="20" y="515" width="410" height="170" 
        fill="hsla(150, 100%, 30%, 0.3)" stroke="hsl(40, 100%, 50%)" stroke-width="5" />

      <line class="line1" x1="0" y1="600" x2="400" y2="600" 
        stroke-width="100" stroke="hsl(40, 100%, 50%)"
      />

      <rect class="rect5" x="1160" y="102" width="450" height="290" 
        fill="hsla(150, 100%, 30%, 0.3)" stroke="hsl(40, 100%, 50%)" stroke-width="5" />
      <rect class="rect5" x="1210" y="152" width="390" height="190" 
        fill="hsla(150, 100%, 30%, 0.3)" stroke="hsl(40, 100%, 50%)" stroke-width="5" />
      <rect class="rect5" x="1220" y="162" width="370" height="170" 
        fill="hsla(150, 100%, 30%, 0.3)" stroke="hsl(40, 100%, 50%)" stroke-width="5" />
      <rect class="rect5" x="1230" y="172" width="350" height="150" 
        fill="hsla(150, 100%, 30%, 0.3)" stroke="hsl(40, 100%, 50%)" stroke-width="5" />

      <line class="line3" x1="1250" y1="250" x2="1600" y2="250"
        stroke-width="100" stroke="hsl(40, 100%, 50%)"
      />

      <rect class="rect5" x="1150" y="720" width="450" height="190" 
        fill="hsla(150, 100%, 30%, 0.4)" stroke="hsl(40, 100%, 50%)" stroke-width="5" />
      <rect class="rect5" x="1290" y="770" width="400" height="160" 
        fill="hsla(150, 100%, 30%, 0.7)" stroke="hsl(40, 100%, 50%)" stroke-width="5" />

    </svg>
    <OpeningPromptContent />
  </div>
</div>


<!-- STYLES ///////////////////////////////// -->
<style>
@media screen and (orientation: landscape) {
#this {
  overflow:hidden;
}
#this :global(.opening-prompt-content > *) {
  position: absolute;
}
#this :global(.opening-prompt-content) {
  font-size: calc(var(--uarr-width)/60);
  line-height: 1.8;
}
#this :global(.opening-prompt-content p:nth-of-type(1)) {
  left: 1%;
  top: 2%;
}
#this :global(.opening-prompt-content p:nth-of-type(2)) {
  left: 1%;
  top: 15%;
}
#this :global(.site-settings) {
  padding-top: calc(var(--uarr-width)/30);
  color: black;
  width: 30%;
  height: 100%;
  left: 37%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
#this :global(.site-settings-option) {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2%;
  border-top: calc(var(--uarr-width)/100) solid white;
  border-bottom: calc(var(--uarr-width)/100) solid white;
  margin-bottom: 10%;
  background-color: hsl(40, 100%,70%);
}
#this :global(input[type="checkbox"]) {
  border: calc(var(--uarr-width)/300) solid black;
  border-radius: calc(var(--uarr2-width)/200);
  width: calc(var(--uarr-width)/30);
  height: calc(var(--uarr-width)/30);
  background-color: var(--color1);
  transition-property: background-color;
  transition-timing-function: ease-out;
  transition-duration: 0.3s;
}
#this :global(input[type="checkbox"]):checked {
  background-color: hsl(40, 100%, 50%);
}
#this :global(.volume-adjust) {
  height: 30%;
  font-size: calc(var(--uarr-width)/60);
  border-top: calc(var(--uarr-width)/100) solid white;
  border-bottom: calc(var(--uarr-width)/100) solid white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: hsla(40, 100%, 70%, 0.8)
}
#this :global(input[type="range"]) {
  width: 70%;
  height: calc(var(--uarr-width)/15);
}
#this :global(input[type="range"]::-webkit-slider-runnable-track) {
  height: calc(var(--uarr-width)/60);
  border-radius: calc(var(--uarr-width)/10);
  border-width: calc(var(--uarr-width)/300);
  border-color: black;
  background-color: var(--color3-3);
}
#this :global(input[type="range"]::-webkit-slider-thumb) {
  margin-top: calc(var(--uarr-width)/-125); 
  border-width: calc(var(--uarr-width)/300);
  border-radius: calc(var(--uarr-width)/10);
  border-color: black;
  background-color: var(--color1);
  height: calc(var(--uarr-width)/40);
  width: calc(var(--uarr-width)/40);    
}
#this :global(input[type="range"]::-moz-range-track) {
  height: calc(var(--uarr-width)/110);
  border-radius: calc(var(--uarr-width)/10);
  border-width: calc(var(--uarr-width)/400);
  border-color: white;
}
#this :global(input[type="range"]::-moz-range-thumb) {
  border-width: calc(var(--uarr-width)/300);
  border-radius: calc(var(--uarr-width)/10);
  border-color: white;
  background-color: hsl(0, 0%, 20%);
  height: calc(var(--uarr-width)/60);
  width: calc(var(--uarr-width)/60);   
}
#this :global(.opening-prompt-content p:nth-of-type(3)) {
  width: 22%;
  left: 74%;
  top: 60%;
}
#this :global(a) {
  border: calc(var(--uarr-width)/200) solid hsl(40, 100%, 50%);
  border-radius: calc(var(--uarr2-width)/150);
  color: hsl(40, 100%, 60%);
  width: 10%;
  height: 9%;
  position: relative;
  left: 89%;
  top: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(var(--uarr-width)/40);
  background-color: hsl(150, 100%, 20%);
}
}
@media screen and (orientation:landscape) and (hover:hover) {
  #this :global(a) {
    transition-property: background-color, border-color, outline-width, color;
    transition-timing-function: ease-in;
    transition-duration: 0.3s;
    outline-width: 0;
    outline-style: solid;
    outline-color: hsl(150, 100%, 50%, 0.5);
  }
  #this :global(a:hover), #this :global(a:focus-visible) {
    outline-width: calc(var(--uarr2-width) * 1.1);
    background-color: hsl(40, 100%, 50%);
    border-color: hsl(150, 100%, 0%);
    color: hsl(150, 100%, 0%); 
  }
}
</style>