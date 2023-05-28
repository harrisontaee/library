const Open = new Set<string>(['(', '[', '{']);
const Closed = new Set<string>([')', ']', '}']);


export const isValidParentheses = (str: string): boolean => {
	const opened: number[] = [];
	
	for (let i = 0; i < str.length; i++) {
		const char = str[i];
		if (Open.has(char)) opened.push(char.charCodeAt(0));
		else if (Closed.has(char)) {
			const diff = char.charCodeAt(0) - (opened.pop() || 0);
			if (diff !== 1 && diff !== 2) return false;
		};
	};

	return !opened.length;
};