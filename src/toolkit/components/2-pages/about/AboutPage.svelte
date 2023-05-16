<!-- SCRIPTS ////////////////////////////////////// -->
<script>
  import viewportOrientationStore 
  from "../../../scripts/viewport/viewportOrientationStore";
  import About1 from "./1/About1.svelte";
  import About2 from "./2/About2.svelte";
  import SnapScroll from "../../4-layouts/partial/SnapScroll.svelte";
</script>

<!-- MARKUP /////////////////////////////////// -->
<SnapScroll axis="vertical" handleScroll={null}>
  <About1 />
  <About2 />
</SnapScroll>

<style>
</style>