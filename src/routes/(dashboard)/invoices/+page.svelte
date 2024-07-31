<script lang="ts">
	import { centsToDollers } from '$lib/utils/moneyHelpers';
	import { invoices, loadInvoice } from '$lib/stores/invoiceStore';
	import { onMount } from 'svelte';
	import Search from '$lib/components/Search.svelte';
	import CircleAmount from '$lib/components/CircleAmount.svelte';
	import InvoiceRow from './InvoiceRow.svelte';
	import {sumInvoices} from '../../../lib/utils/moneyHelpers';

	onMount(() => {
		loadInvoice();
		console.log($invoices); //$ mean you import data from store
	});
</script>

<svelte:head>
	<title>Invoices | The Dollarholler</title>
</svelte:head>

<!-- top bar -->
<div class="flex justify-between items-center mb-16">
	<!-- search field -->
	<Search />
	<!-- not icon folder search component-->
	<!-- new invoice button -->
	<div>
		<button
			class="whitespace-nowrap rounded-lg bg-lavenderIndigo px-10 py-3 font-sansSerif text-xl font-black text-white shadow-colored hover:shadow-coloredHover transition-shadow duration-300"
			>+ Invoice</button
		>
	</div>
</div>

<!-- list of invoices -->

<div>
	<!-- header -->
	<div class="table-header invoice-table text-daisyBush w-full">
		<h3>Status</h3>
		<h3>Due Date</h3>
		<h3>ID</h3>
		<h3>Client</h3>
		<h3>Amount</h3>
		<div />
		<div />
	</div>

	<!-- invoice -->

	{#each $invoices as invoice} 
		<InvoiceRow {invoice} />
	{/each}
</div>

<CircleAmount label="Total" amount={`$${centsToDollers(sumInvoices($invoices))}`} />

<style lang="postcss">
	.table-header h3 {
		@apply text-xl font-black leading-loose;
	}
</style>
