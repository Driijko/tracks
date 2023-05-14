<!-- SCRIPTS //////////////////////////////////////////// -->
<script>
  import setUp from "./toolkit/scripts/setUp";
  import Router from "./toolkit/components/1-site/Router.svelte";
  import AudioBkg from "./toolkit/components/1-site/AudioBkg.svelte";
  import SplashPage from "./toolkit/components/2-pages/splash/SplashPage.svelte";
  import OpeningPromptPage 
  from "./toolkit/components/2-pages/opening-prompt/OpeningPromptPage.svelte";
  import { resizing } from "./toolkit/scripts/viewport/resizeStore";
  import SiteMenuModal 
  from "./toolkit/components/3-layers/site-menu/SiteMenuModal.svelte";
  import Background from "./toolkit/tools/Background.svelte";

  setUp();

</script>

<!-- MARKUP ///////////////////////////////////// -->
<Router />
<!-- <Background /> -->
<!-- <SiteMenuModal /> -->
<!-- <AudioBkg /> -->
<!-- <SplashPage /> -->
<!-- <OpeningPromptPage /> -->


<!-- STYLES /////////////////////////////// -->
<style>

</style>