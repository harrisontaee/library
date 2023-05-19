/**
 * Point
 * @typedef {Object} Point
 * @property {number} x
 * @property {number} y
 */
/**
 * Segments Intersect
 * @description Given segments s1(p1, p2) and s2(p3, p4), determine if they intersect.
 * @param {Point} p1 segment 1 point 1
 * @param {Point} p2 segment 1 point 2
 * @param {Point} p3 segment 2 point 1
 * @param {Point} p4 segment 2 point 2
 * @return {boolean}
 */
export function segmentsIntersect(p1, p2, p3, p4) {
	let x1 = p1.x,
		 y1 = p1.y,
		 x2 = p2.x,
		 y2 = p2.y,
		 x3 = p3.x,
		 y3 = p3.y,
		 x4 = p4.x,
		 y4 = p4.y;
	// if two largest x values belong to the same line, don't intersect
	if (Math.min(x1, x2) > Math.max(x3, x4)) return false;
	if (Math.min(x3, x4) > Math.max(x1, x2)) return false;
	// if two largest y values belong to the same line, don't intersect
	if (Math.min(y1, y2) > Math.max(y3, y4)) return false;
	if (Math.min(y3, y4) > Math.max(y1, y2)) return false;
	return true;
};