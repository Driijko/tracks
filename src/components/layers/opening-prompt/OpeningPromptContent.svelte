<!-- SCRIPTS /////////////////////////////////////////////// -->
<script>
  // IMPORTS ---------------------------------
  import Settings from "../../Settings.svelte";
</script>

<!-- MARKUP //////////////////////////////////////////////////// -->
<main class="foreground">
  <p>Welcome to Tracks by Dreeko</p>
  <p>For the best experience the following settings are recommended:</p>
  <Settings />
  <p>You can change these settings later in the menu.</p>
  <a href="https://driijko.github.io/tracks">Ready</a>
</main>

<!-- STYLES /////////////////////////////////////////////////////////// -->
<style>
  :global(main > *) {
    position: absolute;
  }
  a {
    border-style:solid;
    border-color: var(--color2-2);
    background-color: var(--color2-1);
    color: var(--color1);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3%;
  }
  @media (hover:hover) {
    a {
      transition-property: background-color, color;
      transition-timing-function: ease-out;
      transition-duration: 1s;
    }
    a:hover {
      color: var(--color2);
      background-color: var(--color1);
    }
  }
</style>