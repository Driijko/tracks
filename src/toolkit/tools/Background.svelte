<!-- SCRIPTS //////////////////////////////////////////// -->
<script>
  import fullscreen from "../scripts/viewport/fullscreen";
</script>

<!-- MARKUP //////////////////////////////////// -->
<button on:click={()=> fullscreen(true)}>
  <svg viewBox="0 0 5999 3999">
    <filter id="filter1">
      <feImage x="0" y="0" width="5999" height="3999" result="IMAGE" xlink:href="./images/pic5.jpg" />
      <feBlend mode="multiply" in="SourceGraphic" in2="IMAGE" />
    </filter>
    <rect x="0" y="0" width="100%" height="100%" fill="hsl(37, 100%, 72%)" filter="url(#filter1)" />
    <!-- <rect x="0" y="0" width="100%" height="100%" fill="hsl(37, 59%, 62%)" filter="url(#filter1)" /> -->
  </svg>
  <!-- <img src="./images/pic5.jpg" alt="test" /> -->
</button>

<!-- STYLES ////////////////////////////////////// -->
<style>
  button {
    width: 100vw;
    height: var(--viewport-height);
    padding: 0%;
  }
  svg {
    width: 78%;
    /* height: 100%; */
    padding: 1%;
  }
  rect {
    width: 100%;
  }
  img {
    height: 100%;
    /* filter: grayscale(1) contrast(0.15) brightness(1.8); */
  }
</style>