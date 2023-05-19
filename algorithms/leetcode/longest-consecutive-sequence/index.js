/**
 * @link https://leetcode.com/problems/longest-consecutive-sequence/
 * @param {number[]} nums
 * @return {number}
 */
export function longestConsecutiveSequence(nums) { // O(n)
	const set = new Set(nums);

	let longest = 1;
	while (!!set.size) { // O(n)
		let [cur] = set;
		set.delete(cur);

		let prev = cur - 1;
		while (set.has(prev)) set.delete(prev--);

		let next = cur + 1;
		while (set.has(next)) set.delete(next++);

		const count = next - prev - 1;
		if (count > longest) longest = count;
	};

	return longest;
}
