export const isNully = (item: any): boolean => item === null || item === undefined;
export const isEmpty = (item: any): boolean => isArray(item) ? item.length === 0 : isObject(item) && Object.keys(item).length === 0;
export const isArray = (item: any): boolean => !isNully(item) && Array.isArray(item);
export const isObject = (item: any): boolean => !isNully(item) && typeof item === "object" && !isArray(item);
export const toString = (item: any): string => {
	if (item === null) return "null";
	if (typeof item === "boolean" || typeof item === "number") return (item).toString();
	if (typeof item === "string") return item;
	if(typeof item === "symbol") throw new TypeError();
	return (item).toString();
};





/**
 * Lexographical comparison of two items
 - a > b => 1
 - a = b => 0
 - a < b => -1
 */
 export const compare = (a: any, b: any): number => {
	if (a === undefined && b === undefined) return 0;
	if (a === undefined) return 1;
	if (b === undefined) return -1;

	if (typeof a === "number" && typeof b === "number") {
		if (a < b) return -1;
		if (a > b) return 1;
		return 0;
	};

	const aStr = toString(a);
	const bStr = toString(b);

	if (aStr < bStr) return -1;
	if (aStr > bStr) return 1;
	return 0;
};