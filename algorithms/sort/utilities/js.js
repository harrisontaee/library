/**
	@param {*} a - first element to compare
	@param {*} b - second element to compare
	@return {boolean}
**/

export function defaultCompare(a, b) {
	if (a === b) return 0;
	if (a < b) return -1;
	return 1;
}