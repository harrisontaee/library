/**
 * @link https://leetcode.com/problems/contains-duplicate/
 * @param {number[]} nums
 * @return {boolean}
 */
export const containsDuplicate = (nums: number[]): boolean => nums.length !== new Set(nums).size; // O(n)
