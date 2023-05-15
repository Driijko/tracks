<!-- SCRIPTS //////////////////////////////////////////// -->
<script>
  import fullscreen from "../scripts/viewport/fullscreen";
</script>

<!-- MARKUP //////////////////////////////////// -->
<button on:click={()=> fullscreen(true)}>
  <img src="./images/pic2.jpg" alt="test" />
</button>

<!-- STYLES ////////////////////////////////////// -->
<style>
  button {
    width: 100vw;
    height: var(--viewport-height);
    padding: 0%;
  }
  img {
    height: 100%;
    /* filter: grayscale(1) contrast(0.15) brightness(1.8); */
    filter: contrast(0.1) brightness(1.9);
  }
</style>