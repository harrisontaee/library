import {compare as defaultCompare} from "../../../utilities";

export const binary = (items: any[], target: any, compare = defaultCompare): number => {
	const isReversed = compare(items[0], items[items.length - 1]) > 0;
	let left = 0, right = items.length - 1;

	while (left <= right) {
		const mid = Math.floor((left + right) / 2);
		const comp = compare(items[mid], target);

		if (comp === 0) return mid;
		else if (comp > 0) {
			if (isReversed) left = mid + 1;
			else right = mid - 1;
		} else {
			if (isReversed) right = mid - 1;
			else left = mid + 1;
		}
	};

	return !compare(items[left], target) ? left : -1;
};