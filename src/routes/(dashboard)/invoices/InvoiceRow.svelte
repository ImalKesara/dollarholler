<script lang="ts">
	import Threedot from '$lib/components/Icon/Threedot.svelte';
	import View from '$lib/components/Icon/View.svelte';
	import Tags from '$lib/components/Tags.svelte';
	import { sumLineItems } from '$lib/utils/moneyHelpers';
	export let invoice: Invoice;
</script>

<div class="invoice-table items-center bg-white shadow-tableShaodw rounded-lg py-6">
	<div><Tags label={invoice.invoiceStatus} /></div>
	<div class=" text-lg">{invoice.dueDate}</div>
	<div class=" text-lg">{invoice.id}</div>
	<div class=" text-xl font-bold">{invoice.client.name}</div>
	<div class=" text-lg font-bold font-mono">{sumLineItems(invoice.lineItems)}</div>
	<div class=" text-lg text-pastelPurple center">
		<a href="#" class="text-pastelPurple hover:text-daisyBush"><View /></a>
	</div>
	<div class=" text-lg center">
		<button class="text-pastelPurple hover:text-daisyBush"><Threedot /></button>
	</div>
</div>
