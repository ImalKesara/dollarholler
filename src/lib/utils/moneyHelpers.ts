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
