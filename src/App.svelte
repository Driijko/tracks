<!-- SCRIPTS //////////////////////////////////////////// -->
<script>
  import setUp from "./toolkit/scripts/setUp";
  import Router from "./toolkit/components/1-site/Router.svelte";
  import AudioBkg from "./toolkit/components/1-site/AudioBkg.svelte";
  import SplashPage from "./toolkit/components/2-pages/splash/SplashPage.svelte";
  import OpeningPromptPage 
  from "./toolkit/components/2-pages/opening-prompt/OpeningPromptPage.svelte";
  import { resizing } from "./toolkit/scripts/viewport/resizeStore";

  setUp();

</script>

<!-- MARKUP ///////////////////////////////////// -->
<Router />
<!-- <p> 
  {$resizing}
</p> -->
<!-- <AudioBkg /> -->
<!-- <SplashPage /> -->
<!-- <OpeningPromptPage /> -->

<!-- STYLES /////////////////////////////// -->
<style>


</style>