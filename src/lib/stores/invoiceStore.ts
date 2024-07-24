import { writable } from 'svelte/store';
import data from '../../seed.json';

export const invoices = writable<Invoice[]>([]);

export const loadInvoice = () => {
	invoices.set(data.invoices);
};
