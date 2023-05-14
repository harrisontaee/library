const hex = {
	arr: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"],
	obj: {
		"0": 0,
		"1": 1,
		"2": 2,
		"3": 3,
		"4": 4,
		"5": 5,
		"6": 6,
		"7": 7,
		"8": 8,
		"9": 9,
		"A": 10,
		"B": 11,
		"C": 12,
		"D": 13,
		"E": 14,
		"F": 15
	}
};

/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
function encode(strs) {
	let code = "";
	for (let str of strs) {
		for (let char of str) {
			let ascii = char.charCodeAt(0);
			let char1 = Math.floor(ascii / 16);
			let char2 = ascii - (char1 * 16);
			code += hex.arr[char1] + hex.arr[char2];
		};
		code += "#";
	};
	return code.slice(0, -1);
};



/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
function decode(s) {
	const words = [];
	const strs = s.split("#");
	for (let str of strs) {
		let asciis = [];
		for (let i = 0; i < str.length; i += 2) asciis.push((16 * (hex.obj[str[i]])) + (hex.obj[str[i + 1]]));
		words.push(String.fromCharCode(...asciis));
	};
	return words;
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */
