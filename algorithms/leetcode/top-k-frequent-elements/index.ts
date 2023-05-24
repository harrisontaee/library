/**
 * @link https://leetcode.com/problems/top-k-frequent-elements
 */
export const topKFrequentElements = (nums: number[], k: number): number[] => {
	let freqs = {};
	for (let num of nums) freqs[num] = (freqs[num] || 0) + 1;
	let array = [];
	for (let num in freqs) {
		let freq = freqs[num];
		array[freq] = (array[freq] || new Set()).add(num);
	};

	let result = [];
	for (let i = array.length - 1; i >= 0; i--) {
		if (!array[i]) continue;
		result.push(...array[i]);
		if (result.length >= k) {
			result = result.slice(0, k);
			break;
		}
	};

	return result;
};