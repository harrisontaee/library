/**
 * @link https://leetcode.com/problems/valid-anagram/
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
export function isValidAnagram(s, t) { // O(s + t)
	const letters = {};
	for (let char of s) { // O(s)
		if (char in letters) letters[char]++;
		else letters[char] = 1;
	}

	for (let char of t) { // O(t)
		if (!(char in letters)) return false;
		if (letters[char] === 1) delete letters[char];
		else letters[char]--;
	}

	return true;
}
