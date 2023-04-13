<!-- SCRIPTS /////////////////////////////////////////////////// -->
<script>
  import pageExit from "../../../helpers/pageExit";
</script>

<!-- MARKUP ///////////////////////////////////////////////////// -->
<ul id="music-nav">
  <li>
    <a href={"https://driijko.github.io/tracks"} on:click|preventDefault={()=>pageExit("ambient-light", 0)}
    >
      Dreamy Light Ambient
    </a>
  </li>
  <li>
    <a href={"https://driijko.github.io/tracks"}
    >
      Dark Moody Ambient
    </a>
  </li>
</ul>

<!-- STYLES ////////////////////////////////////////////////////// -->
<style>
ul {
  position: absolute;
  width: 100%;
  height: 100%;
}
ul li:nth-of-type(1) {
  color: white;
  text-shadow: 0 0 calc(var(--uarr-width)/100) white;
}
ul li:nth-of-type(2) {
  color: var(--color3);
  text-shadow: 0 0 calc(var(--uarr-width)/100) var(--color3);
}
a {
  display: block;
}
@media (hover:hover) {
a {
  transition-property: box-shadow;
  transition-timing-function: ease-out;
  transition-duration: 1s;
}
}
</style>