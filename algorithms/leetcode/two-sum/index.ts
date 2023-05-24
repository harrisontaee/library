/**
 * @link https://leetcode.com/problems/two-sum/
 */
export const twoSum = (nums: number[], target: number): number[] => { // O(n)
	const numbers = {};
	for (let i = 0; i < nums.length; i++) { // O(n)
		const remainder = target - nums[i];
		if (remainder in numbers) return [numbers[remainder], i];
		else numbers[nums[i]] = i;
	};
	return [];
};