/**
 * @link https://leetcode.com/problems/valid-palindrome/
 */
export const isValidPalindrome = (s: string): boolean => {
	s = s.toLowerCase().replace(/[^a-z0-9]+/g, "");
	let i = 0, j = s.length - 1;
	while (i < j) {
		if (s.charAt(i) !== s.charAt(j)) return false;
		i++;
		j--;
	}
	return true;
};