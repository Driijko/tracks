<!-- SCRIPTS ////////////////////////////////////// -->
<script>
  import viewportOrientationStore 
  from "../../../scripts/viewport/viewportOrientationStore";
  import About1 from "./1/About1.svelte";
  import About2 from "./2/About2.svelte";
  import About3 from "./3/About3.svelte";
  import About4 from "./4/About4.svelte";
  import About5 from "./5/About5.svelte";
  import About6 from "./6/About6.svelte";
  import About7 from "./7/About7.svelte";
  import SnapScroll from "../../4-layouts/partial/SnapScroll.svelte";
</script>

<!-- MARKUP /////////////////////////////////// -->
<div id="id14">
  <SnapScroll axis="vertical" handleScroll={null}>
    <About1 />
    <About2 />
    <About3 />
    <About4 />
    <About5 />
    <About6 />
    <About7 />
  </SnapScroll>
</div>
<!-- STYLES /////////////////////////////////// -->
<style>
@media (hover:hover) {
  #id14 :global(a:hover), #id14 :global(a:focus-visible) {
    background-color: black;
    color: white;
    text-decoration: none;
  }
}
</style>