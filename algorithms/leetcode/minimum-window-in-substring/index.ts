export const minimumWindowInSubstring = (s: string, t: string): string => {
	if (t.length > s.length) return "";


	const alpha: {[char: string]: [number, number]} = {};
	let matches = 0, targetMatches = new Set(t.split("")).size;

	for (let char of t) {
		if (char in alpha) alpha[char][0]++;
		else alpha[char] = [1, 0];
	};

	const lefts: number[] = [];
	let leftsIndex = -1, min: string | null = null;

	for (let r = 0; r < s.length; r++) {
		let char = s[r];

		if (!(char in alpha)) continue;

		lefts.push(r);
		alpha[char][1]++;
		let [target, current] = alpha[char];
		if (target === current) matches++;

		while (matches === targetMatches) {
			leftsIndex++;
			let l = lefts[leftsIndex];
			let substring = s.slice(l, r + 1);
			if (!min || substring.length < min.length) min = substring;

			char = s[l];
			[target, current] = alpha[char];
			if (current === target) matches--;
			alpha[char][1]--;
		};
	};

	
	return min || "";
};