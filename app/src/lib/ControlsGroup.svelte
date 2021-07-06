<script>
    export let title;
    export let name;
    export let value = 1;

    let speeds = [0, 1, 1.25, 1.5, 2, 2.5, 3, 4];

    function onChange(event) {
        value = event.currentTarget.value;
    }
</script>

<div class="ControlsGroup">
    <div class="ControlsGroup__title">{title ?? name}</div>
    <div>
        {#each speeds as speed}
            <label class="Button">
                <input
                    on:change={onChange}
                    type="radio"
                    name={name}
                    bind:group={value}
                    value={speed}
                /> {speed === 0 ? 'Skip' : `${speed}x`}
            </label>
        {/each}
    </div>
</div>

<style>
    .ControlsGroup {
        padding: 1rem;
        border-bottom: 1px solid var(--color-decorative);
    }
    .ControlsGroup__title {
        margin-bottom: 0.5rem;
    }
    .Button {

    }
</style>
