export const searchInRotatedSortedArray = (nums: number[], target: number): number => {
	let l = 0, r = nums.length - 1;

	while (l <= r) {
		const m = Math.floor((l + r) / 2), left = nums[l], mid = nums[m], right = nums[r];
		
		if (mid === target) return m;
		if (mid > left) {
			if (target >= left && target < mid) r = m - 1;
			else l = m + 1;
		} else {
			if (target > mid && target <= right) l = m + 1;
			else r = m - 1;
			continue;
		};
	};

	return nums[l] === target ? l : -1;
};