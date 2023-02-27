<!-- SCRIPTS //////////////////////////////////////////////// -->
<script>
  // IMPORT---------------------------------------------------
  import { onMount } from "svelte";
  import { currentPage, pageExit } from "../stores/site.js";

  // ELEMENT/COMPONENT REFERENCES ------------------------------
  let splash;

  // LIFECYCLE ------------------------------------------------
  onMount(()=> {
    currentPage.set(splash);
  });

</script>

<!-- MARKUP /////////////////////////////////////////////////////// -->
<main bind:this={splash} class="page">
  
</main>

<!-- STYLES ////////////////////////////////////////////////////// -->
<style>
  main {
    background-color: red;
    width: 100%;
    height: 100%;
  }
</style>