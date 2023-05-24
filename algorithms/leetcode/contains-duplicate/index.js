/**
 * @link https://leetcode.com/problems/contains-duplicate/
 * @param {number[]} nums
 * @return {boolean}
 */
export const containsDuplicate = (nums) => { // O(n)
	return nums.length !== new Set(nums).size;
}
