/**
 * @link https://leetcode.com/problems/container-with-most-water/
 */
export const containerWithMostWater = (height: number[]): number => {
	let l = 0, r = height.length - 1, max = 0;
	while (l < r) {
		let left = height[l], right = height[r];
		max = Math.max(max, Math.min(left, right) * (r - l));
		if (left < right) l++;
		else r--;
	};
	return max;
};