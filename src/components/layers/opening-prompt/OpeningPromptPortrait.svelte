<!-- SCRIPTS ////////////////////////////////////////////////// -->
<script>
  // IMPORTS ---------------------------------------------------
  import { gsap } from "gsap";
  import { onMount } from "svelte";
  import OpeningPromptContent from "./OpeningPromptContent.svelte";

  // ANIMATION ------------------------------------------------
  const tl = gsap.timeline();

  onMount(()=> {
    tl.from("#p1-l1", {duration: 1, ease:"linear", attr:{x2: 0}},0);
      tl.from("#p1-l2", {duration: 1, ease:"linear", attr:{y2: 0}},0);
      tl.from("#p1-l3", {duration: 1, ease:"power1.inOut", attr:{x2: 100}},0.85);
      tl.from("#p1-l4", {duration: 1, ease:"power1.inOut", 
        attr:{y1: 800, y2: 800}},1.7);
      tl.from("#p1-r1", {duration: 2, ease:"power1.inOut", attr:{x:900, width: 0}},0);
      tl.from(["#p1-r2", "#p1-r3"], {duration: 2, ease:"power1.inOut", opacity:0},0);
      tl.from(["#p1-p1", "#p1-p2", "#p1-p3"], {duration: 1.5, ease:"power1.inOut", letterSpacing: "-0.5em"}, 1);
      tl.set(["#p1-p1", "#p1-p2", "#p1-p3"], {transform: "rotateY(0deg)"}, 1)
      tl.from(["#p1-p1", "#p1-p2", "#p1-p3"], {duration: 0.5, ease:"linear", transform: "rotateY(90deg)"}, 1);
      // tl.set(".prompt-option", {transform: "scaleX(1)"}, 1);
      // tl.from(".prompt-option", {duration: 1.5, transform: "scaleX(0)"}, 1);
      // tl.from("#p1-link1", {duration: 2, opacity: 0}, 2);
  });
</script>

<!-- MARKUP ////////////////////////////////////////// -->
<svg class="svg-background" viewBox="0 0 900 1600" >
  <rect id="p1-r1" class="color1" x="750" y="100" width="150" height="1400" />
  <rect id="p1-r2" class="color3" x="490" y="100" width="260" height="1400" />
  <rect id="p1-r3" class="color4" x="100" y="500" width="650" height="380" />
  <line id="p1-l1" class="line color1" x1="0" y1="100" x2="900" y2="100" />
  <line id="p1-l2" class="line color1" x1="100" y1="0" x2="100" y2="1600" />
  <line id="p1-l3" class="line color1" x1="100" y1="1500" x2="900" y2="1500" />
  <line id="p1-l4" class="line color5" x1="850" y1="100" x2="850" y2="1500" />
</svg>
<OpeningPromptContent />
