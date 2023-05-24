export interface Point {
	x: number;
	y: number;
};


export const interpolate = (a: number, b: number, t: number): number => a + ((b - a) * t);
export const getSegmentsIntersection = (a: Point, b: Point, c: Point, d: Point) => {
	const tNumerator = ((d.x - c.x) * (a.y - c.y)) - ((d.y - c.y) * (a.x - c.x));
	const uNumerator = ((c.y - a.y) * (a.x - b.x)) - ((c.x - a.x) * (a.y - b.y));
	const denominator = ((d.y - c.y) * (b.x - a.x)) - ((d.x - c.x) * (b.y - a.y));

	if (denominator === 0) return null;

	const t = tNumerator / denominator;
	const u = uNumerator / denominator;

	if (t < 0 || t > 1 || u < 0 || u > 1) return null;

	return {
		x: interpolate(a.x, b.x, t),
		y: interpolate(a.y, b.y, t)
	};
};