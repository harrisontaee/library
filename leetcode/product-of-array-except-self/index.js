/**
 * @param {number[]} nums
 * @return {number[]}
 */
function productExceptSelf(nums) {
	const answer = [];

	let forwards = 1;
	for (let f = 0; f < nums.length; f++) {
		answer[f] = forwards;
		forwards *= nums[f];
	};

	let backwards = 1;
	for (let b = nums.length - 1; b >= 0; b--) {
		answer[b] *= backwards;
		backwards *= nums[b];
	};

	return answer;
};
