import { writable } from 'svelte/store';
// import { readable } from 'svelte/store';
import data from '../../database.json';

// export const invoices = writable(0);
export const invoices = writable<Invoice[]>([]);

export const loadInvoice = () => {
	// invoices.set(data.invoices);
	invoices.set([])
};
