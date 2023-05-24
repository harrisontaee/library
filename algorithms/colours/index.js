/**
 * @param {string} hex hex string
 * @return {number[]} rgb array
 */
export const hexToRgb = (hex) => {
	const rgb = [
		parseInt(hex.substring(1, 3), 16),
		parseInt(hex.substring(3, 5), 16),
		parseInt(hex.substring(5, 7), 16)
	];

  if (hex.length === 9) rgb.push(parseInt(hex.substring(7, 9), 16));
  return rgb;
};



/**
 * @param {number[]} rgb rgb array
 * @return {string} hex string
 */
export const rgbToHex = (rgb) => {
	let hex = '#';

	for (let i = 0; i < Math.min(rgb.length, 4); i++) {
		let hexCode = rgb[i].toString(16);
		if (hexCode.length < 2) hexCode = `0${hexCode}`;
		hex += hexCode;
	};

	return hex;
};