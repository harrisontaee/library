export const binarySearch = (nums: number[], target: number): number => {
	let left = 0, right = nums.length - 1;

	while (left <= right) {
		const mid = Math.floor((left + right) / 2);
		const comp = nums[mid] - target;

		if (comp === 0) return mid;
		else if (comp > 0) right = mid - 1;
		else left = mid + 1;
	};

	return nums[left] === target ? left : -1;
};