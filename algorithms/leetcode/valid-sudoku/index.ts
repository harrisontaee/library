/**
 * @link https://leetcode.com/problems/valid-sudoku/
 */
export const isValidSudoku = (board: string[][]): boolean => { // O(n)
	const rows = [];
	const cols = [];
	const boxs = [];

	for (let row = 0; row < board.length; row++) {
		if (!rows[row]) rows[row] = new Set();

		inner:
		for (let col = 0; col < 9; col++) {
			if (!cols[col]) cols[col] = new Set();
			const num = board[row][col];
			if (num === ".") continue inner;

			if (rows[row].has(num)) return false;
			else rows[row].add(num);

			if (cols[col].has(num)) return false;
			else cols[col].add(num);

			const box = 3 * Math.floor(row / 3) + Math.floor(col / 3);
			if (!boxs[box]) boxs[box] = new Set();
			if (boxs[box].has(num)) return false;
			else boxs[box].add(num);
		}
	}

	return true;
};