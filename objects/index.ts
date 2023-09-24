import {isNully} from "../utilities";

/**
 * Returns true if the value is an array.
 */
export const isArray = (value: any): boolean => {
	return !isNully(value) && Array.isArray(value);
};


/**
 * Returns true if the value is an object
 */
export const isObject = (value: any): boolean => {
	return !isNully(value) && typeof value === "object" && !Array.isArray(value)
};


/**
* Inserts items at a given index
- Also provides a startIndex and endIndex
*/
export const insertItemsAt = <T>(items: T[], into: T[], at: number): T[] => {
	return [...into.slice(0, at), ...items, ...into.slice(at)];
};