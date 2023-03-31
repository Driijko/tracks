<!-- SCRIPTS ///////////////////////////////////////////////// -->
<script>
  // IMPORTS ------------------------------------------------------
  import currentPageName from "./stores/currentPageName";
  import setUp from "./helpers/setUp";
  import resetCount from "./stores/resetCount";
  import LoadingScreen from "./components/layers/LoadingScreen.svelte";

  setUp();
</script>

<!-- MARKUP ///////////////////////////////////////////////////// -->
{#key resetCount}
  {#if $currentPageName === "loading-screen"}
    <LoadingScreen />
  {/if}
{/key}