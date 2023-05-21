<!-- SCRIPTS /////////////////////////////////////////// -->
<script>
  // IMPORTS --------------------------------------
  import About4Content from "./About4Content.svelte";
</script>

<!-- MARKUP ////////////////////////////////////////////////// -->
<div id="this" class="uarr1-pad">
  <svg class="background" viewBox="0 0 900 1472">
    <rect x="0" y="0" width="900" height="1472" fill="hsl(150, 100%, 80%)" />
    <!-- <rect x="840" y="30" width="40" height="120" fill="hsl(40, 100%, 80%)" />
    <rect x="25" y="1320" width="40" height="120" fill="hsl(40, 100%, 80%)" />
    <rect x="150" y="1050" width="725" height="100" fill="hsl(40, 100%, 75%)" />
    <line x1="20" y1="0" x2="20" y2="1472" />
    <line x1="880" y1="0" x2="880" y2="1472" />
    <line x1="800" y1="30" x2="800" y2="150" />
    <line x1="840" y1="30" x2="840" y2="150" />
    <line x1="0" y1="30" x2="900" y2="30" />
    <line x1="0" y1="150" x2="900" y2="150" />
    <line x1="60" y1="1320" x2="60" y2="1440" />
    <line x1="100" y1="1320" x2="100" y2="1440" />
    <line x1="0" y1="1440" x2="900" y2="1440" />
    <line x1="0" y1="1320" x2="900" y2="1320" />
    <line x1="0" y1="1100" x2="900" y2="1100" />
    <line x1="0" y1="1150" x2="900" y2="1150" />
    <line x1="0" y1="1050" x2="900" y2="1050" />
    <line x1="150" y1="1050" x2="150" y2="1150" /> -->
  </svg>
  <About4Content />
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
#this :global(.musical-influences-section) {
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
#this :global(.artist-pic[alt="Kaitlin Aurelia Smith"]) {
  object-position: 50% 10%;
}
#this :global(.artist-pic[alt="Liu Fang"]) {
  object-position: 50% 50%;
}
#this :global(.artist-pic[alt="Steve Reich"]) {
  object-position: 50% 30%;
}
#this :global(.link-container) {
  display: flex;
  justify-content: space-between;
  padding: 0 3%;
  height: 13%;
  align-items: center;
  font-size: calc(var(--uarr1-width)/19);
}
#this :global(a) {
  text-decoration: underline;
}
</style>