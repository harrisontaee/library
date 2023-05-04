import {defaultCompare} from "../utilities/js";

/**
	@callback compare - comparison function
	@param {*} a - first element to compare
	@param {*} b - second element to compare
**/

/**
	@param {*[]} array - array to be sorted
	@param {compare} [compare] - comparison function
	@return {*[]}
**/

export function quick (array, compare = defaultCompare) {
	return (function sort(items, left, right) {
		if (items.length <= 1) return items;

		// randomly pick pivot
		const index = Math.floor(Math.random() * (Math.abs(right - left) + 1)) + Math.min(left, right);
		const pivot = items[index];

		// swap them if left > right
		let l = left;
		let r = right;
		while (l <= r) {
			// find items from left greater than pivot and items from right less than pivot
			while (compare(pivot, items[l]) > 0) l++;
			while (compare(items[r], pivot) > 0) r--;

			// swap them if left is less than right
			if (l > r) continue;
			const temp = items[l];
			items[l] = items[r];
			items[r] = temp;
			l++;
			r--;
		}

		// recurse on partitions
		if (left < l - 1) sort(items, left, l - 1);
		if (l < right) sort(items, l, right);

		return items;
	})(array, 0, array.length - 1);
};