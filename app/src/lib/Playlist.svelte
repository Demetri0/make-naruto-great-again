<script>
    import PlaylistItem from './PlaylistItem.svelte';

    export let playlist = [];
    // This is good place for
    // yarn add @sveltejs/svelte-virtual-list
    // https://github.com/sveltejs/svelte-virtual-list
</script>

<div class="Playlist">
    {#each playlist as item}
        <PlaylistItem episode={item} />
    {/each}
</div>

<style>
    .Playlist {
        color: var(--color-text-primary);
        background-color: var(--color-background);
    }
</style>
