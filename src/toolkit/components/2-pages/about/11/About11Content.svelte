<!-- SCRIPTS //////////////////////////////////////// -->
<script>
  import { newPage } from "../../../../scripts/currentPageStore";
</script>

<!-- MARKUP ///////////////////////////////////////////////// -->
<ul>
  <li>
    <a href="home" on:click|preventDefault={()=> newPage("music")}>
      MUSIC
    </a>
  </li>
  <li>
    <a href="about" on:click|preventDefault={()=> newPage("contact")}>
      CONTACT
    </a>
  </li>
</ul>

<!-- STYLES ///////////////////////////////////////////////// -->
<style>
h3 {
  font-family: "Tenor Sans", sans-serif;
  font-weight: 400;
}
</style>