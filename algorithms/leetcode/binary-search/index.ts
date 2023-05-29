import {compare as defaultCompare} from "../../../utilities";

export const binarySearch = (
	nums: number[],
	target: number,
	compare = defaultCompare
): number => {
	let left = 0, right = nums.length - 1;

	while (left < right) {
		const mid = Math.floor((left + right) / 2);
		const comp = compare(nums[mid], target);

		if (comp === 0) return mid;
		else if (comp < 0) left = mid + 1;
		else right = mid - 1;
	};

	return !compare(nums[left], target) ? left : -1;
};