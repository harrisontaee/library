import {Heap} from "../../../data-structures/heap";
import {compare as defaultCompare} from "../../../utilities";

/**
 * Heap Sort
 * @param {*[]} array Array to be sorted
 * @param {function} [compare] Comparison function (see {@link defaultCompare compare})
 * @return {*[]}
 * @description
 - Best: nlogn
 - Average: nlogn
 - Worst: nlogn
 - Memory: 1
 */
export function heap(array, compare = defaultCompare) {
	// build max heap
	const heap = new Heap(compare);
	array.forEach(item => heap.add(item));
	// swap and heapify (keeping min/max at index 0)
	const sorted = [];
	while (!!heap.size()) {
		const item = heap.get(0);
		if (heap.size() === 1) {
			sorted.push(item);
			break;
		};
		heap.heap[0] = heap.heap.pop();
		heap.heapifyDown();
		sorted.push(item);
	};

	return sorted;
};
