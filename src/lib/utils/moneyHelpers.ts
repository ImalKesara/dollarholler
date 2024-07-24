export const sumLineItems = (lineItems: LineItems[] | undefined): number => {
	if (!lineItems) return 0;
	return lineItems.reduce((accur, curr) => accur + curr.amount, 0);
};
