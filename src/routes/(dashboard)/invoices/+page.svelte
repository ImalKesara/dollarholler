<script lang="ts">
	import { centsToDollers } from '$lib/utils/moneyHelpers';
	import { invoices, loadInvoice } from '$lib/stores/invoiceStore';
	import { onMount } from 'svelte';
	import Search from '$lib/components/SearchBar.svelte';
	import CircleAmount from '$lib/components/CircleAmount.svelte';
	import InvoiceRow from './InvoiceRow.svelte';
	import { sumInvoices } from '../../../lib/utils/moneyHelpers';
	import BlankState from './BlankState.svelte';
	import InvoiceRowHeader from './InvoiceRowHeader.svelte';
	import SearchBar from '$lib/components/SearchBar.svelte';

	onMount(() => {
		loadInvoice();
		console.log($invoices); //$ mean you import data from store
	});
</script>

<svelte:head>
	<title>Invoices | The Dollarholler</title>
</svelte:head>

<!-- top bar -->
<div
	class="md:gap-7-4 mb-7 flex flex-col-reverse items-start justify-between gap-y-6 md:flex-row md:items-center lg:mb-16 m-5"
>
	<!-- search field -->
	{#if $invoices.length > 0}
		<SearchBar />
	{:else}
		<div />
	{/if}
	<!-- not icon folder search component-->
	<!-- new invoice button -->
	<div>
		<button
			class="relative translate-y-0 whitespace-nowrap rounded-lg bg-lavenderIndigo px-5 py-2 font-sansSerif text-base font-black text-white shadow-colored transition-all hover:-translate-y-2 hover:shadow-coloredHover lg:px-10 lg:py-3 lg:text-xl"
			>+ Invoice</button
		>
	</div>
</div>

<!-- list of invoices -->

<div>
	<!-- invoice -->
	{#if $invoices === null}
		<!-- <BlankState /> -->
		Loading...
	{:else if $invoices.length <= 0}
		<BlankState />
	{:else}
		<!-- header -->
		<InvoiceRowHeader className="text-daisyBush" />
		<div class="flex flex-col-reverse">
			{#each $invoices as invoice}
				<InvoiceRow {invoice} />
			{/each}
		</div>
		<CircleAmount label="Total" amount={`$${centsToDollers(sumInvoices($invoices))}`} />
	{/if}
</div>
