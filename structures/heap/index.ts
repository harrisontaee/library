import {compare as defaultCompare} from "../../utilities";

export class Heap {
	heap: any[];
	compare: (a: any, b: any) => number;


	constructor(compare = defaultCompare) {
		this.heap = [];
		this.compare = compare;
	};


	size = (): number => this.heap.length;
	getLeftChildIndex = (parentIndex: number): number => (2 * parentIndex) + 1;
	getRightChildIndex = (parentIndex: number): number => (2 * parentIndex) + 2;
	getParentIndex = (childIndex: number): number => Math.floor((childIndex - 1) / 2);
	hasLeftChild = (parentIndex: number): boolean => this.getLeftChildIndex(parentIndex) < this.heap.length;
	hasRightChild = (parentIndex: number): boolean => this.getRightChildIndex(parentIndex) < this.heap.length;
	hasParent = (childIndex: number): boolean => this.getParentIndex(childIndex) >= 0;
	

	get = (index: number): any => this.heap[index];
	getLeftChild = (parentIndex: number) => this.get(this.getLeftChildIndex(parentIndex));
	getRightChild = (parentIndex: number) => this.get(this.getRightChildIndex(parentIndex));
	getParent = (childIndex: number) => this.get(this.getParentIndex(childIndex));


	swap = (indexA: number, indexB: number) => {
		const temp = this.heap[indexA];
		this.heap[indexA] = this.heap[indexB];
		this.heap[indexB] = temp;
	};


	heapifyUp = (index?: number) => {
		index = index || this.heap.length - 1;
		while (this.hasParent(index) && !this.pairIsInCorrectOrder(this.get(index), this.getParent(index))) {
			this.swap(index, this.getParentIndex(index));
			index = this.getParentIndex(index);
		}
	};


	heapifyDown = (index: number = 0) => {
		let next: number | null = null;
		while (this.hasLeftChild(index)) {
			if (this.hasRightChild(index) && this.pairIsInCorrectOrder(this.getRightChild(index), this.getLeftChild(index))) next = this.getLeftChildIndex(index);
			else next = this.getRightChildIndex(index);
			if (this.pairIsInCorrectOrder(this.get(next), this.get(index))) break;
			this.swap(index, next);
			next = index;
		};
	};


	pairIsInCorrectOrder = (firstItem: any, secondItem: any): boolean => {
		if (this.compare(firstItem, secondItem) >= 0) return true;
		return false;
	};


	find = (item: any): number[] => {
		const indices = [];
		for (let i = 0; i < this.heap.length; i++) {
			if (!this.compare(item, this.get(i))) indices.push(i);
		};

		return indices;
	};


	add = (item: any) => {
		this.heap.push(item);
		this.heapifyUp();
		return this;
	};



	remove = (item: any) => {
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