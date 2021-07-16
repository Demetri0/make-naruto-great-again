<script>
    export let title;
    export let value;
</script>

<div>
    <span>{title}: </span>
    <span class="value">{value}</span>
</div>

<style>
    .value {
        color: var(--color-accent);
    }
</style>
