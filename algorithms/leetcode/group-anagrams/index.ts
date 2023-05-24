/**
 * @link https://leetcode.com/problems/group-anagrams/
 */
export const groupAnagrams = (strs: string[]): string[][] => { // O(nk)
	let keys = {};
	for (let str of strs) {
		let alphabet = new Array(26).fill(0);
		for (let char of str) alphabet[char.charCodeAt(0) - 97]++;
		let key = alphabet.join("");
		if (str in keys) keys[key].push(str);
		else keys[key] = [str];
	};

	return Object.values(keys);
};