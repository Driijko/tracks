<!-- SCRIPTS ///////////////////////////////////////////////////// -->
<script>
  // IMPORTS ------------------------------------------------------
  import OpeningPromptPortrait from "./OpeningPromptPortrait.svelte";
  import OpeningPromptLandscape from "./OpeningPromptLandscape.svelte";
  import Layer from "../../Layer.svelte";
</script>

<!-- MARKUP /////////////////////////////////////////////////////// -->
<Layer>
  <OpeningPromptPortrait slot="portraitVersion" />
  <OpeningPromptLandscape slot="landscapeVersion" />
</Layer>