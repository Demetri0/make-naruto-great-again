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
    <div class="ControlsGroup__segmentedControls">
        {#each speeds as speed}
            <div class="ControlsGroup__segmentedControl">
                <input
                    id={`${name}-${speed}`}
                    class="ControlsGroup__input"
                    type="radio"
                    name={name}
                    value={speed}
                    on:change={onChange}
                    bind:group={value}
                />
                <label for={`${name}-${speed}`} class="ControlsGroup__label">
                    {speed === 0 ? 'Skip' : `${speed}x`}
                </label>
            </div>
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

    .ControlsGroup__segmentedControls {
        display: flex;
    }
    .ControlsGroup__segmentedControls > :first-child,
    .ControlsGroup__segmentedControls > :first-child .ControlsGroup__label {
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
    }
    .ControlsGroup__segmentedControls > :last-child,
    .ControlsGroup__segmentedControls > :last-child .ControlsGroup__label {
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
    }
    .ControlsGroup__segmentedControl {
        display: flex;
        border: 1px solid var(--color-decorative);
    }
    .ControlsGroup__label:hover,
    .ControlsGroup__label:focus,
    .ControlsGroup__input:checked + .ControlsGroup__label
    {
        background-color: var(--color-overlay-light);
    }
    .ControlsGroup__input {
        display: none;
    }
    .ControlsGroup__label {
        padding: 0.35rem 0.5rem;
    }
</style>
