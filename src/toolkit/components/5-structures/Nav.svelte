<!-- SCRIPTS ////////////////////////////////////////////// -->
<script>
  // IMPORTS ------------------------------------------
  import { newPage, currentPage } from "../../scripts/currentPageStore";
  import { modals, siteMenuModal } from "../../scripts/modalsStore";
  import viewportOrientationStore 
  from "../../scripts/viewport/viewportOrientationStore";

  // EVENT HANDLERS -----------------------------------
  function handleClick(page) {
    modals.close("siteMenu");
    if ($currentPage !== page) {
      newPage(page);
    };
  };
</script>

<nav>
  {#if $siteMenuModal}
    <svg viewBox="0 0 1600 675" 
    preserveAspectRatio={$viewportOrientationStore === "portrait" ? "xMidYMax slice" : ""}
    >
      <defs>
        <pattern id="pattern1" viewBox="0,0,10,10" width="50%" height="50%">
          <circle cx="5" cy="5" r="5" fill="hsl(150, 100%, 55%)" 
            stroke="hsl(150, 100%, 70%)" stroke-width="1"
          />
          <circle cx="5" cy="5" r="1" fill="hsl(150, 100%, 90%)" 
            stroke="hsl(150, 100%, 70%)" stroke-width="1"
          />
        </pattern>
      </defs>
      <rect x="0" y="0" width="1600" height="675" fill="url(#pattern1)" />
      <rect x="520" y="10" width="560" height="650" 
        fill="hsla(150, 100%, 50%, 0.4" stroke="hsl(150, 100%, 70%" 
        stroke-width="5" rx="10"
      />
    </svg>
  {/if}
  <ul>
    <li>
      <a href="home" on:click|preventDefault={()=> handleClick("music")}>
        MUSIC
      </a>
    </li>
    <li>
      <a href="about" on:click|preventDefault={()=> handleClick("about")}>
        ABOUT
      </a>
    </li>
    <li>
      <a href="contact" on:click|preventDefault={()=> handleClick("contact")}>
        CONTACT
      </a>
    </li>
  </ul>
</nav>

<!-- STYLES /////////////////////////////// -->
<style>
nav {
  background-color: hsl(150, 100%, 60%);
  position: relative;
}
svg {
  width: 100%;
  height: 100%;
  position: absolute;
}
ul {
  position: absolute;
}
a {
  font-weight: 500;
  font-family: "Kodchasan";
}
@keyframes animate {
  0% {stroke: hsl(150, 100%, 70%); stroke-width: 1}
  50% {stroke: hsl(150, 100%, 45%); stroke-width: 10}
  100% {stroke: hsl(150, 100%, 70%); stroke-width: 1}
}
circle {
  animation: animate 10s infinite linear;
}
</style>