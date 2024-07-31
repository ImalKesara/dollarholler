import { invoices } from '$lib/stores/invoiceStore';

/**
 * Takes all the line items and adds them up (seed.json)
 * @param {Array|undefined} lineItems
 * @returns {number}
 */
//individual sum
export const sumLineItems = (lineItems: LineItems[] | undefined): number => {
	if (!lineItems) return 0;
	return lineItems.reduce((accur, curr) => accur + curr.amount, 0);
};

/**
 * Takes and returns a dollar amount (USD) , formatted with commas and 2 decimal places
 * @param {number} cents
 * @returns {string}
 */
export const centsToDollers = (cents: number): string => {
	const dolloars = cents / 100;
	const addDecimal = twoDecimal(dolloars);
	return addThousandsSeparator(addDecimal);
};

/**
 * Takes a number and returns the number with 2 decimal places
 * @param {number} myNum
 * @returns {string}
 */
export const twoDecimal = (myNum: number): string => {
	return myNum.toFixed(2);
};

/**
 * adds a thounsands operator
 * @param {string} myNumb
 * @returns {string}
 */
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
