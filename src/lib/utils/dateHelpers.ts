import { isBefore } from 'date-fns';

// this function takes yyyy-mm-dd then convert into mm-dd-yyyy
export const convertDate = (myDate: string): string => {
	const [year, month, date] = splitDate(myDate);
	return `${parseInt(date)} / ${parseInt(month)} / ${parseInt(year)}`;
};
export const islate = (myDate: string): boolean => {
	const [year, month, date] = splitDate(myDate);
	const dueDate = new Date(parseInt(year), parseInt(month), parseInt(date));
	const today = new Date();
	return isBefore(dueDate, today);
};

export const splitDate = (myDate: string): Array<string> => {
	return myDate.split('-');
};
