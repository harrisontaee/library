export const slidingWindowMaximum = (nums: number[], k: number): number[] => {
	const maxes: number[] = [];
	const queue: number[] = [];

	let l = 0, r = 0;

	while (r < nums.length) {

		while (!!queue.length && nums[queue[queue.length - 1]] < nums[r]) queue.pop();
		queue.push(r);

		if (l > queue[0]) queue.shift();
		if (r >= k - 1) {
			maxes.push(nums[queue[0]]);
			l++;
		};

		r++;
	};

	return maxes;
};