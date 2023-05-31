export const permutationInString = (s1: string, s2: string): boolean => {
	let a1 = Array(26).fill(0), a2 = Array(26).fill(0), matches = 0;

	const getIndex = (char: string) => char.charCodeAt(0) - 97;

	for (let char of s1) a1[getIndex(char)]++;
	for (let i = 0; i < s1.length; i++) a2[getIndex(s2[i])]++;
	for (let i = 0; i < 26; i++) {if (a1[i] === a2[i]) matches++};
	if (matches === 26) return true;


	for (let i = 0; i < s2.length - s1.length; i++) {
		let indexToRemove = getIndex(s2[i]);
		let indexToAdd = getIndex(s2[i + s1.length]); //s2.charCodeAt(i + s1.length) - 97;

		let toRemoveWasMatch = a1[indexToRemove] === a2[indexToRemove];
		let toAddWasMatch = a1[indexToAdd] === a2[indexToAdd];

		a2[indexToRemove]--;
		a2[indexToAdd]++;

		if (a1[indexToRemove] === a2[indexToRemove]) matches++;
		else if (toRemoveWasMatch) matches--;

		if (a1[indexToAdd] === a2[indexToAdd]) matches++;
		else if (toAddWasMatch) matches--;

		if (matches === 26) return true;
	};

	
	return matches === 26;
};