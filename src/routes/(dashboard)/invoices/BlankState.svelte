<script>
	import BlankRows from '$lib/components/BlankRows.svelte';
	import InvoiceRowHeader from './InvoiceRowHeader.svelte';
</script>

<div>
	<div class=" -mt-10-mt-8 ml-6 md:-mt-6 lg:-mt-14">
		<h2
			class="mb-10 bg-arrowLeft bg-left bg-no-repeat pt-14 pl-24 text-left font-handwriting text-2xl font-bold text-caribbeanGreen md:bg-arrowRight md:bg-right md:pl-0 md:pr-28 md:text-right md:text-4xl"
		>
			Add Your First Invoice
		</h2>
	</div>
	<!-- invoice header -->
	<InvoiceRowHeader className="text-daisyBush" />

	<!-- blank rows -->
	<BlankRows />
	<BlankRows />
	<BlankRows />
	<BlankRows />
</div>
