<script>
    import ControlsGroup from './ControlsGroup.svelte';
    export let types = [];
</script>

<div>
    {#each types as type}
        <ControlsGroup title={type.title} name={type.name} bind:value={type.value} />
    {/each}
</div>
