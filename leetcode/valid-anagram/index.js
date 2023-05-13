/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagram(s, t) {
	// O(S + T)
	const letters = {};
	for (let char of s) {
		// O(S)
		if (char in letters) letters[char]++;
		else letters[char] = 1;
	}

	for (let char of t) {
		// O(T)
		if (!(char in letters)) return false;
		if (letters[char] === 1) delete letters[char];
		else letters[char]--;
	}

	return true;
}
