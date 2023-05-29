export const largestRectangleInHistogram = (heights: number[]): number => {
	let area = 0;
	let stairs: [number, number][] = []; // [start, height]

	for (let i = 0; i < heights.length; i++) {
		let [start, height] = [i, heights[i]];

		while (stairs.length && height < stairs[stairs.length - 1][1]) {
			const [prevStart, prevHeight] = stairs.pop() || [0, 0];
			area = Math.max(area, prevHeight * (i - prevStart));
			start = prevStart;
		};

		stairs.push([start, height]);
	};

	for (let [start, height] of stairs) {
		area = Math.max(area, height * (heights.length - start));
	};
	
	return area;
};