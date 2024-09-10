<script lang="ts">
	export let className = '';
</script>

<div class={`table-header invoice-table w-full ${className}`}>
	<h3>Status</h3>
	<h3>Due Date</h3>
	<h3>ID</h3>
	<h3>Client</h3>
	<h3>Amount</h3>
	<div />
	<div />
</div>

<style lang="postcss">
	.table-header h3 {
		@apply text-xl font-black leading-loose;
	}
</style>
