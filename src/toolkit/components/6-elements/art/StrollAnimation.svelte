<!-- SCRIPTS ////////////////////////////////////////////// -->
<script>
  // IMPORTS ---------------------------
  import { gsap } from "gsap";
  import { onMount } from "svelte";
  import { audioBkgPaused, audioBkgCurrentTime, audioBkgRestartCount }
  from "../../../scripts/audioBkgStore";

  // ANIMATION
  const duration4 = 69;

  // ANIMATIONS ----------------------------
  function onComplete() {
    this.time(0).pause();
  }
  const tl = gsap.timeline({onComplete: onComplete});
  onMount(()=> {

    // STAGE 1 ------------------------------
    tl.to("#svg1 .path1", {
      duration: 44,
      ease: "power1.out",
      strokeDasharray: "1 15",
      attr: {
        d: "M 100,900 Q 300,300 800,50 Q 300,300 800,50"
      }
    },0);
    tl.to("#svg1 .path2", {
      duration: 44,
      ease: "power1.out",
      strokeDasharray: "1 15",
      attr: {
        d: "M 400,900 Q 300,300 800,50 Q 300,300 800,50"
      }
    },0);
    tl.to("#svg1 .path3", {
      duration: 44,
      ease: "power1.out",
      strokeDasharray: "1 15",
      attr: {
        d: "M 800,900 Q 300,300 800,50 Q 300,300 800,50"
      }
    },0);
    tl.to("#svg1 .path4", {
      duration: 44,
      ease: "power1.out",
      strokeDasharray: "1 15",
      attr: {
        d: "M 1200,900 Q 300,300 800,50 Q 300,300 800,50"
      }
    },0);
    tl.to("#svg1 .path5", {
      duration: 44,
      ease: "power1.out",
      strokeDasharray: "1 15",
      attr: {
        d: "M 1500,900 Q 300,300 800,50 Q 300,300 800,50"
      }
    },0);

    tl.to("#svg1 .path6", {
      duration: 44,
      ease: "power1.out",
      strokeDasharray: "1 15",
      attr: {
        d: "M 100,0 Q 1300,600 800,850 Q 1300,600 800,850"
      }
    },0);
    tl.to("#svg1 .path7", {
      duration: 44,
      ease: "power1.out",
      strokeDasharray: "1 15",
      attr: {
        d: "M 400,0 Q 1300,600 800,850 Q 1300,600 800,850"
      }
    },0);
    tl.to("#svg1 .path8", {
      duration: 44,
      ease: "power1.out",
      strokeDasharray: "1 15",
      attr: {
        d: "M 800,0 Q 1300,600 800,850 Q 1300,600 800,850"
      }
    },0);
    tl.to("#svg1 .path9", {
      duration: 44,
      ease: "power1.out",
      strokeDasharray: "1 15",
      attr: {
        d: "M 1200,0 Q 1300,600 800,850 Q 1300,600 800,850"
      }
    },0);
    tl.to("#svg1 .path10", {
      duration: 44,
      ease: "power1.out",
      strokeDasharray: "1 15",
      attr: {
        d: "M 1500,0 Q 1300,600 800,850 Q 1300,600 800,850"
      }
    },0);

    // STAGE 2 -------------------------------------
    tl.to("#svg1 .path1", {
      duration: 30,
      ease: "power1.out",
      strokeDasharray: "1 8",
      fill: "hsla(40, 100%, 50%, 0.1)",
      attr: {
        d: "M 100,900 Q -300,-500 1400,300 Q -300,-500 1400,300"
      }
    },44);
    tl.to("#svg1 .path2", {
      duration: 30,
      ease: "power1.out",
      strokeDasharray: "1 8",
      fill: "hsla(40, 100%, 50%, 0.1)",
      attr: {
        d: "M 400,900 Q -300,-500 1400,300 Q -300,-500 1400,300"
      }
    },44);
    tl.to("#svg1 .path3", {
      duration: 30,
      ease: "power1.out",
      strokeDasharray: "1 8",
      fill: "hsla(40, 100%, 50%, 0.1)",
      attr: {
        d: "M 800,900 Q -300,-500 1400,300 Q -300,-500 1400,300"
      }
    },44);
    tl.to("#svg1 .path4", {
      duration: 30,
      ease: "power1.out",
      strokeDasharray: "1 8",
      fill: "hsla(40, 100%, 50%, 0.1)",
      attr: {
        d: "M 1200,900 Q -300,-500 1400,300 Q -300,-500 1400,300"
      }
    },44);
    tl.to("#svg1 .path5", {
      duration: 30,
      ease: "power1.out",
      strokeDasharray: "1 8",
      fill: "hsla(40, 100%, 50%, 0.1)",
      attr: {
        d: "M 1500,900 Q -300,-500 1400,300 Q -300,-500 1400,300"
      }
    },44);

    tl.to("#svg1 .path6", {
      duration: 30,
      ease: "power1.out",
      strokeDasharray: "1 8",
      fill: "hsla(40, 100%, 50%, 0.1)",
      attr: {
        d: "M 100,0 Q 1900,1400 200,600 Q 1900,1400 200,600"
      }
    },44);
    tl.to("#svg1 .path7", {
      duration: 30,
      ease: "power1.out",
      strokeDasharray: "1 8",
      fill: "hsla(40, 100%, 50%, 0.1)",
      attr: {
        d: "M 400,0 Q 1900,1400 200,600 Q 1900,1400 200,600"
      }
    },44);
    tl.to("#svg1 .path8", {
      duration: 30,
      ease: "power1.out",
      strokeDasharray: "1 8",
      fill: "hsla(40, 100%, 50%, 0.1)",
      attr: {
        d: "M 800,0 Q 1900,1400 200,600 Q 1900,1400 200,600"
      }
    },44);
    tl.to("#svg1 .path9", {
      duration: 30,
      ease: "power1.out",
      strokeDasharray: "1 8",
      fill: "hsla(40, 100%, 50%, 0.1)",
      attr: {
        d: "M 1200,0 Q 1900,1400 200,600 Q 1900,1400 200,600"
      }
    },44);
    tl.to("#svg1 .path10", {
      duration: 30,
      ease: "power1.out",
      strokeDasharray: "1 8",
      fill: "hsla(40, 100%, 50%, 0.1)",
      attr: {
        d: "M 1500,0 Q 1900,1400 200,600 Q 1900,1400 200,600"
      }
    },44);

    // STAGE 3 -------------------------------------
    tl.to("#svg1 .path1", {
      duration: 12.5,
      ease: "power1.out",
      strokeWidth: 40,
      opacity: 0.3,
      yoyo: true,
      repeat: 1,
      strokeDasharray: "1 50",
    },74);
    tl.to("#svg1 .path2", {
      duration: 12.5,
      ease: "power1.out",
      strokeWidth: 40,
      opacity: 0.3,
      yoyo: true,
      repeat: 1,
      strokeDasharray: "1 50",
    },74);
    tl.to("#svg1 .path3", {
      duration: 12.5,
      ease: "power1.out",
      strokeWidth: 40,
      opacity: 0.3,
      yoyo: true,
      repeat: 1,
      strokeDasharray: "1 50",
    },74);
    tl.to("#svg1 .path4", {
      duration: 12.5,
      ease: "power1.out",
      strokeWidth: 40,
      opacity: 0.3,
      yoyo: true,
      repeat: 1,
      strokeDasharray: "1 50",
    },74);
    tl.to("#svg1 .path5", {
      duration: 12.5,
      ease: "power1.out",
      repeat: 1,
      strokeWidth: 40,
      opacity: 0.3,
      yoyo: true,
      strokeDasharray: "1 50",
    },74);

    tl.to("#svg1 .path6", {
      duration: 12.5,
      ease: "power1.out",
      strokeWidth: 40,
      opacity: 0.3,
      yoyo: true,
      repeat: 1,
      strokeDasharray: "1 50",
    },74);
    tl.to("#svg1 .path7", {
      duration: 12.5,
      ease: "power1.out",
      strokeWidth: 40,
      opacity: 0.3,
      yoyo: true,
      repeat: 1,
      strokeDasharray: "1 50",
    },74);
    tl.to("#svg1 .path8", {
      duration: 12.5,
      ease: "power1.out",
      strokeWidth: 40,
      opacity: 0.3,
      yoyo: true,
      repeat: 1,
      strokeDasharray: "1 50",
    },74);
    tl.to("#svg1 .path9", {
      duration: 12.5,
      ease: "power1.out",
      strokeWidth: 40,
      opacity: 0.3,
      yoyo: true,
      repeat: 1,
      strokeDasharray: "1 50",
    },74);
    tl.to("#svg1 .path10", {
      duration: 12.5,
      ease: "power1.out",
      strokeWidth: 40,
      opacity: 0.3,
      yoyo: true,
      repeat: 1,
      strokeDasharray: "1 50",
    },74);

    // STAGE 4 -------------------------------------
    tl.to("#svg1 .path1", {
      duration: 69,
      ease: "power1.out",
      strokeDasharray: "1 8",
      fill: "hsla(40, 100%, 70%, 0.1)",
      attr: {
        d: "M 100,900 Q -300,-500 1400,300 Q 1600,900 800,800"
      }
    },95.875);
    tl.to("#svg1 .path2", {
      duration: 69,
      ease: "power1.out",
      strokeDasharray: "1 8",
      fill: "hsla(40, 100%, 70%, 0.1)",
      attr: {
        d: "M 400,900 Q -300,-500 1400,300 Q 1600,900 800,600"
      }
    },95.875);
    tl.to("#svg1 .path3", {
      duration: 69,
      ease: "power1.out",
      strokeDasharray: "1 8",
      fill: "hsla(40, 100%, 70%, 0.1)",
      attr: {
        d: "M 800,900 Q -300,-500 1400,300 Q 1600,900 800,450"
      }
    },95.875);
    tl.to("#svg1 .path4", {
      duration: 69,
      ease: "power1.out",
      strokeDasharray: "1 8",
      fill: "hsla(40, 100%, 70%, 0.1)",
      attr: {
        d: "M 1200,900 Q -300,-500 1400,300 Q 1600,900 800,300"
      }
    },95.875);
    tl.to("#svg1 .path5", {
      duration: 69,
      ease: "power1.out",
      strokeDasharray: "1 8",
      fill: "hsla(40, 100%, 70%, 0.1)",
      attr: {
        d: "M 1500,900 Q -300,-500 1400,300 Q 1600,900 800,100"
      }
    },95.875);

    tl.to("#svg1 .path6", {
      duration: 69,
      ease: "power1.out",
      strokeDasharray: "1 8",
      fill: "hsla(40, 100%, 70%, 0.1)",
      attr: {
        d: "M 100,0 Q 1900,1400 200,600 Q 0,0 800,100"
      }
    },95.875);
    tl.to("#svg1 .path7", {
      duration: 69,
      ease: "power1.out",
      strokeDasharray: "1 8",
      fill: "hsla(40, 100%, 70%, 0.1)",
      attr: {
        d: "M 400,0 Q 1900,1400 200,600 Q 0,0 800,300"
      }
    },95.875);
    tl.to("#svg1 .path8", {
      duration: 69,
      ease: "power1.out",
      strokeDasharray: "1 8",
      fill: "hsla(40, 100%, 70%, 0.1)",
      attr: {
        d: "M 800,0 Q 1900,1400 200,600 Q 0,0 800,450"
      }
    },95.875);
    tl.to("#svg1 .path9", {
      duration: 69,
      ease: "power1.out",
      strokeDasharray: "1 8",
      fill: "hsla(40, 100%, 70%, 0.1)",
      attr: {
        d: "M 1200,0 Q 1900,1400 200,600 Q 0,0 800,600"
      }
    },95.875);
    tl.to("#svg1 .path10", {
      duration: 69,
      ease: "power1.out",
      strokeDasharray: "1 8",
      fill: "hsla(40, 100%, 70%, 0.1)",
      attr: {
        d: "M 1500,0 Q 1900,1400 200,600 Q 0,0 800,800"
      }
    },95.875);

    // REACT ON MOUNT ----------------------
    // In case animations get turned off and on.
    if ($audioBkgCurrentTime !== 0) {
      tl.seek($audioBkgCurrentTime);
    };

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

</script>

<!-- MARKUP //////////////////////////////////////////// -->
<svg id="svg1" viewBox="0 0 1600 900">

  <defs>
    <linearGradient id="gradient1" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="hsl(150, 100%, 90%)" />
      <stop offset="100%" stop-color="hsl(150, 100%, 50%)" />
    </linearGradient>
  </defs>

  <rect x="0" y="0" width="1600" height="900" fill="url(#gradient1)" />

  <path class="path1" stroke="hsl(150, 100%, 50%)" stroke-width="10"
    fill="hsla(40, 100%, 50%, 0)"
    stroke-dasharray="5 10" stroke-linejoin="round" stroke-linecap="round"
    d="M 100,900 Q 100,900 100,900 Q 100,900 100,900" 
  />

  <path class="path2" stroke="hsl(150, 100%, 50%)" stroke-width="10"
    fill="hsla(40, 100%, 50%, 0)"
    stroke-dasharray="5 10" stroke-linejoin="round" stroke-linecap="round"
    d="M 400,900 Q 400,900 400,900 Q 400,900 400,900" 
  />

  <path class="path3" stroke="hsl(150, 100%, 50%)" stroke-width="10"
    fill="hsla(40, 100%, 50%, 0)"
    stroke-dasharray="5 10" stroke-linejoin="round" stroke-linecap="round"
    d="M 800,900 Q 800,900 800,900 Q 800,900 800,900" 
  />

  <path class="path4" stroke="hsl(150, 100%, 50%)" stroke-width="10"
    fill="hsla(40, 100%, 50%, 0)"
    stroke-dasharray="5 10" stroke-linejoin="round" stroke-linecap="round"
    d="M 1200,900 Q 1200,900 1200,900 Q 1200 900, 1200, 900" 
  />
  
  <path class="path5" stroke="hsl(150, 100%, 50%)" stroke-width="10"
    fill="hsla(40, 100%, 50%, 0)"
    stroke-dasharray="5 10" stroke-linejoin="round" stroke-linecap="round"
    d="M 1500,900 Q 1500,900 1500,900 Q 1500,900 1500,900" 
  />

  <path class="path6" stroke="hsl(150, 100%, 50%)" stroke-width="10"
    fill="hsla(40, 100%, 50%, 0)"
    stroke-dasharray="5 10" stroke-linejoin="round" stroke-linecap="round"
    d="M 100,0 Q 100,0 100,0 Q 100,0 100,0" 
  />

  <path class="path7" stroke="hsl(150, 100%, 50%)" stroke-width="10"
    fill="hsla(40, 100%, 50%, 0)"
    stroke-dasharray="5 10" stroke-linejoin="round" stroke-linecap="round"
    d="M 400,0 Q 400,0 400,0 Q 400,0 400,0" 
  />

  <path class="path8" stroke="hsl(150, 100%, 50%)" stroke-width="10"
    fill="hsla(40, 100%, 50%, 0)"
    stroke-dasharray="5 10" stroke-linejoin="round" stroke-linecap="round"
    d="M 800,0 Q 800,0 800,0 Q 800,0 800,0" 
  />

  <path class="path9" stroke="hsl(150, 100%, 50%)" stroke-width="10"
    fill="hsla(40, 100%, 50%, 0)"
    stroke-dasharray="5 10" stroke-linejoin="round" stroke-linecap="round"
    d="M 1200,0 Q 1200,0 1200,0 Q 1200,0 1200,0" 
  />

  <path class="path10" stroke="hsl(150, 100%, 50%)" stroke-width="10"
    fill="hsla(40, 100%, 50%, 0)"
    stroke-dasharray="5 10" stroke-linejoin="round" stroke-linecap="round"
    d="M 1500,0 Q 1500,0 1500,0 Q 1500,0 1500,0" 
  />

</svg>

<!-- STYLES /////////////////////////////////////////////////// -->
<style>
  svg {
    width: 100%;
  }
</style>