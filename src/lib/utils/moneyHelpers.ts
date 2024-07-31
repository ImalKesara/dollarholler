import { invoices } from '$lib/stores/invoiceStore';

//individual sum
export const sumLineItems = (lineItems: LineItems[] | undefined): number => {
	if (!lineItems) return 0;
	return lineItems.reduce((accur, curr) => accur + curr.amount, 0);
};
export const centsToDollers = (cents: number): string => {
	const dolloars = cents / 100;
	const addDecimal = twoDecimal(dolloars);
	return addThousandsSeparator(addDecimal);
};

export const twoDecimal = (myNum: number): string => {
	return myNum.toFixed(2);
};

export const addThousandsSeparator = (myNumb: string): string => {
	return myNumb.replace(/\B(?=(\d{3})+(?!\d))/g, ','); //15,000 thousands format
};

//total sum
export const sumInvoices = (invoices: Invoice[] | undefined): number => {
	if (!invoices) return 0;
	return invoices.reduce((prevValue, curValue) => {
		const invoiceSum = sumLineItems(curValue.lineItems);
		return prevValue + invoiceSum;
	}, 0);
};
