<!-- SCRIPTS ////////////////////////////////////////////// -->
<script>
  // IMPORTS ---------------------------
  import { gsap } from "gsap";
  import { onMount } from "svelte";
  import { audioBkgPaused, audioBkgCurrentTime, audioBkgRestartCount }
  from "../../../../scripts/audioBkgStore";
  import channel1Animation from "./channel1Animation";
  import channel2AAnimation from "./channel2AAnimation";
  import channel2BAnimation from "./channel2BAnimation";
  import channel2CAnimation from "./channel2CAnimation";

  // HELPERS -----------------------
  const fill1 = "hsla(50, 100%, 65%)";
  const fill2 = "hsl(50, 100%, 80%)";
  const fill3 = "hsla(50, 100%, 100%, 1)";
  const stroke1= "hsl(180, 100%, 50%)";
  const stroke2= "hsl(180, 100%,50%)";
  const stroke3= "hsla(180, 100%, 50%)";
  const strokeWidth1 = 5;
  const strokeWidth2 = 20;

  // ANIMATIONS ----------------------------
  const tl = gsap.timeline();
  onMount(()=> {

    tl.set("#svg4 .rect1", {transformOrigin: "50% 50%", rotate: 45, y: -900});
    tl.set("#svg4 .rect2", {transformOrigin: "50% 50%", rotate: 45, y: 900});
    tl.add(channel1Animation());
    tl.add(channel2AAnimation(), 16);
    tl.add(channel2BAnimation(), 32);
    tl.add(channel2AAnimation(), 48);
    tl.add(channel2AAnimation(), 96);
    tl.add(channel1Animation(),96);
    tl.add(channel2CAnimation(),96);

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
<svg id="svg4" viewBox="0 0 1600 900">

  <!-- CHANNEL 2A ------------------------------ -->
  <!-- LEFT SIDE -->
  <path class="path9 path10" fill={fill1} stroke={stroke2} stroke-width={strokeWidth1} 
    d="M 300,69 Q 800,450 300,831 H 0 V 69 Z" opacity="0.2"
  />
  <path class="path8 path10" fill={fill1} stroke={stroke2} stroke-width={strokeWidth1} 
    d="M 200,113 Q 800,450 200,787 H 0 V 113 Z" opacity="0.2"
  />
  <path class="path7 path10" fill={fill1} stroke={stroke2} stroke-width={strokeWidth1} 
    d="M 130,160 Q 800,450 130,740 H 0 V 160 Z" opacity="0.2"
  />
  <path class="path6 path10" fill={fill1} stroke={stroke2} stroke-width={strokeWidth1} 
    d="M 60,240 Q 800,450 60,660 H 0 V 240 Z" opacity="0.2"
  />


  <!-- RIGHT SIDE  -->
  <path class="path9 path10" fill={fill1} stroke={stroke2} stroke-width={strokeWidth1} 
    d="M 1300,69 Q 800,450 1300,831 H 1600 V 69 Z" opacity="0.2"
  />
  <path class="path8 path10" fill={fill1} stroke={stroke2} stroke-width={strokeWidth1} 
    d="M 1400,113 Q 800,450 1400,787 H 1600 V 113 Z" opacity="0.2"
  />
  <path class="path7 path10" fill={fill1} stroke={stroke2} stroke-width={strokeWidth1} 
    d="M 1470,160 Q 800,450 1470,740 H 1600 V 160 Z" opacity="0.2"
  />
  <path class="path6 path10" fill={fill1} stroke={stroke2} stroke-width={strokeWidth1} 
    d="M 1540,240 Q 800,450 1540,660 H 1600 V 240 Z" opacity="0.2"
  />

  <!-- TOP LEFT -->
  <path class="path5" fill={fill2} stroke={stroke2} stroke-width={strokeWidth1}
    d="M 5,450 V 5 H 800 Q 0,0 5,450"
  />
  <path class="path4" fill={fill2} stroke={stroke1} 
    stroke-width={strokeWidth1} 
    d="M 8,5 H 800 Q 220,0 60,240 Z"
  />
  <path class="path3" fill={fill2} stroke={stroke1} 
    stroke-width={strokeWidth1} 
    d="M 2,5 H 800 Q 320,0 130,160 Z"
  />
  <path class="path2" fill={fill2} stroke={stroke1}
    stroke-width={strokeWidth1} 
    d="M 2,5 H 800 Q 400,0 200,113 Z"
  />
  <path class="path1" fill={fill2} stroke={stroke1} 
    stroke-width={strokeWidth1} 
    d="M 2,5 H 800 Q 490,0 300,69 Z"
  />

  <!-- BOTTOM LEFT -->
  <path class="path5" fill={fill2} stroke={stroke2} stroke-width={strokeWidth1}
    d="M 5,450 V 895 H 800 Q 0,900 5,450"
  />
  <path class="path4" fill={fill2} stroke={stroke1} 
    stroke-width={strokeWidth1} 
    d="M 8,895 H 800 Q 220,900 60,660 Z"
  />
  <path class="path3" fill={fill2} stroke={stroke1} 
    stroke-width={strokeWidth1} 
    d="M 2,895 H 800 Q 320,900 130,740 Z"
  />
  <path class="path2" fill={fill2} stroke={stroke1}
    stroke-width={strokeWidth1} 
    d="M 2,895 H 800 Q 400,900 200,787 Z"
  />
  <path class="path1" fill={fill2} stroke={stroke1} 
    stroke-width={strokeWidth1} 
    d="M 2,895 H 800 Q 490,900 300,831 Z"
  />

  <!-- BOTTOM RIGHT -->
  <path class="path5" fill={fill2} stroke={stroke2} stroke-width={strokeWidth1}
    d="M 1595,450 V 895 H 800 Q 1600,900 1595,450"
  />
  <path class="path4" fill={fill2} stroke={stroke1} 
    stroke-width={strokeWidth1} 
    d="M 1600,895 H 800 Q 1380,900 1540,660 Z"
  />
  <path class="path3" fill={fill2} stroke={stroke1} 
    stroke-width={strokeWidth1} 
    d="M 1600,895 H 800 Q 1280,900 1470,740 Z"
  />
  <path class="path2" fill={fill2} stroke={stroke1}
    stroke-width={strokeWidth1} 
    d="M 1600,895 H 800 Q 1200,900 1400,787 Z"
  />
  <path class="path1" fill={fill2} stroke={stroke1} 
    stroke-width={strokeWidth1} 
    d="M 1600,895 H 800 Q 1110,900 1300,831 Z"
  />
  
  <!-- TOP RIGHT -->
  <path class="path5" fill={fill2} stroke={stroke2} stroke-width={strokeWidth1}
    d="M 1595,450 V 5 H 800 Q 1600,0 1595,450"
  />
  <path class="path4" fill={fill2} stroke={stroke1} 
    stroke-width={strokeWidth1} 
    d="M 1595,5 H 800 Q 1380,0 1540,240 Z"
  />
  <path class="path3" fill={fill2} stroke={stroke1} 
    stroke-width={strokeWidth1} 
    d="M 1595,5 H 800 Q 1280,0 1470,160 Z"
  />
  <path class="path2" fill={fill2} stroke={stroke1}
    stroke-width={strokeWidth1} 
    d="M 1595,5 H 800 Q 1200,0 1400,113 Z"
  />
  <path class="path1" fill={fill2} stroke={stroke1} 
    stroke-width={strokeWidth1} 
    d="M 1595,5 H 800 Q 1110,0 1300,69 Z"
  />

  <!-- CHANNEL 1 ---------- -->
  <circle class="circle4" cx="525" cy="450" r="210"
    fill={fill2} stroke={stroke1} stroke-width={strokeWidth1}
  />
  <circle class="circle4" cx="1075" cy="450" r="210"
    fill={fill2} stroke={stroke1} stroke-width={strokeWidth1}
  />
  <circle class="circle1" cx="525" cy="800" r="40"
    fill={fill2} stroke={stroke1} stroke-width={strokeWidth1}
  />
  <circle class="circle1" cx="525" cy="100" r="40"
    fill={fill2} stroke={stroke1} stroke-width={strokeWidth1}
  />
  <circle class="circle1" cx="1075" cy="100" r="40"
    fill={fill2} stroke={stroke1} stroke-width={strokeWidth1}
  />
  <circle class="circle1" cx="1075" cy="800" r="40"
    fill={fill2} stroke={stroke1} stroke-width={strokeWidth1}
  />

  <circle class="circle2" cx="525" cy="650" r="65"
    fill={fill2} stroke={stroke1} stroke-width={strokeWidth1}
  />
  <circle class="circle2" cx="525" cy="250" r="65"
    fill={fill2} stroke={stroke1} stroke-width={strokeWidth1}
  />
  <circle class="circle2" cx="1075" cy="650" r="65"
    fill={fill2} stroke={stroke1} stroke-width={strokeWidth1}
  />
  <circle class="circle2" cx="1075" cy="250" r="65"
    fill={fill2} stroke={stroke1} stroke-width={strokeWidth1}
  />

  <circle class="circle3" cx="525" cy="450" r="100"
    fill={fill2} stroke={stroke1} stroke-width={strokeWidth1}
  />
  <circle class="circle3" cx="1075" cy="450" r="100"
    fill={fill2} stroke={stroke1} stroke-width={strokeWidth1}
  />

  <!-- CHANNEL 2B------------------- -->
  <rect class="rect1" x="450" y="100" width="700" height="700"
    fill="hsl(250, 100%, 90%)" stroke={stroke1} stroke-width="10" opacity="1"
  />
  <rect class="rect2" x="450" y="100" width="700" height="700"
    fill="hsl(250, 100%, 90%)" stroke={stroke1} stroke-width="10" opacity="1"
  />

  <!-- TOP -->
  <path class="path11" fill={fill3} stroke={stroke3} 
    stroke-width={strokeWidth1} opacity="0.5"
    stroke-linejoin="round" stroke-linecap="round" stroke-dasharray="1 1"
    d="M 800,14 Q 850,400 350,450 Z"
  />
  <path class="path11" fill={fill3} stroke={stroke3} 
    stroke-width={strokeWidth1} opacity="0.5"
    stroke-linejoin="round" stroke-linecap="round" stroke-dasharray="1 1"
    d="M 800,14 Q 850,400 400,450 Z"
  />
  <path class="path11" fill={fill3} stroke={stroke3} 
    stroke-width={strokeWidth1} opacity="0.5"
    stroke-linejoin="round" stroke-linecap="round" stroke-dasharray="1 1"
    d="M 800,14 Q 850,400 450,450 Z"
  />
  <path class="path11" fill={fill3} stroke={stroke3} 
    stroke-width={strokeWidth1} opacity="0.5"
    stroke-linejoin="round" stroke-linecap="round" stroke-dasharray="1 1"
    d="M 800,14 Q 850,400 500,450 Z"
  />
  <path class="path11" fill={fill3} stroke={stroke3} 
    stroke-width={strokeWidth1} opacity="0.5"
    stroke-linejoin="round" stroke-linecap="round" stroke-dasharray="1 1"
    d="M 800,14 Q 850,400 550,450 Z"
  />
  <path class="path11" fill={fill3} stroke={stroke3} 
    stroke-width={strokeWidth1} opacity="0.5"
    stroke-linejoin="round" stroke-linecap="round" stroke-dasharray="1 1"
    d="M 800,14 Q 850,400 600,450 Z"
  />
  <path class="path11" fill={fill3} stroke={stroke3} 
    stroke-width={strokeWidth1} opacity="0.5"
    stroke-linejoin="round" stroke-linecap="round" stroke-dasharray="1 1"
    d="M 800,14 Q 850,400 650,450 Z"
  />
  <path class="path11" fill={fill3} stroke={stroke3} 
    stroke-width={strokeWidth1} opacity="0.5"
    stroke-linejoin="round" stroke-linecap="round" stroke-dasharray="1 1"
    d="M 800,14 Q 850,400 700,450 Z"
  />
  <path class="path11" fill={fill3} stroke={stroke3} 
    stroke-width={strokeWidth1} opacity="0.5"
    stroke-linejoin="round" stroke-linecap="round" stroke-dasharray="1 1"
    d="M 800,14 Q 850,400 750,450 Z"
  />
  <path class="path11" fill={fill3} stroke={stroke3} 
    stroke-width={strokeWidth1} opacity="0.5"
    stroke-linejoin="round" stroke-linecap="round" stroke-dasharray="1 1"
    d="M 800,14 Q 750,400 850,450 Z"
  />
  <path class="path11" fill={fill3} stroke={stroke3} 
    stroke-width={strokeWidth1} opacity="0.5"
    stroke-linejoin="round" stroke-linecap="round" stroke-dasharray="1 1"
    d="M 800,14 Q 750,400 900,450 Z"
  />
  <path class="path11" fill={fill3} stroke={stroke3} 
    stroke-width={strokeWidth1} opacity="0.5"
    stroke-linejoin="round" stroke-linecap="round" stroke-dasharray="1 1"
    d="M 800,14 Q 750,400 950,450 Z"
  />
  <path class="path11" fill={fill3} stroke={stroke3} 
    stroke-width={strokeWidth1} opacity="0.5"
    stroke-linejoin="round" stroke-linecap="round" stroke-dasharray="1 1"
    d="M 800,14 Q 750,400 1000,450 Z"
  />
  <path class="path11" fill={fill3} stroke={stroke3} 
    stroke-width={strokeWidth1} opacity="0.5"
    stroke-linejoin="round" stroke-linecap="round" stroke-dasharray="1 1"
    d="M 800,14 Q 750,400 1050,450 Z"
  />
  <path class="path11" fill={fill3} stroke={stroke3} 
    stroke-width={strokeWidth1} opacity="0.5"
    stroke-linejoin="round" stroke-linecap="round" stroke-dasharray="1 1"
    d="M 800,14 Q 750,400 1100,450 Z"
  />
  <path class="path11" fill={fill3} stroke={stroke3} 
    stroke-width={strokeWidth1} opacity="0.5"
    stroke-linejoin="round" stroke-linecap="round" stroke-dasharray="1 1"
    d="M 800,14 Q 750,400 1150,450 Z"
  />
  <path class="path11" fill={fill3} stroke={stroke3} 
    stroke-width={strokeWidth1} opacity="0.5"
    stroke-linejoin="round" stroke-linecap="round" stroke-dasharray="1 1"
    d="M 800,14 Q 750,400 1200,450 Z"
  />
  <path class="path11" fill={fill3} stroke={stroke3} 
    stroke-width={strokeWidth1} opacity="0.5"
    stroke-linejoin="round" stroke-linecap="round" stroke-dasharray="1 1"
    d="M 800,14 Q 750,400 1250,450 Z"
  />

  <!-- BOTTOM -->
  <path class="path12" fill={fill3} stroke={stroke3} 
    stroke-width={strokeWidth1} opacity="0.5"
    stroke-linejoin="round" stroke-linecap="round" stroke-dasharray="1 1"
    d="M 800,886 Q 750,500 1250,450 Z"
  />
  <path class="path12" fill={fill3} stroke={stroke3} 
    stroke-width={strokeWidth1} opacity="0.5"
    stroke-linejoin="round" stroke-linecap="round" stroke-dasharray="1 1"
    d="M 800,886 Q 750,500 1200,450 Z"
  />
  <path class="path12" fill={fill3} stroke={stroke3} 
    stroke-width={strokeWidth1} opacity="0.5"
    stroke-linejoin="round" stroke-linecap="round" stroke-dasharray="1 1"
    d="M 800,886 Q 750,500 1150,450 Z"
  />
  <path class="path12" fill={fill3} stroke={stroke3} 
    stroke-width={strokeWidth1} opacity="0.5"
    stroke-linejoin="round" stroke-linecap="round" stroke-dasharray="1 1"
    d="M 800,886 Q 750,500 1100,450 Z"
  />
  <path class="path12" fill={fill3} stroke={stroke3} 
    stroke-width={strokeWidth1} opacity="0.5"
    stroke-linejoin="round" stroke-linecap="round" stroke-dasharray="1 1"
    d="M 800,886 Q 750,500 1050,450 Z"
  />
  <path class="path12" fill={fill3} stroke={stroke3} 
    stroke-width={strokeWidth1} 
    stroke-linejoin="round" stroke-linecap="round" stroke-dasharray="1 1"
    d="M 800,886 Q 750,500 1000,450 Z"
  />
  <path class="path12" fill={fill3} stroke={stroke3} 
    stroke-width={strokeWidth1} opacity="0.5"
    stroke-linejoin="round" stroke-linecap="round" stroke-dasharray="1 1"
    d="M 800,886 Q 750,500 950,450 Z"
  />
  <path class="path12" fill={fill3} stroke={stroke3} 
    stroke-width={strokeWidth1} opacity="0.5"
    stroke-linejoin="round" stroke-linecap="round" stroke-dasharray="1 1"
    d="M 800,886 Q 750,500 900,450 Z"
  />
  <path class="path12" fill={fill3} stroke={stroke3} 
    stroke-width={strokeWidth1} opacity="0.5"
    stroke-linejoin="round" stroke-linecap="round" stroke-dasharray="1 1"
    d="M 800,886 Q 750,500 850,450 Z"
  />
  <path class="path12" fill={fill3} stroke={stroke3} 
    stroke-width={strokeWidth1} opacity="0.5"
    stroke-linejoin="round" stroke-linecap="round" stroke-dasharray="1 1"
    d="M 800,886 Q 850,500 750,450 Z"
  />
  <path class="path12" fill={fill3} stroke={stroke3} 
    stroke-width={strokeWidth1} opacity="0.5"
    stroke-linejoin="round" stroke-linecap="round" stroke-dasharray="1 1"
    d="M 800,886 Q 850,500 700,450 Z"
  />
  <path class="path12" fill={fill3} stroke={stroke3} 
    stroke-width={strokeWidth1} opacity="0.5"
    stroke-linejoin="round" stroke-linecap="round" stroke-dasharray="1 1"
    d="M 800,886 Q 850,500 650,450 Z"
  />
  <path class="path12" fill={fill3} stroke={stroke3} 
    stroke-width={strokeWidth1} opacity="0.5"
    stroke-linejoin="round" stroke-linecap="round" stroke-dasharray="1 1"
    d="M 800,886 Q 850,500 600,450 Z"
  />
  <path class="path12" fill={fill3} stroke={stroke3} 
    stroke-width={strokeWidth1} opacity="0.5"
    stroke-linejoin="round" stroke-linecap="round" stroke-dasharray="1 1"
    d="M 800,886 Q 850,500 550,450 Z"
  />
  <path class="path12" fill={fill3} stroke={stroke3} 
    stroke-width={strokeWidth1} opacity="0.5"
    stroke-linejoin="round" stroke-linecap="round" stroke-dasharray="1 1"
    d="M 800,886 Q 850,500 500,450 Z"
  />
  <path class="path12" fill={fill3} stroke={stroke3} 
    stroke-width={strokeWidth1} opacity="0.5"
    stroke-linejoin="round" stroke-linecap="round" stroke-dasharray="1 1"
    d="M 800,886 Q 850,500 450,450 Z"
  />
  <path class="path12" fill={fill3} stroke={stroke3} 
    stroke-width={strokeWidth1} opacity="0.5"
    stroke-linejoin="round" stroke-linecap="round" stroke-dasharray="1 1"
    d="M 800,886 Q 850,500 400,450 Z"
  />
  <path class="path12" fill={fill3} stroke={stroke3} 
    stroke-width={strokeWidth1} opacity="0.5"
    stroke-linejoin="round" stroke-linecap="round" stroke-dasharray="1 1"
    d="M 800,886 Q 850,500 350,450 Z"
  />
</svg>


<!-- STYLES /////////////////////////////////////////////////// -->
<style>
  svg {
    width: 100%;
  }
</style>