export const dailyTemperatures = (temperatures: number[]): number[] => {
	const result: number[] = Array(temperatures.length).fill(0);
	const decreasing: number[] = [];

	for (let j = 0; j < temperatures.length; j++) {
		let prev = temperatures[decreasing[decreasing.length - 1]];
		let next = temperatures[j];

		while (!!prev && next > prev) {
			const i = decreasing.pop() || 0;
			result[i] = j - i;
			prev = temperatures[decreasing[decreasing.length - 1]];
		};

		decreasing.push(j);
	};

	return result;
};