<script>
    import { timeFormat } from '../utils';
    export let episode;
</script>

<div class="PlaylistItem">
    <div class="PlaylistItem__root">
        <div class="PlaylistItem__title">
            {episode.title}
        </div>
        <div class="PlaylistItem__info">
            <span class="PlaylistItem__tag">{episode.contentType}</span>
        </div>
    </div>
    <ol class="PlaylistItem__fragments">
        {#each episode.fragments as fragment}
            <li class="PlaylistItem__fragment">
                <div class="PlaylistItem__fragmentTitle">{fragment.type}</div>
                <div class="PlaylistItem__fragmentInfo">
                    <span class="PlaylistItem__tag">{timeFormat(fragment.start)} – {timeFormat(fragment.end)}</span>
                </div>
            </li>
        {/each}
    </ol>
</div>

<style>
    .PlaylistItem__root,
    .PlaylistItem__fragment {
        padding: 0.5rem;
        border-bottom: 1px solid var(--color-decorative);

        transition: background 50ms;
    }
    .PlaylistItem__root:hover,
    .PlaylistItem__fragment:hover {
        background-color: var(--color-overlay-light);
    }
    .PlaylistItem__title {}
    .PlaylistItem__info {
        display: flex;
        gap: 0.25rem;
        padding: 0.25rem;
    }
    .PlaylistItem__tag {
        color: var(--color-text-secondary);
    }
    .PlaylistItem__fragments {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }
    .PlaylistItem__fragment {
        padding-left: 2rem;
    }
</style>
