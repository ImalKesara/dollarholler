<script lang="ts">
	import View from './../../../lib/components/Icon/View.svelte';
	import Tags from './../../../lib/components/Tags.svelte';
	import Search from '$lib/components/Search.svelte';
	import Threedot from '$lib/components/Icon/Threedot.svelte';
	import CircleAmount from '$lib/components/CircleAmount.svelte';
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
			class=" whitespace-nowrap rounded-lg bg-lavenderIndigo px-10 py-3 font-sansSerif text-xl font-black text-white shadow-colored hover:shadow-coloredHover transition-shadow duration-300"
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
	<div class="invoice-table items-center bg-white shadow-tableShaodw rounded-lg py-6">
		<div><Tags label="sent" /></div>
		<div class=" text-lg">8/1/2022</div>
		<div class=" text-lg">12345</div>
		<div class=" text-xl font-bold">Compressed fm</div>
		<div class=" text-lg font-bold font-mono">$500.00</div>
		<div class=" text-lg text-pastelPurple center">
			<a href="#" class="text-pastelPurple hover:text-daisyBush"><View /></a>
		</div>
		<div class=" text-lg center">
			<button class="text-pastelPurple hover:text-daisyBush"><Threedot /></button>
		</div>
	</div>
</div>

<div>
	<CircleAmount label="Total" amount="$1,500.00" />
</div>

<style lang="postcss">
	.table-header h3 {
		@apply text-xl font-black leading-loose;
	}
</style>
