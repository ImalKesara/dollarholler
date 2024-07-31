<script lang="ts">
	import Threedot from '$lib/components/Icon/Threedot.svelte';
	import View from '$lib/components/Icon/View.svelte';
	import Tags from '$lib/components/Tags.svelte';
	import { convertDate, islate } from '$lib/utils/dateHelpers';
	import { centsToDollers, sumLineItems } from '$lib/utils/moneyHelpers';
	export let invoice: Invoice; //+page check each block :)

	const getInvoiceLabel = () => {
		if (invoice.invoiceStatus === 'draft') {
			return 'draft';
		} else if (invoice.invoiceStatus === 'sent' && !islate(invoice.dueDate)) {
			return 'sent';
		} else if (invoice.invoiceStatus === 'late' && islate(invoice.dueDate)) {
			return 'late';
		} else if (invoice.invoiceStatus === 'paid') {
			return 'paid';
		}
	};
</script>

<div class="invoice-table items-center bg-white shadow-tableShaodw rounded-lg py-6">
	<div><Tags label={getInvoiceLabel()} /></div>
	<div class=" text-lg">{convertDate(invoice.dueDate)}</div>
	<div class=" text-lg">{invoice.id}</div>
	<div class=" text-xl font-bold whitespace-nowrap truncate">{invoice.client.name}</div>
	<div class=" text-lg font-bold font-mono">
		{`$${centsToDollers(sumLineItems(invoice.lineItems))}`}
	</div>
	<div class=" text-lg text-pastelPurple center">
		<a href="#" class="text-pastelPurple hover:text-daisyBush"><View /></a>
	</div>
	<div class=" text-lg center">
		<button class="text-pastelPurple hover:text-daisyBush"><Threedot /></button>
	</div>
</div>
