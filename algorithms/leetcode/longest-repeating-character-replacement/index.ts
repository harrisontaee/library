export const longestRepeatingCharacterReplacement = (s: string, k: number): number => {
	if (k >= s.length) return s.length;


	const counts: {[char: string]: number} = {};
	const getMaxCount = () => {
		let count = 0;
		for (let char in counts) {
			if (counts[char] > count) {
				count = counts[char];
			};
		};
		return count;
	};


	let left = 0, width = 0;
	while (left + width <= s.length) {
		const toAdd = s[left + width];
		if (toAdd in counts) counts[toAdd]++;
		else counts[toAdd] = 1;

		if (width - getMaxCount() > k) {
			const toRemove = s[left];
			if (counts[toRemove] === 1) delete counts[toRemove];
			else counts[toRemove]--;
			left++;
		} else width++;
	};


	return width - 1;
};