import {compare as defaultCompare} from "../../../utilities";

/**
 * Merge Sort
 * @param {*[]} array Array to be sorted
 * @param {function} [compare] Comparison function (see {@link defaultCompare compare})
 * @returns {*[]}
 * @description
 - Best: nlogn
 - Average: nlogn
 - Worst: nlogn
 - Memory: n
 */
export function merge(array, compare = defaultCompare) {
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