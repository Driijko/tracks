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
  <div class="content-container">

  </div>
</main>

<style>
  main {
    width: 100%;
    height: 100%;
  }
</style>