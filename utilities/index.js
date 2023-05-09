
/**
 * @param {*} a First item to compare
 * @param {*} b Second item to compare
 * @returns {number} 0 if equal, -1 if a < b, 1 if a > b
 */
export function compare(a, b) {
	if (a === undefined && b === undefined) return 0;
	if (a === undefined) return 1;
	if (b === undefined) return -1;

	const aStr = toString(a);
	const bStr = toString(b);

	if (aStr < bStr) return -1;
	if (aStr > bStr) return 1;

	return 0;
};





/**
 * @param {*} item Item to convert
 * @returns {string}
 */
function toString(item) {
	if (item === null) return "null";
	if (typeof item === "boolean" || typeof item === "number") return (item).toString();
	if (typeof item === "string") return item;
	if(typeof item === "symbol") throw new TypeError();
	return (item).toString();
};