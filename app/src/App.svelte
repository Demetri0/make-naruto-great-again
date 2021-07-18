<script lang="ts">
  import DebugToolbar from './lib/DebugToolbar.svelte'
  import Controls from './lib/Controls.svelte'
  import Video from './lib/Video.svelte'
  import Playlist from './lib/Playlist.svelte'

  import playlist from './playlist.json';

  export type Config = {
    title: String,
    name: String,
    value: Number
  };

  let config: Config[] = [
        { title: 'Scenario', name: 'scenario', value: 1 },
        { title: 'Filler', name: 'filler', value: 0 },
        { title: 'FlashBack', name: 'flashback', value: 2 }
  ];
  let state = null;

  // TODO Update state in interval
  // TODO update speed in depend of state and config
  // TODO Change episode based on config and state
  // TODO
  // TODO Preload next episode
</script>

<main>
    <DebugToolbar />
    <h1 class="Caption">Make Naruto Great Again</h1>
    <!-- pre>{JSON.stringify(config, null,2)}</pre -->
    <div class="Container">
        <div class="Container__item">
            <Controls bind:types={config} />
        </div>
        <div class="Container__item">
            <Video />
        </div>
        <div class="Container__item">
            <Playlist playlist={playlist} />
        </div>
    </div>
</main>

<style>
  :root {
    --color-primary: #EB3E1E;
    --color-accent: coral;
    --color-text-primary: rgba(0,0,0, 0.9);
    --color-text-secondary: rgba(0,0,0, 0.75);

    --color-background: rgb(240, 240, 240);
    --color-decorative: rgba(0,0,0, 0.15);
    --color-overlay-light: rgba(0,0,0, 0.15);

    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
                 Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 16px;
    background-color: var(--color-background);
    color: var(--color-text-primary);
  }
  @media (prefers-color-scheme: dark) {
    :root {
        --color-accent: orange;
        --color-text-primary: rgba(255,255,255, 0.9);
        --color-text-secondary: rgba(255,255,255, 0.75);
        --color-background: rgb(64, 64, 64);
        --color-decorative: rgba(255,255,255, 0.15);
        --color-overlay-light: rgba(0,0,0, 0.25);
    }
  }

  .Caption {
      text-align: center;
      font-size: 1.25rem;
  }

  .Container {
      display: grid;
      grid-template-columns: 1fr 2fr 1fr;
  }
  .Container__item {
    border: 1px solid var(--color-decorative);
  }
</style>
