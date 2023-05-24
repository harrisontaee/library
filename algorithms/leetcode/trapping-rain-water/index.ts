/**
 * @link https://leetcode.com/problems/trapping-rain-water/
 */
export const trappingRainWater = (height: number[]): number => {
    let l = 0, r = height.length - 1, area = 0;
	 let maxLeft = 0, maxRight = 0;

	 while (l < r) {
		const left = height[l], right = height[r];

		if (left < right) {
			if (left > maxLeft) maxLeft = left;
			else area += maxLeft - left;
			l++;
		} else {
			if (right > maxRight) maxRight = right;
			else area += maxRight - right;
			r--;
		};
	 };

	 return area;
};