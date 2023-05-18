<!-- SCRIPTS /////////////////////////////////// -->
<script>
  import { currentPage } from "../../scripts/currentPageStore";
  // import resizeStore from "../../scripts/viewport/resizeStore";
  import { resetCount } from "../../scripts/viewport/resizeStore";
  import LoadingPage from "../2-pages/LoadingPage.svelte";
  import AudioBkg from "../1-site/AudioBkg.svelte";
  import OpeningPromptPage 
  from "../2-pages/opening-prompt/OpeningPromptPage.svelte";
  import SplashPage from "../2-pages/splash/SplashPage.svelte";
  import SiteMenuModal from "../3-layers/site-menu/SiteMenuModal.svelte";
  import MusicPage from "../2-pages/music/MusicPage.svelte";
  import Notify from "../3-layers/Notify.svelte";
  import AboutPage from "../2-pages/about/AboutPage.svelte";
  import ContactPage from "../2-pages/contact/ContactPage.svelte";
</script>

<!-- MARKUP ///////////////////////////////////// -->
<AudioBkg />

{#key $resetCount}
  <Notify />
  {#if $currentPage === "loading"}
    <LoadingPage />
  {:else if $currentPage === "opening-prompt"}
    <OpeningPromptPage />
  {:else}
    <SiteMenuModal />
    {#if $currentPage === "splash"}
      <SplashPage />
    {:else if $currentPage === "music"}
      <MusicPage />
    {:else if $currentPage === "about"}
      <AboutPage />
    {:else if $currentPage === "contact"}
      <ContactPage />
    {/if}
  {/if}
{/key}