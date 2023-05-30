const findMedianOfArray = (nums: number[]): number => {
	const mid = Math.floor(nums.length / 2);
	if (nums.length % 2 !== 0) return nums[mid];
	return (nums[mid] + nums[mid - 1]) / 2;
};





export const findMedianOfTwoSortedArrays = (nums1: number[], nums2: number[]): number => {
	const
		length1 = nums1.length,
		length2 = nums2.length,
		length = length1 + length2,
		partition = Math.ceil(length / 2);

	if (length1 === 0) return findMedianOfArray(nums2);
	if (length2 === 0) return findMedianOfArray(nums1);

	let
		a = nums1,
		b = nums2;
	if (length1 < length2) a = nums2, b = nums1;

	let
		l = 0,
		r = b.length - 1,
		ma = 0,
		mb = 0;

	while (true) {
		mb = Math.floor((l + r) / 2);
		ma = partition - mb - 2;

		if (b[mb + 1] < a[ma]) l = mb + 1;
		else if (a[ma + 1] < b[mb]) r = mb - 1;
		else break;
	};

	const rl = ma < 0
		? b[mb] : mb < 0
		? a[ma] : Math.max(a[ma], b[mb]);
	if (length % 2 !== 0) return rl;
	
	const lr = ma + 1 > a.length - 1
		? b[mb + 1] : mb + 1 > b.length - 1
		? a[ma + 1] : Math.min(a[ma + 1], b[mb + 1]);
		
	return (rl + lr) / 2;
};