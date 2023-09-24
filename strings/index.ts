/**
 * Converts an uniterable value to a string
 */
export const toString = (value: any): string => {
	if (value === null) return "null";
	if (typeof value === "boolean" || typeof value === "number") return value.toString();
	if (typeof value === "string") return value;
	if(typeof value === "symbol") throw new TypeError();
	return (value).toString();
};


/**
 * Returns string with first letter capitalized
 */
export const entitle = (str: string): string => {
	return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};