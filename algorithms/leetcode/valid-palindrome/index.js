/**
 * @link https://leetcode.com/problems/valid-palindrome/
 * @param {string} s
 * @return {boolean}
 */
export const isValidPalindrome = (s) => {
	s = s.toLowerCase().replace(/[^a-z0-9]+/g, "");
	let i = 0, j = s.length - 1;
	while (i < j) {
		if (s.charAt(i) !== s.charAt(j)) return false;
		i++;
		j--;
	}
	return true;
};