<!-- SCRIPTS //////////////////////////////////////////////// -->
<script>
  // IMPORT---------------------------------------------------
  import { onMount } from "svelte";
  import { currentPage, pageExit } from "../stores/site.js";
  import SiteMenuModal from "../modules/SiteMenuModal.svelte";

  // ELEMENT/COMPONENT REFERENCES ------------------------------
  let splash;

  // LIFECYCLE ------------------------------------------------
  onMount(()=> {
    currentPage.set(splash);
  });

</script>

<main bind:this={splash} class="page vp">
  <SiteMenuModal />
</main>

<style>
  main {
    border: 4px solid red;
  }
</style>