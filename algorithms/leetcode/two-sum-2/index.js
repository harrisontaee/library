/**
 * @link https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
export const twoSum2 = (numbers, target) => {
    let i = 0, j = numbers.length - 1;
	 while (i < j) {
		const sum = numbers[i] + numbers[j];
		if (sum === target) return [i + 1, j + 1];
		if (sum < target) i++;
		else j--;
	 };
};