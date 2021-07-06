<script>
    import DebugToolbarItem from './DebugToolbarItem.svelte'
</script>

<div class="DebugToolbar">
    <DebugToolbarItem title="Episode" value="0" />
    |
    <DebugToolbarItem title="MediaType" value="N/A" />
    |
    <DebugToolbarItem title="ContentType" value="N/A" />
    |
    <DebugToolbarItem title="Fragment" value="N/A" />
</div>

<style>
    .DebugToolbar {
        display: flex;
        gap: 8px;

        padding: 8px;
        background-color: var(--color-background);
        color: var(--color-text-primary);
        border-bottom: 1px solid var(--color-decorative);
  }
</style>
