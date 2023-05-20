/**
 * Point
 * @typedef {Object} Point
 * @property {number} x
 * @property {number} y
 */
/**
 * Get Intersection
 * @description Given segments (a, b) and (c, d), get the intersection.
 * @param {Point} a segment 1 point 1
 * @param {Point} b segment 1 point 2
 * @param {Point} c segment 2 point 1
 * @param {Point} d segment 2 point 2
 * @return {Point | null}
 */
export function getSegmentIntersection(a, b, c, d) {
	// ix: ax + (bx - ax)t = cx + (dx - cx)u
	// iy: ay + (by - ay)t = cy + (dy - cy)u

	// [ix: -cx, iy: -cy]
	// ix: (ax - cx) + (bx - ax)t = (dx - cx)u
	// iy: (ay - cy) + (by - ay)t = (dy - cy)u

	// [iy: *(dx - cx)]
	// iy: (ay - cy)(dy - cy) + (by - ay)(dy - cy)t = (dy - cy)(dx - cx)u

	// [iy: sub (dx - cx)u]
	// iy: (ay - cy)(dy - cy) + (by - ay)(dy - cy)t = (dy - cy)(ax - cx) + (dy - cy)(bx - ax)t;
	
	// [iy: - (ay - cy)(dy - cy) - (dy - cy)(bx - ax)t]
	// iy: t((by - ay)(dy - cy) - (dy - cy)(bx - ax)) = (dy - cy)(ax - cx) - (ay - cy)(dy - cy)

	// [iy: /((by - ay)(dy - cy) - (dy - cy)(bx - ax))]
	// iy: t = ((dy - cy)(ax - cx) - (ay - cy)(dy - cy)) / ((by - ay)(dy - cy) - (dy - cy)(bx - ax))

	const upper = ((d.y - c.y) * (a.x - c.x) - (a.y - c.y) * (d.y - c.y));
	const lower = ((b.y - a.y) * (d.y - c.y) - (d.y - c.y) * (b.x - a.x));

	if (lower === 0) return null;

	const t = upper / lower;
	if (t < 0 || t > 1) return null;
	
	return {
		x: interpolate(a.x, b.x, t),
		y: interpolate(a.y, b.y, t)
	};
};



/**
 * Interpolate
 * @param {number} a
 * @param {number} b
 * @param {number} t 0 >= t <= 1
 * @return {number}
 */
function interpolate(a, b, t) {
	return a + ((b - a) * t);
};