<!-- SCRIPTS //////////////////////////////////////////////// -->
<script>
  // IMPORT---------------------------------------------------
  import { onMount } from "svelte";
  import { currentPage, pageExit } from "../stores/site.js";

  // ELEMENT/COMPONENT REFERENCES ------------------------------
  let musicPage;

  // LIFECYCLE ------------------------------------------------
  onMount(()=> {
    currentPage.set(musicPage);
  });

</script>

<main bind:this={musicPage} class="page">
  
</main>

<style>
  main {
    border: 4px solid red;
    background-color: cyan;
  }
</style>