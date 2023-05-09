<!-- SCRIPTS /////////////////////////////////////////// -->
<script>
  // IMPORTS ---------------------------------
  import { toggleAnimations, animationsOff } 
  from "../../../../scripts/animationsStore";
  import { setNotification } from "../../../../scripts/notifyStore";
  import PaletteIcon from "../../icons/PaletteIcon.svelte";

  // EVENT HANDLERS --------------------------------
  function handleClick() {
    toggleAnimations();
    if ($animationsOff) {
      setNotification("animations", 1500);
    } else {
      setNotification("animations", 3000);
    };
  };
  
</script>

<!-- MARKUP ////////////////////////////////////////////// -->
<button type="button" on:click={handleClick}
  class:on={$animationsOff === false}
  class:off={$animationsOff}
  class="animations-button"
>
  <PaletteIcon />
</button>

<!-- STYLES ////////////////////////////////////////// -->
<style>
  button {
    justify-content: center;
    align-items: center;
    display: flex;
  }
  button :global(svg) {
    width: 100%;
  }
</style>