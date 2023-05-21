<!-- SCRIPTS /////////////////////////////////////////// -->
<script>
  // IMPORTS --------------------------------------
  import About6Content from "./About6Content.svelte";
</script>

<!-- MARKUP ////////////////////////////////////////////////// -->
<div id="this" class="uarr2">
  <svg class="background" viewBox="0 0 1600 900">
    <rect x="0" y="0" width="1600" height="900" fill="hsla(150, 100%, 70%, 0.7)" />
  </svg>
  <About6Content />
</div>

<!-- STYLES ////////////////////////////////////////////// -->
<style>
svg {
  width: 100%;
  height: 100%;
}
#this :global(.musical-influences-section) {
  position: absolute;
  top: 0%;
  width: 100%;
  height: 100%;
}
#this :global(h3) {
  font-size: calc(var(--uarr2-width)/20);
  width: 100%;
  text-align: center;
  top: 5%;
  padding: calc(var(--uarr2-height)/100);
  border-color: hsl(40, 100%, 50%);
  border-style: solid;
  border-top-width: calc(var(--uarr2-height)/100);
  border-bottom-width: calc(var(--uarr2-height)/100);
}
#this :global(ul) {
  position: absolute;
  top: 20%;
  width: 100%;
  height: 75%;
  display: flex;
  justify-content: center;
  gap: 3%;
}
#this :global(li) {
  width: 30%;
  border: 1px solid black;
  border-color: hsl(40, 100%, 50%);
  border-style: solid;
  border-width: calc(var(--uarr2-width)/200);
  border-radius: calc(var(--uarr2-width)/100);
  background-color: hsla(150, 100%, 50%, 0.3);
}
#this :global(h4) {
  font-size: calc(var(--uarr2-width)/50);
  background-color: hsl(150, 100%, 50%);
  border-radius: calc(var(--uarr2-width)/100) calc(var(--uarr2-width)/100) 0 0;
  height: 10%;
  display: flex;
  align-items: center;
  padding-left: 2%;
}
#this :global(.project-pic) {
  height: 50%;
  width: 100%;
  object-fit: cover;
  object-position: 50% 20%;
}
#this :global(.bottom) {
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10%;
}
#this :global(.project-description) {
  position: initial;
  background-color: transparent;
  text-align: center;
  padding: 0;
}
#this :global(.project-link-container) {
  font-size: calc(var(--uarr2-width)/70);
  display: block;
  text-decoration: underline;
  width: 100%;
  text-align: center;
  padding-top: 4%;
}
#this :global(.project-link) {
  padding: 3%;
}
#this :global(.painting) {
  height: 40%;
  width: 100%;
  padding-top: 7%;
}
</style>