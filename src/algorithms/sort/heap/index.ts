import {Heap} from "../../../structures";
import {compare as defaultCompare} from "../../../utilities";

/**
 - Best: nlogn
 - Average: nlogn
 - Worst: nlogn
 - Memory: 1
 */
export const heap = (array: any[], compare = defaultCompare) => {
	// build max heap
	const heap = new Heap(compare);
	array.forEach(item => heap.add(item));
	// swap and heapify (keeping min/max at index 0)
	const sorted: any[] = [];
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