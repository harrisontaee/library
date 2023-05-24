/**
 * @link https://leetcode.com/problems/container-with-most-water/
 * @param {number[]} height
 * @return {number}
 */
export const containerWithMostWater = (height) => {
	let l = 0, r = height.length - 1, max = 0;
	while (l < r) {
		let left = height[l], right = height[r];
		max = Math.max(max, Math.min(left, right) * (r - l));
		if (left < right) l++;
		else r--;
	};
	return max;
};

