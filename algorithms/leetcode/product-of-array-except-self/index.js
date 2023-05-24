/**
 * @link
 * @param {number[]} nums
 * @return {number[]}
 */
export const productOfArrayExceptSelf = (nums) => { // O(n)
	const answer = [];

	let forwards = 1;
	for (let f = 0; f < nums.length; f++) { // O(n)
		answer[f] = forwards;
		forwards *= nums[f];
	};

	let backwards = 1;
	for (let b = nums.length - 1; b >= 0; b--) { // O(n)
		answer[b] *= backwards;
		backwards *= nums[b];
	};

	return answer;
};
