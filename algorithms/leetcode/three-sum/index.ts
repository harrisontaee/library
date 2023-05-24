/**
 * @link https://leetcode.com/problems/3sum/
 */
export const threeSum = (nums: number[]): number[][] => {
	nums.sort((a, b) => a - b);
	const result = [];

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] > 0) break;
		if (i > 0 && nums[i] === nums[i - 1]) continue;

		let j = i + 1, k = nums.length - 1;

		while (j < k) {
			const sum = nums[i] + nums[j] + nums[k];
			if (sum > 0) k--;
			else if (sum < 0) j++;
			else {
				result.push([nums[i], nums[j], nums[k]]);
				j++;
				k--;
				while (nums[j] === nums[j - 1] && j < k) j++;
			}
		};
	};

	return result;
};