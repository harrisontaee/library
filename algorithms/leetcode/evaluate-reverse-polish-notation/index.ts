const Ops = new Set(['+', '-', '*', '/']);


export const evaluateReversePolishNotation = (tokens: string[]): number => {
	const stack: number[] = [];

	for (let token of tokens) {
		const int = parseInt(token);
		if (!isNaN(int)) stack.push(int);
		else {
			const b = stack.pop() || 0;
			const a = stack.pop() || 0;
			switch (token) {
				case '+':
					stack.push(a + b);
					break;
				case '-':
					stack.push(a - b);
					break;
				case '*':
					stack.push(a * b);
					break;
				case '/':
					stack.push(Math.trunc(a / b));
					break;
			};
		};
	};

	return stack[0];
};