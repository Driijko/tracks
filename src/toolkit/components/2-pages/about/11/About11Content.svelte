<!-- SCRIPTS //////////////////////////////////////// -->
<script>
  import { newPage } from "../../../../scripts/currentPageStore";
</script>

<!-- MARKUP ///////////////////////////////////////////////// -->
<ul>
  <li>
    <a class="page-link" href="home" on:click|preventDefault={()=> newPage("music")}>
      MUSIC
    </a>
  </li>
  <li>
    <a class="page-link" href="about" on:click|preventDefault={()=> newPage("contact")}>
      CONTACT
    </a>
  </li>
</ul>

<!-- STYLES ///////////////////////////////////////////////// -->
<style>
a {
  padding: 5%;
}
</style>