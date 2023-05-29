export const matrixSearch = (matrix: number[][], target: number): boolean => {
	let left = 0, right = matrix.length - 1, row: number[] = [];

	while (left <= right) {
		const mid = Math.floor((left + right) / 2);
		row = matrix[mid];

		if (row[0] === target) return true;
		if (row[row.length - 1] === target) return true;
		if (row[0] > target) {
			right = mid - 1;
			continue;
		} else if (row[row.length - 1] < target) {
			left = mid + 1;
			continue;
		} else break;
	};

	left = 1; right = row.length - 2;

	while (left <= right) {
		const mid = Math.floor((left + right) / 2);

		if (row[mid] === target) return true;
		if (row[mid] > target) right = mid - 1;
		else left = mid + 1;
	};

	return false;
};