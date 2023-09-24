/**
 * Clamps a value between a minimum and maximum.
 */
export const clamp = (value: number, min: number, max: number) => {
	return Math.min(Math.max(value, min), max);
};


/**
* Checks whether two values are approximately equal
*/
export const areApproximatelyEqual = (a: number, b: number, diff: number = 5): boolean => {
  return Math.abs(a - b) <= diff;
};