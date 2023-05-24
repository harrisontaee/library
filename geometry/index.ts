export interface Point {
	x: number;
	y: number;
};





/**
 * @param {number} x center of the circle
 * @param {number} y center of the circle
 */
export interface Circle {
	x: number;
	y: number;
	r: number;
};




/**
 * @param {number} x bottom left corner of the rectangle
 * @param {number} y bottom left corner of the rectangle
 */
export interface Rectangle {
	x: number;
	y: number;
	w: number;
	h: number;
};





export const interpolate = (a: number, b: number, t: number): number => {
	return a + ((b - a) * t);
};





export const distanceBetweenPoints = (a: Point, b: Point): number => {
	return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);
};





export const pointInsideCircle = (point: Point, circle: Circle): boolean => {
	return distanceBetweenPoints(point, circle) <= circle.r;
};





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