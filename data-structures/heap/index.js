import {compare as defaultCompare} from "../../utilities";

export class Heap {
	/**
	 * @param {function} [compare] Comparison function (see {@link defaultCompare compare})
	 */
	constructor(compare = defaultCompare) {
		this.heap = [];
		this.compare = compare;
	};



	/**
	 * @return {number} Size of the heap
	 */
	size() {
		return this.heap.length;
	};



	/**
	 * @param {number} parentIndex Index of the parent
	 * @return {number} Index of the left child
	 */
	getLeftChildIndex(parentIndex) {
		return (2 * parentIndex) + 1;
	};



	/**
	 * @param {number} parentIndex Index of the parent
	 * @return {number} Index of the left child
	 */
	getRightChildIndex(parentIndex) {
		return (2 * parentIndex) + 2;
	};



	/**
	 * @param {number} childIndex Index of the child
	 * @return {number} Index of parent
	 */
	getParentIndex(childIndex) {
		return Math.floor((childIndex - 1) / 2);
	};



	/**
	 * @param {number} parentIndex Index of the parent
	 * @return {boolean}
	 */
	hasLeftChild(parentIndex) {
		return this.getLeftChildIndex(parentIndex) < this.heap.length;
	};



	/**
	 * @param {number} parentIndex Index of the parent
	 * @return {boolean}
	 */
	hasRightChild(parentIndex) {
		return this.getRightChildIndex(parentIndex) < this.heap.length;
	};



	/**
	 * @param {number} childIndex Index of the child
	 * @return {boolean}
	 */
	hasParent(childIndex) {
		return this.getParentIndex(childIndex) >= 0;
	};



	/**
	 * @param {number} index Index of the element
	 * @return {*}
	 */
	get(index) {
		return this.heap[index];
	}



	/**
	 * @param {number} parentIndex Index of the parent
	 * @return {*}
	 */
	getLeftChild(parentIndex) {
		return this.get(this.getLeftChildIndex(parentIndex));
	};



	/**
	 * @param {number} parentIndex Index of the parent
	 * @return {*}
	 */
	getRightChild(parentIndex) {
		return this.get(this.getRightChildIndex(parentIndex));
	};



	/**
	 * @param {number} childIndex Index of the child
	 * @return {*}
	 */
	getParent(childIndex) {
		return this.get(this.getParentIndex(childIndex));
	};



	/**
	 * @param {number} indexA Index of the first element
	 * @param {number} indexB Index of the second element
	 */
	swap(indexA, indexB) {
		const temp = this.heap[indexA];
		this.heap[indexA] = this.heap[indexB];
		this.heap[indexB] = temp;
	};



	/**
	 * @param {number} [index] Custom starting index
	 */
	heapifyUp(index) {
		index = index || this.heap.length - 1;
		while (this.hasParent(index) && !this.pairIsInCorrectOrder(this.get(index), this.getParent(index))) {
			this.swap(index, this.getParentIndex(index));
			index = this.getParentIndex(index);
		}
	};



	/**
	 * @param {number} [index] Custom starting index
	 */
	heapifyDown(index = 0) {
		let next = null;
		while (this.hasLeftChild(index)) {
			if (this.hasRightChild(index) && this.pairIsInCorrectOrder(this.getRightChild(index), this.getLeftChild(index))) next = this.getLeftChildIndex(index);
			else next = this.getRightChildIndex(index);

			if (this.pairIsInCorrectOrder(this.get(next), this.get(index))) break;
			this.swap(index, next);
			next = index;
		};
	};




	/**
	 * @param {*} firstItem First item to compare
	 * @param {*} secondItem Second item to compare
	 * @return {boolean}
	 */
	pairIsInCorrectOrder(firstItem, secondItem) {
		if (this.compare(firstItem, secondItem) >= 0) return true;
		return false;
	};



	/**
	 * @param {*} item Item to find
	 * @return {Number[]} Indeces of the item
	 */
	find(item) {
		const indices = [];
		for (let i = 0; i < this.heap.length; i++) {
			if (!this.compare(item, this.get(i))) indices.push(i);
		};

		return indices;
	};




	/**
	 * @param {*} item Item to add
	 * @return {Heap}
	 */
	add(item) {
		this.heap.push(item);
		this.heapifyUp();
		return this;
	};



	/**
	 * @param {*} item Item to remove
	 * @return {Heap}
	 */
	remove(item) {
		while (true) {
			const index = this.find(item).pop();
			if (index === undefined) return this;

			this.heap[index] = this.heap.pop();
			const parent = this.getParent(index);

			if (this.hasLeftChild(index) && (!parent || this.pairIsInCorrectOrder(parent, this.get(index)))) this.heapifyDown(index);
			else this.heapifyUp(index);
		}
	};
};