/**
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicate(nums) { // O(n)
	return nums.length !== new Set(nums).size;
}
