/**
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicate(nums) {
    return nums.length !== (new Set(nums)).size;
};