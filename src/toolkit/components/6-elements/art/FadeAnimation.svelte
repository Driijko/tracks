<!-- SCRIPTS ////////////////////////////////////////////// -->
<script>
  // IMPORTS ---------------------------
  import { gsap } from "gsap";
  import { onMount } from "svelte";
  import { audioBkgPaused, audioBkgCurrentTime, audioBkgRestartCount }
  from "../../../scripts/audioBkgStore";

  // ANIMATIONS ----------------------------
  function onComplete() {
    // this.time(0).pause();
    console.log("complete");
  }
  const tl = gsap.timeline({onComplete: onComplete, defaults: {ease: "none"}});
  onMount(()=> {

    tl.to("#svg2 .rect5", {
      duration: 160,
      opacity: 1,
    },0);
    tl.to("#svg2 .rect6", {
      duration: 80,
      opacity: 0.4,
    },0);
    tl.to("#svg2 .line1", {
      duration: 10,
      attr: {y2: 200}
    },0);
    tl.to("#svg2 .line2", {
      duration: 10,
      attr: {x2: 200}
    },0);
    tl.to("#svg2 .line3", {
      duration: 10,
      attr: {y2: 700}
    },0);
    tl.to("#svg2 .line4", {
      duration: 10,
      attr: {x2: 1400}
    },0);
    tl.to("#svg2 .line5", {
      duration: 40,
      attr: {x2: 800}
    },10);
    tl.to("#svg2 .line6", {
      duration: 22.5,
      attr: {y2: 450}
    },10);
    tl.to("#svg2 .line7", {
      duration: 22.5,
      attr: {y2: 450}
    },10);
    tl.to("#svg2 .line8", {
      duration: 40,
      attr: {x2: 800}
    },10);
    tl.to("#svg2 .rect2", {
      opacity: 0.3,
      duration: 10,
    },20);
    tl.to("#svg2 .rect2-1", {
      opacity: 1,
      duration: 10,
    },20);
    tl.to("#svg2 .rect3", {
      opacity: 0.6,
      duration: 20,
    },17);
    tl.to("#svg2 .line21", {
      duration: 17.5,
      attr: {y2: 450}
    },22);
    tl.to("#svg2 .line27", {
      duration: 10,
      attr: {x2: 430}
    },39.5);
    tl.to("#svg2 .line28", {
      duration: 10,
      attr: {x2: 1170}
    },39.5);
    tl.to("#svg2 .line22", {
      duration: 17.5,
      attr: {y2: 470}
    },23.5);
    tl.to("#svg2 .line23", {
      duration: 17.5,
      attr: {y2: 430}
    },23.5);
    tl.to("#svg2 .line24", {
      duration: 9.2,
      attr: {x2: 450}
    },41);
    tl.to("#svg2 .line25", {
      duration: 9.2,
      attr: {x2: 1150}
    },41);
    tl.to("#svg2 .line26", {
      duration: 1,
      attr: {y2: 450}
    },50.2);
    tl.to("#svg2 .line9", {
      duration: 15,
      attr: {y2: 500}
    },25);
    tl.to("#svg2 .line10", {
      duration: 15,
      attr: {y2: 400}
    },25);
    tl.to("#svg2 .line11", {
      duration: 10,
      attr: {x2: 500}
    },40);
    tl.to("#svg2 .line12", {
      duration: 10,
      attr: {x2: 1100}
    },40);
    tl.to("#svg2 .line13", {
      duration: 10,
      attr: {y2: 600}
    },50);
    tl.to("#svg2 .line14", {
      duration: 10,
      attr: {y2: 300}
    },50);
    tl.to("#svg2 .line15", {
      duration: 10,
      attr: {x2: 700}
    },60);
    tl.to("#svg2 .line16", {
      duration: 10,
      attr: {x2: 900}
    },60);
    tl.to("#svg2 .line17", {
      duration: 5,
      attr: {y2: 400}
    },70);
    tl.to("#svg2 .line18", {
      duration: 5,
      attr: {y2: 500}
    },70);
    tl.to("#svg2 .line19", {
      duration: 10,
      attr: {x2: 500}
    },75);
    tl.to("#svg2 .line20", {
      duration: 10,
      attr: {x2: 1100}
    },75);
    tl.to("#svg2 .line29", {
      duration: 10,
      attr: {x2: 790}
    },52.5);
    tl.to("#svg2 .line30", {
      duration: 10,
      attr: {x2: 810}
    },52.5);
    tl.to("#svg2 .line31", {
      duration: 17.5,
      attr: {y1: 100, y2: 800}
    },62.5);
    tl.to("#svg2 .line32", {
      duration: 15,
      attr: {x2: 100}
    },80);
    tl.to("#svg2 .line33", {
      duration: 15,
      attr: {x2: 1500}
    },80);
    tl.to("#svg2 .line34", {
      duration: 15,
      attr: {y2: 450}
    },95);
    tl.to("#svg2 .rect7", {
      duration: 40,
      opacity: 1,
    },60);
    tl.to("#svg2 .rect6", {
      duration: 40,
      opacity: 1,
      fill: "hsl(50, 100%, 90%)"
    },80);
    tl.to("#svg2 line", {
      duration: 60,
      stroke: "hsl(50, 100%, 50%)",
    },80); 

    return (()=> {
      tl.kill();
    });
  });

  // REACTIVE -------------------------
  $: if ($audioBkgPaused) {
    tl.pause();
  } else {
    tl.play();
  };

  $: if ($audioBkgRestartCount) {
    tl.restart();
  }

  $: if (tl.time() !== $audioBkgCurrentTime) {
    tl.seek($audioBkgCurrentTime);
  }

</script>

<!-- MARKUP //////////////////////////////////////////// -->
<div>
  <svg id="svg2" viewBox="0 0 1600 900">

    <defs>
      <pattern id="pattern1" viewBox="0 0 100 100" width="6.25%" height="11.11%">
        <rect class="rect5" x="20" y="20" width="60" height="60"
          fill="hsl(50, 100%, 90%)" opacity="0.1"
        />
        <line x1="0" y1="0" x2="100" y2="0"
          stroke-width="5" stroke="hsl(50, 100%, 90%" 
        />
      </pattern>
    </defs>
  
    <rect class="rect1" x="0" y="0" width="1600" height="900" fill="hsl(50, 100%, 80%" />
  
    <rect class="rect4" x="0" y="0" width="1600" height="900" 
      fill="url(#pattern1)"
    />
  
    <rect class="rect2" x="3" y="3" width="198" height="198"
      fill="hsl(50, 100%, 50%)" opacity="0"
    />
    <rect class="rect2" x="1398" y="3" width="198" height="198"
      fill="hsl(50, 100%, 50%)" opacity="0" 
    />
    <rect class="rect2" x="1398" y="698" width="198" height="198"
      fill="hsl(50, 100%, 50%)" opacity="0" 
    />
    <rect class="rect2" x="3" y="698" width="198" height="198"
      fill="hsl(50, 100%, 50%)" opacity="0" 
    />
  
    <rect class="rect2-1" x="50" y="50" width="100" height="100"
      fill="hsl(50, 100%, 90%)" opacity="0"
    />
    <rect class="rect2-1" x="50" y="750" width="100" height="100"
      fill="hsl(50, 100%, 90%)" opacity="0" 
    />
    <rect class="rect2-1" x="1450" y="50" width="100" height="100"
      fill="hsl(50, 100%, 90%)" opacity="0" 
    />
    <rect class="rect2-1" x="1450" y="750" width="100" height="100"
      fill="hsl(50, 100%, 90%)" opacity="0" 
    />
  
    <rect class="rect3" x="200" y="200" width="1200" height="500" 
      fill="hsl(50, 100%, 50%)" opacity="0"
    />
  
    <rect class="rect6" x="100" y="100" width="690" height="700" 
      fill="hsl(50, 100%, 50%)" opacity="0"
    />
    <rect class="rect6" x="810" y="100" width="690" height="700" 
      fill="hsl(50, 100%, 50%)" opacity="0"
    />
  
    <rect class="rect7" x="500" y="300" width="200" height="100" 
      fill="hsl(50, 100%, 90%)" opacity="0"
    />
    <rect class="rect7" x="500" y="500" width="200" height="100" 
      fill="hsl(50, 100%, 90%)" opacity="0"
    />
    <rect class="rect7" x="900" y="300" width="200" height="100" 
      fill="hsl(50, 100%, 90%)" opacity="0"
    />
    <rect class="rect7" x="900" y="500" width="200" height="100" 
      fill="hsl(50, 100%, 90%)" opacity="0"
    />
  
    <line class="line1" stroke="hsl(50, 100%, 100%)" stroke-width="5"
      x1="5" y1="3" x2="5" y2="3"
    />
    <line class="line1" stroke="hsl(50, 100%, 100%)" stroke-width="5"
      x1="1595" y1="0" x2="1595" y2="0"
    />
    <line class="line2" stroke="hsl(50, 100%, 100%)" stroke-width="5"
      x1="3" y1="5" x2="3" y2="5"
    />
    <line class="line2" stroke="hsl(50, 100%, 100%)" stroke-width="5"
      x1="3" y1="895" x2="3" y2="895"
    />
    <line class="line3" stroke="hsl(50, 100%, 100%)" stroke-width="5"
      x1="5" y1="897" x2="5" y2="897"
    />
    <line class="line3" stroke="hsl(50, 100%, 100%)" stroke-width="5"
      x1="1595" y1="897" x2="1595" y2="897"
    />
    <line class="line4" stroke="hsl(50, 100%, 100%)" stroke-width="5"
      x1="1597" y1="5" x2="1597" y2="5"
    />
    <line class="line4" stroke="hsl(50, 100%, 100%)" stroke-width="5"
      x1="1597" y1="895" x2="1597" y2="895"
    />
  
    <line class="line5" stroke="hsl(50, 100%, 100%)" stroke-width="5"
      x1="3" y1="200" x2="3" y2="200"
    />
    <line class="line5" stroke="hsl(50, 100%, 100%)" stroke-width="5"
      x1="3" y1="700" x2="3" y2="700"
    />
    <line class="line6" stroke="hsl(50, 100%, 100%)" stroke-width="5"
      x1="200" y1="3" x2="200" y2="3"
    />
    <line class="line6" stroke="hsl(50, 100%, 100%)" stroke-width="5"
      x1="1400" y1="3" x2="1400" y2="3"
    />
    <line class="line7" stroke="hsl(50, 100%, 100%)" stroke-width="5"
      x1="200" y1="897" x2="200" y2="897"
    />
    <line class="line7" stroke="hsl(50, 100%, 100%)" stroke-width="5"
      x1="1400" y1="897" x2="1400" y2="897"
    />
    <line class="line8" stroke="hsl(50, 100%, 100%)" stroke-width="5"
      x1="1597" y1="200" x2="1597" y2="200"
    />
    <line class="line8" stroke="hsl(50, 100%, 100%)" stroke-width="5"
      x1="1597" y1="700" x2="1597" y2="700"
    />
  
    <line class="line9" stroke="hsl(50, 100%, 100%)" stroke-width="5"
      x1="300" y1="700" x2="300" y2="700"
    />
    <line class="line9" stroke="hsl(50, 100%, 100%)" stroke-width="5"
      x1="1300" y1="700" x2="1300" y2="700"
    />
    <line class="line10" stroke="hsl(50, 100%, 100%)" stroke-width="5"
      x1="300" y1="200" x2="300" y2="200"
    />
    <line class="line10" stroke="hsl(50, 100%, 100%)" stroke-width="5"
      x1="1300" y1="200" x2="1300" y2="200"
    />
  
    <line class="line11" stroke="hsl(50, 100%, 100%)" stroke-width="5"
      x1="298" y1="400" x2="298" y2="400"
    />
    <line class="line11" stroke="hsl(50, 100%, 100%)" stroke-width="5"
      x1="298" y1="500" x2="298" y2="500"
    />
    <line class="line12" stroke="hsl(50, 100%, 100%)" stroke-width="5"
      x1="1302" y1="400" x2="1302" y2="400"
    />
    <line class="line12" stroke="hsl(50, 100%, 100%)" stroke-width="5"
      x1="1302" y1="500" x2="1302" y2="500"
    />
  
    <line class="line13" stroke="hsl(50, 100%, 100%)" stroke-width="5"
      x1="500" y1="400" x2="500" y2="400"
    />
    <line class="line13" stroke="hsl(50, 100%, 100%)" stroke-width="5"
      x1="1100" y1="400" x2="1100" y2="400"
    />
    <line class="line14" stroke="hsl(50, 100%, 100%)" stroke-width="5"
      x1="1100" y1="500" x2="1100" y2="500"
    />
    <line class="line14" stroke="hsl(50, 100%, 100%)" stroke-width="5"
      x1="500" y1="500" x2="500" y2="500"
    />
  
    <line class="line15" stroke="hsl(50, 100%, 100%)" stroke-width="5"
      x1="498" y1="300" x2="498" y2="300"
    />
    <line class="line15" stroke="hsl(50, 100%, 100%)" stroke-width="5"
      x1="498" y1="600" x2="498" y2="600"
    />
    <line class="line16" stroke="hsl(50, 100%, 100%)" stroke-width="5"
      x1="1102" y1="300" x2="1102" y2="300"
    />
    <line class="line16" stroke="hsl(50, 100%, 100%)" stroke-width="5"
      x1="1102" y1="600" x2="1102" y2="600"
    />
  
    <line class="line17" stroke="hsl(50, 100%, 100%)" stroke-width="5"
      x1="700" y1="298" x2="700" y2="298"
    />
    <line class="line17" stroke="hsl(50, 100%, 100%)" stroke-width="5"
      x1="900" y1="298" x2="900" y2="298"
    />
    <line class="line18" stroke="hsl(50, 100%, 100%)" stroke-width="5"
      x1="700" y1="603" x2="700" y2="603"
    />
    <line class="line18" stroke="hsl(50, 100%, 100%)" stroke-width="5"
      x1="900" y1="603" x2="900" y2="603"
    />
  
    <line class="line19" stroke="hsl(50, 100%, 100%)" stroke-width="5"
      x1="702" y1="400" x2="702" y2="400"
    />
    <line class="line19" stroke="hsl(50, 100%, 100%)" stroke-width="5"
      x1="702" y1="500" x2="702" y2="500"
    />
    <line class="line20" stroke="hsl(50, 100%, 100%)" stroke-width="5"
      x1="898" y1="400" x2="898" y2="400"
    />
    <line class="line20" stroke="hsl(50, 100%, 100%)" stroke-width="5"
      x1="898" y1="500" x2="898" y2="500"
    />
  
    <line class="line21" stroke="hsl(50, 100%, 100%)" stroke-width="5"
      x1="233" y1="200" x2="233" y2="200"
    />
    <line class="line21" stroke="hsl(50, 100%, 100%)" stroke-width="5"
      x1="1366" y1="200" x2="1366" y2="200"
    />
  
    <line class="line21" stroke="hsl(50, 100%, 100%)" stroke-width="5"
      x1="233" y1="700" x2="233" y2="700"
    />
    <line class="line21" stroke="hsl(50, 100%, 100%)" stroke-width="5"
      x1="1366" y1="700" x2="1366" y2="700"
    />
  
    <line class="line22" stroke="hsl(50, 100%, 100%)" stroke-width="5"
      x1="266" y1="700" x2="266" y2="700"
    />
    <line class="line22" stroke="hsl(50, 100%, 100%)" stroke-width="5"
      x1="1333" y1="700" x2="1333" y2="700"
    />
    <line class="line23" stroke="hsl(50, 100%, 100%)" stroke-width="5"
      x1="266" y1="200" x2="266" y2="200"
    />
    <line class="line23" stroke="hsl(50, 100%, 100%)" stroke-width="5"
      x1="1333" y1="200" x2="1333" y2="200"
    />
  
    <line class="line24" stroke="hsl(50, 100%, 100%)" stroke-width="5"
      x1="264" y1="430" x2="264" y2="430"
    />
    <line class="line24" stroke="hsl(50, 100%, 100%)" stroke-width="5"
      x1="264" y1="470" x2="264" y2="470"
    />
    <line class="line25" stroke="hsl(50, 100%, 100%)" stroke-width="5"
      x1="1335" y1="430" x2="1335" y2="430"
    />
    <line class="line25" stroke="hsl(50, 100%, 100%)" stroke-width="5"
      x1="1335" y1="470" x2="1335" y2="470"
    />
  
    <line class="line26" stroke="hsl(50, 100%, 100%)" stroke-width="5"
      x1="450" y1="428" x2="450" y2="428"
    />
    <line class="line26" stroke="hsl(50, 100%, 100%)" stroke-width="5"
      x1="450" y1="472" x2="450" y2="472"
    />
    <line class="line26" stroke="hsl(50, 100%, 100%)" stroke-width="5"
      x1="1150" y1="428" x2="1150" y2="428"
    />
    <line class="line26" stroke="hsl(50, 100%, 100%)" stroke-width="5"
      x1="1150" y1="472" x2="1150" y2="472"
    />
  
    <line class="line27" stroke="hsl(50, 100%, 100%)" stroke-width="5"
      x1="233" y1="450" x2="233" y2="450"
    />
    <line class="line28" stroke="hsl(50, 100%, 100%)" stroke-width="5"
      x1="1366" y1="450" x2="1366" y2="450"
    />
  
    <line class="line29" stroke="hsl(50, 100%, 100%)" stroke-width="5"
      x1="500" y1="450" x2="500" y2="450"
    />
    <line class="line30" stroke="hsl(50, 100%, 100%)" stroke-width="5"
      x1="1100" y1="450" x2="1100" y2="450"
    />
  
    <line class="line31" stroke="hsl(50, 100%, 100%)" stroke-width="5"
      x1="790" y1="450" x2="790" y2="450"
    />
    <line class="line31" stroke="hsl(50, 100%, 100%)" stroke-width="5"
      x1="810" y1="450" x2="810" y2="450"
    />
  
    <line class="line32" stroke="hsl(50, 100%, 100%)" stroke-width="5"
      x1="792" y1="100" x2="792" y2="100"
    />
    <line class="line32" stroke="hsl(50, 100%, 100%)" stroke-width="5"
      x1="792" y1="800" x2="792" y2="800"
    />
    <line class="line33" stroke="hsl(50, 100%, 100%)" stroke-width="5"
      x1="808" y1="100" x2="808" y2="100"
    />
    <line class="line33" stroke="hsl(50, 100%, 100%)" stroke-width="5"
      x1="808" y1="800" x2="808" y2="800"
    />
  
    <line class="line34" stroke="hsl(50, 100%, 100%)" stroke-width="5"
      x1="100" y1="98" x2="100" y2="98"
    />
    <line class="line34" stroke="hsl(50, 100%, 100%)" stroke-width="5"
      x1="1500" y1="802" x2="1500" y2="802"
    />
    <line class="line34" stroke="hsl(50, 100%, 100%)" stroke-width="5"
      x1="1500" y1="98" x2="1500" y2="98"
    />
    <line class="line34" stroke="hsl(50, 100%, 100%)" stroke-width="5"
      x1="100" y1="802" x2="100" y2="802"
    />
  </svg>
</div>


<!-- STYLES /////////////////////////////////////////////////// -->
<style>
  div {
    width: 100%; 
    height: 100%;
    background-color: hsl(50, 100%, 80%);
  }
  svg {
    width: 100%;
    transform: scale(0.8)
  }
</style>