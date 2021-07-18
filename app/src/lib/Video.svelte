<script lang="ts">
    import { onMount } from 'svelte';

    export let poster : string = '';
    export let sources = [];
    export let fragments = [];

    let video;
    onMount(() => {
        console.log('video', video);
    });
</script>

<div class="Video">
    <video bind:this={video} poster={poster} controls>
        {#each sources as source}
            <source src={source.src} type={source.mimetype} label={`${source.quality}p`} />
        {/each}
    </video>
</div>

<style>
    .Video {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
