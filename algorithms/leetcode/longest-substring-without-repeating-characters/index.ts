export const longestSubstringWithoutRepeatingCharacters = (s: string): number => {
	let chars = new Set<string>([]);
	let max = 0;

	for (let char of s) {
		if (chars.has(char)) {
			max = Math.max(max, chars.size);
			chars = new Set([char]);
		} else chars.add(char);
	};

	return Math.max(max, chars.size);
};