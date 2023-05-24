/**
 * @link https://leetcode.com/problems/two-sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
export const twoSum = (nums, target) => { // O(n)
	const numbers = {};
	for (let i = 0; i < nums.length; i++) { // O(n)
		const remainder = target - nums[i];
		if (remainder in numbers) return [numbers[remainder], i];
		else numbers[nums[i]] = i;
	};
	return [];
};