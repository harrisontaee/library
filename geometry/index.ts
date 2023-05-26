export interface Point {
	x: number;
	y: number;
};





/**
 * @param {number} x center of the circle
 * @param {number} y center of the circle
 * @param {number} r radius of the circle
 */
export interface Circle extends Point {
	r: number;
};





/**
 * @param {number} x top left corner of the rectangle
 * @param {number} y top left corner of the rectangle
 * @param {number} w width of the rectangle
 * @param {number} h height of the rectangle
 */
export interface Rectangle extends Point {
	w: number;
	h: number;
};




export type Segment = [Point, Point];





export const interpolate = (a: number, b: number, t: number): number => {
	return a + ((b - a) * t);
};





export const distanceBetweenPoints = (p1: Point, p2: Point): number => {
	return Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
};





export const pointInsideCircle = (p: Point, c: Circle): boolean => {
	return distanceBetweenPoints(p, c) <= c.r;
};




export const pointInsideRectangle = (p: Point, r: Rectangle): boolean => (
	p.x >= r.x &&
	p.x <= r.x + r.w &&
	p.y >= r.y &&
	p.y <= r.y + r.h
);





/**
 * @returns {Point | null} the intersection point between the two segments or null if they don't intersect
 */
export const getSegmentsIntersection = (s1: Segment, s2: Segment): Point | null => {
	const [a, b] = s1,
			[c, d] = s2;

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





export const getDistanceBetweenSegmentAndPoint = (s: Segment, p: Point): number => {
	const [a, b] = s;
	const t = -(((a.x - p.x) * (b.x - a.x)) + ((b.y - a.y) * (a.y - p.y))) / (((b.y - a.y) ** 2) + ((b.x - a.x) ** 2));
	console.log("t:", t);
	const i = {
		x: a.x + (b.x - a.x) * t,
		y: a.y + (b.y - a.y) * t
	};
	if (t >= 0 && t <= 1) return distanceBetweenPoints(i, p);
	return Math.min(
		distanceBetweenPoints(a, p),
		distanceBetweenPoints(b, p)
	);
};