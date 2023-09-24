import {toString} from "../strings";

/**
 * Returns true if the value is null or undefined.
 */
export const isNully = (value: any): boolean => {
	return value === null || value === undefined;
};


/**
 * Returns true if:
 - Object: no keys
 - Array: no items
 - Number: 0
 - String: ""
 */
export const isEmpty = (value: any): boolean => {
	if (isNully(value)) return true;
	switch (typeof value) {
		case "object":
			return Array.isArray(value) ? value.length == 0 : Object.keys(value).length == 0;
		case "string":
			return value.length == 0;
		case "number":
			return !value;
		default:
			return false;
	};
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