import {clamp} from "../numbers";

const RGB_REGEX = /^rgba?\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})(?:, \s*([10](?:\.\d+)?))?\)/;
const HEX_REGEX = /^#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})(?:([a-fA-F0-9]{2}))?$/;


/**
 * Checks is string is in hex format
 */
export const checkIsHex = (str: string): boolean => {
	return HEX_REGEX.test(str);
};



/**
 * Checks is string is in rgb format
 */
export const checkIsRgb = (str: string): boolean => {
	return RGB_REGEX.test(str);
};



/**
 * Converts a number to a hex string
 */
export const parseHex = (value: string | number): string => {
	const rgb = parseRgb(value);
	return rgb < 16 ? `0${rgb.toString(16)}` : rgb.toString(16);
};



/**
 * Converts a hex value to an rgb number
 */
export const parseRgb = (value: number | string): number => {
	return clamp(Math.round(typeof value === "number" ? value : parseInt(value, 16)), 0, 255);
};



/**
* Builds a hex value from rgb values
*/
export const buildHex = (r: number | string, g: number | string, b: number | string, a?: number | string): string => {
	const hex = "#" + parseHex(r) + parseHex(g) + parseHex(b);
	switch (typeof a) {
		case "number":
			if (a >= 1) return hex;
			return hex + parseHex(a * 255);
		case "string":
			return hex + parseHex(a);
		default:
			return hex;
	};
};


/**
* Builds an rgb value from hex or rgb values
*/
export const buildRgb = (r: string | number, g: string | number, b: string | number, a?: string | number): string => {
	const rgb = `${parseRgb(r)}, ${parseRgb(g)}, ${parseRgb(b)}`;
	return (a === undefined || typeof a === "number" && a >= 1) 
		? `rgb(${rgb})`
		: `rgba(${rgb}, ${clamp(typeof a === "number" ? a : parseRgb(a) / 255, 0, 1)})`;
};


/**
 * Converts a string in rgb or hex format to an rgba array
 */
export const toRgbaArray = (str: string): null | number[] => {
	let rgba = str.match(RGB_REGEX);
	let isRgb = !!rgba;
	if (!rgba) rgba = str.match(HEX_REGEX);
	if (!rgba) return null;
	const [_, r, g, b, a] = rgba;
	return [
		clamp(Math.round(parseInt(r, isRgb ? 10 : 16)), 0, 255),
		clamp(Math.round(parseInt(g, isRgb ? 10 : 16)), 0, 255),
		clamp(Math.round(parseInt(b, isRgb ? 10 : 16)), 0, 255),
		!a ? 1 : clamp(isRgb ? parseInt(a) : parseInt(a, 16) / 255, 0, 1),
	];
};


/**
 * Converts an rgb value to a hex string
 */
export const rgbToHex = (rgb: string): string | null => {
	const rgba = rgb.match(RGB_REGEX);
	if (!rgba) return null;
	const [_, r, g, b, a] = rgba;
	return buildHex(r, g, b, a);
};


/**
 * Converts a hex value to an rgb string
 */
export const hexToRgb = (hex: string): string | null => {
	const rgba = hex.match(HEX_REGEX);
	if (!rgba) return null;
	const [_, r, g, b, a] = rgba;
	return buildRgb(r, g, b, a);
};


/**
 * Builds a gradient between two colours
 * @param start first colour
 * @param end second colour
 * @param colourCount number of colours to return (includes start and end)
 * @param toRgb whether to return colours in rgb format (defaults to hex)
 * @returns colours list of colours in steps between x and y
 */
export const buildGradient = (
	start: string,
	end: string,
	colourCount: number,
	toRgb: boolean = false
): string[] | null => {
	if (colourCount < 2) return null;
	const startRgba = toRgbaArray(start);
	const endRgba = toRgbaArray(end);
	if (!startRgba || !endRgba) return null;

	const [startR, startG, startB, startA] = startRgba;
	const [endR, endG, endB, endA] = endRgba;

	const middleColourCount = colourCount - 2;
	const alphaStep = middleColourCount == 0 ? 0 : 1 / (middleColourCount + 1);
	const opacityStep = middleColourCount == 0 ? 0 : ((endA * 100) - (startA * 100)) / (middleColourCount + 1);

	let alpha = 0;
	let opacity = startA;
	const colours: string[] = [];

	const addColour = (r: number, g: number, b: number, a: number) => {
		colours.push(toRgb ? buildRgb(r, g, b, a) : buildHex(r, g, b, a));
	};

	addColour(startR, startG, startB, startA);
	for (let i = 0; i < middleColourCount; i++) {
		alpha += alphaStep;
		opacity += opacityStep;
		addColour(
			(endR * alpha) + startR * (1 - alpha),
			(endG * alpha) + startG * (1 - alpha),
			(endB * alpha) + startB * (1 - alpha),
			opacity);
	};

	addColour(endR, endG, endB, endA);
	return colours;
};