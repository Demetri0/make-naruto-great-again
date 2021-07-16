<script>
    import ControlsGroup from './ControlsGroup.svelte';
    export let types = [];
</script>

<div>
    <form>
        {#each types as type}
            <ControlsGroup title={type.title} name={type.name} bind:value={type.value} />
        {/each}
    </form>
</div>
