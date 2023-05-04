import {defaultCompare} from "../utilities";

/**
 * @callback compare - comparison function
 * @param {*} a - first element to compare
 * @param {*} b - second element to compare
 */

/**
 * @param {*[]} array - array to be sorted
 * @param {compare} [compare] - comparison function
 * @return {*[]}
 */

export function merge (array, compare = defaultCompare) {
	if (array.length === 1) return array;
	
	// halve array
	const index = Math.floor(array.length / 2);
	const right = merge(array.slice(index));
	const left = merge(array.slice(0, index));

	// merge halves
	const sorted = [];
	let l = 0, r = 0;
	while (l < left.length || r < right.length) {
		if (l >= left.length) {
			sorted.push(right[r]);
			r++;
		} else if (r >= right.length) {
			sorted.push(left[l]);
			l++;
		} else if (compare(left[l], right[r]) < 0) {
			sorted.push(left[l]);
			l++;
		} else {
			sorted.push(right[r]);
			r++;
		};
	};

	return sorted;
};