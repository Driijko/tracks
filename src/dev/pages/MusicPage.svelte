<!-- SCRIPTS //////////////////////////////////////////////// -->
<script>
  // IMPORT---------------------------------------------------
  import { onMount } from "svelte";
  import { gsap } from "gsap";
  import svgViewBox from "../helpers/svgViewBox.js";
  import { currentPage, pageExit } from "../stores/site.js";

  // ELEMENT/COMPONENT REFERENCES ------------------------------
  let musicPage;

  // LIFECYCLE ------------------------------------------------
  onMount(()=> {
    currentPage.set(musicPage);

    // ANIMATION -----------------------------------------------
    const tl = gsap.timeline();
    tl.to("#p1-l1", {duration: 2, ease:"power1.inOut", attr:{x2: 900}},0);
    tl.to("#p1-l2", {duration: 2, ease:"power1.inOut", attr:{y2: 1600}},0);
    tl.to("#p1-l3", {duration: 2, ease:"power1.inOut", attr:{x2: 900}},1.55);
    tl.to("#p1-l4", {duration: 2, ease:"power1.inOut", attr:{y2: 1500}},1.5);
    tl.to("#p1-r1", {duration: 4, ease:"power1.inOut", attr:{width: 100}},0);
    tl.to("#p1-r2", {duration: 4, ease:"power1.inOut", attr:{x:800, width: 100}},0);
    tl.to(["#p1-r3", "#p1-r4"], {duration: 4, ease:"power1.inOut", opacity:1},0);
  });

</script>

<main bind:this={musicPage} class="page">
  <div class="content-container">
    <svg viewBox={svgViewBox()} preserveAspectRatio="none">
      <rect id="p1-r1" class="color1" x="0" y="0" width="0" height="100" />
      <rect id="p1-r2" class="color1" x="900" y="100" width="0" height="1400" />
      <rect id="p1-r3" class="color3" 
        x="400" y="100" width="400" height="1400" 
      opacity="0" />
      <rect id="p1-r4" class="color4" 
        x="100" y="900" width="700" height="100"
        opacity="0" 
      />
      <line id="p1-l1" class="line" x1="0" y1="100" x2="0" y2="100" />
      <line id="p1-l2" class="line" x1="100" y1="0" x2="100" y2="0" />
      <line id="p1-l3" class="line" x1="100" y1="1500" x2="100" y2="1500" />
      <line id="p1-l4" class="line" x1="800" y1="100" x2="800" y2="100" />
    </svg>
  </div>
</main>

<style>
  main {
    width: 100%;
    height: 100%;
  }
  svg {
    position: absolute;
    left: -0.1%;
    width: 100.2%;
    height: 100.1%;
    /* border: 4px solid blue; */
  }
</style>