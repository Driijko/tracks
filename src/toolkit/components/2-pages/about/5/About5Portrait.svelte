<!-- SCRIPTS /////////////////////////////////////////// -->
<script>
  // IMPORTS --------------------------------------
  import About5Content from "./About5Content.svelte";
</script>

<!-- MARKUP ////////////////////////////////////////////////// -->
<div id="this" class="uarr1-pad">
  <svg class="background" viewBox="0 0 900 1472">
    <rect x="0" y="0" width="900" height="1472" fill="hsla(150, 100%, 70%, 0.7)" />
  </svg>
  <About5Content />
</div>

<!-- STYLES ////////////////////////////////////////////// -->
<style>
#this {
  top: 0;
}
svg {
  width: 100%;
  height: 100%;
}
#this :global(section) {
  position: absolute;
  width: 100%;
  height: 100%;
}
#this :global(h3) {
  width: 100%;
  height: 8%;
  font-size: calc(var(--uarr1-width)/13);
  display: flex;
  align-items: center;
  justify-content: center;
  border-color: hsl(40, 100%, 50%);
  border-style: solid;
  border-bottom-width: calc(var(--uarr1-height)/100);
}
#this :global(ul) {
  position: absolute;
  width: 100%;
  top: 8%;
  height: 92%;
  display: flex;
  flex-direction: column;
  gap: calc(var(--uarr1-height)/100);
  justify-content: center;
}
#this :global(li) {
  height: 32%;
  background-color: hsl(150, 100%, 50%);
}
#this :global(h4) {
  padding-left: 3%;
  text-align: center;
  height: 17%;
  display: flex;
  align-items: center;
  font-size: calc(var(--uarr1-width)/16);
}
#this :global(.artist-pic) {
  height: 66%;
  width: 100%;
  object-fit: cover;
}
#this :global(.artist-pic[alt="Piet Mondrian"]) {
  object-position: 50% 10%;
}
#this :global(.artist-pic[alt="Agnes Martin"]) {
  object-position: 50% 65%;
}
#this :global(.artist-link-container) {
  display: flex;
  justify-content: flex-end;
  padding-right: 3%;
  height: 14%;
  align-items: center;
}
#this :global(a) {
  text-decoration: underline;
  font-size: calc(var(--uarr1-width)/19);
}
</style>