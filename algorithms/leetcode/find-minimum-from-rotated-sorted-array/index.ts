export const findMinimumFromRotatedSortedArray = (nums: number[]): number => {
	let left = 0, right = nums.length -1;

	while (right - left > 1) {
		const mid = Math.floor((left + right) / 2);

		if (nums[mid] > nums[left]) left = mid + 1;
		else right = mid - 1;
	};

	return right + 1 < nums.length ? nums[right + 1] : nums[0];
};