/**
 * @link https://leetcode.com/problems/contains-duplicate/
 * @param {number[]} nums
 * @return {boolean}
 */
export function containsDuplicate(nums) { // O(n)
	return nums.length !== new Set(nums).size;
}
