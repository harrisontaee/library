/**
 * @typedef {Object} Point
 * @property {number} x
 * @property {number} y
 */
/**
 * @param {number} a
 * @param {number} b
 * @param {number} t 0 >= t <= 1
 * @return {number}
 */
export const interpolate = (a, b, t) => a + ((b - a) * t);





/**
 * @param {Point} a segment 1 point 1
 * @param {Point} b segment 1 point 2
 * @param {Point} c segment 2 point 1
 * @param {Point} d segment 2 point 2
 * @return {Point | null}
 */
export const getSegmentsIntersection = (a, b, c, d) => {
	// Ix => Ax+(Bx-Ax)t = Cx+(Dx-Cx)u
	// Iy => Ay+(By-Ay)t = Cy+(Dy-Cy)u

	// Ix => (Ax-Cx)+(Bx-Ax)t = (Dx-Cx)u
	// Iy => (Ay-Cy)+(By-Ay)t = (Dy-Cy)u
	
	// Iy => (Dx-Cx)(Ay-Cy)+(Dx-Cx)(By-Ay)t = (Dy-Cy)(Dx-Cx)u
	// Iy => (Dx-Cx)(Ay-Cy)+(Dx-Cx)(By-Ay)t = (Dy-Cy)(Ax-Cx)+(Dy-Cy)(Bx-Ax)t

	// Iy => (Dx-Cx)(Ay-Cy)-(Dy-Cy)(Ax-Cx) = (Dy-Cy)(Bx-Ax)t-(Dx-Cx)(By-Ay)t
	// Iy => ((Dx-Cx)(Ay-Cy)-(Dy-Cy)(Ax-Cx))/((Dy-Cy)(Bx-Ax)-(Dx-Cx)(By-Ay)) = t
	
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