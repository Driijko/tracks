<!-- SCRIPTS /////////////////////////////////// -->
<script>
  // IMPORTS --------------------------------
  import { audioBkgTrack, audioBkgRestart, audioBkgFadeLoadPlay, 
    audioBkgUpdateCurrentPlaylistIndex, audioBkgLoad,
    audioBkgNewPlaylist, audioBkgCurrentPlaylist, audioBkgLoop,
    audioBkgSetLoop, audioBkgLoadPlay
  } from "../../../scripts/audioBkgStore";
  import AudioBkgPlayer from "./AudioBkgPlayer.svelte";
  import playlists from "../../../data/playlists";

  // PROPS -----------------------------------------
  export let identifier = "";

  // SETTINGS ---------------------------------------------
  const fadeDuration = 1500;

  // DATA ------------------------------------------------
  const {tracks, name} = playlists[identifier];

  // EVENT HANDLERS ------------------------------------
  function handleClick(track, index) {
    if ($audioBkgLoop) {
      audioBkgSetLoop(false);
    };
    
    if ($audioBkgTrack.name === track.name) {
      audioBkgRestart();
    } 
    else {
      audioBkgLoadPlay(track.name, track.path);
      if ($audioBkgCurrentPlaylist.identifier !== identifier) {
        audioBkgNewPlaylist(identifier, tracks);
      }
      audioBkgUpdateCurrentPlaylistIndex(index);
    };
  };

  // REACT ON INITIALIZE ----------------------------------------
  if ($audioBkgTrack.path === "") {
    audioBkgLoad(tracks[0].name, tracks[0].path);
    audioBkgNewPlaylist(identifier, tracks);
  };

</script>

<!-- MARKUP /////////////////////////////// -->
<section class="audio-bkg-playlist-section">
  <h2>{name}</h2>
  <ul class="audio-bkg-playlist">
    {#each tracks as track, index}
      <li>
        <button type="button" class="playlist-button"
          on:click={()=> handleClick(track, index)}
        >
          {track.name}
        </button>
      </li>
    {/each}
  </ul>
  <AudioBkgPlayer />
</section>