interface Invoice {
	invoiceStatus: string;
	issueDate: string;
	invoiceNumber: number;
	id: string;
	client: Client;
	dueDate: string;
	subject?: string; //? means not required
	lineItems?: LineItems[];
	notes?: string;
	terms?: string;
	createdAt: string;
}

interface Client {
	id: string;
	name: string;
	email: string;
	street: string;
	city: string;
	state: string;
	zip: string;
}

interface LineItems {
	id: string;
	description: string;
	quantity: number;
	amount: number;
}
