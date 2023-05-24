/**
 * @link https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
 */
export const twoSum2 = (numbers: number[], target: number): number[] => {
    let i = 0, j = numbers.length - 1;
	 while (i < j) {
		const sum = numbers[i] + numbers[j];
		if (sum === target) break;
		if (sum < target) i++;
		else j--;
	 };

	 return [i + 1, j + 1];
};