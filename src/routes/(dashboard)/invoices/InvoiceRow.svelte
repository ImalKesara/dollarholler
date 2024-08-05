<script lang="ts">
	import AddtionalOption from '$lib/components/AddtionalOption.svelte';
	import Edit from '$lib/components/Icon/Edit.svelte';
	import Send from '$lib/components/Icon/Send.svelte';
	import Threedot from '$lib/components/Icon/Threedot.svelte';
	import Trash from '$lib/components/Icon/Trash.svelte';
	import View from '$lib/components/Icon/View.svelte';
	import Tags from '$lib/components/Tags.svelte';
	import { convertDate, islate } from '$lib/utils/dateHelpers';
	import { centsToDollers, sumLineItems } from '$lib/utils/moneyHelpers';

	export let invoice: Invoice; //+page check each block :)
	let addtionalMenuShowing: boolean = false;
	let isOptionDisabled: boolean = false;

	const handleEdit = () => {
		console.log('Edit');
	};
	const handleDelete = () => {
		console.log('Delete');
	};
	const handleSendInvoice = () => {
		console.log('Send Invoice');
	};

	const getInvoiceLabel = () => {
		if (invoice.invoiceStatus === 'draft') {
			return 'draft';
		} else if (invoice.invoiceStatus === 'sent' && !islate(invoice.dueDate)) {
			isOptionDisabled = true;
			return 'sent';
		} else if (invoice.invoiceStatus === 'late' && islate(invoice.dueDate)) {
			isOptionDisabled = true;
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
	<div class="text-lg center relative">
		<button
			class="text-pastelPurple hover:text-daisyBush"
			on:click={() => {
				addtionalMenuShowing = !addtionalMenuShowing;
			}}><Threedot /></button
		>
		{#if addtionalMenuShowing}
			<AddtionalOption
				options={[
					{ label: 'Edit', icon: Edit, onClick: handleEdit, disabled: isOptionDisabled },
					{ label: 'Delete', icon: Trash, onClick: handleDelete, disabled: false },
					{ label: 'Send', icon: Send, onClick: handleSendInvoice, disabled: isOptionDisabled }
				]}
			/>
		{/if}
	</div>
</div>
