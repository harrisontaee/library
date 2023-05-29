export const minEatingSpeed = (nums: number[], h: number): number => {
	let left = 1, right = Math.max(...nums);

	while (left <= right) {
		const k = Math.floor((left + right) / 2);

		let hours = 0;
		for (let num of nums) hours += Math.ceil(num / k);

		if (hours === h) return k;
		else if (hours > h) left = k + 1;
		else right = k - 1
	};

	return -1;
};