<!-- SCRIPTS ///////////////////////////////////////////////// -->
<script>
  // IMPORTS ------------------------------------------------------
  import Layer from "../../Layer.svelte";
  import SplashPortrait from "./SplashPortrait.svelte";
  import SplashLandscape from "./SplashLandscape.svelte";
</script>

<!-- MARKUP /////////////////////////////////////////////////// -->
<Layer>
  <SplashPortrait slot="portraitVersion" />
  <SplashLandscape slot="landscapeVersion" />
</Layer>